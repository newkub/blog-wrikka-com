<script setup lang="ts">
interface Props {
	title: string;
	description?: string;
	image?: string;
	link?: string;
	date?: string;
	tags?: string[];
}

const props = defineProps<Props>();
</script>

<template>
  <a v-if="props.link" :href="props.link" class="block">
    <div class="card bg-surface dark:bg-surface-dark rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl hover:animate-bounce">
      <div v-if="props.image" class="relative w-full pb-[56.25%]">
        <img :src="props.image" alt="Card image" class="absolute inset-0 w-full h-full object-cover animate-spin" />
      </div>
      <div class="p-6">
        <h3 class="text-xl font-bold mb-2 text-primary dark:text-primary-dark">{{ props.title }}</h3>
        <p v-if="props.description" class="text-secondary dark:text-secondary-dark mb-4">{{ props.description }}</p>
        <div v-if="props.tags && props.tags.length" class="flex flex-wrap gap-2 mb-4">
          <Tag v-for="tag in props.tags" :key="tag" :text="tag" />
        </div>
        <p v-if="props.date" class="text-sm text-gray-500 mt-2">{{ props.date }}</p>
      </div>
    </div>
  </a>
  <div v-else class="card bg-surface dark:bg-surface-dark rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl">
    <div v-if="props.image" class="relative w-full pb-[56.25%]">
      <img :src="props.image" alt="Card image" class="absolute inset-0 w-full h-full object-cover animate-spin" />
    </div>
    <div class="p-6">
      <h3 class="text-xl font-bold mb-2 text-primary dark:text-primary-dark">{{ props.title }}</h3>
      <p v-if="props.description" class="text-secondary dark:text-secondary-dark mb-4">{{ props.description }}</p>
      <div v-if="props.tags && props.tags.length" class="flex flex-wrap gap-2 mb-4">
        <Tag v-for="tag in props.tags" :key="tag" :text="tag" />
      </div>
      <p v-if="props.date" class="text-sm text-gray-500 mt-2">{{ props.date }}</p>
    </div>
  </div>
</template>