import { defineStore } from "pinia";
import { Contact } from "@/models/Contact.model";

export const useContactStore = defineStore("contact", {
  state: () =>
    ({
      firstName: "",
      lastName: "",
      accountType: null,
      company: "",
      phone: "",
      email: "",
      contactMethods: [1, 2],
      subject: "",
      message: "",
    } as Contact),
  actions: {
    editFormInput({ key, value }: { key: string; value: string }) {
      this[key] = value;
    },
    editFormContactMethod(value: number) {
      const updateValue = Number(value);
      this.contactMethods = !this.contactMethods.includes(updateValue)
        ? this.contactMethods.concat(updateValue)
        : this.contactMethods.filter(
            (contactMethod: number) => contactMethod !== updateValue
          );
    },
  },
});
