<template>
        <div class="row product-container">
        <card v-for="item in productlist" v-bind:key="item.Id">
        <img class="card-img-top" :src="item.selectedImage == null ? '/default.png':item.selectedImage" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{item.name}}</h5>
          <small>
            <strong>Adet : </strong> {{item.count}}
          </small>
          <br>
          <small>
            <strong>Fiyat : </strong> {{item.price}}
          </small>
          <br>
          <small>
            <strong>Tutar : </strong> {{item.count*item.price}}
          </small>
        </div>

        </card>



    </div>
</template>
<script>
import card from './Card'
import {eventBus} from './main'
export default {
   components:{
       card
   },
   data(){
       return{
           productlist:[],
           maxListcountAdded:false,
       }
   },
   created(){
        eventBus.$on("productfromeventbus",(data)=>{
            if(!this.maxListcountAdded)
                this.productlist.push(data);
        });
   },
 watch: {
    productlist(){
        if(this.productlist.length>5)
        {
            this.maxListcountAdded = true;
        }
    }
    }
}
</script>