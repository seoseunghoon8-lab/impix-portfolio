import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="glow-grid grid min-h-[70vh] place-items-center px-5 text-center">
      <div>
        <p className="text-7xl font-extrabold text-gradient">404</p>
        <h1 className="mt-4 text-2xl font-bold">Page not found</h1>
        <p className="mt-2 text-muted">The page you&apos;re looking for doesn&apos;t exist or moved.</p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-2 px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          <Home size={16} /> Back home
        </Link>
      </div>
    </div>
  );
}
