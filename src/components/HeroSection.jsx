import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const HeroSection = () => {
  return (
    <section className="bg-white p-0 mb-4">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
    {/* Animation Section */}
    <div className="flex-shrink-0 w-full lg:w-1/2 flex justify-center lg:justify-start">
      <Player
        autoplay
        loop
        src="src/assets/employee-getting-customer-requirements.json"
        className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[550px] lg:h-[550px]"
      />
    </div>

    {/* Text Section */}
    <div className="text-center lg:text-left lg:ml-8 mt-8 lg:mt-0 w-full lg:w-1/2">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-indigo-700">
        Unlock Your Full Potential with Nexus
      </h1>
      <p className="my-4 text-lg sm:text-xl text-indigo-700">
        Boost productivity with Nexus—streamline tasks, collaborate effortlessly, and get more done. Download now to work smarter!
      </p>
      <div className="mt-5 flex flex-wrap justify-center lg:justify-start space-x-4">
        <button className="bg-indigo-700 px-6 py-3 text-white rounded-sm hover:bg-indigo-800 hover:shadow-lg">
          Get Nexus Free
        </button>
        <button className="bg-indigo-200 px-6 py-3 text-indigo-700 rounded-sm hover:bg-indigo-100 hover:shadow-lg">
          Request a Demo
        </button>
      </div>
    </div>
  </div>
</section>


  );
};

export default HeroSection;
