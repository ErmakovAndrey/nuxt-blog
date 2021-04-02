<template>
  <div>
    <NewPostForm :postEdit="post" @submit="onSubmit" />
  </div>
</template>

<script>
import NewPostForm from '~/components/admin/NewPostForm'
import axios from 'axios'
export default {
  components: { NewPostForm },
  layout: 'admin',
  asyncData(contex) {
    return axios
      .get(
        `https://blog-nuxt-9e61d-default-rtdb.europe-west1.firebasedatabase.app/posts/${contex.params.postId}.json`
      )
      .then((res) => {
        return {
          post: { ...res.data, id: contex.params.postId },
        }
      })
      .catch((e) => contex.error(e))
  },
  methods: {
    onSubmit(post) {
      this.$store.dispatch('editPost', post).then(() => {
        this.$router.push('/admin')
      })
    },
  },
}
</script>