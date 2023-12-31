import { createApp } from "vue";

import Index from "./components/IndexPage.vue";
import Homepage from "./views/HomeView.vue";
import "vuetify/styles"
import "@mdi/font/css/materialdesignicons.css";
import "./assets/base.css";

import { createRouter, createWebHistory } from "vue-router";

import vuetify from "./plugins/vuetify";

const routes = [
    {
        path: "/",
        name: "Startseite",
        component: Homepage
    },
    {
        path: "/already-registered", 
        name: "Bereits registriert",
        component: () => import("./views/AlreadyRegisteredView.vue")
    },
    {
        path: "/wron-credentials",
        name: "Falsche Anmeldedaten",
        component: () => import("./views/WrongCredentialsView.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(Index)
    .use(router)
    .use(vuetify)
    .mount("#app");