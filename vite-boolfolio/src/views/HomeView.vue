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

    <h1>HomeView</h1>

    <router-link to="/projectCardsWrapper" tag="li">ProjectCards</router-link>

</template>