<template>
     <div class="progress">
      <div class="progress-bar bg-info" role="progressbar" :style="styleObject" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
        {{productcount}}/5
      </div>
    </div>
</template>
<script>
import {eventBus} from './main'
export default {
  data(){
return {
  productcount:0
}
  },
    created(){
      eventBus.$on("productcount",(data)=>{
            this.productcount=data
        });
    },
    computed:{
      styleObject(){
        return {
          width:(this.productcount*20)+'%'
        }
      }
    },
     watch: {
    productcount(){
        if(this.productcount>5)
        {
            this.productcount = 5
        }
    }
    }
}
</script>