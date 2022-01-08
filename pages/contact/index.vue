<script lang="ts">
import { useValidation } from 'vue-composable'
import { useContactStore } from '@/store/contact'

export default {
  layout: "custom",
};
</script>

<script lang="ts" setup>
const contactStore = useContactStore()
const { accountType, firstName, lastName, email, phone, contactMethods, subject, message } = toRefs(contactStore)
const { required, emailFormat, phoneNumberFormat } = useConditions()

const params = useValidation({
  accountType: {
    $value: accountType,
    required,
    $message: 'accountType is required',
  },
  firstName: {
    $value: firstName,
    required,
    $message: 'firstName is required',
  },
  lastName: {
    $value: lastName,
    required,
    $message: 'lastName is required',
  },
  email: {
    $value: email,
    required,
    format: {
      $validator: emailFormat,
      $message: 'email is invalid',
    },
  },
  phone: {
    $value: phone,
    required,
    format: {
      $validator: phoneNumberFormat,
      $message: 'phone is invalid',
    },
  },
  contactMethods: {
    $value: contactMethods,
    required,
    $message: 'contact method is required',
  },
  subject: {
    $value: subject,
    required,
    $message: 'subject is required',
  },
  message: {
    $value: message,
    required,
    $message: 'message is required',
  },
})

const handleConfirmBtnClick = () => {
  if (!params.$anyInvalid) {
    const router = useRouter()
    router.push('/contact/confirm')
  } else {
    params.$touch()
  }
  window.scroll({ top: 0 });
}
</script>

<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <!-- text - start -->
      <div class="mb-10 md:mb-16">
        <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Get in touch</h2>
        <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
      </div>
      <!-- text - end -->

      <!-- form - start -->
      <form class="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
        <div class="mb-4 sm:col-span-2">
          <BaseLabel for="account-type" label="Account type*" />
          <div>
            <BaseRadioGroup :options="$constants.AccountTypes" :selectedValue="contactStore.accountType" @change="contactStore.editFormInput({ key: 'accountType', value: Number($event) })" />
            <ErrorMessage v-if="params.accountType.$dirty && params.accountType.$anyInvalid" :message="params.accountType.$message" />
          </div>
        </div>

        <div>
          <BaseLabel for="first-name" label="First name*" />
          <BaseTextInput name="first-name" placeholder="" :value="contactStore.firstName" @input="contactStore.editFormInput({ key: 'firstName', value: $event });" />
          <ErrorMessage v-if="params.firstName.$dirty && params.firstName.$anyInvalid" :message="params.firstName.$message" />
        </div>

        <div>
          <BaseLabel for="last-name" label="Last name*" />
          <BaseTextInput name="last-name" placeholder="" :value="contactStore.lastName" @input="contactStore.editFormInput({ key: 'lastName', value: $event })" />
          <ErrorMessage v-if="params.lastName.$dirty && params.lastName.$anyInvalid" :message="params.lastName.$message" />
        </div>

        <div class="sm:col-span-2">
          <BaseLabel for="company" label="Company" />
          <BaseTextInput name="company" placeholder="" :value="contactStore.company" @input="contactStore.editFormInput({ key: 'company', value: $event })" />
        </div>

        <div class="mt-4 sm:col-span-2">
          <BaseLabel for="phone" label="Phone" />
          <BaseTextInput name="phone" placeholder="03-1234-5678" :value="contactStore.phone" @input="contactStore.editFormInput({ key: 'phone', value: $event })" />
          <ErrorMessage v-if="params.phone.$dirty && params.phone.$anyInvalid" :message="params.phone.format.$message" />
        </div>

        <div class="mt-4 sm:col-span-2">
          <BaseLabel for="email" label="Email*" />
          <BaseTextInput name="email" placeholder="test@sample.com" :value="contactStore.email" @input="contactStore.editFormInput({ key: 'email', value: $event })" />
          <ErrorMessage v-if="params.email.$dirty && params.email.$anyInvalid" :message="params.email.format.$message" />
        </div>

        <div class="mt-4 sm:col-span-2">
          <BaseLabel for="contactType" label="Your preferred contact method*" />
          <BaseCheckboxGroup
            :options="$constants.ContactTypes"
            :selectedValues="contactStore.contactMethods"
            @change="contactStore.editFormContactMethod($event)"
          />
          <ErrorMessage v-if="params.contactMethods.$dirty && params.contactMethods.$anyInvalid" :message="params.contactMethods.$message" />
        </div>

        <div class="sm:col-span-2">
          <BaseLabel for="subject" label="Subject*" />
          <BaseTextInput name="subject" :value="contactStore.subject" @input="contactStore.editFormInput({ key: 'subject', value: $event })" />
          <ErrorMessage v-if="params.subject.$dirty && params.subject.$anyInvalid" :message="params.subject.$message" />
        </div>

        <div class="sm:col-span-2">
          <BaseLabel for="message" label="Message*" />
          <BaseTextArea name="message" :value="contactStore.message" @input="contactStore.editFormInput({ key: 'message', value: $event })" />
          <ErrorMessage v-if="params.message.$dirty && params.message.$anyInvalid" :message="params.message.$message" />
        </div>

        <div class="sm:col-span-2 flex justify-between items-center">
          <BaseButton label="confirm" @click.prevent="handleConfirmBtnClick" />
          <span class="text-gray-500 text-sm text-red-500">*Required</span>
        </div>

        <p class="text-gray-400 text-xs">By signing up to our newsletter you agree to our <a href="#" class="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100">Privacy Policy</a>.</p>
      </form>
      <!-- form - end -->
    </div>
  </div>
</template>
