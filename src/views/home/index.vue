<template>
  <div class="home">
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
    <div class="nav">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="课程首页" name="first"><Index/></el-tab-pane>
        <el-tab-pane label="课程标准"></el-tab-pane>
        <el-tab-pane label="教学设计"></el-tab-pane>
        <el-tab-pane label="课程学习"></el-tab-pane>
        <el-tab-pane label="教学策略"></el-tab-pane>
        <el-tab-pane label="教学分析"></el-tab-pane>
        <el-tab-pane label="教学成效"></el-tab-pane>
        <el-tab-pane label="人文科学"></el-tab-pane>
        <el-tab-pane label="弘道求真"></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { apiAddress } from "../../api";
import Index from '../../components/index'
export default {
  name: "home",
  data() {
    return {
      activeName: "first"
    };
  },
 components:{
    Index
 },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top {
  height: 265px;
  background: url(../../assets/home/banner.png) no-repeat;
  background-size:100% 265px;
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
.nav {
  height: 43px;
  background: rgba(11, 150, 119, 1);
  border-radius: 3px;
}
/deep/ .el-tabs--card > .el-tabs__header {
  border: none;
}
/deep/ .el-tabs--card > .el-tabs__header .el-tabs__nav {
  border: none;
  margin-left: 370px;
}
/deep/ .el-tabs__item {
  height: 43px;
  padding: 0 40px;
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
/deep/ .el-tabs__item.is-active {
  background: rgba(255, 156, 0, 1);
  border-radius: 3px;
}
/deep/ .el-tabs__item:hover {
  background: rgba(255, 156, 0, 1);
  border-radius: 3px;
}
/deep .el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
  border: none;
}
/deep .el-tabs--card > .el-tabs__header .el-tabs__item {
  border: none;
}
</style>
