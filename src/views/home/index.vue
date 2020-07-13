<template>
  <div class="home">
   <div class="asd">123232</div>
  </div>
</template>

<script>
import {apiAddress} from '../../api'
export default {
  name: "home",
  data() {
    return {
       
    }
  },
  created(){
   this.apiAddress()
  },
  methods:{
     apiAddress(){
       apiAddress({

       }).then(res=>{
          
       })
     }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style less="less" scoped>
.asd{
  width:500px;
  height:100px;
  background:pink;
}
</style>
