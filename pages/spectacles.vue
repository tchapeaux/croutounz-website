<template>
  <NuxtLayout name="subpage" title="En spectacle">
    <p v-if="shows.length === 0">
      Pas de spectacles prévus pour l'instant, revenez plus tard !
    </p>
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

const shows = computed(() => data.value?.shows);
</script>
