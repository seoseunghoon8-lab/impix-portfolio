"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${name || "someone"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}${email ? ` (${email})` : ""}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  const field =
    "w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm outline-none transition-colors focus:border-accent/60";

  return (
    <form onSubmit={onSubmit} className="card space-y-4 p-6">
      <div>
        <label className="mb-1.5 block text-sm font-medium">Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} required className={field} placeholder="Your name" />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium">Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className={field} placeholder="you@example.com" />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium">Message</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={5} className={`${field} resize-none`} placeholder="What's on your mind?" />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-2 px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
      >
        <Send size={16} /> Send message
      </button>
      <p className="text-center text-xs text-muted">Opens your email client, pre-filled.</p>
    </form>
  );
}
