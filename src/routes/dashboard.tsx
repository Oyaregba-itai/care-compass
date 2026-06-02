import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Activity, CalendarClock, FileText, MessageSquare, Pill, TrendingUp, ArrowUpRight } from "lucide-react";
import { appointments, prescriptions, messages, vitals, heartRateSeries, records } from "@/lib/mock-data";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — Meridian Health" }, { name: "description", content: "Your personal health dashboard." }] }),
  component: Dashboard,
});

function Sparkline({ data }: { data: number[] }) {
  const max = Math.max(...data), min = Math.min(...data);
  const pts = data.map((v, i) => `${(i / (data.length - 1)) * 100},${100 - ((v - min) / (max - min)) * 100}`).join(" ");
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-20 w-full">
      <defs>
        <linearGradient id="sg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--teal)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--teal)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline points={pts} fill="none" stroke="var(--teal)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      <polygon points={`0,100 ${pts} 100,100`} fill="url(#sg)" />
    </svg>
  );
}

function Dashboard() {
  const upcoming = appointments.filter(a => a.status === "Upcoming");
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-teal">Tuesday, June 2</span>
          <h1 className="mt-2 font-display text-4xl">Good morning, Sarah.</h1>
          <p className="mt-1 text-muted-foreground">Here's a calm overview of your health today.</p>
        </div>
        <Link to="/appointments" className="inline-flex items-center gap-2 rounded-md bg-gradient-deep px-4 py-2 text-sm text-deep-foreground shadow-soft hover:opacity-90">
          <CalendarClock className="h-4 w-4" /> Book a visit
        </Link>
      </div>

      {/* Vitals */}
      <div className="mt-8 grid gap-4 md:grid-cols-4">
        {vitals.map((v, i) => (
          <motion.div key={v.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
            className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <div className="flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
              <span>{v.label}</span>
              <TrendingUp className="h-3.5 w-3.5 text-teal" />
            </div>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="font-display text-3xl">{v.value}</span>
              <span className="text-xs text-muted-foreground">{v.unit}</span>
            </div>
            <div className="mt-1 text-xs text-success">{v.trend}</div>
          </motion.div>
        ))}
      </div>

      {/* Heart rate chart + upcoming */}
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-display text-xl">Heart rate · last 24h</h3>
              <p className="text-sm text-muted-foreground">Resting average 72 bpm</p>
            </div>
            <Activity className="h-5 w-5 text-teal" />
          </div>
          <div className="mt-4"><Sparkline data={heartRateSeries} /></div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-xl">Upcoming</h3>
            <Link to="/appointments" className="text-xs text-teal hover:underline">View all</Link>
          </div>
          <ul className="mt-4 space-y-4">
            {upcoming.slice(0, 3).map(a => (
              <li key={a.id} className="flex items-start justify-between gap-3 border-b border-border pb-3 last:border-0 last:pb-0">
                <div>
                  <div className="text-sm font-semibold">{a.doctor}</div>
                  <div className="text-xs text-muted-foreground">{a.specialty} · {a.mode}</div>
                </div>
                <div className="text-right text-xs">
                  <div className="font-medium">{a.date}</div>
                  <div className="text-muted-foreground">{a.time}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Quick lists */}
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <QuickList title="Active prescriptions" icon={Pill} to="/prescriptions" items={prescriptions.map(p => ({ title: `${p.name} ${p.dosage}`, sub: `${p.frequency} · ${p.refillsLeft} refills` }))} />
        <QuickList title="Recent records" icon={FileText} to="/records" items={records.slice(0,3).map(r => ({ title: r.type, sub: `${r.date} · ${r.provider}` }))} />
        <QuickList title="Messages" icon={MessageSquare} to="/messages" items={messages.slice(0,3).map(m => ({ title: m.from, sub: m.subject }))} />
      </div>
    </div>
  );
}

function QuickList({ title, icon: Icon, to, items }: { title: string; icon: any; to: string; items: { title: string; sub: string }[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-secondary text-primary"><Icon className="h-4 w-4" /></span>
          <h3 className="font-display text-lg">{title}</h3>
        </div>
        <Link to={to} className="text-xs text-teal hover:underline inline-flex items-center gap-1">Open <ArrowUpRight className="h-3 w-3" /></Link>
      </div>
      <ul className="mt-4 space-y-3">
        {items.map((it, i) => (
          <li key={i} className="border-b border-border pb-3 last:border-0 last:pb-0">
            <div className="text-sm font-medium">{it.title}</div>
            <div className="text-xs text-muted-foreground">{it.sub}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
