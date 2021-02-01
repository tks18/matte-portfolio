(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-347d31b3"],{6511:function(t,e,a){"use strict";a.r(e);var _=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns is-multiline"},[a("div",{staticClass:"column is-full non-touch",attrs:{id:"mainhero"}},[a("div",{class:"hero is-fullheight"+(t.$vuetify.theme.dark?" grad-back-dark":" grad-back-light")},[a("div",{class:"hero-body"+(t.ismobile?" ma-1 px-0 py-3":" ma-2 pa-8")},[a("div",{staticClass:"container"},[a("div",{staticClass:"columns is-multiline is-centered is-vcentered"},[a("div",{staticClass:"column is-full"},[a("div",{class:"text text-center font-weight-bold"+(t.ismobile?" text-h4":" text-h2")},[t._v(" Designer, Front-end & Backend Developer ")]),a("div",{class:"text font-weight-bold my-2 py-2 mx-2 px-2 text-center"+(t.ismobile?" text-h4":" text-h3")},[a("v-tooltip",{attrs:{top:"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var _=e.on,i=e.attrs;return[a("span",t._g(t._b({staticClass:"fit-text non-touch point-cursor",on:{click:function(e){return t.loopRandEmoji()}}},"span",i,!1),_),[t._v(" "+t._s(t.animatedArray.randEmoji)+" ")])]}}]),model:{value:t.toggleTooltip,callback:function(e){t.toggleTooltip=e},expression:"toggleTooltip"}},[a("span",[t._v("Click here to Shuffle Emoji's")])])],1),a("div",{class:"text text-center font-weight-bold"+(t.ismobile?" text-body-2":" text-body-1")},[t._v(" I design and code beautifully simple things, and I love what I do. ")])]),a("div",{class:"column is-half"+(t.ismobile?" has-text-centered ma-2 ":" has-text-right")},[a("v-avatar",{attrs:{size:t.ismobile?250:380}},[a("v-img",{attrs:{src:t.heroData.image,alt:"Main Image"}})],1)],1),a("div",{class:"column is-centered"+(t.ismobile?" is-full ":" is-half ")+" text text-center text-overline font-weight-bold"},[t.ismobile?t._e():a("v-row",{attrs:{align:"center"}},t._l(t.heroButtons,(function(e,_){return a("v-col",{key:_,attrs:{cols:_==t.heroButtons.length-1&&_%2==0?12:6,align:_==t.heroButtons.length-1?_%2==0?"center":"right":_%2==0?"right":"left"}},[a("v-btn",{attrs:{large:"",elevation:"24",text:"",raised:"",outlined:""},on:{click:function(a){return t.$vuetify.goTo("#"+e.id)}}},[a("v-icon",[t._v(" "+t._s(e.icon)+" ")]),t._v(" "+t._s(e.name)+" ")],1)],1)})),1),t.ismobile?a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"6",align:"right"}},[a("v-btn",{attrs:{elevation:"24",text:"",raised:"",outlined:""},on:{click:function(e){return t.$vuetify.goTo("#feedbacktitile")}}},[a("v-icon",[t._v(" mdi-alarm-bell ")]),t._v(" Contact Me ")],1)],1),a("v-col",{attrs:{cols:"6",align:"left"}},[a("v-btn",{attrs:{elevation:"24",text:"",raised:"",outlined:""},on:{click:function(e){return t.$vuetify.goTo("#emailme")}}},[a("v-icon",[t._v(" mdi-at ")]),t._v(" Email Me ")],1)],1)],1):t._e()],1)])])])])]),a("div",{staticClass:"column is-full ma-0 pa-0"},[a("v-container",{staticClass:"non-touch"},[a("v-row",{staticClass:"ma-0 pa-0",attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",align:"center"}},[a("div",{class:"text point-cursor text-center text-capitalize ma-0 pa-0 text-h4 font-weight-black "+(t.$vuetify.theme.dark?" underhover-light":" underhover-dark"),attrs:{id:"whatiDo"},on:{click:function(e){return t.$router.push({name:"About",params:{scroll:!0,scrollid:"#languagesknown"}})}}},[t._v(" "+t._s(t.animatedArray.whatiDo)+" "),a("v-icon",{attrs:{large:""}},[t._v("mdi-arrow-down-circle")])],1)]),a("v-col",{staticClass:"text-center",attrs:{align:"center",justify:"center",cols:"12"}},[a("v-row",{attrs:{align:"center",justify:"center"}},t._l(t.activities,(function(e,_){return a("v-tooltip",{key:_,attrs:{top:"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(_){var i=_.on,o=_.attrs;return[a("v-col",t._g(t._b({directives:[{name:"ripple",rawName:"v-ripple"}],class:(t.ismobile?"mx-1 my-1":"mx-3 my-2")+" point-cursor",attrs:{cols:t.ismobile?5:2,align:"center",justify:"center"}},"v-col",o,!1),i),[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{align:"center",justify:"center"}},[a("v-img",{attrs:{"max-width":t.ismobile?80:110,src:"/assets/icons/creator/"+e.asset}})],1)],1),a("v-row",{staticClass:"text-center",attrs:{align:"center"}},[a("v-col",{staticClass:"text-overline ma-0 pa-0 text-center font-weight-bold",attrs:{cols:"12",align:"center"}},[t._v(" "+t._s(e.activity)+" ")]),a("v-col",{staticClass:"text-caption ma-0 pa-0 font-weight-light",attrs:{cols:"12",align:"center"}},[t._v(" "+t._s(e.description)+" ")])],1)],1)]}}],null,!0)},[a("span",[t._v(t._s(e.tooltip))])])})),1)],1)],1)],1)],1),a("div",{staticClass:"column is-full ma-2"},[a("v-row",[a("v-col",{attrs:{align:"start",justify:"start"}},[a("div",{class:"clip-text-back text-h5 non-touch point-cursor ml-6 text-capitalize"+(t.$vuetify.theme.dark?" underhover-light":" underhover-dark"),attrs:{id:"blogtitle"},on:{click:function(e){return t.$router.push("/blog")}}},[t._v(" "+t._s(t.animatedArray.blog)+" "),a("v-icon",[t._v("mdi-arrow-right-circle")])],1)]),a("v-col",{staticClass:"mr-4",attrs:{align:"end",justify:"start"}},[a("v-btn",{attrs:{icon:"",color:"primary"},on:{click:function(e){return t.swipeLeft("posts")}}},[a("v-icon",[t._v("mdi-arrow-left")])],1),a("v-btn",{attrs:{icon:"",color:"primary"},on:{click:function(e){return t.swipeRight("posts")}}},[a("v-icon",[t._v("mdi-arrow-right")])],1)],1)],1),a("div",{ref:"posts",staticClass:"scrollable-x columns ma-2 pa-1 is-vcentered is-mobile"},t._l(10,(function(e){return a("div",{key:e,staticClass:"scrollable-x-child column ma-0 pa-0 non-touch point-cursor"},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var _=e.hover;return[a("v-card",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"mx-2",attrs:{elevation:"3",width:t.ismobile?225:250,height:t.ismobile?300:325}},[a("v-card",[a("v-img",{attrs:{src:"https://i.ibb.co/BftbgSg/download-force-true-w-1920.jpg"}})],1),a("v-card-text",[a("h2",{staticClass:"text-subtitle-1 font-weight-bold primary--text"},[t._v(" This is a Lorem Ipsum Post ")])]),a("transition",{attrs:{name:"fade",mode:"out-in"}},[_?a("v-overlay",{staticClass:"back-blur",attrs:{absolute:"","z-index":"2",opacity:"0.4",color:"primary"}},[a("v-row",{staticClass:"mx-3"},[a("v-col",[a("v-row",{attrs:{align:"start"}},[a("div",{staticClass:"text text-body-1 font-weight-bold black--text"},[t._v(" Overview ")])]),a("v-row",{attrs:{align:"start",justify:"start"}},[t._v(" Lorem ipsum, dolor sit amet consectetur adipisicing elit. A necessitatibus, molestiae magni deleniti hic natus facilis. ")]),a("v-spacer"),a("v-row",{staticClass:"mt-1"},[a("v-btn",{attrs:{color:"primary",small:""}},[t._v("Read More")])],1)],1)],1)],1):t._e()],1)],1)]}}],null,!0)})],1)})),0)],1),a("div",{staticClass:"column is-full my-1 py-1"},[a("v-container",[a("v-row",{staticClass:"my-0 py-0"},[a("v-col",{staticClass:"my-0 mx-2 px-2 py-0",attrs:{cols:"12"}},[a("div",{class:"clip-text-back text-h5 non-touch point-cursor ml-6 text-capitalize"+(t.$vuetify.theme.dark?" underhover-light":" underhover-dark"),attrs:{id:"abouttitle"},on:{click:function(e){return t.$router.push("/about")}}},[t._v(" "+t._s(t.animatedArray.about)+" "),a("v-icon",[t._v("mdi-arrow-right-circle")])],1)]),a("v-col",{staticClass:"my-0 py-0",attrs:{cols:"12"}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:t.ismobile?12:9,align:"start",justify:"center"}},[a("v-row",{staticClass:"my-0 py-0",attrs:{align:"start",justify:"start"}},[a("div",{staticClass:"text font-weight-semibold mx-2 px-2",domProps:{innerHTML:t._s(t.heroData.subtitle)}})]),a("v-row",{staticClass:"my-1 mx-2 px-2 py-1",attrs:{align:"end",justify:"end"}},[a("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.$router.push("about")}}},[a("v-icon",[t._v("mdi-text-box-multiple")]),t._v(t._s(" Read More")+" ")],1)],1)],1),t.ismobile?t._e():a("v-col",{staticClass:"my-0 py-0",attrs:{cols:"3",align:"center",justify:"center"}},[a("v-avatar",{class:t.$vuetify.theme.dark?" grad-back-dark":" grad-back-light",attrs:{size:"220"}},[a("v-img",{attrs:{src:t.aboutData.image}})],1)],1)],1)],1)],1)],1)],1),a("div",{staticClass:"column is-full"},[a("v-row",{class:t.ismobile?"ma-0":"ma-2"},[a("v-col",{attrs:{cols:"12",align:"start",justify:"start"}},[a("div",{class:"clip-text-back text-h5 non-touch point-cursor ml-6 text-capitalize"+(t.$vuetify.theme.dark?" underhover-light":" underhover-dark"),attrs:{id:"projtitle"},on:{click:function(e){return t.$router.push("/projects")}}},[t._v(" "+t._s(t.animatedArray.projtitle)+" "),a("v-icon",[t._v("mdi-arrow-right-circle")])],1)]),t.projects.loading?a("v-col",{attrs:{cols:"12"}},[a("v-row",t._l(t.ismobile?1:5,(function(t){return a("v-col",{key:t},[a("v-card",[a("v-skeleton-loader",{staticClass:"mx-auto",attrs:{type:"card"}})],1)],1)})),1)],1):t._e(),a("v-col",{attrs:{cols:"12"}},[t.projects.loading?t._e():a("v-row",{staticClass:"mx-2 non-touch"},t._l(t.projects.projects,(function(e,_){return a("v-col",{key:_,staticClass:"mx-0 px-1",attrs:{cols:t.ismobile&&12}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(_){var i=_.hover;return[a("v-card",{attrs:{"max-width":t.ismobile?null:(t.contextInfo.viewport.width-.1*t.contextInfo.viewport.width)/5}},[a("v-img",{attrs:{contain:"",src:t.githubPhoto}}),a("v-row",{staticClass:"ma-0 pa-0",attrs:{justify:"space-between"}},[a("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"12"}},[a("v-card-title",{staticClass:"text-overline ma-1 pa-1"},[t._v(" "+t._s(e.name)+" ")])],1),a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"caption grey--text"},[t._v("Description:")]),a("div",{staticClass:"text-subtitle-2"},[t._v(" "+t._s(e.description)+" ")])]),e.license?a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"caption grey--text"},[t._v(" Licensed under "),a("span",{staticClass:"primary--text point-cursor",on:{click:function(a){return t.gotoUrl(e.license.url)}}},[t._v(" "+t._s(e.license.name)+" ")])])]):t._e(),a("v-col",[a("div",{staticClass:"caption grey--text"},[t._v("Details:")]),a("div",{staticClass:"text-subtitle-2"},[t._v(" Created on "+t._s(t._f("moment")(e.created_at,"ddd of MMM, YY"))+" ")]),a("div",{staticClass:"text-subtitle-2"},[t._v(" Last Commit on "+t._s(t._f("moment")(e.updated_at,"ddd of MMM, YY"))+" ")])]),a("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"12"}},[a("v-col",{attrs:{align:"end"}},[a("v-chip",{staticClass:"text-right ma-1",attrs:{color:"primary",small:"",outlined:"",pill:""}},[a("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-language-javascript")]),t._v(" "+t._s(e.language)+" ")],1),a("v-chip",{staticClass:"text-right ma-1",attrs:{color:"primary",small:"",outlined:"",pill:""}},[a("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-source-branch")]),t._v(" "+t._s(e.default_branch)+" ")],1),a("v-chip",{staticClass:"text-right ma-1",attrs:{color:"primary",outlined:"",small:"",pill:""},on:{click:function(a){return t.gotoUrl(e.html_url)}}},[a("v-avatar",{attrs:{size:"10",left:""}},[a("v-img",{attrs:{src:e.owner.avatar_url}})],1),t._v(" "+t._s(e.owner.login)+" ")],1)],1)],1)],1),a("transition",{attrs:{name:"fade",mode:"out-in"}},[i?a("v-overlay",{staticClass:"back-blur",attrs:{absolute:"","z-index":"2",opacity:"0.4",color:"primary"}},[a("v-row",{staticClass:"ma-1"},[a("v-col",{attrs:{align:"center",cols:"12"}},[a("v-tooltip",{attrs:{top:"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(_){var i=_.on;return[a("v-chip",t._g({staticClass:"text-right ma-1",attrs:{color:"primary",pill:""},on:{click:function(a){return t.gotoUrl(e.stargazers_url)}}},i),[a("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-eye")]),t._v(" "+t._s(e.watchers)+" ")],1)]}}],null,!0)},[a("span",[t._v("Watchers")])]),a("v-tooltip",{attrs:{top:"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(_){var i=_.on;return[a("v-chip",t._g({staticClass:"text-right ma-1",attrs:{color:"primary",pill:""},on:{click:function(a){return t.gotoUrl(e.forks_url)}}},i),[a("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-source-fork")]),t._v(" "+t._s(e.forks)+" ")],1)]}}],null,!0)},[a("span",[t._v("Forks")])]),a("v-tooltip",{attrs:{top:"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(_){var i=_.on;return[a("v-chip",t._g({staticClass:"text-right ma-1",attrs:{color:"primary",pill:""},on:{click:function(a){return t.gotoUrl(e.stargazers_url)}}},i),[a("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-star")]),t._v(" "+t._s(e.stargazers_count)+" ")],1)]}}],null,!0)},[a("span",[t._v("Stars")])])],1),a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"caption grey--text"},[t._v("Description:")]),a("div",{staticClass:"text-subtitle-2"},[t._v(" "+t._s(e.description)+" ")])]),a("v-col",{staticClass:"my-0 py-0"},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-btn",{attrs:{block:"",color:"primary",rounded:""},on:{click:function(e){return t.$router.push("/projects")}}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-folder-star")]),t._v(" Project Breif ")],1)],1),a("v-col",{attrs:{cols:"6"}},[a("v-btn",{attrs:{small:"",block:"",rounded:"",color:"primary"},on:{click:function(a){return t.gotoUrl(e.homepage)}}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-web")]),t._v(" Website ")],1)],1),a("v-col",{attrs:{cols:"6"}},[a("v-btn",{attrs:{small:"",block:"",rounded:"",color:"primary"},on:{click:function(a){return t.gotoUrl(e.git_url)}}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-git")]),t._v(" Git ")],1)],1),a("v-col",{attrs:{cols:"12"}},[a("v-btn",{attrs:{block:"",rounded:"",color:"primary"},on:{click:function(a){return t.gotoUrl(e.html_url)}}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-github")]),t._v(" on Github ")],1)],1),a("v-col",{attrs:{cols:"6"}},[a("v-btn",{attrs:{color:"primary",block:"",small:"",rounded:""},on:{click:function(a){return t.gotoUrl(e.url)}}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-webpack")]),t._v(" Api ")],1)],1),a("v-col",{attrs:{cols:"6"}},[a("v-btn",{attrs:{color:"primary",block:"",small:"",rounded:""},on:{click:function(a){return t.gotoUrl(e.clone_url)}}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-source-branch-sync")]),t._v(" Clone ")],1)],1)],1)],1)],1)],1):t._e()],1)],1)]}}],null,!0)})],1)})),1)],1)],1)],1),a("div",{staticClass:"column is-full"},[a("v-container",{attrs:{id:"emailme"}},[a("v-alert",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"non-touch point-cursor",attrs:{dense:"",text:"",outlined:"",type:t.emailType},on:{click:function(e){return t.handleEmailClick("me@shaaan.tk")}}},[a("div",{staticClass:"text"},[a("span",{staticClass:"text-overline font-weight-black"},[t._v("Tip:")]),a("span",{staticClass:"text-subtitle-2"},[t._v(" Click Here to Contact / You can Contact me through ")]),a("span",{staticClass:"font-weight-black"},[t._v(" me@shaaan.tk")])])]),a("v-snackbar",{attrs:{"multi-line":"",timeout:4e3},model:{value:t.copiedEmail,callback:function(e){t.copiedEmail=e},expression:"copiedEmail"}},[t._v(" Email ID has Been Copied to Your Clipboard. Do You Want to Open the Email to Send Mail ? "),a("v-col",{attrs:{align:"center"}},[a("v-spacer"),a("v-btn",{staticClass:"mx-1",attrs:{text:"",color:"primary",outlined:""},on:{click:function(e){t.gotoUrl(t.mailtoLink),t.copiedEmail=!1}}},[t._v(" Open ")]),a("v-btn",{staticClass:"mx-1",attrs:{text:"",outlined:"",color:"primary"},on:{click:function(e){t.copiedEmail=!1}}},[t._v(" Close ")])],1)],1)],1)],1),a("div",{staticClass:"column is-full"},[a("div",{class:"non-touch text-center font-weight-black my-2 text-capitalize"+(t.ismobile?" text-h6 ":" text-h4 "),attrs:{id:"feedbacktitile"}},[t._v(" "+t._s(t.animatedArray.feedBack)+" "),a("v-icon",{attrs:{large:""}},[t._v("mdi-arrow-down-circle")])],1),a("div",{staticClass:"hero is-medium"},[a("div",{class:"hero-body contact-bg "+(t.ismobile?"ma-0 pa-0":"")},[a("div",{staticClass:"container"},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"back-blur",attrs:{align:"center",cols:t.ismobile?12:7}},[a("v-row",[a("v-col",{staticClass:"my-0 py-0",attrs:{cols:"12",align:"left"}},[a("v-text-field",{attrs:{dark:"","prepend-icon":"mdi-form-textbox",dense:"","persistent-hint":!0,hint:"Your Name",label:"Enter Your Name","hide-details":"auto",outlined:""}})],1)],1),a("v-row",[a("v-col",{staticClass:"my-0 py-0",attrs:{cols:"12",align:"left"}},[a("v-text-field",{attrs:{dark:"","prepend-icon":"mdi-email",dense:"","persistent-hint":!0,hint:"Your Email",label:"Enter Your Email ID","hide-details":"auto",outlined:""}})],1)],1),a("v-row",[a("v-col",{staticClass:"my-0 py-0",attrs:{cols:"12",align:"left"}},[a("v-textarea",{staticClass:"is-maximum",attrs:{dark:"","prepend-icon":"mdi-comment-quote","no-resize":"",width:"100%",height:"100%","full-width":!0,"persistent-hint":!0,label:"Your Feedback bruh ?",filled:!0,outlined:!0}})],1)],1),a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"my-0 py-0",attrs:{cols:"6",align:"right"}},[a("v-btn",{attrs:{dark:"",color:"primary"}},[a("v-icon",[t._v("mdi-cards-heart")]),t._v(" Submit ")],1)],1),a("v-col",{attrs:{cols:"6",align:"left"}},[a("v-btn",{attrs:{dark:"",color:"error"}},[a("v-icon",[t._v("mdi-heart-broken")]),t._v(" Cancel ")],1)],1)],1)],1)],1)],1)])])])])},i=[],o=a("aff6"),r=o["a"],s=a("2877"),n=a("6544"),l=a.n(n),c=a("0798"),d=a("8212"),m=a("8336"),u=a("b0af"),v=a("99d9"),p=a("cc20"),f=a("62ad"),E=a("a523"),h=a("ce87"),O=a("132d"),b=a("adda"),M=a("a797"),y=a("0fd9"),g=a("3129"),D=a("2db4"),P=a("2fa4"),C=a("8654"),x=a("a844"),w=a("3a2f"),j=a("269a"),T=a.n(j),W=a("5607"),k=Object(s["a"])(r,_,i,!1,null,null,null);e["default"]=k.exports;l()(k,{VAlert:c["a"],VAvatar:d["a"],VBtn:m["a"],VCard:u["a"],VCardText:v["c"],VCardTitle:v["d"],VChip:p["a"],VCol:f["a"],VContainer:E["a"],VHover:h["a"],VIcon:O["a"],VImg:b["a"],VOverlay:M["a"],VRow:y["a"],VSkeletonLoader:g["a"],VSnackbar:D["a"],VSpacer:P["a"],VTextField:C["a"],VTextarea:x["a"],VTooltip:w["a"]}),T()(k,{Ripple:W["a"]})},9044:function(t,e,a){"use strict";a.d(e,"d",(function(){return _})),a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return r}));a("c975");function _(t,e,a){var _=t.scrollLeft;if(!(0===_||e>0)||!(t.clientWidth+_===t.scrollWidth||e<0)){var i="now"in window.performance?performance.now():(new Date).getTime(),o=function o(r){var s=r-i,n=Math.min(s/a,1);t.scrollLeft=_+e*n,s<a&&window.requestAnimationFrame(o)};window.requestAnimationFrame(o)}}function i(t){t=new Date(t).getTime();var e=new Date,a=new Date(t),_=e-a,i=36e5,o=24*i,r=7*o,s=365*o,n=Math.floor(_/s*1),l=Math.floor(_%s/r*1),c=Math.floor(_%r/o*1),d=Math.floor(_%o/i*1),m=Math.floor(_%o%i/6e4*1),u=Math.floor(_%o%i%6e4/1e3*1),v={years:n,weeks:l,days:c,hours:d,minutes:m,seconds:u};return v}function o(){var t=window.navigator.userAgent,e=window.navigator.platform,a=["Macintosh","MacIntel","MacPPC","Mac68K"],_=["Win32","Win64","Windows","WinCE"],i=["iPhone","iPad","iPod"],o=null;return-1!==a.indexOf(e)?o="Mac OS":-1!==i.indexOf(e)?o="iOS":-1!==_.indexOf(e)?o="Windows":/Android/.test(t)?o="Android":!o&&/Linux/.test(e)&&(o="Linux"),o}function r(){var t,e;return"undefined"!=typeof window.innerWidth?(t=window.innerWidth,e=window.innerHeight):"undefined"!=typeof document.documentElement&&"undefined"!=typeof document.documentElement.clientWidth&&0!=document.documentElement.clientWidth?(t=document.documentElement.clientWidth,e=document.documentElement.clientHeight):(t=document.getElementsByTagName("body")[0].clientWidth,e=document.getElementsByTagName("body")[0].clientHeight),{width:t,height:e}}},aff6:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("4160"),core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("c975"),core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("d81d"),core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("fb6a"),core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("159b"),core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__),_home_travis_build_tks18_matte_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("ade3"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("fec8"),_p_helpers__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("9044");__webpack_exports__["a"]={metaInfo:function(){return{title:"Home"}},data:function(){return{heroData:{title:"Hello There !",image:"https://i.ibb.co/CQqRR3b/profile.png",subtitle:'<div class="text-overline">This is <span class="primary--text font-weight-black">Sudharshan TK</span> A.K.A <span class="primary--text font-weight-black">(Shan.tk)</span>.</div><span class="text-body-1">I Create Elegant, Modern, Sleeky UI\'s. I Love Javascript, Nodejs & Flutter. Its Been a Great Journey for the Past 3 Years of Self-learning Web development and Creating Amazing Websites. Currently Focussing More on Backend Development Like Nodejs and Django. I Also Know Android Debugging and Rom Development to Some Extent.I am Pursuing Chartered Accountancy Course as my Profession.',rounded:!0,buttonUrl:"/about",buttontext:"Contact Me !"},heroButtons:[{name:"About Me",icon:"mdi-information-variant",id:"abouttitle"},{name:"What i Do",icon:"mdi-console-network",id:"whatiDo"},{name:"My Blog",icon:"mdi-post-outline",id:"blogtitle"},{name:"Projects",icon:"mdi-projector-screen",id:"projtitle"},{name:"Contact Me",icon:"mdi-contactless-payment",id:"feedbacktitile"}],letters:_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"],projects:{loading:!1,projects:{}},contextInfo:{os:Object(_p_helpers__WEBPACK_IMPORTED_MODULE_7__["b"])(),viewport:Object(_p_helpers__WEBPACK_IMPORTED_MODULE_7__["c"])()},toggleTooltip:!1,mailtoLink:"mailto:me@shaaan.tk?subject=Contacting%20You%20from%20Website&body=Hey%20there%20!%0D%0A%0D%0A",githubPhoto:"https://i.ibb.co/C6Y6Rwt/6efb9bc5d143-article-190612-github-body-text.webp",emailType:"info",copiedEmail:!1,animatedArray:{blog:"",about:"",whatiDo:"",stat:"",projtitle:"",randEmoji:"",contactTitle:"",feedBack:""},aboutData:{image:"https://i.ibb.co/b27v0Xf/profile-2.webp"}}},methods:{gotoUrl:function(t){window.open(t)},swipeLeft:function swipeLeft(func){var content="this.$refs."+func;Object(_p_helpers__WEBPACK_IMPORTED_MODULE_7__["d"])(eval(content),-400,300)},swipeRight:function swipeRight(func){var content="this.$refs."+func;Object(_p_helpers__WEBPACK_IMPORTED_MODULE_7__["d"])(eval(content),400,300)},createObserver:function(t,e,a,_,i){var o,r=this,s=document.querySelector(t),n={root:null,rootMargin:"0px",threshold:.6},l=function(t){t.forEach((function(t){t.isIntersecting&&r[e](a,_,i)}))};o=new IntersectionObserver(l,n),o.observe(s)},update:function(t,e){var a=this,_="";t.forEach((function(t){_+=a.letters[Math.round(t)%_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].length]})),this.$set(this.animatedArray,e,_)},transitRandEmoji:function(t,e,a){var _=this,i=this.$gsap.timeline({onUpdate:function(){var t="";e.forEach((function(e){t+=_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["b"][Math.round(e)%_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["b"].length]})),_.$set(_.animatedArray,a,t)}});t.forEach((function(t,a){var _;i.to(e,(_={},Object(_home_travis_build_tks18_matte_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["a"])(_,a,2*_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["b"].length+t),Object(_home_travis_build_tks18_matte_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["a"])(_,"ease","ease-out"),Object(_home_travis_build_tks18_matte_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["a"])(_,"duration",a+2.5),_),0)}))},loopRandEmoji:function(){var t=this,e={map:[_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["b"].indexOf(this.$_.shuffle(_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["b"])[Math.floor(Math.random()*_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["b"].length)]),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["b"].indexOf(this.$_.shuffle(_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["b"])[Math.floor(Math.random()*_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["b"].length)]),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["b"].indexOf(this.$_.shuffle(_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["b"])[Math.floor(Math.random()*_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["b"].length)])],initial:[_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["b"].indexOf(this.$_.shuffle(_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["b"])[Math.floor(Math.random()*_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["b"].length)]),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["b"].indexOf(this.$_.shuffle(_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["b"])[Math.floor(Math.random()*_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["b"].length)]),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["b"].indexOf(this.$_.shuffle(_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["b"])[Math.floor(Math.random()*_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["b"].length)])]};this.transitRandEmoji(e.map,e.initial,"randEmoji"),setTimeout((function(){t.toggleTooltip=!1}),5e3)},transitWord:function(t,e,a){var _=this,i=this.$gsap.timeline({onUpdate:function(){_.update(e,a)}});t.forEach((function(t,a){var _;i.to(e,(_={},Object(_home_travis_build_tks18_matte_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["a"])(_,a,2*_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].length+t),Object(_home_travis_build_tks18_matte_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["a"])(_,"ease","power4"),Object(_home_travis_build_tks18_matte_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["a"])(_,"duration",a/4+1),_),0)}))},getProjects:function(){var t=this;this.$set(this.projects,"loading",!0);var e="https://api.github.com/users/tks18/repos?sort=updated&per_page=20";this.$axios.get(e).then((function(e){if(e.data.length>0){t.$set(t.projects,"loading",!1);var a=e.data,_=t.ismobile?a.slice(0,2):a.slice(0,5);t.$set(t.projects,"projects",_)}else t.$set(t.projects,"loading",!1),t.$set(t.projects,"projects",{})})).catch((function(e){console.error(e),t.$set(t.projects,"loading",!1),t.$set(t.projects,"projects",{})}))},handleEmailClick:function(t){var e=this;navigator.clipboard.writeText(t).then((function(){e.emailType="success",e.copiedEmail=!0,setTimeout((function(){e.emailType="info"}),3003)}),(function(){e.emailType="error",e.copiedEmail=!1,setTimeout((function(){e.emailType="info"}),3003)}))},render:function(){var t=this;this.loopRandEmoji(),this.createObserver("#whatiDo","transitWord",this.wordMaps.whatiDo.map,this.wordMaps.whatiDo.initial,"whatiDo"),this.createObserver("#abouttitle","transitWord",this.wordMaps.about.map,this.wordMaps.about.initial,"about"),this.createObserver("#projtitle","transitWord",this.wordMaps.projtitle.map,this.wordMaps.projtitle.initial,"projtitle"),this.createObserver("#blogtitle","transitWord",this.wordMaps.blog.map,this.wordMaps.blog.initial,"blog"),this.createObserver("#feedbacktitile","transitWord",this.wordMaps.feedBackTitle.map,this.wordMaps.feedBackTitle.initial,"feedBack"),this.getProjects(),setTimeout((function(){t.toggleTooltip=!0}),2e3)}},computed:{ismobile:function(){var t=window.innerWidth>0?window.innerWidth:screen.width;return!(t>966)},activities:function(){return[{asset:"web coding.svg",activity:"Developing Frontends",description:"Developing Classy, Sassy, Professional Grade Frontends",tooltip:"Get to Know What Frameworks I Code for Development"},{asset:"picture.svg",activity:"Image Manipulation",description:"Well Versed in Post Processing of Photographs",tooltip:"Get to Know What Softwares I Use for Post Processing"},{asset:"device.svg",activity:"App Development",description:"Mobile App Development Based on Flutter SDK",tooltip:"Get to Know What i learnt in Flutter"},{asset:"idea.svg",activity:"Hosting Solutions Guidance",description:"Advising on Suitable and Best Hosting Solutions for a Website / Server",tooltip:"Get to Know What type of Consulting i will give"},{asset:"programming.svg",activity:"Presentations",description:"Desgining Wonderful and Eye Catching Presentations",tooltip:"Get to Know What Softwares i use for Designing Presentations"},{asset:"layer.svg",activity:"Architecting Backends",description:"Constructing Secure and Powerful Backends for Frontends",tooltip:"Get to Know What Languages I Use for Backends"},{asset:"speed test.svg",activity:"Video Editing",description:"Editing and Color Grading Videos  for a Cinematic Look",tooltip:"Get to Know What Softwares I Use for Video Editing"},{asset:"binary code.svg",activity:"Data Analytics",description:"Crunching, Cleaning and Manipluating Data and Getting Insights",tooltip:"Get to Know What Languages and Softwares with Which i Analyze Data"}]},wordMaps:function(){return{blog:{map:[_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("m"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("y"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf(" "),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("b"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("l"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("o"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("g")],initial:[46,1,3,2,40,43,10]},about:{map:[_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("a"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("b"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("o"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("u"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("t"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf(" "),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("m"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("e")],initial:[39,41,45,43,42,44,46,38]},projtitle:{map:[_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("p"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("r"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("o"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("j"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("e"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("c"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("t"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("s")],initial:[39,41,45,43,42,44,46,38]},contactTitle:{map:[_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("g"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("a"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("l"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("l"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("e"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("r"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("y")],initial:[42,46,40,1,32,45,14]},feedBackTitle:{map:[_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("s"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("u"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("b"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("m"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("i"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("t"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf(" "),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("y"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("o"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("u"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("r"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf(" "),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("f"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("e"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("e"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("d"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("b"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("a"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("c"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("k")],initial:[42,46,40,1,32,45,14,42,46,40,1,32,45,14,42,46,40,1,32,45]},whatiDo:{map:[_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("w"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("h"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("a"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("t"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf(" "),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("i"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf(" "),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("d"),_t_emoji_array__WEBPACK_IMPORTED_MODULE_6__["a"].indexOf("o")],initial:[2,20,46,40,39,27,6,42,9]}}}},mounted:function(){this.render()}}}}]);
//# sourceMappingURL=chunk-347d31b3.e7aad714.js.map