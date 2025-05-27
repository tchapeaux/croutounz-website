<template>
  <div class="flex flex-col items-center">
    <header
      class="p-4 w-full h-fit bg-radial-[at_50%_100%] from-croutounz-light to-croutounz-gradient-target text-croutounz-darkest"
    >
      <NuxtLink
        class="flex items-center text-xl font-semibold active:text-white uppercase"
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
        <button
          v-if="isScrolled"
          class="w-full flex justify-center"
          @click="scrollToTop"
        >
          <Icon class="text-3xl" name="lucide:arrow-up" />
        </button>
      </ul>
    </main>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/cms-data");

const isScrolled = ref(false);

const shows = computed(() => data.value?.shows);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

onMounted(() => {
  const checkScroll = () => {
    isScrolled.value = window.scrollY > 100;
  };

  window.addEventListener("scroll", checkScroll);

  onUnmounted(() => {
    window.removeEventListener("scroll", checkScroll);
  });
});
</script>

<style scoped>
header {
  transition: opacity 0.3s ease-in-out;
  @starting-style {
    opacity: 0;
  }
}

main {
  transition: opacity 0.3s ease-in-out;
  transition-delay: 0.3s;

  @starting-style {
    opacity: 0;
  }
}
</style>
