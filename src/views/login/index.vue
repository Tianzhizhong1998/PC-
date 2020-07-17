<template>
  <div class="login">
    <div class="login-res">
      <div class="users">
        <div class="user">
          <label for>用户名：</label>
          <el-input v-model="user" placeholder="请输入内容"></el-input>
        </div>
        <div class="pass">
          <label for>密码：</label>
          <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
        </div>
        <div class="Verification">
          <label for>验证码：</label>
          <el-input v-model="verfica"></el-input>
          <img :src="imgCode" alt @click="changeImgCode" />
        </div>
        <el-button type="primary" @click="handleBtn">登录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { doLogin, generateCaptcha } from "../../api";
export default {
  name: "login",
  data() {
    return {
      user: "",
      password: "",
      verfica: "",
      url:"",
      imgCode:"http://192.168.5.53:8600/ideo-user/user/generateCaptcha"
    };
  },
  created() {
    this.generateCaptcha();
  },
  methods: {
    doLogin() {
      const salt = 'sizhengyanxueyuxunlianpingtaiIdeoPOLI';
      const str =   this.password + salt;
      this.password = this.$md5(str)
      doLogin({
          username:this.user,
          password:this.password,
          verifyCode:this.verfica
      }).then(res => {
            if(res.status===200){
              this.$router.push("/home")
            }else{
              this.$message(res.message)
            }
      }).catch(err=>{
          console.log(err)
      });
    },
    //生产验证码
    generateCaptcha() {
      generateCaptcha({})
        .then(res => {
        })
    },
    //更换验证码
    changeImgCode(){
       this.generateCaptcha();
        const num = Math.ceil(Math.random() * 10) // 生成一个随机数（防止缓存）
        this.imgCode = 'http://192.168.5.53:8600/ideo-user/user/generateCaptcha?' + num
  },
  //登录
   handleBtn(){
       if(this.user===""){
         this.$message("用户名不能为空")
        }else if(this.password===""){
          this.$message("密码不能为空")
        } else if(this.verfica===""){
           this.$message("验证码不能为空")
        }
        else{
          this.doLogin()
        }
  }
  }
};
</script>
<style scoped>
.login-res {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: skyblue;
}
.users {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -250px;
  margin-left: -250px;
  width: 600px;
  height: 600px;
  background: #fff;
}
.user {
  display: flex;
  margin: 50px 120px;
}
.pass {
  display: flex;
  margin: 50px 120px;
}
.Verification {
  display: flex;
  margin: 50px 120px;
}
.Verification .verfica {
  width: 150px;
  height: 80px;
  border: none;
}
/deep/.el-input {
  width: 70%;
}
/deep/ .el-button--primary {
  margin-left: 200px;
}
</style>