<script lang="ts">
import { usePlanStore } from '@/store/plan'
import { Plan } from "@/models/Plan.model";
</script>

<script setup lang="ts">
const planStore = usePlanStore()
planStore.getAllPlan()
</script>

<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
      <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8 xl:mb-12">Pick your plan</h2>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-12 mb-6 md:mb-8">
        <template :key="index" v-for="(plan, index) in planStore.plans">
          <PlanCard :plan="plan" />
        </template>
      </div>
    </div>
  </div>
</template>