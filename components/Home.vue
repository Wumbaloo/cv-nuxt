<template>
  <v-container class="pa-0">
    <v-img :src="require('@/assets/background.jpg')"
           :lazy-src="require('@/assets/lazy_background.jpeg')"
           height="100vh">
      <v-row class="fill-height pa-5" align-content="end" no-gutters>
        <v-col cols="12" justify="end" align="end">
          <h1 class="subtext">WILLIAM GAUDFRIN</h1>
        </v-col>
        <v-col cols="12" justify="end" align="end">
        <h2 class="primary--text jobtitle"
        v-if="$vuetify.breakpoint.mdAndUp">
          {{ $t('job_title').toUpperCase() }}</h2>
        <h2 class="primary--text subtext" v-else>{{
        $t('job_title').toUpperCase() }}</h2>
        </v-col>
      </v-row>
    </v-img>
  </v-container>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style scoped>
  .jobtitle {
    font-size: 6rem;
    line-height: 6rem;
    font-weight: 300;
  }
  .subtext {
    font-size: 3rem;
    line-height: 56px;
    font-weight: 300;
  }

  @media only screen and (max-width: 320px) {
    .subtext {
      font-size: 12vw;
    }
  }
</style>
