<script>
import AppNav from "../components/AppNav.vue"
import AppFooter from "../components/AppFooter.vue"
import axios from "axios"
import { state } from '../state.js';

export default{
        name: "SingleProject",
        components: {
            AppNav,
            AppFooter
        },
        data(){
            return{
                state
            }
        },
        mounted() {
            this.state.url = `http://127.0.0.1:8000/api/projects/` + this.$route.params.slug
            
            console.log(this.$route.params.slug)

            axios.get(this.state.url)
            
                .then(response => {

                    if (response.data.success) {
                        this.state.entries = response.data.results
                        this.state.info = response.data.info
                        console.log(response.data.results)
                        console.log(this.state.entries)
                    } else {
                        this.$router.push({ path: '/viewMissingPage' })
                    }


                })
        }
    }
</script>

<template>

    <AppNav />

    <div class="m-4" v-if="this.state.entries != null">
    
        <h5 class="me-4 text-white">Author: {{ this.state.entries.author }}</h5>
        <h3 class="me-4 text-white">Title: {{ this.state.entries.title }}</h3>
        <h5 class="my-2 me-4 text-white">Deadline: {{ this.state.entries.deadline }}</h5>
        <h4 class="text-white">Read More at: <a class="text-primary text-decoration-none" :href="this.state.entries.link">GitHub</a></h4>
        <img class="w-25" :src="this.state.baseUrl + '/storage/' + this.state.entries.cover_image" alt="Project Image">

    </div>

    <AppFooter />

</template>