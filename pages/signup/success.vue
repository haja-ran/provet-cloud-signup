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
    <provet-card padding="l">
      <h3 slot="header" class="n-typescale-l">
        You're all set!
      </h3>

      <provet-stack>
        <p>
          Let's get started on something amazing. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident aliquid corporis tempora eius quam, quae vel
          molestias esse maxime aperiam totam suscipit. Nobis consectetur optio reprehenderit animi? Suscipit, quibusdam?
        </p>

        <provet-button>
          Configure your profile
        </provet-button>
      </provet-stack>
    </provet-card>
  </provet-stack>
</template>
