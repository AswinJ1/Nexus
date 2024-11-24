import React from 'react'
import { NavLink } from 'react-router-dom'
import { Player } from '@lottiefiles/react-lottie-player'
const Features = () => {
  return (
  
    <div className="mt-[19px]">
  <div className="text-center">
    <h1 className="block mb-10 mt-10 text-xl font-normal text-[56px] text-indigo-700">Features</h1>
  </div>


  <section className="grid lg:grid-cols-3 gap-4 p-4">
  {/* Left Section */}
  <div className="grid gap-4">
    <div className="rounded border shadow p-4">
      <img
        className="w-full h-auto object-contain"
        src="/assets/prok.webp"
        alt="Feature 1"
      />
      <h3 className="font-bold text-indigo-700 mt-2">Customizable Workspaces</h3>
      <p className="text-gray-500 text-sm">
      Users can create personalized workspaces tailored to their projects or teams. Each workspace can include tasks, notes, embedded media, and productivity widgets like calendars or progress trackers.


      </p>
    </div>
    <div className="rounded border shadow p-4">
      <img
        className="w-full h-auto object-contain"
        src="/assets/notion.png"
        alt="Feature 2"
      />
      <h3 className="font-bold text-indigo-700 mt-2">Smart Task Prioritization & Productivity Insights</h3>
      <p className="text-sm text-gray-500">
      Integrated AI prioritization engine analyzes deadlines, task dependencies, and user activity to suggest what tasks should be tackled next.
      </p>
    </div>
  </div>

  {/* Center Section */}
  <div className="flex items-center justify-center">
    <img
      className="w-full h-auto object-contain"
      src="/assets/time.jpg"
      alt="Productivity"
    />
  </div>

  {/* Right Section */}
  <div className="flex items-center justify-center">
    <div className="w-[300px] h-[300px] lg:w-[550px] lg:h-[550px]">
      <Player
        autoplay
        loop
        src="/assets/market-research.json"
        className="w-full h-full"
      />
    </div>
  </div>
</section>

</div>
 
    
    
    
    
   
  )
}

export default Features
