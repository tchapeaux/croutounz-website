<template>
  <div class="w-full">
    <div class="w-full p-4 bg-croutounz-contrast text-croutounz-darkest">
      <div class="text-xl font-bold font-stretch-condensed">
        {{ formattedDate }}
      </div>
      <div class="text-4xl font-black uppercase font-stretch-condensed pb-2">
        {{ title }}
      </div>
      <div class="flex flex-col gap-1">
        <div class="leading-none">
          {{ location }}
          <Icon v-if="pmr === 'TRUE'" name="ph:wheelchair-motion" />
        </div>
        <div class="leading-none">{{ type }}</div>
      </div>
    </div>
    <NuxtLink v-if="url" :to="url" target="_blank">
      <div
        class="w-full p-4 py-3 bg-croutounz-light text-croutounz-darkest flex items-center justify-between text-lg uppercase font-semibold"
      >
        {{ urlCta || "Réservations" }}
        <Icon name="lucide:arrow-right" />
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  date: Date;
  type: string;
  location: string;
  pmr: string;
  url?: string;
  urlCta?: string;
}>();

const formattedDate = computed(() => {
  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "short",
  }).format(props.date);
});
</script>
