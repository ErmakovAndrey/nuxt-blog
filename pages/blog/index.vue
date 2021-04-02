<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Intro title="My posts: " />
    <PostsList :posts="postLaded" />
  </div>
</template>

<script>
export default {
  head() {
    let title = 'My blog page',
      descr = 'My SSR blog with NUXT js!',
      type = 'site'

    return {
      title: title,
      meta: [
        { hid: 'discription', name: 'description', content: descr },
        { hid: 'og:discription', name: 'og:description', content: descr },
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'og:type', name: 'og:type', content: type },
      ],
    }
  },
  computed: {
    postLaded() {
      return this.$store.getters.getPostsLoaded
    }
  }
}
</script>

