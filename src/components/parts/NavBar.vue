<script setup lang="ts">
import {ref} from "vue";
import gsap from "/public/scripts/gsap_config.js"
const stateMenu = ref<boolean>(false)
function changeMenuState() {
  stateMenu.value = !stateMenu.value
  if (stateMenu.value) {
    if(window.innerWidth <= 425) {
      gsap.to("#sideMenu", {duration: 0.3, width: "100%"})
    } else {
      gsap.to("#sideMenu", {duration: 0.3, width: "400"})
    }
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
        <router-link to="/">
          <img alt="logo" src="/logo.svg">
        </router-link>
      </div>
    </nav>
    <div id="sideMenu">
      <div class="home_btn">
        <router-link to="/">
          <i class="fa fa-arrow-right-long fa-lg"></i>
          <span>Back to home</span>
        </router-link>
      </div>
      <div class="option">
        <router-link to="/camera_gear" class="gear_option">
          <img alt="scene with camera" src="../../assets/images_menu/gear_option.png" class="gear_option">
          <span>My Camera Gear</span>
        </router-link>
      </div>
      <div class="option">
        <router-link to="/gallery" class="gallery_option">
          <img alt="art gallery" src="../../assets/images_menu/gallery_option.png" class="gallery_option">
          <span>Gallery</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: white;
}
.home_btn {
  padding: 10px 15px;
  font-variant-caps: all-small-caps;

  a {
    &:hover i, &:focus i {
      opacity: 1;
      transform: translateX(15px);
    }
    font-weight: 600;
  }
  i {
    margin-right: 20px;
    opacity: 0;
    transition: 0.4s;
  }
}

#sideMenu {
  background: var(--main-background-color);
  position: fixed;
  top: var(--nav-height);
  left: 0;
  width: 0;
  height: 100vh;
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
    height: 200px;
    line-height: 2;
    font-variant-caps: all-small-caps;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
    overflow: hidden;

    &:hover img, &:focus img {
      transform: scale(1.2);
    }

    a {
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
  position: fixed;
  z-index: 1;
  background: var(--main-background-color);
  width: 100%;
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;

  #logoNav {
    width: 50px;
    img {
      width: 100%;
    }
  }

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