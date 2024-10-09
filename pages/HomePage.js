import React from 'react';

const HomePage = () => {
  return (
    <div className="w-full h-[600px] flex flex-col items-center justify-center relative overflow-hidden">
      <iframe
        // src="https://my.spline.design/backlightbgeffect-a8fd0b6411b9f2816110f3486a55dd0f/"
        src="https://my.spline.design/firefly-58e14b927c438aa71720fb954711a9d4/"
        frameBorder="0"
        width="100%"
        height="100%"
        className="absolute top-0 left-0 w-full h-full"
        title="Background Spline"
        allow="autoplay; fullscreen; vr"
      ></iframe>
      
      <div className="relative z-10 text-center">
        <div className="textContainer  flex justify-center w-70 ml-25 mr-25">
          <h1 className="text-6xl font-bold text-white mb-4 w-25 font-sans leading-tight">International Conference on Recent Trends in Computing and Communication Technologies - <span className="text-blue-900 hover:text-blue-600 transition-all duration-3"> ICRCCT'2k24</span></h1>
        </div>
        <p className="text-lg text-gray-700 mb-8">
          
        </p>
        <div className="buttondiv flex justify-center gap-10 mt-20">
          <button className="px-10 py-3  border border-blue-600 text-white rounded-full hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-500">
            Register. 
          </button>
          <button className="px-10 py-3  bg-blue-600 text-white rounded-full hover:border hover:border-blue-600 hover:bg-transparent  hover:text-white hover:scale-110 transition-all duration-500">
            Submit Paper.
          </button>
        </div>
     
      </div>
    </div>
  );
};

export default HomePage;
