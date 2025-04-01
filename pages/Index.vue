<script setup lang="ts">
import Card from "../components/card.vue";
import { Blog } from "../data/blog";
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
    <Card 
      v-for="post in Blog"
      :key="post.link"
      :title="post.title"
      :description="post.description"
      :image="post.image"
      :date="post.date"
      :tags="post.tags"
      :link="post.link"
    />
  </div>
</template>