import React from 'react'
import { useState } from 'react'

function About() {
  return (

    <div className='max-w-7xl m-auto flex flex-col '>

        <div className='mx-12 mt-4 px-8 py-6'>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl">
                <span className="block xl:inline">About</span>{' '}
                <span className="block text-indigo-600 xl:inline">Page</span>
            </h1>
        </div>

        <div className='m-2 mt-8 ml-24 mx-20'>
            <p className='text-2xl mb-4 text-gray-700'>This is a starter template for React App with:</p>

            <div className='p-4 flex flex-col gap-4 text-gray-500 text-lg'>

                <p> <a className='text-indigo-500 text-xl' target="_blank" href="https://vitejs.dev/">Vite</a> - Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.</p> 

                <p> <a className='text-indigo-500 text-xl' target="_blank" href="https://reactrouter.com/">React Router v6</a>  - React Router is a lightweight, fully-featured routing library for the React JavaScript library. It runs everywhere that React runs; on the web, on the server (using node.js), and on React Native.</p> 

                <p> <a className='text-indigo-500 text-xl' target="_blank" href="https://tailwindcss.com/">Tailwind CSS</a>  -  Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file. It's fast, flexible, and reliable — with zero-runtime.</p> 
 
                <p> <a className='text-indigo-500 text-xl' target="_blank" href="https://headlessui.dev/">Headless UI</a>  - Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.</p> 

                <p> <a className='text-indigo-500 text-xl' target="_blank" href="https://heroicons.com/">Heroicons</a>  - Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.</p> 

            </div> 

            <div className="rounded-md shadow mt-6 mb-8" >
                <a  target="_blank"
                    href="https://github.com/sanjay-m1/react-vite-tailwind-headless-ui-react-router-template"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >
                    Get the template on GitHub
                </a>
            </div>
                
        </div> 
    
        

    </div>
  )
}

export default About