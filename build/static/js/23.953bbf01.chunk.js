(this["webpackJsonpmakeuphara-front-end"]=this["webpackJsonpmakeuphara-front-end"]||[]).push([[23],{188:function(t,e,n){"use strict";var r=n(13),o=n(0),a=n.n(o),i=n(11),c=n(45);function u(){var t=Object(r.a)(["\n  height: 2.125rem;\n"]);return u=function(){return t},t}function s(){var t=Object(r.a)(["\n  margin-top: 1rem;\n  margin-bottom: 4rem;\n  button + button {\n    margin-left: 0.5rem;\n  }\n"]);return s=function(){return t},t}var b=i.c.div(s()),d=Object(i.c)(c.b)(u());e.a=function(t){var e=t.type,n=void 0===e?"blog":e,r=t.isEdit,o=t.onClick,i=t.onCancel,c="blog"===n?"\ud3ec\uc2a4\ud2b8":"\uc704\ud0a4";return a.a.createElement(b,null,a.a.createElement(d,{cyan:!0,onClick:o},c," ",r?"\uc218\uc815":"\ub4f1\ub85d"),a.a.createElement(d,{red:!0,onClick:i},"\ucde8\uc18c"))}},238:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(39),i=n(19),c=n(73),u=n(188);e.default=Object(a.e)((function(t){var e=t.history,n=Object(i.b)(),a=Object(i.c)((function(t){var e=t.post;return{title:e.title,body:e.body,tags:e.tags,editPost:e.editPost,editPostError:e.editPostError,targetPostId:e.targetPostId}})),s=a.title,b=a.body,d=a.tags,l=a.editPost,f=a.editPostError,g=a.targetPostId;return Object(r.useEffect)((function(){if(l){var t=l._id,n=l.publisher;e.push("/blog/@".concat(n.username,"/").concat(t))}}),[e,l,f]),o.a.createElement(u.a,{onClick:function(){n(g?Object(c.l)({id:g,title:s,body:b,tags:d}):Object(c.m)({title:s,body:b,tags:d}))},onCancel:function(){e.goBack()},isEdit:!!g})}))}}]);
//# sourceMappingURL=23.953bbf01.chunk.js.map