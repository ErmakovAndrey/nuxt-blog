<template>
  <section class="new-comment">
    <div class="container">
      <h2 class="title">New comment!</h2>
      
      <Message v-if="message" :message="message" />

      <form @submit.prevent="onSubmit" class="contact-form">
        <appInput v-model="comment.name"> Name: </appInput>
        <appTextArea v-model="comment.text">Text:</appTextArea>
        <!-- buttons -->
        <div class="controls">
          <appButton btnClass="btn btnPrimary"> Send! </appButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    postId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      message: null,
      comment: {
        name: '',
        text: '',
      },
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('addComment', {
          postId: this.postId,
          publish: false,
          ...this.comment
      })
      .then(() => {
          this.message = 'Submited!'
          // Reset
          this.comment.name = ''
          this.comment.text = ''
      })
      .catch(e => console.log(e))
    },
  },
}
</script>

<style lang="scss">
.new-comment {
  text-align: center;
  .contact-form {
    max-width: 600px;
    margin: 1.8em auto;
  }
  .controls {
    margin: 1.8em 0;
    button {
      transition: all 0.2s;
      &:hover {
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
      }
    }
  }
}
</style>