<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  inheritAttrs: false,
});
</script>

<script lang="ts" setup>
interface IkeyValue {
  label: string;
  value: any;
}

type Props = {
  options: IkeyValue[];
  selectedValue?: any;
};

const { options, selectedValue } = defineProps<Props>();
const emit = defineEmits(['change'])

const handleChange = (e): void => {
  emit('change', e.target.value)
}
</script>

<template>
  <select
    class="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    :value="selectedValue"
    @change="handleChange"
  >
    <option value="">-</option>
    <option
      :key="`${index}`"
      v-for="({ label, value }, index) in options"
      :value="value"
    >
      {{ label }}
    </option>
  </select>
</template>
