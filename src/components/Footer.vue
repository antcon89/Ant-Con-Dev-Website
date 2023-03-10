<template>
  <div class="anthony_tm_copyright">
    <div class="container">
      <div class="copyright_inner">
        <ul>
          <div v-scroll-reveal="{ delay: 20, distance: '20px' }">
            <span>Anthony Connolly &copy; {{ new Date().getFullYear() }}</span>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style scoped>
  .anthony_tm_copyright {
    padding: 20px;
    background-color: rgb(8, 8, 8);
  }
</style>