<template>
  <div>
    <div class="top">
      <div class="users">
        <div class="users-left">欢迎访问哲学与人生课程界面！</div>
        <div class="users-right">
          <div class="user">用户：王娜那</div>
          <div class="integral">
            积分：
            <span>1520</span>
          </div>
          <div class="personalspace">个人空间</div>
          <i class="el-icon-house"></i>
        </div>
      </div>
      <div class="banner">
        <img src="../../assets/home/logo.png" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "banner"
};
</script>
<style scoped>
.top {
  height: 265px;
  background: url(../../assets/home/banner.png) no-repeat;
  background-size: 100% 265px;
}
.users {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 30px;
  background: url(../../assets/home/top.png) no-repeat;
}
.users-left {
  font-family: Regular;
  font-size: 14px;
  color: #fff;
}
.users-right {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #fff;
}
.integral {
  margin-left: 25px;
}
.integral span {
  color: #ffd200;
}
.personalspace {
  margin-left: 25px;
}
.el-icon-house {
  margin-left: 25px;
}
.banner img {
  margin-left: 370px;
}
</style>