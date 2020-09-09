(this["webpackJsonpmakeuphara-front-end"]=this["webpackJsonpmakeuphara-front-end"]||[]).push([[3],{168:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(45),c=n(9),o=n(19),u=n.n(o),s=n(22),i=n(2),m=n(1),p=n(23),f=n(25),E=n(10),b=n(63),h=n(52);function d(){var e=Object(i.a)(["\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n\n  &:first-child {\n    padding-top: 0;\n  }\n  & + & {\n    border-top: 1px solid ",";\n  }\n  h2 {\n    font-size: 1.5rem;\n    font-family: 'NanumBarunGothic';\n    font-weight: 500;\n    color: ",";\n    &:hover {\n      color: ",";\n    }\n  }\n  .tags {\n    display: flex;\n    justify-content: flex-end;\n  }\n  & > a {\n    margin-top: 1rem;\n    color: ",";\n    &:hover {\n      color: ",";\n    }\n  }\n  .item-body {\n    font-family: 'NanumBarunGothic';\n  }\n"]);return d=function(){return e},e}var g=m.c.div(d(),(function(e){return e.theme.postBorder}),(function(e){return e.theme.text}),(function(e){return e.theme.hoverText}),(function(e){return e.theme.text}),(function(e){return e.theme.hoverText})),v=function(e){var t=e.post,n=e.username,a=t._id,l=t.title,c=t.body,o=t.tags,u=t.publisher,s=t.publishedDate;return r.a.createElement(g,null,r.a.createElement("h2",null,r.a.createElement(E.b,{to:"/blog/@".concat(u.username,"/").concat(a)},l)),r.a.createElement(b.a,{username:u.username,publishedDate:s}),r.a.createElement(h.a,{tags:o,username:n}),r.a.createElement(E.b,{className:"item-body",to:"/blog/@".concat(u.username,"/").concat(a)},c))},O=n(18),j=n(26);function y(){var e=Object(i.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  .title {\n    font-size: 1.25rem;\n    font-family: 'Raleway';\n    font-weight: 600;\n    color: ",";\n  }\n  .sub-title {\n    font-size: 1rem;\n  }\n"]);return y=function(){return e},e}function A(){var e=Object(i.a)(["\n  margin-top: 3rem;\n"]);return A=function(){return e},e}function k(){var e=Object(i.a)(["\n  margin-top: 3rem;\n"]);return k=function(){return e},e}var L=m.c.div(k()),T=Object(m.c)(j.a)(A()),w=m.c.div(y(),(function(e){return e.theme.text})),x=function(e){return e.isDarkTheme?r.a.createElement(f.b,{violet:"true",to:"/blog/write"},"\ud3ec\uc2a4\ud2b8 \uc791\uc131"):r.a.createElement(f.b,{cyan:"true",to:"/blog/write"},"\ud3ec\uc2a4\ud2b8 \uc791\uc131")},B=function(e){var t=e.postList,n=e.loading,a=e.error,l=e.showWriteButton,c=e.isDarkTheme,o=e.username,u=e.tag;return a?r.a.createElement(p.a,null,r.a.createElement(T,null,r.a.createElement("span",{className:"error-title"},"\ube14\ub85c\uadf8 \ub9ac\uc2a4\ud2b8 \uc694\uccad \uc2e4\ud328."),r.a.createElement("span",{className:"error-msg"},"ERROR MESSAGE: ",a.message))):r.a.createElement(p.a,null,r.a.createElement(L,null,r.a.createElement(O.a,null,r.a.createElement("title",null,"MAKE UP HARA :: BLOG"),o&&r.a.createElement("title",null,o," - MAKE UP HARA :: BLOG"),u&&r.a.createElement("title",null,"#",u," - MAKE UP HARA :: BLOG"),o&&u&&r.a.createElement("title",null,o,"#",u," - MAKE UP HARA :: BLOG")),r.a.createElement(w,null,r.a.createElement("span",{className:"title"},"BLOG",o&&!u&&r.a.createElement("span",null," ","- ",r.a.createElement("span",{className:"sub-title"},o)),u&&!o&&r.a.createElement("span",null," ","- ",r.a.createElement("span",{className:"sub-title"},"#",u)),o&&u&&r.a.createElement("span",null," ","- ",r.a.createElement("span",{className:"sub-title"},o),r.a.createElement("span",{className:"sub-title"},"#",u))),l&&r.a.createElement(x,{isDarkTheme:c})),!n&&t&&r.a.createElement("div",null,t.map((function(e){return r.a.createElement(v,{post:e,username:o,key:e._id})})))))},N=n(86),D=Object(N.a)((function(){return Promise.resolve().then(n.bind(null,100))}));t.default=Object(l.e)((function(e){var t=e.location,n=e.match,l=Object(c.b)(),o=Object(c.c)((function(e){var t=e.post,n=e.loading,a=e.user,r=e.theme;return{postList:t.postList,error:t.postListError,loading:n["post/GET_LIST"],user:a.user,isDarkTheme:r.isDarkTheme}})),i=o.postList,m=o.error,p=o.loading,f=o.user,E=o.isDarkTheme,b=n.params.username,h=u.a.parse(t.search,{ignoreQueryPrefix:!0}),d=h.tag,g=h.page,v=Object(a.useRef)(!1);return Object(a.useEffect)((function(){return l(Object(s.c)({username:b,tag:d,page:g})),v.current=!0,function(){l(Object(s.h)()),v.current=!1}}),[l,d,g,b]),r.a.createElement(r.a.Fragment,null,r.a.createElement(B,{loading:p,error:m,postList:i,showWriteButton:f,isDarkTheme:E,username:b,tag:d}),v.current&&!m&&r.a.createElement(D,null))}))}}]);
//# sourceMappingURL=3.69396243.chunk.js.map