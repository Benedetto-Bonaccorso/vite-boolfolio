<script>
import AppNav from '../components/AppNav.vue';
import AppFooter from '../components/AppFooter.vue';
import axios from 'axios';
import { state } from '../state';
export default {
    name: 'ContactsView',
    components: { 
        AppNav,
        AppFooter 
    },
    data() {
        return {
            state,
            name: '',
            email: '',
            message: '',
            success: false,
            loading: false,
            errors: {}
        }
    },
    methods: {
        sendForm() {
            this.loading = true;
            this.errors = {};
            const data = {
                name: this.name,
                email: this.email,
                message: this.message
            }
            axios.post(`${this.state.baseUrl}/api/Leads?name=${data.name}&email=${data.email}&message=${data.message}`).then((response) => {
                this.success = response.data.success;
                console.log(response);
                if (this.success) {
                    this.name = '';
                    this.email = '';
                    this.message = '';
                } else {
                    this.errors = response.data.errors;
                }
                this.loading = false
            });
        }
    }
}
</script>

<template>

    <AppNav />

    <form @submit.prevent="sendForm()">
            <div class="mb-3">
                <label for="" class="form-label text-white">Full Name</label>
                <input type="text" name="name" id="name" v-model="name" class="form-control" placeholder="Mario Rossi"
                    aria-describedby="fullNameHelper">

                <p class="text-white" v-for="(error) in errors.name">
                    {{ error }}
                </p>

                <small id="fullNameHelper" class="text-white">Add your full name</small>
            </div>
            <div class="mb-3">
                <label for="" class="form-label text-white">Email</label>
                <input type="email" name="email" id="email" v-model="email" class="form-control"
                    placeholder="mario.rossi@example.com" aria-describedby="emailHelper">

                <p class="text-white" v-for="(error) in errors.email">
                    {{ error }}
                </p>

                <small id="emailHelper" class="text-white">Add your email address</small>
            </div>

            <div class="mb-3">
                <label for="" class="form-label text-white">Message</label>
                <textarea class="form-control" name="message" id="message" v-model="message" rows="5"></textarea>

                <p class="text-white" v-for="(error) in errors.message">
                    {{ error }}
                </p>

            </div>

            <button type="submit" class="btn btn-primary" :disabled="loading"> {{
                loading? 'Sending...': 'Contact me'
            }} </button>
        </form>

    <AppFooter />

</template>


<style lang="scss" scoped>
</style>