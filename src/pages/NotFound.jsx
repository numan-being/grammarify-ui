import React from "react";
import { useState } from "react";

function NotFound() {
  return (
    <div className="m-auto flex max-w-7xl flex-col ">
      <div className="mx-12 mt-4 px-8 py-6">
        <h1 className="flex flex-col content-center gap-8 p-60 text-center text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block text-indigo-600 xl:inline">Error 404!</span>{" "}
          <span className="block text-gray-600 xl:inline">Page Not Found</span>
        </h1>
      </div>
    </div>
  );
}

export default NotFound;
