(function(e){function t(t){for(var r,a,c=t[0],s=t[1],l=t[2],u=0,d=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},i={app:0},o=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-002dc4a6":"b75359b7","chunk-2b52e05a":"6be99ab9","chunk-49cdeeb4":"7ea6445b","chunk-4de285ed":"2cb56253"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-002dc4a6":1,"chunk-2b52e05a":1,"chunk-49cdeeb4":1,"chunk-4de285ed":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-002dc4a6":"a4bc90e6","chunk-2b52e05a":"2d8ccdfd","chunk-49cdeeb4":"54b6f02d","chunk-4de285ed":"c150292a"}[e]+".css",i=s.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var l=o[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===i))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===r||u===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],p.parentNode.removeChild(p),n(o)},p.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){a[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}i[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0e94":function(e,t,n){},2154:function(e,t,n){},"35c1":function(e,t,n){e.exports=n.p+"img/图片2.ea10e0ec.png"},"3e8a":function(e,t,n){"use strict";n("d5b2")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",[n("el-head",[n("el-breadcrumb",{attrs:{separator:"/"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/login"}}},[e._v("Homepage")]),e._l(e.brea,(function(t){return n("el-breadcrumb-item",{key:t.path,attrs:{to:t.href}},[e._v(" "+e._s(t.meta.title)+" ")])}))],2)],1),n("el-main",[n("div",{staticStyle:{"margin-top":"100px"},attrs:{id:"app"}},[e.isRouterAlive?n("router-view"):e._e()],1)])],1)},i=[],o={name:"App",provide(){return{reload:this.reload}},data(){return{isRouterAlive:!0}},created(){setTimeout(()=>{window.L2Dwidget.init({pluginRootPath:"./live2dw/",pluginJsPath:"lib/",pluginModelPath:"live2d-widget-model-tororo/assets/",tagMode:!1,debug:!1,model:{jsonPath:"./live2dw/live2d-widget-model-tororo/assets/tororo.model.json"},display:{position:"left",width:350,height:500,vOffset:-250},mobile:{show:!0},log:!1})},10)},methods:{change(){console.log("h")},reload(){this.isRouterAlive=!1,this.$nextTick((function(){this.isRouterAlive=!0}))}},components:{},computed:{brea(){return this.$route.matched}}},c=o,s=(n("034f"),n("2877")),l=Object(s["a"])(c,a,i,!1,null,null,null),u=l.exports,d=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"nav"},[n("div",{staticClass:"nav-inner"},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":e.$route.path,"background-color":"#f6f6fa","text-color":"#414652","active-text-color":"#232935",router:""}},[n("el-menu-item",{attrs:{index:"/rule/generate"}},[n("i",{staticClass:"el-icon-s-check"}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("生成密钥")])]),n("el-menu-item",{attrs:{index:"/rule/secret"}},[n("i",{staticClass:"el-icon-s-promotion"}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("图片密码")])]),n("el-menu-item",{attrs:{index:"/rule/encrypt"}},[n("i",{staticClass:"el-icon-s-order"}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("文件加密")])]),n("el-menu-item",{attrs:{index:"/rule/decrypt"}},[n("i",{staticClass:"el-icon-s-claim"}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("文件解密")])])],1)],1)]),n("div",{staticClass:"container"},[n("router-view")],1)])},h=[],f={},m=f,b=(n("3e8a"),n("b5d4"),Object(s["a"])(m,p,h,!1,null,"fb61e97c",null)),g=b.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app-ca"}},[n("div",{staticClass:"calculator"},[n("div",{staticClass:"result",staticStyle:{"grid-area":"result"}},[n("div",{staticClass:"display"},[e._v(" "+e._s(e.equation)+" ")])]),n("button",{staticStyle:{"grid-area":"ac"},on:{click:e.clear}},[e._v("AC")]),n("button",{staticStyle:{"grid-area":"plus-minus"},on:{click:e.calculateToggle}},[e._v("±")]),n("button",{staticStyle:{"grid-area":"percent"},on:{click:e.calculatePercentage}},[e._v("%")]),n("button",{staticStyle:{"grid-area":"add"},on:{click:function(t){return e.append("+")}}},[e._v("+")]),n("button",{staticStyle:{"grid-area":"subtract"},on:{click:function(t){return e.append("-")}}},[e._v("-")]),n("button",{staticStyle:{"grid-area":"multiply"},on:{click:function(t){return e.append("×")}}},[e._v("×")]),n("button",{staticStyle:{"grid-area":"divide"},on:{click:function(t){return e.append("÷")}}},[e._v("÷")]),n("button",{staticStyle:{"grid-area":"equal"},on:{click:e.calculate}},[e._v("=")]),n("button",{staticStyle:{"grid-area":"number-1"},on:{click:function(t){return e.append(1)}}},[e._v("1")]),n("button",{staticStyle:{"grid-area":"number-2"},on:{click:function(t){return e.append(2)}}},[e._v("2")]),n("button",{staticStyle:{"grid-area":"number-3"},on:{click:function(t){return e.append(3)}}},[e._v("3")]),n("button",{staticStyle:{"grid-area":"number-4"},on:{click:function(t){return e.append(4)}}},[e._v("4")]),n("button",{staticStyle:{"grid-area":"number-5"},on:{click:function(t){return e.append(5)}}},[e._v("5")]),n("button",{staticStyle:{"grid-area":"number-6"},on:{click:function(t){return e.append(6)}}},[e._v("6")]),n("button",{staticStyle:{"grid-area":"number-7"},on:{click:function(t){return e.append(7)}}},[e._v("7")]),n("button",{staticStyle:{"grid-area":"number-8"},on:{click:function(t){return e.append(8)}}},[e._v("8")]),n("button",{staticStyle:{"grid-area":"number-9"},on:{click:function(t){return e.append(9)}}},[e._v("9")]),n("button",{staticStyle:{"grid-area":"number-0"},on:{click:function(t){return e.append(0)}}},[e._v("0")]),n("button",{staticStyle:{"grid-area":"dot"},on:{click:function(t){return e.append(".")}}},[e._v(".")])]),n("a",{staticStyle:{"margin-top":"68px"},on:{click:e.play}},[e._v("mode2")])])},_=[],y=n("efeb"),k=y["a"],S=(n("dfab"),Object(s["a"])(k,v,_,!1,null,"2063e7b2",null)),w=S.exports,x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",[r("el-header"),r("el-main",[r("div",{staticClass:"login_new"},[r("div",{staticClass:"box"},[r("div",{staticClass:"content-box"},[r("img",{attrs:{src:n("35c1")}}),r("h2",[e._v("Calculator")])]),r("div",{staticClass:"input-box"},[r("h4",[r("br"),e._v(" a small electronic device that is used for doing calculations "),r("br"),r("br"),e._v("——by wiki ")]),r("a",[r("a1",{on:{click:function(t){return e.cal("cal")}}},[e._v("mode1")]),r("a2",{on:{click:function(t){return e.rule("rule")}}},[e._v("mode2")])],1)])])])])],1)},A=[],O={methods:{cal(){this.$router.push("/cal")},rule(){this.$router.push("/rule")}}},C=O,E=(n("66c0"),Object(s["a"])(C,x,A,!1,null,null,null)),q=E.exports;r["default"].use(d["a"]);const P=[{path:"/",name:"Index",redirect:{name:"Login"}},{path:"/login",name:"Login",component:q,meta:{title:"index"},href:"/login"},{path:"/rule",name:"rule",component:g,redirect:{name:"Generate"},meta:{title:"mode2"},children:[{path:"generate",name:"Generate",meta:{title:"Generate"},component:()=>n.e("chunk-49cdeeb4").then(n.bind(null,"f1bf"))},{path:"encrypt",name:"Encrypt",meta:{title:"En-Crypt"},component:()=>n.e("chunk-2b52e05a").then(n.bind(null,"c425"))},{path:"decrypt",name:"Decrypt",meta:{title:"De-Crypt"},component:()=>n.e("chunk-4de285ed").then(n.bind(null,"cbcc"))},{path:"secret",name:"secret",meta:{title:"Se-Create"},component:()=>n.e("chunk-002dc4a6").then(n.bind(null,"0c5e"))}]},{path:"/cal",name:"cal",component:w,meta:{title:"mode1"},href:"/cal"}],j=new d["a"]({mode:"history",base:"/",routes:P});var D=j,T=n("5c96"),$=n.n(T),L=(n("0fae"),n("bc3a")),R=n.n(L),M=R.a.create({baseURL:"http://127.0.0.1:8888/api",timeout:5e4,herders:{Accept:"*/*"}}),N={get(e,t,n){return new Promise((r,a)=>{M({method:"get",url:e,params:t,headers:n}).then(e=>{var t=e.status.toString();2==t.charAt(0)?r(e):console.log(e,"异常1")}).catch(e=>{e.response?(a(e.response),console.log(e.response,"异常2")):(a(e.response),console.log("请求错误"))})})},post(e,t,n){return new Promise((r,a)=>{M({method:"post",url:e,data:t,headers:n}).then(e=>{var t=e.status.toString();2==t.charAt(0)?r(e):console.log(e,"异常1")}).catch(e=>{e.response?(a(e.response),console.log(e.response,"异常2")):a(e.response)})})}};r["default"].config.productionTip=!1,r["default"].use($.a),r["default"].prototype.http=N,new r["default"]({router:D,render:e=>e(u)}).$mount("#app")},"66c0":function(e,t,n){"use strict";n("2154")},"85ec":function(e,t,n){},"953b":function(e,t,n){},b5d4:function(e,t,n){"use strict";n("0e94")},d5b2:function(e,t,n){},dfab:function(e,t,n){"use strict";n("953b")},efeb:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__["a"]={data(){return{equation:"0",isDecimalAdded:!1,isOperatorAdded:!1,isStarted:!1,isEntering:!1}},methods:{isOperator(e){return["+","-","×","÷"].indexOf(e)>-1},append(e){if("0"===this.equation&&!this.isOperator(e))return"."===e?(this.equation+=""+e,this.isDecimalAdded=!0):(this.equation=""+e,this.isEntering=!0),void(this.isStarted=!0);if(!this.isOperator(e)){if("."===e&&this.isDecimalAdded)return;if("."===e?(this.isDecimalAdded=!0,this.isOperatorAdded=!0):this.isOperatorAdded=!1,!this.isEntering)return this.isEntering=!0,void(this.equation=""+e);this.equation+=""+e}this.isOperator(e)&&!this.isOperatorAdded&&(this.equation+=""+e,this.isDecimalAdded=!1,this.isOperatorAdded=!0,this.isEntering=!0)},calculate(){let result=this.equation.replace(new RegExp("×","g"),"*").replace(new RegExp("÷","g"),"/"),ans=eval(result);this.equation=(ans<1e9?parseFloat(ans.toFixed(9)):ans.toExponential(3)).toString(),this.isDecimalAdded=!1,this.isOperatorAdded=!1,this.isEntering=!1},calculateToggle(){!this.isOperatorAdded&&this.isStarted&&(this.equation=this.equation+"* -1",this.calculate())},calculatePercentage(){!this.isOperatorAdded&&this.isStarted&&(this.equation=this.equation+"* 0.01",this.calculate())},clear(){this.equation="0",this.isDecimalAdded=!1,this.isOperatorAdded=!1,this.isStarted=!1,this.isEntering=!1},play(){this.$router.push("/rule")}}}}});
//# sourceMappingURL=app.80863893.js.map