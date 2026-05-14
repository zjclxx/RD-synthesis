<template>
  <div class="process-list-item-container" @click="handleSelect">
    <div font-500>
      <span>{{ props.data.name || "未命名" }}</span>
    </div>
    <div mt-8px class="text-[var(--text-color-1)]">
      <span>{{ typeName }} | ID: {{ props.data.id }}</span>
    </div>
  </div>
</template>

<script lang="ts">
  const baseData: IProcessItem = {
    id: "",
    name: "",
    remark: "",
    type: ProcessType.UNIVERSAL,
    results: [
      {
        id: "",
        time: "",
        type: "single",
        value: 0,
      },
    ],
  };
</script>

<script setup lang="ts">
  import { ProcessType, processTypeList } from "@/config/global";
  import { IProcessItem } from "../../model";

  const props = withDefaults(
    defineProps<{
      data: IProcessItem;
    }>(),
    {
      data: () => baseData,
    },
  );

  const typeName = computed(() => {
    const item = processTypeList.find((item) => item.key === props.data.type);
    if (item) {
      return item.name;
    } else {
      return "未知类型";
    }
  });

  const emit = defineEmits<{
    (e: "select", data: IProcessItem): void;
  }>();

  const handleSelect = () => {
    emit("select", props.data);
  };
</script>

<style scoped lang="less">
  .process-list-item-container {
    width: 100%;
    padding: 12px 16px;
    background-color: var(--bg-container-color2);
    border-bottom: 1px solid var(--border-color);
    cursor: pointer;
    &:hover {
      background-color: var(--bg-container-color);
    }
  }
</style>
