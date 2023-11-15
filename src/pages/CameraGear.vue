<script setup lang="ts">
import CanonModel3D from "../components/CanonModel3D.vue";
const sceneWidth = window.innerWidth/2;
</script>

<template>
  <div class="container">
    <div class="containerScene">
      <CanonModel3D :width="sceneWidth" :height="500"/>
    </div>

  </div>
</template>

<style scoped lang="scss">
.containerScene {
  display: flex;
  justify-content: right;
  align-items: center;
}
</style>