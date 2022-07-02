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
    <div className="lg:p-10 bg-gray-50">
      <div className="container text-center m-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="">
          <img src={logo} alt="an-illustration" />
        </div>

        <div className="mt-6 lg:mt-16">
          <h1 className="text-4xl text-left tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Correct your grammar and sound professional!
          </h1>

          <div className="lg:justify-start flex-col lg:gap-8">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center space-y-4 py-10"
            >
              <input
                type="text"
                value={incorrectStr}
                onChange={(e) => setIncorrectStr(e.target.value)}
                placeholder="Here's where you can fix your mistakes."
                className="border rounded-lg w-full h-24 px-4"
              />
              <div className="flex gap-6">
                <button className="bg-green-400 text-white rounded-md hover:bg-purple-500 font-semibold px-6 py-2 w-44">
                  Correct Grammar
                </button>
                <button className="bg-purple-500 text-white rounded-md hover:bg-green-400 font-semibold px-4 py-3 w-40">
                  Sound Formal
                </button>
              </div>
            </form>

            <div className="border bg-white py-10 rounded-lg w-full h-32 px-4">
              <p>{correctStr}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
