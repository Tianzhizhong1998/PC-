<template>
  <div class="home">
    <div class="asd">
      <span>123232</span>
    </div>
  </div>
</template>

<script>
import { apiAddress } from "../../api";
export default {
  name: "home",
  data() {
    return {};
  },
  created() {
    this.apiAddress();
  },
  methods: {
    apiAddress() {
      apiAddress({}).then((res) => {});
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../home/index.less";
</style>
