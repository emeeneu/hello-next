(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"W/7i":function(e,n,t){"use strict";t.r(n),n.default=function(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest,o=[],a=[],u={},c=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(JSON.parse(s.responseText))},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:c,headers:{keys:function(){return o},entries:function(){return a},get:function(e){return u[e.toLowerCase()]},has:function(e){return e.toLowerCase()in u}}}};for(var i in s.open(n.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){o.push(n=n.toLowerCase()),a.push([n,t]),u[n]=u[n]?u[n]+","+t:t}),t(c())},s.onerror=r,s.withCredentials="include"==n.credentials,n.headers)s.setRequestHeader(i,n.headers[i]);s.send(n.body||null)})}},guW4:function(e,n,t){"use strict";t.r(n);var r=t("ln6h"),s=t.n(r),o=t("O40h"),a=t("q1tI"),u=t.n(a),c=t("YFqc"),i=t.n(c),l=t("zgjP"),d=t.n(l),f=t("h7RS"),p=function(e){return u.a.createElement(f.a,null,u.a.createElement("h1",null,"Batman TV Shows"),u.a.createElement("ul",null,e.shows.map(function(e){var n=e.show;return u.a.createElement("li",{key:n.id},u.a.createElement(i.a,{as:"/p/".concat(n.id),href:"/post?id=".concat(n.id)},u.a.createElement("a",null,n.name)))})))};p.getInitialProps=Object(o.default)(s.a.mark(function e(){var n,t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()("https://api.tvmaze.com/search/shows?q=batman");case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,console.log("Show data fetched. Count: ".concat(t.length)),e.abrupt("return",{shows:t});case 8:case"end":return e.stop()}},e)})),n.default=p},lZ9E:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/index-data",function(){var e=t("guW4");return{page:e.default||e}}])},zgjP:function(e,n,t){e.exports=window.fetch||(window.fetch=t("W/7i").default||t("W/7i"))}},[["lZ9E",1,0]]]);