const ServicesPage = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="">
        <h1 className="">Services we provide</h1>
      </div>
      <div className="">
        <img
          src="https://th.bing.com/th/id/OIP.sWCvltMZF_s3mjA5sL-RdgHaE8?w=258&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt=""
        />
      </div>
      <div className="">
        <div className="">
          <h1>Auto body repair</h1>
        </div>
        <ul class="space-y-3 text-sm">
          <li class="flex space-x-3">
            <svg
              class="flex-shrink-0 size-4 mt-0.5 text-blue-600 dark:text-blue-500"
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
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span class="text-gray-800 dark:text-neutral-400">
              Frame Repair
            </span>
          </li>

          <li class="flex space-x-3">
            <svg
              class="flex-shrink-0 size-4 mt-0.5 text-blue-600 dark:text-blue-500"
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
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span class="text-gray-800 dark:text-neutral-400">License</span>
          </li>

          <li class="flex space-x-3">
            <svg
              class="flex-shrink-0 size-4 mt-0.5 text-blue-600 dark:text-blue-500"
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
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span class="text-gray-800 dark:text-neutral-400">
              Terms & Conditions
            </span>
          </li>
        </ul>
      </div>
      <div className="">
        <a
          class="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
          href="#"
        >
          <div class="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
            <img
              class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
              src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
              alt="Image Description"
            />
          </div>
          <div class="p-4 md:p-5">
            <h3 class="text-lg font-bold text-gray-800 dark:text-white">
              Card title
            </h3>
            <p class="mt-1 text-gray-500 dark:text-neutral-400">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ServicesPage;
