<script lang="ts">
export default defineComponent({
  inheritAttrs: false,
});
</script>

<script lang="ts" setup>
type Props = {
  placeholder?: string;
  value?: string;
};

const { placeholder, value } = defineProps<Props>();
const emit = defineEmits(['input'])

const handleInput = (e): void => {
  emit('input', e.target.value)
}
</script>

<template>
  <textarea
    class="w-full h-64 bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
    v-bind="$attrs"
    :placeholder="placeholder"
    :value="value"
    @input="handleInput"
  />
</template>
