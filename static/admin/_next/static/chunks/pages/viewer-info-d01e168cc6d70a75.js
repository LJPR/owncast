(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[194],{87547:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(1413),a=n(67294),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},s=n(42135),o=function(e,t){return a.createElement(s.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:i}))};o.displayName="UserOutlined";var c=a.forwardRef(o)},31709:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/viewer-info",function(){return n(51237)}])},89270:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(85893),a=n(31877),i=n(92616),s=n.n(i),o=n(58091),c=n(60727);function u(e){var t={};return e.forEach((function(e){var n=new Date(e.time),r=(0,o.Z)(n,"H:mma");t[r]=e.value})),t}function l(e){var t=e.data,n=e.title,a=e.color,i=e.unit,s=e.dataCollections,o=[];return t&&t.length>0&&o.push({name:n,color:a,data:u(t)}),s.forEach((function(e){o.push({name:e.name,data:u(e.data),color:e.color})})),(0,r.jsx)("div",{className:"line-chart-container",children:(0,r.jsx)(c.wW,{xtitle:"Time",ytitle:n,suffix:i,legend:"bottom",color:a,data:o,download:n})})}s().use(a.Z),l.defaultProps={dataCollections:[],data:[],title:""}},34440:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(85893),a=n(84485),i=n(97910),s=n(74763),o=n(97751);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}var l=a.Z.Text,d={title:"",value:0,prefix:null,color:"",progress:!1,centered:!1,formatter:null};function f(e){var t=e.title,n=e.value,a=e.prefix,s=e.color,o=n>90?"red":s,c=(0,r.jsxs)("div",{children:[a,(0,r.jsx)("div",{children:(0,r.jsx)(l,{type:"secondary",children:t})}),(0,r.jsx)("div",{children:(0,r.jsxs)(l,{type:"secondary",children:[n,"%"]})})]});return(0,r.jsx)(i.Z,{type:"dashboard",percent:n,width:120,strokeColor:{"0%":s,"90%":o},format:function(){return c}})}function v(e){var t=e.title,n=e.value,a=e.prefix,i=e.formatter;return(0,r.jsx)(s.Z,{title:t,value:n,prefix:a,formatter:i})}function h(e){var t=e.progress?f:v,n=e.centered?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,r.jsx)(o.Z,{type:"inner",children:(0,r.jsx)("div",{style:n,children:(0,r.jsx)(t,u({},e))})})}f.defaultProps=d,v.defaultProps=d,h.defaultProps=d},51237:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var r=n(34051),a=n.n(r),i=n(85893),s=n(67294),o=n(68157),c=n(84485),u=n(25968),l=n(6226),d=n(38504),f=n(11382),v=n(14670),h=n(87547),x=n(80882),m=n(83946),p=n(19013),Z=n(13882);function w(e,t){(0,Z.Z)(2,arguments);var n=(0,p.Z)(e),r=(0,m.Z)(t);return isNaN(r)?new Date(NaN):r?(n.setDate(n.getDate()+r),n):n}function g(e,t){(0,Z.Z)(2,arguments);var n=(0,m.Z)(t);return w(e,-n)}function j(e,t){(0,Z.Z)(2,arguments);var n=(0,p.Z)(e),r=(0,m.Z)(t);if(isNaN(r))return new Date(NaN);if(!r)return n;var a=n.getDate(),i=new Date(n.getTime());i.setMonth(n.getMonth()+r+1,0);var s=i.getDate();return a>=s?i:(n.setFullYear(i.getFullYear(),i.getMonth(),a),n)}function y(e,t){(0,Z.Z)(2,arguments);var n=(0,m.Z)(t);return j(e,-n)}function b(e,t){if((0,Z.Z)(2,arguments),!t||"object"!==typeof t)return new Date(NaN);var n=t.years?(0,m.Z)(t.years):0,r=t.months?(0,m.Z)(t.months):0,a=t.weeks?(0,m.Z)(t.weeks):0,i=t.days?(0,m.Z)(t.days):0,s=t.hours?(0,m.Z)(t.hours):0,o=t.minutes?(0,m.Z)(t.minutes):0,c=t.seconds?(0,m.Z)(t.seconds):0,u=y(e,r+12*n),l=g(u,i+7*a),d=o+60*s,f=c+60*d,v=1e3*f,h=new Date(l.getTime()-v);return h}function D(e){(0,Z.Z)(1,arguments);var t=(0,p.Z)(e),n=t.getTime();return n}function S(e){return(0,Z.Z)(1,arguments),Math.floor(D(e)/1e3)}var k=n(89270),N=n(34440),C=n(77406),P=n(85533),O=n(2766);function _(e){var t=e.data,n=[{title:"User Agent",dataIndex:"userAgent",key:"userAgent",render:function(e){return(0,O.AB)(e)}},{title:"Location",dataIndex:"geo",key:"geo",render:function(e){return e?"".concat(e.regionName,", ").concat(e.countryCode):"-"}},{title:"Watch Time",dataIndex:"firstSeen",key:"firstSeen",defaultSortOrder:"ascend",render:function(e){return(0,P.Z)(new Date(e))},sorter:function(e,t){return new Date(e.firstSeen).getTime()-new Date(t.firstSeen).getTime()},sortDirections:["descend","ascend"]}];return(0,i.jsx)(C.Z,{pagination:{hideOnSinglePage:!0},className:"table-container",columns:n,dataSource:t,size:"small",rowKey:"id"})}var E=n(35159),T=n(58827);function I(e,t,n,r,a,i,s){try{var o=e[i](s),c=o.value}catch(u){return void n(u)}o.done?t(c):Promise.resolve(c).then(r,a)}function M(){var e,t=(0,s.useContext)(E.aC)||{},n=t.online,r=t.broadcaster,m=t.viewerCount,p=t.overallPeakViewerCount,Z=t.sessionPeakViewerCount;r&&r.time&&(e=new Date(r.time));var w=[{title:"Current stream",start:e},{title:"Last 12 hours",start:b(new Date,{hours:12})},{title:"Last 24 hours",start:b(new Date,{hours:24})},{title:"Last 7 days",start:b(new Date,{days:7})},{title:"Last 30 days",start:b(new Date,{days:30})},{title:"Last 3 months",start:b(new Date,{months:3})},{title:"Last 6 months",start:b(new Date,{months:6})}],g=(0,s.useState)(!0),j=g[0],y=g[1],D=(0,s.useState)([]),C=D[0],P=D[1],O=(0,s.useState)([]),M=O[0],L=O[1],A=(0,s.useState)(w[1]),V=A[0],z=A[1],F=function(){var e,t=(e=a().mark((function e(){var t,n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="".concat(T.iV,"?windowStart=").concat(S(V.start)),e.next=4,(0,T.rQ)(t);case 4:n=e.sent,P(n),y(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("==== error",e.t0);case 12:return e.prev=12,e.next=15,(0,T.rQ)(T.a_);case 15:r=e.sent,L(r),e.next=22;break;case 19:e.prev=19,e.t1=e.catch(12),console.log("==== error",e.t1);case 22:case"end":return e.stop()}}),e,null,[[0,9],[12,19]])})),function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function s(e){I(i,r,a,s,o,"next",e)}function o(e){I(i,r,a,s,o,"throw",e)}s(void 0)}))});return function(){return t.apply(this,arguments)}}();(0,s.useEffect)((function(){var e=null;return F(),n?(e=setInterval(F,6e4),function(){clearInterval(e)}):function(){return[]}}),[n,V]);var B=function(e){var t=e.key;z(w[t])},Q=(0,i.jsxs)(o.Z,{children:[n&&e&&(0,i.jsx)(o.Z.Item,{onClick:B,children:w[0].title},"0"),w.slice(1).map((function(e,t){return(0,i.jsx)(o.Z.Item,{onClick:B,children:e.title},t+1)}))]});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Z.Title,{children:"Viewer Info"}),(0,i.jsx)("br",{}),(0,i.jsxs)(u.Z,{gutter:[16,16],justify:"space-around",children:[n&&(0,i.jsx)(l.Z,{span:8,md:8,children:(0,i.jsx)(N.Z,{title:"Current viewers",value:m.toString(),prefix:(0,i.jsx)(h.Z,{})})}),(0,i.jsx)(l.Z,{md:n?8:12,children:(0,i.jsx)(N.Z,{title:n?"Max viewers this session":"Max viewers last session",value:Z.toString(),prefix:(0,i.jsx)(h.Z,{})})}),(0,i.jsx)(l.Z,{md:n?8:12,children:(0,i.jsx)(N.Z,{title:"All-time max viewers",value:p.toString(),prefix:(0,i.jsx)(h.Z,{})})})]}),(0,i.jsx)(d.Z,{overlay:Q,trigger:["click"],children:(0,i.jsxs)("button",{type:"button",style:{float:"right",background:"transparent",border:"unset"},children:[V.title," ",(0,i.jsx)(x.Z,{})]})}),C.length>0&&(0,i.jsx)(k.Z,{title:"Viewers",data:C,color:"#2087E2",unit:"viewers"}),(0,i.jsx)(_,{data:M}),(0,i.jsx)(f.Z,{spinning:j,children:0===C.length&&(0,i.jsx)(v.Z,{banner:!0,message:"Please wait",description:"No viewer data has been collected yet.",type:"info"})})]})}}},function(e){e.O(0,[570,406,91,961,308,138,910,80,774,888,179],(function(){return t=31709,e(e.s=t);var t}));var t=e.O();_N_E=t}]);