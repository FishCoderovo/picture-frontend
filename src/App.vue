<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<script setup lang="ts">
import BasicLayout from '@/layouts/BasicLayout.vue'

// 已经改为在权限校验文件access.ts中获取
// import { useLoginUserStore } from '@/stores/useLoginUserStore.ts'
//
// const loginUserStore = useLoginUserStore()
// loginUserStore.fetchLoginUser()
</script>

<style scoped></style>
