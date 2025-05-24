<template>
  <div :class="cardClasses">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  funky?: boolean;
}>();

const cardClasses = computed(() => ({
  // Base classes
  "w-full text-xl uppercase font-bold text-croutounz-dark": true,
  "hover:bg-croutounz-light active:bg-croutounz-light": true,
  "flex items-center justify-center p-4": true,
  "bg-croutounz-contrast": !props.funky,

  // Conditional classes for funky state
  "bg-radial-[at_50%_100%]": props.funky,
  "hover:ring-2 active:ring-2": props.funky,
  "ring-croutounz-contrast": props.funky,
  "from-croutounz-light to-croutounz-gradient-target": props.funky,
}));
</script>
