import { defineNuxtPlugin } from "#app";
import * as constants from "@/constants";
import * as utils from "@/utils";

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      constants,
      utils,
    },
  };
});
