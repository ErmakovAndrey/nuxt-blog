<template>
    <section class="post">
            <div class="container">
                <!-- header -->
                <div class="post-header">
                    <img :src="post.img" :alt="post.title">
                    <h1 class="title">{{ post.title }}</h1>
                    <p>{{ post.descr }}</p>
                </div>
                <!-- body -->
                <div class="post-body">
                    <p v-html="compiledMarkdown"></p>
                </div>
            </div>
        </section>
</template>

<script>
import marked from 'marked'

export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    computed: {
        compiledMarkdown() {
            return marked(this.post.content);
        }
    }
}
</script>