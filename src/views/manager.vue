<script lang="ts" setup>
import examleOption from "@/components/options/examleOption";

const xData = $ref(["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]);
const data = $ref([5, 20, 36, 10, 10, 20]);
const options = $ref(examleOption(xData, data));
</script>

<template>
  <div w-300 h-200>
    后台管理模块
    <EchartsContainer :option="options" />
  </div>
</template>
