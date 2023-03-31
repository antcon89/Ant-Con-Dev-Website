<template>
  <div class="container mb-76px" id="skills">
    <div
      class="positon-relative skills_title"
      v-scroll-reveal="{ delay: 40, distance: '30px' }"
    >
      <div class="title">
        <h3>Skills<span class="bg">Skills</span></h3>
      </div>
    </div>
    <div class="text padding-scoped">
      <div class="" v-scroll-reveal="{ delay: 60 }">
        <h4><span class="bg">Front End</span></h4>
        <p class="font-weight-600">Vue, Vuex, TypeScript, JavaScript, jQuery, Razor, Vuetify, React.js, Bootstrap, CSS, HTML</p>
      </div>
      <div class="" v-scroll-reveal="{ delay: 80 }">
        <h4><span class="bg">Back End</span></h4>
        <p class="font-weight-600">C#, .NET, .NET Framework, LINQ, SQL, ASP.NET, ADO.NET, RESTful API</p>
      </div>
    </div>
    <div class="text padding-scoped">
      <div class="" v-scroll-reveal="{ delay: 60 }">
        <h4><span class="bg">People</span></h4>
        <p class="font-weight-600">Communication, Collaboration, Leadership</p>
      </div>
      <div class="" v-scroll-reveal="{ delay: 80 }">
        <h4><span class="bg">Other Tech</span></h4>
        <p class="font-weight-600">Git, Github, MVC, Visual Studio, VS Code, SSMS, SDKs, Postman, Bash, NPM, Jira, Agile</p>
      </div>
    </div>
    <br>
  </div>
</template>

<style lang="scss" scoped>
.padding-scoped {
  padding-top: 40px;
}
.text {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
}
.mb-76px {
  margin-bottom: 76px;
}

.skills_title {
  width: 100%;
  height: auto;
  clear: both;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.skills_title .title h3 {
  text-transform: uppercase;
  font-weight: 900;
  font-size: 35px;
  position: relative;
}

.skills_title .title h3 .bg {
  position: absolute;
  left: -6px;
  top: 0px;
  font-family: "Montserrat";
  color: transparent;
  font-size: 150px;
  font-weight: 900;
  opacity: 0.1;
  line-height: 0;
  -webkit-text-stroke: 1px #fff;
  -webkit-user-select: none;
}
</style>