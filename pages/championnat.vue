<template>
  <NuxtLayout name="subpage" title="En championnat">
    <p v-if="championship.length === 0">
      Pas de spectacles prévus pour l'instant, revenez plus tard !
    </p>
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
