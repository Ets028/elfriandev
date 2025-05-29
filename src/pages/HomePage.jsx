import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Features from "../components/Features";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen font-sans">
      <Hero />
      <About />
      <Services />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}
