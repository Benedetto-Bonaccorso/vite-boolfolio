<script>
import ProjectCards from "../components/ProjectCards.vue"
import AppNav from "../components/AppNav.vue"
import AppFooter from "../components/AppFooter.vue"

export default {
  name: 'HomeView',
  components: {
        ProjectCards,
        AppNav,
        AppFooter
    }
}
</script>

<template>

    <AppNav />
    
    <div class="mx-4">
        <ProjectCards />
    </div>

    <AppFooter />

</template>