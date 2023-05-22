import React from 'react'

const TestCard = () => {
  return (
    <>
    <div className='h-screen w-screen bg-black'>
<div class="flex bg-black shadow-md rounded-xl overflow-hidden pt-10  ">
  
  <div class="w-1/2">
    <img className="rounded-xl " src="https://krui.fm/wordpress/wp-content/uploads/2015/11/Tame-Impala-2015-newweb.jpg" alt="Image" class="object-cover h-full w-full"/>
  </div>

  
  <div class="w-1/2 p-6">
    <h2 className="text-9xl font-anton italic font-bold mb-4">Tame Impala</h2>
    <h1 className="text-gray-400">Electronic</h1><br/><br/><br/>
    <h1 className="text-gray-300">Viejas Arena SDSU</h1>
    <h1 className="text-gray-300">San Diego, CA</h1> <br/>
    <h1 className='text-gray-200'>March 3rd @ 8:30 PM</h1>
    
  </div>
</div>
</div>
    </>
  )
}

export default TestCard