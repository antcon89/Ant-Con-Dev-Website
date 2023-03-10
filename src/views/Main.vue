<template>
  <div>
    <Header />
    <Home />
    <About />
    <Skills />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Skills from "../components/Skills.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    Home,
    Skills,
    About,
    Footer,
  }
};
</script>
