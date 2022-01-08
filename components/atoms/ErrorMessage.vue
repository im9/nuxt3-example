<script lang="ts">
export default defineComponent({
  inheritAttrs: false,
});
</script>

<script lang="ts" setup>
type Props = {
  message?: string;
};

const { message } = defineProps<Props>();
</script>

<template>
  <p v-if="message" class="text-xs text-red-500 mt-3">{{ message }}</p>
</template>
