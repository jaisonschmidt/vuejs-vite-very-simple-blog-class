<template>
  <div>
    <router-link :to="`/post/${post.slug}`">
      <h2>
        {{ post.title }}
      </h2>
    </router-link>
    <p>{{ post.description }}</p>
    <hr />
  </div>
</template>

<script setup>
defineProps({ post: Object });
</script>
