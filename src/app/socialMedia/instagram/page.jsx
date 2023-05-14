"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  useConnectData,
  disconnectUser,
} from "../../context/ConnectionContext";
import { useState } from "react";

export default function instagram() {
  const settings = useConnectData();
  const posts = settings.conexiones[0].instagram.postImg;
  const [disconnects, setDisconnects] = useState(settings);

  const disconnect = () => {
    setDisconnects({
      ...settings,
      instagram: {
        ...settings.instagram,
        isConnected: false,
      },
    });
  };
  console.log(settings.conexiones[0].instagram.isConnected);
  return settings.conexiones[0].instagram.isConnected != true ? (
    alert(
      "Demo, return if not login" + redirect("/socialMedia/instagram/login")
    )
  ) : (
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
          <p className="mt-16 text-2xl font-bold md:text-4xl">
            Hello,@{settings.conexiones[0].instagram.user.name}
          </p>
          <div className="mt-10 flex justify-between mb-4">
            <div>
              <img
                src={settings.conexiones[0].instagram.user.profileImg}
                className="bordererw-10 h-56 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 m-1"
              />
            </div>
            <div>
              <p>
                <span className="font-semibold">Username: </span>
                {settings.conexiones[0].instagram.user.name}
              </p>
              <p>
                <span className="font-semibold">Followers: </span>
                {settings.conexiones[0].instagram.followers}
              </p>
              <hr />
              <button
                onClick={disconnect}
                className="mt-1 mx-2 w-full h-8 md:h-12 focus:ring-4 group flex items-center justify-center p-0.7 text-center font-medium focus:z-10 rounded-lg cursor-pointer bg-transparent text-black border border-solid border-black"
              >
                Disconnect
              </button>
              <Link href="/socialMedia/instagram/edit">
                <button className="mt-1 mx-2 w-full h-8 md:h-12 focus:ring-4 group flex items-center justify-center p-0.7 text-center font-medium focus:z-10 rounded-lg cursor-pointer bg-transparent text-black border border-solid border-black">
                  Edit
                </button>
              </Link>
              <Link href="/socialMedia/instagram/newPost">
                <button className="mt-1 mx-2 w-full h-8 md:h-12 focus:ring-4 group flex items-center justify-center p-0.7 text-center font-medium focus:z-10 rounded-lg cursor-pointer bg-transparent text-black border border-solid border-black">
                  New Post
                </button>
              </Link>
            </div>
            <div className="max-w-auto md:max-w-auto md:text-2xl">
              <div className="mb-1 flex w-full"></div>
            </div>
          </div>
          <hr className="mb-4" />
          <div id="content">
            {posts.map((post) =>
              !post?.id ? (
                ""
              ) : (
                <div
                  className="wrapper antialiased text-gray-900"
                  key={post?.id}
                >
                  <div>
                    <img
                      src={post?.img}
                      alt={post?.title}
                      className="h-80 object-cover object-center rounded-lg shadow-md"
                    />

                    <div className="relative px-4 -mt-16 mb-12 ">
                      <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex items-baseline">
                          <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                            New post
                          </span>
                          <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                            <span className="ml-2 text-teal-600 text-md font-semibold">
                              {post?.likes} likes
                            </span>
                          </div>
                        </div>

                        <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                          {post?.title}
                        </h4>
                        <div className="mt-1">
                          <span className="w-3/12 whitespace-pre-line">
                            {post?.description}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
