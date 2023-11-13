<script setup lang="ts">
import {Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh} from "three";
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

  const geometry = new BoxGeometry();
  const material = new MeshBasicMaterial( { color: 0x00ff00 } );
  const cube = new Mesh( geometry, material );
  scene.add( cube );
  camera.position.z = 5;
  function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
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