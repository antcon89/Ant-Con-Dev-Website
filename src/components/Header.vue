<template>
  <div>
    <scroll-fixed-header :fixed.sync="fixed" :threshold="56">
      <div class="header">
        <div class="container">
          <div class="topbar_inner">
            <div class="logo">
              <a href="#home">
                <img src="../assets/img/v2.svg" alt="AC" />
              </a>
            </div>
            <div class="menu">
              <div class="links">
                <ul class="anchor_nav">
                  <scrollactive
                    bezier-easing-value=".5,0,.35,1"
                    :offset="69"
                    :duration="100"
                    :alwaysTrack="true"
                  >
                    <li class="current">
                      <a href="#home" class="scrollactive-item">
                        <span class="first">Home</span>
                        <span class="second">Home</span>
                      </a>
                    </li>
                    <li>
                      <a href="#about" class="scrollactive-item">
                        <span class="first">About</span>
                        <span class="second">About</span>
                      </a>
                    </li>
                    <li>
                      <a href="#skills" class="scrollactive-item">
                        <span class="first">Skills</span>
                        <span class="second">Skills</span>
                      </a>
                    </li>
                    <li>
                      <a @click="openPdf" class="scrollactive-item style-resume">
                        <span class="first">Resume</span>
                        <span class="second">Resume <img src="../assets/img/pdf2.png" alt="PDF Icon" /></span>
                      </a>
                    </li>
                  </scrollactive>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </scroll-fixed-header>

    <!-- MOBILE MENU -->
    <div class="mobile_menu">
      <div class="topbar_inner">
        <div class="container bigger">
          <div class="topbar_in">
            <div class="logo">
              <a href="#home">
                <img src="../assets/img/v2.svg" alt="AC" />
              </a>
            </div>
            <div class="my_trigger">
              <div
                class="hamburger hamburger--collapse-r"
                :class="{ 'is-active': active }"
              >
                <div
                  class="hamburger-box"
                  @click="active = !active"
                  :aria-pressed="active ? 'true' : 'false'"
                >
                  <div class="hamburger-inner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="dropdown"
        :class="{ active: active }"
      >
        <div class="container">
          <span
            class="close_menu"
            @click="active = !active"
            :aria-pressed="active ? 'true' : 'false'"
          >
            <img src="../assets/img/close.svg" alt="close menu" />
          </span>
          <div class="dropdown_inner">
            <ul class="anchor_nav">
              <scrollactive
                bezier-easing-value=".5,0,.35,1"
                :offset="76"
                :duration="100"
                :alwaysTrack="true"
              >
                <li>
                  <a
                    href="#home"
                    class="scrollactive-item"
                    @click="active = !active"
                    >Home</a
                  >
                </li>
                <li>
                  <a
                    href="#about"
                    class="scrollactive-item"
                    @click="active = !active"
                    >About</a
                  >
                </li>
                <li>
                  <a
                    href="#skills"
                    class="scrollactive-item"
                    @click="active = !active"
                    >Skills</a
                  >
                </li>
                <li>
                  <a href="#about" 
                  class="scrollactive-item" 
                  @click="() => { openPdf(); active = !active; }">Resume</a
                  >
                </li>
              </scrollactive>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pdfFile from "../assets/pdf/resume.pdf";

export default {
  components: {},
  data() {
    return {
      active: false,
      fixed: false,
    };
  },
  methods: {
    openPdf() {
      window.open(pdfFile, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: -100px;
  left: 0px;
  right: 0px;
  z-index: 10;
  padding: 20px 0px;
  transition: all 0.3s ease;
}

.loaded .header {
  top: 0px;
}

.header.animate {
  padding: 15px 0px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.06);
}

.header .topbar_inner {
  width: 100%;
  height: auto;
  clear: both;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.is-fixed .header {
  background-color: #000;
  padding: 20px 50px;
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.1%);
}

.header .topbar_inner .logo img {
  max-width: 70px;
}

.header .wrapper {
  width: 30px;
  height: 17px;
  top: 5px;
  position: relative;
}

.header .menu {
  display: flex;
  align-content: center;
}

.header .menu .links ul {
  margin: 0px;
  list-style-type: none;
  position: relative;
  top: 5px;
}

.header .menu .links ul li {
  margin: 0px 30px 0px 0px;
  display: inline-block;
}

.header .menu .links ul li:last-child {
  margin-right: 0px;
}

.header .menu .links ul li a {
  text-decoration: none;
  color: #fff;
  font-family: "Montserrat";
  font-weight: 600;
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.header .menu .links ul li a .first {
  position: absolute;
  transform: translateY(100%);
}

.header .menu .links ul li a .second {
  position: relative;
  display: block;
}

.style-resume {
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 8px;
  background-color: #f40e024c;
}

.style-resume:hover {
  cursor: pointer;
}

.style-resume img {
  height: 16px;
  padding-bottom: 2px;
}
</style>
