(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54c8f3df"],{"64cf":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-col",{staticClass:"text-left orders__back",attrs:{cols:"12"},on:{click:function(e){return e.preventDefault(),t.goBack(e)}}},[t._v("Regresar")]),a("h1",{staticClass:"profile"},[t._v("Orden #"+t._s(t.id_order))]),a("v-col",[a("v-card",[a("v-col",{staticClass:"pa-1"},[a("v-card-text",{staticClass:"py-1"},[t._v(t._s(t.deliveryType(t.orderData.delivery_type_id)))]),a("v-card-text",{staticClass:"py-1"},[t._v("Fecha y Hora: "+t._s(t.orderData.created_at))])],1)],1)],1),a("h3",{staticClass:"profile"},[t._v("Productos")]),t._l(t.orderDetail,(function(e){return a("v-col",{key:e.id,attrs:{cols:"12"}},[a("v-card",{staticStyle:{display:"flex"}},[a("v-col",{staticClass:"pa-1",attrs:{cols:"3"}},[a("v-img",{staticClass:"px-3 mx-auto",attrs:{height:"150",width:"150",contain:"",src:e.image,"lazy-src":e.image,alt:e.description}})],1),a("v-col",{staticClass:"pa-1 my-auto",attrs:{cols:"9"}},[a("v-card-text",{staticClass:"py-1"},[t._v(t._s(e.name))]),a("v-card-text",{staticClass:"py-1"},[t._v("Cantidad: "+t._s(e.sale.quantity))]),a("v-card-text",{staticClass:"py-1"},[t._v("Precio: "+t._s(e.sale.sale_price.toFixed(2)))])],1)],1)],1)})),a("v-col",[a("v-card",{staticClass:"mt-1"},[a("v-col",{staticClass:"pa-1"},[a("v-card-text",{staticClass:"py-1"},[t._v("Subtotal: $"+t._s(t.orderData.total.toFixed(2)))]),a("v-card-text",{staticClass:"py-1"},[t._v("Costo de envio: $"+t._s(null!==t.orderData.delivery_price?t.orderData.delivery_price.toFixed(2):t.shiptotal.toFixed(2)))]),a("v-card-text",{staticClass:"py-1"},[t._v("Total: "+t._s(t.totalPrice))])],1)],1)],1)],2)},s=[],i=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),c=(a("96cf"),a("3b8d")),o=a("2f62");function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var l={data:function(){return{id_order:null,totalDetail:0,shiptotal:0}},mounted:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.reloadData();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),computed:d(d(d({},Object(o["d"])("orders",["orderDetail"])),Object(o["c"])("orders",["orderData"])),{},{totalPrice:function(){return this.totalDetail=0,this.totalDetail=this.orderData.total+this.orderData.delivery_price,this.totalDetail.toFixed(2)}}),methods:d(d({},Object(o["b"])("orders",["getOrderData"])),{},{deliveryType:function(t){return 1===t?"Entrega a domicilio: "+this.orderData.address.address:"Recoge en tienda"},goBack:function(){this.$router.go(-1)},reloadData:function(){this.$route.params.id&&(this.id_order=this.$route.params.id,this.getOrderData(this.$route.params.id))}})},u=l,p=(a("d043"),a("2877")),v=a("6544"),f=a.n(v),y=a("b0af"),_=a("99d9"),h=a("62ad"),b=a("a523"),O=a("adda"),D=Object(p["a"])(u,r,s,!1,null,"01d003be",null);e["default"]=D.exports;f()(D,{VCard:y["a"],VCardText:_["c"],VCol:h["a"],VContainer:b["a"],VImg:O["a"]})},bf4d:function(t,e,a){},d043:function(t,e,a){"use strict";var r=a("bf4d"),s=a.n(r);s.a}}]);
//# sourceMappingURL=chunk-54c8f3df.0602995d.js.map