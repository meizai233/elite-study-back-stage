<script lang="ts" setup>
let msg = $ref("");

onMounted(() => {
  msg = "优研平台";
});
</script>

<template>
  <div>
    关于页面
    <div>我来自{{ msg }}</div>
  </div>
</template>

<style></style>
