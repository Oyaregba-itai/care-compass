import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { messages } from "@/lib/mock-data";
import { Send, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/messages")({
  head: () => ({ meta: [{ title: "Messages — Meridian Health" }, { name: "description", content: "Secure messages with your care team." }] }),
  component: MessagesPage,
});

const thread = [
  { id: 1, me: false, text: "Hi Sarah — your lab panel looks great overall. Cholesterol is down 12% since March.", time: "10:14 AM" },
  { id: 2, me: true, text: "That's great news! Anything I should change in my routine?", time: "10:18 AM" },
  { id: 3, me: false, text: "Keep doing what you're doing. Let's revisit in 6 months. I'll send a calendar invite.", time: "10:21 AM" },
];

function MessagesPage() {
  const [selected, setSelected] = useState(messages[0].id);
  const [text, setText] = useState("");

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <SectionHeader eyebrow="Inbox" title="Secure messages with your care team." />

      <div className="mt-8 grid h-[640px] overflow-hidden rounded-2xl border border-border bg-card shadow-soft md:grid-cols-[320px_1fr]">
        <aside className="border-r border-border bg-surface">
          <div className="border-b border-border p-4">
            <Input placeholder="Search messages" />
          </div>
          <ul>
            {messages.map(m => (
              <li key={m.id}>
                <button onClick={() => setSelected(m.id)}
                  className={`w-full border-b border-border px-4 py-4 text-left transition ${selected === m.id ? "bg-card" : "hover:bg-card/50"}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">{m.from}</span>
                    <span className="text-[10px] text-muted-foreground">{m.time}</span>
                  </div>
                  <div className="mt-0.5 text-xs font-medium">{m.subject}</div>
                  <div className="mt-1 line-clamp-1 text-xs text-muted-foreground">{m.preview}</div>
                  {m.unread && <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-teal" />}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <section className="flex flex-col">
          <div className="border-b border-border px-6 py-4">
            <div className="font-display text-lg">Dr. Amelia Hart</div>
            <div className="text-xs text-muted-foreground">Cardiology · usually replies within a few hours</div>
          </div>
          <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
            {thread.map(t => (
              <div key={t.id} className={`flex ${t.me ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-md rounded-2xl px-4 py-3 text-sm shadow-soft ${
                  t.me ? "bg-gradient-deep text-deep-foreground rounded-br-sm" : "bg-secondary text-foreground rounded-bl-sm"
                }`}>
                  <p>{t.text}</p>
                  <div className={`mt-1 text-[10px] ${t.me ? "text-deep-foreground/70" : "text-muted-foreground"}`}>{t.time}</div>
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={e => { e.preventDefault(); setText(""); }} className="border-t border-border p-4">
            <div className="flex items-center gap-2 rounded-xl border border-border bg-background p-2">
              <Button type="button" variant="ghost" size="icon"><Paperclip className="h-4 w-4" /></Button>
              <Input value={text} onChange={e => setText(e.target.value)} placeholder="Write a secure message…" className="border-0 focus-visible:ring-0 shadow-none" />
              <Button type="submit" className="bg-gradient-deep text-deep-foreground hover:opacity-90"><Send className="h-4 w-4" /></Button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
