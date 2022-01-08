<template>
  <div>
    <!-- hero - start -->
    <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
      <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">

        <section class="min-h-96 flex justify-center items-center flex-1 flex-shrink-0 bg-gray-100 overflow-hidden shadow-lg rounded-lg relative py-16 md:py-20 xl:py-48">
          <!-- image - start -->
          <img src="https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&q=75&fit=crop&w=1500" loading="lazy" alt="Photo by Fakurian Design" class="w-full h-full object-cover object-center absolute inset-0" />
          <!-- image - end -->

          <!-- overlay - start -->
          <div class="bg-indigo-500 mix-blend-multiply absolute inset-0"></div>
          <!-- overlay - end -->

          <!-- text start -->
          <div class="sm:max-w-xl flex flex-col items-center relative p-4">
            <p class="text-indigo-200 text-lg sm:text-xl text-center mb-4 md:mb-8">Very proud to introduce</p>
            <h1 class="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 md:mb-12">Revolutionary way to build the web</h1>

            <div class="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
              <a href="#" class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Start now</a>

              <a href="#" class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Take tour</a>
            </div>
          </div>
          <!-- text end -->
        </section>
      </div>
    </div>
    <!-- hero - end -->

    <!-- gallery - start -->
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8 xl:mb-12">Gallery</h2>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 xl:gap-8 mb-4 md:mb-8">
          <!-- image - start -->
          <a href="#" class="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
            <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" class="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200" />

            <div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

            <span class="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">VR</span>
          </a>
          <!-- image - end -->

          <!-- image - start -->
          <a href="#" class="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
            <img src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Magicle" class="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200" />

            <div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

            <span class="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">Tech</span>
          </a>
          <!-- image - end -->

          <!-- image - start -->
          <a href="#" class="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
            <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Martin Sanchez" class="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200" />

            <div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

            <span class="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">Dev</span>
          </a>
          <!-- image - end -->

          <!-- image - start -->
          <a href="#" class="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Lorenzo Herrera" class="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200" />

            <div class="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

            <span class="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">Retro</span>
          </a>
          <!-- image - end -->
        </div>

        <div class="flex justify-between items-start sm:items-center gap-8">
          <p class="max-w-screen-sm text-gray-500 text-sm lg:text-base">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>

          <a href="#" class="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3">More</a>
        </div>
      </div>
    </div>
    <!-- gallery - end -->

    <!-- stats - start -->
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="max-w-screen-lg px-4 md:px-8 mx-auto">
        <!-- text - start -->
        <div class="mb-8 md:mb-12">
          <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Our Team by the numbers</h2>

          <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
        </div>
        <!-- text - end -->

        <div class="grid grid-cols-2 md:grid-cols-4 bg-indigo-500 rounded-lg gap-6 md:gap-8 p-6 md:p-8">
          <!-- stat - start -->
          <div class="flex flex-col items-center">
            <div class="text-white text-xl sm:text-2xl md:text-3xl font-bold">200</div>
            <div class="text-indigo-200 text-sm sm:text-base">People</div>
          </div>
          <!-- stat - end -->

          <!-- stat - start -->
          <div class="flex flex-col items-center">
            <div class="text-white text-xl sm:text-2xl md:text-3xl font-bold">500+</div>
            <div class="text-indigo-200 text-sm sm:text-base">People</div>
          </div>

          <!-- stat - start -->
          <div class="flex flex-col items-center">
            <div class="text-white text-xl sm:text-2xl md:text-3xl font-bold">1000+</div>
            <div class="text-indigo-200 text-sm sm:text-base">Customers</div>
          </div>
          <!-- stat - end -->

          <!-- stat - start -->
          <div class="flex flex-col items-center">
            <div class="text-white text-xl sm:text-2xl md:text-3xl font-bold">A couple</div>
            <div class="text-indigo-200 text-sm sm:text-base">Coffee breaks</div>
          </div>
          <!-- stat - end -->
        </div>
      </div>
    </div>
    <!-- stats - end -->

    <!-- team - start -->
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
        <!-- text - start -->
        <div class="mb-10 md:mb-16">
          <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Meet our Team</h2>

          <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
        </div>
        <!-- text - end -->

        <div class="grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-12">
          <!-- person - start -->
          <div class="flex flex-col items-center">
            <div class="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
              <img src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by Radu Florin" class="w-full h-full object-cover object-center" />
            </div>

            <div>
              <div class="text-indigo-500 md:text-lg font-bold text-center">John McCulling</div>
              <p class="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">Founder / CEO</p>

              <!-- social - start -->
              <div class="flex justify-center">
                <div class="flex gap-4">
                  <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                    <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                    <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
              <!-- social - end -->
            </div>
          </div>
          <!-- person - end -->

          <!-- person - start -->
          <div class="flex flex-col items-center">
            <div class="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
              <img src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by christian ferrer" class="w-full h-full object-cover object-center" />
            </div>

            <div>
              <div class="text-indigo-500 md:text-lg font-bold text-center">Kate Berg</div>
              <p class="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">CFO</p>

              <!-- social - start -->
              <div class="flex justify-center">
                <div class="flex gap-4">
                  <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                    <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                    <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
              <!-- social - end -->
            </div>
          </div>
          <!-- person - end -->

          <!-- person - start -->
          <div class="flex flex-col items-center">
            <div class="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
              <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by Ayo Ogunseinde" class="w-full h-full object-cover object-center" />
            </div>

            <div>
              <div class="text-indigo-500 md:text-lg font-bold text-center">Greg Jackson</div>
              <p class="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">CTO</p>

              <!-- social - start -->
              <div class="flex justify-center">
                <div class="flex gap-4">
                  <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                    <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                    <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
              <!-- social - end -->
            </div>
          </div>
          <!-- person - end -->

          <!-- person - start -->
          <div class="flex flex-col items-center">
            <div class="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
              <img src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by Midas Hofstra" class="w-full h-full object-cover object-center" />
            </div>

            <div>
              <div class="text-indigo-500 md:text-lg font-bold text-center">Robert Greyson</div>
              <p class="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">Creative Director</p>

              <!-- social - start -->
              <div class="flex justify-center">
                <div class="flex gap-4">
                  <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                    <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                    <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
              <!-- social - end -->
            </div>
          </div>
          <!-- person - end -->

          <!-- person - start -->
          <div class="flex flex-col items-center">
            <div class="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
              <img src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by Elizeu Dias" class="w-full h-full object-cover object-center" />
            </div>

            <div>
              <div class="text-indigo-500 md:text-lg font-bold text-center">John Roberts</div>
              <p class="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">Investor Relations</p>

              <!-- social - start -->
              <div class="flex justify-center">
                <div class="flex gap-4">
                  <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                    <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                    <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
              <!-- social - end -->
            </div>
          </div>
          <!-- person - end -->

          <!-- person - start -->
          <div class="flex flex-col items-center">
            <div class="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
              <img src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by Matheus Ferrero" class="w-full h-full object-cover object-center" />
            </div>

            <div>
              <div class="text-indigo-500 md:text-lg font-bold text-center">Judy Amandez</div>
              <p class="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">Senior Art Director</p>

              <!-- social - start -->
              <div class="flex justify-center">
                <div class="flex gap-4">
                  <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                    <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                    <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
              <!-- social - end -->
            </div>
          </div>
          <!-- person - end -->

          <!-- person - start -->
          <div class="flex flex-col items-center">
            <div class="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
              <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by Leilani Angel" class="w-full h-full object-cover object-center" />
            </div>

            <div>
              <div class="text-indigo-500 md:text-lg font-bold text-center">Rahul Williams</div>
              <p class="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">Creative Director</p>

              <!-- social - start -->
              <div class="flex justify-center">
                <div class="flex gap-4">
                  <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                    <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                    <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
              <!-- social - end -->
            </div>
          </div>
          <!-- person - end -->

          <!-- person - start -->
          <div class="flex flex-col items-center">
            <div class="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
              <img src="https://images.unsplash.com/photo-1562904403-a5106bef8319?auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by Jernej Graj" class="w-full h-full object-cover object-center" />
            </div>

            <div>
              <div class="text-indigo-500 md:text-lg font-bold text-center">Ari Ferris</div>
              <p class="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">Marketing Analyst</p>

              <!-- social - start -->
              <div class="flex justify-center">
                <div class="flex gap-4">
                  <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                    <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                    <svg class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
              <!-- social - end -->
            </div>
          </div>
          <!-- person - end -->
        </div>
      </div>
    </div>
    <!-- team - end -->

    <!-- call to action - start -->
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div class="md:h-80 flex flex-col sm:flex-row bg-gray-200 rounded-lg overflow-hidden">
          <!-- image - start -->
          <div class="w-full sm:w-1/2 lg:w-2/5 h-48 sm:h-auto order-first sm:order-none bg-gray-300">
            <img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Andras Vas" class="w-full h-full object-cover object-center" />
          </div>
          <!-- image - end -->

          <!-- content - start -->
          <div class="w-full sm:w-1/2 lg:w-3/5 flex flex-col p-4 sm:p-8">
            <h2 class="text-gray-800 text-xl md:text-2xl lg:text-4xl font-bold mb-4">Help center</h2>

            <p class="max-w-md text-gray-600 mb-8">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>

            <div class="mt-auto">
              <a href="#" class="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 text-gray-800 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Contact support</a>
            </div>
          </div>
          <!-- content - end -->
        </div>
      </div>
    </div>
    <!-- call to action - end -->
  </div>
</template>
