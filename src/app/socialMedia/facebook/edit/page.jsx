"use client";
import { useConnectData } from "../../../context/ConnectionContext";
import { useState } from "react";
import Link from "next/link";
export default function New() {
  const settings = useConnectData();
  const { updateName } = useConnectData();
  let myName = "";
  const handleName = (e) => {
    myName = e.target.value;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.value != "") {
      updateName(settings.conexiones[0].facebook.user.name, myName, "facebook");
    }
  };
  return (
    <main className="w-full min-h-screen">
      <div className="md:flex md:justify-center">
        <div className="mb-3 flex w-1/5 items-center justify-between">
          <Link href="/socialMedia/facebook" className="flex items-center">
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
          <div>
            <form onSubmit={handleSubmit}>
              <p className="text-xl font-medium font-euclid-flex mt-3">
                Edita tu nombre de usuario
              </p>
              <hr />
              <div className="">
                <div className="mb-6">
                  <p className="mb-3 mt-4 text-base font-medium">
                    Tu nombre de usuario
                  </p>
                  <div className="rounded-xl relative h-11 grow mr-3 bg-asphalt align-middle">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 text-asphalt dark:text-asphalt"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="username"
                      className="bg-dark-05 p-3 pl-10 text-dark-75 focus:text-dark-75 block  h-11 w-full rounded-lg border border-solid border-dark-20 text-sm leading-tight text-dark-75 "
                      placeholder={settings.conexiones[0].facebook.user.name}
                      onChange={handleName}
                    />
                    <button className="mt-4 mx-2 w-2/3 h-8 md:h-12 focus:ring-4 group flex items-center justify-center p-0.7 text-center font-medium focus:z-10 rounded-lg cursor-pointer bg-transparent text-black border border-solid border-black">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
