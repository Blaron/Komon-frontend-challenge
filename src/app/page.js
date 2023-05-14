"use client";
import Link from "next/link";
export default function Home() {
  const msgText =
    "Giving you all the means to take your creative community further · ";
  const links = [
    {
      label: "Challenge",
      route: "/connection",
    },
    // {
    //   label: "Settings",
    //   route: "/settings",
    // },
    // {
    //   label: "Details",
    //   route: "/details",
    // },
  ];

  return (
    <main className="w-full min-h-screen">
      <div className="home-vertical-line"></div>
      <div className="bg-black text-white w-full h-7 overflow-hidden">
        <div className="animate-font-moves">
          {msgText}
          {msgText}
          {msgText}
          {msgText}
        </div>
      </div>

      <span className="text-black text-lg font-bold md:flex text-center md:justify-center mt-5 flex">
        In this challenge, I assume that the user is logged in with his
        credentials, at the bottom there is a button to perform the tests of the
        three required points
      </span>
      <div className="md:flex md:justify-center">
        <div className="relative max-w-4xl overflow-hidden px-6 pt-8 flex">
          {links.map(({ label, route }) => (
            <button
              key={route}
              className="mx-2 w-full h-8 md:h-12 focus:ring-4 group flex items-center justify-center p-0.7 text-center font-medium focus:z-10 rounded-lg cursor-pointer bg-transparent text-black border border-solid border-black"
            >
              <Link href={route}>
                <span className="flex items-center rounded-md text-xs md:text-sm font-euclid-triangle px-6 py-3">
                  {label}
                </span>
              </Link>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
