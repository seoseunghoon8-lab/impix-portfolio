import type { Metadata } from "next";
import { ImageIcon } from "lucide-react";
import { PageHeader, Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { gallery } from "@/data/gallery";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Screens & diagrams"
        subtitle="Screenshots, architecture drawings, and UI previews from internship projects. Placeholders for now — real captures land here as projects ship."
      />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05}>
              <figure className="card overflow-hidden">
                <div className={`flex aspect-video items-center justify-center bg-gradient-to-br ${g.gradient}`}>
                  <ImageIcon className="text-foreground/40" size={30} />
                </div>
                <figcaption className="p-4">
                  <p className="font-semibold">{g.title}</p>
                  <p className="mt-1 text-sm text-muted">{g.caption}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
