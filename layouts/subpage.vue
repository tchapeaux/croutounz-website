<template>
  <div class="flex flex-col items-center">
    <header
      class="p-4 w-full h-fit bg-radial-[at_50%_100%] from-croutounz-light to-croutounz-gradient-target text-croutounz-darkest"
    >
      <NuxtLink
        class="flex items-center text-xl active:text-white font-semibold uppercase"
        to="/"
      >
        <Icon name="lucide:arrow-left" />
        Retour
      </NuxtLink>
      <h2 class="pt-2 text-5xl uppercase font-black font-stretch-condensed">
        {{ title }}
      </h2>
    </header>

    <main class="p-4 w-full max-w-xl flex flex-col items-center justify-center">
      <slot></slot>
      <button
        v-if="isScrolled"
        class="w-full flex justify-center"
        @click="scrollToTop"
      >
        <Icon class="text-3xl" name="lucide:arrow-up" />
      </button>
    </main>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();

const isScrolled = ref(false);

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
