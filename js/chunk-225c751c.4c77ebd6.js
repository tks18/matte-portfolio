(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-225c751c"],{"1f09":function(t,e,a){},3129:function(t,e,a){"use strict";a("a630"),a("c975"),a("d81d"),a("ac1f"),a("3ca3"),a("5319"),a("1276");var i=a("3835"),s=a("5530"),_=(a("1f09"),a("c995")),r=a("24b2"),o=a("7560"),n=a("58df"),l=a("80d2");e["a"]=Object(n["a"])(_["a"],r["a"],o["a"]).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:function(){return{}}}},computed:{attrs:function(){return this.isLoading?this.boilerplate?{}:Object(s["a"])({"aria-busy":!0,"aria-live":"polite",role:"alert"},this.$attrs):this.$attrs},classes:function(){return Object(s["a"])(Object(s["a"])({"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile},this.themeClasses),this.elevationClasses)},isLoading:function(){return!("default"in this.$scopedSlots)||this.loading},rootTypes:function(){return Object(s["a"])({actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text"},this.types)}},methods:{genBone:function(t,e){return this.$createElement("div",{staticClass:"v-skeleton-loader__".concat(t," v-skeleton-loader__bone")},e)},genBones:function(t){var e=this,a=t.split("@"),s=Object(i["a"])(a,2),_=s[0],r=s[1],o=function(){return e.genStructure(_)};return Array.from({length:r}).map(o)},genStructure:function(t){var e=[];t=t||this.type||"";var a=this.rootTypes[t]||"";if(t===a);else{if(t.indexOf(",")>-1)return this.mapBones(t);if(t.indexOf("@")>-1)return this.genBones(t);a.indexOf(",")>-1?e=this.mapBones(a):a.indexOf("@")>-1?e=this.genBones(a):a&&e.push(this.genStructure(a))}return[this.genBone(t,e)]},genSkeleton:function(){var t=[];return this.isLoading?t.push(this.genStructure()):t.push(Object(l["m"])(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},t):t},mapBones:function(t){return t.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter:function(t){this.resetStyles(t),this.isLoading&&(t._initialStyle={display:t.style.display,transition:t.style.transition},t.style.setProperty("transition","none","important"))},onBeforeLeave:function(t){t.style.setProperty("display","none","important")},resetStyles:function(t){t._initialStyle&&(t.style.display=t._initialStyle.display||"",t.style.transition=t._initialStyle.transition,delete t._initialStyle)}},render:function(t){return t("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}})},"4fad":function(t,e,a){var i=a("23e7"),s=a("6f53").entries;i({target:"Object",stat:!0},{entries:function(t){return s(t)}})},6511:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns is-multiline"},[a("div",{staticClass:"column is-full"},[a("div",{class:"hero is-fullheight"+(t.$vuetify.theme.dark?" grad-back-dark":" grad-back-light")},[a("div",{class:"hero-body"+(t.ismobile?" ma-1 px-0 py-3":" ma-2 pa-8")},[a("div",{staticClass:"container"},[a("div",{staticClass:"columns is-multiline is-centered is-vcentered"},[a("div",{staticClass:"column is-full"},[a("div",{class:"text text-center font-weight-bold"+(t.ismobile?" text-h4":" text-h2")},[t._v(" Designer, Front-end & Backend Developer ")]),a("div",{class:"text font-weight-bold my-2 py-2 mx-2 px-2 text-center"+(t.ismobile?" text-h4":" text-h3")},[a("v-tooltip",{attrs:{top:"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,s=e.attrs;return[a("span",t._g(t._b({staticClass:"fit-text non-touch point-cursor",on:{click:function(e){return t.loopRandEmoji()}}},"span",s,!1),i),[t._v(" "+t._s(t.animatedArray.randEmoji)+" ")])]}}]),model:{value:t.toggleTooltip,callback:function(e){t.toggleTooltip=e},expression:"toggleTooltip"}},[a("span",[t._v("Click here to Shuffle Emoji's")])])],1),a("div",{class:"text text-center font-weight-bold"+(t.ismobile?" text-body-2":" text-body-1")},[t._v(" I design and code beautifully simple things, and I love what I do. ")])]),a("div",{staticClass:"column has-text-centered is-half ma-2"},[a("v-avatar",{attrs:{size:t.ismobile?250:380}},[a("v-img",{attrs:{src:t.heroData.image,alt:"Main Image"}})],1)],1)])])])])]),a("div",{staticClass:"column is-full ma-2"},[a("v-row",[a("v-col",{attrs:{align:"start",justify:"start"}},[a("div",{class:"clip-text-back text-h5 non-touch point-cursor ml-6 text-capitalize"+(t.$vuetify.theme.dark?" underhover-light":" underhover-dark"),attrs:{id:"blogtitle"},on:{click:function(e){return t.$router.push("/blog")}}},[t._v(" "+t._s(t.animatedArray.blog)+" "),a("v-icon",[t._v("mdi-arrow-right-circle")])],1)]),a("v-col",{staticClass:"mr-4",attrs:{align:"end",justify:"start"}},[a("v-btn",{attrs:{icon:"",color:"primary"},on:{click:function(e){return t.swipeLeft("posts")}}},[a("v-icon",[t._v("mdi-arrow-left")])],1),a("v-btn",{attrs:{icon:"",color:"primary"},on:{click:function(e){return t.swipeRight("posts")}}},[a("v-icon",[t._v("mdi-arrow-right")])],1)],1)],1),a("div",{ref:"posts",staticClass:"scrollable-x columns ma-2 pa-1 is-vcentered is-mobile"},t._l(10,(function(e){return a("div",{key:e,staticClass:"scrollable-x-child column ma-0 pa-0 non-touch point-cursor"},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.hover;return[a("v-card",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"mx-2",attrs:{elevation:"3",width:t.ismobile?225:250,height:t.ismobile?300:325}},[a("v-card",[a("v-img",{attrs:{src:"https://i.ibb.co/BftbgSg/download-force-true-w-1920.jpg"}})],1),a("v-card-text",[a("h2",{staticClass:"text-subtitle-1 font-weight-bold primary--text"},[t._v(" This is a Lorem Ipsum Post ")])]),a("transition",{attrs:{name:"fade",mode:"out-in"}},[i?a("v-overlay",{staticClass:"back-blur",attrs:{absolute:"","z-index":"2",opacity:"0.4",color:"primary"}},[a("v-row",{staticClass:"mx-3"},[a("v-col",[a("v-row",{attrs:{align:"start"}},[a("div",{staticClass:"text text-body-1 font-weight-bold black--text"},[t._v(" Overview ")])]),a("v-row",{attrs:{align:"start",justify:"start"}},[t._v(" Lorem ipsum, dolor sit amet consectetur adipisicing elit. A necessitatibus, molestiae magni deleniti hic natus facilis. ")]),a("v-spacer"),a("v-row",{staticClass:"mt-1"},[a("v-btn",{attrs:{color:"primary",small:""}},[t._v("Read More")])],1)],1)],1)],1):t._e()],1)],1)]}}],null,!0)})],1)})),0)],1),a("div",{staticClass:"column is-full my-1 py-1"},[a("v-container",[a("v-row",{staticClass:"my-0 py-0"},[a("v-col",{staticClass:"my-0 mx-2 px-2 py-0",attrs:{cols:"12"}},[a("div",{class:"clip-text-back text-h5 non-touch point-cursor ml-6 text-capitalize"+(t.$vuetify.theme.dark?" underhover-light":" underhover-dark"),attrs:{id:"abouttitle"},on:{click:function(e){return t.$router.push("/about")}}},[t._v(" "+t._s(t.animatedArray.about)+" "),a("v-icon",[t._v("mdi-arrow-right-circle")])],1)]),a("v-col",{staticClass:"my-0 py-0",attrs:{cols:"12"}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:t.ismobile?12:9,align:"start",justify:"center"}},[a("v-row",{staticClass:"my-0 py-0",attrs:{align:"start",justify:"start"}},[a("div",{staticClass:"text font-weight-semibold mx-2 px-2",domProps:{innerHTML:t._s(t.heroData.subtitle)}})]),a("v-row",{staticClass:"my-1 mx-2 px-2 py-1",attrs:{align:"end",justify:"end"}},[a("v-btn",{attrs:{color:"primary"}},[a("v-icon",[t._v("mdi-text-box-multiple")]),t._v(t._s(" Read More")+" ")],1)],1)],1),t.ismobile?t._e():a("v-col",{staticClass:"my-0 py-0",attrs:{cols:"3",align:"center",justify:"center"}},[a("v-avatar",{class:t.$vuetify.theme.dark?" grad-back-dark":" grad-back-light",attrs:{size:"220"}},[a("v-img",{attrs:{src:t.aboutData.image}})],1)],1)],1)],1)],1)],1)],1),a("div",{staticClass:"column is-full my-2 py-0"},[a("v-container",[a("v-row",{attrs:{justify:"center"}},[a("v-col",{staticClass:"mx-2 my-1 py-0 non-touch",attrs:{cols:"12",align:"center",justify:"center"}},[a("v-row",{staticClass:"my-2",attrs:{id:"lifetime"}},[a("v-row",{directives:[{name:"ripple",rawName:"v-ripple"}]},[a("v-col",{class:(t.ismobile?"text-body-2":"text-h6")+" text my-1 py-0 font-weight-bold",attrs:{cols:t.ismobile?12:6,align:t.ismobile?"center":"end"}},[t._v(" Time Travelling for 🤙 xD ")]),a("v-col",{class:(t.ismobile?"text-body-2":"text-h6")+" text my-1 py-0 primary--text font-weight-bold",attrs:{cols:t.ismobile?12:6,align:t.ismobile?"center":"start"}},[t._v(" "+t._s((new Intl.NumberFormat).format(t.lifeTimeCountDown.years.toFixed(0))+"Y :")+" "+t._s((new Intl.NumberFormat).format(t.lifeTimeCountDown.weeks.toFixed(0))+"W :")+" "+t._s((new Intl.NumberFormat).format(t.lifeTimeCountDown.days.toFixed(0))+"D :")+" "+t._s((new Intl.NumberFormat).format(t.lifeTimeCountDown.hours.toFixed(0))+"H :")+" "+t._s((new Intl.NumberFormat).format(t.lifeTimeCountDown.minutes.toFixed(0))+"M :")+" "+t._s((new Intl.NumberFormat).format(t.lifeTimeCountDown.seconds.toFixed(0))+"S")+" ")])],1)],1)],1)],1)],1)],1),a("div",{staticClass:"column is-full"},[a("v-row",{class:t.ismobile?"ma-0":"ma-2"},[a("v-col",{attrs:{cols:"12",align:"start",justify:"start"}},[a("div",{class:"clip-text-back text-h5 non-touch point-cursor ml-6 text-capitalize"+(t.$vuetify.theme.dark?" underhover-light":" underhover-dark"),attrs:{id:"projtitle"},on:{click:function(e){return t.$router.push("/projects")}}},[t._v(" "+t._s(t.animatedArray.projtitle)+" "),a("v-icon",[t._v("mdi-arrow-right-circle")])],1)]),t.projects.loading?a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-skeleton-loader",{staticClass:"mx-auto",attrs:{type:"card"}})],1)],1):t._e(),a("v-col",{attrs:{cols:"12"}},[t.projects.loading?t._e():a("v-row",{staticClass:"mx-2 non-touch"},t._l(t.projects.projects,(function(e,i){return a("v-col",{key:i,staticClass:"mx-0 px-1",attrs:{cols:t.ismobile&&12}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(i){var s=i.hover;return[a("v-card",{attrs:{height:"530"}},[a("v-img",{attrs:{"max-height":t.ismobile?null:150,"max-width":t.ismobile?null:250,src:t.githubPhoto}}),a("v-row",{staticClass:"ma-0 pa-0",attrs:{justify:"space-between"}},[a("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"12"}},[a("v-card-title",{staticClass:"text-overline ma-1 pa-1"},[t._v(" "+t._s(e.name)+" ")])],1),a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"caption grey--text"},[t._v("Description:")]),a("div",{staticClass:"text-subtitle-2"},[t._v(" "+t._s(e.description)+" ")])]),e.license?a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"caption grey--text"},[t._v(" Licensed under "),a("span",{staticClass:"primary--text point-cursor",on:{click:function(a){return t.windowClick(e.license.url)}}},[t._v(" "+t._s(e.license.name)+" ")])])]):t._e(),a("v-col",[a("div",{staticClass:"caption grey--text"},[t._v("Details:")]),a("div",{staticClass:"text-subtitle-2"},[t._v(" Created on "+t._s(t._f("moment")(e.created_at,"ddd of MMM, YY"))+" ")]),a("div",{staticClass:"text-subtitle-2"},[t._v(" Last Commit on "+t._s(t._f("moment")(e.updated_at,"ddd of MMM, YY"))+" ")])]),a("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"12"}},[a("v-col",{attrs:{align:"end"}},[a("v-chip",{staticClass:"text-right ma-1",attrs:{color:"primary",small:"",outlined:"",pill:""}},[a("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-language-javascript")]),t._v(" "+t._s(e.language)+" ")],1),a("v-chip",{staticClass:"text-right ma-1",attrs:{color:"primary",small:"",outlined:"",pill:""}},[a("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-source-branch")]),t._v(" "+t._s(e.default_branch)+" ")],1),a("v-chip",{staticClass:"text-right ma-1",attrs:{color:"primary",outlined:"",small:"",pill:""},on:{click:function(a){return t.windowClick(e.html_url)}}},[a("v-avatar",{attrs:{size:"10",left:""}},[a("v-img",{attrs:{src:e.owner.avatar_url}})],1),t._v(" "+t._s(e.owner.login)+" ")],1)],1)],1)],1),a("transition",{attrs:{name:"fade",mode:"out-in"}},[s?a("v-overlay",{staticClass:"back-blur",attrs:{absolute:"","z-index":"2",opacity:"0.4",color:"primary"}},[a("v-row",{staticClass:"ma-1"},[a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"caption grey--text"},[t._v("Description:")]),a("div",{staticClass:"text-subtitle-2"},[t._v(" "+t._s(e.description)+" ")])]),a("v-col",{staticClass:"my-0 py-0"},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-btn",{attrs:{block:"",color:"primary",rounded:""}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-folder-star")]),t._v(" Project Breif ")],1)],1),a("v-col",{attrs:{cols:"6"}},[a("v-btn",{attrs:{small:"",block:"",rounded:"",color:"primary"}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-web")]),t._v(" Website ")],1)],1),a("v-col",{attrs:{cols:"6"}},[a("v-btn",{attrs:{small:"",block:"",rounded:"",color:"primary"}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-git")]),t._v(" Git ")],1)],1),a("v-col",{attrs:{cols:"12"}},[a("v-btn",{attrs:{block:"",rounded:"",color:"primary"}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-github")]),t._v(" on Github ")],1)],1),a("v-col",{attrs:{cols:"6"}},[a("v-btn",{attrs:{color:"primary",block:"",small:"",rounded:""}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-webpack")]),t._v(" Api ")],1)],1),a("v-col",{attrs:{cols:"6"}},[a("v-btn",{attrs:{color:"primary",block:"",small:"",rounded:""}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-source-branch-sync")]),t._v(" Clone ")],1)],1)],1)],1),a("v-col",{attrs:{align:"center",cols:"12"}},[a("v-chip",{staticClass:"text-right ma-1",attrs:{color:"primary",pill:""}},[a("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-eye-settings")]),t._v(" "+t._s(e.watchers)+" ")],1),a("v-chip",{staticClass:"text-right ma-1",attrs:{color:"primary",pill:""}},[a("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-source-fork")]),t._v(" "+t._s(e.forks)+" ")],1),a("v-chip",{staticClass:"text-right ma-1",attrs:{color:"primary",pill:""}},[a("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-star")]),t._v(" "+t._s(e.stargazers_count)+" ")],1)],1)],1)],1):t._e()],1)],1)]}}],null,!0)})],1)})),1)],1)],1)],1)])},s=[],_=a("7818"),r=_["a"],o=a("2877"),n=a("6544"),l=a.n(n),c=a("8212"),d=a("8336"),m=a("b0af"),u=a("99d9"),p=(a("4de4"),a("4160"),a("3835")),h=a("5530"),v=(a("8adc"),a("58df")),f=a("0789"),b=a("9d26"),E=a("a9ad"),y=a("4e82"),O=a("7560"),g=a("f2e7"),M=a("1c87"),D=a("af2b"),C=a("d9bd"),P=Object(v["a"])(E["a"],D["a"],M["a"],O["a"],Object(y["a"])("chipGroup"),Object(g["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(h["a"])(Object(h["a"])(Object(h["a"])(Object(h["a"])({"v-chip":!0},M["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(M["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var a=Object(p["a"])(e,2),i=a[0],s=a[1];t.$attrs.hasOwnProperty(i)&&Object(C["a"])(i,s,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(b["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(f["b"],t)},genClose:function(){var t=this;return this.$createElement(b["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],a=this.generateRouteLink(),i=a.tag,s=a.data;s.attrs=Object(h["a"])(Object(h["a"])({},s.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:s.attrs.tabindex}),s.directives.push({name:"show",value:this.active}),s=this.setBackgroundColor(this.color,s);var _=this.textColor||this.outlined&&this.color;return t(i,this.setTextColor(_,s),e)}}),j=a("62ad"),x=a("a523"),w=a("16b7"),k=Object(v["a"])(w["a"],g["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(C["c"])("v-hover should only contain a single element",this),t)):(Object(C["c"])("v-hover is missing a default scopedSlot or bound value",this),null);var t}}),T=a("132d"),B=a("adda"),I=a("a797"),A=a("0fd9"),L=a("3129"),R=a("2fa4"),W=a("3a2f"),U=a("269a"),K=a.n(U),$=a("5607"),S=Object(o["a"])(r,i,s,!1,null,null,null);e["default"]=S.exports;l()(S,{VAvatar:c["a"],VBtn:d["a"],VCard:m["a"],VCardText:u["b"],VCardTitle:u["c"],VChip:P,VCol:j["a"],VContainer:x["a"],VHover:k,VIcon:T["a"],VImg:B["a"],VOverlay:I["a"],VRow:A["a"],VSkeletonLoader:L["a"],VSpacer:R["a"],VTooltip:W["a"]}),K()(S,{Ripple:$["a"]})},7818:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("4160"),core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("c975"),core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("d81d"),core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("fb6a"),core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("4fad"),core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("159b"),core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__),_home_travis_build_tks18_matte_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("3835"),_home_travis_build_tks18_matte_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("ade3"),_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("fec8"),_plugins_helpers__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("9044");__webpack_exports__["a"]={data:function(){return{heroData:{title:"Hello There !",image:"https://i.ibb.co/GTcS2kb/profile.png",subtitle:'<div class="text-overline">This is <span class="primary--text font-weight-black">Sudharshan TK</span> A.K.A <span class="primary--text font-weight-black">(Shan.tk)</span>.</div><span class="text-body-1">I Create Elegant, Modern, Sleeky UI\'s. I Love Javascript, Nodejs & Flutter. Its Been a Great Journey for the Past 3 Years of Self-learning Web development and Creating Amazing Websites. Currently Focussing More on Backend Development Like Nodejs and Django. I Also Know Android Debugging and Rom Development to Some Extent.I am Pursuing Chartered Accountancy Course as my Profession.',rounded:!0,buttonUrl:"/about",buttontext:"Contact Me !"},letters:_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["a"],birthday:!1,projects:{loading:!1,projects:{}},toggleTooltip:!0,githubPhoto:"https://portswigger.net/cms/images/54/14/6efb9bc5d143-article-190612-github-body-text.jpg",lifeTimeCountDown:{years:0,weeks:0,days:0,hours:0,minutes:0,seconds:0},animatedArray:{blog:"",about:"",stat:"",projtitle:"",randEmoji:""},aboutData:{image:"https://i.ibb.co/VVxzT9s/profile-2.jpg"}}},methods:{windowClick:function(t){window.open(t)},swipeLeft:function swipeLeft(func){var content="this.$refs."+func;Object(_plugins_helpers__WEBPACK_IMPORTED_MODULE_9__["b"])(eval(content),-400,300)},swipeRight:function swipeRight(func){var content="this.$refs."+func;Object(_plugins_helpers__WEBPACK_IMPORTED_MODULE_9__["b"])(eval(content),400,300)},createObserver:function(t,e,a,i,s){var _,r=this,o=document.querySelector(t),n={root:null,rootMargin:"0px",threshold:.6},l=function(t,_){t.forEach((function(t){t.isIntersecting&&r[e](a,i,s)}))};_=new IntersectionObserver(l,n),_.observe(o)},update:function(t,e){var a=this,i="";t.forEach((function(t){i+=a.letters[Math.round(t)%_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["a"].length]})),this.$set(this.animatedArray,e,i)},transitRandEmoji:function(t,e,a){var i=this,s=this.$gsap.timeline({onUpdate:function(){var t="";e.forEach((function(e){t+=_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["b"][Math.round(e)%_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["b"].length]})),i.$set(i.animatedArray,a,t)}});t.forEach((function(t,a){var i;s.to(e,(i={},Object(_home_travis_build_tks18_matte_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["a"])(i,a,2*_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["b"].length+t),Object(_home_travis_build_tks18_matte_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["a"])(i,"ease","ease-out"),Object(_home_travis_build_tks18_matte_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["a"])(i,"duration",a+2.5),i),0)}))},loopRandEmoji:function(){var t=this,e={map:[_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["b"].indexOf(this.$_.shuffle(_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["b"])[Math.floor(Math.random()*_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["b"].length)]),_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["b"].indexOf(this.$_.shuffle(_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["b"])[Math.floor(Math.random()*_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["b"].length)]),_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["b"].indexOf(this.$_.shuffle(_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["b"])[Math.floor(Math.random()*_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["b"].length)])],initial:[_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["b"].indexOf(this.$_.shuffle(_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["b"])[Math.floor(Math.random()*_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["b"].length)]),_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["b"].indexOf(this.$_.shuffle(_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["b"])[Math.floor(Math.random()*_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["b"].length)]),_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["b"].indexOf(this.$_.shuffle(_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["b"])[Math.floor(Math.random()*_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["b"].length)])]};this.transitRandEmoji(e.map,e.initial,"randEmoji"),setTimeout((function(){t.toggleTooltip=!1}),5e3)},transitWord:function(t,e,a){var i=this,s=this.$gsap.timeline({onUpdate:function(){i.update(e,a)}});t.forEach((function(t,a){var i;s.to(e,(i={},Object(_home_travis_build_tks18_matte_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["a"])(i,a,2*_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["a"].length+t),Object(_home_travis_build_tks18_matte_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["a"])(i,"ease","power4"),Object(_home_travis_build_tks18_matte_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["a"])(i,"duration",a/4+1),i),0)}))},lifeTimeCounter:function(t){var e,a=this,i=document.querySelector(t),s={root:null,rootMargin:"0px",threshold:.6},_=function(t,e){t.forEach((function(t){if(t.isIntersecting){for(var e=Object(_plugins_helpers__WEBPACK_IMPORTED_MODULE_9__["a"])("May 16, 2000 16:21:00"),i=a.$gsap.timeline(),s=0,_=Object.entries(a.lifeTimeCountDown);s<_.length;s++){var r,o=Object(_home_travis_build_tks18_matte_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["a"])(_[s],1),n=o[0];i.to(a.$data.lifeTimeCountDown,(r={},Object(_home_travis_build_tks18_matte_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["a"])(r,n,e[n]),Object(_home_travis_build_tks18_matte_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["a"])(r,"duration",.8),r))}setTimeout((function(){setInterval((function(){a.lifeTimeCountDown=Object(_plugins_helpers__WEBPACK_IMPORTED_MODULE_9__["a"])("May 16, 2000 16:21:00")}),1e3)}),3800)}}))};e=new IntersectionObserver(_,s),e.observe(i)},getProjects:function(){var t=this;this.$set(this.projects,"loading",!0);var e="https://api.github.com/users/tks18/repos?sort=updated&per_page=20";this.$axios.get(e).then((function(e){if(e.data.length>0){t.$set(t.projects,"loading",!1);var a=e.data,i=t.ismobile?a.slice(0,2):a.slice(0,5);t.$set(t.projects,"projects",i)}else t.$set(t.projects,"loading",!1),t.$set(t.projects,"projects",{})})).catch((function(e){t.$set(t.projects,"loading",!1),t.$set(t.projects,"projects",{})}))},render:function(){this.loopRandEmoji(),this.createObserver("#abouttitle","transitWord",this.wordMaps.about.map,this.wordMaps.about.initial,"about"),this.createObserver("#projtitle","transitWord",this.wordMaps.projtitle.map,this.wordMaps.projtitle.initial,"projtitle"),this.createObserver("#blogtitle","transitWord",this.wordMaps.blog.map,this.wordMaps.blog.initial,"blog"),this.getProjects(),this.lifeTimeCounter("#lifetime")}},computed:{ismobile:function(){var t=window.innerWidth>0?window.innerWidth:screen.width;return!(t>966)},wordMaps:function(){return{blog:{map:[_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["a"].indexOf("m"),_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["a"].indexOf("y"),_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["a"].indexOf(" "),_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["a"].indexOf("b"),_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["a"].indexOf("l"),_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["a"].indexOf("o"),_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["a"].indexOf("g")],initial:[46,1,3,2,40,43,10]},about:{map:[_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["a"].indexOf("a"),_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["a"].indexOf("b"),_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["a"].indexOf("o"),_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["a"].indexOf("u"),_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["a"].indexOf("t"),_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["a"].indexOf(" "),_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["a"].indexOf("m"),_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["a"].indexOf("e")],initial:[39,41,45,43,42,44,46,38]},projtitle:{map:[_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["a"].indexOf("p"),_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["a"].indexOf("r"),_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["a"].indexOf("o"),_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["a"].indexOf("j"),_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["a"].indexOf("e"),_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["a"].indexOf("c"),_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["a"].indexOf("t"),_templates_emoji_array__WEBPACK_IMPORTED_MODULE_8__["a"].indexOf("s")],initial:[39,41,45,43,42,44,46,38]}}}},mounted:function(){this.render()}}},"8adc":function(t,e,a){},9044:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return s}));a("2ead");function i(t,e,a){var i=t.scrollLeft;if(!(0===i||e>0)||!(t.clientWidth+i===t.scrollWidth||e<0)){var s="now"in window.performance?performance.now():(new Date).getTime(),_=function _(r){var o=r-s,n=Math.min(o/a,1);t.scrollLeft=i+e*n,o<a&&window.requestAnimationFrame(_)};window.requestAnimationFrame(_)}}function s(t){t=new Date(t).getTime();var e=new Date,a=(t=new Date(t),e-t),i=36e5,s=24*i,_=7*s,r=365*s,o=Math.floor(a/r*1),n=Math.floor(a%r/_*1),l=Math.floor(a%_/s*1),c=Math.floor(a%s/i*1),d=Math.floor(a%s%i/6e4*1),m=Math.floor(a%s%i%6e4/1e3*1),u={years:o,weeks:n,days:l,hours:c,minutes:d,seconds:m};return u}}}]);
//# sourceMappingURL=chunk-225c751c.4c77ebd6.js.map