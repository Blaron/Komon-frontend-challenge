"use client";
import Link from "next/link";
import { useContext } from "react";
import { useConnectData } from "../context/ConnectionContext";

export default function Connection() {
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
              <div className="mb-1 flex w-full">
                <ul className=" divide-y divide-gray-200 dark:divide-gray-700">
                  <li className=" sm:pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-black">
                          Twitter
                        </p>
                        <p className="text-sm text-gray-700 flex items-center font-semibold">
                          {settings.conexiones[0].twitter.isConnected ? (
                            <svg
                              className="mr-1"
                              width="1rem"
                              height="1rem"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fill=" #31bde0 "
                                fillRule="evenodd"
                                d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm3 5 1.5 1.5L9 14l-3.5-3.5L7 9l2 2 4-4z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          ) : (
                            ""
                          )}
                          {settings.conexiones[0].twitter.isConnected
                            ? `connected as ${settings.conexiones[0].twitter.user.name}`
                            : ""}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400 max-w-auto md:max-w-auto mr-5">
                          By connecting this account to your Twitter account,
                          you acknowledge and agree that the information you
                          choose <br />
                          to share will be published on Twitter and may be
                          viewed by Twitter and other Twitter users.
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <Link href="./socialMedia/twitter">
                          {settings.conexiones[0].twitter.isConnected ? (
                            <button className="w-full h-8 md:h-12 text-white  bg-dark-100 border border-solid focus:ring-4 group flex items-center justify-center p-0.7 text-center font-medium focus:z-10 rounded-lg cursor-pointer">
                              <span className="flex items-center rounded-md text-xs md:text-sm font-euclid-triangle px-6 py-3">
                                Manage
                              </span>
                            </button>
                          ) : (
                            <button className="w-full h-8 md:h-12 text-black  bg-green-300 border border-solid focus:ring-4 group flex items-center justify-center p-0.7 text-center font-medium focus:z-10 rounded-lg cursor-pointer">
                              <span className="flex items-center rounded-md text-xs md:text-sm font-euclid-triangle px-6 py-3">
                                Connect
                              </span>
                            </button>
                          )}
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-black">
                          Instagram
                        </p>
                        <p className="text-sm text-gray-700 flex items-center font-semibold">
                          {settings.conexiones[0].instagram.isConnected ? (
                            <svg
                              className="mr-1"
                              width="1rem"
                              height="1rem"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fill=" #31bde0 "
                                fillRule="evenodd"
                                d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm3 5 1.5 1.5L9 14l-3.5-3.5L7 9l2 2 4-4z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          ) : (
                            ""
                          )}
                          {settings.conexiones[0].instagram.isConnected
                            ? `connected as ${settings.conexiones[0].instagram.user.name}`
                            : ""}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400 max-w-auto md:max-w-auto mr-5">
                          By connecting this account to your Instagram account,
                          you acknowledge and agree that the information you
                          choose
                          <br />
                          to share will be published on Instagram and may be
                          viewed by Instagram and other Instagram users.
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <Link href="./socialMedia/instagram">
                          {settings.conexiones[0].instagram.isConnected ? (
                            <button className="w-full h-8 md:h-12 text-white  bg-dark-100 border border-solid focus:ring-4 group flex items-center justify-center p-0.7 text-center font-medium focus:z-10 rounded-lg cursor-pointer">
                              <span className="flex items-center rounded-md text-xs md:text-sm font-euclid-triangle px-6 py-3">
                                Manage
                              </span>
                            </button>
                          ) : (
                            <button className="w-full h-8 md:h-12 text-black  bg-green-300 border border-solid focus:ring-4 group flex items-center justify-center p-0.7 text-center font-medium focus:z-10 rounded-lg cursor-pointer">
                              <span className="flex items-center rounded-md text-xs md:text-sm font-euclid-triangle px-6 py-3">
                                Connect
                              </span>
                            </button>
                          )}
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-black">
                          Facebook
                        </p>
                        <p className="text-sm text-gray-700 flex items-center font-semibold">
                          {settings.conexiones[0].facebook.isConnected ? (
                            <svg
                              className="mr-1"
                              width="1rem"
                              height="1rem"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fill=" #31bde0 "
                                fillRule="evenodd"
                                d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm3 5 1.5 1.5L9 14l-3.5-3.5L7 9l2 2 4-4z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          ) : (
                            ""
                          )}
                          {settings.conexiones[0].facebook.isConnected
                            ? `connected as ${settings.conexiones[0].facebook.user.name}`
                            : ""}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400 max-w-auto md:max-w-auto mr-5">
                          By connecting this account to your Facebook account,
                          you acknowledge and agree that the information you
                          choose
                          <br />
                          to share will be published on Facebook and may be
                          viewed by Facebook and other Facebook users.
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <Link href="./socialMedia/facebook">
                          {settings.conexiones[0].facebook.isConnected ? (
                            <button className="w-full h-8 md:h-12 text-white  bg-dark-100 border border-solid focus:ring-4 group flex items-center justify-center p-0.7 text-center font-medium focus:z-10 rounded-lg cursor-pointer">
                              <span className="flex items-center rounded-md text-xs md:text-sm font-euclid-triangle px-6 py-3">
                                Manage
                              </span>
                            </button>
                          ) : (
                            <button className="w-full h-8 md:h-12 text-black  bg-green-300 border border-solid focus:ring-4 group flex items-center justify-center p-0.7 text-center font-medium focus:z-10 rounded-lg cursor-pointer">
                              <span className="flex items-center rounded-md text-xs md:text-sm font-euclid-triangle px-6 py-3">
                                Connect
                              </span>
                            </button>
                          )}
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
