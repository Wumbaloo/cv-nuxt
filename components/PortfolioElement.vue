<template>
  <v-dialog v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-row>
        <v-col cols="12" align="center" class="pb-0">
          <v-btn
            class="px-10"
            color="red lighten-2"
            dark
            v-on="on">
            {{ $t('portfolio_seemore') }}
          </v-btn>
        </v-col>
      </v-row>
    </template>
    <v-card class="pa-5">
      <div style="text-align: center">
        <h6 class="headline primary--text">{{ item.title }}</h6>
        <span class="subheading secondary--text" style="font-weight: normal">{{ item.mission }}</span>
      </div>
      <v-row align="center" align-content="center" justify="space-between">
        <v-col cols="12" md="6">
          <h3 class="primary--text pb-2" style="font-weight: normal;">{{ $t('portfolio_details') }}</h3>
          <v-chip v-show="item.freelance" color="info" class="mb-2">{{ $t('freelance_mission') }}</v-chip>
          <div class="body-2 px-5" style="white-space: pre-wrap" v-html="$t(item.desc)"></div>
        </v-col>
        <v-col cols="12" md="6">
          <v-img :src="require('@/assets/projects/' + item.img)"></v-img>
        </v-col>
      </v-row>
      <v-card-actions>
        <v-row>
          <v-col cols="12" class="py-0">
            <v-btn
              text
              block
              @click="open_link(item)">
              {{ $t('portfolio_open_link') }}</v-btn>
          </v-col>
          <v-col cols="12" class="py-0">
            <v-btn
              text
              block
              @click="dialog = !dialog">
              {{ $t('portfolio_close') }}</v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'PortfolioElement',
    props: {
      item: Object
    },
    data() {
      return {
        dialog: false
      }
    },
    methods: {
      open_link(item) {
        if (item.link)
          window.open(item.link);
      }
    }
  }
</script>
