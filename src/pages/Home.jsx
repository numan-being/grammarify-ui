import React, { useState } from "react";
import { Button } from "@cred/neopop-web/lib/components";
import { FaCopy } from "react-icons/fa";

function Home() {
  const api_url = "http://localhost:8000/";
  const [incorrectStr, setIncorrectStr] = useState("");
  const [correctStr, setCorrectStr] = useState("");
  const [copy, setCopy] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(correctStr);
    setCopy(true);
  };

  const handleGrammar = (e) => {
    e.preventDefault();
    const inpString = incorrectStr;

    fetch(
      `${api_url}grammar-correct?incorrect_sentence=${encodeURIComponent(
        incorrectStr
      )}`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(inpString),
      }
    )
      .then((response) => response.json())
      .then((json) => setCorrectStr(json))
      .then(console.log(correctStr));
  };

  const handleFormal = (e) => {
    e.preventDefault();
    const inpString = incorrectStr;

    fetch(
      `${api_url}formal_translate?casual_sentence=${encodeURIComponent(
        incorrectStr
      )}`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(inpString),
      }
    )
      .then((response) => response.json())
      .then((json) => setCorrectStr(json))
      .then(console.log(correctStr));
  };

  return (
    <div className="h-screen bg-slate-800 ">
      <div className="font-playfair w-full pt-4 pb-5 text-center text-4xl text-gray-50 shadow">
        Grammarify
      </div>
      <div className="container m-auto grid grid-cols-2 gap-10 text-center md:grid-cols-2 lg:p-10">
        <div className="mt-6 lg:mt-16">
          <h1 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-5xl lg:text-left">
            <span className="block text-gray-50 xl:inline">
              Correct your grammar mistakes and{" "}
            </span>
            <span className="text-main-pink block xl:inline">
              sound professional
            </span>
          </h1>
          <p className="sm:text-md mt-3 text-sm text-gray-400 sm:mx-auto sm:mt-5 sm:max-w-xl md:mt-5 md:text-lg lg:mx-0 lg:text-left">
            Check for spelling errors, grammatical errors and convert your
            informal speech to formal speech.
          </p>
          <div className="flex-col lg:justify-start lg:gap-8">
            <form className="flex flex-col items-center space-y-4 pt-10">
              <div className="mb-1 w-full border border-gray-600 bg-gray-700">
                <div className="bg-gray-800 py-2 px-4">
                  <textarea
                    onChange={(e) => setIncorrectStr(e.target.value)}
                    rows="4"
                    className="w-full border-0 bg-gray-800 px-0 text-lg font-semibold text-white focus:ring-0 dark:placeholder-gray-400"
                    placeholder="Enter the sentence"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="flex gap-6">
                <Button
                  colorConfig={{
                    backgroundColor: "transparent",
                    borderColor: "white",
                    color: "white",
                    edgeColors: {
                      bottom: "#F68A",
                      left: "transparent",
                      right: "#F68ABE",
                      top: "transparent",
                    },
                  }}
                  variant="primary"
                  kind="elevated"
                  size="big"
                  colorMode="light"
                  onClick={handleGrammar}
                >
                  Correct Grammar
                </Button>

                <Button
                  colorConfig={{
                    backgroundColor: "transparent",
                    borderColor: "white",
                    color: "white",
                    edgeColors: {
                      bottom: "#F68A",
                      left: "transparent",
                      right: "#F68ABE",
                      top: "transparent",
                    },
                  }}
                  variant="primary"
                  kind="elevated"
                  size="big"
                  colorMode="light"
                  onClick={handleFormal}
                >
                  Formal Translate
                </Button>
              </div>
              <div className="w-full border border-gray-600 bg-gray-700">
                <label
                  for="message"
                  class="ml-3 mt-2 mb-2 flex text-sm font-medium text-gray-400"
                >
                  Corrected Sentence
                </label>
                <div
                  id="message"
                  className="flex h-32 w-full border-0 bg-gray-800 py-2 px-4 text-lg font-semibold text-white focus:ring-0 "
                >
                  {correctStr}
                </div>
                <div className="flex items-center justify-between border-t border-gray-600 py-2 px-3">
                  <p className="text-sm text-white">
                    {copy ? "Correct Sentence copied to clipboard!" : ""}
                  </p>
                  <button
                    onClick={copyToClipboard}
                    type="submit"
                    className="text-normal hover:text-main-pink hover inline-flex items-center rounded-lg bg-gray-600 py-2.5 px-4 text-white shadow-md hover:scale-105"
                  >
                    <FaCopy></FaCopy>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <img src="/img/illustration.png" alt="man-illustration" />
      </div>
    </div>
  );
}

export default Home;
