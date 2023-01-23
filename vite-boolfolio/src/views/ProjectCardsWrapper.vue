<script>
import ProjectCards from "../components/ProjectCards.vue"
import AppNav from "../components/AppNav.vue"

export default {
  name: 'HomeView',
  components: {
        ProjectCards,
        AppNav,
    }
}
</script>

<template>

    <AppNav />
    

    <div class="project-cards-wrapper">
        
        <h1>ProjectCards</h1>
        <ProjectCards />
    </div>

</template>