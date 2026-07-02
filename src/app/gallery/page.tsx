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
        subtitle="Screenshots, architecture drawings, and UI previews from my internship projects."
      />
      <Section>
        {gallery.length === 0 ? (
          <div className="card grid place-items-center px-6 py-20 text-center">
            <ImageIcon className="text-muted" size={32} />
            <p className="mt-4 font-semibold">Nothing here yet</p>
            <p className="mt-1 max-w-md text-sm text-muted">
              Real screenshots and diagrams will show up here as my projects produce them.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.05}>
                <figure className="card overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={g.src} alt={g.title} className="aspect-video w-full object-cover" />
                  <figcaption className="p-4">
                    <p className="font-semibold">{g.title}</p>
                    <p className="mt-1 text-sm text-muted">{g.caption}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
