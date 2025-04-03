
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-[500px] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/96234825-9691-475a-beb6-b818480b6987.png" 
          alt="Kitchen with food" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="z-10 text-center">
        <h1 className="text-homeplate-orange text-5xl font-bold mb-2">FAST.</h1>
        <h1 className="text-homeplate-orange text-5xl font-bold mb-2">FRESH.</h1>
        <h1 className="text-homeplate-orange text-5xl font-bold mb-6">DELICIOUS.</h1>
        
        <div className="relative w-full max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 pl-10 pr-4 bg-white rounded-full text-homeplate-darkGray"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
