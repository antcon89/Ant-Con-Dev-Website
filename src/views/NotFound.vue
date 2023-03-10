<template>
  <div class="error-page-wrapper">
      <div class="content">
        <h1>404!</h1>
        <p>The page you are looking for could not be found.</p>
        <a class="back-button" href="#home">BACK TO HOME</a>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.error-page-wrapper {
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  background: transparent;
    .content {
      position: absolute;
      z-index: 2;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      h1{
        font-weight: 900;
        font-size: 125px;
        font-family: Montserrat;
        line-height: 1;
        letter-spacing: 5px;
        @media screen and (max-width: 768px) {
          font-size: 80px;
        }
      }
      p {
        font-family: Poppins;
        font-weight: 500;
        color: #646464;
        font-size: 20px;
        padding-top: 30px;
        padding-bottom: 45px;
        @media screen and (max-width: 768px) {
          padding-bottom: 30px;
          font-size: 18px;
          padding-top: 20px;
        }
      }
      .back-button {
        padding: 16px 50px;
        background: transparent;
        color: #ffffff;
        font-weight: 600;
        @media screen and (max-width: 768px) {
          padding: 12px 35px;
        }
        &:hover {
          background: #000;
          color: #ff0000;
        }
      }
    }
  }
</style>
