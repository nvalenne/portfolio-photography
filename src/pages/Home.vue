<script setup lang="ts">
import gsap from "/public/scripts/gsap_config.js"
import {onMounted} from "vue";

onMounted(() => {
  animationW()
});
const animationW = () => {
  let tl = gsap.timeline({repeat: -1, repeatDelay: 10})
  tl.to('.w', {duration: 2, rotate: 360, ease: "ease"})
}
</script>

<template>
  <div class="body_container">
    <div id="main_title">
        <div class="w">W</div>
        <div>elcome</div>
    </div>
    <div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.box {
  width: 100px;
  height: 100px;
  background-color: red;
}
#main_title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: white;
  font-size: 8em;
  line-height: 1.1;
}
</style>