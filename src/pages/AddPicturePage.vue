<template>
  <div id="addPicturePage">
    <h1>{{ msg }}</h1>
    <PictureUpload/>
  </div>
</template>

<script setup lang="ts">
import PictureUpload from '@/components/PictureUpload.vue'

const msg = "欢迎";
</script>

<style scoped>
#homePage {
}
</style>
