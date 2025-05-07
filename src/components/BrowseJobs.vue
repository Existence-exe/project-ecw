<script setup>
import JobListings from "@/components/JobListings.vue";
import JobData from '@/jobs2.json' with { type: 'json' };
import {ref} from 'vue';
const data = ref(JobData);

defineProps({
    limit: Number,
    showButton: {
        type: Boolean,
        default: false
    }
})


</script>

<template>
    <section class="bg-green-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse Jobs
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <JobListings v-for="jobdata in data.slice(0, limit || data.length)" :key="jobdata.id" :job="jobdata"></JobListings>
            </div>
        </div>
    </section>
    <section class="m-auto max-w-lg my-10 px-6" v-if="showButton">
        <router-link to="/jobs" class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">View
            All Jobs</router-link>
    </section>
</template>