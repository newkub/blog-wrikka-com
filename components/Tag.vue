<script setup lang="ts">
interface Props {
  text: string;
  color?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <span
    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
    :class="{
      'bg-blue-100 text-blue-800': !props.color || props.color === 'blue',
      'bg-gray-100 text-gray-800': props.color === 'gray',
      'bg-red-100 text-red-800': props.color === 'red',
      'bg-green-100 text-green-800': props.color === 'green',
      'bg-yellow-100 text-yellow-800': props.color === 'yellow',
      'bg-indigo-100 text-indigo-800': props.color === 'indigo',
      'bg-purple-100 text-purple-800': props.color === 'purple',
      'bg-pink-100 text-pink-800': props.color === 'pink'
    }"
  >
    {{ props.text }}
  </span>
</template>
