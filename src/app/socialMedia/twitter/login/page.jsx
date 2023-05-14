"use client";
import Link from "next/link";
import { useConnectData } from "../../../context/ConnectionContext";

export default function Settings() {
  const { connectUser } = useConnectData();
  const connect = () => {
    connectUser("twitter");
    alert("no localStore, please use back");
  };
  return (
    <main className="w-full min-h-screen">
      <div className="md:flex md:justify-center">
        <div className="mb-3 flex w-1/5 items-center justify-between">
          <Link href="/connection" className="flex items-center">
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
          <p className="mt-16 text-2xl font-bold md:text-4xl">Login user</p>
          <div className="mt-10">
            <input
              type="text"
              id="username"
              className="mb-1 bg-dark-05 p-3 pl-10 text-dark-75 focus:text-dark-75 block  h-11 w-full rounded-lg border border-solid border-dark-20 text-sm leading-tight text-dark-75 "
              placeholder="username"
            />
            <input
              type="password"
              id="password"
              className="bg-dark-05 p-3 pl-10 text-dark-75 focus:text-dark-75 block  h-11 w-full rounded-lg border border-solid border-dark-20 text-sm leading-tight text-dark-75 "
              placeholder="password"
            />
            <button
              onClick={connect}
              className="mt-4 mx-2 w-11/12 h-8 md:h-12 focus:ring-4 group flex items-center justify-center p-0.7 text-center font-medium focus:z-10 rounded-lg cursor-pointer bg-transparent text-black border border-solid border-black"
            >
              Connect
            </button>

            <div className="max-w-auto md:max-w-auto md:text-2xl">
              <div className="mb-1 flex w-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex md:justify-center mt-10">
        <p>
          In this area the form should work. It would be to check if the user
          exists and if the password is correct. after that, create a global
          status to maintain the session. You can press 'Connect' for login
        </p>
      </div>
    </main>
  );
}
