(this["webpackJsonpmakeuphara-front-end"]=this["webpackJsonpmakeuphara-front-end"]||[]).push([[3],{159:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(3),i=t(2),u=t(19),s=t.n(u),c=t(34);function f(){var n=Object(o.a)(["\n  width: 1rem;\n  padding: 0.375rem;\n  text-align: center;\n  & + & {\n    margin-left: 0.25rem;\n  }\n"]);return f=function(){return n},n}function m(){var n=Object(o.a)(["\n  width: 320px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 2rem;\n  span {\n    margin: 0 0.25rem;\n    color: ",";\n  }\n  span:before {\n    content: '\\B7\\B7\\B7';\n  }\n"],["\n  width: 320px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 2rem;\n  span {\n    margin: 0 0.25rem;\n    color: ",";\n  }\n  span:before {\n    content: '\\\\B7\\\\B7\\\\B7';\n  }\n"]);return m=function(){return n},n}var l=i.c.div(m(),(function(n){return n.theme.text})),d=Object(i.c)(c.b)(f()),p=function(n){var e=n.username,t=n.tag,r=n.page,a=s.a.stringify({tag:t,page:r});return e?"/blog/@".concat(e,"?").concat(a):"/blog/?".concat(a)},g=function(n){var e=n.page,t=n.lastPage,r=n.username,o=n.tag,i=function(n,e){var t={front:[],mid:[],end:[]},r=n<=e/2?"first":"last";if(e<=9){for(var a=1;a<=e;a++)t.mid.push(a);return t.front=null,t.end=null,t}var o=parseInt(2.5);if("first"===r){for(var i=1;i<=3;i++)t.front.push(i);if(n<=3&&(n=4),n-o<=3){for(var u=o,s=n-1;s>3;s--)t.mid.push(s),u--;for(var c=n;c<=n+o+u;c++)t.mid.push(c)}else for(var f=n-o;f<=n+o;f++)t.mid.push(f);t.end.push(e)}else if("last"===r){t.front.push(1);for(var m=0;m<3;m++)t.end.push(e-m);if(n>=e-3+1&&(n=e-3),n+o>=e-3+1){for(var l=o,d=n+1;d<e-3+1;d++)t.mid.push(d),l--;for(var p=n;p>=n-o-l;p--)t.mid.push(p)}else for(var g=n-o;g<=n+o;g++)t.mid.push(g)}return t.front.sort((function(n,e){return n-e})),t.mid.sort((function(n,e){return n-e})),t.end.sort((function(n,e){return n-e})),t.front[t.front.length-1]+1===t.mid[0]&&(t.mid=t.front.concat(t.mid),t.front=null),t.mid[t.mid.length-1]+1===t.end[0]&&(t.mid=t.mid.concat(t.end),t.end=null),t}(e,t);return a.a.createElement(l,null,i.front&&i.front.map((function(n){return a.a.createElement(d,{disabled:e===n,to:p({username:r,tag:o,page:n}),key:n},n)})),i.front&&a.a.createElement("span",null),i.mid&&i.mid.map((function(n){return a.a.createElement(d,{disabled:e===n,to:p({username:r,tag:o,page:n}),key:n},n)})),i.end&&a.a.createElement("span",null),i.end&&i.end.map((function(n){return a.a.createElement(d,{disabled:e===n,to:p({username:r,tag:o,page:n}),key:n},n)})))},h=t(45),v=t(8);e.default=Object(h.e)((function(n){var e=n.location,t=n.match,r=Object(v.c)((function(n){var e=n.post,t=n.loading;return{postList:e.postList,loading:t["post/GET_LIST"],lastPage:e.lastPage}})),o=r.postList,i=r.loading,u=r.lastPage;if(!o||i)return null;var c=t.params.username,f=s.a.parse(e.search,{ignoreQueryPrefix:!0}),m=f.tag,l=f.page,d=void 0===l?1:l;return a.a.createElement(g,{tag:m,username:c,page:parseInt(d,10),lastPage:u})}))}}]);
//# sourceMappingURL=3.32c1994b.chunk.js.map