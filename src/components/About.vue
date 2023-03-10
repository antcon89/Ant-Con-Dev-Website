<template>
  <div class="about" id="about">
    <div class="container">
      <div class="about_inner">
        <div class="left about-left-img" v-scroll-reveal="{ delay: 40 }">
          <img
            src="../assets/img/new2.jpg"
            alt="Anthony Connolly"
          />
        </div>
        <div class="right">
          <div class="name" v-scroll-reveal="{ delay: 40 }">
            <h3>Anthony Connolly<span class="bg">About</span></h3>
            <span class="job">Software Engineer</span>
          </div>
          <div class="text">
            <p class="font-weight-600" v-scroll-reveal="{ delay: 80 }">
              I'm a skilled software engineer with a strong work ethic and a commitment to delivering high-quality results. 
              I thrive in a team environment and enjoy collaborating with others to find creative solutions to complex challenges.
            </p>
            <p class="font-weight-600"  v-scroll-reveal="{ delay: 120 }">
              My technical expertise includes proficiency in various programming languages and the ability to quickly learn new technologies. 
              With a proven track record of success in developing and delivering software projects, 
              I am confident in my ability to make a valuable contribution to any organization.
            </p>
            <p class="font-weight-600"  v-scroll-reveal="{ delay: 160 }">
              Overall, I am a dynamic and talented software engineer who is eager to take on new challenges and contribute to the growth and success of my next employer.
            </p>
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
      isActive: false,
      isVisible: false,
    };
  },
  methods: {
    showModal: function () {
      this.isActive = true;
      this.isVisible = true;
    },
    closeModal: function () {
      this.isActive = false;
      this.isVisible = false;
    },
  },
};
</script>
