<template>
  <v-container pa-10>
    <h3 class="section-title primary--text font-weight-bold pb-5">{{ $t('skills_title') }}</h3>
    <v-layout wrap align-center>
      <v-layout wrap align-center v-for="(category, i) in $t('skills')" :key="i">
        <v-layout column>
          <v-layout align-center v-for="(skill, j) in category.skills" :key="j" pl-5 mb-1>
            <span class="pl-5 pr-2 py-1">
              <v-img v-if="skill.icon" :src="require('@/assets/skills/' + skill.icon)" width="32"></v-img>
            </span>
            {{ skill.title }}
          </v-layout>
        </v-layout>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'Skills'
  }
</script>

<style scoped>

</style>
