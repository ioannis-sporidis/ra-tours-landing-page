(this.webpackJsonptours=this.webpackJsonptours||[]).push([[0],{12:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(6),i=c.n(s),o=(c(12),c(4)),a=c.n(o),j=c(7),u=c(2),l=c(0),b=function(){return Object(l.jsx)("div",{className:"loading",children:Object(l.jsx)("h1",{children:"Loading..."})})},d=c(5),h=function(e){return Object(l.jsx)("button",{type:e.type,className:e.className,onClick:e.onClick,children:e.children})},O=function(e){var t=e.id,c=e.image,r=e.info,s=e.price,i=e.name,o=e.removeTour,a=Object(n.useState)(!1),j=Object(u.a)(a,2),b=j[0],d=j[1];return Object(l.jsxs)("article",{className:"single-tour",children:[Object(l.jsx)("img",{src:c,alt:i}),Object(l.jsxs)("footer",{children:[Object(l.jsxs)("div",{className:"tour-info",children:[Object(l.jsx)("h4",{children:i}),Object(l.jsxs)("h4",{className:"tour-price",children:["$",s]})]}),Object(l.jsxs)("p",{children:[b?r:"".concat(r.substring(0,200),"..."),Object(l.jsx)(h,{type:"button",onClick:function(){d(!b)},children:b?"show less":"read more"})]}),Object(l.jsx)(h,{type:"button",className:"delete-btn",onClick:function(){return o(t)},children:"Not Interested"})]})]})},x=function(e){return Object(l.jsxs)("section",{children:[Object(l.jsx)("div",{className:"title",children:Object(l.jsx)("h2",{children:"Our tours"})}),Object(l.jsx)("div",{className:"underline"}),Object(l.jsx)("div",{children:e.tours.map((function(t){return Object(l.jsx)(O,Object(d.a)(Object(d.a)({},t),{},{removeTour:e.removeTour}),t.id)}))})]})};var m=function(){var e=Object(n.useState)(!0),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)([]),i=Object(u.a)(s,2),o=i[0],d=i[1],O=function(){var e=Object(j.a)(a.a.mark((function e(){var t,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://course-api.com/react-tours-project");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,r(!1),d(c),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),r(!1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){O()}),[]),c?Object(l.jsx)("main",{children:Object(l.jsx)(b,{})}):0===o.length?Object(l.jsxs)("main",{children:[Object(l.jsx)("div",{className:"title",children:Object(l.jsx)("h2",{children:"No more tours left"})}),Object(l.jsx)(h,{type:"button",onClick:O,className:"btn",children:"refresh"})]}):Object(l.jsx)("main",{children:Object(l.jsx)(x,{tours:o,removeTour:function(e){var t=o.filter((function(t){return t.id!==e}));d(t)}})})};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.bd7c59cf.chunk.js.map