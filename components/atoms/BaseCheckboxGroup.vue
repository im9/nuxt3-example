<script lang="ts">
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
  selectedValues: any[];
};

const { options, selectedValues } = defineProps<Props>();
const emit = defineEmits(['change'])

const handleChange = (e): void => {
  emit('change', e.target.value)
}

const isChecked = (value: any): boolean => {
  return selectedValues?.includes(value)
}
</script>

<template>
  <div class="flex flex-row">
    <div :key="`${index}`" v-for="({ label, value }, index) in options" class="basis-1/2 md:basis-1/4 mb-4">
      <input
        :id="`checkbox-${index}`"
        :aria-describedby="`checkbox-${index}`"
        type="checkbox"
        class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
        :value="value"
        :checked="isChecked(value)"
        @change="handleChange"
      >
      <label :for="`checkbox-${index}`" class="text-sm ml-3 font-medium text-gray-600">{{ label }}</label>
    </div>
  </div>
</template>
