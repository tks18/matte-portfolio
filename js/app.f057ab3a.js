(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);v&&v(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var s=a[i];0!==r[s]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},i={app:0},r={app:0},o=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2469392b":"aad14b16","chunk-24754c16":"56fdaaeb","chunk-2482f4ca":"ea00919f","chunk-2709ba93":"9c1bf5d9","chunk-72226a56":"462211f4"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-2469392b":1,"chunk-24754c16":1,"chunk-2482f4ca":1,"chunk-2709ba93":1,"chunk-72226a56":1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-2469392b":"8689fec2","chunk-24754c16":"8689fec2","chunk-2482f4ca":"8689fec2","chunk-2709ba93":"8689fec2","chunk-72226a56":"8689fec2"}[t]+".css",r=c.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===r))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===n||u===r)return e()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=e,v.onerror=function(e){var n=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete i[t],v.parentNode.removeChild(v),a(o)},v.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(v)})).then((function(){i[t]=0})));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(v);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",d.name="ChunkLoadError",d.type=n,d.request=i,a[1](d)}r[t]=void 0}};var v=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var v=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("a026"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"app has-navbar-fixed-top"}},[a("navDrawer"),a("navbar"),a("sysBar"),a("v-main",[a("div",{staticClass:"content"},[a("router-view")],1)]),a("fabComponent"),a("foot")],1)},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{app:"",dense:"",flat:"","collapse-on-scroll":""}},[a("v-app-bar-nav-icon",{on:{click:function(e){return t.navclick()}}}),a("v-avatar",{staticClass:"mx-2 non-touch point-cursor",attrs:{size:"38",color:"primary"},on:{click:function(e){return t.$router.push("/")}}},[a("v-img",{attrs:{src:t.avatar}})],1),a("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-toolbar-title",t._g(t._b({directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"font-weight-bold non-touch point-cursor",on:{click:function(e){return t.routerPush("/")}}},"v-toolbar-title",i,!1),n),[t._v(" Shan.tk ✌ ")])]}}])},[a("span",[t._v("Sudharshan TK")])]),a("v-spacer"),a("v-tooltip",{attrs:{bottom:"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){return t.windowClick(t.github.link)}}},"v-btn",i,!1),n),[a("v-icon",{attrs:{color:"primary"}},[t._v(t._s(t.github.icon))])],1)]}}])},[a("span",[t._v(t._s(t.github.title))])])],1)},s=[],c={name:"Nav-Bar",data:function(){return{github:{link:"https://github.com/tks18",icon:"mdi-github",title:"Shan.tk's Github Profile"},avatar:"https://i.ibb.co/hRxTz1g/c0ec2e063895760baa493c36d2d28387-s-400.jpg"}},methods:{navclick:function(){this.$state.store.navbar.active=!0},routerPush:function(t){this.$router.push(t)},windowClick:function(t){window.open(t)}}},l=c,u=a("2877"),d=a("6544"),v=a.n(d),m=a("40dc"),f=a("5bc1"),h=a("8212"),b=a("8336"),p=a("132d"),g=a("adda"),k=a("2fa4"),y=a("2a7f"),w=a("3a2f"),_=a("269a"),x=a.n(_),C=a("5607"),S=Object(u["a"])(l,o,s,!1,null,null,null),V=S.exports;v()(S,{VAppBar:m["a"],VAppBarNavIcon:f["a"],VAvatar:h["a"],VBtn:b["a"],VIcon:p["a"],VImg:g["a"],VSpacer:k["a"],VToolbarTitle:y["a"],VTooltip:w["a"]}),x()(S,{Ripple:C["a"]});var $=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{attrs:{app:"",temporary:"",src:t.$state.store.botSettings.navBlur?t.drawerBackImg:void 0},model:{value:t.$state.store.navbar.active,callback:function(e){t.$set(t.$state.store.navbar,"active",e)},expression:"$state.store.navbar.active"}},[a("v-container",{class:t.$state.store.botSettings.navBlur?"back-blur":" "},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-avatar",{staticClass:"point-cursor non-touch border-light",attrs:{size:"125"},on:{click:function(e){return t.routerPush("/about")}}},[a("v-img",{attrs:{src:t.avatar}})],1)],1),a("v-list-item",{staticClass:"px-2",attrs:{"three-line":""}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-center point-cursor non-touch font-weight-medium",on:{click:function(e){return t.routerPush("/about")}}},[t._v(" Sudharshan TK ")]),a("v-list-item-subtitle",{staticClass:"text-center non-touch font-italic"},[t._v(" (aka Shan.tk) ")]),a("v-list-item-subtitle",{staticClass:"text-center non-touch font-weight-light"},[t._v(" Web Developer/Aspiring Chartered Accountant ")])],1)],1),a("v-list",{staticClass:"text-left"},[a("v-list-item-group",[a("v-divider",{staticClass:"ma-1"}),a("bottomSettings",{attrs:{model:"list"}}),a("v-divider",{staticClass:"ma-1"}),t._l(t.navPaths,(function(e,n){return a("v-list-item",{key:n,on:{click:function(a){return t.routerPush(e.link)}}},[a("v-list-item-icon",[a("v-icon",[t._v(" "+t._s(e.icon)+" ")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))]),a("v-list-item-subtitle",[t._v(t._s(e.subtitle))])],1)],1)}))],2)],1)],1)],1)},j=[],O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-bottom-sheet",{attrs:{inset:"",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return["list"==t.model?a("v-list-item",t._g(t._b({},"v-list-item",i,!1),n),[a("v-list-item-icon",[a("v-icon",[t._v("mdi-cog-refresh")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" Settings ")]),a("v-list-item-subtitle",[t._v(" Change the Accent Color ")])],1)],1):t._e(),"icon"==t.model?a("v-card",t._g(t._b({staticClass:"ma-1 pa-2 non-touch point-cursor",attrs:{elevation:"0"}},"v-card",i,!1),n),[a("v-row",{staticClass:"mb-2",attrs:{align:"center",justify:"center"}},[a("v-btn",{attrs:{fab:"",small:"",color:"primary"}},[a("v-icon",[t._v("mdi-cog-refresh")])],1)],1),a("v-row",{attrs:{align:"center",justify:"center"}},[a("div",{staticClass:"text font-weight-semibold"},[t._v("Settings")])])],1):t._e()]}}]),model:{value:t.activated,callback:function(e){t.activated=e},expression:"activated"}},[a("v-sheet",{staticClass:"pa-8 mt-auto"},[a("v-row",{attrs:{align:"start",justify:"end"}},[a("v-col",[a("h2",{staticClass:"title primary--text"},[t._v("Settings")])]),a("v-col",{attrs:{align:"end",justify:"start"}},[a("v-btn",{attrs:{color:"primary",icon:""},on:{click:function(e){t.activated=!t.activated}}},[a("v-icon",[t._v("mdi-close")])],1)],1)],1),a("v-row",[a("v-col",{attrs:{align:"start",justify:"center"}},[a("p",{staticClass:"text"},[t._v("Change Primary Theme")])]),a("v-col",{attrs:{align:"end",justify:"center"}},[a("v-dialog",{attrs:{"max-width":"300"},model:{value:t.darkdiag,callback:function(e){t.darkdiag=e},expression:"darkdiag"}},[a("v-card",[a("v-card-title",[t._v(" Change Primary Theme ")]),a("v-card-text",[a("v-switch",{attrs:{dense:"",inset:"",color:"primary",value:t.$state.store.botSettings.darkmode,label:"Turn"+(t.$state.store.botSettings.darkmode?" Off":" On")+" Dark Mode"},on:{click:t.changeTheme},model:{value:t.$state.store.botSettings.darkmode,callback:function(e){t.$set(t.$state.store.botSettings,"darkmode",e)},expression:"$state.store.botSettings.darkmode"}})],1)],1)],1),a("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.darkdiag=!0}}},[t._v(" Change ")])],1)],1),a("v-row",[a("v-col",{attrs:{align:"start",justify:"center"}},[a("p",{staticClass:"text"},[t._v("Change Accent Color")])]),a("v-col",{attrs:{align:"end",justify:"center"}},[a("v-dialog",{attrs:{"max-width":"350"},model:{value:t.colorDiag,callback:function(e){t.colorDiag=e},expression:"colorDiag"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v(" Choose Accent Color ")]),a("v-card-text",[a("v-color-picker",{attrs:{"show-swatches":"","hide-inputs":""},model:{value:t.accent,callback:function(e){t.accent=e},expression:"accent"}})],1),a("v-card-actions",[a("v-spacer"),a("v-col",[a("v-btn",{staticClass:"subtitle text-bold",attrs:{color:"primary",outlined:""},on:{click:function(e){return t.changeAccent()}}},[t._v(" Accept ")])],1),a("v-col",[a("v-btn",{staticClass:"subtitle text-bold",attrs:{color:"primary"},on:{click:function(e){t.colorDiag=!t.colorDiag}}},[t._v(" Close ")])],1)],1)],1)],1),a("v-btn",{attrs:{color:"primary",filled:""},on:{click:function(e){t.colorDiag=!0}}},[t._v("Change")])],1)],1),a("v-row",[a("v-col",{attrs:{align:"start",justify:"center"}},[a("p",{staticClass:"text"},[t._v("Enable Navigation Bar Image and Blur")])]),a("v-col",{attrs:{align:"end",justify:"center"}},[a("v-dialog",{attrs:{"max-width":"400"},model:{value:t.blurDiag,callback:function(e){t.blurDiag=e},expression:"blurDiag"}},[a("v-card",[a("v-card-title",[t._v(" Enable Navigation Bar Image and Blur ")]),a("v-card-text",[a("v-switch",{attrs:{dense:"",inset:"",color:"primary",value:t.$state.store.botSettings.navBlur,label:t.$state.store.botSettings.navBlur?" Disable":" Enable"},on:{click:t.enableBlur},model:{value:t.$state.store.botSettings.navBlur,callback:function(e){t.$set(t.$state.store.botSettings,"navBlur",e)},expression:"$state.store.botSettings.navBlur"}})],1)],1)],1),a("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.blurDiag=!0}}},[t._v(" Change ")])],1)],1)],1)],1)},B=[],I={props:{model:{type:String}},data:function(){return{activated:!1,colorDiag:!1,blurDiag:!1,accent:null,darkdiag:!1}},methods:{changeTheme:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark,localStorage.setItem("themecache",JSON.stringify({dark:this.$vuetify.theme.dark,blur:this.$state.store.botSettings.navBlur,theme:{accent:this.$vuetify.theme.themes.light.primary}})),this.$state.store.botSettings.darkmode=this.$vuetify.theme.dark},enableBlur:function(){localStorage.setItem("themecache",JSON.stringify({dark:this.$vuetify.theme.dark,blur:this.$state.store.botSettings.navBlur,theme:{accent:this.$vuetify.theme.themes.light.primary}}))},emitNow:function(t,e){this.$bus.$emit(t,e)},changeAccent:function(){this.$vuetify.theme.themes.light.primary=this.accent.hex,this.$vuetify.theme.themes.dark.primary=this.accent.hex,localStorage.setItem("themecache",JSON.stringify({dark:this.$vuetify.theme.dark,blur:this.$state.store.botSettings.navBlur,theme:{accent:this.accent.hex}}))}},mounted:function(){var t=JSON.parse(localStorage.getItem("themecache"));t&&null!=t&&(this.$state.store.botSettings.darkmode=t.dark,this.$state.store.botSettings.navBlur=t.blur,this.$vuetify.theme.dark=t.dark,this.$vuetify.theme.themes.light.primary=t.theme.accent,this.$vuetify.theme.themes.dark.primary=t.theme.accent)}},T=I,A=a("288c"),P=a("b0af"),D=a("99d9"),E=a("62ad"),L=a("03a4"),F=a("169a"),M=a("da13"),N=a("5d23"),z=a("34c3"),R=a("0fd9"),W=a("8dd9"),U=a("b73d"),G=Object(u["a"])(T,O,B,!1,null,null,null),H=G.exports;v()(G,{VBottomSheet:A["a"],VBtn:b["a"],VCard:P["a"],VCardActions:D["a"],VCardText:D["b"],VCardTitle:D["c"],VCol:E["a"],VColorPicker:L["a"],VDialog:F["a"],VIcon:p["a"],VListItem:M["a"],VListItemContent:N["a"],VListItemIcon:z["a"],VListItemSubtitle:N["b"],VListItemTitle:N["c"],VRow:R["a"],VSheet:W["a"],VSpacer:k["a"],VSwitch:U["a"]});var J={components:{bottomSettings:H},data:function(){return{avatar:"https://i.ibb.co/hRxTz1g/c0ec2e063895760baa493c36d2d28387-s-400.jpg",navPaths:[{icon:"mdi-home",title:"Home",subtitle:"Home",link:"/"},{icon:"mdi-blogger",title:"Blog",subtitle:"My Personal Blog",link:"/blog"},{icon:"mdi-information",title:"About",subtitle:"About Me",link:"/about"},{icon:"mdi-web",title:"Careers",subtitle:"Careers",link:"/careers"},{icon:"mdi-google-photos",title:"Gallery",subtitle:"My Photography Skills",link:"/gallery"}]}},methods:{windowClick:function(t){window.open(t)},routerPush:function(t){this.$router.push(t)}},computed:{drawerBackImg:function(){return this.$vuetify.theme.dark?"https://i.ibb.co/p3Tgrt6/download-force-true-w-1920.jpg":"https://i.ibb.co/bKsBjMj/download-force-true-w-2400.jpg"}}},K=J,q=a("a523"),Y=a("ce7e"),Q=a("8860"),X=a("1baa"),Z=a("f774"),tt=Object(u["a"])(K,$,j,!1,null,null,null),et=tt.exports;v()(tt,{VAvatar:h["a"],VContainer:q["a"],VDivider:Y["a"],VIcon:p["a"],VImg:g["a"],VList:Q["a"],VListItem:M["a"],VListItemContent:N["a"],VListItemGroup:X["a"],VListItemIcon:z["a"],VListItemSubtitle:N["b"],VListItemTitle:N["c"],VNavigationDrawer:Z["a"],VRow:R["a"]});var at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{elevation:"15",inset:"",dense:"",small:"",rounded:"",shaped:""}},[a("v-row",{staticClass:"my-1 py-0",attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"my-1 py-0",attrs:{cols:t.ismobile?12:6}},[a("v-row",[a("v-col",{staticClass:"ma-1 my-0 py-0",attrs:{align:t.ismobile?"center":"start",justify:"center"}},[t.ismobile?t._e():a("v-row",{attrs:{align:t.ismobile?"center":"start",justify:t.ismobile?"center":"start"}},[a("div",{staticClass:"text ml-4 my-0 py-0 font-weight-bold non-touch"},[t._v(" Follow Me on: ")])]),a("v-row",{attrs:{align:t.ismobile?"center":"start",justify:t.ismobile?"center":"start"}},t._l(t.socials,(function(e,n){return a("v-tooltip",{key:n,attrs:{top:"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(n){var i=n.on,r=n.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:"",color:"primary"},on:{click:function(a){return t.windowLink(e.link)}}},"v-btn",r,!1),i),[a("v-icon",[t._v(t._s(e.icon))])],1)]}}],null,!0)},[a("span",[t._v(t._s(e.title))])])})),1)],1)],1)],1),a("v-col",{staticClass:"my-0 py-0",attrs:{cols:t.ismobile?12:6}},[a("v-row",[a("v-col",{staticClass:"my-1 py-0",attrs:{align:t.ismobile?"center":"end",justify:"center"}},[a("div",{class:"font-weight-black text-capitalize"+(t.ismobile?" text-center":"")},[t._v(" "+t._s(t.animatedArray.name.trim()+".TK")+" | "),a("v-icon",{attrs:{color:"primary"}},[t._v("mdi-copyright")]),t._v(" "+t._s((new Date).getFullYear())+" ")],1)])],1)],1)],1)],1)},nt=[],it=(a("4160"),a("c975"),a("d81d"),a("159b"),a("ade3")),rt=a("fec8"),ot={data:function(){return{now:(new Date).toLocaleTimeString(),clockDiag:!1,animatedArray:{name:""},socials:[{icon:"mdi-twitter",title:"Twitter",link:"https://twitter.com/shantk18"},{icon:"mdi-instagram",title:"Instagram",link:"https://instagram.com/shantk18"},{icon:"mdi-github",title:"Github",link:"https://github.com/tks18"},{icon:"mdi-gitlab",title:"Gitlab",link:"https://gitlab.com/tks18"},{icon:"mdi-bitbucket",title:"Bit Bucket",link:"https://bitbucket.org/Shan-tk/"},{icon:"mdi-quality-medium",title:"Medium",link:"https://medium.com/@tksudharshan"},{icon:"mdi-email-edit",title:"Email Me",link:"mailto:tksudharshan@infozy.tk"},{icon:"mdi-google-photos",title:"Photography",link:"https://unsplash.com/@shantk18"}]}},methods:{windowLink:function(t){window.open(t)},update:function(t,e){var a="";t.forEach((function(t){a+=rt["a"][Math.round(t)%rt["a"].length]})),this.$set(this.animatedArray,e,a)},transitWord:function(t,e,a){var n=this,i=this.$gsap.timeline({repeat:-1,yoyo:!0,repeatDelay:2,onUpdate:function(){n.update(e,a)}});t.forEach((function(t,a){var n;i.to(e,(n={},Object(it["a"])(n,a,2*rt["a"].length+t),Object(it["a"])(n,"ease","power4"),Object(it["a"])(n,"duration",a/4+1),n),0)}))}},computed:{ismobile:function(){var t=window.innerWidth>0?window.innerWidth:screen.width;return!(t>966)},nameMap:function(){return{initial:[rt["a"].indexOf("s"),rt["a"].indexOf("h"),rt["a"].indexOf("a"),rt["a"].indexOf("n"),rt["a"].indexOf(" "),rt["a"].indexOf(" "),rt["a"].indexOf(" "),rt["a"].indexOf(" "),rt["a"].indexOf(" "),rt["a"].indexOf(" ")],map:[rt["a"].indexOf("s"),rt["a"].indexOf("u"),rt["a"].indexOf("d"),rt["a"].indexOf("h"),rt["a"].indexOf("a"),rt["a"].indexOf("r"),rt["a"].indexOf("s"),rt["a"].indexOf("h"),rt["a"].indexOf("a"),rt["a"].indexOf("n")]}}},mounted:function(){this.transitWord(this.nameMap.map,this.nameMap.initial,"name")}},st=ot,ct=a("553a"),lt=Object(u["a"])(st,at,nt,!1,null,null,null),ut=lt.exports;v()(lt,{VBtn:b["a"],VCol:E["a"],VFooter:ct["a"],VIcon:p["a"],VRow:R["a"],VTooltip:w["a"]});var dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-btn",{class:(t.endofPage?"fab-button-bottom":"fab-button")+(t.$vuetify.theme.dark?" grad-back-dark":" grad-back-light"),attrs:{bottom:!0,absolute:!0,fixed:!0,right:!0,rounded:"",fab:""},on:{click:function(e){t.fab=!t.fab}}},[a("v-icon",[t._v("mdi-text-account")])],1),a("v-dialog",{attrs:{"max-width":"400"},model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[a("v-card",[a("v-card-title",[t._v("Quick Actions")]),a("v-card-text",{staticClass:"text-center"},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",[a("musicPlayer")],1),a("v-col",[a("bottomSettings",{attrs:{model:"icon"}})],1)],1)],1)],1)],1)],1)},vt=[],mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-bottom-sheet",{attrs:{inset:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-card",t._g(t._b({staticClass:"ma-1 pa-2 non-touch point-cursor",attrs:{elevation:"0"}},"v-card",i,!1),n),[a("v-row",{staticClass:"mb-2",attrs:{align:"center",justify:"center"}},[a("v-btn",t._g(t._b({attrs:{fab:"",small:"",color:"primary"}},"v-btn",i,!1),n),[a("v-icon",[t._v("mdi-music")])],1)],1),a("v-row",{attrs:{align:"center",justify:"center"}},[a("div",{staticClass:"text font-weight-semibold"},[t._v("Music Player")])])],1)]}}]),model:{value:t.activated,callback:function(e){t.activated=e},expression:"activated"}},[a("v-card",{attrs:{tile:""}},[a("v-progress-linear",{staticClass:"my-0",attrs:{value:50,height:"3"}}),a("v-list",[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v("The Walker")]),a("v-list-item-subtitle",[t._v("Fitz & The Trantrums")])],1),a("v-spacer"),a("v-list-item-icon",[a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-rewind")])],1)],1),a("v-list-item-icon",{class:{"mx-5":t.$vuetify.breakpoint.mdAndUp}},[a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-pause")])],1)],1),a("v-list-item-icon",{staticClass:"ml-0",class:{"mr-3":t.$vuetify.breakpoint.mdAndUp}},[a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-fast-forward")])],1)],1)],1)],1)],1)],1)},ft=[],ht={props:{model:{type:Boolean}},data:function(){return{activated:!1}}},bt=ht,pt=a("8e36"),gt=Object(u["a"])(bt,mt,ft,!1,null,null,null),kt=gt.exports;v()(gt,{VBottomSheet:A["a"],VBtn:b["a"],VCard:P["a"],VIcon:p["a"],VList:Q["a"],VListItem:M["a"],VListItemContent:N["a"],VListItemIcon:z["a"],VListItemSubtitle:N["b"],VListItemTitle:N["c"],VProgressLinear:pt["a"],VRow:R["a"],VSpacer:k["a"]});var yt={components:{musicPlayer:kt,bottomSettings:H},data:function(){return{fab:!1,endofPage:!1}},methods:{scroll:function(){var t=this;window.onscroll=function(){var e=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop)+window.innerHeight===document.documentElement.offsetHeight;t.endofPage=!!e}}},computed:{ismobile:function(){var t=window.innerWidth>0?window.innerWidth:screen.width;return!(t>966)}},mounted:function(){this.scroll()}},wt=yt,_t=Object(u["a"])(wt,dt,vt,!1,null,null,null),xt=_t.exports;v()(_t,{VBtn:b["a"],VCard:P["a"],VCardText:D["b"],VCardTitle:D["c"],VCol:E["a"],VDialog:F["a"],VIcon:p["a"],VRow:R["a"]});var Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-system-bar",{attrs:{fixed:"",window:"","lights-out":""}},[a("v-spacer"),t.$vuetify.theme.dark?t._e():a("v-snackbar",{attrs:{"multi-line":"",timeout:6e3},scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[a("v-btn",t._b({attrs:{color:"primary"},on:{click:function(e){t.snackbar=!1}}},"v-btn",n,!1),[t._v(" Close ")])]}}],null,!1,536044565),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" Dark Mode Available Now ! Turn on Using Settings in the Nav-bar. ")]),a("v-icon",{class:"clip-text-back"+(t.$vuetify.theme.dark?" grad-back-dark":" grad-back-light")},[t._v(" mdi-wifi-strength-4 ")]),a("span",{class:"non-touch point-cursor clip-text-back"+(t.$vuetify.theme.dark?" grad-back-dark":" grad-back-light")},[t._v(" "+t._s(t._f("moment")(t.now,"h:mm:ss a"))+" ")])],1)},St=[],Vt={data:function(){return{now:Date.now(),snackbar:!0}},mounted:function(){var t=this;setInterval((function(){t.now=Date.now()}),1e3)}},$t=Vt,jt=a("2db4"),Ot=a("afd9"),Bt=Object(u["a"])($t,Ct,St,!1,null,null,null),It=Bt.exports;v()(Bt,{VBtn:b["a"],VIcon:p["a"],VSnackbar:jt["a"],VSpacer:k["a"],VSystemBar:Ot["a"]});var Tt={name:"App",components:{navbar:V,navDrawer:et,foot:ut,fabComponent:xt,sysBar:It}},At=Tt,Pt=(a("5c0b"),a("7496")),Dt=a("f6c4"),Et=Object(u["a"])(At,i,r,!1,null,null,null),Lt=Et.exports;v()(Et,{VApp:Pt["a"],VMain:Dt["a"]});var Ft=n["default"].observable({navbar:{active:!1},botSettings:{darkmode:!1,navBlur:!1}}),Mt={navbar:{key:function(){return Ft.navbar.key},active:function(){return Ft.navbar.active}},botSettings:{darkmode:function(){return Ft.botSettings.darkmode},navBlur:function(){return Ft.botSettings.navBlur}}},Nt={navbar:{key:function(t){return Ft.navbar.key=t},active:function(t){return Ft.navbar.active=t}},botSettings:{darkmode:function(t){return Ft.botSettings.darkmode=t},navBlur:function(t){return Ft.botSettings.navBlur=t}}},zt=Ft,Rt=new n["default"],Wt=a("8c4f"),Ut=a("3384"),Gt=a.n(Ut),Ht=a("e36f"),Jt=[{path:"/",name:"Home",component:Ht("home")},{path:"/blog",name:"Blog",component:Ht("blog")},{path:"/careers",name:"Careers",component:Ht("careers")},{path:"/gallery",name:"Gallery",component:Ht("gallery")},{path:"/about",name:"About",component:Ht("about")}],Kt=Jt;n["default"].use(Wt["a"]);var qt=new Wt["a"]({scrollBehavior:function(t,e,a){var n=0;return t.hash?n=t.hash:a&&(n=a.y),Gt()(n)},mode:"history",routes:Kt}),Yt=qt,Qt=a("2ead"),Xt=a.n(Qt),Zt=a("2ef0"),te=a.n(Zt),ee=a("bc3a"),ae=a.n(ee),ne=a("7212"),ie=a.n(ne),re=a("f309"),oe=a("21eb"),se=a.n(oe);n["default"].use(re["a"]);var ce=new re["a"]({theme:{themes:{light:{primary:"#F44336",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},dark:{primary:"#F44336",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}},options:{minifyTheme:se.a}}}),le=a("cffa");a("9c6c"),a("bbe3");n["default"].use(ie.a),n["default"].use(Xt.a),n["default"].config.productionTip=!1,n["default"].prototype.$axios=ae.a,n["default"].prototype.$gsap=le["a"],n["default"].prototype.$bus=Rt,n["default"].prototype.$state={store:zt,mutate:Nt,get:Mt},n["default"].prototype.$_=te.a,new n["default"]({vuetify:ce,router:Yt,render:function(t){return t(Lt)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),i=a.n(n);i.a},"9c0c":function(t,e,a){},"9c6c":function(t,e,a){},"9dac":function(t,e,a){var n={"./about":["754b","chunk-24754c16"],"./about.vue":["754b","chunk-24754c16"],"./blog":["68b7","chunk-2469392b"],"./blog.vue":["68b7","chunk-2469392b"],"./careers":["8473","chunk-2482f4ca"],"./careers.vue":["8473","chunk-2482f4ca"],"./gallery":["f115","chunk-2709ba93"],"./gallery.vue":["f115","chunk-2709ba93"],"./home":["6511","chunk-72226a56"],"./home.vue":["6511","chunk-72226a56"]};function i(t){if(!a.o(n,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=n[t],i=e[0];return a.e(e[1]).then((function(){return a(i)}))}i.keys=function(){return Object.keys(n)},i.id="9dac",t.exports=i},e36f:function(t,e,a){a("d3b7"),t.exports=function(t){return function(){return a("9dac")("./"+t)}}},fec8:function(t,e,a){"use strict";a.d(e,"b",(function(){return l})),a.d(e,"a",(function(){return u}));a("99af"),a("ac1f"),a("1276");var n=a("2ef0"),i="😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🤩 🥳 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 🥺 😢 😭 😤 😠 😡 🤬 🤯 😳 🥵 🥶 😱 😨 😰 😥 😓 🤗 🤔 🤭 🤫 🤥 😶 😐 😑 😬 🙄 😯 😦 😧 😮 😲 🥱 😴 🤤 😪 😵 🤐 🥴 🤢 🤮 🤧 😷 🤒 🤕 🤑 🤠 😈 👿 👹 👺 🤡 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👋 🤚 🖐 ✋ 🖖 👌 🤏 ✌️ 🤞 🤟 🤘 🤙 👈 👉 👆 🖕 👇 ☝️ 👍 👎 ✊ 👊 🤛 🤜 👏 🙌 👐 🤲 🤝 🙏 🚶🏻 🚶🏻‍♂️ 🚶🏻‍♀️ 🧍🏻 🧍🏻‍♂️ 🧍🏻‍♀️ 🧎🏻 🧎🏻‍♂️ 🧎🏻‍♀️",r="😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🤩 🥳 🤯 🤔 🤭 🤫 😨 🤗 🥱 😴 🤤 😪 😵 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 👋 🤚 🖐 ✋ 🖖 👌 🤏 ✌️ 🤞 🤟 🤘 🤙 👈 👉 👆 🧠 👀 👁 🙅‍♂️ 🙅‍♀️ 🙆 🙆‍♂️ 🙆‍♀️ 💁 💁‍♂️ 💁‍♀️ 🙋 🙋‍♂️ 🙋‍♀️ 🤷 🤷‍♂️ 🤷‍♀️ 🚶 🚶‍♂️ 🚶‍♀️ 🧍 🧍‍♂️ 🧍‍♀️ 🧎 🧎‍♂️ 🧎‍♀️ 🏃 🏃‍♂️ 🏃‍♀️ 💃 🕺 🕴 🧳 🌂 ☂️ 🧵 🧶 👓 🕶 🥽 🤸🏻 🤸🏻‍♂️ 🤸🏻‍♀️ 👨🏽‍💻 👩🏽‍💻 💣 🧨 🔮 ❤️ 🧡 💛 💚 💙 💜 🖤 🤍 🤎 ❣️ 💕 💞 💓 💗 💖 💘 💝 👏 🙌 👐 🤲 🤝 🙏 💯",o="?><{}|//~-.+abcdefghijklmnopqrstuvwxyz$#@!() *&^][",s={emoji:i.split(" "),letters:o.split(""),safeEmojis:r.split(" ")},c=s.emoji.concat(s.letters),l=(Object(n["shuffle"])(s.emoji),Object(n["shuffle"])(s.safeEmojis)),u=Object(n["shuffle"])(s.letters);Object(n["shuffle"])(c)}});
//# sourceMappingURL=app.f057ab3a.js.map