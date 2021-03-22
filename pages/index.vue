<template>
  <v-container pa-0>
    <Home id="home"></Home>
    <About id="about"></About>
    <Experiences id="xp"></Experiences>
    <Skills id="skills"></Skills>
    <Portfolio id="portfolio"></Portfolio>
    <Contact id="contact"></Contact>
  </v-container>
</template>

<script>
  import Home from "@/components/Home";
  import About from "@/components/About";
  import Experiences from "@/components/Experiences";
  import Skills from "@/components/Skills";
  import Portfolio from "@/components/Portfolio";
  import Contact from "@/components/Contact";

  export default {
    components: {
      Home,
      About,
      Experiences,
      Skills,
      Portfolio,
      Contact
    }
  }
</script>
