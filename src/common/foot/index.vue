<template>
  <div>
    <div class="foot">建议电脑显示器分辨率为1280*768以上 IE浏览器版本为8.0、9.0、10.0及360浏览器的高速模式浏览</div>
  </div>
</template>
<script>
export default {
  name: "foot"
};
</script>
<style scoped>
.foot {
  width: 100%;
  position:fixed;
  bottom:0px;
  margin-top: 31px;
  height: 53px;
  line-height: 53px;
  background: rgba(0, 132, 103, 1);
  font-size: 13px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  text-align: center;
}
</style>