(this["webpackJsonpmakeuphara-front-end"]=this["webpackJsonpmakeuphara-front-end"]||[]).push([[23],{188:function(t,e,n){"use strict";var r=n(11),c=n(0),i=n.n(c),o=n(9),a=n(45);function u(){var t=Object(r.a)(["\n  height: 2.125rem;\n"]);return u=function(){return t},t}function m(){var t=Object(r.a)(["\n  margin-top: 1rem;\n  margin-bottom: 4rem;\n  button + button {\n    margin-left: 0.5rem;\n  }\n"]);return m=function(){return t},t}var l=o.c.div(m()),b=Object(o.c)(a.b)(u());e.a=function(t){var e=t.type,n=void 0===e?"blog":e,r=t.isEdit,c=t.onClick,o=t.onCancel,a="blog"===n?"\ud3ec\uc2a4\ud2b8":"\uc704\ud0a4";return i.a.createElement(l,null,i.a.createElement(b,{cyan:!0,onClick:c},a," ",r?"\uc218\uc815":"\ub4f1\ub85d"),i.a.createElement(b,{red:!0,onClick:o},"\ucde8\uc18c"))}},239:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),i=n(188),o=n(39),a=n(19),u=n(72);e.default=Object(o.e)((function(t){var e,n=t.history,o=Object(a.b)(),m=Object(a.c)((function(t){var e=t.wiki;return{title:e.title,body:e.body,editDocument:e.editDocument,editDocumentError:e.editDocumentError}})),l=m.title,b=m.body,d=m.editDocument,f=m.editDocumentError;try{e=l||JSON.parse(sessionStorage.getItem("wiki-title"))}catch(k){throw k}var s=e._id;return Object(r.useEffect)((function(){if(d){var t=d.name;n.replace("/w/".concat(t)),n.goBack()}try{sessionStorage.getItem("wiki-title")}catch(k){throw k}}),[n,d,f]),c.a.createElement(i.a,{type:"wiki",onClick:function(){o(Object(u.r)({id:s,body:b}))},onCancel:function(){n.goBack()}})}))}}]);
//# sourceMappingURL=23.b7aca6fc.chunk.js.map