<template>
  <div>
    <NewPostForm @submit="onSubmit" />
  </div>
</template>

<script>
import NewPostForm from '~/components/admin/NewPostForm'
export default {
  components: { NewPostForm },
  layout: 'admin',
  methods: {
    onSubmit(post) {
      this.$store.dispatch('addPost', post).then(() => {
        this.$router.push('/admin')
      })
    },
  },
}
</script>