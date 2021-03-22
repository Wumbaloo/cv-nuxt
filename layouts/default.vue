<template>
  <v-app dark>
    <v-app-bar
      collapse
      fixed
      color="accent"
      light
      v-show="$vuetify.breakpoint.smAndDown"
      @click="drawer = !drawer">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Curriculum Vitae</v-toolbar-title>
      <span style="font-size: 1em">Menu</span>
    </v-app-bar>
    <v-navigation-drawer app color="grey darken-4" v-model="drawer">
      <v-layout column align-center justify-center fill-height>
        <h1 class="primary-color display-3 mb-6" :style="cssProps">WG</h1>
        <h2 class="headline mb-2">William Gaudfrin</h2>
        <h3 class="font-weight-light mb-10" style="font-size: 20px">{{ $t('job_title') }}</h3>
        <v-list rounded>
          <v-list-item v-for="(item, i) in items" :key="i" class="mb-2" @click="$vuetify.goTo('#' + item.to)">
            <v-list-item-content>
              <v-list-item-title style="text-align: center">{{ $t(item.text) }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <div class="pb-3"><SocialMedias></SocialMedias></div>
        <div>
          <v-btn fab small text v-show="$i18n.locale !== 'fr'" class="mr-2" :to="switchLocalePath('fr')">FR</v-btn>
          <v-btn fab small text v-show="$i18n.locale !== 'en'" :to="switchLocalePath('en')">EN</v-btn>
        </div>
      </v-layout>
    </v-navigation-drawer>
    <v-content>
      <v-container pa-0>
        <nuxt/>
      </v-container>
    </v-content>
    <v-footer>
      <v-col cols="12" class="text-center">
      Made with <v-icon small>mdi-heart</v-icon> by William GAUDFRIN using VueJS, NuxtJS and Vuetify &copy; {{ new Date().getFullYear() }}
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
  import SocialMedias from "@/components/SocialMedias";

  export default {
    components: {
      SocialMedias
    },
    computed: {
      cssProps() {
        return {
          '--primary-color': this.$vuetify.theme.themes.dark.primary,
          '--secondary-color': this.$vuetify.theme.themes.dark.secondary
        }
      }
    },
    data() {
      return {
        drawer: this.$vuetify.breakpoint.mdAndUp,
        items: [
          { text: 'items.about_me', to: 'about' },
          { text: 'items.experience', to: 'xp' },
          { text: 'items.skills', to: 'skills' },
          { text: 'items.portfolio', to: 'portfolio' },
          { text: 'items.contact', to: 'contact' }
        ],
      }
    }
  }
</script>

<style lang="scss">
  .primary-color {
    color: var(--primary-color);
  }
</style>
