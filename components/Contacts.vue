<template>
    <section class="contact">
        <div class="container">
            <h2 class="title">
                Contact me!
            </h2>
            <form @submit.prevent="onSubmit" class="contact-form">
                <appInput v-model="user.name"> Name: </appInput>
                <appInput type="email" v-model="user.email"> Email: </appInput>
                <appTextArea v-model="user.text">Text:</appTextArea>
                <!-- buttons -->
                <div class="controls">
                    <appButton btnClass="btnWhite">
                        Send!
                    </appButton>
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
                name: '',
                email: '',
                text: ''
            }
        }
    },
    methods: {
        onSubmit() {
            console.log(this.user)
        }
    }
}
</script>

<style lang="scss">
.contact {
    text-align: center;
    background: rgb(103, 51, 199);
    color: #fff;
    .title{
        color: #fff;
    }
    .contact-form {
        max-width: 600px;
        margin: 1.8em auto;
    }
    .controls {
        margin: 1.8em 0;
        button {
            transition: all 0.2s;
            &:hover{
                box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
            }
        }
    }
}    
</style>