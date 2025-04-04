
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CuisineSection from "../components/CuisineSection";
import ChefSection from "../components/ChefSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <CuisineSection />
      <ChefSection />
      <Footer />
    </div>
  );
};

export default Index;
