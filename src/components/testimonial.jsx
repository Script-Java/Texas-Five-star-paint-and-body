const Testimonials = () => {
    return (
      <div className="">
        {/* Testimonials */}
        <div className="overflow-hidden bg-gray-800 dark:bg-neutral-950">
          <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* Title */}
            <div className="max-w-2xl w-3/4 lg:w-1/2 mb-6 sm:mb-10 md:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-semibold">
                Loved by business and individuals across the globe
              </h2>
            </div>
            {/* End Title */}
            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card */}
              <div className="flex h-auto">
                <div className="flex flex-col bg-white rounded-xl dark:bg-neutral-900">
                  <div className="flex-auto p-4 md:p-6">
                    <p className="text-base italic md:text-lg text-gray-800 dark:text-neutral-200">
                      " With Preline, we're able to easily track our performance
                      in full detail. It's become an essential tool for us to
                      grow and engage with our audience. "
                    </p>
                  </div>
                  <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-neutral-800">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full"
                          src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                          alt="Image Description"
                        />
                      </div>
                      <div className="grow ms-3">
                        <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-neutral-200">
                          Josh Tyson
                        </p>
                        <p className="text-xs text-gray-500 dark:text-neutral-400">
                          Product Manager | Capsule
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Card */}
              {/* Card */}
              <div className="flex h-auto">
                <div className="flex flex-col bg-white rounded-xl dark:bg-neutral-900">
                  <div className="flex-auto p-4 md:p-6">
                    <p className="text-base italic md:text-lg text-gray-800 dark:text-neutral-200">
                      " In September, I will be using this theme for 2 years. I
                      went through multiple updates and changes and I'm very
                      glad to see the consistency and effort made by the team. "
                    </p>
                  </div>
                  <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-neutral-800">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full"
                          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                          alt="Image Description"
                        />
                      </div>
                      <div className="grow ms-3">
                        <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-neutral-200">
                          Luisa
                        </p>
                        <p className="text-xs text-gray-500 dark:text-neutral-400">
                          Senior Director of Operations | Fitbit
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Card */}
              {/* Card */}
              <div className="flex h-auto">
                <div className="flex flex-col bg-white rounded-xl dark:bg-neutral-900">
                  <div className="flex-auto p-4 md:p-6">
                    <p className="text-base italic md:text-lg text-gray-800 dark:text-neutral-200">
                      " Refreshing and Thought provoking design and it changes
                      my view about how I design the websites. Great typography,
                      modern clean white design, nice tones of the color. "
                    </p>
                  </div>
                  <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-neutral-800">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full"
                          src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                          alt="Image Description"
                        />
                      </div>
                      <div className="grow ms-3">
                        <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-neutral-200">
                          Alisa Williams
                        </p>
                        <p className="text-xs text-gray-500 dark:text-neutral-400">
                          Entrepreneur | Happy customer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Card */}
            </div>
            {/* End Grid */}

          </div>
        </div>
        {/* End Testimonials */}
      </div>
    );
}
 
export default Testimonials;