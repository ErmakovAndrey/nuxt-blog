<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Promo />
    <Intro title="My lasts posts: " />
    <PostsList :posts="postLaded" />
    <Contacts />
  </div>
</template>

<script>
import Promo from '~/components/Promo'
import Contacts from '~/components/Contacts'
export default {
  components: { Promo, Contacts },
  head() {
    let title = 'My SSR blog',
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
    },
  },
}
</script>

