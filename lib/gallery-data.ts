export interface GalleryItem {
  src: string;
  alt: string;
}

// Nur Fotos, die weder als Leistungsbild (lib/galabau.ts) noch als Referenz
// (lib/referenzen-data.ts) laufen. Die Galerie filtert Dubletten ohnehin heraus
// und blendet sich aus, sobald weniger als drei eigene Bilder uebrig bleiben.
// Leer, bis echte Fotos des Betriebs vorliegen. Die übrigen Skeleton-Bilder
// zeigen Gartenanlagen und passen nicht zu Baumpflege.
export const galleryItems: GalleryItem[] = [];
