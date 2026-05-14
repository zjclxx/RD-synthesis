<template>
  <div
    :style="{
      width: props.width,
      minWidth: props.minWidth,
    }"
    h-full
    flex-shrink-0
    border-solid
    border-1px
    rounded-6px
    class="border-[var(--border-color)]">
    <!-- transition-width-1000 -->
    <div
      :style="{
        width: innerDivWidth,
      }"
      rounded-t-inherit>
      <div
        flex-shrink-0
        w-full
        px-8px
        py-12px
        flex
        justify-between
        items-center
        rounded-t-inherit
        border-solid
        border-0
        border-b-1px
        class="bg-[var(--bg-container-color2)] border-[var(--border-color)]">
        <h3 mb-0>工艺列表</h3>
        <a-button
          type="primary"
          class="bg-#28a745"
          hover="!bg-#22bc45"
          size="small"
          @click="handleAddProcess">
          <PlusOutlined :style="{ fontSize: '10px' }" />
          新建
        </a-button>
      </div>
      <div flex-1 overflow-x-hidden overflow-y-auto>
        <ListItem
          v-for="item in processList"
          :keys="item.id"
          :data="item"
          @select="handleSelectProcess">
        </ListItem>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { PlusOutlined } from "@ant-design/icons-vue";
  import ListItem from "./ListItem.vue";
  import useList from "./useList";

  const {
    innerDivWidth,
    list: processList,
    handleAddProcess,
    handleSelectProcess,
  } = useList();

  const props = withDefaults(
    defineProps<{
      width?: string;
      minWidth?: string;
    }>(),
    {
      width: "30%",
      minWidth: "300px",
    },
  );
</script>

<style scoped lang="less"></style>
