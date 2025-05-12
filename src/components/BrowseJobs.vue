<script setup>
import JobListings from "@/components/JobListings.vue";
import {ref, onMounted} from 'vue';
import axios from 'axios';
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

const isLoading = ref(false);
const data = ref([], );

defineProps({
    limit: Number,
    showButton: {
        type: Boolean,
        default: false
    }
})

onMounted(async () => {
    isLoading.value = true;
    try {
        const response = await axios.get('http://localhost:5000/jobs');
        data.value = response.data;
    } catch (error) {
        console.error(error);
    } finally { 
        isLoading.value = false;
    }
})
</script>

<template>
    <section class="bg-green-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse Jobs
            </h2>
            <div v-if="isLoading" class="text-center text-gray-500">
                <PulseLoader/>
            </div>
            <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <JobListings v-for="jobdata in data.slice(0, limit || data.length)" :key="jobdata.id" :job="jobdata"></JobListings>
            </div>
        </div>
    </section>
    <section class="m-auto max-w-lg my-10 px-6" v-if="showButton">
        <router-link to="/jobs" class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">View
            All Jobs</router-link>
    </section>
</template>