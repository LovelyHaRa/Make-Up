(this["webpackJsonpmakeuphara-front-end"]=this["webpackJsonpmakeuphara-front-end"]||[]).push([[26],{254:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),i=t(19),u=t(73),c=t(13),a=t(11),l=t(49),d=t(203),b=t.n(d),f=(t(204),t(205)),s=t.n(f);function m(){var e=Object(c.a)(["\n  .ql-editor {\n    padding: 0;\n    min-height: 320px;\n    font-size: 1rem;\n    line-height: 1.5;\n    color: ",";\n  }\n  .ql-editor.ql-blank::before {\n    color: ",";\n    left: 0;\n  }\n  .ql-video {\n    margin: 0 1%;\n    width: 98%;\n    height: 450px;\n  }\n"]);return m=function(){return e},e}function h(){var e=Object(c.a)(["\n  font-size: 2rem;\n  outline: none;\n  padding-bottom: 0.5rem;\n  border: none;\n  border-bottom: 1px solid ",";\n  background: ",";\n  margin-bottom: 2rem;\n  width: 100%;\n"]);return h=function(){return e},e}function g(){var e=Object(c.a)(["\n  padding: 5rem 0;\n"]);return g=function(){return e},e}b.a.debug("error"),b.a.register("modules/imageResize",s.a);var p=Object(a.c)(l.a)(g()),v=a.c.input(h(),(function(e){return e.theme.editorTitleBorder}),(function(e){return e.theme.body})),j=a.c.div(m(),(function(e){return e.theme.editorText}),(function(e){return e.theme.editorText})),O=function(e){var n=e.title,t=e.body,i=e.onChangeField,u=Object(r.useRef)(null),c=Object(r.useRef)(null);Object(r.useEffect)((function(){c.current=new b.a(u.current,{theme:"bubble",placeholder:"\ud3ec\uc2a4\ud2b8 \uc791\uc131...",modules:{imageResize:{modules:["Resize","DisplaySize"]},toolbar:[[{header:[1,2,3,4,5,6,!1]}],["bold","italic","underline","strike"],[{indent:"-1"},{indent:"+1"}],[{align:[]}],[{list:"ordered"},{list:"bullet"}],[{color:[]},{background:[]}],["video"],["blockquote","code-block","link","image"],["clean"]]}});var e=c.current;e.on("text-change",(function(n,t,r){"user"===r&&i({key:"body",value:e.root.innerHTML})}))}),[i]);var a=Object(r.useRef)(!1);Object(r.useEffect)((function(){a.current||(a.current=!0,c.current.root.innerHTML=t)}),[t]);return o.a.createElement(p,null,o.a.createElement(v,{placeholder:"\ud3ec\uc2a4\ud2b8 \uc81c\ubaa9",value:n,onChange:function(e){i({key:"title",value:e.target.value})}}),o.a.createElement(j,null,o.a.createElement("div",{ref:u})))};n.default=function(){var e=Object(i.b)(),n=Object(i.c)((function(e){var n=e.post;return{title:n.title,body:n.body}})),t=n.title,c=n.body,a=Object(r.useCallback)((function(n){return e(Object(u.a)(n))}),[e]);return Object(r.useEffect)((function(){return function(){e(Object(u.d)())}}),[e]),o.a.createElement(O,{onChangeField:a,title:t,body:c})}}}]);
//# sourceMappingURL=26.3a4d8d97.chunk.js.map