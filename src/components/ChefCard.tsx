
import { Link } from "react-router-dom";

type ChefCardProps = {
  name: string;
  specialty: string;
  rating: string;
  contactNumber: string;
  image: string;
};

const ChefCard = ({ name, specialty, rating, contactNumber, image }: ChefCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-40 object-cover bg-homeplate-gray"
      />
      <div className="p-4 bg-homeplate-gray">
        <h3 className="text-black font-bold text-lg">{name}</h3>
        <p className="text-sm text-gray-700">{specialty}</p>
        <p className="text-sm text-gray-700 mt-1">★★★★★ {rating}</p>
        <p className="text-sm text-gray-700">{contactNumber}</p>
        <Link 
          to="/chef-menu" 
          className="block text-center bg-homeplate-gray border border-black mt-3 py-1 hover:bg-gray-300 transition-colors"
        >
          SEE MENU
        </Link>
      </div>
    </div>
  );
};

export default ChefCard;
