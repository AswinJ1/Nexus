import React from 'react'

const Pricing = () => {
  return (
    <section>
        <div className='flex justify-center items-center'>
    <h1 className='text-indigo-700 font-normal text-[38px] mb-5 mt-20'>Pricing</h1></div>
    <div className="grid lg:grid-cols-3 gap-6 p-4">
    {/* Card 1 */}
    <div className="rounded-lg border border-gray-200 bg-white shadow-md hover:shadow-lg p-6">
      <div className="flex items-start">
        <img
          src="/assets/personal.webp"
          alt="Free Plan Icon"
          className="w-8 h-8 mr-4"
        />
        <div>
          <h1 className="text-gray-800 text-lg font-bold">Free</h1>
          <h1 className="text-black text-lg font-bold"><strong className='font-extrabold text-[30px]'>$0</strong></h1>
          <p className="text-sm text-gray-500">
            For individuals to organize personal projects and life
          </p>
        </div>
      </div>
      <button className="bg-indigo-600 text-white hover:bg-indigo-700 transition duration-200 mt-4 w-full py-2 rounded-lg font-medium">
        Get started
      </button>


      <ul className="mt-4 space-y-2 text-sm text-gray-700">
        <li>• Collaborative workspace</li>
        <li>• Integrate with Slack, GitHub & more</li>
        <li>• Basic page analytics</li>
        <li>• 7 day page history</li>
        <li>• Invite 10 guests</li>
      </ul>
    </div>
  
    {/* Card 2 */}
    <div className="rounded-lg border border-gray-200 bg-white shadow-md hover:shadow-lg p-6">
      <div className="flex items-start">
        <img
          src="/assets/pro-1.webp"
          alt="Free Plan Icon"
          className="w-8 h-8 mr-4"
        />
        <div>
          <h1 className="text-gray-800 text-lg font-bold">Plus <span className='bg-indigo-700 text-white rounded-full p-1 pl-5 pr-5 font-extralight text-[10px]'>Popular</span></h1>
          <h1 className="text-black text-lg font-bold"><strong className='font-extrabold text-[30px]'>$10</strong>per seat/month</h1>
          <p className="text-sm text-gray-500">
          For small teams and professionals to work together
          </p>
        </div>
      </div>
      <button className="bg-indigo-600 text-white hover:bg-indigo-700 transition duration-200 mt-4 w-full py-2 rounded-lg font-medium">
        Get started
      </button>
      <h1 className="text-gray-800 text-lg font-bold"> Everything in Free +</h1>
      <ul className="mt-4 space-y-2 text-sm text-gray-700">
        <li>• Unlimited blocks for teams</li>
        <li>• Unlimited file uploads</li>
        <li>• 30 day page history</li>
        <li>• Invite 100 guests</li>
        <li>• Synced databases with 3rd party apps</li>
        <li>• Custom websites</li>
        <li>• Custom automations</li>
        <li>• Charts & dashboard</li>
      </ul>
    </div>
  
    {/* Card 3 */}
    <div className="rounded-lg border border-gray-200 bg-white shadow-md hover:shadow-lg p-6">
      <div className="flex items-start">
        <img
          src="/assets/team.webp"
          alt="Free Plan Icon"
          className="w-8 h-8 mr-4"
        />
        <div>
          <h1 className="text-gray-800 text-lg font-bold">Business</h1>
          <h1 className="text-black text-lg font-bold"><strong className='font-extrabold text-[30px]'>$15</strong>per seat/month</h1>
          <p className="text-sm text-gray-500">
          For growing businesses to streamline teamwork
          </p>
        </div>
      </div>
      <button className="bg-indigo-600 text-white hover:bg-indigo-700 transition duration-200 mt-4 w-full py-2 rounded-lg font-medium">
        Get started
      </button>
      <h1 className="text-gray-800 text-lg font-bold"> Everything in Plus +</h1>
      <ul className="mt-4 space-y-2 text-sm text-gray-700">
        <li>• SAML SSO</li>
        <li>• Private teamspaces</li>
        <li>• Basic page analytics</li>
        <li>• Bulk PDF export</li>
        <li>• Advanced page analytics</li>
        <li>• 90 day page history</li>
        <li>• Invite 250 guests</li>
      </ul>
    </div>
  </div>
  </section>
  
  )
}

export default Pricing
