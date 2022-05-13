import React from 'react'
import { useState } from 'react'
import logo from '/public/img/handy-downloading.gif'
import { Switch } from '@headlessui/react'

function Home() {
  const [isEnabled, setIsEnabled] = useState(false);
  return (




    <div class="flex items-center justify-center h-screen">
        <div class="">
            <img src={logo} alt="loading..." />
        </div>
      
      <div class="container bg-white rounded-2x1 border shadow-x1 p-8">
        <div class="flex flex-col items-center space-y-4">
          <h1 class="font-bold text-4xl text-gray-700 w-4/6 text-center">
            hello!
          </h1>
          <p class="text-sm text-gray-500 text-center w-5/6">
            Welocome to grammarify.
          </p>
          <input
            type="text"
            placeholder="Here's where you can fix your mistakes."
            class="border-2 rounded-lg w-full h-12 px-4"
          />
          <button
            class="bg-green-400 text-white rounded-md hover:bg-purple-500 font-semibold px-4 py-3 w-full"
          >
            grammarify!
          </button>
        </div>
      </div>
    

    
    </div>

    

  )
}

export default Home