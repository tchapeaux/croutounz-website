<template>
  <div class="flex flex-col items-center">
    <header
      class="relative w-full h-30 bg-radial-[at_50%_100%] from-croutounz-light to-croutounz-gradient-target"
    >
      <img
        src="/croutounz-avatar.png"
        alt="Logo de la Croutounz"
        class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-45 w-45 rounded-full border-croutounz-light border-6"
      />
    </header>

    <main
      class="mt-30 w-full max-w-xl flex flex-col items-center justify-center gap-4"
    >
      <h1 class="text-6xl uppercase font-bold font-stretch-condensed">
        La Croutounz
      </h1>
      <ClientOnly>
        <p class="text-xl text-center">{{ tagline }}</p>
      </ClientOnly>

      <nav class="w-full flex flex-col gap-3 p-4">
        <NuxtLink to="/spectacles">
          <HomeBigCard>En spectacle</HomeBigCard>
        </NuxtLink>
        <NuxtLink to="/championnat">
          <HomeBigCard>En championnat</HomeBigCard>
        </NuxtLink>
        <NuxtLink to="https://www.instagram.com/p/Cvnj7A7qm6k/" target="_blank"
          ><HomeBigCard :funky="true">Bernard</HomeBigCard></NuxtLink
        >
        <div class="grid grid-cols-4 gap-2">
          <NuxtLink to="https://www.instagram.com/lacroutounz/" target="_blank">
            <HomeSmallCard> <Icon name="lucide:instagram" /></HomeSmallCard>
          </NuxtLink>
          <NuxtLink to="https://www.facebook.com/LaCroutounz" target="_blank">
            <HomeSmallCard>
              <Icon name="lucide:facebook" />
            </HomeSmallCard>
          </NuxtLink>
          <NuxtLink to="https://www.tiktok.com/@lacroutounz" target="_blank">
            <HomeSmallCard>
              <Icon name="ic:baseline-tiktok" />
            </HomeSmallCard>
          </NuxtLink>
          <NuxtLink to="mailto:lacroutounz@gmail.com" target="_blank">
            <HomeSmallCard>
              <Icon name="lucide:mail" />
            </HomeSmallCard>
          </NuxtLink>
        </div>
      </nav>
    </main>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/cms-data");
const tagline = ref("");

if (data.value?.taglines.length > 0) {
  const randomIdx = Math.floor(Math.random() * data.value.taglines.length);

  tagline.value = data.value.taglines[randomIdx].Tagline;
} else {
  tagline.value = "Pas de tagline disponible";
}
</script>
