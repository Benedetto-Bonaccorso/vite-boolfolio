<script>

import axios from "axios"
import { state } from '../state.js';

export default{
        name: "appNav",
        data(){
            return{
                state
            }
        },
        methods: {

        }
    }
</script>

<template>
    <nav class="bg-primary p-2">
        <ul class="d-flex">
            <router-link class="text-white text-decoration-none bg-black py-2 px-3 m-2" to="/" tag="li">Home</router-link>

            <router-link class="text-white text-decoration-none bg-black py-2 px-3 m-2" to="/projectCardsWrapper" tag="li">Projects</router-link>  
        </ul>
    </nav>
</template>