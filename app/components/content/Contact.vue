<script setup lang="ts">
const { socials } = useAppConfig()

const channels = [
  {
    name: 'Fastwork',
    description: 'Hire me — view services & reviews',
    descriptionKey: true,
    icon: 'lucide:briefcase',
    link: socials.fastwork,
    primary: true,
  },
  {
    name: 'GitHub',
    description: 'Code, projects & open source',
    icon: 'custom:github',
    link: socials.github,
    primary: false,
  },
]
</script>

<template>
  <section class="mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20">
    <h1 class="font-newsreader italic text-white-shadow text-center text-4xl">
      <slot
        name="title"
        mdc-unwrap="p"
      />
    </h1>
    <h2 class="text-center text-lg font-extralight italic text-muted">
      <slot
        name="subtitle"
        mdc-unwrap="p"
      />
    </h2>
    <Divider class="mb-8 mt-2" />

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <SpotlightButton
        v-for="channel in channels"
        :key="channel.name"
      >
        <NuxtLink
          :to="channel.link"
          target="_blank"
          class="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-zinc-900/60 px-6 py-10 text-center backdrop-blur-xl transition-all duration-300 hover:border-white/25"
          :aria-label="'Go to ' + channel.name"
        >
          <UIcon
            :name="channel.icon"
            class="size-10 text-white/80"
          />
          <span class="bg-gradient-to-b from-white/25 to-white bg-clip-text text-lg font-medium text-transparent">
            {{ channel.name }}
          </span>
          <span class="text-sm text-muted">{{ channel.description }}</span>
        </NuxtLink>
      </SpotlightButton>
    </div>

    <div class="mt-10 flex justify-center">
      <MeetingButton />
    </div>
  </section>
</template>
