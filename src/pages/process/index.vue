<template>
  <div class="process-whole-container" w-full h-full flex gap-x-10px>
    <LeftList @select="handleSelect" />
    <Detail :data="selectProcessData" />
  </div>
</template>

<script setup lang="ts">
  import LeftList from "./components/LeftList/index.vue";
  import Detail from "./components/Detail/index.vue";
  import { IProcessItem } from "./model";

  const selectProcessData = ref<IProcessItem | null>(null);
  const handleSelect = (data: IProcessItem) => {
    console.log("111");
    selectProcessData.value = data;
  };
</script>

<style scoped></style>
