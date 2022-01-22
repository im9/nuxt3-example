<script lang="ts">
import { useEmployeeStore } from '@/store/employee'
import { Employee } from "@/models/Employee.model";
</script>

<script setup lang="ts">
const employeeStore = useEmployeeStore()
employeeStore.getAllEmployee()
</script>

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
          <template :key="index" v-for="(employee, index) in employeeStore.employees">
            <EmployeeInfo :employee="employee" />
          </template>
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
