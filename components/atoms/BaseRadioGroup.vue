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
  selectedValue?: any;
};

const { options, selectedValue } = defineProps<Props>();
const emit = defineEmits(['change'])

const handleChange = (e): void => {
  emit('change', e.target.value)
}
</script>

<template>
  <div class="flex flex-row">
    <label
      :key="`${index}`"
      v-for="({ label, value }, index) in options"
      class="inline-flex items-center basis-1/2 md:basis-1/4"
    >
      <input type="radio" class="form-radio" :value="value" :checked="selectedValue === value" @change="handleChange">
      <span class="ml-2 mr-4 text-sm font-medium text-gray-600">{{ label }}</span>
    </label>
  </div>
</template>
