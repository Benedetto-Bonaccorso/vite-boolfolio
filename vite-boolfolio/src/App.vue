<script>
import axios from "axios"
import { state } from './state.js'
import BodyMain from './components/BodyMain.vue'
import ProjectCard from "./components/ProjectCard.vue"

export default {
    components: {
        BodyMain,
        ProjectCard
    }
}
</script>

<template>
    <section class="vue-home">
        <ProjectCard />
    </section>
</template>

<style lang="scss">
@use './styles/general.scss';



</style>
