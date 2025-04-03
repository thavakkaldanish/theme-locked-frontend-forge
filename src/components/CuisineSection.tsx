
import { Link } from "react-router-dom";

const cuisines = [
  { id: 1, name: "South Meals", image: "/placeholder.svg" },
  { id: 2, name: "North Meals", image: "/placeholder.svg" },
  { id: 3, name: "Mexican", image: "/placeholder.svg" },
  { id: 4, name: "Chinese", image: "/placeholder.svg" },
  { id: 5, name: "American", image: "/placeholder.svg" },
  { id: 6, name: "Italian", image: "/placeholder.svg" },
];

const CuisineSection = () => {
  return (
    <div className="bg-homeplate-orange py-12">
      <h2 className="text-center text-black text-3xl font-bold mb-8">Explore Cuisines</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {cuisines.map((cuisine) => (
          <Link key={cuisine.id} to={`/cuisine/${cuisine.id}`}>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src={cuisine.image} 
                alt={cuisine.name} 
                className="w-full h-48 object-cover bg-homeplate-gray"
              />
              <div className="p-3 bg-homeplate-gray text-center font-medium">
                {cuisine.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CuisineSection;
