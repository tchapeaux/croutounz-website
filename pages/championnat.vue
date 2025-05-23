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
      <h2 class="pt-2 text-5xl uppercase font-black font-stretch-condensed">
        En championnat
      </h2>
    </header>

    <main class="p-4 w-full max-w-xl flex flex-col items-center justify-center">
      <p v-if="championship.length === 0">Pas de spectacles prévus</p>
      <ul v-else class="w-full flex flex-col gap-4">
        <li v-for="(show, index) in championship" :key="index" class="w-full">
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

const championship = computed(() => data.value?.championship);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>
