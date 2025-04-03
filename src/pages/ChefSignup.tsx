
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ChefSignup = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center bg-gray-100 py-12">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
          <h2 className="text-2xl font-bold text-center mb-6">Become a Chef</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter your first name"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your phone number"
              />
            </div>
            
            <div>
              <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-1">
                Specialty
              </label>
              <select
                id="specialty"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Select your specialty</option>
                <option value="international">International</option>
                <option value="north-indian">North Indian</option>
                <option value="south-indian">South Indian</option>
                <option value="chinese">Chinese</option>
                <option value="italian">Italian</option>
                <option value="mexican">Mexican</option>
                <option value="american">American</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                Years of Experience
              </label>
              <input
                id="experience"
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Years of experience"
                min="0"
              />
            </div>
            
            <div>
              <label htmlFor="about" className="block text-sm font-medium text-gray-700 mb-1">
                About Yourself
              </label>
              <textarea
                id="about"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Tell us about yourself and your cooking experience"
              ></textarea>
            </div>
            
            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 text-homeplate-orange border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the terms and conditions
              </label>
            </div>
            
            <button
              type="submit"
              className="w-full py-2 px-4 bg-homeplate-orange text-white font-medium rounded-md hover:bg-homeplate-darkOrange"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChefSignup;
