<script>
import axios from "axios"
import { state } from './state.js'
import BodyMain from './components/BodyMain.vue'

export default {
    components: {
        BodyMain,
    }
}
</script>

<template>
    <section class="vue-home">
        <BodyMain />
    </section>
</template>

<style lang="scss">
@use './styles/general.scss';



</style>
