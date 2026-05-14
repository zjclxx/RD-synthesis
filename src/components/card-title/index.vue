<template>
  <div flex flex-shrink-0 items-center>
    <div w-3px h-15px class="bg-#1764ff"></div>
    <div flex-1 ml-10px text-18px leading-25px>
      <span>{{ props.title }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      title?: string;
    }>(),
    {
      title: "",
    },
  );
</script>

<style scoped></style>
