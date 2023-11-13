<script setup lang="ts">
import Model3D from "./components/Model3D.vue";
import gsap from "/public/scripts/gsap_config.js"
import {onMounted} from "vue";
onMounted(() => {
  gsap.to(".boite", {duration: 2, x: 100, y: 100, rotation: 360, ease: "bounce"})
});
</script>

<template>
  <div>
    <Model3D :width="300" :height="300"/>
    <div class="test">
      <div class="boite"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.test {
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 20vh;
  flex-direction: column;
}
.boite {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
