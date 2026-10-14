export interface Referenz {
  id: string;
  /** Short project title, e.g. "Fällung einer Fichte am Wohnhaus". */
  title: string;
  /** Real place name. Never invent one. */
  ort: string;
  /** Must match one of the `label` values in lib/galabau.ts services. */
  leistung: string;
  jahr?: string;
  text: string;
  /** Finished state. Required. */
  afterImage: string;
  /**
   * Before state. OPTIONAL and only ever a genuine before shot of the SAME
   * project. Without it the card renders as a single image instead of a
   * before/after slider, which is the honest fallback.
   */
  beforeImage?: string;
  alt: string;
}

// Keine eigenen Projektfotos des Betriebs vorhanden. Die Skeleton-Beispiele
// zeigten Gartenanlagen, nicht Baumarbeiten, und sind deshalb entfernt. Die
// Sektion blendet sich aus, bis echte Vorher-Nachher-Bilder vorliegen.
export const referenzen: Referenz[] = [];
