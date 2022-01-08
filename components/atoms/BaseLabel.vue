<script lang="ts">
export default defineComponent({
  inheritAttrs: false,
});
</script>

<script lang="ts" setup>
type Props = {
  label: string;
};

const { label } = defineProps<Props>();
</script>

<template>
  <label v-bind="$attrs" class="inline-block text-gray-800 text-sm sm:text-base mb-4">{{ label }}</label>
</template>
