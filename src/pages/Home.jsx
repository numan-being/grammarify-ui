import React from 'react'
import { useState } from 'react'
import { Switch } from '@headlessui/react'

function Home() {
  const [isEnabled, setIsEnabled] = useState(false);
  return (

    <div className='max-w-7xl m-auto flex flex-col '>

        <div className='mx-12 mt-4 px-8 py-6'>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl">
                <span className="block xl:inline">Home</span>{' '}
                <span className="block text-indigo-600 xl:inline">Page</span>
            </h1>
        </div>

        <div className='px-8 m-4 mx-20 border-dashed border-2 border-indigo-500 border-opacity-30 rounded-md h-72 '>
            <h1 className='text-indigo-800 text-center p-8'>
                Your content goes here!
            </h1>
        </div> 
    
        <div className='flex flex-col items-center justify-evenly'>
            <Switch checked={isEnabled} onChange={setIsEnabled} 
            className={`${ isEnabled ? 'bg-green-500 shadow-green-700' : 'bg-red-500 shadow-red-700'} text-white py-4 rounded-lg shadow-md my-4 w-96`}>
            {isEnabled && 'Enabled!'}
            {!isEnabled && 'Not enabled!'}
            </Switch>

            <div className='mx-6'>
                <p className='text-gray-700 text-lg'>This switch is from <a className='text-indigo-600' target="_blank" href="https://headlessui.dev/ ">Headless UI. </a>Unstyled, fully accessible UI components.</p>
            </div>

        </div>

    </div>
  )
}

export default Home