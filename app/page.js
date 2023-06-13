/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import {
  faAngleRight,
  faMugSaucer,
  faPaw,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export default function Body() {
  const initialData = `"Mother cats teach their kittens to use the litter box."`;

  const [data, setData] = useState(initialData)
  async function fetchData() {
    try {
      const res = await fetch("https://meowfacts.herokuapp.com/");
      const data1 = await res.json();
      setData(data1.data); // Update the data state with the value from data1
    } catch (error) {
      setData("Error on fetching data, Please check your connection.");
    }
  }

  return (
    <div className="font-serif bg-slate-900 text-white">
      <div className="w-auto h-px bg-indigo-500 "></div>
      <h1 className="px-12 mb-8 pt-8 sm:pt-36 flex justify-center font-mono  text-5xl text-indigo-500 sm:text-7xl">
        MEOWFACTS
      </h1>
      <p className=" m-7 mt-12 flex h-7 justify-center p-1  align-middle text-xl font-thin ">
        A simple api that returns a random fact about cats on a GET request
      </p>
      <p className="mb-8 ml-5 mt-44 flex h-5 justify-center p-2 align-middle font-bold sm:mt-36">
        Powered by React.js, Express.js and tailwindCSS
      </p>
      <div className="mt-16 flex justify-center">
        <Link href={"/docs"}>
          <button className="m-5 rounded-2xl p-3  outline transition duration-300 ease-in hover:bg-slate-600 hover:text-white hover:outline-indigo-500">
            GET STARTED
            <FontAwesomeIcon
              className="p-2  align-middle"
              icon={faAngleRight}
            />
          </button>
        </Link>
        <a href="https://www.paypal.com/paypalme/animalproject">
          <button className="m-5 rounded-2xl p-3 outline transition duration-300 ease-in hover:bg-slate-600 hover:text-white hover:outline-indigo-500">
            Sponsor project
            <FontAwesomeIcon className="p-2 align-middle" icon={faMugSaucer} />
          </button>
        </a>
      </div>
      <div className="mt-28 mb-10 flex justify-center align-middle text-5xl ">
        <FontAwesomeIcon icon={faPaw} bounce />
      </div>
      <div className="flex items-center justify-center">
        <div className=" flex max-w-screen-md justify-center bg-slate-950 sm:m-14 ">
          <div className="m-5 p-1 text-white">
            fetch("https://meowfacts.herokuapp.com/") .then((response) ={">"}
            response.json()) .then((data) ={">"} console.log(data))
            .catch((error) ={">"} console.log(error));
          </div>
        </div>
      </div>
      <div className="flex justify-center align-middle mb-14 mt-4">
        <button
          className=" rounded-2xl p-3  outline transition duration-500 ease-in-out hover:bg-slate-600 hover:text-white hover:outline-indigo-500"
          onClick={fetchData}
        >
          RUN
        </button>
      </div>
      <div className="items-centre flex justify-center">
        <div className="flex max-w-screen-md justify-center bg-slate-950 sm:m-14">
          <div className="m-5 p-1 text-white">
           {data}
          </div>
        </div>
      </div>
    </div>
  );
}
