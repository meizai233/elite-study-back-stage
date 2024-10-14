<script lang="ts" setup>
import FlowStatOption from '../options/flow-stat';
// x轴数据
const xData = $ref(["09/20", "09/21", "09/22", "09/23", "09/24", "09/25", "09/26"])
// 柱状图数据，浏览量|访客数
const data = $ref([18, 30, 60, 70, 20, 60, 10])
const hvData = $ref([28, 34, 66, 80, 70, 40, 20])
// 配置
const option = $ref(FlowStatOption(xData, data, hvData))
</script>

<template>
  <div h-86 w-96 flex="~ col" bg="[url(@/assets/image/border/FlowStatBorder.png)] no-repeat center cover">
    <div p="x-8 t-4" text="#17caf0 5.5" font="bold">流量访问统计</div>
    <EchartsContainer :option="(option)" />
  </div>
</template>
