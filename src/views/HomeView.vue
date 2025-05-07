<script setup>
import hero from "@/components/Hero.vue";
import Homecards from "@/components/Homecards.vue";
import { ref } from "vue";
import BrowseJobs from "@/components/BrowseJobs.vue"
</script>

<template>
    <hero title="test title" subtitle="hola amijoes" />
    <Homecards />
    <BrowseJobs :limit="3" :showButton="true"></BrowseJobs>
</template>