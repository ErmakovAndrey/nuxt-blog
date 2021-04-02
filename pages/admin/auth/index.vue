<template>
    <section class="auth">
        <div class="container">
            <form @submit.prevent="onSubmit" class="auth_form">
                <appInput type="email" v-model="user.email"> Login: </AppInput>
                <appInput type="password" v-model="user.password"> Password: </AppInput>
                
                <div class="controls">
                    <appButton> Login! </AppButton>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        onSubmit() {
            this.$store.dispatch('authUser', this.user)
                .then(res => {
                    this.$router.push('/admin')
                    // Reset
                    // this.user.email = '';
                    // this.user.password = '';
                })
                .catch(e => {
                    // Reset
                    this.user.email = '';
                    this.user.password = '';
                    console.log('Ошибка авторизации' + JSON.stringify(e, 0, 2))
                })
            
        }
    }
}
</script>

<style lang="scss">
.auth {
    text-align: center;
}
.auth_form {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 70vh;
    input {
        min-width: 460px;
    }
}  
</style>