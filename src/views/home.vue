<template>
  Home
  <div @click="toTest">to test</div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
function toTest() {
  router.push({ name: "test" });
}
</script>
