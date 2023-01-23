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
                if(this.counter < this.state.maxPage){
                    this.counter++
                }

                this.currentPage = "?page=" + this.counter
                this.state.currentUrl = this.state.url + this.currentPage
                console.log(this.state.maxPage)
                this.ajaxCall()
            },
            counterDown(){
                if(this.counter != 1){
                    this.counter--
                }

                console.log(this.state.maxPage)
                console.log(this.counter)
                this.currentPage = "?page=" + this.counter
                this.state.currentUrl = this.state.url + this.currentPage
                console.log(this.state.maxPage)
                this.ajaxCall()
            },
            skipToPage(page){
                this.counter = page + 1
                this.currentPage = "?page=" + this.counter
                this.state.currentUrl = this.state.url + this.currentPage
                console.log(this.state.maxPage)
                this.ajaxCall()
            },
            ajaxCall(){
                axios.get(this.state.currentUrl)

                .then(response => {
                    this.state.entries = response.data.results.data
                    console.log(response.data.results)
                    this.state.info = response.data.info
                    this.state.maxPage = response.data.results.last_page
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
    <div class="container-fluid">
        <div class="row">

            <div class="col-4 g-4" v-for="(entry,i) in state.entries">
                <div class="card shadow">
                    <div class="card d-flex align-items-center text-center px-4 py-4">
                        <h3>Title: {{ entry.title }}</h3>
                        <h5>Author: {{ entry.author }}</h5>
                        <div class="img-wrapper bg-dark w-50">
                            <img :src="this.state.baseUrl + '/storage/' + entry.cover_image" :alt="entry.title">
                        </div>
                        <router-link :to=" '/projects/' +  entry.slug " tag="li">Projects</router-link>  
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="text-wrapper d-flex justify-content-center mt-2 mb-4">
        <div class="page-navigation d-flex text-white">
            <div class="back pageWrapper text-center">
                <h3 class="bg-black bg-gradient p-1 m-2 px-3" v-if="this.counter != 1" v-on:click="counterDown()">Previous</h3>
            </div>
            <div class="specific-page d-flex">
                <div v-for="(page,i) in this.state.maxPage">
                    <div class="pageWrapper">
                        <h3 class="bg-black bg-gradient p-1 m-2 px-3" v-on:click="skipToPage(i)">{{ i + 1 }}</h3>
                    </div>
                </div>
            </div>
            <div class="forward pageWrapper">
                <h3 class="bg-black bg-gradient p-1 m-2 px-3" v-if="this.counter != this.state.maxPage" v-on:click="counterUp()">Next</h3>
            </div>
        </div>
    </div>
    

    
    

    
</template>

<style lang="scss" scoped>

</style>

