import { createFileRoute } from "@tanstack/react-router";
import { records, prescriptions } from "@/lib/mock-data";
import { FileText, Pill, Download } from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/records")({
  head: () => ({ meta: [{ title: "Medical Records — Meridian Health" }, { name: "description", content: "Your complete medical history in one timeline." }] }),
  component: RecordsPage,
});

function RecordsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <SectionHeader eyebrow="Medical record" title="Your complete health history." description="Labs, imaging, visit notes and vaccinations — collected in one calm timeline you own." />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="rounded-2xl border border-border bg-card shadow-soft">
          <div className="border-b border-border px-6 py-4">
            <h3 className="font-display text-lg">Timeline</h3>
          </div>
          <ol className="relative">
            {records.map((r, i) => (
              <li key={r.id} className="relative flex gap-5 px-6 py-5 border-b border-border last:border-0">
                <div className="flex flex-col items-center">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-tide text-deep-foreground">
                    <FileText className="h-4 w-4" />
                  </span>
                  {i < records.length - 1 && <span className="mt-2 w-px flex-1 bg-border" />}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="font-display text-base">{r.type}</div>
                    <span className="text-xs text-muted-foreground">{r.date}</span>
                  </div>
                  <div className="text-xs text-teal">{r.provider}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{r.summary}</p>
                  <Button variant="ghost" size="sm" className="mt-2 -ml-2 text-xs"><Download className="mr-1 h-3 w-3" /> PDF</Button>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <h4 className="font-display text-lg">Allergies</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex justify-between"><span>Penicillin</span><span className="text-destructive">Severe</span></li>
              <li className="flex justify-between"><span>Pollen</span><span className="text-warning">Mild</span></li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <h4 className="font-display text-lg flex items-center gap-2"><Pill className="h-4 w-4 text-teal" /> Current meds</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {prescriptions.map(p => (
                <li key={p.id}>
                  <div className="font-medium">{p.name} {p.dosage}</div>
                  <div className="text-xs text-muted-foreground">{p.frequency}</div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
