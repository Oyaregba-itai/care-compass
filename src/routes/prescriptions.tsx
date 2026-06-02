import { createFileRoute } from "@tanstack/react-router";
import { prescriptions } from "@/lib/mock-data";
import { Pill, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/prescriptions")({
  head: () => ({ meta: [{ title: "Prescriptions — Meridian Health" }] }),
  component: PrescriptionsPage,
});

function PrescriptionsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <SectionHeader eyebrow="Pharmacy" title="Active prescriptions." description="Request refills and route them to your pharmacy in one tap." />

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {prescriptions.map(p => (
          <article key={p.id} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-tide text-deep-foreground"><Pill className="h-4 w-4" /></span>
                <div>
                  <h3 className="font-display text-lg">{p.name} <span className="text-teal text-sm">{p.dosage}</span></h3>
                  <div className="text-xs text-muted-foreground">Prescribed by {p.prescriber}</div>
                </div>
              </div>
              <span className="rounded-full bg-secondary px-3 py-1 text-xs">{p.refillsLeft} refills</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{p.frequency}</p>
            <div className="mt-4 flex gap-2">
              <Button size="sm" className="bg-gradient-deep text-deep-foreground hover:opacity-90"><RefreshCw className="mr-1 h-3 w-3" /> Request refill</Button>
              <Button size="sm" variant="outline">Details</Button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
