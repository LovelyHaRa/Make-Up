(this["webpackJsonpmakeuphara-front-end"]=this["webpackJsonpmakeuphara-front-end"]||[]).push([[21],{186:function(n,e,t){"use strict";t.d(e,"a",(function(){return h}));var r=t(13),a=t(0),i=t.n(a),o=t(11),u=t(47);function c(){var n=Object(r.a)(["\n  width: 1.5rem;\n  padding: 0.375rem;\n  text-align: center;\n  & + & {\n    margin-left: 0.25rem;\n  }\n"]);return c=function(){return n},n}function l(){var n=Object(r.a)(["\n  width: 1rem;\n  padding: 0.375rem;\n  text-align: center;\n  & + & {\n    margin-left: 0.25rem;\n  }\n"]);return l=function(){return n},n}function f(){var n=Object(r.a)(["\n  width: 320px;\n  margin: 2rem auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  span {\n    margin: 0 0.25rem;\n    color: ",";\n  }\n  span::before {\n    content: '\\B7\\B7\\B7';\n  }\n"],["\n  width: 320px;\n  margin: 2rem auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  span {\n    margin: 0 0.25rem;\n    color: ",";\n  }\n  span::before {\n    content: '\\\\B7\\\\B7\\\\B7';\n  }\n"]);return f=function(){return n},n}var s=o.c.div(f(),(function(n){return n.theme.text})),d=Object(o.c)(u.b)(l()),m=Object(o.c)(u.b)(c()),p=function(n){var e=n.path,t=n.query,r=n.page;return t.length>0?"".concat(e,"?").concat(t,"&page=").concat(r):"".concat(e,"?page=").concat(r)},g=function(n,e){var t={front:[],mid:[],end:[]},r=n<=e/2?"first":"last";if(e<=9){for(var a=1;a<=e;a++)t.mid.push(a);return t.front=null,t.end=null,t}var i=parseInt(2.5);if("first"===r){for(var o=1;o<=3;o++)t.front.push(o);if(n<=3&&(n=4),n-i<=3){for(var u=i,c=n-1;c>3;c--)t.mid.push(c),u--;for(var l=n;l<=n+i+u;l++)t.mid.push(l)}else for(var f=n-i;f<=n+i;f++)t.mid.push(f);t.end.push(e)}else if("last"===r){t.front.push(1);for(var s=0;s<3;s++)t.end.push(e-s);if(n>=e-3+1&&(n=e-3),n+i>=e-3+1){for(var d=i,m=n+1;m<e-3+1;m++)t.mid.push(m),d--;for(var p=n;p>=n-i-d;p--)t.mid.push(p)}else for(var g=n-i;g<=n+i;g++)t.mid.push(g)}return t.front.sort((function(n,e){return n-e})),t.mid.sort((function(n,e){return n-e})),t.end.sort((function(n,e){return n-e})),t.front[t.front.length-1]+1===t.mid[0]&&(t.mid=t.front.concat(t.mid),t.front=null),t.mid[t.mid.length-1]+1===t.end[0]&&(t.mid=t.mid.concat(t.end),t.end=null),t},h=function(n){var e=n.handleClick,t=n.page,r=n.lastPage,a=g(t,r);return i.a.createElement(s,null,a.front&&a.front.map((function(n){return i.a.createElement(m,{disabled:t===n,onClick:function(){return e(n)},key:n},n)})),a.front&&i.a.createElement("span",null),a.mid&&a.mid.map((function(n){return i.a.createElement(m,{disabled:t===n,onClick:function(){return e(n)},key:n},n)})),a.end&&i.a.createElement("span",null),a.end&&a.end.map((function(n){return i.a.createElement(m,{disabled:t===n,onClick:function(){return e(n)},key:n},n)})))};e.b=function(n){var e=n.path,t=n.query,r=n.page,a=n.lastPage,o=g(r,a);return i.a.createElement(s,null,o.front&&o.front.map((function(n){return i.a.createElement(d,{disabled:r===n,to:p({path:e,query:t,page:n}),key:n},n)})),o.front&&i.a.createElement("span",null),o.mid&&o.mid.map((function(n){return i.a.createElement(d,{disabled:r===n,to:p({path:e,query:t,page:n}),key:n},n)})),o.end&&i.a.createElement("span",null),o.end&&o.end.map((function(n){return i.a.createElement(d,{disabled:r===n,to:p({path:e,query:t,page:n}),key:n},n)})))}},208:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(186),o=t(21),u=t(20),c=t(32),l=t.n(c);e.default=Object(o.e)((function(n){var e=n.location,t=n.match,r=Object(u.c)((function(n){var e=n.post,t=n.loading;return{postList:e.postList,loading:t["post/GET_LIST"],lastPage:e.lastPage}})),o=r.postList,c=r.loading,f=r.lastPage;if(!o||c)return null;var s=t.params.username,d=l.a.parse(e.search,{ignoreQueryPrefix:!0}),m=d.tag,p=d.page,g=void 0===p?1:p,h=l.a.stringify({tag:m});return a.a.createElement(i.b,{path:s?"/blog/@".concat(s):"/blog",query:h,page:parseInt(g,10),lastPage:f})}))}}]);
//# sourceMappingURL=21.f88663be.chunk.js.map