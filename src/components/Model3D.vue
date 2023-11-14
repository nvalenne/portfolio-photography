<script setup lang="ts">
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  DirectionalLight
} from "three";
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

const experience = ref<HTMLCanvasElement | null>(null)
const scene = new Scene()
const camera = new PerspectiveCamera( 75, props.width / props.height, 0.1, 1000 )
scene.add( camera );

onMounted(() => {
  const renderer = new WebGLRenderer({
    canvas: experience.value as unknown as HTMLCanvasElement,
    antialias: true,
    alpha: true,
  })
  renderer.setSize( props.width, props.height)

  const loader = new GLTFLoader();
  loader.load('/canon2000d.glb', (gltf : GLTF) => {
    gltf.scene.rotateY(-Math.PI / 2)
    scene.add(gltf.scene)
  })

  camera.position.z = 2;
  camera.position.y = 0.5;
  const light = new DirectionalLight(
    0xffffff, // color
    3, // intensity
  );
  scene.add( light );
  function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
  }
  animate()
});
</script>

<template>
  <canvas ref="experience" />
</template>

<style scoped lang="scss">
</style>