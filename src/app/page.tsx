"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Zap,
  Leaf,
  Flame,
  PenTool,
  Factory,
  Blocks,
  Key,
  BadgeCheck,
  Eye,
  Heart,
  type LucideIcon,
} from "lucide-react";
import { content, type Locale } from "@/lib/content";

const GALLERY_IMAGES = ["/gallery-1.jpg", "/gallery-2.jpg", "/gallery-3.jpg"];

const BENEFIT_ICONS: LucideIcon[] = [Zap, Leaf, Flame];
const PROCESS_ICONS: LucideIcon[] = [PenTool, Factory, Blocks, Key];
const VALUE_ICONS: LucideIcon[] = [BadgeCheck, Eye, Heart];

function SectionLabel({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-5">
      <span className="h-px w-16 bg-rule" />
      <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-ink-3">
        {title}
      </span>
    </div>
  );
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("pl");
  const t = content[locale];

  const heroTitle =
    locale === "pl" ? (
      <>
        Nowoczesne domy z<br />
        <em className="italic font-light">drewna klejonego</em>
        <br />
        HBE.
      </>
    ) : (
      <>
        Modern HBE <em className="italic font-light">Glulam</em>
        <br />
        Timber Houses.
      </>
    );

  const closingLine =
    locale === "pl" ? "Bliżej natury. Bliżej Ciebie." : "Closer to nature. Closer to you.";

  return (
    <div className="bg-paper text-ink">
      <header className="fixed top-0 left-0 right-0 z-50 bg-paper/95 border-b border-rule">
        <nav className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-xl tracking-tight">
            <span className="font-light">HBE</span>{" "}
            <span className="italic font-light text-ink-2">domy</span>
          </a>
          <div className="flex items-center gap-8">
            <div className="hidden lg:flex items-center gap-8 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-2">
              <a href="#technology" className="hover:text-moss transition-colors">
                {t.nav.tech}
              </a>
              <a href="#benefits" className="hover:text-moss transition-colors">
                {t.nav.benefits}
              </a>
              <a href="#process" className="hover:text-moss transition-colors">
                {t.nav.process}
              </a>
              <a href="#gallery" className="hover:text-moss transition-colors">
                {t.nav.gallery}
              </a>
              <a href="#about" className="hover:text-moss transition-colors">
                {t.nav.about}
              </a>
              <a href="#faq" className="hover:text-moss transition-colors">
                {t.nav.faq}
              </a>
            </div>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-ink hover:text-moss transition-colors"
            >
              <span>{t.nav.contact}</span>
              <span aria-hidden>→</span>
            </a>
            <button
              onClick={() => setLocale(locale === "pl" ? "en" : "pl")}
              className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-3 hover:text-ink transition-colors"
              aria-label="Switch language"
            >
              {locale === "pl" ? "EN" : "PL"}
            </button>
          </div>
        </nav>
      </header>

      <section id="top" className="relative min-h-screen overflow-hidden">
        <Image
          src="/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover blur-sm opacity-80 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.15_0.02_145/0.35)] via-[oklch(0.15_0.02_145/0.5)] to-[oklch(0.15_0.02_145/0.85)]" />

        <div className="relative z-10 min-h-screen flex flex-col justify-end px-6 md:px-10 lg:px-16 pt-24 pb-20 md:pb-28 max-w-[1400px] mx-auto">
          <div className="max-w-5xl reveal reveal-1">
            <div className="flex items-center gap-4 text-paper/80 text-[10px] uppercase tracking-[0.24em] mb-8">
              <span className="h-px w-12 bg-paper/40" />
              <span>{locale === "pl" ? "Manifest" : "Manifesto"}</span>
            </div>
            <h1 className="font-display font-light text-paper text-[clamp(2.75rem,8.5vw,8rem)] leading-[0.92] tracking-[-0.025em]">
              {heroTitle}
            </h1>
            <div className="mt-10 md:mt-14 grid md:grid-cols-12 gap-6 items-end">
              <p className="md:col-span-6 text-paper/85 text-base md:text-lg leading-relaxed font-body max-w-md">
                {t.hero.subtitle}
              </p>
              <div className="md:col-span-6 md:flex md:justify-end">
                <a
                  href="#technology"
                  className="group inline-flex items-center gap-4 text-paper font-display italic text-xl md:text-2xl hover:text-moss-3 transition-colors"
                >
                  <span>{t.hero.cta}</span>
                  <span className="block w-12 h-px bg-current transition-all duration-500 group-hover:w-20" />
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-6 md:right-10 lg:right-16 flex items-center gap-3 text-paper/50 text-[10px] uppercase tracking-[0.22em]">
          <span>{locale === "pl" ? "Przewiń" : "Scroll"}</span>
          <span className="h-px w-10 bg-paper/30" />
        </div>
      </section>

      <section id="technology" className="py-32 md:py-44 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel title={t.nav.tech} />
          <h2 className="font-display font-light text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.94] tracking-[-0.02em] mt-12 max-w-5xl">
            {locale === "pl" ? (
              <>
                Czym jest <em className="italic">technologia HBE</em>?
              </>
            ) : (
              <>
                What is <em className="italic">HBE technology</em>?
              </>
            )}
          </h2>
          <div className="mt-16 md:mt-20 grid md:grid-cols-12 gap-8">
            <div className="hidden md:block md:col-span-3">
              <span className="font-display italic text-ink-3 text-sm">
                House Building Element
              </span>
            </div>
            <p className="md:col-span-8 lg:col-span-7 font-body text-lg md:text-xl leading-[1.65] text-ink-2">
              {t.tech.body}
            </p>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-28 md:py-36 px-6 md:px-10 lg:px-16 bg-paper-2">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel title={t.nav.benefits} />
          <h2 className="font-display italic font-light text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.94] tracking-[-0.02em] mt-12 max-w-4xl">
            {t.benefits.heading}
          </h2>
          <div className="mt-20 md:mt-24 grid md:grid-cols-3">
            {t.benefits.items.map((item, i) => {
              const Icon = BENEFIT_ICONS[i];
              return (
                <div
                  key={i}
                  className={`py-10 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0 ${
                    i > 0 ? "border-t md:border-t-0 md:border-l border-rule" : ""
                  }`}
                >
                  <Icon className="w-9 h-9 text-moss" strokeWidth={1.3} />
                  <h3 className="font-display font-light text-2xl md:text-3xl mt-8 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base md:text-lg text-ink-2 leading-relaxed max-w-md">
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="process" className="py-32 md:py-44 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel title={t.nav.process} />
          <div className="mt-12 grid md:grid-cols-12 gap-8 items-end">
            <h2 className="md:col-span-8 font-display font-light text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.94] tracking-[-0.02em]">
              {t.process.heading}
            </h2>
            <p className="md:col-span-4 text-base md:text-lg text-ink-2 leading-relaxed md:pb-4">
              {t.process.subheading}
            </p>
          </div>
          <ol className="mt-24 md:mt-28 grid gap-16 md:grid-cols-4 md:gap-10">
            {t.process.steps.map((step, i) => {
              const Icon = PROCESS_ICONS[i];
              return (
                <li key={i} className="relative md:border-t md:border-rule md:pt-10">
                  <Icon className="w-8 h-8 text-ink" strokeWidth={1.3} />
                  <h3 className="font-display font-light text-2xl mt-8">{step.title}</h3>
                  <p className="mt-4 text-base text-ink-2 leading-relaxed">{step.body}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section id="gallery" className="py-28 md:py-36 px-6 md:px-10 lg:px-16 bg-paper-2">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-6">
              <SectionLabel title={t.nav.gallery} />
              <h2 className="font-display italic font-light text-[clamp(2.5rem,6vw,5rem)] leading-[0.94] tracking-[-0.02em] mt-12">
                {t.gallery.heading}
              </h2>
            </div>
            <p className="md:col-span-5 md:col-start-8 text-base md:text-lg text-ink-2 leading-relaxed">
              {t.gallery.subheading}
            </p>
          </div>

          <div className="mt-20 md:mt-24 grid grid-cols-12 gap-6 md:gap-10">
            <figure className="col-span-12 md:col-span-7 lg:col-span-6">
              <div className="relative aspect-[4/5] overflow-hidden bg-paper-3">
                <Image
                  src={GALLERY_IMAGES[0]}
                  alt={t.gallery.items[0].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-5 text-sm text-ink-2 italic font-display">
                {t.gallery.items[0].caption}
              </figcaption>
            </figure>

            <figure className="col-span-12 md:col-span-5 lg:col-span-5 md:col-start-8 lg:col-start-8 md:mt-20">
              <div className="relative aspect-[3/4] overflow-hidden bg-paper-3">
                <Image
                  src={GALLERY_IMAGES[1]}
                  alt={t.gallery.items[1].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-5 text-sm text-ink-2 italic font-display">
                {t.gallery.items[1].caption}
              </figcaption>
            </figure>

            <figure className="col-span-12 md:col-span-8 lg:col-span-7 md:col-start-3 lg:col-start-4 md:-mt-24 lg:-mt-32">
              <div className="relative aspect-[16/10] overflow-hidden bg-paper-3">
                <Image
                  src={GALLERY_IMAGES[2]}
                  alt={t.gallery.items[2].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-5 text-sm text-ink-2 italic font-display">
                {t.gallery.items[2].caption}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 md:py-44 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-5 md:sticky md:top-24">
            <div className="relative aspect-[3/4] overflow-hidden bg-paper-3">
              <Image
                src="/about.jpg"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <SectionLabel title={t.nav.about} />
            <h2 className="sr-only">{t.about.heading}</h2>
            <p className="mt-12 font-display italic font-light text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.15] tracking-[-0.01em] text-ink">
              {t.about.lead}
            </p>
            <div className="mt-10 space-y-5 text-base md:text-lg text-ink-2 leading-[1.7] max-w-prose">
              {t.about.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <ul className="mt-16 border-t border-rule pt-10 space-y-8">
              {t.about.values.map((v, i) => {
                const Icon = VALUE_ICONS[i];
                return (
                  <li key={i} className="grid grid-cols-[auto_1fr] gap-6 items-start">
                    <Icon className="w-5 h-5 text-moss mt-1" strokeWidth={1.5} />
                    <div>
                      <h4 className="font-display text-xl font-light">{v.label}</h4>
                      <p className="mt-1 text-sm text-ink-2 leading-relaxed max-w-md">
                        {v.body}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section id="faq" className="py-28 md:py-36 px-6 md:px-10 lg:px-16 bg-paper-2">
        <div className="max-w-4xl mx-auto">
          <SectionLabel title={t.nav.faq} />
          <h2 className="font-display font-light text-[clamp(2.5rem,6vw,5rem)] leading-[0.94] tracking-[-0.02em] mt-12 max-w-3xl">
            {locale === "pl" ? (
              <>
                <em className="italic">Najczęstsze</em> pytania
              </>
            ) : (
              <>
                <em className="italic">Frequently</em> asked
              </>
            )}
          </h2>
          <p className="mt-6 text-base md:text-lg text-ink-2 leading-relaxed max-w-2xl">
            {t.faq.subheading}
          </p>
          <div className="mt-16 border-t border-rule">
            {t.faq.items.map((item, i) => (
              <details key={i} className="group border-b border-rule">
                <summary className="flex items-start justify-between gap-8 cursor-pointer py-7 md:py-8">
                  <span className="font-display font-light text-xl md:text-2xl leading-snug tracking-tight pr-4">
                    {item.q}
                  </span>
                  <span className="flex-shrink-0 relative w-4 h-4 mt-2">
                    <span className="absolute top-1/2 left-0 w-full h-px bg-ink" />
                    <span className="absolute top-0 left-1/2 w-px h-full bg-ink transition-opacity duration-300 group-open:opacity-0" />
                  </span>
                </summary>
                <div className="pb-8 pr-10 text-base md:text-lg text-ink-2 leading-[1.7] max-w-prose">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 md:py-44 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <SectionLabel title={t.nav.contact} />
            <h2 className="font-display font-light text-[clamp(2rem,4.5vw,4rem)] leading-[1] tracking-[-0.02em] mt-12">
              {locale === "pl" ? (
                <>
                  Zacznijmy projektować Twój <em className="italic">drewniany</em> azyl.
                </>
              ) : (
                <>
                  Let&apos;s design your <em className="italic">wooden</em> sanctuary.
                </>
              )}
            </h2>
            <p className="mt-10 text-base md:text-lg text-ink-2 leading-[1.7] max-w-md">
              {t.contact.body}
            </p>
            <dl className="mt-14 space-y-5 border-t border-rule pt-8">
              <div className="grid grid-cols-[auto_1fr] gap-6 items-baseline">
                <dt className="text-[10px] uppercase tracking-[0.24em] text-ink-3">
                  {t.contact.emailLabel}
                </dt>
                <dd className="font-display italic text-lg md:text-xl">{t.contact.email}</dd>
              </div>
              <div className="grid grid-cols-[auto_1fr] gap-6 items-baseline">
                <dt className="text-[10px] uppercase tracking-[0.24em] text-ink-3">
                  {t.contact.phoneLabel}
                </dt>
                <dd className="font-display italic text-lg md:text-xl">{t.contact.phone}</dd>
              </div>
            </dl>
          </div>

          <form className="md:col-span-6 md:col-start-7 space-y-10 pt-6">
            <div>
              <label
                htmlFor="name"
                className="block text-[10px] uppercase tracking-[0.24em] text-ink-3 mb-3"
              >
                {t.contact.form.name}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full bg-transparent border-0 border-b border-ink-4 pb-3 text-lg font-body text-ink focus:outline-none focus:border-moss transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-[10px] uppercase tracking-[0.24em] text-ink-3 mb-3"
              >
                {t.contact.form.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-transparent border-0 border-b border-ink-4 pb-3 text-lg font-body text-ink focus:outline-none focus:border-moss transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-[10px] uppercase tracking-[0.24em] text-ink-3 mb-3"
              >
                {t.contact.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full bg-transparent border-0 border-b border-ink-4 pb-3 text-lg font-body text-ink focus:outline-none focus:border-moss transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center gap-4 text-ink font-display italic text-xl md:text-2xl pt-4 hover:text-moss transition-colors"
            >
              <span>{t.contact.form.submit}</span>
              <span className="block w-12 h-px bg-current transition-all duration-500 group-hover:w-20" />
              <span aria-hidden>→</span>
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-rule px-6 md:px-10 lg:px-16 pt-24 md:pt-32 pb-10">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-display italic font-light text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.92] tracking-[-0.025em] max-w-5xl">
            {closingLine}
          </p>
          <div className="mt-20 md:mt-28 flex flex-col md:flex-row justify-between gap-6 text-[10px] uppercase tracking-[0.24em] text-ink-3">
            <span>© {new Date().getFullYear()} HBE domy</span>
            <span className="font-display italic normal-case tracking-normal text-ink-2">
              {t.footer}
            </span>
            <span>{locale === "pl" ? "Wykonane z pasji" : "Made with care"}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
