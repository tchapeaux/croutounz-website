<template>
  <div
    class="w-full text-xl uppercase font-bold text-croutounz-dark hover:bg-croutounz-light flex items-center justify-center p-4"
    :class="{
      'bg-radial-[at_50%_100%]': funky,
      'hover:ring-2': funky,
      'ring-croutounz-contrast': funky,
      'from-croutounz-light': funky,
      'to-croutounz-gradient-target': funky,
      'bg-croutounz-contrast': !funky,
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  funky?: boolean;
}>();
</script>
