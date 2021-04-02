<template>
    <section class="new-post">
        <div class="container">
            <form @submit.prevent="onSubmit">
                <appInput v-model="post.title"> Title </appInput>
                <appInput v-model="post.descr"> Description </appInput>
                <appInput v-model="post.img"> Img Link </appInput>
                <div class="post-content">
                    <appTextArea v-model.lazy="post.content"> Content </appTextArea>
                    <div class="content-preview">
                        <label> Preview </label>
                        <p v-html="compiledMarkdown"></p>
                    </div>
                </div>
                <!-- buttons -->
                <div class="controls">
                    <div class="btn btnDanger" @click="cancel"> Cancel </div>
                    <appButton> Save </appButton>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import marked from 'marked'

export default {
    props: {
        postEdit: {
            type: Object
        }
    },
    data() {
        return {
            post: this.postEdit ? { ...this.postEdit } : {
                title: '',
                descr: '',
                img: '',
                content: ''
            }
        }
    },
    computed: {
        compiledMarkdown() {
            return marked(this.post.content);
        }
    },
    methods: {
        cancel() {
            this.$router.push('/admin')
        },
        onSubmit() {
            this.$emit('submit', this.post)
        }
    }
}
</script>

<style lang="scss" scoped>
.post-content{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .control{
        width: 48%;
    }
    .content-preview{
        width: 48%;
    }
}
.controls{
    margin: 1.5em;
    text-align: center;
}    
</style>