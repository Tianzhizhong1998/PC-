<template>
  <div class="left-nav">
    <div class="science">
      <div class="title">HUMANITIES</div>
      <div class="vice-title">
        人文科学
        <span>(智库)</span>
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
            >{{t}}</div>
          </div>
          <div class="demo2" v-if="0 == tabNum"></div>
          <div class="demo2" v-if="1 == tabNum"></div>
          <div class="demo2" v-if="2 == tabNum"></div>
          <div class="demo2" v-if="3 == tabNum"></div>
          <div class="demo2" v-if="4 == tabNum"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "left-nav",
  data() {
    return {
      tabNum: 0,
      humanitiesList: ["生命教育", "人际关系", "社会命运", "情感", "成功"]
    };
  },
  methods: {
    demoClick(index) {
      this.tabNum = index;
    }
  }
};
</script>
<style scoped>
.science {
  width: 235px;
  height: 421px;
  background: rgba(5, 171, 180, 1);
  margin-top: 21px;
  margin-left: 370px;
  border-radius: 3px;
}
</style>