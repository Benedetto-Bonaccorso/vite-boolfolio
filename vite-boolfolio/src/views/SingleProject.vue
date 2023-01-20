<script>

import axios from "axios"
import { state } from '../state.js';

export default{
        name: "SingleProject",
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
                    this.state.entries = response.data.results.data
                    this.state.info = response.data.info
                    console.log(response.data.results)
                    console.log(this.state.entries)
                })
        }
    }
</script>

<template>
    <h1>{{ this.state.entries }}</h1>
</template>