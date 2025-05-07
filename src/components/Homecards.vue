<script setup>
import card from "@/components/Card.vue";
</script>

<template>
  <section class="py-4">
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <card
          type="Developers"
          description="Find your dream job or hire the perfect candidate."
          additional="Find a job"
          :styling="[
            'bg-gray-100 p-6 rounded-lg shadow-md',
            'black',
            'gray-700',
          ]"
        />
        <card
          type="Employers"
          description="List your job to find the perfect developer for the role"
          additional="Add Job"
          :styling="[
            'bg-green-100 p-6 rounded-lg shadow-md',
            'green-500',
            'green-600',
          ]"
        />
      </div>
    </div>
  </section>
</template>
