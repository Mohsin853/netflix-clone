(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},48:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(18),o=n.n(i),r=(n(28),n.p,n(29),n(4)),s=n.n(r),l=n(6),d=n(5),u=n(19),b=n.n(u).a.create({baseURL:"https://api.themoviedb.org/3"}),h=(n(48),n(20)),f=(n(23),n(0));var j=function(e){var t=e.title,n=e.fetchUrl,a=e.isLargeRow,i=Object(c.useState)([]),o=Object(d.a)(i,2),r=o[0],u=o[1],j=Object(c.useState)(""),v=Object(d.a)(j,2),p=v[0];return v[1],Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get(n);case 2:return t=e.sent,u(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("h2",{children:t}),Object(f.jsx)("div",{className:"row__posters",children:r.map((function(e){return Object(f.jsx)("img",{className:"row__poster ".concat(a&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(a?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),p&&Object(f.jsx)(h.a,{videoId:p,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})},v="25f5ae08965d38ba60bdea9bb2763c9f",p={fetchTrending:"/trending/all/week?api_key=".concat(v,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(v,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(v,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(v,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(v,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(v,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(v,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(v,"&with_genres=99")};n(71);var g=function(){var e,t,n=Object(c.useState)([]),a=Object(d.a)(n,2),i=a[0],o=a[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get(p.fetchNetflixOriginals);case 2:return t=e.sent,o(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(i),Object(f.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url(\n                "https:/image.tmdb.org/t/p/original/'.concat(null===i||void 0===i?void 0:i.backdrop_path,'"\n            )'),backgroundPosition:"center center"},children:[Object(f.jsxs)("div",{className:"banner__contents",children:[Object(f.jsx)("h1",{className:"banner__title",children:(null===i||void 0===i?void 0:i.title)||(null===i||void 0===i?void 0:i.name)||(null===i||void 0===i?void 0:i.original_name)}),Object(f.jsxs)("div",{className:"banner__buttons",children:[Object(f.jsx)("button",{className:"banner__button",children:"Play"}),Object(f.jsx)("button",{className:"banner__button",children:"My List"})]}),Object(f.jsx)("h1",{className:"banner__description",children:(e=null===i||void 0===i?void 0:i.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(f.jsx)("div",{className:"banner--fadeBottom"})]})};n(72);var m=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?a(!0):a(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(f.jsxs)("div",{className:"nav ".concat(n&&"nav__black"),children:[Object(f.jsx)("img",{className:"nav__logo",src:"https://www.freepnglogos.com/uploads/netflix-logo-0.png",alt:"Netflix Logo"}),Object(f.jsx)("img",{className:"nav__avatar",src:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png",alt:"Netflix Logo"})]})};var O=function(){return Object(f.jsxs)("div",{className:"app",children:[Object(f.jsx)(m,{}),Object(f.jsx)(g,{}),Object(f.jsx)(j,{title:"Netflix Originals",fetchUrl:p.fetchNetflixOriginals,isLargeRow:!0}),Object(f.jsx)(j,{title:"Trending",fetchUrl:p.fetchTrending}),Object(f.jsx)(j,{title:"Top Rated",fetchUrl:p.fetchTopRated}),Object(f.jsx)(j,{title:"Action Movies",fetchUrl:p.fetchActionMovies}),Object(f.jsx)(j,{title:"Comedy Movies",fetchUrl:p.fetchComedyMovies}),Object(f.jsx)(j,{title:"Horror Movies",fetchUrl:p.fetchHorrorMovies}),Object(f.jsx)(j,{title:"Romance Movies",fetchUrl:p.fetchRomanceMovies}),Object(f.jsx)(j,{title:"Documentaries",fetchUrl:p.fetchDocumentaries})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))};o.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(O,{})}),document.getElementById("root")),_()}},[[73,1,2]]]);
//# sourceMappingURL=main.a1c51a92.chunk.js.map