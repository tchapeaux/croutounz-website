<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "La Croutounz",
  ogTitle: "La Croutounz",
  ogSiteName: "La Croutounz",
  description:
    "Toutes les infos sur l'équipe d'improvisation belge de la Croutounz",
  ogDescription:
    "Toutes les infos sur l'équipe d'improvisation belge de la Croutounz",
  ogType: "website",
  ogImage: "https://croutounz.be/og.png",
  ogUrl: "https://croutounz.be",
  twitterImage: "https://croutounz.be/og.png",
  twitterCard: "summary_large_image",
});
</script>
