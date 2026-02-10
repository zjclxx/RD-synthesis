<template>
  <div>
    <h2>欢迎使用RD 合成系统</h2>
    <p class="system-status-text normal-text1">
      系统状态：
      <span class="system-status" :class="systemStatusClass">{{
        statusText
      }}</span>
    </p>
    <div
      border-1px
      border-dashed
      rounded-6px
      p-20px
      class="description-content">
      <h4 my-10px text-18px>功能亮点</h4>

      <ul mt-32px space-y-10px>
        <li v-for="item in contentList" :key="item.name" text-16px>
          <RouterLink :to="item.path" font-500>{{ item.name }}</RouterLink>
          <span font-500> ：</span>
          <span>{{ item.description }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  enum SystemStatus {
    Running = 1,
    Paused = 0,
  }

  const status = ref<SystemStatus>(SystemStatus.Running);

  const statusText = computed(() => {
    switch (status.value) {
      case SystemStatus.Running:
        return "运行中";
      default:
        return "暂停中";
    }
  });

  const systemStatusClass = computed(() => {
    switch (status.value) {
      case SystemStatus.Running:
        return "running-status";
      default:
        return "paused-status";
    }
  });

  const contentList = [
    {
      name: "物料管理",
      description: "支持多行文本一键粘贴识别，自动分类排序。",
      path: "/material",
    },
    {
      name: "工艺管理",
      description: "动态时间轴，温度范围自动取中值，可视化折线图。",
      path: "/process",
    },
    {
      name: "配方管理",
      description: "Fox方程自动计算Tg，配方阶段与工艺图实时高亮联动。",
      path: "/recipe",
    },
  ];
</script>

<style lang="less" scoped>
  .system-status-text {
    margin-top: 32px;
    .system-status {
      &.running-status {
        color: #52c41a;
      }
      &.paused-status {
        color: #ff4d4f;
      }
      &::before {
        content: "●";
        display: inline-block;
        margin-right: 4px;
      }
    }
  }
  .normal-text1 {
    color: var(--text-color);
  }
  .description-content {
    border-color: var(--border-color);
  }
</style>
