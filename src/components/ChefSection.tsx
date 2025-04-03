
import ChefCard from "./ChefCard";

const chefs = [
  {
    id: 1,
    name: "CHIRANT",
    specialty: "INTERNATIONAL",
    rating: "4.8",
    contactNumber: "+91 9876-54321",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "CHIRANT",
    specialty: "NORTH MEALS",
    rating: "4.9",
    contactNumber: "+91 9876-54321",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "CHIRANT",
    specialty: "ITALIAN MEALS",
    rating: "4.7",
    contactNumber: "+91 9876-54321",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    name: "CHIRANT",
    specialty: "ASIAN MEALS",
    rating: "4.8",
    contactNumber: "+91 9876-54321",
    image: "/placeholder.svg"
  }
];

const ChefSection = () => {
  return (
    <div className="py-12 bg-white">
      <h2 className="text-center text-black text-3xl font-bold mb-8">TOP CHEFS</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {chefs.map((chef) => (
          <ChefCard
            key={chef.id}
            name={chef.name}
            specialty={chef.specialty}
            rating={chef.rating}
            contactNumber={chef.contactNumber}
            image={chef.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ChefSection;
