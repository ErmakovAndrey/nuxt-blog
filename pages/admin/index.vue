<template>
    <PostsList :admin=true :posts="postLaded" />
</template>

<script>
export default {
  layout: 'admin',
  mounted() {
    this.$store.dispatch('nuxtServerInit')
  },
  computed: {
    postLaded() {
      return this.$store.getters.getPostsLoaded
    }
  }
}
</script>