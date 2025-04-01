<script setup lang="ts">
interface Props {
	title: string;
	description?: string;
	image?: string;
	link?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="card bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl">
    <img v-if="props.image" :src="props.image" alt="Card image" class="w-full h-48 object-cover" />
    <div class="p-6">
      <h3 class="text-xl font-bold mb-2">{{ props.title }}</h3>
      <p v-if="props.description" class="text-gray-600 dark:text-gray-300 mb-4">{{ props.description }}</p>
      <a v-if="props.link" :href="props.link" class="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
        Learn More
      </a>
    </div>
  </div>
</template>