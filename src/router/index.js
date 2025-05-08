import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import JobView from "@/views/JobView.vue";
import AddJobView from "@/views/AddJobView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/jobs",
            name: "jobs",
            component: JobsView,
        },
        {
            path: "/jobs/:jobId",
            name: "jobview",
            component: JobView,
        },
        {
            path: '/:catchAll(.*)',
            name: 'notFound',
            component: NotFoundView,
        },
        {
            path: "/jobs/add",
            name: "addJobs",
            component: AddJobView,
        }
        // Add more routes here...
    ],
})

export default router;