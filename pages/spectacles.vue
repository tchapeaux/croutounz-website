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
      <ul class="w-full flex flex-col gap-4">
        <li>
          <ShowCard
            :date="new Date()"
            title="Lorem Ipsum"
            type="Placeholder"
            location="On the Moon"
            url="https://croutounz.be"
          />
        </li>
      </ul>
      <p>Pas de spectacles prévus</p>
    </main>
  </div>
</template>
