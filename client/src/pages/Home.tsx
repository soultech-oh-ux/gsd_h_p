import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ResearchAreas from "@/components/ResearchAreas";
import PadletSection from "@/components/PadletSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <ResearchAreas />
        <PadletSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
