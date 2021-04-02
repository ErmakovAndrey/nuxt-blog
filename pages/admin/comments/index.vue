<template>
  <client-only>
    <CommentTable
      :thead="['Name', 'Text', 'Status', 'Chanche Status', 'Delete']"
    >
      <tbody slot="tbody">
        <tr v-for="comment in comments" :key="comment.id">
          <td>
            <span> {{ comment.name }} </span>
          </td>
          <td>
            <span> {{ comment.text }} </span>
          </td>
          <td>
            <span v-if="comment.publish" class="status true"> Publish </span>
            <span v-else class="status false"> Hidden </span>
          </td>
          <td>
            <span @click="changeComment(comment)" class="link">
              Change Status
            </span>
          </td>
          <td>
            <span @click="deleteComment(comment.id)" class="link">
              Delete
            </span>
          </td>
        </tr>
      </tbody>
    </CommentTable>
  </client-only>
</template>

<script>
import axios from 'axios'
import CommentTable from '~/components/admin/CommentTable'
export default {
  components: { CommentTable },
  layout: 'admin',
  data() {
    return {
      comments: [],
    }
  },
  mounted() {
    this.loadComments()
  },
  methods: {
    onSubmit(post) {
      console.log('comment editeng:')
      console.log(post)
    },
    changeComment(comment) {
      comment.publish = !comment.publish
      axios
        .put(
          `https://blog-nuxt-9e61d-default-rtdb.europe-west1.firebasedatabase.app/comments/${comment.id}.json`,
          comment
        )
        .catch((e) => console.log(e))
    },
    deleteComment(commentId) {
      axios
        .delete(
          `https://blog-nuxt-9e61d-default-rtdb.europe-west1.firebasedatabase.app/comments/${commentId}.json`
        )
        .then(() => {
            this.loadComments()
        })
        .catch((e) => console.log(e))
    },
    loadComments() {
      axios
        .get(
          'https://blog-nuxt-9e61d-default-rtdb.europe-west1.firebasedatabase.app/comments.json'
        )
        .then((res) => {
          let commentsArray = []
          Object.keys(res.data).forEach((key) => {
            const comment = res.data[key]
            commentsArray.push({ ...comment, id: key })
          })
          this.comments = commentsArray
        })
        .catch((e) => console.log(e))
    },
  },
}
</script>