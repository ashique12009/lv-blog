<template>
    <div class="d-flex justify-content-center align-items-center">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-12 col-md-8 col-lg-6">
                    <div class="border border-3 border-primary"></div>
                    <div class="card bg-white">
                        <div class="card-body p-5">
                            <form class="mb-3 mt-md-4">
                                <h2 class="fw-bold mb-2 text-uppercase">Registration</h2>
                                <div class="mb-3">
                                    <label for="name" class="form-label"
                                        >Name</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="name"
                                        v-model="form.name"
                                        placeholder="your name"
                                    />
                                    <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label"
                                        >Email address</label
                                    >
                                    <input
                                        type="email"
                                        class="form-control"
                                        id="email"
                                        v-model="form.email"
                                        placeholder="name@example.com"
                                    />
                                    <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label"
                                        >Password</label
                                    >
                                    <input
                                        type="password"
                                        class="form-control"
                                        id="password"
                                        v-model="form.password"
                                        placeholder="*******"
                                    />
                                    <span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span>
                                </div>
                                <div class="mb-3">
                                    <label for="password_confirmation" class="form-label"
                                        >Password Confirmation</label
                                    >
                                    <input
                                        type="password"
                                        class="form-control"
                                        id="password_confirmation"
                                        v-model="form.password_confirmation"
                                        placeholder="*******"
                                    />
                                    <span class="text-danger" v-if="errors.password_confirmation">{{ errors.password_confirmation[0] }}</span>
                                </div>
                                <div class="d-grid">
                                    <button
                                        class="btn btn-outline-dark"
                                        type="submit"
                                        @click.prevent="register"
                                    >
                                        Register
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import User from '@/apis/User';
import Csrf from '@/apis/Csrf';

export default {
    name: 'RegistrationPage',
    data() {
        return {
            form: {
                name: "",
                email: "",
                password: "",
                password_confirmation: ""
            },
            errors: []
        }
    },
    methods: {
        register() {
            Csrf.getCookie().then(() => {
                User.register(this.form)
                .then(() => {
                    this.$router.push({name: "Dashboard"});
                })
                .catch(error => {
                    this.errors = error.response.data.errors;
                });
            });
        }
    }
};
</script>

<style scoped></style>