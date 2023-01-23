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
    

    <div>
        <ProjectCards />
    </div>

</template>