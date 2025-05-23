<template>
  <div class="flex flex-col items-center">
    <header
      class="p-4 w-full h-fit bg-radial-[at_50%_100%] from-croutounz-light to-croutounz-gradient-target text-croutounz-darkest"
    >
      <NuxtLink
        class="flex items-center text-xl font-semibold uppercase"
        to="/"
      >
        <Icon name="lucide:arrow-left" />
        Retour
      </NuxtLink>
      <h2 class="pt-2 text-6xl uppercase font-black font-stretch-condensed">
        En spectacle
      </h2>
    </header>

    <main class="p-4 w-full max-w-xl flex flex-col items-center justify-center">
      <p v-if="shows.length === 0">Pas de spectacles prévus</p>
      <ul v-else class="w-full flex flex-col gap-4 items-center">
        <li v-for="(show, index) in shows" :key="index" class="w-full">
          <ShowCard
            :date="new Date(show.date)"
            :title="show.text"
            :type="show.type"
            :location="show.location"
            :url="show.url"
          />
        </li>
        <button class="w-full flex justify-center" @click="scrollToTop">
          <Icon class="text-3xl" name="lucide:arrow-up" />
        </button>
      </ul>
    </main>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/cms-data");

const shows = computed(() => data.value?.shows);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>
