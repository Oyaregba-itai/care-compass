import { Activity } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-tide text-deep-foreground">
              <Activity className="h-4 w-4" />
            </span>
            <span className="font-display text-lg">Meridian<span className="text-teal">Health</span></span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Modern, connected care. Book visits, message clinicians, manage prescriptions and your full medical record — all in one place.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Platform</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Dashboard</li><li>Telemedicine</li><li>Records</li><li>Prescriptions</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>About</li><li>Privacy & HIPAA</li><li>Security</li><li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Meridian Health. For demo purposes only — not a substitute for medical advice.
      </div>
    </footer>
  );
}
