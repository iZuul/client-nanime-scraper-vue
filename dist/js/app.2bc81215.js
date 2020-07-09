(function(e){function t(t){for(var n,s,o=t[0],c=t[1],l=t[2],p=0,m=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&m.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(m.length)m.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==i[c]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},i={app:0},a=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],s={},o=s,c=r("2877"),l=Object(c["a"])(o,i,a,!1,null,null,null),u=l.exports,p=r("8c4f"),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",{staticClass:"container"},[r("SearchBox"),e.loading?r("Loading"):e._e(),r("ListAnimes"),r("Pagination")],1)},d=[],f=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3")),b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{attrs:{id:"searchForm"},on:{submit:function(t){return t.preventDefault(),e.searchingAnime(t)}}},[r("div",{staticClass:"form-group"},[r("label",{staticClass:"col-form-label",attrs:{for:"search"}},[e._v("Search")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search for anime....",id:"search"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})]),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Submit")])])},g=[],h=(r("ac1f"),r("841c"),r("96cf"),r("1da1")),O={name:"search-box",data:function(){return{search:"",statusSearch:null}},methods:{searchingAnime:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("retrieveAnimes",this.search);case 2:e.sent;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},watch:{}},v=O,y=Object(c["a"])(v,b,g,!1,null,null,null),j=y.exports,_=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},w=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"spinner-border text-primary loading",attrs:{role:"status",id:"loading"}},[r("span",{staticClass:"sr-only"},[e._v("Loading...")])])}],P={name:"loading"},C=P,A=Object(c["a"])(C,_,w,!1,null,null,null),S=A.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row justify-content-center pt-5",attrs:{id:"results"}},e._l(e.getAnimes,(function(t){return r("div",{key:t.id,staticClass:"col-6 col-md-4 col-lg-3",attrs:{id:"b47f5fbd378d798161c79c129d56f003"}},[r("div",{staticClass:"card mb-3 text-white bg-dark"},[r("img",{staticStyle:{display:"block",width:"100%",height:"300px"},attrs:{src:t.image,alt:t.title}}),r("div",{staticClass:"card-body height-100"},[r("router-link",{staticClass:"card-link font-12",attrs:{to:{name:"animes",params:{type:t.type,link_name:t.link_name}}}},[e._v(e._s(t.title))])],1)])])})),0)},E=[],x=r("2f62");function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){Object(f["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L={name:"list-animes",computed:$({},Object(x["b"])(["getAnimes"]),{animes:function(){return getAnimes}})},B=L,N=Object(c["a"])(B,k,E,!1,null,null,null),F=N.exports,H=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-12 col-sm-4"},[r("ul",{staticClass:"pagination justify-content-center",attrs:{id:"pagination"}},e._l(e.getPages,(function(t,n){return r("li",{key:n},[r("router-link",{staticClass:"page-link",attrs:{to:{name:"pages",params:{anime_name:e.getAnimeSearch,page:t.page_number}}}},[e._v(e._s(t.title_number))])],1)})),0)])])},M=[];function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){Object(f["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var R={name:"pagination",computed:J({},Object(x["b"])(["getPages","getAnimeSearch"])),methods:{}},q=R,G=Object(c["a"])(q,H,M,!1,null,null,null),z=G.exports;function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){Object(f["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Q={name:"home",components:{SearchBox:j,Loading:S,ListAnimes:F,Pagination:z},computed:K({},Object(x["c"])({animes:"animes",anime_search:"anime_search",loading:!1}),{},Object(x["b"])(["getAnimeSearch"])),watch:{},mounted:function(){this.$store.dispatch("retrieveAnimes",this.anime_search)}},U=Q,V=Object(c["a"])(U,m,d,!1,null,null,null),W=V.exports,X=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",{staticClass:"container"},[e.loading?[r("Loading")]:[r("div",{staticClass:"row sticky-top",attrs:{id:"box-breadcrumb"}},[r("ol",{staticClass:"col-12 breadcrumb"},[e._m(0),r("li",{staticClass:"breadcrumb-item active"},[e._v(e._s(e.getAnime.title))])])]),r("Description"),r("ListEpisodes")]],2)},Y=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"breadcrumb-item"},[r("a",{attrs:{href:"/"}},[e._v("Home")])])}],Z=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ee=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row sticky-top",attrs:{id:"box-breadcrumb"}},[r("ol",{staticClass:"col-12 breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("a",{attrs:{href:"index.html"}},[e._v("Home")])]),r("li",{staticClass:"breadcrumb-item active"},[e._v("Boku no Hero Academia 4th Season")])])])}],te={name:"breadcrumb"},re=te,ne=Object(c["a"])(re,Z,ee,!1,null,null,null),ie=ne.exports,ae=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row pt-5 pb-5"},[e._m(0),r("div",{staticClass:"col-12 scroll-box",attrs:{id:"list-episodes"}},e._l(e.getAnime.list_episodes,(function(t,n){return r("ul",{key:n,staticClass:"list-group"},[r("li",{staticClass:"list-group-item d-flex justify-content-between align-items-center"},[r("router-link",{attrs:{to:{name:"episode",params:{episode:t.link}}}},[e._v(e._s(t.title))])],1)])})),0)])},se=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-12",attrs:{id:"header-list-episodes"}},[r("h3",[e._v("List Episode")])])}];function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(r),!0).forEach((function(t){Object(f["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var le={name:"list-episode",computed:ce({},Object(x["b"])(["getAnime"]))},ue=le,pe=Object(c["a"])(ue,ae,se,!1,null,null,null),me=pe.exports,de=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12",attrs:{id:"header-page"}},[r("h1",[e._v(e._s(e.getAnime.title_page))])])]),r("div",{staticClass:"row pt-5"},[r("div",{staticClass:"col-sm-3 col-12",attrs:{id:"image-cover"}},[r("img",{staticClass:"rounded mx-auto d-block",attrs:{src:e.getAnime.image}})]),r("div",{staticClass:"col-sm-9 col-12",attrs:{id:"description"}},[r("dl",{staticClass:"row"},[r("dt",{staticClass:"col-sm-3"},[e._v("Nama Anime")]),r("dd",{staticClass:"col-sm-9"},[e._v(e._s(e.getAnime.title))]),r("dt",{staticClass:"col-sm-3"},[e._v("Tahun")]),r("dd",{staticClass:"col-sm-9"},[e._v(e._s(e.getAnime.year))]),r("dt",{staticClass:"col-sm-3"},[e._v("Status")]),r("dd",{staticClass:"col-sm-9"},[e._v(e._s(e.getAnime.status))]),r("dt",{staticClass:"col-sm-3"},[e._v("Sinopsis")]),r("dd",{staticClass:"col-sm-9"},[e._v(e._s(e.getAnime.sinopsis))]),r("dt",{staticClass:"col-sm-3"},[e._v("Genre")]),r("dd",{staticClass:"col-sm-9"},e._l(e.getAnime.genre,(function(t,n){return r("span",{key:n,staticClass:"badge badge-primary mx-1"},[e._v(e._s(t))])})),0)])])])])},fe=[];function be(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ge(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?be(Object(r),!0).forEach((function(t){Object(f["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):be(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var he={name:"description",computed:ge({},Object(x["b"])(["getAnime"]))},Oe=he,ve=Object(c["a"])(Oe,de,fe,!1,null,null,null),ye=ve.exports;function je(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _e(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?je(Object(r),!0).forEach((function(t){Object(f["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):je(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var we={name:"animes",components:{Breadcrumb:ie,ListEpisodes:me,Loading:S,Description:ye},computed:_e({},Object(x["c"])({loading:"loading",anime:"anime"}),{},Object(x["b"])(["getAnime"])),watch:{anime:function(e){this.$store.dispatch("changeLoading",!1)}},created:function(){this.$store.dispatch("retrieveAnime",{type:this.$route.params.type,link_name:this.$route.params.link_name})}},Pe=we,Ce=Object(c["a"])(Pe,X,Y,!1,null,null,null),Ae=Ce.exports,Se=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",{staticClass:"container"},[e.loading?[r("Loading")]:[r("div",{staticClass:"row sticky-top",attrs:{id:"box-breadcrumb"}},[r("ol",{staticClass:"col-12 breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("router-link",{attrs:{to:{name:"home"}}},[e._v("Home")])],1),r("li",{staticClass:"breadcrumb-item"},[r("router-link",{attrs:{to:{name:"animes",params:{type:"anime",link_name:"/"}}}},[e._v(e._s(e.getAnime.title))])],1),r("li",{staticClass:"breadcrumb-item active"},[e._v(e._s(e.getEpisode.title))])])]),r("div",{staticClass:"row pt-3 justify-content-center"},[r("div",{staticClass:"col-12 box-iframe",attrs:{id:"box-iframe"}},[r("div",{staticClass:"embed-responsive embed-responsive-16by9"},[r("iframe",{staticClass:"embed-responsive-item",attrs:{src:e.getEpisode.link_video,allowfullscreen:""}})])])])]],2)},ke=[];function Ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function xe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ee(Object(r),!0).forEach((function(t){Object(f["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ee(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var De={name:"watch-episode",components:{Loading:S,Breadcrumb:ie},computed:xe({},Object(x["c"])({loading:"loading",episode:"episode"}),{},Object(x["b"])(["getEpisode","getAnime"])),watch:{episode:function(e){this.$store.dispatch("changeLoading",!1)}},created:function(){this.$store.dispatch("retrieveEpisode",this.$route.params.episode)}},$e=De,Le=Object(c["a"])($e,Se,ke,!1,null,null,null),Be=Le.exports,Ne=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",{staticClass:"container"},[r("form",{attrs:{id:"searchForm",action:"/"},on:{submit:e.searchingAnime}},[r("div",{staticClass:"form-group"},[r("label",{staticClass:"col-form-label",attrs:{for:"search"}},[e._v("Search")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search for anime....",id:"search"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})]),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Submit")])]),e.loading?r("Loading"):e._e(),r("ListAnimes"),r("Pagination")],1)},Fe=[];function He(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Me(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?He(Object(r),!0).forEach((function(t){Object(f["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):He(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Te={name:"home",components:{SearchBox:j,Loading:S,ListAnimes:F,Pagination:z},computed:Me({},Object(x["c"])({loading:!1,anime_search:"anime_search"}),{},Object(x["b"])(["getAnimeSearch"])),data:function(){return{search:"",statusFetch:null}},watch:{"$route.params.page":function(e){console.log("page change ",this.$route.params.page),void 0===this.$route.params.page?(console.log("undefined clicked"),this.$store.dispatch("retrieveAnimes",this.getAnimeSearch)):this.$store.dispatch("retrieveAnimesPerPage",{anime_name:this.anime_search,page:this.$route.params.page})}},created:function(){this.$store.dispatch("retrieveAnimesPerPage",{anime_name:this.anime_search,page:this.$route.params.page})},methods:{searchingAnime:function(){var e=this.$store.dispatch("retrieveAnimes",this.search);this.loading=!0,console.log(e),this.loading=!1}}},Je=Te,Re=Object(c["a"])(Je,Ne,Fe,!1,null,null,null),qe=Re.exports;n["a"].use(p["a"]);var Ge=[{path:"/",name:"home",component:W},{path:"/page/:page",name:"pages",component:qe,props:!0},{path:"/animes/:type/:link_name",name:"animes",component:Ae,props:!0},{path:"/episode/:episode",name:"episode",component:Be,props:!0}],ze=new p["a"]({mode:"history",base:"/",routes:Ge}),Ie=ze,Ke=(r("99af"),r("d3b7"),r("bfa9")),Qe=new Ke["a"]({storage:window.sessionStorage});n["a"].use(x["a"]);var Ue="";Ue="https://server-nanime-scraper-api.herokuapp.com/";var Ve=new x["a"].Store({state:{loading:!1,animes:[],pages:[],anime:{},episode:{},anime_search:""},getters:{getAnimes:function(e){return e.animes},getAnime:function(e){return e.anime},getPages:function(e){return e.pages},getEpisode:function(e){return e.episode},getAnimeSearch:function(e){return e.anime_search}},mutations:{setLoading:function(e,t){return e.loading=t},setAnimes:function(e,t){return e.animes=t},setAnime:function(e,t){return e.anime=t},setPages:function(e,t){return e.pages=t},setEpisode:function(e,t){return e.episode=t},setAnimeSearch:function(e,t){return e.anime_search=t}},actions:{retrieveAnimes:function(e,t){var r=e.commit;return r("setAnimeSearch",t),r("setLoading",!0),fetch("".concat(Ue,"api/search/").concat(t)).then((function(e){return e.json()})).then((function(e){return r("setAnimes",e.animes),r("setPages",e.pages),r("setLoading",!1),e})).catch((function(e){return e}))},retrieveAnimesPerPage:function(e,t){var r=e.commit;return r("setPage",t.page),r("setLoading",!0),fetch("".concat(Ue,"api/search/").concat(t.anime_name,"/").concat(t.page)).then((function(e){return e.json()})).then((function(e){return r("setAnimes",e.animes),r("setPages",e.pages),e}))},retrieveAnime:function(e,t){var r=e.commit;return r("setLoading",!0),fetch("".concat(Ue,"api/animes/").concat(t.type,"/").concat(t.link_name)).then((function(e){return e.json()})).then((function(e){return r("setAnime",e),e}))},retrieveEpisode:function(e,t){var r=e.commit;return r("setLoading",!0),fetch("".concat(Ue,"api/watch/").concat(t)).then((function(e){return e.json()})).then((function(e){return r("setEpisode",e),e}))},changeLoading:function(e,t){var r=e.commit;r("setLoading",t)},saveNameSeach:function(e,t){var r=e.commit;r("setAnimeSearch",t)}},modules:{},plugins:[Qe.plugin]}),We=r("9483");Object(We["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),n["a"].config.productionTip=!1,new n["a"]({router:Ie,store:Ve,render:function(e){return e(u)}}).$mount("#app")}});
//# sourceMappingURL=app.2bc81215.js.map