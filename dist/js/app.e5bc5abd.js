(function(t){function e(e){for(var r,a,s=e[0],i=e[1],l=e[2],d=0,p=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&p.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var i=n[s];0!==c[i]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},c={app:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=i;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),c=n.n(r);c.a},"56d7":function(t,e,n){"use strict";n.r(e),n.d(e,"eventBus",(function(){return M}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.showError?n("div",{staticClass:"alert alert-danger",staticStyle:{"text-align":"center"},attrs:{role:"alert"}},[t._v(" Maksimum ürün ekleme limitine ulaştınız 5 saniye sonra sayfanız yenilenecektir ")]):t._e(),n("addcard"),n("br"),n("br"),n("appprogress"),n("br"),n("br"),n("h3",{staticClass:"text-center"},[t._v("Eklenen Ürünlerin Listesi")]),n("hr"),n("cardlist")],1)},o=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row product-container"},t._l(t.productlist,(function(e){return n("card",{key:e.Id},[n("img",{staticClass:"card-img-top",attrs:{src:null==e.selectedImage?"/src/assets/default.png":e.selectedImage,alt:"Card image cap"}}),n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v(t._s(e.name))]),n("small",[n("strong",[t._v("Adet : ")]),t._v(" "+t._s(e.count)+" ")]),n("br"),n("small",[n("strong",[t._v("Fiyat : ")]),t._v(" "+t._s(e.price)+" ")]),n("br"),n("small",[n("strong",[t._v("Tutar : ")]),t._v(" "+t._s(e.count*e.price)+" ")])])])})),1)},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-2 card"},[t._t("default")],2)},l=[],u={created:function(){}},d=u,p=n("2877"),f=Object(p["a"])(d,i,l,!1,null,null,null),m=f.exports,v={components:{card:m},data:function(){return{productlist:[],maxListcountAdded:!1}},created:function(){var t=this;M.$on("productfromeventbus",(function(e){t.maxListcountAdded||t.productlist.push(e)}))},watch:{productlist:function(){this.productlist.length>5&&(this.maxListcountAdded=!0)}}},g=v,b=Object(p["a"])(g,a,s,!1,null,null,null),h=b.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",{staticClass:"text-center"},[t._v("Ürün Ekleme Uygulaması")]),n("hr"),n("div",{staticClass:"row"},[n("div",{staticClass:"card offset-2 col-md-3"},[n("div",{staticClass:"card-body tex-center d-flex align-items-center flex-column"},[n("img",{staticClass:"img-responsive text-center mb-3",attrs:{height:"128",src:null==t.product.selectedImage?"/src/assets/default.png":t.product.selectedImage}}),n("input",{ref:"file",staticClass:"form-control",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:function(e){return t.onChange(e)}}}),n("button",{staticClass:"btn btn-outline-secondary ",attrs:{type:"button"},on:{click:function(e){return t.$refs.file.click()}}},[t._v("Resim Seç")])])]),n("div",{staticClass:"col-md-5"},[n("div",{staticClass:"col-md-11 card"},[n("div",{staticClass:"card-body"},[n("div",{staticClass:"form-group"},[n("label",[t._v("Ürün Adı")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.product.name,expression:"product.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"adını giriniz"},domProps:{value:t.product.name},on:{input:function(e){e.target.composing||t.$set(t.product,"name",e.target.value)}}})]),n("div",{staticClass:"row"},[n("div",{staticClass:"form-group col-md-6"},[n("label",[t._v("Ürün Adeti")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.product.count,expression:"product.count"}],staticClass:"form-control",attrs:{type:"number",placeholder:"adetini giriniz"},domProps:{value:t.product.count},on:{input:function(e){e.target.composing||t.$set(t.product,"count",e.target.value)}}})]),n("div",{staticClass:"form-group col-md-6"},[n("label",[t._v("Ürün Fiyatı")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.product.price,expression:"product.price"}],staticClass:"form-control",attrs:{type:"number",placeholder:"fiyatını giriniz"},domProps:{value:t.product.price},on:{input:function(e){e.target.composing||t.$set(t.product,"price",e.target.value)}}})])]),n("button",{staticClass:"btn btn-outline-info btn-block",on:{click:t.addproduct}},[t._v("Ekle!")])])])])])])},_=[],C=(n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),{data:function(){return{imageList:[],product:{Id:null,selectedImage:null,name:null,count:null,price:null},clickedcount:0}},methods:{onChange:function(t){var e=t.target.files[0];this.product.selectedImage=URL.createObjectURL(e)},addproduct:function(){this.clickedcount=this.clickedcount+1,M.$emit("productfromeventbus",this.product),M.$emit("productcount",this.clickedcount),this.product={Id:null,selectedImage:null,name:null,count:null,price:null}}}}),x=C,w=Object(p["a"])(x,y,_,!1,null,null,null),O=w.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"progress"},[n("div",{staticClass:"progress-bar bg-info",style:t.styleObject,attrs:{role:"progressbar","aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"}},[t._v(" "+t._s(t.productcount)+"/5 ")])])},j=[],$={data:function(){return{productcount:0}},created:function(){var t=this;M.$on("productcount",(function(e){t.productcount=e}))},computed:{styleObject:function(){return{width:20*this.productcount+"%"}}},watch:{productcount:function(){this.productcount>5&&(this.productcount=5)}}},E=$,I=Object(p["a"])(E,k,j,!1,null,null,null),P=I.exports,S={data:function(){return{productcount:0,showError:!1}},components:{cardlist:h,addcard:O,appprogress:P},created:function(){var t=this;M.$on("productcount",(function(e){t.productcount=e,t.productcount>5&&(t.showError=!0,setTimeout((function(){return location.reload()}),5e3))}))}},L=S,A=(n("034f"),Object(p["a"])(L,c,o,!1,null,null,null)),z=A.exports,M=new r["a"];new r["a"]({el:"#app",render:function(t){return t(z)}})},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.e5bc5abd.js.map