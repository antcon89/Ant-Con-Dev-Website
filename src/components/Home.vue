<template>
  <div class="home" id="home">
    <div class="background">
      <div class="leftpart"></div>
      <div class="rightpart">
        <div class="inner">
          <div
            class="image"
            :style="{ backgroundImage: 'url(' + img + ')' }"
          >
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="container">
        <div class="content_inner">
          <div class="name">
            <h3 class="stroke" v-scroll-reveal="{ delay: 1000 }">ANTHONY</h3>
            <h3 v-scroll-reveal="{ delay: 1050 }">CONNOLLY</h3>
            <span v-scroll-reveal="{ delay: 1100 }">Software Engineer</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require("../assets/img/234.jpg"),
    };
  },
};
</script>
