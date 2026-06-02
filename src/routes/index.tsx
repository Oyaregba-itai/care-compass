import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, CalendarCheck, MessageSquare, FileHeart, Pill, Stethoscope, ShieldCheck, Activity, Sparkles } from "lucide-react";
import hero from "@/assets/hero-doctor.jpg";
import ecg from "@/assets/pattern-ecg.jpg";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meridian Health — Connected care for modern life" },
      { name: "description", content: "Book visits, video-chat with clinicians, manage prescriptions, and own your medical record." },
      { property: "og:title", content: "Meridian Health" },
      { property: "og:description", content: "Connected care for modern life." },
    ],
  }),
  component: Index,
});

const features = [
  { icon: CalendarCheck, title: "Smart scheduling", body: "Find the next available slot with the right specialist in seconds." },
  { icon: Stethoscope, title: "Telemedicine visits", body: "High-quality video consultations with end-to-end encryption." },
  { icon: FileHeart, title: "Unified health record", body: "Labs, imaging, notes and vitals — one timeline you actually own." },
  { icon: Pill, title: "Prescription refills", body: "Request, renew, and route prescriptions to your pharmacy in one tap." },
  { icon: MessageSquare, title: "Secure messaging", body: "Talk to your care team between visits, with full HIPAA compliance." },
  { icon: Activity, title: "Vitals & wearables", body: "Sync heart rate, sleep and activity to share with your provider." },
];

const specialties = ["Cardiology","Dermatology","Pediatrics","Endocrinology","Neurology","Orthopedics","Mental Health","Primary Care"];

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-mist" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs uppercase tracking-widest text-teal">
              <Sparkles className="h-3 w-3" /> New · AI symptom triage
            </span>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] text-balance md:text-6xl">
              Connected care, <em className="text-teal not-italic">measured in moments.</em>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              Meridian brings appointments, records, prescriptions and your clinicians into one calm, modern workspace — for patients and providers alike.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gradient-deep text-deep-foreground shadow-elegant hover:opacity-90">
                <Link to="/appointments">Book a visit <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/dashboard">Open dashboard</Link>
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-teal" /> HIPAA compliant</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-teal" /> SOC 2 Type II</div>
              <div className="hidden md:flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-teal" /> ISO 27001</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-tide opacity-20 blur-3xl" />
            <div className="overflow-hidden rounded-2xl border border-border shadow-elegant">
              <img src={hero} alt="Clinician using a tablet in a modern clinic" width={1600} height={1200} className="h-full w-full object-cover" />
            </div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -left-6 hidden w-64 rounded-xl border border-border bg-card p-4 shadow-elegant md:block">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Today</div>
              <div className="mt-1 font-display text-lg">Video visit · 10:30</div>
              <div className="text-sm text-muted-foreground">Dr. Amelia Hart · Cardiology</div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                <div className="h-full w-2/3 rounded-full bg-gradient-tide" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden bg-border md:grid-cols-4">
          {[
            { k: "1.2M+", v: "Patients served" },
            { k: "4,800", v: "Verified clinicians" },
            { k: "98%", v: "Visit satisfaction" },
            { k: "<5 min", v: "Avg. response time" },
          ].map((s) => (
            <div key={s.v} className="bg-surface px-6 py-8 text-center">
              <div className="font-display text-3xl text-deep md:text-4xl">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader eyebrow="Platform" title="Everything care teams need, nothing they don't." description="A single integrated surface for patients, clinicians and staff — built on principles of clarity, privacy, and trust." />
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group bg-card p-7 transition-colors hover:bg-surface">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-gradient-tide group-hover:text-deep-foreground">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-xl">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SPECIALTIES */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Specialties" title="Care across 40+ specialties." />
          <div className="mt-10 flex flex-wrap gap-2">
            {specialties.map((s) => (
              <span key={s} className="rounded-full border border-border bg-card px-4 py-2 text-sm shadow-soft">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto my-24 max-w-7xl overflow-hidden rounded-3xl border border-border px-6 py-20 text-center shadow-elegant">
        <img src={ecg} alt="" aria-hidden className="absolute inset-0 -z-10 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 -z-10 bg-gradient-deep opacity-90" />
        <h2 className="mx-auto max-w-2xl font-display text-4xl text-deep-foreground md:text-5xl">Care that meets you where you are.</h2>
        <p className="mx-auto mt-4 max-w-xl text-deep-foreground/80">Join Meridian and take the next step toward calmer, clearer healthcare.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90"><Link to="/appointments">Book a visit</Link></Button>
          <Button asChild size="lg" variant="outline" className="border-deep-foreground/40 bg-transparent text-deep-foreground hover:bg-deep-foreground/10 hover:text-deep-foreground"><Link to="/doctors">Browse doctors</Link></Button>
        </div>
      </section>
    </div>
  );
}
