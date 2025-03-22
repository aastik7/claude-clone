import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MeetClaude } from "@/components/MeetClaude";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <MeetClaude />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
