<template>
  <div class="navlist">
    <div class="nav">
      <div class="menuList">
        <ul>
          <li
            v-for="(item,index) in navList"
            :key="item.id"
            :class="{active:num==index}"
            @click="getNum(index)"
          >{{item.typeName}}</li>
        </ul>
      </div>
      <div class="tabCon">
        <div v-show="0 == num">
          <Index v-if="this.$route.meta.navFlag"/>
        </div>
        <div v-show="1 == num"></div>
        <div v-show="2== num"></div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  IistSubjectNavigateTypeDicByCourseId,
  getSubjectCourseDetail
} from "../../api";
import Index from "../../components/index";
export default {
  name: "navlist",
  data() {
    return {
      num: 0,
      navList: []
    };
  },
  components: {
    Index
  },
  created() {
    setTimeout(() => {
      this.IistSubjectNavigateTypeDicByCourseId();
    }, 1000);
    this.getSubjectCourseDetail();
  },
  methods: {
    getNum(index) {
      this.num = index;
    },
    getSubjectCourseDetail() {
      getSubjectCourseDetail({
        id: this.courseListId
      }).then(res => {
        this.description = res.data.description;
        this.courseId = res.data.id;
      });
    },
    IistSubjectNavigateTypeDicByCourseId() {
      IistSubjectNavigateTypeDicByCourseId({
        courseId: this.courseId
      }).then(res => {
        if (res.status === 200) {
          this.navList = res.data;
          console.log(this.navList);
        }
      });
    }
  }
};
</script>
<style scoped>
.nav {
  height: 43px;
  background: rgba(11, 150, 119, 1);
  border-radius: 3px;
}
.active {
  color: #fff;
  background: #ff9c00;
}
.menuList {
  width: 1239px;
  height: 43px;
  background-color: rgba(11, 150, 119, 1);
  margin-left: 290px;
}

ul {
  width: 100%;
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  color: #fff;
  font-size: 16px;
  line-height: 43px;
}

ul li {
  flex: 1;
  text-align: center;
  cursor: pointer;
  margin-left: 50px;
}
.tabCon {
  margin-top: 25px;
}
</style>