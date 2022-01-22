import { defineStore } from "pinia";
import { Employee } from "@/models/Employee.model";

export const useEmployeeStore = defineStore("employee", {
  state: () =>
    ({ employees: [] as Employee[] }),
  actions: {
    async getAllEmployee() {
      try {
        this.employees = await $fetch('/api/employee', { method: 'GET' })
      } catch (e) {
        console.log(e)
      }
    },
  },
});
