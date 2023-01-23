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
                } else {
                    this.counter = 1
                }
                this.currentPage = "?page=" + this.counter
                this.state.currentUrl = this.state.url + this.currentPage
                console.log(this.state.maxPage)
                this.ajaxCall()
            },
            counterDown(){
                this.counter--
                this.currentPage = "?page=" + this.counter
                this.state.currentUrl = this.state.url + this.currentPage
                this.ajaxCall()
            },
            skipToPage(pageNumber){
                
            },
            ajaxCall(){
                axios.get(this.state.currentUrl)

                .then(response => {
                    this.state.entries = response.data.results.data
                    console.log(response.data.results)
                    this.state.info = response.data.info
                    this.state.maxPage = response.data.results.last_page
                    //console.log(this.state.maxPage)
                })   
            }
        },
        mounted() {
                console.log(this.state.url)
                this.state.currentUrl = this.state.url
                this.ajaxCall()
                this.counter = 1
                //
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
                    </div>
                </div>
            </div>
        </div>
    </div>

    <p v-on:click="counterUp()">Prossima</p>

    
</template>

<style lang="scss" scoped>

</style>

