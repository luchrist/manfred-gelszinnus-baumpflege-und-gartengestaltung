"use client";

import { motion } from "framer-motion";

import company from "@/config/company";

/**
 * Startseite, häufige Fragen. Bei Baumarbeiten entscheiden fast immer dieselben
 * Unsicherheiten darüber, ob jemand anfragt: Kosten, Genehmigung, Schonzeit,
 * Haftung. Die Antworten bleiben bewusst allgemein und verweisen auf die
 * Prüfung im Einzelfall, weil Satzungen von Gemeinde zu Gemeinde abweichen.
 */
const FRAGEN = [
  {
    q: "Was kostet ein Baumschnitt oder eine Fällung?",
    a: "Das hängt von Baumart, Höhe, Kronengröße, Standort, Zugang und Entsorgung ab. Ein frei stehender Obstbaum ist eine andere Aufgabe als eine große Linde direkt am Haus. Den verbindlichen Preis nennen wir deshalb erst nach der Besichtigung. Fotos vorab helfen uns, den Aufwand schon grob einzuordnen."
  },
  {
    q: "Darf ich meinen Baum einfach fällen lassen?",
    a: "Nicht immer. Viele Gemeinden haben eine Baumschutzsatzung, die ab einem bestimmten Stammumfang eine Genehmigung verlangt. Außerdem gelten vom 1. März bis 30. September Einschränkungen zum Schutz brütender Vögel. Wir sagen Ihnen bei der Besichtigung, was in Ihrem Fall zu beachten ist."
  },
  {
    q: "Wann ist die beste Zeit für Baumarbeiten?",
    a: "Schonende Pflegeschnitte sind ganzjährig möglich. Fällungen und stärkere Rückschnitte planen wir bevorzugt zwischen Oktober und Februar. Ist ein Baum akut nicht mehr sicher, wird nicht gewartet."
  },
  {
    q: "Wer haftet, wenn ein Baum Schaden anrichtet?",
    a: "Grundsätzlich der Eigentümer. Er ist verpflichtet, seine Bäume auf erkennbare Gefahren zu prüfen. Eine regelmäßige, dokumentierte Baumkontrolle hilft Ihnen, dieser Pflicht nachweisbar nachzukommen."
  },
  {
    q: "Was passiert mit Holz und Schnittgut?",
    a: "Das legen wir vorab fest. Schnittgut und Holz können abgefahren werden, Stammholz bleibt auf Wunsch als Brennholz bei Ihnen. Beides steht so im Angebot, damit es hinterher keine Überraschung gibt."
  },
  {
    q: "Was tun bei akuter Gefahr, etwa nach einem Sturm?",
    a: "Rufen Sie bitte direkt an, statt das Formular zu nutzen. Halten Sie Abstand zum Baum und sperren Sie den Bereich ab. Am Telefon klären wir, was jetzt zu tun ist und wann wir vor Ort sein können."
  }
];

export function Fragen() {
  return (
    <section id="fragen" className="relative bg-creme py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-10 gap-y-12">
          <div className="col-span-12 lg:col-span-4">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
              <span className="marker" />
              <span>Häufige Fragen</span>
            </div>
            <h2 className="mt-6 font-display text-[32px] leading-[1.05] tracking-tight text-ink sm:text-[40px] md:text-[54px]">
              Gut zu wissen, <span className="italic text-laub-500">bevor Sie anfragen.</span>
            </h2>
            <div className="mt-10 rounded-4xl border border-ink/10 bg-white p-7">
              <span className="field-label">Ihre Frage ist nicht dabei?</span>
              <a
                href={company.contact.phoneLink || "#"}
                className="mt-1 block font-display text-[24px] tracking-tight text-ink hover:text-laub-600"
              >
                {company.contact.phone}
              </a>
              <a
                href="/projekt-anfragen"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-laub-500 px-6 py-3.5 text-[13px] font-medium text-bone transition-colors hover:bg-laub-600"
              >
                Besichtigung anfragen
                <span>&rarr;</span>
              </a>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-8">
            <dl className="divide-y divide-ink/10 border-y border-ink/10">
              {FRAGEN.map((entry, index) => (
                <motion.div
                  key={entry.q}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ type: "spring", stiffness: 110, damping: 22, delay: (index % 3) * 0.04 }}
                  className="py-8"
                >
                  <dt className="font-display text-[20px] tracking-tight text-ink md:text-[24px]">{entry.q}</dt>
                  <dd className="mt-3 max-w-[68ch] text-[14px] leading-relaxed text-ink/70 md:text-[15px]">{entry.a}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
