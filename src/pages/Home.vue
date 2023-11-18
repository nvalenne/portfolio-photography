<script setup lang="ts">
import gsap from "/public/scripts/gsap_config.js"
import {onMounted} from "vue";

onMounted(() => {
  // Animation du titre
  gsap.from('.letter', {
    scrollTrigger: {
      start: "top 30%",
      end: "bottom =-300",
      trigger: '.letter',
      toggleActions: 'play reverse restart reverse',
      id: 'welcome',
      pin: '#main_title',
    },
    x: -1500,
    duration: 1,
    ease: "ease out",
    rotate: -360
  })

  // Animation de la présentation
  if (window.innerWidth >= 768) {
    gsap.from('.left_part', {
      scrollTrigger: {
        start: "top 30%",
        end: "bottom 45%",
        trigger: '.self_presentation_container',
        id: 'presentation_left',
        pin: true,
        scrub: 2,
      },
      x: -1500,
      duration: 1,
      ease: "ease out",

    })
    gsap.from('.right_part', {
      scrollTrigger: {
        start: "top 20%",
        end: "bottom 35%",
        trigger: '.self_presentation_container',
        id: 'presentation_right',
        pin: true,
        scrub: 2,
      },
      x: 1500,
      duration: 1,
      ease: "ease out",
    })
  } else {
    gsap.from('.left_part', {
      scrollTrigger: {
        start: "top 35%",
        end: "bottom 65%",
        trigger: '.left_part',
        id: '.presentation_left',
        scrub: 2,
        pin: true,
      },
      x: -1500,
      duration: 1,
      ease: "ease out",
    })
    gsap.from('.right_part', {
      scrollTrigger: {
        start: "top 45%",
        end: "bottom 50%",
        trigger: '.right_part',
        id: 'presentation_right',
        pin: '.self_presentation_container',
        scrub: 2,
      },
      x: 1500,
      duration: 1,
      ease: "ease out",
    })
  }
})
</script>

<template>
  <div class="body_container">
    <div id="main_title">
      <div class="welcome">
        <div class="letter">W</div>
        <div class="letter">e</div>
        <div class="letter">l</div>
        <div class="letter">c</div>
        <div class="letter">o</div>
        <div class="letter">m</div>
        <div class="letter">e</div>
      </div>
      <div class="to">
        <div class="letter">t</div>
        <div class="letter">o</div>
      </div>
      <div class="my_portfolio">
        <div class="letter">m</div>
        <div class="letter">y</div>
        <div class="spacer"></div>
        <div class="letter">p</div>
        <div class="letter">o</div>
        <div class="letter">r</div>
        <div class="letter">t</div>
        <div class="letter">f</div>
        <div class="letter">o</div>
        <div class="letter">l</div>
        <div class="letter">i</div>
        <div class="letter">o</div>
      </div>
    </div>
    <div class="self_presentation_container hr_top_bottom">
      <div class="left_part">
        <p>In 2020, I bought my first camera, and today I have been learning more and more about the photography art. My
          new passion, after computer science, is born.</p>
        <p>I've discovered the world of photography, and now I've been looking for new ways to improve my skills and
          learning more on the art of the photography.</p>
        <p>I'm in landscape and wildlife photography, and i'm currently working on portrait photography.</p>
        <div class="my_social_medias">
          <a href="https://instagram.com/natv.shoots?igshid=NzZlODBkYWE4Ng==" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-instagram fa-2xl"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61551993352187" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-facebook fa-2xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/nathan-valenne-23b570236" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-linkedin fa-2xl"></i>
          </a>
        </div>
      </div>
      <div class="right_part">
        <div class="right_part_photo">
          <img alt="me in self portrait" src="../assets/self_photo/portrait_2_square.png"/>
        </div>
        <div class="right_part_text">
          <div><b>Nathan VALENNE</b></div>
          <div>Beginner photographer <i>(and web dev !)</i></div>
        </div>
      </div>
    </div>
    <div class="navigation_options_container">
      <div class="navigation_options_title">
        <h2>See also </h2>
      </div>
      <div class="navigation_options_content">
        <div class="navigation_option" id="gallery_option">
          <router-link to="/gallery">
            <span><i class="fa fa-arrow-right-long"></i> Gallery</span>
          </router-link>

        </div>
        <div class="navigation_option" id="camera_gear_option">
          <router-link to="/camera_gear">
            <span><i class="fa fa-arrow-right-long"></i> My Camera Gear</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.body_container {
  position: relative;
  padding: 20px;
  color: white;
}

a {
  text-decoration: none;
  color: white;
}

.spacer {
  margin: 0 0.1em;
}

#main_title {
  .welcome, .my_portfolio {
    font-size: 3em;
    display: flex;
  }

  .to {
    display: flex;
    font-size: 1.5em;
  }

  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: white;
  line-height: 1.1;
}

.self_presentation_container {
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;

  .left_part {
    font-size: 0.9em;

    p {
      line-height: 1.5;
      margin: 1em 0;
    }
  }

  .right_part {
    text-align: center;
    font-size: 1.3em;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    margin: 20px 0;

    .right_part_photo {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      img {
        border-radius: 50%;
        width: 40%;
      }
    }
  }

  .my_social_medias {
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }
}

.navigation_options_container {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  gap: 30px;
  font-size: 1.5em;
  .navigation_options_content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    .navigation_option {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 200px;
      background-position: center;
      background-size: 140%;
      background-repeat: no-repeat;
      transition: all 0.6s;
      &:hover, &:focus {
        background-size: 130%;
      }
      span {
        position: absolute;
        bottom: 30px;
        left:20px;
        width: 60%;
        padding: 0 20px;
        margin: 0 20px;
        background-color: #131212;
      }
    }
    #gallery_option {
      background-image: url("../assets/images_menu/gallery_option.png");
    }
    #camera_gear_option {
      background-image: url("../assets/images_menu/gear_option.png");
    }
  }

}

@media screen and (min-width: 769px) {
  .body_container {
    padding: 0 100px;
  }
  #main_title {
    .welcome, .my_portfolio {
      font-size: 8em;
    }

    .to {
      font-size: 5em;
    }
  }
  .self_presentation_container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 50px;
    font-size: 1.4em;
    padding: 50px 20px;

    .right_part {
      .right_part_photo {
        width: 100%;

        img {
          width: 100%;
        }
      }
    }
  }
  .navigation_options_container {
    font-size: 2em;
    .navigation_options_content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      .navigation_option {
        height: 300px;
      }
    }
  }
}
</style>