<template>
  Home
  <button @click="toTest('page1')">跳转页面1</button>
  <button @click="toTest('page2')">跳转页面2</button>
  <div>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
function toTest(name: string) {
  router.push({ name });
}
</script>
