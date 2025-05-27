<template>
  <NuxtLayout name="subpage" title="Nos souvenirs">
    <div v-if="shows.length === 0" class="p-4 flex flex-col items-center">
      <img src="/resting-crumbs.svg" class="w-full max-w-xs" />
      <p class="px-4 mt-4 text-center font-semibold">
        Pas de spectacles dans les archives, revenez plus tard&nbsp;!
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
          url-cta="Photos"
        />
      </li>
    </ul>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/cms-data");

const shows = computed(() => data.value?.archive);
</script>
