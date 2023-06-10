"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="bg-gray-900 py-7 text-white">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10">
        <h1 className=" text-lg font-bold sm:text-4xl">
          <Link href={"/"}>
            <FontAwesomeIcon className="pr-3" icon={faCat} flip />
            FACTS
          </Link>
        </h1>
        <nav className={`sm:block ${isNavOpen ? "block" : "hidden"}`}>
          <ul className="flex space-x-6 sm:text-3xl text-base">
            <li>
              <Link href={"/docs"}>Docs</Link>
            </li>
            <li>
              <a href="https://github.com/wh-iterabb-it/meowfacts">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </nav>
        <div className="sm:hidden">
          <button className="text-white focus:outline-none" onClick={toggleNav}>
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isNavOpen ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
