import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { doctors } from "@/lib/mock-data";
import { Star, MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/doctors")({
  head: () => ({ meta: [{ title: "Find a Doctor — Meridian Health" }, { name: "description", content: "Browse verified clinicians by specialty." }] }),
  component: DoctorsPage,
});

const specialties = ["All", ...Array.from(new Set(doctors.map(d => d.specialty)))];

function DoctorsPage() {
  const [q, setQ] = useState("");
  const [spec, setSpec] = useState("All");

  const filtered = useMemo(() => doctors.filter(d => {
    const matchesQ = (d.name + d.specialty + d.city).toLowerCase().includes(q.toLowerCase());
    const matchesS = spec === "All" || d.specialty === spec;
    return matchesQ && matchesS;
  }), [q, spec]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <SectionHeader eyebrow="Care team" title="Find the right clinician." description="Search across specialties and locations. Every provider is verified and reviewed by patients." />

      <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search by name, specialty or city" value={q} onChange={e => setQ(e.target.value)} className="pl-9" />
        </div>
        <div className="flex flex-wrap gap-2">
          {specialties.map(s => (
            <button key={s} onClick={() => setSpec(s)}
              className={`rounded-full border px-3 py-1.5 text-xs transition ${spec === s ? "border-teal bg-gradient-tide text-deep-foreground" : "border-border hover:bg-secondary"}`}>{s}</button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map(d => (
          <article key={d.id} className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:shadow-elegant">
            <div className="flex items-start gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-tide font-display text-xl text-deep-foreground">
                {d.name.split(" ").slice(-1)[0][0]}
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-lg">{d.name}</h3>
                <div className="text-sm text-teal">{d.specialty}</div>
                <div className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" /> {d.city}
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{d.bio}</p>
            <div className="mt-4 flex items-center justify-between text-xs">
              <span className="inline-flex items-center gap-1 font-medium">
                <Star className="h-3.5 w-3.5 fill-warning text-warning" /> {d.rating} <span className="text-muted-foreground">({d.reviews})</span>
              </span>
              <span className="text-muted-foreground">Next: {d.nextAvailable}</span>
            </div>
            <Button className="mt-5 bg-gradient-deep text-deep-foreground hover:opacity-90">Book appointment</Button>
          </article>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full rounded-xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
            No clinicians match those filters.
          </div>
        )}
      </div>
    </div>
  );
}
