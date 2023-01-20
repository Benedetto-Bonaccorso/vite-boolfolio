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
    
    <router-view></router-view>
</template>


<style lang="scss">
@use './styles/general.scss';



</style>
