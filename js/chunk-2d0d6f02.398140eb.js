(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6f02"],{"754b":function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"columns is-multiline"},[a("div",{staticClass:"column is-full"},[a("v-card",{style:{background:"center",backgroundImage:t.bgBack,backgroundSize:"cover",minWidth:"100%"},attrs:{elevation:"13"}},[a("div",{staticClass:"hero is-medium non-touch"},[a("div",{staticClass:"hero-body"},[a("v-row",[a("v-col",{attrs:{cols:t.ismobile?12:5,align:"left",justify:"center"}},[a("div",{staticClass:"back-blur white--text pa-2 fit-text"},[a("div",{class:(t.ismobile?"text-h4 text-center":"text-h2")+" font-weight-black"},[t._v(" Come face to face Huh? ")])])]),a("v-spacer"),a("v-col",{attrs:{cols:t.ismobile?12:5,align:t.ismobile?"center":"right",justify:"center"}},[a("div",{staticClass:"back-blur white--text pa-2 fit-text"},[a("div",{class:(t.ismobile?"text-center":"")+"text-overline font-weight-bold"},[t._v(' "Before picking fights, learn to assess your opponents." ')]),a("div",{staticClass:"text-body-2 text-right font-weight-light"},[t._v(" - Tamuna Tsertsvadze, Galaxy Pirates ")])])])],1)],1),a("div",{staticClass:"hero-footer"},[a("v-row",{staticClass:"px-2",attrs:{align:"end"}},[a("v-col",{attrs:{cols:t.ismobile?12:9,align:t.ismobile?"center":"right",justify:"end"}},[a("div",{staticClass:"container non-touch"},[a("div",{staticClass:"text-overline white--text font-weight-bold"},[t._v(" It Looks Like You want to Know About Me ! ")]),a("v-btn",{staticClass:"text-overline font-weight-bold",attrs:{text:"",outlined:"",dark:""},on:{click:function(t){}}},[a("v-icon",[t._v("mdi-arrow-down")]),a("v-icon",[t._v("mdi-arrow-down")]),t._v(" Swipe Down / Click Here "),a("v-icon",[t._v("mdi-arrow-down")]),a("v-icon",[t._v("mdi-arrow-down")])],1)],1)]),a("v-col",{attrs:{cols:t.ismobile?12:3,align:"right",justify:"end"}},[a("div",{staticClass:"back-blur fit-text px-2 text-overline font-weight-bold"},[a("span",{staticClass:"white--text"},[t._v(" We are ")]),a("span",{class:(t.$vuetify.theme.dark?"grad-back-dark":"grad-back-light")+" pa-2"},[t._v(" "+t._s(t.animatedArray.hashTag)+" ")]),t._v(" "),a("span",{staticClass:"white--text"},[t._v(" "+t._s(" Squad")+" ")])])])],1)],1)])]),a("v-col",{staticClass:"px-0 mx-1 py-0 my-1"},[a("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(i){var e=i.on,n=i.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:"",color:"primary"},on:{click:t.playPauseBg}},"v-btn",n,!1),e),[a("v-icon",[t._v(t._s(t.bgPlay?"mdi-pause":"mdi-play"))])],1)]}}])},[a("span",[t._v("Click here to Play / Pause the BG")])])],1)],1),a("div",{staticClass:"column is-full"},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",align:"left",justify:"start"}},[a("div",{class:"clip-text-back text-h5 non-touch ml-6 text-capitalize"+(t.$vuetify.theme.dark?" underhover-light":" underhover-dark"),on:{click:function(i){return t.$router.push("/blog")}}},[t._v(" Pastime and Expertise "),a("v-icon",[t._v("mdi-arrow-right-circle")])],1)])],1)],1)],1)])},n=[],s=(a("4160"),a("c975"),a("d81d"),a("159b"),a("ade3")),o=a("fec8"),r={data:function(){return{bgBackImgs:["https://i.ibb.co/hKxmVtF/ezgif-3-71f4d039aaab.gif","https://i.ibb.co/kqzY6r6/giphy.gif","https://i.ibb.co/7Gryd0M/giphy.gif","https://i.ibb.co/Bcksm5z/giphy.gif","https://i.ibb.co/qrXxfLz/giphy.gif","https://i.ibb.co/YTsx3FQ/giphy.gif","https://i.ibb.co/HKhJr5t/giphy.gif"],bgkey:0,bgPlay:!0,bgBack:"",keyFrames:[5e3,1510,1120,800,1e3,3130,2800],animatedArray:{hashTag:""}}},methods:{transitWord:function(t,i,a){var e=this,n=this.$gsap.timeline({repeat:-1,yoyo:!0,repeatDelay:2,onUpdate:function(){e.update(i,a)}});t.forEach((function(t,a){var e;n.to(i,(e={},Object(s["a"])(e,a,2*o["a"].length+t),Object(s["a"])(e,"ease","power4"),Object(s["a"])(e,"duration",a/4+1),e),0)}))},update:function(t,i){var a="";t.forEach((function(t){a+=o["a"][Math.round(t)%o["a"].length]})),this.$set(this.animatedArray,i,a)},playBg:function(){var t=this;if(this.bgPlay){this.bgBack="url('"+this.bgBackImgs[this.bgkey]+"')";var i=setInterval((function(){t.bgPlay?(t.bgkey++,t.bgkey>t.bgBackImgs.length-1?(t.bgkey=0,t.bgBack="url('"+t.bgBackImgs[0]+"')"):t.bgBack="url('"+t.bgBackImgs[t.bgkey]+"')"):clearInterval(i)}),this.keyFrames[this.bgkey+1])}else this.bgBack="url('https://i.ibb.co/YR117RN/ezgif-6-6fa4128fb00b.gif')"},playPauseBg:function(){this.bgPlay=!this.bgPlay,this.playBg()}},computed:{ismobile:function(){var t=window.innerWidth>0?window.innerWidth:screen.width;return!(t>966)},wordMaps:function(){return{hash:{initial:[o["a"].indexOf("#"),o["a"].indexOf("k"),o["a"].indexOf("e"),o["a"].indexOf("a"),o["a"].indexOf("n"),o["a"].indexOf("u"),o["a"].indexOf("r"),o["a"].indexOf("e"),o["a"].indexOf("e"),o["a"].indexOf("v"),o["a"].indexOf("e"),o["a"].indexOf("s")],map:[o["a"].indexOf(" "),o["a"].indexOf("#"),o["a"].indexOf("j"),o["a"].indexOf("o"),o["a"].indexOf("h"),o["a"].indexOf("n"),o["a"].indexOf(" "),o["a"].indexOf("w"),o["a"].indexOf("i"),o["a"].indexOf("c"),o["a"].indexOf("k"),o["a"].indexOf(" ")]}}}},beforeMount:function(){this.playBg()},mounted:function(){this.transitWord(this.wordMaps.hash.map,this.wordMaps.hash.initial,"hashTag")}},c=r,l=a("2877"),d=a("6544"),h=a.n(d),f=a("8336"),b=a("b0af"),g=a("62ad"),u=a("a523"),v=a("132d"),p=a("0fd9"),x=a("2fa4"),m=a("3a2f"),y=Object(l["a"])(c,e,n,!1,null,null,null);i["default"]=y.exports;h()(y,{VBtn:f["a"],VCard:b["a"],VCol:g["a"],VContainer:u["a"],VIcon:v["a"],VRow:p["a"],VSpacer:x["a"],VTooltip:m["a"]})}}]);
//# sourceMappingURL=chunk-2d0d6f02.398140eb.js.map