<script>
import { state } from "../state"
import ProjectCards from "../components/ProjectCards.vue"
import AppNav from "../components/AppNav.vue"
import AppFooter from "../components/AppFooter.vue"

export default {
  name: 'HomeView',
  data(){
    return{
        state
    }
  },
  components: {
        ProjectCards,
        AppNav,
        AppFooter
    }
}
</script>

<template>

    <div>

        <AppNav />

        <div class="homeContainer d-flex justify-content-evenly align-items-center my-5">
            <h1 class="text-white">About Me</h1>

            <div class="bg-black rounded-pill">
                <img src="../assets/logo.png" alt="Benedetto Bonaccorso Web Developer" class="logo nav-logo rounded-pill">
            </div>
        </div>

        <div class="info d-flex">
            <div class="container w-75 px-5">
                <h3 class="text-white text-center my-3">Tecnologie:</h3>
                    <div class="row d-flex gy-3">
                        <div v-for="(Technology, i) in state.technologies" class="col-sm-6 col-md-4 d-flex justify-content-center position-relative technology flex-wrap px-4">
                            
                            <div class="card-styling card rounded rounded-5 justify-content-center align-items-center z-index-2 technology-title">
                                <h6 class="fw-bold">{{ Technology }}</h6>
                            </div>
                            
                            <div class="card-styling card rounded rounded-5 d-flex justify-content-center align-items-center position-absolute z-index-1">
                                <img class="rounded rounded-5 p-1" :src="'/src/assets/' + Technology + '.png'" :alt="Technology">
                            </div>

                        </div>
                    </div>
                </div>

                <div class="qualificazioni w-75 px-5">
                    <h3 class="text-white my-3">Qualificazioni:</h3>
                    <h5 class="text-white">Corso Full-Stack Developer Boolean</h5>
                    <h5 class="text-white">Fatti una tua idea con il mio portfolio -> <router-link class="text-decoration-none text-primary" to="/projectCardsWrapper" tag="li">Progetti</router-link> </h5>
                </div>

            </div>



        <AppFooter />
    </div>

</template>