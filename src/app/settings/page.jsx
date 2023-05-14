"use client";
import Link from "next/link";
import { useConnectData } from "../context/ConnectionContext";
export default function Settings() {
  const settings = useConnectData();
  return (
    <main className="w-full min-h-screen">
      <div className="md:flex md:justify-center">
        <div className="mb-3 flex w-1/5 items-center justify-between">
          <Link href="/" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-5 w-5 cursor-pointer stroke-dark-100 stroke-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              ></path>
            </svg>
            <span className="ml-1 font-bold">BACK</span>
          </Link>
        </div>
      </div>
      <div className="md:flex md:justify-center">
        <div className="relative max-w-7xl overflow-hidden px-6 pt-8">
          <p className="mt-16 text-2xl font-bold md:text-4xl">New connection</p>
          <div className="mt-10">
            <div className="max-w-auto md:max-w-auto md:text-2xl">
              <div className="mb-1 flex w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
