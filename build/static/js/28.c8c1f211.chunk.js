(this["webpackJsonpmakeuphara-front-end"]=this["webpackJsonpmakeuphara-front-end"]||[]).push([[28],{260:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(13),c=n(11),a=n(51),u=n(199),l=n.n(u),s=(n(200),n(201)),d=n.n(s);function b(){var e=Object(o.a)(["\n  padding: 3rem 0;\n  .ql-editor {\n    padding: 0;\n    min-height: 400px;\n    font-size: 1rem;\n    line-height: 1.5;\n    color: ",";\n  }\n  .ql-editor.ql-blank::before {\n    color: ",";\n    left: 0;\n  }\n  .ql-video {\n    margin: 0 1%;\n    width: 98%;\n    height: 450px;\n  }\n"]);return b=function(){return e},e}function f(){var e=Object(o.a)(["\n  margin-top: 2rem;\n  h5 {\n    font-weight: 500;\n    margin-bottom: 0.5rem;\n  }\n  .title {\n    font-size: 1.25rem;\n  }\n"]);return f=function(){return e},e}function m(){var e=Object(o.a)(["\n  padding: 1rem 0;\n  background: ",";\n  color: ",";\n"]);return m=function(){return e},e}l.a.debug("error"),l.a.register("modules/imageResize",d.a);var h=Object(c.c)(a.a)(m(),(function(e){return e.theme.body}),(function(e){return e.theme.text})),g=c.c.div(f()),k=c.c.div(b(),(function(e){return e.theme.editorText}),(function(e){return e.theme.editorText})),p=function(e){var t,n=e.onChangeField,o=e.title,c=e.body;try{t=o||JSON.parse(sessionStorage.getItem("wiki-title"))}catch(d){throw d}var a=Object(r.useRef)(null),u=Object(r.useRef)(null);Object(r.useEffect)((function(){u.current=new l.a(a.current,{theme:"bubble",placeholder:"\ubb38\uc11c \uc791\uc131...",modules:{imageResize:{modules:["Resize","DisplaySize"]},toolbar:[[{header:[1,2,3,4,5,6,!1]}],["bold","italic","underline","strike"],[{align:[]}],[{indent:"-1"},{indent:"+1"}],[{list:"ordered"},{list:"bullet"}],[{color:[]},{background:[]}],["video"],["blockquote","code-block","link","image"],["clean"]]}});var e=u.current;e.on("text-change",(function(t,r,i){"user"===i&&n({key:"body",value:e.root.innerHTML})}))}),[n]);var s=Object(r.useRef)(!1);return Object(r.useEffect)((function(){s.current||(s.current=!0,u.current.root.innerHTML=c)}),[c]),i.a.createElement(h,null,i.a.createElement(g,null,i.a.createElement("h5",null,"\ubb38\uc11c \uc81c\ubaa9"),i.a.createElement("span",{className:"title"},t.name)),i.a.createElement(k,null,i.a.createElement("div",{ref:a})))},O=n(20),v=n(76),j=n(21);t.default=Object(j.e)((function(e){var t=e.history,n=Object(O.b)(),o=Object(O.c)((function(e){var t=e.wiki;return{title:t.title,body:t.body}})),c=o.title,a=o.body,u=Object(r.useCallback)((function(e){return n(Object(v.b)(e))}),[n]);try{c&&sessionStorage.setItem("wiki-title",JSON.stringify(c))}catch(l){throw l}return Object(r.useEffect)((function(){return function(){n(Object(v.k)())}}),[n]),c||sessionStorage.getItem("wiki-title")?i.a.createElement(p,{onChangeField:u,title:c,body:a}):(t.push("/wiki"),null)}))}}]);
//# sourceMappingURL=28.c8c1f211.chunk.js.map