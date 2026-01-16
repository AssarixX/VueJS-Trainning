<script setup lang="ts">
import DashboardCard from "./dashboard-card.vue";
import DashboardChart from "./dashboardChart.vue";
import DashboardHeader from "./dashboardHeader.vue";
import SideBar from "./SideBar.vue";
</script>

<template>
  <div class="flex h-screen bg-red-100/20 overflow-hidden">
    <SideBar class="w-1/5 flex-shrink-0 fixed left-0 top-0 h-screen" />
    <div class="flex-grow flex flex-col ml-[20%] w-[80%]">
      <DashboardHeader
        class="fixed top-0 w-[80%] h-16 flex justify-center items-center bg-red-100/10 border-b-1 border-gray-300 z-10"
      />
      <main class="mt-16 p-4 overflow-y-auto h-[calc(100vh-4rem)]">
        <DashboardCard />
        <DashboardChart />
      </main>
    </div>
  </div>
</template>
