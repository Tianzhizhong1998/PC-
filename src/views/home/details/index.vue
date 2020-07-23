<template>
    <div>
     <Banner/>
     <Nav/>
     <LeftNav/>
     <Foot/>
    </div>
</template>
<script>
import Banner from '../../../common/banner'
import Nav from '../../../common/nav'
import Foot from '../../../common/foot'
import LeftNav from '../../../common/left-nav'
export default {
     name:"detail",
     components:{
       Banner,
       Nav,
       LeftNav,
       Foot
     }
}
</script>
<style scoped>
                    
</style>
