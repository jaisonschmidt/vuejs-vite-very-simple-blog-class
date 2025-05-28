<template>
  <div class="mb-6 p-4 border rounded-lg shadow hover:shadow-lg transition">
    <router-link :to="`/post/${post.slug}`">
      <h2 class="text-xl font-semibold text-blue-600 hover:underline">
        {{ post.title }}
      </h2>
    </router-link>
    <p class="text-gray-700">{{ post.description }}</p>
    <hr />
  </div>
</template>

<script setup>
defineProps({ post: Object });
</script>
