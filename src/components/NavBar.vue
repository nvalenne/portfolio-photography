<script setup lang="ts">
import {ref} from "vue";
import gsap from "/public/scripts/gsap_config.js"
const stateMenu = ref<boolean>(false)
function changeMenuState() {
  stateMenu.value = !stateMenu.value
  if (stateMenu.value) {
    gsap.to("#sideMenu", {duration: 0.3, width: "20vw"})
  } else {
    gsap.to("#sideMenu", {duration: 0.3, width: "0"})
  }
}
</script>

<template>
    <nav>
      <div id="navBtn" :class="stateMenu.valueOf() ? 'menuOpened' : ''" @click="changeMenuState">
        <span class="bar1"></span>
        <span class="bar2"></span>
        <span class="bar3"></span>
      </div>
      <div id="logoNav">
        <img src="../assets/vue.svg" alt="logo">
      </div>
    </nav>
    <div id="sideMenu">
        <router-link to="/">Home</router-link>
        <router-link to="/camera_gear">My Camera Gear</router-link>
        <router-link to="/gallery">Gallery</router-link>
    </div>
</template>

<style scoped lang="scss">
#sideMenu {
  background: var(--main-background-color);
  position: fixed;
  top: 10vh;
  left: 0;
  width: 0;
  height: calc(100vh - 10vh);
  overflow-x: hidden;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;

  a {
    padding: 5px 10px;
    font-size: 1.5em;
    box-sizing: border-box;
    cursor: pointer;
    width: 100%;
    line-height: 2;
    font-variant-caps: all-small-caps;
    color: white;
    text-decoration: none;
  }
  a:hover {
    background: var(--main-background-color-hover);
    transition: var(--transition-time) ease-in-out;
  }
}
nav {
  position: fixed;
  z-index: 1;
  background: var(--main-background-color);
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;

  #navBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    left: 0;
    content: '';
    width: 50px;
    height: 50px;
    margin-left: 20px;
    cursor: pointer;

    .bar1, .bar2, .bar3 {
      display: flex;
      width: 30px;
      height: 2px;
      background: white;
      margin: 4px 0;
      transition:var(--transition-time) ease-in-out;
    }
  }
  .menuOpened {
    .bar1 {
      transform: rotate(-45deg) translateX(-5px) translateY(9px);
      transition: var(--transition-time) ease-in-out;
    }
    .bar2 {
      opacity: 0;
      transition: var(--transition-time) ease-in-out;
    }
    .bar3 {
      transform: rotate(45deg) translateX(-5px) translateY(-9px);
      transition: var(--transition-time) ease-in-out;
    }

  }
}
</style>