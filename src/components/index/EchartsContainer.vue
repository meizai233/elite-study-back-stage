<template>
  <div ref="echartsContainer" w-600 h-400 />
</template>

<script lang="ts" setup>
import * as Echarts from "echarts";
const echartsContainer = $ref<HTMLElement>();

// 指定图表的配置项和数据
const option = {
  title: {
    text: "ECharts 入⻔示例",
  },
  tooltip: {},
  legend: {
    data: ["销量"],
  },
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
  },
  yAxis: {},
  series: [
    {
      name: "销量",
      type: "bar",
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
};
onMounted(() => {
  // 基于准备好的dom，初始化echarts实例
  const myChart = Echarts.init(echartsContainer!); // 使用刚指定的配置项和数据显示图表。 myChart.setOption(option);
});
</script>

<style lang="less" scoped></style>
