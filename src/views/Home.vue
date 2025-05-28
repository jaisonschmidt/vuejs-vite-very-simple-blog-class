<template>
  <div>
    <h1>Meu Blog</h1>
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script setup>
import { posts } from '../data/posts';
import PostCard from '../components/PostCard.vue';
</script>
