<template>
  <v-container class="pa-0">
    <a v-for="(item, index) in social" :key="index" :href="item.link" :class="index < social.length - 1 ? 'pr-2' : ''">
      <v-icon>{{ item.icon }}</v-icon>
    </a>
  </v-container>
</template>

<script>
  export default {
    name: 'SocialMedias',
    data() {
      return {
        social: [
          { icon: 'mdi-github', link: 'https://github.com/wumbaloo/' },
          { icon: 'mdi-controller-classic', link: 'https://wumbaloo.itch.io/' },
          { icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/william-gaudfrin/' },
          { icon: 'mdi-youtube', link: 'https://www.youtube.com/user/WilliamHDFull/videos/' }
        ]
      }
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>
