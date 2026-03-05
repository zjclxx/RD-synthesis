<template>
  <div class="process-list-item-container">
    <div>
      <span></span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ProcessType } from "@/config/global";
  import { IProcessItem } from "../../model";

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

  const props = withDefaults(
    defineProps<{
      data: IProcessItem;
    }>(),
    {
      data: () => baseData,
    },
  );
</script>

<style scoped lang="less"></style>
