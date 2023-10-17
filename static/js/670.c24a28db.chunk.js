"use strict";(self.webpackChunkmovie_search_react=self.webpackChunkmovie_search_react||[]).push([[670],{7670:function(n,e,r){r.r(e),r.d(e,{default:function(){return q}});var t,a,i,c,o,s,u,p=r(5861),l=r(885),d=r(7757),f=r.n(d),x=r(2791),h=r(1454),g=r(502),m=r(7689),v=r(4172),b=r(168),Z=r(6444),w=Z.ZP.div(t||(t=(0,b.Z)(["\n  border-bottom: 1px solid #211e1e;\n  background-position: right -200px top;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background: linear-gradient(\n    to bottom right,\n    rgb(0 188 212 / 87%),\n    rgb(0 188 212 / 50%)\n  );\n  color: #ffffff;\n  border-radius: 4px;\n  padding: 24px 16px;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n\n  @media (min-width: 768px) {\n    margin: 12px;\n    padding: 30px 40px;\n  }\n"]))),j=(Z.ZP.div(a||(a=(0,b.Z)(["\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  border-radius: 4px;\n"]))),Z.ZP.li(i||(i=(0,b.Z)(["\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-wrap: wrap;\n  align-content: flex-start;\n  border: 1px solid #e3e3e3;\n  border-radius: 5px;\n  overflow: hidden;\n  margin: 30px 2px;\n  flex-basis: calc(33% - 4px);\n\n  @media (min-width: 768px) {\n    flex-basis: calc(16.6% - 4px);\n  }\n\n  @media (min-width: 1024px) {\n    flex-basis: calc(8.3% - 4px);\n  }\n"])))),y=Z.ZP.img(c||(c=(0,b.Z)(["\n  height: 100%;\n  object-fit: cover;\n  border-radius: 2px;\n"]))),P=Z.ZP.h3(o||(o=(0,b.Z)(["\n  font-weight: bold;\n  padding: 4px;\n  font-size: 14px;\n"]))),k=Z.ZP.p(s||(s=(0,b.Z)(["\n  padding: 4px;\n  font-size: 14px;\n"]))),C=r(184);function S(n){var e=n.movieId,r=n.img,t=n.name,a=n.character;return(0,C.jsxs)(j,{children:[(0,C.jsx)("div",{children:r?(0,C.jsx)(y,{src:"https://image.tmdb.org/t/p/w342".concat(r),alt:t}):(0,C.jsx)(y,{src:"http://dummyimage.com/200x300/99cccc.gif&text=Not+image! "})}),(0,C.jsxs)("div",{children:[(0,C.jsx)(P,{children:t}),(0,C.jsx)(k,{children:a})]})]},e)}var _=Z.ZP.ul(u||(u=(0,b.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  width: 100%;\n  top: 0;\n  left: 0;\n"])));function z(n){var e=n.items;return(0,C.jsx)(_,{children:e.map((function(n){var e=n.id,r=n.name,t=n.character,a=n.profile_path;console.log(e,r,t,a);var i=a;return(0,C.jsx)(S,{movieId:e,img:i,name:r,character:t},e)}))})}var N=r(9593);function q(){var n=(0,x.useState)(null),e=(0,l.Z)(n,2),r=e[0],t=e[1],a=(0,x.useState)(!1),i=(0,l.Z)(a,2),c=i[0],o=i[1],s=(0,x.useState)(null),u=(0,l.Z)(s,2),d=u[0],b=u[1],Z=(0,x.useState)(1),j=(0,l.Z)(Z,2),y=j[0],P=j[1],k=(0,x.useState)([]),S=(0,l.Z)(k,2),_=S[0],q=S[1],T=(0,m.UO)().movieId;(0,x.useEffect)((function(){var n=function(){var n=(0,p.Z)(f().mark((function n(){var e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,o(!0),b(null),n.next=5,(0,v.M1)(T);case 5:e=n.sent,t(e.cast),console.log(1),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),b(n.t0);case 13:return n.prev=13,o(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}),[T]),(0,x.useEffect)((function(){if(r){var n=12*y,e=n-12;q(r.slice(e,n))}}),[r,y,12]);return r?(0,C.jsxs)(w,{children:[c&&(0,C.jsx)(h.Z,{}),d&&(0,C.jsx)(g.Z,{text:"Please, try again later"}),(0,C.jsxs)("p",{children:[r.length," actors starred in this film!"]}),r&&(0,C.jsx)(z,{items:_}),(0,C.jsx)(N.Z,{currentPage:y,totalPages:Math.ceil(r.length/12),onPageChange:function(n){P(n)}})]}):null}},1454:function(n,e,r){r.d(e,{Z:function(){return p}});r(2791);var t,a=r(5243),i=r(168),c=r(6444).ZP.div(t||(t=(0,i.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),o=r(4164),s=r(184),u=document.querySelector("#modal-root");function p(n){return(0,o.createPortal)((0,s.jsx)(c,{children:(0,s.jsx)(a.W0,{height:100,width:100,radius:5,color:"#4fa94d",ariaLabel:"ball-triangle-loading",wrapperClass:{},wrapperStyle:"",visible:!0})}),u)}},9593:function(n,e,r){r.d(e,{Z:function(){return p}});r(2791);var t,a,i=r(168),c=r(6444),o=c.ZP.div(t||(t=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 24px 0;\n"]))),s=c.ZP.div(a||(a=(0,i.Z)(["\n  cursor: pointer;\n  margin: 0 5px;\n  &.active {\n    font-weight: bold;\n    color: #262222;\n    opacity: 0.6;\n  }\n"]))),u=r(184),p=function(n){var e=n.currentPage,r=n.totalPages,t=n.onPageChange,a=Array.from({length:r},(function(n,e){return e+1})),i=a.slice(0,5),c=a.slice(-2);return(0,u.jsxs)(o,{children:[i.map((function(n){return(0,u.jsx)(s,{onClick:function(){return t(n)},className:n===e?"active":"",children:n},n)})),e<5&&r>10&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("span",{children:"..."}),c.map((function(n){return(0,u.jsx)(s,{onClick:function(){return t(n)},className:n===e?"active":"",children:n},n)}))]}),e>=5&&r>10&&(0,u.jsxs)(u.Fragment,{children:[a[e-3]>6&&(0,u.jsx)("span",{children:"..."}),a.slice(e-3,e+2).map((function(n){return(0,u.jsx)(s,{onClick:function(){return t(n)},className:n===e?"active":"",children:n},n)})),a[e+2]<r-1&&(0,u.jsx)("span",{children:"..."}),c.map((function(n){return(0,u.jsx)(s,{onClick:function(){return t(n)},className:n===e?"active":"",children:n},n)}))]})]})}},502:function(n,e,r){r.d(e,{Z:function(){return o}});r(2791);var t,a=r(168),i=r(6444).ZP.p(t||(t=(0,a.Z)(["\ndisplay: inline-block;\n    font-size: 20px;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 12px 24px;\n"]))),c=r(184);function o(n){var e=n.text;return(0,c.jsx)(i,{children:e})}},4172:function(n,e,r){r.d(e,{M1:function(){return h},Pg:function(){return f},Vk:function(){return d},gH:function(){return x},tx:function(){return g}});var t=r(5861),a=r(7757),i=r.n(a),c=r(4569),o=r.n(c),s=r(2007),u=r.n(s),p="/movie/",l=o().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"2bec22f10b981066f1b82ccd0874c542",page:1}}),d=function(){var n=(0,t.Z)(i().mark((function n(){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.get("".concat("/trending/movie/day"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.get("".concat(p).concat(e,"?"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,t.Z)(i().mark((function n(e,r){var t,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.get("".concat("/search/movie?","?"),{params:{page:r,query:e}});case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),h=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.get("".concat(p).concat(e).concat("/credits","?"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),g=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.get("".concat(p).concat(e).concat("/reviews","?"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();f.PropTypes={id:u().number},x.PropTypes={page:u().number,query:u().string.isRequired},h.PropTypes={id:u().number},g.PropTypes={id:u().number}}}]);
//# sourceMappingURL=670.c24a28db.chunk.js.map