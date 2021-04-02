<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Post :post="post" />
    <Comments :comments="comments" />
    <NewComment :postId="$route.params.id" />
  </div>
</template>

<script>
import axios from 'axios'
import Post from '~/components/blog/Post'
import NewComment from '~/components/comments/NewComment'
import Comments from '~/components/comments/Comments'
export default {
  components: { Post, NewComment, Comments },
  head() {
    let title = this.post.title,
      descr = this.post.descr,
      type = 'site',
      img = this.post.img

    return {
      title: title,
      meta: [
        { hid: 'discription', name: 'description', content: descr },
        { hid: 'og:discription', name: 'og:description', content: descr },
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'og:type', name: 'og:type', content: type },
        { hid: 'og:img', name: 'og:img', content: img },
      ],
    }
  },
  async asyncData(context) {
    let [post, comments] = await Promise.all([
      axios.get(
        `https://blog-nuxt-9e61d-default-rtdb.europe-west1.firebasedatabase.app/posts/${context.params.id}.json`
      ),
      axios.get(
        `https://blog-nuxt-9e61d-default-rtdb.europe-west1.firebasedatabase.app/comments.json`
      ),
    ])

    let commentsArray = Object.values(comments.data).filter(
      (comment) => comment.postId === context.params.id && comment.publish
    )

    return {
      post: post.data,
      comments: commentsArray,
    }
  },
}
</script>

<style lang="scss">
.post {
  max-width: 900px;
  margin: 0 auto;
}
.post-header {
  text-align: center;
  margin-bottom: 1.8em;
  img {
    max-width: 400px;
    margin-bottom: 1.8em;
  }
  p {
    color: #999;
  }
}
.post-body {
  text-align: left;
  margin-bottom: 1.8em;
}
</style>
