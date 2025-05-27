<template>
  <NuxtLayout name="subpage" title="En spectacle">
    <div v-if="shows.length === 0" class="p-4">
      <img src="/resting-crumbs.svg" class="w-full max-w-xs" />
      <p class="px-4 mt-4 text-center font-semibold">
        Plus de spectacles prévus pour le moment, à la saison prochaine !
      </p>
    </div>
    <ul v-else class="w-full flex flex-col gap-4 items-center">
      <li v-for="(show, index) in shows" :key="index" class="w-full">
        <ShowCard
          :date="new Date(show.date)"
          :title="show.text"
          :type="show.type"
          :location="show.location"
          :pmr="show.PMR"
          :url="show.url"
        />
      </li>
    </ul>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/cms-data");

// const shows = computed(() => data.value?.shows);
const shows = computed(() => []);
</script>
