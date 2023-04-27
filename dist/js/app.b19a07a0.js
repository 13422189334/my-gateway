(function(){"use strict";var e={6153:function(e,t,n){var r=n(9242),o=n(2777),i=n(3396);function a(e,t){const n=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(n)}var s=n(89);const c={},u=(0,s.Z)(c,[["render",a]]);var l=u,f=n(2483);const d=[{path:"/",name:"",component:()=>n.e(443).then(n.bind(n,3659))},{path:"/game",name:"game",component:()=>n.e(443).then(n.bind(n,8180))},{path:"/mind",name:"mind",component:()=>n.e(443).then(n.bind(n,7887))}],p=(0,f.p7)({history:(0,f.PO)("/sla-mind/"),routes:d});var h=p,g=n(65),m=(0,g.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),v=n(812),b=n(7139),y=n(4870),w=n(2748),_=(0,i.aZ)({__name:"index",props:{title:{type:String},visible:{type:Boolean,default:!1}},emits:["update:visible","handle-tab"],setup(e,{emit:t}){const n=e,r=()=>{t("update:visible",!n.visible),t("handle-tab",!n.visible)};return(t,o)=>{const a=(0,i.up)("el-icon");return(0,i.wg)(),(0,i.iD)("div",{class:(0,b.C_)(["sla-collapse-container",[e.visible?"show":"close"]])},[(0,i._)("div",{class:"sla-collapse-container_header",onClick:r},[(0,i._)("div",{class:(0,b.C_)(["header_title",{selected:e.visible}])},(0,b.zw)(n.title),3),(0,i.Wm)(a,{class:(0,b.C_)({"arrow-up":e.visible})},{default:(0,i.w5)((()=>[(0,i.Wm)((0,y.SU)(w.a2Z))])),_:1},8,["class"])]),(0,i._)("div",{class:(0,b.C_)(["sla-collapse-container_body",{visible:n.visible}])},[(0,i.WI)(t.$slots,"default")],2)],2)}}});const S=(0,s.Z)(_,[["__scopeId","data-v-04f99132"]]);var O=S;const j={class:"sla-line-data-container"},k={class:"sla-line-data-container_label"},C={class:"sla-line-data-container_slot"};var E=(0,i.aZ)({__name:"index",props:{label:{type:String}},setup(e){const t=e;return(e,n)=>((0,i.wg)(),(0,i.iD)("div",j,[(0,i._)("div",k,(0,b.zw)(t.label)+" ：",1),(0,i._)("div",C,[(0,i.WI)(e.$slots,"default")])]))}});const A=(0,s.Z)(E,[["__scopeId","data-v-0cd5aa20"]]);var P=A;function N(e){e.component("sla-collapse",O),e.component("sla-line-data",P)}function T(e){const t=new Date(e),n=t.getFullYear(),r=t.getMonth()+1,o=t.getDate(),i=()=>t.getHours()<10?"0"+t.getHours():t.getHours(),a=()=>t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),s=()=>t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return n+"-"+r+"-"+o+" "+i()+":"+a()+":"+s()}function M(e){let t;return t=e>99999999?Math.round(Math.floor(e/1e8))+"亿":e>9999?Math.round(Math.floor(e/1e4))+"万":e.toString(),t}function x(e,t,n=[]){const r=0===n.length?Object.keys(t):n;r.forEach((n=>{e[n]=t[n]}))}var $=n(4161);const Z={set(e,t){window.sessionStorage.setItem(e,JSON.stringify(t))},get(e){const t=window.sessionStorage.getItem(e);return JSON.parse(t)},remove(e){window.sessionStorage.removeItem(e)},clear(){window.sessionStorage.clear()}};var I=n(2655),z=n(7178);const B=$.Z.create({timeout:6e4,headers:{"Content-Type":"application/json"}});B.interceptors.request.use((e=>(Z.get("token")&&e?.headers?.common.setAuthorization(`${Z.get("token")}`),e)),(e=>Promise.reject(e))),B.interceptors.response.use((e=>{const t=e.data;return t.code&&0!==t.code?(401!==t.code&&4001!==t.code||(Z.clear(),window.location.href="/",I.T.alert("你已被登出，请重新登录","提示",{}).then((()=>{})).catch((()=>{}))),Promise.reject(B.interceptors.response)):e.data}),(e=>(-1!=e.message.indexOf("timeout")?z.z8.error("网络超时"):"Network Error"==e.message?z.z8.error("网络连接错误"):e.response.data?z.z8.error(e.response.statusText):z.z8.error("接口路径找不到"),Promise.reject(e))));var D=B;n(6705);function F(e){N(e),e.config.globalProperties.$get=D.get,e.config.globalProperties.$post=D.post,e.config.globalProperties.$formatNumber=M,e.config.globalProperties.$formatTime=T,e.config.globalProperties.$setReactive=x}n(4415);(0,r.ri)(l).use(m).use(h).use(o.Z,{locale:v.Z}).use(F).mount("#app")},6705:function(e,t,n){n(7658),Array.prototype.groupBy=function(e){const t=[];return this.forEach(((n,r)=>{const o=Math.floor(r/e),i=r%e===0;i&&t.push([]),t[o].push(n)})),t},Array.prototype.groupByAdjoinSameData=function(){let e=0;const t=this.reduce(((t,n,r,o)=>{const i=r+1;return r===e&&(i<=o.length&&n===o[i]?(t.push([n,o[i]]),e+=2):(t.push([n]),e+=1)),t}),[]);return t},Array.prototype.fill=function(e){const t=JSON.parse(JSON.stringify(this)),n=this.length;for(let r=0;r<e;r++)r>=n&&t.push(0);return t},Array.prototype.rowToCol=function(){const e=[];return this.forEach((t=>{t.forEach(((t,n)=>{n===e.length&&e.push([]),e[n].push(t)}))})),e},Array.prototype.indexOf=function(e,t){const n=this.filter((t=>t===e));if(t>n.length)throw new Error(`the array has not ${t} ${e}`);const r=this.join("-").split(`${e}`).slice(0,t).reduce(((e,t)=>{const n=t.split("-").filter((e=>""!==e)).length;return e+=n,e}),0);return r+(t-1)}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var s=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(443===e?"about":e)+"."+{170:"d552e8f4",179:"66912223",282:"2d893b60",372:"b288143a",443:"333e0ac5",591:"34c3b6c7",671:"ef7dfb60"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+(443===e?"about":e)+"."+{170:"9d71a031",179:"ebb00273",282:"5de3ba15",372:"771da21d",443:"4d4fdcd8",591:"ae90f85d",671:"f5cc7c9e"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="sla-mind:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var s,c;if(void 0!==i)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var f=u[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+i){s=f;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[o];var d=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/sla-mind/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=s,i.parentNode&&i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=a,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),s=n.p+a;if(t(a,s))return o();e(r,s,null,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={170:1,179:1,282:1,372:1,443:1,591:1,671:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),s=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],s=r[1],c=r[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var l=c(n)}for(t&&t(r);u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunksla_mind"]=self["webpackChunksla_mind"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6153)}));r=n.O(r)})();
//# sourceMappingURL=app.b19a07a0.js.map