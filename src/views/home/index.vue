<template>
  <div class="home">
    <Banner />
    <Nav />
    <Foot />
  </div>
</template>

<script>
import Banner from "../../common/banner";
import Nav from "../../common/nav";
import Foot from "../../common/foot";
export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    Banner,
    Nav,
    Foot
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
