<template>
  <NuxtLayout name="subpage" title="En championnat">
    <div v-if="championship.length === 0" class="p-4">
      <img src="/resting-crumbs.svg" class="w-full max-w-xs" />
      <p class="px-4 mt-4 text-center font-semibold">
        Plus de spectacles prévus pour le moment, à la saison prochaine !
      </p>
    </div>
    <ul v-else class="w-full flex flex-col gap-4">
      <li v-for="(show, index) in championship" :key="index" class="w-full">
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

const championship = computed(() => data.value?.championship);
</script>
