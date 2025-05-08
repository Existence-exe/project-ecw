<script setup>
const prop = defineProps({
  type: {
    type: String,
    default: "For everyone",
  },
  description: {
    type: String,
  },
  additional: {
    type: String,
  },
  styling: {
    type: Array,
  },
  additional_styling: {
    type: String,
  },
});

var link = null;
if (prop.type == "Employers") {
  link = '/jobs/add'
} else if (prop.type == "Developers") {
  link = '/jobs'
}
</script>

<template>
  <div :class="styling[0]">
    <h2 class="text-2xl font-bold">For {{ type }}</h2>
    <p class="mt-2 mb-4">
      {{ description }}
    </p>
    <router-link :to="link" :class="[
      'inline-block text-white rounded-lg px-4 py-2',
      `bg-${styling[1]}`,
      `hover:bg-${styling[2]}`,
    ]">
      {{ additional }}
    </router-link>
  </div>
</template>
