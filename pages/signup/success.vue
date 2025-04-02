<script lang="ts" setup>
definePageMeta({
  layout: 'authenticated',
})

useSeoMeta({
  title: 'All Set!',
  description: 'You are all set! Let’s get started on something amazing.',
})
</script>

<template>
  <provet-stack>
    <provet-banner variant="success">
      You're all set! Let's get started on something amazing.
      Start by adding your first pet to the system by filling out the
      pet profile form below.
    </provet-banner>

    <provet-card v-for="n in 3" :key="n">
      <h3 slot="header" class="n-typescale-l">
        {{ n }}. Nobis consectetur optio reprehenderit animi?
      </h3>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident aliquid corporis tempora eius quam, quae vel
      molestias esse maxime aperiam totam suscipit. Nobis consectetur optio reprehenderit animi? Suscipit, quibusdam?
    </provet-card>
  </provet-stack>
</template>
