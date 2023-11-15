<script setup lang="ts">
import {ref} from "vue";
import gsap from "/public/scripts/gsap_config.js"
const stateMenu = ref<boolean>(false)
function changeMenuState() {
  stateMenu.value = !stateMenu.value
  if (stateMenu.value) {
    gsap.to("#sideMenu", {duration: 0.3, width: "300"})
  } else {
    gsap.to("#sideMenu", {duration: 0.3, width: "0"})
  }
}

</script>

<template>
  <div>
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
      <div class="home_btn">
        <router-link to="/">
          <i class="fa fa-house fa-lg"></i>
          Back to home
        </router-link>
      </div>
      <div class="option">
        <router-link to="/camera_gear" class="gear_option">
          <img alt="scene with camera" src="../assets/images_menu/gear_option.png" class="gear_option">
          <span>My Camera Gear</span>
        </router-link>
      </div>
      <div class="option">
        <router-link to="/gallery" class="gallery_option">
          <img alt="art gallery" src="../assets/images_menu/gallery_option.png" class="gallery_option">
          <span>Gallery</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home_btn {
  padding: 10px 0;
  font-variant-caps: all-small-caps;
  a {
    font-weight: 600;
    color: white;
    text-decoration: none;
  }
}

#sideMenu {
  background: var(--main-background-color);
  position: fixed;
  top: var(--nav-height);
  left: 0;
  width: 0;
  height: calc(100vh - 10vh);
  overflow: hidden;
  color: white;
  z-index: 1;
  display: flex;
  flex-direction: column;
  font-size: 1.4em;

  .option {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 150px;
    line-height: 2;
    font-variant-caps: all-small-caps;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
    overflow: hidden;

    &:hover img {
      transform: scale(1.2);
    }

    a {
      color: white;
      text-decoration: none;
      font-weight: 600;
      span {
        position: absolute;
        left: 0;
        top: 5px;
        margin-left: 10px;
        padding: 0 10px;
        background: var(--main-background-color);
      }
    }

    img {
      width: 100%;
      transition: all 0.6s;
    }
  }
}
nav {
  position: sticky;
  z-index: 1;
  background: var(--main-background-color);
  width: 100%;
  height: var(--nav-height);
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