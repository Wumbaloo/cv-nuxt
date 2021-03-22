<template>
  <v-container pa-10 class="portfolio-container">
    <h3 class="section-title primary--text font-weight-bold pb-5">{{ $t('portfolio_title') }}</h3>
    <v-carousel
      show-arrows
      :show-arrows-on-hover="$vuetify.breakpoint.mdAndUp"
      :hide-delimiters="!$vuetify.breakpoint.mdAndUp">
      <v-carousel-item
        v-for="(item, index) in $t('projects')"
        :key="index"
        @click="try_open(item)"
        :class="(item.link ? 'mouse-pointer' : '')">
        <div style="text-align: center" v-if="$vuetify.breakpoint.mdAndUp">
          <h6 class="headline primary--text">{{ item.title }}</h6>
          <span class="subheading secondary--text" style="font-weight: normal">{{ item.mission }}</span>
        </div>
        <v-row align="center" align-content="center" justify="space-between" class="px-10 mx-3 fill-height" v-if="$vuetify.breakpoint.smAndDown">
          <v-col cols="12" style="text-align: center" class="pb-12">
            <h6 class="headline primary--text">{{ item.title }}</h6>
            <span class="subheading secondary--text" style="font-weight: normal">{{ item.mission }}</span>
          </v-col>
          <v-col cols="12" md="6">
            <v-img :src="require('@/assets/projects/' + item.img)"></v-img>
          </v-col>
          <v-col cols="12" justify="center">
            <PortfolioElement :item="item"></PortfolioElement>
          </v-col>
        </v-row>
        <v-row align="center" align-content="center" justify="space-between" class="px-10 mx-6" v-else>
          <v-col cols="12" md="6">
            <h3 class="primary--text pb-2" style="font-weight: normal;">{{ $t('portfolio_details') }}</h3>
            <v-chip v-show="item.freelance" color="info" class="mb-2">{{ $t('freelance_mission') }}</v-chip>
            <div class="body-2 px-5" style="white-space: pre-wrap">{{ $t(item.desc) }}</div>
          </v-col>
          <v-col cols="12" md="6">
            <v-img :src="require('@/assets/projects/' + item.img)"></v-img>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
  import PortfolioElement from './PortfolioElement';

  export default {
    name: 'Portfolio',
    components: {
      PortfolioElement
    },
    methods: {
      try_open(item) {
        if (item.link && this.$vuetify.breakpoint.mdAndUp)
          window.open(item.link);
      },
    }
  }
</script>

<style scoped lang="scss">
  .mouse-pointer {
    cursor: pointer;
  }

  .portfolio-container {
    background-color: darken(#303030, 3);
  }
</style>
