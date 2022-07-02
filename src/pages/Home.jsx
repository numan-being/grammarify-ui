import React, { useState } from "react";
import logo from "/img/main-illustration.png";
import axios from "axios";

function Home() {
  const api_url = "http://localhost:8000/grammar-correct?incorrect_sentence=";
  const [incorrectStr, setIncorrectStr] = useState("");
  const [correctStr, setCorrectStr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const inpString = incorrectStr;

    fetch(`${api_url}${encodeURIComponent(incorrectStr)}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(inpString),
    })
      .then((response) => response.json())
      .then((json) => setCorrectStr(json))
      .then(console.log(correctStr));
  };

  return (
    <div className="bg-gray-50 h-screen lg:p-10">
      <div className="container m-auto grid grid-cols-1 gap-10 text-center md:grid-cols-2">
        <div className="">
          <img src={logo} alt="an-illustration" />
        </div>

        <div className="mt-6 lg:mt-16">
          <h1 class="text-xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-5xl lg:text-left">
            <span class="block xl:inline">
              Correct your grammar mistakes and{" "}
            </span>
            <span class="block text-main-pink xl:inline">
              sound professional
            </span>
          </h1>
          <p class="mt-3 text-sm text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-md md:mt-5 md:text-lg lg:mx-0 lg:text-left">
            Check for spelling errors, grammatical errors and convert your
            informal speech to formal speech.
          </p>

          <div className="flex-col lg:justify-start lg:gap-8">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center space-y-4 py-10"
            >
              <input
                type="text"
                value={incorrectStr}
                onChange={(e) => setIncorrectStr(e.target.value)}
                placeholder="Here's where you can fix your mistakes."
                className="h-24 w-full rounded-lg border px-4"
              />
              <div className="flex gap-6">
                <button className="w-44 rounded-md bg-green-400 px-6 py-2 font-semibold text-white hover:bg-purple-500">
                  Correct Grammar
                </button>
                <button className="w-40 rounded-md bg-purple-500 px-4 py-3 font-semibold text-white hover:bg-green-400">
                  Sound Formal
                </button>
              </div>
            </form>

            <div className="h-32 w-full rounded-lg border bg-white py-10 px-4">
              <p>{correctStr}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
