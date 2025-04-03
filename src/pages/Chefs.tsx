
import Navbar from "../components/Navbar";
import ChefSection from "../components/ChefSection";
import Footer from "../components/Footer";

const Chefs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-homeplate-orange py-12">
        <h1 className="text-center text-4xl font-bold">Our Chefs</h1>
      </div>
      <ChefSection />
      <Footer />
    </div>
  );
};

export default Chefs;
