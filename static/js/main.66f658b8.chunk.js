(this["webpackJsonpmanga-similar-to"]=this["webpackJsonpmanga-similar-to"]||[]).push([[0],{22:function(e,n,t){},24:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var a,c,r=t(0),s=t.n(r),i=t(11),o=t.n(i),l=(t(22),t(5)),m=t.n(l),u=t(12),g=t(16),j=t(17),h=(t(24),t(1)),d=function(e){return Object(h.jsxs)("div",{className:"search-container",children:[Object(h.jsx)("p",{className:"search-container-text",children:"Manga similar to"}),Object(h.jsx)("input",{className:"search-container-input",type:"search",label:"manga-search",placeholder:"enter manga name here",ref:function(n){return(n||{}).onsearch=e.onSearched}})]})},p=t(6),b=t(7),x=b.a.img(a||(a=Object(p.a)(["\n\twidth: 200px;\n\theight: 300px;\n"]))),f=b.a.div(c||(c=Object(p.a)(["\n\twidth: 200px;\n\tbackground: orange;\n"]))),v=function(e){return Object(h.jsxs)("div",{className:"manga-card",children:[Object(h.jsx)(x,{className:"manga-image",src:e.manImg}),Object(h.jsx)(f,{children:Object(h.jsx)("p",{className:"manga-name",children:e.manTitle})})]})};var O=function(){var e=Object(r.useState)([]),n=Object(j.a)(e,2),t=n[0],a=n[1],c=function(){var e=Object(u.a)(m.a.mark((function e(n){var c,r,s,i,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,console.log(n.target.value),e.next=5,fetch("https://api.jikan.moe/v3/search/manga?q=".concat(n.target.value,"&page=1"));case 5:return c=e.sent,e.next=8,c.json();case 8:return r=e.sent,s=r.results[0].mal_id,r.results[0].title,r.results[0].image_url,e.next=14,fetch("https://api.jikan.moe/v3/manga/".concat(s,"/recommendations"));case 14:return i=e.sent,e.next=17,i.json();case 17:o=e.sent,l=o.recommendations,a([]),console.log(l),l.map((function(e){var n={img:e.image_url,name:e.title};console.log(n),a((function(e){return[].concat(Object(g.a)(e),[n])}))})),console.log("recced ".concat(t)),console.log(o),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(1),console.log(e.t0);case 25:case"end":return e.stop()}var l}),e,null,[[1,22]])})));return function(n){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(d,{onSearched:c}),Object(h.jsx)("div",{className:"recommendations-container",children:t.map((function(e,n){return Object(h.jsx)(v,{manImg:e.img,manTitle:e.name})}))})]})},N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,31)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,s=n.getTTFB;t(e),a(e),c(e),r(e),s(e)}))};o.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),N()}},[[30,1,2]]]);
//# sourceMappingURL=main.66f658b8.chunk.js.map