import React from "react";

const Navbar = () => {
  return (
    <div className="">
      {/* Announcement Banner */}
      <div
        id="ab-full-width-with-dismiss-button-on-blue-bg"
        className="hs-removing:-translate-y-full bg-blue-600"
      >
        <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
          <div className="flex">
            <p className="text-white">
              Preline UI Figma is live.{" "}
              <a
                className="decoration-2 underline font-medium hover:text-white/80"
                href="../figma.html"
              >
                Learn more
              </a>
            </p>
            <div className="ps-3 ms-auto">
              <button
                type="button"
                className="inline-flex rounded-lg p-1.5 text-white/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
                data-hs-remove-element="#ab-full-width-with-dismiss-button-on-blue-bg"
              >
                <span className="sr-only">Dismiss</span>
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Announcement Banner */}

      <header class=">flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4 dark:bg-neutral-800">
        <nav
          class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
          aria-label="Global"
        >
          <div class="flex items-center justify-between">
            <a class="flex-none text-xl font-semibold dark:text-white" href="#">
              Brand
            </a>
            <div class="sm:hidden">
              <button
                type="button"
                class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  class="hs-collapse-open:hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  class="hs-collapse-open:block hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              <a class="font-medium text-blue-500" href="#" aria-current="page">
                Landing
              </a>
              <a
                class="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
                href="#"
              >
                Account
              </a>
              <a
                class="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
                href="#"
              >
                Work
              </a>
              <a
                class="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
                href="#"
              >
                Blog
              </a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
