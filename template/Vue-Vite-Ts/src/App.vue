<template>
  <div class="text-center selection:bg-green-100">
    <img class="mx-auto mt-12 mb-8" alt="Vue logo" src="./assets/logo.png" :class="css.test" />
    <HelloWorld msg="Vite + Vue 3 + Typescript" />
    {{ css.test }}
  </div>
</template>

<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import css from "./index.module.less";
</script>