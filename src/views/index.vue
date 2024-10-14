<script lang="ts" setup></script>

<template>
  <div flex="~ col" class="home">
    <!-- 跳转管理页面 -->
    <AdminManager />
    <!-- 头部图片 -->
    <div flex="~ center" relative>
      <img src="@/assets/image/backgroud_head.png" />
      <img src="@/assets/image/title_head.png" absolute bottom-17 />
    </div>
    <div flex="~ h-center" justify="around" mt--8>
      <div flex="~ col v-center" gap="4" h="full">
        <!-- 今日实时数据 -->
        <TodayCurrentData />
        <!-- 流量访问统计 -->
        <FlowStat />
        <!-- 终端类型分布 -->
        <TypeDistribution />
      </div>
      <div flex="~ col [0.85]" mt-8>
        <!-- 地图 -->
        <Map />
        <!-- TOP网站来源 -->
        <TopWebsite />
      </div>
      <div flex="~ col v-center shrink-0" gap="4" h="full">
        <!-- 近期销售占比 -->
        <TopPurchase />
        <!-- 订单量趋势统计 -->
        <OrderTrendStatistics />
        <!-- 用户趋势统计 -->
        <UserTrendStatistics />
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.home {
  background: url(@/assets/image/background.png) no-repeat;
  height: 100%;
}
</style>
