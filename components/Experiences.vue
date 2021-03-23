<template>
  <v-container pa-10 class="xp-container">
    <h3 class="section-title primary--text font-weight-bold pb-5">{{ $t("xp_title") }}</h3>
    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item v-for="(item, index) in $t('xp')" :key="index">
        <span slot="opposite">{{ item.dates }}</span>
        <v-card class="elevation-2">
          <div style="display: flex; justify-content: space-between" :style="'flex-direction:' + ($vuetify.breakpoint.mdAndDown ? 'column' : 'row')">
            <v-card-title class="headline" style="word-break: break-word;">{{ item.job }}</v-card-title>
            <v-card-title class="subtitle-1 py-0" style="word-break: break-word;">{{ item.company }}</v-card-title>
          </div>
          <v-card-text style="word-break: break-word; text-align: justify;" v-html="item.desc">
          </v-card-text>
        </v-card>
        <span v-if="$vuetify.breakpoint.smAndDown">{{ item.dates }}</span>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
  export default {
    name: 'Experiences'
  }
</script>

<style scoped lang="scss">
  .xp-container {
    background-color: darken(#303030, 3);
  }
</style>
