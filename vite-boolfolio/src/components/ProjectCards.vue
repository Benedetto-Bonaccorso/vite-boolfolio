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
        methods: {


            counterUp(){
                if(this.counter < this.projectsPerPage){
                    this.counter++
                }

                this.currentPage = "?page=" + this.counter
                this.state.currentUrl = this.state.url + this.currentPage
                console.log(this.projectsPerPage)
                this.ajaxCall()
            },
            counterDown(){
                if(this.counter != 1){
                    this.counter--
                }

                console.log(this.projectsPerPage)
                console.log(this.counter)
                this.currentPage = "?page=" + this.counter
                this.state.currentUrl = this.state.url + this.currentPage
                console.log(this.projectsPerPage)
                this.ajaxCall()
            },
            skipToPage(page){
                this.counter = page + 1
                this.currentPage = "?page=" + this.counter
                this.state.currentUrl = this.state.url + this.currentPage
                console.log(this.projectsPerPage)
                this.ajaxCall()
            },

            ajaxCall(){
                axios.get(this.state.currentUrl)

                .then(response => {
                    this.state.entries = response.data.results.data
                    console.log(response.data.results)
                    this.state.info = response.data.info
                    this.projectsPerPage = response.data.results.last_page
                    console.log(response.data.results)
                })   
            }
        },
        mounted() {
                console.log(this.state.url)
                this.state.currentUrl = this.state.url
                this.ajaxCall()
                this.counter = 1
                
        }
    }
</script>

<template>
    <div class="text-wrapper d-flex justify-content-center mt-2 mb-4">
        <div class="page-navigation d-flex text-white">
            <div class="back pageWrapper text-center">
                <h3 class="bg-black bg-gradient p-1 m-2 px-3" v-if="this.counter != 1" v-on:click="counterDown()">Previous</h3>
                <h3 class="bg-black bg-gradient p-1 m-2 px-3 text-muted" v-else v-on:click="counterDown()">Previous</h3>
            </div>
            <div class="specific-page d-flex">
                <div v-for="(page,i) in projectsPerPage">
                    <div class="pageWrapper">
                        <h3 v-if="this.counter == i + 1" class="bg-black bg-gradient p-1 m-2 px-3 text-muted" v-on:click="skipToPage(i)">{{ i + 1 }}</h3>
                        <h3 v-else class="bg-black bg-gradient p-1 m-2 px-3" v-on:click="skipToPage(i)">{{ i + 1 }}</h3>
                    </div>
                </div>
            </div>
            <div class="forward pageWrapper">
                <h3 class="bg-black bg-gradient p-1 m-2 px-3" v-if="this.counter != this.projectsPerPage" v-on:click="counterUp()">Next</h3>
                <h3 class="bg-black bg-gradient p-1 m-2 px-3 text-muted" v-else v-on:click="counterUp()">Next</h3>
            </div>
        </div>
    </div>

    <div class="container-fluid mb-5">
        <div class="row">

            <div class="col-4 g-4" v-for="(entry,i) in state.entries">
                <div class="card rounded-5 shadow d-flex align-items-center text-center px-4 py-4">
                    <h3>{{ entry.title }}</h3>
                    <h5>{{ entry.author }}</h5>
                    <div class="img-wrapper bg-white w-50">
                        <img :src="this.state.baseUrl + '/storage/' + entry.cover_image" :alt="entry.title">
                    </div>
                    <router-link class="rounded rounded-pill text-white text-decoration-none bg-black py-2 px-3 my-4" :to=" '/projects/' +  entry.slug " tag="li">Info</router-link>  
                </div>
            </div>
        </div>
    </div>

    
</template>

<style lang="scss" scoped>

</style>

