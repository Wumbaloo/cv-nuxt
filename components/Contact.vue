<template>
  <v-container pa-10>
    <h3 class="section-title primary--text font-weight-bold pb-5">{{ $t('contact_title') }}</h3>
    <v-row class="pl-5" align="center" justify="center">
      <v-col cols="12" md="6" align="center" justify="center">
        <h3>Email</h3>
        <p>william.gaudfrin@epitech.eu</p>
        <v-btn x-large color="green" href="mailto:william.gaudfrin@epitech.eu">{{ $t('contact_email') }}</v-btn>
      </v-col>
      <v-row justify="center">
        <v-col cols="12" md="6" align-content="center" align="center" class="pb-10" style="text-align: center">
          <SocialMedias class="mb-2"></SocialMedias>
          <v-btn color="info" href="https://william-gaudfrin.fr/cv.pdf">{{ $t('cv_download') }}</v-btn>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
  import SocialMedias from "@/components/SocialMedias";

  export default {
    name: 'Contact',
    data() {
      return {
        subject: "",
        body: ""
      }
    },
    components: {
      SocialMedias
    },
    methods: {
      submit_mail() {
        window.open("mailto:william.gaudfrin@epitech.eu?subject=" + this.subject + "&body=" + this.body.replace(/\n/g, '%0D%0A'));
      }
    }
  }
</script>

<style scoped>

</style>
