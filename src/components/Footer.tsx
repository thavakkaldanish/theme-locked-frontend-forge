
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-homeplate-orange text-black py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 className="font-bold mb-4">Our Meals</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline">Lunch</Link></li>
              <li><Link to="/" className="hover:underline">Dinner</Link></li>
              <li><Link to="/" className="hover:underline">Breakfast</Link></li>
              <li><Link to="/" className="hover:underline">Dessert</Link></li>
              <li><Link to="/" className="hover:underline">Special Offers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Popular</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline">All Meals</Link></li>
              <li><Link to="/" className="hover:underline">Trending</Link></li>
              <li><Link to="/" className="hover:underline">Family Set</Link></li>
              <li><Link to="/" className="hover:underline">Vegetarian</Link></li>
              <li><Link to="/" className="hover:underline">Non-Vegetarian</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Learning</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline">About Us</Link></li>
              <li><Link to="/" className="hover:underline">How It Works</Link></li>
              <li><Link to="/" className="hover:underline">Blog</Link></li>
              <li><Link to="/" className="hover:underline">Community</Link></li>
              <li><Link to="/" className="hover:underline">Chef Partners</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline">Help Center</Link></li>
              <li><Link to="/" className="hover:underline">Terms of Use</Link></li>
              <li><Link to="/" className="hover:underline">Legal Notices</Link></li>
              <li><Link to="/" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline">Company</Link></li>
              <li><Link to="/" className="hover:underline">Careers</Link></li>
              <li><Link to="/" className="hover:underline">News</Link></li>
              <li><Link to="/" className="hover:underline">Press</Link></li>
              <li><Link to="/" className="hover:underline">FAQ</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-black/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2025 HOME PLATE. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Facebook size={20} />
            <Twitter size={20} />
            <Instagram size={20} />
            <Youtube size={20} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
