interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}
export function SectionHeader({ eyebrow, title, description, align = "left" }: Props) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-widest text-teal">
          <span className="h-1.5 w-1.5 rounded-full bg-teal" /> {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-display text-3xl text-balance md:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-muted-foreground">{description}</p>}
    </div>
  );
}
