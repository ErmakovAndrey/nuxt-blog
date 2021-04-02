import vue from 'vue' //Добвлено для добавления реактивности vue.set
import axios from 'axios'
import Cookies from 'js-cookie'

export const state = () => ({
  postsLoaded: [],
  token: null
})

export const mutations = {
  addPost(state, post) {
    state.postsLoaded.push(post)
  },
  setPosts(state, posts) {
    state.postsLoaded = posts
  },
  editPost(state, post) {
    const postIndex = state.postsLoaded.findIndex(elem => elem.id === post.id)
    // state.postsLoaded[postIndex] = post
    vue.set(state.postsLoaded, postIndex, post)
  },
  setToken(state, token) {
    state.token = token
  },
  detroyToken(state) {
    state.token = null
  },
}

export const actions = {
  nuxtServerInit({ commit }, contex) {
    return axios
      .get(
        'https://blog-nuxt-9e61d-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
      )
      .then(res => {
        const postsArray = []
        for (let key in res.data) {
          postsArray.push({ ...res.data[key], id: key })
        }

        commit('setPosts', postsArray)
      })
      .catch(e => {
        console.log(e)
      })
  },
  authUser({ commit }, authData) {
    const key = 'AIzaSyCaz1eNL1_rDA3FJqjF0Bg8iXoG-7Cb8U8'
    return axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`,
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }
      )
      .then(res => {
        let token = res.data.idToken
        commit('setToken', token)
        // To localstorage
        localStorage.setItem('token', token)
        // To cookie
        // Cookies.set('jwt', token)
      })
  },
  initAuth({commit}, req) {
    let token

    // if (req) {
    //   if (!req.headers.cookie) return false
    //   const jwtCookie = req.headers.cookie
    //     .split(';')
    //     .find( tok => tok.trim().startsWith('jwt='))
    //   if (!jwtCookie) return false  
    //   token = jwtCookie.split('=')[1]
    // } else {
      token = localStorage.getItem('token')
      if (!token) return false
    // }
    commit('setToken', token)
  },
  logoutUser({commit}) {
    localStorage.removeItem('token')
    // Cookies.remove('jwt')
    commit('detroyToken')
  },
  addPost({ commit, state }, post) {
    return axios
      .post(
        `https://blog-nuxt-9e61d-default-rtdb.europe-west1.firebasedatabase.app/posts.json?auth=${state.token}`,
        post
      )
      .then(res => {
        // console.log(res)
        commit('addPost', { ...post, id: res.data.name })
      })
      .catch(e => {
        console.log(e)
      })
  },
  editPost({ commit, state }, post) {
    axios
      .put(
        `https://blog-nuxt-9e61d-default-rtdb.europe-west1.firebasedatabase.app/posts/${post.id}.json?auth=${state.token}`,
        post
      )
      .then(res => {
        commit('editPost', post)
      })
      .catch(e => console.log(e))
  },
  addComment({ commit }, comment) {
    return axios
      .post(
        'https://blog-nuxt-9e61d-default-rtdb.europe-west1.firebasedatabase.app/comments.json',
        comment
      )
      .catch(e => console.log(e))
  }
}

export const getters = {
  getPostsLoaded: state => state.postsLoaded,
  checkAuthUser: state => state.token != null
}
