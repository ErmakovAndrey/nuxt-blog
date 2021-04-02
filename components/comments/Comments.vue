<template>
    <section v-if="comments" class="comments">
        <div class="container">
            <h2 class="title">Comments</h2>
            <p v-if="comments.length == 0"> Comments: 0</p>
            <div class="comment" v-for="comment in comments" :key="comment.name">
                <p class="name">{{ comment.name }}</p>
                <p class="text">{{ comment.text }}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        comments: {
            type: Array,
            default: null
        }
    }
}
</script>

<style lang="scss">
.comments {
    text-align: center;
    margin: 1.8em auto;
    .comment {
    padding: 1em;
    margin-bottom: 1em;
    width: 600px;
    background-color: #fff;
        .name{
            font-size: 1.3em;
            color: #5c4de7;
            margin-bottom: 0.5em;
        }
    }
}
</style>