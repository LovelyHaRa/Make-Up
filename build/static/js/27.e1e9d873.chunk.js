(this["webpackJsonpmakeuphara-front-end"]=this["webpackJsonpmakeuphara-front-end"]||[]).push([[27],{255:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(19),u=t(73),c=t(85),i=t(9),l=t(13),m=t(11);function f(){var n=Object(l.a)(["\n  display: flex;\n  margin-top: 0.5rem;\n"]);return f=function(){return n},n}function d(){var n=Object(l.a)(["\n  margin-right: 0.5rem;\n  color: ",";\n  cursor: pointer;\n  &:hover {\n    opacity: 0.7;\n  }\n"]);return d=function(){return n},n}function b(){var n=Object(l.a)(["\n  border-radius: 4px;\n  overflow: hidden;\n  display: flex;\n  width: 256px;\n  border: 1px solid ",";\n  input,\n  button {\n    outline: none;\n    border: none;\n    font-size: 1rem;\n  }\n\n  input {\n    padding: 0.5rem;\n    flex: 1;\n    min-width: 0;\n    background: ",";\n    color: ",";\n  }\n  button {\n    cursor: pointer;\n    padding: 0 1rem;\n    background: ",";\n    color: ",";\n    &:hover {\n      background: ",";\n    }\n  }\n"]);return b=function(){return n},n}function s(){var n=Object(l.a)(["\n  width: 100%;\n  border-top: 1px solid ",";\n  padding-top: 2rem;\n\n  h4 {\n    color: ",";\n    margin-top: 0;\n    margin-bottom: 0.5rem;\n  }\n"]);return s=function(){return n},n}var g=m.c.div(s(),(function(n){return n.theme.editorTagComponentBorder}),(function(n){return n.theme.editorTagTitle})),p=m.c.form(b(),(function(n){return n.theme.editorTagBoxBorder}),(function(n){return n.theme.body}),(function(n){return n.theme.editorText}),(function(n){return n.theme.editorTagButtonBody}),(function(n){return n.theme.editorTagButtonText}),(function(n){return n.theme.editorHoverTagButtonBody})),h=m.c.div(d(),(function(n){return n.theme.editorTagText})),v=m.c.div(f()),j=o.a.memo((function(n){var e=n.tag,t=n.onRemove;return o.a.createElement(h,{onClick:function(){return t(e)}},"#",e)})),O=o.a.memo((function(n){var e=n.tags,t=n.onRemove;return o.a.createElement(v,null,e.map((function(n){return o.a.createElement(j,{key:n,tag:n,onRemove:t})})))})),k=function(n){var e=n.tags,t=n.onChangeTags,a=Object(r.useState)(""),u=Object(i.a)(a,2),l=u[0],m=u[1],f=Object(r.useState)([]),d=Object(i.a)(f,2),b=d[0],s=d[1],h=Object(r.useCallback)((function(n){if(n&&!b.includes(n)){var e=[].concat(Object(c.a)(b),[n]);s(e),t(e)}}),[b,t]),v=Object(r.useCallback)((function(n){var e=b.filter((function(e){return e!==n}));s(e),t(e)}),[b,t]),j=Object(r.useCallback)((function(n){m(n.target.value)}),[]),k=Object(r.useCallback)((function(n){n.preventDefault(),h(l.trim()),m("")}),[l,h]);return Object(r.useEffect)((function(){s(e)}),[e]),o.a.createElement(g,null,o.a.createElement("h4",null,"\ud0dc\uadf8"),o.a.createElement(p,{onSubmit:k},o.a.createElement("input",{placeholder:"\ud0dc\uadf8 \uc785\ub825...",onChange:j,value:l}),o.a.createElement("button",{type:"submit"},"\ucd94\uac00")),o.a.createElement(O,{tags:b,onRemove:v}))};e.default=function(){var n=Object(a.b)(),e=Object(a.c)((function(n){return n.post.tags}));return o.a.createElement(k,{onChangeTags:function(e){n(Object(u.a)({key:"tags",value:e}))},tags:e})}}}]);
//# sourceMappingURL=27.e1e9d873.chunk.js.map