import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
// import Post from './views/Post.vue';

import { defineAsyncComponent } from 'vue';

import Loading from './components/Loading.vue';
import ErrorComponent from './components/Error.vue';

const Post = defineAsyncComponent({
  loader: () => import('./views/Post.vue'),
  loadingComponent: Loading,
  errorComponent: ErrorComponent,
  delay: 10, // tempo para mostrar o loading (em ms)
  timeout: 5000, // tempo limite para abortar o carregamento
});

const routes = [
  { path: '/', name: 'Home', component: Home }, // rota raiz
  { path: '/post/:slug', name: 'Post', component: Post },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

/*
{
    path: '/post/:slug',
    name: 'Post',
    component: () => import('./views/Post.vue'),
}
*/

