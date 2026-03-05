<template>
  <div
    :style="{
      width: props.width,
      minWidth: props.minWidth,
    }"
    h-full
    flex-shrink-0
    transition-width-1000
    border-solid
    border-1px
    rounded-6px
    class="border-[var(--border-color)]">
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
          size="small">
          <PlusOutlined />
          新建
        </a-button>
      </div>
      <div flex-1 overflow-x-hidden overflow-y-auto></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { PlusOutlined } from "@ant-design/icons-vue";

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
  //  @click="handleAdd"

  const innerDivWidth = ref<string>("100%");
</script>

<style scoped lang="less"></style>
