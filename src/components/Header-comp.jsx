import Image from "next/image";
import Logo from "../../public/logo-komon-dark.svg";
import profileImg from "../../public/profile.png";

export function Header() {
  return (
    <div>
      <div className="p-4 md:h-88 md:px-8 md:py-5">
        <nav className="rounded border-gray-200 bg-white dark:border-dark-100 dark:bg-white sm:px-4">
          <div className="flex w-full justify-center">
            <div className="grid w-full max-w-5xl grid-cols-[auto,2fr,auto] items-center justify-start gap-x-5">
              <a href="/">
                <span className="span_01">
                  <span className="span_02">
                    <Image
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27159%27%20height=%2736%27/%3e"
                      alt="whiteSpace"
                      className="img_02"
                      width={100}
                      height={24}
                      priority
                    />
                  </span>
                  <Image
                    src={Logo}
                    alt="Komon Logo"
                    className="mx-auto flex-1 rounded-full hover:cursor-pointer img_02"
                    width={159}
                    height={36}
                    priority
                  />

                  <Image
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27159%27%20height=%2736%27/%3e"
                    alt="whiteSpace"
                    className="img_02"
                    width={100}
                    height={24}
                    priority
                  />
                </span>
              </a>
              <div className="relative z-20" role="searchbox">
                <div
                  aria-hidden="true"
                  className="hidden w-full cursor-pointer md:block"
                >
                  <form>
                    <label
                      htmlFor="default-search"
                      className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Search
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#6B7280"
                          aria-hidden="true"
                          className="h-5 w-5 text-gray-500 dark:text-gray-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <input
                        id="default-search"
                        type="search"
                        autoComplete="off"
                        placeholder="Search"
                        className="block w-full py-3 pl-11 pr-4 text-sm text-asphalt dark:text-black"
                      />
                      <div className="absolute bottom-0 h-0.5 w-full bg-asphalt"></div>
                    </div>
                  </form>
                </div>
                <div className="flex justify-end md:hidden" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#6B7280"
                    aria-hidden="true"
                    className="h-5 w-5 text-gray-500 dark:text-gray-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="inline-flex items-center justify-end gap-x-3">
                <div aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke=" #6B7280 "
                    aria-hidden="true"
                    className="h-6 w-6 stroke-asphalt stroke-2 hover:cursor-pointer dark:stroke-white md:hidden"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    ></path>
                  </svg>
                </div>
                <div className="h-6 w-6 gap-x-6 md:flex md:w-full md:items-center md:justify-end">
                  <div className="md:hidden">
                    <div className="h-6 w-6 rounded-full div_01">
                      <Image
                        src={profileImg}
                        alt="Vercel Logo"
                        className="mx-auto flex-1 rounded-full hover:cursor-pointer img_02"
                        width={100}
                        height={24}
                        priority
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="hidden cursor-pointer font-euclid-triangle text-xs font-medium uppercase md:block"
                  >
                    ¿HOW DOES KOMON WORK?
                  </button>
                  <div className="ml-16 h-10 w-10 cursor-pointer rounded-full hidden md:block">
                    <Image
                      src={profileImg}
                      alt="Vercel Logo"
                      className="mx-auto flex-1 rounded-full hover:cursor-pointer img_02"
                      width={100}
                      height={24}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
