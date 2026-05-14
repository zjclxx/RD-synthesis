<template>
  <div
    flex-1
    h-full
    border-solid
    border-1px
    rounded-6px
    class="border-[var(--border-color)]">
    <template v-if="props.data && props.data.id">
      <div
        w-full
        p-16px
        rounded-inherit
        class="bg-[var(--bg-container-color2)]">
        <CardTitle title="工艺详情" />
        <a-form
          mt-8px
          ref="formRef"
          :model="formState"
          layout="vertical"
          :rules="rules">
          <a-row :gutter="24">
            <a-col :span="12">
              <a-form-item label="工艺名称" name="name">
                <a-input
                  v-model:value="formState.name"
                  placeholder="请输入工艺名称" />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="工艺类型" name="type">
                <a-select
                  v-model:value="formState.type"
                  placeholder="请选择类型">
                  <a-select-option
                    v-for="item in processTypeList"
                    :key="item.key"
                    :value="item.key"
                    >{{ item.name }}</a-select-option
                  >
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="24">
              <a-form-item label="备注" name="remark">
                <a-textarea
                  v-model:value="formState.remark"
                  allowClear
                  show-count
                  :maxlength="50"
                  placeholder="请输入备注" />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </div>
    </template>
    <template v-else>
      <div w-full h-full flex flex-col justify-center items-center gap-y-32px>
        <img src="@/assets/images/empty.svg" alt="" />
        <div text-20px>
          <span>请选择或新建工艺</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
  import type { UnwrapRef } from "vue";
  import { ProcessType, processTypeList } from "@/config/global";
  import type { Rule } from "ant-design-vue/es/form";
  import { IProcessItem } from "../../model";

  interface IFormState {
    name: string;
    type: ProcessType;
    remark: string;
  }
  const formState: UnwrapRef<IFormState> = reactive({
    name: "",
    type: ProcessType.UNIVERSAL,
    remark: "",
  });

  const rules: Record<string, Rule[]> = {
    name: [{ required: true, message: "请输入工艺名称", trigger: "blur" }],
    type: [{ required: true, message: "请选择类型", trigger: "change" }],
  };

  const props = withDefaults(
    defineProps<{
      data: IProcessItem | null;
    }>(),
    {
      data: null,
    },
  );
</script>

<style scoped></style>
