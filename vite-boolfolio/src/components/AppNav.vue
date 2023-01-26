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
    <nav class="bg-black w-100">
        <div class="d-flex align-items-center mx-3">

            <router-link class="nav-button text-decoration-none fs-5 py-2 px-3 m-2 my-4" to="/" tag="li">About Me</router-link>

            <router-link class="nav-button text-decoration-none fs-5 py-2 px-3 m-2 my-4" to="/projectCardsWrapper" tag="li">Projects</router-link>  
        </div>
    </nav>
</template>