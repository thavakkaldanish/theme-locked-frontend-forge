
import Navbar from "../components/Navbar";
import CuisineSection from "../components/CuisineSection";
import Footer from "../components/Footer";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-homeplate-orange py-12">
        <h1 className="text-center text-4xl font-bold">Our Menu</h1>
      </div>
      <CuisineSection />
      <Footer />
    </div>
  );
};

export default Menu;
