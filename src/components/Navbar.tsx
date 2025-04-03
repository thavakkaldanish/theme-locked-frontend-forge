
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-homeplate-orange p-4 flex justify-between items-center">
      <div className="text-white font-bold text-xl">HOME PLATE</div>
      <div className="flex space-x-4">
        <Link to="/" className="text-white hover:underline">Home</Link>
        <Link to="/chefs" className="text-white hover:underline">Chefs</Link>
        <Link to="/menu" className="text-white hover:underline">Menu</Link>
      </div>
      <div className="flex space-x-4">
        <Link to="/login" className="bg-white text-homeplate-orange px-3 py-1 rounded">LOGIN</Link>
        <Link to="/chef-signup" className="bg-white text-homeplate-orange px-3 py-1 rounded">Become a Chef</Link>
      </div>
    </nav>
  );
};

export default Navbar;
