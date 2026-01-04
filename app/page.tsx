import Link from "next/link";
import { services, brand } from "@/components/content";

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-luxe">
      <div className="text-base font-semibold">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-10 pt-14 md:pb-16 md:pt-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-gold-500/40 bg-white/5 px-4 py-2 text-xs text-gold-400">
              Athlete management • Performance consulting • Integrative care
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">
              Calm, luxury-level support for athletes who take the work seriously.
            </h1>

            <p className="mt-5 text-base leading-relaxed text-white/70">
              {brand.name} offers tennis consulting, fitness & nutrition systems, travel consulting,
              plus naturopath and osteopath services — built around performance, recovery, and
              long-term consistency.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-gold-400"
              >
                Work with us
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white/90 transition hover:border-white/25 hover:bg-white/10"
              >
                Explore services
              </Link>
              <a
                href={brand.instagram}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-gold-500/40 bg-transparent px-6 py-3 text-sm text-gold-400 transition hover:border-gold-400 hover:text-gold-400"
              >
                Instagram
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 text-center text-xs text-white/65 md:max-w-md">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                Performance
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                Recovery
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                Travel-ready
              </div>
            </div>
          </div>

          {/* Visual block */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gold-500/10 blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 shadow-luxe">
              <div className="text-sm font-semibold text-gold-400">SoTi Method</div>
              <ul className="mt-4 space-y-3 text-sm text-white/75">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-500" />
                  Structure first: schedules, routines, and priorities.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-500" />
                  Performance systems: training + nutrition + monitoring.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-500" />
                  Integrative care: keep the body durable and available.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-500" />
                  Travel consulting: less chaos, more readiness.
                </li>
              </ul>

              <div className="mt-6 h-px w-full hairline opacity-70" />

              <div className="mt-6 text-xs text-white/60">
                Want this to feel even more premium? Add your logo mark + real photos and it becomes
                *instantly* high-end.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold">Services</h2>
            <p className="mt-2 text-sm text-white/70">
              Everything under one roof — performance, health, and logistics.
            </p>
          </div>
          <Link
            href="/services"
            className="hidden text-sm text-gold-400 hover:text-gold-300 md:inline"
          >
            View all →
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {services.slice(0, 3).map((s) => (
            <Card key={s.title} title={s.title} desc={s.desc} />
          ))}
        </div>

        <div className="mt-6 md:hidden">
          <Link href="/services" className="text-sm text-gold-400 hover:text-gold-300">
            View all services →
          </Link>
        </div>
      </section>
    </div>
  );
}
