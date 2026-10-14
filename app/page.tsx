import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Leistungen } from "@/components/Leistungen";
import { Referenzen } from "@/components/Referenzen";
import { Arbeitsweise } from "@/components/Arbeitsweise";
import { Reviews } from "@/components/Reviews";
import { Fragen } from "@/components/Fragen";
import { Einsatzgebiet } from "@/components/Einsatzgebiet";
import { Galerie } from "@/components/Galerie";
import { RecruitingTeaser } from "@/components/RecruitingTeaser";
import { WhatsappFloat } from "@/components/WhatsappFloat";
import { Footer } from "@/components/Footer";

// Referenzen, Reviews, Galerie and RecruitingTeaser render nothing until real
// content exists (own project photos, scraped reviews, an open position).
export default function Page() {
  return (
    <main style={{ overflowX: "clip" }}>
      <Navbar />
      <Hero />
      <Leistungen />
      <Arbeitsweise />
      <Referenzen />
      <Reviews />
      <Fragen />
      <Einsatzgebiet />
      <Galerie />
      <RecruitingTeaser />
      <Footer />
      <WhatsappFloat />
    </main>
  );
}
