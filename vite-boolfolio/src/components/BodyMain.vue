<script>

import axios from "axios"
import { state } from '../state.js';

export default{
        name: "BodyMain",
        data(){
            return{
                state
            }
        },
        mounted() {
                this.state.url = `http://127.0.0.1:8000/api/projects`

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
    <div class="container-fluid">
        <div class="row">
            <div class="card" v-for="(entry,i) in state.entries">
                <div class="card text-center">
                    <h1 class="">{{entry.title}}</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>

