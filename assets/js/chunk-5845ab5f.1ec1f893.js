(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5845ab5f"],{"8b9c":function(t,e,n){"use strict";n("c5f6"),n("94aa");var i=n("2b0e"),r=i["a"].extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}}),s=n("58df"),a=Object(s["a"])(r);e["a"]=a.extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, ".concat(this.parallax,"px)")}}},mounted:function(){this.init()},methods:{init:function(){var t=this,e=this.$refs.img;e&&(e.complete?(this.translate(),this.listeners()):e.addEventListener("load",(function(){t.translate(),t.listeners()}),!1),this.isBooted=!0)},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var e={staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,alt:this.alt},ref:"img"},n=t("div",{staticClass:"v-parallax__image-container"},[t("img",e)]),i=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:"".concat(this.height,"px")},on:this.$listeners},[n,i])}})},"94aa":function(t,e,n){},"9fe6":function(t,e,n){t.exports=n.p+"assets/img/ic_BackgroundLogininformation.b39f15ff.png"},c3db:function(t,e,n){"use strict";n.r(e);var i,r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-parallax",{attrs:{dark:"",src:n("9fe6"),height:"300"}},[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[i("h1",{staticClass:"display-1 font-weight-thin mb-4"},[t._v("Términos y condiciones")])])],1)],1),i("v-container",[i("div",{staticClass:"mx-auto mt-10 mb-10",attrs:{"max-width":"800",height:"1000",outlined:""}},[i("v-list-item",{attrs:{"three-line":""}},[i("v-list-item-content",[i("span",{domProps:{innerHTML:t._s(t.terminos.data)}})])],1)],1)])],1)},s=[],a=(n("8e6e"),n("ac6a"),n("456d"),n("96cf"),n("3b8d")),o=n("bd86"),c=n("2f62");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d=(i={name:"terminos",data:function(){return{}}},Object(o["a"])(i,"data",(function(){return{}})),Object(o["a"])(i,"computed",h({},Object(c["d"])("terminos",["terminos"]))),Object(o["a"])(i,"methods",h({},Object(c["b"])("terminos",["getTerminos"]))),Object(o["a"])(i,"mounted",function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getTerminos();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()),i),u=d,p=n("2877"),f=n("6544"),m=n.n(f),g=n("62ad"),w=n("a523"),b=n("da13"),v=n("5d23"),O=n("8b9c"),j=n("0fd9"),x=Object(p["a"])(u,r,s,!1,null,null,null);e["default"]=x.exports;m()(x,{VCol:g["a"],VContainer:w["a"],VListItem:b["a"],VListItemContent:v["a"],VParallax:O["a"],VRow:j["a"]})}}]);
//# sourceMappingURL=chunk-5845ab5f.1ec1f893.js.map