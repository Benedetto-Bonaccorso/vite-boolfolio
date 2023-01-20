<script>
//import { createRouter, createWebHistory } from 'vue-router'
import ProjectCards from "./components/ProjectCards.vue"
import HomeView from "./views/HomeView.vue"

export default {
    components: {
        ProjectCards,
        HomeView
    }
}
</script>

<template>
    <HomeView />
    <router-link class="nav-link" :to="{name: 'esempio'}">esempio</router-link>
    <a class="nav-link" :to="{ name: 'single-post' }" aria-current="page">Home</a>
    <router-link to="/esempio" tag="li">esempio</router-link>
    <router-view></router-view>
</template>


<style lang="scss">
@use './styles/general.scss';



</style>
