<template>
    <section class="intro">
        <div class="container">
            <h2>{{ title }}</h2>
            <slot />
        </div>
    </section>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            requiered: true
        }
    }
}
</script>

<style lang="scss">
    .intro{
        width: 100%;
        margin: 1.8em 0;
        text-align: center;
        color: #fff;
        background-color: #4b40e3;
        font-size: 1.5em;
    }
</style>