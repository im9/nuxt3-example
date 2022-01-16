<script lang="ts">
import { useContactStore } from '@/store/contact'

export default {
  layout: "custom",
};
</script>

<script setup lang="ts">
const contactStore = useContactStore()

const handleSendBtnClick = async (e) => {
  await contactStore.sendForm().then((res) => {
    const router = useRouter()
    router.push('/contact/thanks').then(() => {
      window.scroll({ top: 0 });
    })
  }).catch(() => {
    alert('error')
  })
}
</script>

<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <!-- text - start -->
      <div class="mb-10 md:mb-16">
        <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Confirm</h2>
        <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
      </div>
      <!-- text - end -->

      <!-- form - start -->
      <form class="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
        <div class="sm:col-span-2">
          <BaseLabel for="account-type" label="Account Type*" />
          <div>
            <div class="inline-block text-gray-400 text-sm sm:text-base mb-2">{{ $utils.accountType(contactStore.accountType) }}</div>
          </div>
        </div>

        <div>
          <BaseLabel for="first-name" label="First name*" />
          <div>
            <div class="inline-block text-gray-400 text-sm sm:text-base mb-2">{{ contactStore.firstName }}</div>
          </div>
        </div>

        <div>
          <BaseLabel for="last-name" label="Last name*" />
          <div>
            <div class="inline-block text-gray-400 text-sm sm:text-base mb-2">{{ contactStore.lastName }}</div>
          </div>
        </div>

        <div class="sm:col-span-2">
          <BaseLabel for="company" label="Company" />
          <div>
            <div class="inline-block text-gray-400 text-sm sm:text-base mb-2">{{ contactStore.company }}</div>
          </div>
        </div>

        <div class="sm:col-span-2">
          <BaseLabel for="phone" label="Phone" />
          <div>
            <div class="inline-block text-gray-400 text-sm sm:text-base mb-2">{{ contactStore.phone }}</div>
          </div>
        </div>

        <div class="sm:col-span-2">
          <BaseLabel for="email" label="Email*" />
          <div>
            <div class="inline-block text-gray-400 text-sm sm:text-base mb-2">{{ contactStore.email }}</div>
          </div>
        </div>

        <div class="sm:col-span-2">
          <BaseLabel for="contactType" label="Your preferred contact method*" />
          <div :key="index" v-for="(value, index) in contactStore.contactMethods">
            <div class="inline-block text-gray-400 text-sm sm:text-base mb-2">{{ $utils.contactType(value) }}</div>
          </div>
        </div>

        <div class="sm:col-span-2">
          <BaseLabel for="subject" label="Subject*" />
          <div>
            <div class="inline-block text-gray-400 text-sm sm:text-base mb-2">{{ contactStore.subject }}</div>
          </div>
        </div>

        <div class="sm:col-span-2">
          <BaseLabel for="message" label="Message*" />
          <div>
            <div class="inline-block text-gray-400 text-sm sm:text-base mb-2">{{ contactStore.message }}</div>
          </div>
        </div>

        <div class="sm:col-span-2 flex justify-between items-center">
          <BaseButton label="send" @click.prevent="handleSendBtnClick" />
          <span class="text-gray-500 text-sm text-red-500">*Required</span>
        </div>

        <p class="text-gray-400 text-xs">By signing up to our newsletter you agree to our <a href="#" class="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100">Privacy Policy</a>.</p>
      </form>
      <!-- form - end -->
    </div>
  </div>
</template>
