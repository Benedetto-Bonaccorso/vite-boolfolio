<script>

import axios from "axios"
import { state } from '../state.js';

export default{
        name: "ProjectCards",
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

            <div class="col-4 g-4" v-for="(entry,i) in state.entries">
                <div class="card">
                    <div class="card d-flex align-items-center">
                        <h3 class="">Title: {{ entry.title }}</h3>
                        <h5>Author: {{ entry.author }}</h5>
                        <div class="img-wrapper bg-dark w-50">
                            <img :src="state.url + 'placeholders/download.jpg'" :alt="entry.title">
                        </div>
                        <a href="#">Link</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
</template>

<style lang="scss" scoped>

</style>

