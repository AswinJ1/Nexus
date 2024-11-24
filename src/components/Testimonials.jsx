import React from 'react'

const Testimonials = () => {
  return (
<section className='mt-20'>
    <div><h1 className="text-indigo-700 font-normal text-[38px] mb-12 text-center">Reviews from our users</h1></div>
    <div className='grid lg:grid-cols-3 gap-4'>
<div className="max-w-sm mx-auto bg-white rounded-lg shadow p-6 hover:shadow-transparent border mb-9">
  <div className="flex items-center justify-center">
    <div className="relative">
      <img
        className="w-16 h-16 rounded-full object-cover"
        src="/assets/avatar-3.jpg"
        alt="Profile picture of Kristin Watson"
      />
      <div className="absolute top-0 right-0 bg-blue-500 text-white w-6 h-6 flex items-center justify-center rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
          />
        </svg>
      </div>
    </div>
  </div>
  <blockquote className="mt-6 text-center">
    <p className="text-gray-700 text-lg">
      “As a freelancer, Nexus has been a game-changer. The ability to organize tasks, set reminders, and track my progress has made my workflow seamless and stress-free.”
    </p>
  </blockquote>
  <div className="mt-4 text-center">
    <p className="font-semibold text-indigo-700">Kristin Watson</p>
    <p className="text-gray-500 text-sm">Freelancer</p>
  </div>
</div>
<div className="max-w-sm mx-auto bg-white rounded-lg shadow p-6 hover:shadow-transparent border mb-9">
  <div className="flex items-center justify-center">
    <div className="relative">
      <img
        className="w-16 h-16 rounded-full object-cover"
        src="/assets/avatar-2.jpg"
        alt="Profile picture of Kristin Watson"
      />
      <div className="absolute top-0 right-0 bg-blue-500 text-white w-6 h-6 flex items-center justify-center rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
          />
        </svg>
      </div>
    </div>
  </div>
  <blockquote className="mt-6 text-center">
    <p className="text-gray-700 text-lg">
      “Nexus has completely transformed the way I manage my team. The intuitive interface and task-tracking features have saved me hours every week. A must-have for project managers!”
    </p>
  </blockquote>
  <div className="mt-4 text-center">
    <p className="font-semibold text-indigo-700">Alex Johnson</p>
    <p className="text-gray-500 text-sm">Product Manager at Accenture</p>
  </div>
</div>
<div className="max-w-sm mx-auto bg-white rounded-lg shadow p-6 hover:shadow-transparent border mb-9">
  <div className="flex items-center justify-center">
    <div className="relative">
      <img
        className="w-16 h-16 rounded-full object-cover"
        src="/assets/avatar-1.jpg"
        alt="Profile picture of Kristin Watson"
      />
      <div className="absolute top-0 right-0 bg-blue-500 text-white w-6 h-6 flex items-center justify-center rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
          />
        </svg>
      </div>
    </div>
  </div>
  <blockquote className="mt-6 text-center">
    <p className="text-gray-700 text-lg">
      “I love how Nexus integrates all my tools in one place. It's boosted my daily productivity and helped me stay on top of deadlines. Highly recommend it!”
    </p>
  </blockquote>
  <div className="mt-4 text-center">
    <p className="font-semibold text-indigo-700">Samantha Lee</p>
    <p className="text-gray-500 text-sm">Software Developer at Alibaba Group</p>
  </div>
</div>
</div>
</section>

  )
}

export default Testimonials
