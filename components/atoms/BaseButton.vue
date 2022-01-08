<script lang="ts">
export default defineComponent({
  inheritAttrs: false,
});
</script>

<script lang="ts" setup>
type Props = {
  label: string;
  to?: string;
};

const { label, to } = defineProps<Props>();

const emit = defineEmits(['click'])

const handleClick = (e): void => {
  emit('click', e)
}
</script>

<template>
  <component
    :is="to ? 'NuxtLink' : 'button'"
    :to="to"
    type="button"
    class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
    @click="handleClick"
    >
    {{ label }}
  </component>
</template>
