<template>
  <v-container class="pb-10">
    <v-row class="fill-height" justify="space-between">
      <v-col cols="12" md="6" class="pa-10 my-5">
        <h3 class="section-title primary--text font-weight-bold pb-5">{{ $t("who_i_am") }}</h3>
        <p :class="$vuetify.breakpoint.mdAndUp ? 'px-10' : ''" style="text-align: justify; white-space: pre-wrap;" v-html="$t('who_i_am_desc')"></p>
      </v-col>
      <v-col
        align="center"
        class="py-0 pb-12"
        v-if="$vuetify.breakpoint.smAndDown">
        <v-col cols="12" class="pb-0 ma-0">
          <span class="text-uppercase primary--text font-weight-medium">{{ $t('location') }}</span>
          <p>Lille, FRANCE</p>
        </v-col>
        <v-col cols="12" class="ma-0">
          <span class="text-uppercase primary--text font-weight-medium">Email</span>
          <p><a href="mailto:william.gaudfrin@epitech.eu">william.gaudfrin@outlook.fr</a></p>
        </v-col>
      </v-col>
      <v-row align="center" v-else>
        <v-col
          cols="4"
          md="2"
          class="pa-10 ma-5 text-uppercase primary--text font-weight-medium">
          <p class="text-uppercase primary--text font-weight-medium">{{ $t('location') }}</p>
          <a>Email</a>
        </v-col>
        <v-col cols="4" md="4" class="pa-10 ma-5">
          <p>Lille, FRANCE</p>
          <a href="mailto:william.gaudfrin@epitech.eu">william.gaudfrin@outlook.fr</a>
        </v-col>
      </v-row>
      <v-col cols="12" md="6" class="px-10 mx-0">
        <h3 class="section-title primary--text font-weight-bold pb-5">{{ $t("educations_title") }}</h3>
        <v-col
          class="ml-10 mb-5 pa-0"
          v-for="(item, index) in $t('educations')"
          :key="index">
          <v-sheet class="mr-10">
            <v-layout>
              <v-sheet class="primary mr-3" style="width: 1px;"></v-sheet>
              <v-layout column>
                <h6 class="title font-weight-bold">{{ item.school }}</h6>
                <v-layout column align-end mr-3>
                  <span class="subtitle-1 primary--text font-weight-bold">{{ $t(item.title) }}</span>
                  <p class="subtitle-1">{{ $t(item.years) }}</p>
                </v-layout>
              </v-layout>
            </v-layout>
          </v-sheet>
        </v-col>
      </v-col>
      <v-flex xs12 md6 px-10 mx-0>
        <h3 class="section-title primary--text font-weight-bold pb-5">{{ $t("passions_title") }}</h3>
        <v-flex ml-10 mb-5 v-for="(item, index) in $t('passions')" :key="index">
          <v-sheet class="transparent">
            <v-row class="ma-0">
              <v-sheet class="primary mr-3" style="width: 1px;"></v-sheet>
              <h6 class="title font-weight-bold">{{ item }}</h6>
            </v-row>
          </v-sheet>
        </v-flex>
      </v-flex>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'About'
  }
</script>

<style scoped>

</style>
