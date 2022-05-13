import React from 'react'
import { useState } from 'react'

function NotFound() {
  return (

    <div className='max-w-7xl m-auto flex flex-col '>

        <div className='mx-12 mt-4 px-8 py-6'>
            <h1 className="text-4xl tracking-tight text-center flex flex-col gap-8 content-center p-60 font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-indigo-600 xl:inline">Error 404!</span>{' '}
                <span className="block text-gray-600 xl:inline">Page Not Found</span>
            </h1>
        </div>
        
    </div>
  )
}

export default NotFound