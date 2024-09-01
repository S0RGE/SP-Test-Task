import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("@/pages/main"),
        },
        {
            path: "/main",
            name: "main",
            component: () => import("@/pages/main"),
        },
        {
            path: "/currency",
            name: "currency",
            component: () => import("@/pages/convert"),
        },
    ]
});

export default router;