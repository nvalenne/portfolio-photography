<script setup lang="ts">
import * as THREE from "three"
import {GLTF, GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {onMounted, ref} from "vue";

const props = defineProps({
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    }
})
let model : GLTF;
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, props.width / props.height, 0.1, 1000 )
const experience = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  if (model) {
    scene.remove(model)
  }
  const renderer = new THREE.WebGLRenderer({
    canvas: experience.value as unknown as HTMLCanvasElement,
    antialias: true,
    alpha: true,
  })
  const light = new THREE.AmbientLight(
      0xffffff, // color
      5, // intensity
  );

  renderer.setSize( props.width, props.height)
  const loader = new GLTFLoader();
  loader.load('/canon2000d.glb', (gltf : GLTF) => {
    model = gltf.scene
    model.rotateY(4*Math.PI/3)
    model.scale.set(5,5,5)
    scene.add(model)
  })

  camera.position.z = 5;
  camera.position.y = 2;
  scene.add( camera );
  scene.add( light );
  function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
  }
  animate()
});

</script>

<template>
  <canvas ref="experience" id="sceneWindow"/>
</template>

<style scoped lang="scss">
#sceneWindow {
  position: absolute;
  top: 10vh;
}
</style>