(this["webpackJsonpmakeuphara-front-end"]=this["webpackJsonpmakeuphara-front-end"]||[]).push([[3],{226:function(e,n,t){"use strict";t.r(n);var a=t(13),r=t(0),l=t.n(r),i=t(51),c=t(8),u=t(17),o=t.n(u),s=t(26),m=t(3),f=t(2),h=t(30),p=t(32),d=t(108),b=t(23),E=t(29),g=t(227);function k(){var e=Object(m.a)(["\n  &.MuiSlider-root {\n    flex: 1;\n    margin-top: -0.5rem;\n    color: ",";\n  }\n  & span.MulSlider-makr:first-of-type {\n    width: 0;\n  }\n  .MuiSlider-thumb {\n    height: 1.5rem;\n    width: 1.5rem;\n    background-color: ",";\n    border: 2px solid ",";\n    margin-top: -0.5rem;\n    margin-left: -0.75rem;\n  }\n  .MuiSlider-mark {\n    height: 0.5rem;\n    width: 1px;\n    background-color: ",";\n  }\n  .MuiSlider-track {\n    height: 0.5rem;\n  }\n  .MuiSlider-rail {\n    height: 0.5rem;\n  }\n"]);return k=function(){return e},e}var O=Object(f.c)(g.a)(k(),(function(e){return e.theme.sliderTrack}),(function(e){return e.theme.sliderRail}),(function(e){return e.theme.sliderTrack}),(function(e){return e.theme.sliderRail})),v=t(211);function j(){var e=Object(m.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  .title {\n    font-size: 1.25rem;\n    font-family: 'Raleway';\n    font-weight: 600;\n    color: ",";\n  }\n  .sub-title {\n    font-size: 1rem;\n  }\n"]);return j=function(){return e},e}function w(){var e=Object(m.a)(["\n  margin-top: 3rem;\n"]);return w=function(){return e},e}function x(){var e=Object(m.a)(["\n  margin-top: 3rem;\n  .page-block {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    width: 50%;\n    @media screen and (max-width: 700px) {\n      width: 70%;\n    }\n    @media screen and (max-width: 500px) {\n      width: 90%;\n    }\n    color: ",";\n    .MuiTypography-root {\n      font-family: 'NanumBarunGothic';\n      flex: 1;\n    }\n  }\n"]);return x=function(){return e},e}var y=f.c.div(x(),(function(e){return e.theme.text})),A=Object(f.c)(E.a)(w()),L=f.c.div(j(),(function(e){return e.theme.text})),B=function(e){return e.isDarkTheme?l.a.createElement(p.b,{violet:"true",to:"/blog/write"},"\ud3ec\uc2a4\ud2b8 \uc791\uc131"):l.a.createElement(p.b,{cyan:"true",to:"/blog/write"},"\ud3ec\uc2a4\ud2b8 \uc791\uc131")},M=function(e){var n=e.block,t=e.handlePageBlock;return l.a.createElement("div",{className:"page-block"},l.a.createElement(v.a,null,"\ud398\uc774\uc9c0\ub2f9 \ud3ec\uc2a4\ud2b8 \uac1c\uc218"),l.a.createElement(O,{valueLabelDisplay:"auto",defaultValue:10,marks:!0,min:10,max:50,step:10,value:n,onChange:t}))},T=function(e){var n=e.postList,t=(e.loading,e.error),a=e.showWriteButton,r=e.isDarkTheme,i=e.username,c=e.tag,u=(e.block,e.handlePageBlock);return t?l.a.createElement(h.a,null,l.a.createElement(A,null,l.a.createElement("span",{className:"error-title"},"\ube14\ub85c\uadf8 \ub9ac\uc2a4\ud2b8 \uc694\uccad \uc2e4\ud328."),l.a.createElement("span",{className:"error-msg"},"ERROR MESSAGE: ",t.message))):l.a.createElement(h.a,null,l.a.createElement(y,null,l.a.createElement(b.a,null,l.a.createElement("title",null,"MAKE UP HARA :: BLOG"),i&&l.a.createElement("title",null,i," - MAKE UP HARA :: BLOG"),c&&l.a.createElement("title",null,"#",c," - MAKE UP HARA :: BLOG"),i&&c&&l.a.createElement("title",null,i,"#",c," - MAKE UP HARA :: BLOG")),l.a.createElement(L,null,l.a.createElement("span",{className:"title"},"BLOG",i&&!c&&l.a.createElement("span",null," ","- ",l.a.createElement("span",{className:"sub-title"},i)),c&&!i&&l.a.createElement("span",null," ","- ",l.a.createElement("span",{className:"sub-title"},"#",c)),i&&c&&l.a.createElement("span",null," ","- ",l.a.createElement("span",{className:"sub-title"},i),l.a.createElement("span",{className:"sub-title"},"#",c))),a&&l.a.createElement(B,{isDarkTheme:r})),l.a.createElement(M,{handlePageBlock:u}),n&&l.a.createElement("div",null,n.map((function(e){return l.a.createElement(d.a,{post:e,username:i,key:e._id})})))))},R=t(109),P=Object(R.a)((function(){return Promise.resolve().then(t.bind(null,119))}));n.default=Object(i.e)((function(e){var n=e.location,t=e.match,i=Object(c.b)(),u=Object(c.c)((function(e){var n=e.post,t=e.loading,a=e.user,r=e.theme;return{postList:n.postList,error:n.postListError,loading:t["post/GET_LIST"],user:a.user,isDarkTheme:r.isDarkTheme}})),m=u.postList,f=u.error,h=u.loading,p=u.user,d=u.isDarkTheme,b=t.params.username,E=o.a.parse(n.search,{ignoreQueryPrefix:!0}),g=E.tag,k=E.page,O=Object(r.useState)(10),v=Object(a.a)(O,2),j=v[0],w=v[1],x=Object(r.useRef)(!1);return Object(r.useEffect)((function(){return x.current=!1,i(Object(s.c)({username:b,tag:g,page:k,block:j})),x.current=!0,function(){i(Object(s.h)()),x.current=!1}}),[i,g,k,b,j]),l.a.createElement(l.a.Fragment,null,l.a.createElement(T,{loading:h,error:f,postList:m,showWriteButton:p,isDarkTheme:d,username:b,tag:g,block:j,handlePageBlock:function(e,n){w(n)}}),x.current&&!f&&l.a.createElement(P,null))}))}}]);
//# sourceMappingURL=3.755706f4.chunk.js.map