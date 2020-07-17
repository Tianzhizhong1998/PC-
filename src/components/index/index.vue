<template>
  <div class="homepage">
    <div class="details">
      <div class="viedo"></div>
      <div class="Courseoverview">
        <span>survey</span>
        <div class="title">
          课程概况
          <img src="../../assets/home/huan.png" alt />
        </div>
        <p>阐明马克思主义哲学是科学的世界观和方法论，讲述辩证唯物主义和历史唯物主义基本观点及其对人生成长的意义；阐述社会生活及个人成长中进行正确价值判断和行为选择的意义；引导学生弘扬和践行社会主义核心价值观，为学生成长奠定正确的世界观、人生观和价值观基础。</p>
        <ul>
          <li>
            <div class="disc"></div>
            <div class="cont">第一章 立足客观实际，树立人生理想</div>
            <a>
              <i class="el-icon-reading"></i>学习
            </a>
          </li>
          <li>
            <div class="disc"></div>
            <div class="cont">第二章 辩证看问题，走好人生路</div>
            <a>
              <i class="el-icon-reading"></i>学习
            </a>
          </li>
          <li>
            <div class="disc"></div>
            <div class="cont">第三章 实践出真知，创新增才干</div>
            <a>
              <i class="el-icon-reading"></i>学习
            </a>
          </li>
          <li>
            <div class="disc"></div>
            <div class="cont">第四章 坚持唯物史观，在奉献中实现人生价值</div>
            <a>
              <i class="el-icon-reading"></i>学习
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 教学查看 -->
    <div class="teachinglist">
      <div class="teach">
        <div class="curriculum">课程学习</div>
        <div class="see">-- 点击查看 --</div>
      </div>
      <div class="teach1">
        <div class="curriculum">教学策略</div>
        <div class="see">-- 点击查看 --</div>
      </div>
      <div class="teach2">
        <div class="curriculum">教学成效</div>
        <div class="see">-- 点击查看 --</div>
      </div>
      <div class="teach3">
        <div class="curriculum">教学分析</div>
        <div class="see">-- 点击查看 --</div>
      </div>
    </div>
    <!-- 人文科学 -->
    <div class="humanities">
      <div class="top">
        <div class="hun">HUMANITIES</div>
        <div class="ren">
          人文科学
          <span>(智库)</span>
           <img src="../../assets/home/huan.png" alt />
        </div>
      </div>
      <div class="center">
        <div class="tab">
          <div class="list">
            <div
              class="demo1"
              v-for="(t,index) in humanitiesList"
              :key="index"
              @click="demoClick(index)"
              :class="{demoColor:index == tabNum}"
            >{{t.typeName}}</div>
          </div>
          <div class="demo2" v-if="0 == tabNum">
            <div class="classmaterelationship">
              <img src="../../assets/home/tong.png" alt @click="handleVideo" />
              <p>{{viedo}}</p>
              <div class="bai"></div>
              <div class="look">
                <div class="yan">
                  <img src="../../assets/home/yan.png" alt />
                  <span>{{viewNumber}}</span>
                </div>
                <div class="ping">
                  <img src="../../assets/home/ping.png" alt />
                  <span>61</span>
                </div>
                <div class="xi">
                  <img src="../../assets/home/xih.png" alt v-if="!like" @click="handleLike" />
                  <img src="../../assets/home/xi.png" alt v-if="like" @click="handleLike1" />
                </div>
                <div class="hour">{{createDate}}</div>
              </div>
            </div>
            <ul class="left">
              <li v-for="(item,index) in peopeList" :key="index">
                {{item.title}}
                <div class="huo">
                  <img src="../../assets/home/huo.png" alt v-if="huo" />
                </div>
                <span>{{item.createDate}}</span>
              </li>
            </ul>
            <!-- <ul class="right">
              <li>
                回归本质，成为自己
                <span>2020-06-03</span>
              </li>
              <li>
                将自己的人生过得精彩
                <span>2020-06-03</span>
              </li>
              <li>
                生命教育是人生重要课题
                <span>2020-06-03</span>
              </li>
              <li>
                那些感悟生命的经典名言
                <span>2020-06-03</span>
              </li>
              <li>
                能扛事，一个人最了不起的才华
                <span>2020-06-03</span>
              </li>
              <li>
                情绪万灵丹
                <span>2020-06-03</span>
              </li>
              <li>
                礼貌待人是人与人交往的开始
                <span>2020-06-03</span>
              </li>
              <li>
                如何成就自己的人生
                <span>2020-06-03</span>
              </li>
            </ul>-->
          </div>
          <div class="demo2" v-if="1 == tabNum">
            <ul class="left">
              <li v-for="(item,index) in peopeList" :key="index">
                {{item.title}}
                <div class="huo">
                  <img src="../../assets/home/huo.png" alt v-if="huo" />
                </div>
                <span>{{item.createDate}}</span>
              </li>
            </ul>
          </div>
          <div class="demo2" v-if="2 == tabNum">
            <ul class="left">
              <li v-for="(item,index) in peopeList" :key="index">
                {{item.title}}
                <div class="huo">
                  <img src="../../assets/home/huo.png" alt v-if="huo" />
                </div>
                <span>{{item.createDate}}</span>
              </li>
            </ul>
          </div>
          <div class="demo2" v-if="3 == tabNum">
            <ul class="left">
              <li v-for="(item,index) in peopeList" :key="index">
                {{item.title}}
                <div class="huo">
                  <img src="../../assets/home/huo.png" alt v-if="huo" />
                </div>
                <span>{{item.createDate}}</span>
              </li>
            </ul>
          </div>
          <div class="demo2" v-if="4 == tabNum">
            <ul class="left">
              <li v-for="(item,index) in peopeList" :key="index">
                {{item.title}}
                <div class="huo">
                  <img src="../../assets/home/huo.png" alt v-if="huo" />
                </div>
                <span>{{item.createDate}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="immense">
      <div class="tit">ACTIVITY</div>
      <div class="tit1">
        <div class="xian"></div>
        <img src="../../assets/home/yuan.png" alt />
        弘道求真
        <img src="../../assets/home/yuan.png" alt />
        <div class="xian"></div>
      </div>
      <div class="new">
        <div>
          <div class="new-left">
            <div class="pic">
              <img src="../../assets/home/new.png" alt />
            </div>
            <div class="writing">
              <div class="tle">
                首届“A.I.辩世界”主题辩论赛初赛第三场火热报名中
                <div class="huo">
                  <img src="../../assets/home/huo.png" alt />
                </div>
              </div>
              <p>时间：第三场第一回：6月3日19:30—20:10</p>
              <p>地点：教学楼四层大礼堂</p>
              <p>辩题：是否应该研发强人工智能的恋爱机器人</p>
            </div>
            <div class="btn">报名</div>
          </div>
          <div class="new-left1">
            <div class="pic">
              <img src="../../assets/home/ti.png" alt />
            </div>
            <div class="writing">
              <div class="tle">中学生参加辩论赛的好处是什么演讲赛火热报名中</div>
              <p>时间：第三场第一回：6月3日19:30—20:10</p>
              <p>地点：教学楼四层大礼堂</p>
              <p>辩题：中学生参加辩论赛的好处是什么</p>
            </div>
            <div class="btn">报名</div>
          </div>
        </div>

        <div class="new-right">
          <ul>
            <li>
              第三届濠梁杯辩论赛复赛赛果及半决赛预告
              <div class="signup">报名中</div>
              <span>2020-06-03</span>
            </li>
            <li>
              第九届“学院杯”辩论赛半决赛预告
              <div class="conduct">进行中</div>
              <span>2020-06-03</span>
            </li>
            <li>
              2020无差别辩论赛第一轮赛果
              <div class="star">即将开始</div>
              <span>2020-06-03</span>
            </li>
            <li>
              第六届“经纶杯”校辩论赛小组赛赛程公示
              <div class="star">即将开始</div>
              <span>2020-06-03</span>
            </li>
            <li>
              第七届国际问题辩论赛决赛赛果
              <span>2020-06-03</span>
            </li>
            <li>
              第一届四校华语网络辩论邀请赛收官之战
              <span>2020-06-03</span>
            </li>
            <li>
              华语辩论世界杯2020赛季5月31日第三轮
              <span>2020-06-03</span>
            </li>
            <li>
              审判时参考判例在我国利大于弊攻防
              <span>2020-06-03</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="foot">建议电脑显示器分辨率为1280*768以上 IE浏览器版本为8.0、9.0、10.0及360浏览器的高速模式浏览</div>
  </div>
</template>

<script>
import {
  getTypeDic,
  humanities,
  incrementHumanitiesViewNumber,
  operateLikesNumber
} from "../../api";
export default {
  name: "homepage",
  data() {
    return {
      tabNum: 0,
      humanitiesList: [],
      humanitiesId: "",
      like: false,
      lifeeducation: "",
      relationship: "",
      fate: "",
      emotion: "",
      success: "",
      peopeList: [],
      huo: false,
      videoList: {},
      viedo: "",
      viewNumber: "",
      createDate: "",
      content: "",
      isCollect: "",
      videoListId: ""
    };
  },
  created() {
    this.getTypeDic();
    setTimeout(() => {
      this.humanities();
    }, 1000);
    this.incrementHumanitiesViewNumber();
  },
  methods: {
    //视频跳转
    handleVideo() {
      location.href = this.content;
      // console.log(this.content)
    },
    demoClick(index) {
      this.tabNum = index;
      switch (index) {
        case 0:
          this.humanitiesId = this.lifeeducation;
          break;
        case 1:
          this.humanitiesId = this.relationship;
          break;
        case 2:
          this.humanitiesId = this.fate;
          break;
        case 3:
          this.humanitiesId = this.emotion;
          break;
        case 4:
          this.humanitiesId = this.success;
          break;
      }
      humanities({
        typeId: this.humanitiesId,
        limit: 6
      })
        .then(res => {
          this.videoList = res.data.videoData;
          console.log(this.videoList[0].title);
          this.peopeList = res.data.otherData;
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleLike() {
      this.operateLikesNumber();
      this.like = true;
    },
    handleLike1() {
      this.operateLikesNumber();
      this.like = false;
    },
    //查询各个课程下的模块所属类型接口
    getTypeDic() {
      getTypeDic({})
        .then(res => {
          if (res.status === 200) {
            this.humanitiesList = res.data;
            this.lifeeducation = this.humanitiesList[0].id;
            this.relationship = this.humanitiesList[1].id;
            this.fate = this.humanitiesList[2].id;
            this.emotion = this.humanitiesList[3].id;
            this.success = this.humanitiesList[4].id;
          }
        })
        .catch(err => {});
    },
    humanities() {
      humanities({
        typeId: this.lifeeducation,
        limit: 6
      })
        .then(res => {
          this.videoList = res.data.videoData;
          this.videoListId = this.videoList[0].id;
          console.log(this.videoListId);
          this.viedo = this.videoList[0].title;
          this.viewNumber = this.videoList[0].viewNumber;
          this.peopeList = res.data.otherData;
          this.createDate = this.videoList[0].createDate;
          this.content = this.videoList[0].content;
          this.isCollect = this.videoList[0].isCollect;
        })
        .catch(err => {
          console.log(err);
        });
    },
    incrementHumanitiesViewNumber() {
      incrementHumanitiesViewNumber({
        id: this.videoListId
      }).then(res => {
        console.log(res);
      });
    },
    operateLikesNumber() {
      operateLikesNumber({}).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
<style scoped>
.details {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 60px;
}
.viedo {
  width: 562px;
  height: 360px;
  background: #12161d;
  border-radius: 8px 8px 8px 8px;
  margin-left: -150px;
}
.Courseoverview {
  width: 540px;
  height: 360px;
  margin-left: 19px;
}
.Courseoverview span {
  position: absolute;
  font-size: 29px;
  font-family: FZHuPo-M04S;
  font-weight: 400;
  color: rgba(206, 206, 206, 1);
}
.Courseoverview .title {
  display: flex;
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
  line-height: 26px;
  margin-top: 25px;
}
.Courseoverview .title img{
  width:43px;
  height:13px;
  margin-top:7px;
  margin-left:3px;
}
.Courseoverview p {
  text-indent: 2em;
  margin-top: 19px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  line-height: 34px;
}
.Courseoverview ul li {
  display: flex;
  align-items: center;
  width: 640px;
  height: 35px;
}
.Courseoverview .cont {
  font-size: 15px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  margin-left: 8px;
}
.Courseoverview ul li:nth-child(1) {
  background: rgba(110, 223, 210, 0.23);
}
.Courseoverview ul {
  position: relative;
}
.Courseoverview ul li a {
  position: absolute;
  left: 550px;
  width: 75px;
  height: 22px;
  text-align: center;
  line-height: 22px;
  background: rgba(35, 169, 63, 1);
  border-radius: 3px;
  color: #fff;
}
.Courseoverview ul li .disc {
  width: 4px;
  height: 4px;
  background: rgba(35, 169, 63, 1);
  border-radius: 50%;
  margin-left: -10px;
}
.teachinglist {
  display: flex;
  height: 92px;
  margin-top: 20.5px;
  margin-left: 370px;
}
.teachinglist .teach {
  width: 280px;
  height: 92px;
  background: url(../../assets/home/mao.png) no-repeat;
  background-size: 100% 100%;
}
.curriculum {
  margin-left: 119px;
  margin-top: 20px;
  font-size: 26px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.see {
  margin-left: 119px;
  font-size: 13px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 234, 120, 1);
}
.teachinglist .teach1 {
  width: 280px;
  height: 92px;
  margin-left: 18px;
  background: url(../../assets/home/jiao.png) no-repeat;
  background-size: 100% 100%;
}
.teachinglist .teach2 {
  width: 280px;
  height: 92px;
  margin-left: 18px;
  background: url(../../assets/home/ce1.png) no-repeat;
  background-size: 100% 100%;
}
.teachinglist .teach3 {
  width: 280px;
  height: 92px;
  margin-left: 18px;
  background: url(../../assets/home/ce.png) no-repeat;
  background-size: 100% 100%;
}
.humanities {
  margin-left: 370px;
}
.humanities .top {
  height: 70px;
}
.humanities .top .hun {
  font-size: 29px;
  font-family: FZHuPo-M04S;
  font-weight: 400;
  color: rgba(206, 206, 206, 1);
}
.humanities .top .ren {
  position: absolute;
  display: flex;
  margin-top:-25px;
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
  z-index:99;
}
.humanities .top .ren span {
  font-size: 18px;
  margin-top:10px;
  margin-left:5px;
}
.humanities .top .ren img{
   width:43px;
   height:13px;
   margin-top:20px;
   margin-left:5px;
}
.humanities .center {
  display: flex;
}
.humanities .center .classmaterelationship {
  width: 354px;
  height: 324px;
  background: rgba(3, 164, 174, 1);
}
.humanities .center .classmaterelationship img {
  width: 354px;
  height: 212px;
}
.humanities .center .classmaterelationship p {
  font-size: 20px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  margin-left: 17px;
  margin-top: 20px;
  margin-bottom: 18px;
}
.humanities .center .classmaterelationship .bai {
  width: 40px;
  height: 1px;
  background: rgba(255, 255, 255, 1);
  margin-left: 15px;
}
.humanities .center .classmaterelationship .look {
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  margin-top: 13px;
}
.humanities .center .classmaterelationship .look img {
  width: 17px;
  height: 13px;
}
.humanities .center .classmaterelationship .look .yan {
  display: flex;
  align-items: center;
}
.humanities .center .classmaterelationship .look .yan span {
  margin-left: 3px;
}
.humanities .center .classmaterelationship .look .ping {
  display: flex;
  align-items: center;
}
.humanities .center .classmaterelationship .look .ping span {
  margin-left: 3px;
}
.humanities .center .classmaterelationship .look .xi {
  display: flex;
  align-items: center;
}
.humanities .center .classmaterelationship .look .hour {
  width: 95px;
  height: 16px;
  background: rgba(100, 205, 212, 1);
  border-radius: 8px;
  line-height: 16px;
  text-align: center;
  font-size: 13px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(0, 73, 78, 1);
}
.humanities .center .tab {
  position: relative;
  width: 75%;
  height: 324px;
  margin-left: 4px;
  background: rgba(248, 248, 248, 1);
}
.list {
  position: absolute;
  top: -40px;
  left: 730px;
}
.demo1 {
  float: left;
  margin-left: 28px;
  padding: 2px;
  line-height: 28px;
  cursor: pointer;
}

.demoColor {
  background: #03a4ae;
  border-radius: 2px;
}

.demo2 {
  display: flex;
  position: relative;
  padding-left: 10px;
}
.demo2 .left {
  padding-top: 32px;
  line-height: 36px;
  margin-left: 30px;
}
.demo2 .left .huo img {
  width: 17px;
  height: 19px;
  margin-top: 8px;
  margin-left: 5px;
}
.demo2 .left li {
  display: flex;
  padding-left: 15px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #000000;
  background: url(../../assets/home/xing.png) no-repeat left center;
}
.demo2 .left li:nth-child(1) {
  display: flex;
  padding-left: 15px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #cd4d00;
  background: url(../../assets/home/xing.png) no-repeat left center;
}
.demo2 .left li span {
  position: absolute;
  left: 650px;
  font-size: 13px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(84, 84, 84, 1);
}
.demo2 .right {
  padding-top: 32px;
  margin-left: 100px;
  line-height: 36px;
}
.demo2 .right li {
  padding-left: 15px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #000000;
  background: url(../../assets/home/xing.png) no-repeat left center;
}
.demo2 .right li span {
  position: absolute;
  right: 0;
  padding-right: 20px;
  font-size: 13px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(84, 84, 84, 1);
}
.immense {
  height: 360px;
  margin-left: 370px;
}
.tit {
  position: absolute;
  margin-left: 542px;
  font-size: 29px;
  font-family: FZHuPo-M04S;
  font-weight: 400;
  color: rgba(206, 206, 206, 1);
}
.tit1 {
  display: flex;
  margin-left: 40px;
  padding-top: 20px;
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
}
.tit1 .xian {
  width: 512px;
  height: 1px;
  background: rgba(144, 145, 147, 1);
  opacity: 0.47;
  margin-top: 20px;
}
.tit1 img {
  width: 16px;
  height: 13px;
  margin-top: 17px;
}
.new {
  display: flex;
  height: 261px;
}
.new-left {
  position: relative;
  display: flex;
  width: 650px;
  height: 118px;
  margin-top: 45px;
}
.new-left .pic img {
  width: 190px;
  height: 118px;
}
.new-left .writing {
  margin-left: 8px;
}

.new-left .writing .tle {
  display: flex;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
}
.new-left .writing .tle .huo img {
  width: 17px;
  height: 19px;
  margin-left: 5px;
}
.new-left .writing p {
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(67, 67, 67, 1);
  line-height: 23px;
}
.new-left .btn {
  position: absolute;
  top: 70px;
  right: 19px;
  width: 69px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  background: url(../../assets/home/btn.png) no-repeat;
  color: #fff;
}
.new-left1 {
  position: relative;
  display: flex;
  width: 650px;
  height: 118px;
  margin-top: 32px;
}
.new-left1 .pic img {
  width: 190px;
  height: 118px;
}
.new-left1 .writing {
  margin-left: 8px;
}
.new-left1 .writing .tle {
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
}
.new-left1 .writing p {
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(67, 67, 67, 1);
  line-height: 23px;
}
.new-left1 .btn {
  position: absolute;
  top: 70px;
  right: 19px;
  width: 69px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  background: url(../../assets/home/btn.png) no-repeat;
  color: #fff;
}
.new-right {
  position: relative;
  width: 580px;
  margin-top: 42px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  line-height: 35px;
}
.new-right ul li {
  display: flex;
  background: url(../../assets/home/dian.png) no-repeat left center;
  padding-left: 10px;
}
.new-right ul li .signup {
  width: 77px;
  height: 21px;
  margin-top: 10px;
  line-height: 21px;
  text-align: center;
  background: url(../../assets/home/hong.png) no-repeat;
  background-size: 77px 21px;
  color: #fff;
}
.new-right ul li .conduct {
  width: 77px;
  height: 21px;

  line-height: 21px;
  text-align: center;
  background: url(../../assets/home/lv.png) no-repeat;
  background-size: 77px 21px;
  color: #fff;
}
.new-right ul li .star {
  width: 77px;
  height: 21px;
  margin-top: 10px;
  line-height: 21px;
  text-align: center;
  background: rgba(238, 238, 238, 1);
  opacity: 0.62;
  border-radius: 3px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(0, 149, 158, 1);
}
.new-right ul li span {
  position: absolute;
  left: 450px;
  font-size: 13px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(84, 84, 84, 1);
  line-height: 35px;
}
.foot {
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