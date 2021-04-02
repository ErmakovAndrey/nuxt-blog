<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section class="about">
        <div class="container">
            <h1 class="title">About my blog</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Intro title="Lorem ipsum"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <img src="@/assets/img/about.jpg" alt="about">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </section>
  </div>
</template>

<script>
export default {
    head() {
    let title = 'About SSR blog',
      descr = 'About SSR blog with NUXT js!',
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
}
</script>

<style lang="scss">
    .about{
        text-align: center;
        p{
            margin-bottom: 0.5em;
        }
    }
</style>
