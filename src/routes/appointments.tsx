import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { appointments, doctors } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Calendar, Video, MapPin, Check } from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/appointments")({
  head: () => ({ meta: [{ title: "Appointments — Meridian Health" }, { name: "description", content: "View and book your medical appointments." }] }),
  component: AppointmentsPage,
});

const slots = ["8:30 AM", "9:00 AM", "10:30 AM", "11:15 AM", "1:00 PM", "2:30 PM", "3:45 PM", "4:30 PM"];
const days = ["Mon 02", "Tue 03", "Wed 04", "Thu 05", "Fri 06", "Sat 07"];

function AppointmentsPage() {
  const [doctor, setDoctor] = useState(doctors[0].id);
  const [day, setDay] = useState(days[2]);
  const [slot, setSlot] = useState<string | null>(null);
  const [booked, setBooked] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <SectionHeader eyebrow="Appointments" title="Schedule your next visit." description="Pick a clinician, day and time. Confirmation arrives instantly." />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
        {/* Booking */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <h3 className="font-display text-lg">1. Choose a clinician</h3>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {doctors.slice(0, 4).map(d => (
              <button key={d.id} onClick={() => setDoctor(d.id)}
                className={`flex items-center justify-between rounded-xl border p-3 text-left transition ${doctor === d.id ? "border-teal bg-secondary" : "border-border hover:bg-secondary/60"}`}>
                <div>
                  <div className="text-sm font-semibold">{d.name}</div>
                  <div className="text-xs text-muted-foreground">{d.specialty} · {d.city}</div>
                </div>
                {doctor === d.id && <Check className="h-4 w-4 text-teal" />}
              </button>
            ))}
          </div>

          <h3 className="mt-8 font-display text-lg">2. Pick a day</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {days.map(d => (
              <button key={d} onClick={() => setDay(d)}
                className={`rounded-lg border px-4 py-2 text-sm transition ${day === d ? "border-teal bg-gradient-tide text-deep-foreground" : "border-border hover:bg-secondary"}`}>{d}</button>
            ))}
          </div>

          <h3 className="mt-8 font-display text-lg">3. Pick a time</h3>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {slots.map(s => (
              <button key={s} onClick={() => setSlot(s)}
                className={`rounded-lg border px-3 py-2 text-sm transition ${slot === s ? "border-teal bg-secondary text-foreground" : "border-border hover:bg-secondary"}`}>{s}</button>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
            <div className="text-sm text-muted-foreground">
              {slot ? `Selected: ${day} at ${slot}` : "Select a time slot to continue."}
            </div>
            <Button disabled={!slot} onClick={() => setBooked(true)} className="bg-gradient-deep text-deep-foreground hover:opacity-90">Confirm booking</Button>
          </div>

          {booked && (
            <div className="mt-4 rounded-lg border border-success/40 bg-success/10 px-4 py-3 text-sm text-success">
              ✓ Appointment confirmed. A reminder has been sent to your email.
            </div>
          )}
        </div>

        {/* Upcoming */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h3 className="font-display text-lg">Your appointments</h3>
            <ul className="mt-4 space-y-4">
              {appointments.map(a => (
                <li key={a.id} className="border-b border-border pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">{a.doctor}</div>
                    <span className={`rounded-full px-2 py-0.5 text-[10px] uppercase tracking-widest ${
                      a.status === "Upcoming" ? "bg-teal/15 text-teal" :
                      a.status === "Completed" ? "bg-success/15 text-success" : "bg-muted text-muted-foreground"
                    }`}>{a.status}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">{a.specialty}</div>
                  <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" />{a.date} · {a.time}</span>
                    <span className="inline-flex items-center gap-1">
                      {a.mode === "Video" ? <Video className="h-3 w-3" /> : <MapPin className="h-3 w-3" />}{a.mode}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
