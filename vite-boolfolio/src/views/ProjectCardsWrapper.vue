<script>
import ProjectCards from "../components/ProjectCards.vue"

export default {
  name: 'HomeView',
  components: {
        ProjectCards,
    }
}
</script>

<template>

    <div class="project-cards-wrapper">
        <h1>ProjectCards</h1>

        <ProjectCards />
    </div>

</template>