import React from 'react'

const About = ({setPlaystate}) => {
  return (

<div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-6xl mx-auto p-6  ">
  

  <div class="w-full lg:w-1/2 relative">

    <img src="src/assets/pro.webp" alt="Nexus Productivity App" class="w-full h-auto" />
    
  
    <img
      class="w-[60px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
      src="src/assets/playnow.png"
      alt="Play Button"
      onClick={()=>{setPlaystate(true)}}
    />
  </div>


  <div class="w-full lg:w-1/2 text-center lg:text-left border border-b-gray-400 rounded shadow p-3 hover:bg-gray-90 opacity-80 hover:shadow-transparent hover:touch-pinch-zoom">
    <h3 class="text-2xl font-bold text-indigo-700 mb-2">About Nexus</h3>
    <h2 class="text-xl font-semibold text-indigo-500 mb-4">Your All-in-One Productivity Partner</h2>
    <p class="text-base text-gray-800 leading-relaxed">
      Nexus is designed to help you streamline your tasks, manage your time effectively, and achieve your goals seamlessly. Whether you're a professional striving for excellence, a student aiming for better focus, or simply someone looking to bring order to chaos, Nexus empowers you to do more with less effort. Stay organized, track your progress, and transform how you work because productivity should feel effortless.
    </p>
  </div>
</div>







   
        
      
  )
}

export default About
