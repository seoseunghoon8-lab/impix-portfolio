import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { PageHeader, Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk"
        subtitle="Recruiting, collaboration, or just a question about a project — reach out."
      />
      <Section className="max-w-3xl">
        <div className="grid gap-8 sm:grid-cols-[1fr_1.2fr]">
          <Reveal className="space-y-3">
            <a href={`mailto:${site.email}`} className="card flex items-center gap-3 p-4 transition-colors hover:border-accent/50">
              <Mail className="text-accent" size={18} />
              <span className="text-sm">{site.email}</span>
            </a>
            <a href={site.github} target="_blank" rel="noreferrer" className="card flex items-center gap-3 p-4 transition-colors hover:border-accent/50">
              <GithubIcon className="text-accent" size={18} />
              <span className="text-sm">GitHub</span>
            </a>
            {site.linkedin && (
              <a href={site.linkedin} target="_blank" rel="noreferrer" className="card flex items-center gap-3 p-4 transition-colors hover:border-accent/50">
                <LinkedinIcon className="text-accent" size={18} />
                <span className="text-sm">LinkedIn</span>
              </a>
            )}
          </Reveal>

          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
