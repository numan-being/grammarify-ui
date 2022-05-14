import React from 'react'
import { useState } from 'react'
import logo from '/img/png1.png'
import { Switch } from '@headlessui/react'

function Home() {
  const [isEnabled, setIsEnabled] = useState(false);
  return (

    <div className='p-8 lg:p-10 bg-gray-50'>
        
      <div className='max-w-7xl text-center m-auto grid grid-cols-1 md:grid-cols-2 gap-10'> 
        <div className='py-8'>
          <img src={logo} alt="an illustration..." />
        </div>

        <div className='mt-6 lg:mt-16'>  
          
            {/* <div class="absolute max-w-lg px-6">
              <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <div class="m-8 relative space-y-4"></div>
            </div> */}

          <h1 className='text-4xl text-left tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
            grammarify your sentences with a single click! 
          </h1>



          <div className='lg:justify-start flex-col lg:gap-8'>
        
              <div class="flex flex-col items-center space-y-4 py-10">
                <input
                  type="text"
                  placeholder="Here's where you can fix your mistakes."
                  class="border- rounded-lg w-full h-12 px-4"
                />
              <button class="bg-green-400 text-white rounded-md hover:bg-purple-500 font-semibold px-4 py-3 w-full">grammarify!</button>
              </div>
          </div>      
        </div>
    
  
    
    </div>
      
        
    </div> 

  )
}

export default Home