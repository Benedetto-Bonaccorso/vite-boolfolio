<script>

import axios from "axios"
import { state } from '../state.js';

export default{
        name: "appFooter",
        data(){
            return{
                state
            }
        },
        methods: {
            
        },
        mounted(){
            
        }
    }
</script>

<template>
    <nav class="bg-black py-3 position-sticky w-100 bottom-0 z-index-3">
        <div class="d-flex p-3 mx-2">
            <div class="group">
                <a href="#" class="nav-button text-decoration-none fs-5 px-3 py-2 me-3">Linkedin</a>
                <a class="nav-button text-decoration-none fs-5 px-3 py-2" href="https://github.com/Benedetto-Bonaccorso">GitHub</a>
                <router-link class="nav-button text-decoration-none fs-5 py-2 px-3 m-2 my-4" to="/contacts" tag="li">Contact Me</router-link>
            </div>
        </div>


    </nav>
</template>