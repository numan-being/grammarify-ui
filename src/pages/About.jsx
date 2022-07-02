import React from "react";
import { useState } from "react";

function About() {
  return (
    <div className="m-auto flex max-w-7xl flex-col ">
      <div className="mx-12 mt-4 px-8 py-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-5xl">
          <span className="block xl:inline">About</span>{" "}
          <span className="block text-indigo-600 xl:inline">Page</span>
        </h1>
      </div>

      <div className="m-2 mx-20 mt-8 ml-24">
        <p className="mb-4 text-2xl text-gray-700">
          This is a starter template for React App with:
        </p>

        <div className="flex flex-col gap-4 p-4 text-lg text-gray-500">
          <p>
            {" "}
            <a
              className="text-xl text-indigo-500"
              target="_blank"
              href="https://vitejs.dev/"
            >
              Vite
            </a>{" "}
            - Vite is a build tool that aims to provide a faster and leaner
            development experience for modern web projects.
          </p>

          <p>
            {" "}
            <a
              className="text-xl text-indigo-500"
              target="_blank"
              href="https://reactrouter.com/"
            >
              React Router v6
            </a>{" "}
            - React Router is a lightweight, fully-featured routing library for
            the React JavaScript library. It runs everywhere that React runs; on
            the web, on the server (using node.js), and on React Native.
          </p>

          <p>
            {" "}
            <a
              className="text-xl text-indigo-500"
              target="_blank"
              href="https://tailwindcss.com/"
            >
              Tailwind CSS
            </a>{" "}
            - Tailwind CSS works by scanning all of your HTML files, JavaScript
            components, and any other templates for class names, generating the
            corresponding styles and then writing them to a static CSS file.
            It's fast, flexible, and reliable — with zero-runtime.
          </p>

          <p>
            {" "}
            <a
              className="text-xl text-indigo-500"
              target="_blank"
              href="https://headlessui.dev/"
            >
              Headless UI
            </a>{" "}
            - Completely unstyled, fully accessible UI components, designed to
            integrate beautifully with Tailwind CSS.
          </p>

          <p>
            {" "}
            <a
              className="text-xl text-indigo-500"
              target="_blank"
              href="https://heroicons.com/"
            >
              Heroicons
            </a>{" "}
            - Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.
          </p>
        </div>

        <div className="mt-6 mb-8 rounded-md shadow">
          <a
            target="_blank"
            href="https://github.com/sanjay-m1/react-vite-tailwind-headless-ui-react-router-template"
            className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-indigo-500 focus:outline-none focus:ring md:py-4 md:px-10 md:text-lg"
          >
            Get the template on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
