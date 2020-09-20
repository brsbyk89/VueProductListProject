<template>
<div>
<div class="alert alert-danger" style="text-align:center" role="alert" v-if="showError">
                  Maksimum ürün ekleme limitine ulaştınız 5 saniye sonra sayfanız yenilenecektir
</div>
  <!-- <div class="container">
    <h1 class="text-center">Ürün Ekleme Uygulaması</h1>
    <hr> -->
    <!-- <div class="row">
      <div class="card offset-2 col-md-3">
        <div class="card-body tex-center d-flex align-items-center flex-column">
          <img height="128" class="img-responsive text-center mb-3"
               :src="product.selectedImage == null ? '/src/assets/default.png' : product.selectedImage">
          <input ref="file" type="file" style="display: none;" @change="onChange($event)" class="form-control">
          <button class="btn btn-outline-secondary " type="button" @click="$refs.file.click()">Resim Seç</button>
        </div>
      </div> -->
      <!-- <div class="col-md-5">
        <div class="col-md-11 card">
          <div class="card-body">
            <div class="form-group">
              <label>Ürün Adı</label>
              <input type="text" class="form-control" placeholder="adını giriniz" v-model="product.name">
            </div>
            <div class="row">
              <div class="form-group col-md-6">
                <label>Ürün Adeti</label>
                <input type="text" class="form-control" placeholder="adetini giriniz" v-model="product.count">
              </div>
              <div class="form-group col-md-6">
                <label>Ürün Fiyatı</label>
                <input type="text" class="form-control" placeholder="fiyatını giriniz" v-model="product.price">
              </div>
            </div>
            <button class="btn btn-outline-info btn-block" @click="addproduct">Ekle!</button>
          </div>
        </div>
      </div> -->
      <addcard></addcard>
    <br><br>
    <!-- <div class="progress">
      <div class="progress-bar bg-info" role="progressbar" style="width: 0%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
        0/10
      </div>
    </div> -->
    <appprogress></appprogress>
    <br><br>
    <h3 class="text-center">Eklenen Ürünlerin Listesi</h3>
    <hr>
    
    <cardlist></cardlist>
</div>

</template>

<script>
import cardlist from './CardList'
import addcard from './AddCard'
import appprogress from './Progress'
import {eventBus} from './main'
  export default {
    data(){
return {
  productcount:0,
  showError:false
}
    },
    components :
    {
cardlist,
addcard,
appprogress
    },
    created(){
     
       eventBus.$on("productcount",(data)=>{
            this.productcount=data
            if(this.productcount>5)
            {
              this.showError = true

                setTimeout(() => location.reload(), 5000);


            }
        });
    }
  }
</script>

<style>
  body {
    background-color: aliceblue;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .card{
    margin-right: 5px;
    margin-bottom: 5px;
  }

  .card:last-child{
    margin-right: 0px;
  }

  .col-md-2{
    max-width: 15.666667%!important;
  }

  .product-container{
    margin-left: 15px;
  }

</style>

