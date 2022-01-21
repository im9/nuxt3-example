import { defineStore } from "pinia";
import { Plan } from "@/models/Plan.model";

export const usePlanStore = defineStore("plan", {
  state: () =>
    ({ plans: [] as Plan[] }),
  actions: {
    async getAllPlan() {
      try {
        this.plans = await $fetch('/api/plan', { method: 'GET' })
      } catch (e) {
        console.log(e)
      }
    },
  },
});
