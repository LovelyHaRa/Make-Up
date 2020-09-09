(this["webpackJsonpmakeuphara-front-end"]=this["webpackJsonpmakeuphara-front-end"]||[]).push([[19],{177:function(e,n,r){"use strict";var a=r(11);function s(){var e=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 3rem;\n  font-family: 'NanumBarunGothic';\n  color: ",";\n  span + span {\n    margin-top: 1rem;\n  }\n  .error-msg {\n    color: ",";\n  }\n"]);return s=function(){return e},e}var t=r(9).c.div(s(),(function(e){return e.theme.text}),(function(e){return e.theme.errorText}));n.a=t},194:function(e,n,r){"use strict";r.d(n,"a",(function(){return f})),r.d(n,"b",(function(){return b}));var a=r(11),s=r(0),t=r.n(s),o=r(9),c=r(45),i=r(177);function l(){var e=Object(a.a)(["\n  margin: 2rem;\n"]);return l=function(){return e},e}function m(){var e=Object(a.a)(["\n  margin-top: 0.5rem;\n"]);return m=function(){return e},e}function u(){var e=Object(a.a)(["\n  margin-top: 1.25rem;\n  padding: 0.5rem 0.75rem;\n  font-size: 1.125rem;\n  font-family: 'Raleway', 'NanumGothic';\n  border-radius: 0.25rem;\n  background-color: ",";\n  color: ",";\n  outline: none;\n  border: 2px solid ",";\n"]);return u=function(){return e},e}function d(){var e=Object(a.a)(["\n  margin-top: 2rem;\n  margin-left: 1rem;\n  display: flex;\n  flex-direction: column;\n  color: ",";\n\n  .profile-info {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 1rem;\n  }\n  .profile-info-title {\n    font-weight: 300;\n    font-size: 1.5rem;\n    font-family: 'Raleway', 'NanumGothic';\n  }\n  .profile-info-explain {\n    font-size: 1rem;\n    font-family: 'NanumGothic';\n    margin-top: 0.25rem;\n    color: ",";\n  }\n  .profile-info-value {\n    margin-top: 1.25rem;\n    span {\n      padding: 0.25rem 0.5rem;\n      font-size: 1.125rem;\n      font-family: 'Raleway', 'NanumGothic';\n      border-radius: 0.25rem;\n      background-color: ",";\n    }\n  }\n  hr {\n    border: 0.5px solid ",";\n  }\n  .profile-form {\n    margin: 1.5rem 0;\n    display: flex;\n    flex-direction: column;\n  }\n  .value-provider {\n    text-transform: uppercase;\n  }\n  .possible {\n    border: 2px solid ",";\n  }\n  .impossible {\n    border: 2px solid ",";\n  }\n  .invalid-message {\n    font-weight: 300;\n    color: ",";\n    margin-top: 0.5rem;\n  }\n  .success-message {\n    font-weight: 300;\n    color: ",";\n    margin-top: 0.5rem;\n  }\n"]);return d=function(){return e},e}var f=o.c.div(d(),(function(e){return e.theme.text}),(function(e){return e.theme.categoryBorder}),(function(e){return e.theme.profileInfoValueBody}),(function(e){return e.theme.categoryBorder}),(function(e){return e.theme.profileInputValid}),(function(e){return e.theme.profileInputInValid}),(function(e){return e.theme.errorText}),(function(e){return e.theme.categoryBorder})),p=o.c.input(u(),(function(e){return e.theme.profileInfoValueBody}),(function(e){return e.theme.text}),(function(e){return e.theme.body})),w=Object(o.c)(c.b)(m()),b=Object(o.c)(i.a)(l());n.c=function(e){var n=e.user,r=e.form,a=e.onChange,s=e.onSubmit,o=e.validName,c=e.nameMessage,i=e.existNameError,l=e.equalName,m=e.submitMessage,u=e.errorMessage;if(!n)return t.a.createElement(b,null,t.a.createElement("span",{className:"error-title"},"\ub85c\uadf8\uc778 \uc815\ubcf4\uac00 \uc5c6\uc5b4\uc694...\u3160"));if(i)return t.a.createElement(b,null,t.a.createElement("span",{className:"error-title"},"\ud504\ub85c\ud544 \uc694\uccad \uc2e4\ud328."),t.a.createElement("span",null,"Status:"," ",t.a.createElement("span",{className:"error-msg"},i.response.status)),t.a.createElement("span",null,"Message:"," ",t.a.createElement("span",{className:"error-msg"},i.response.statusText)));var d=n.username,g=n.provider;return t.a.createElement(f,null,t.a.createElement("div",null,t.a.createElement("div",{className:"profile-info"},t.a.createElement("span",{className:"profile-info-title"},"ID"),t.a.createElement("div",{className:"profile-info-value"},t.a.createElement("span",null,d))),t.a.createElement("div",{className:"profile-info"},t.a.createElement("span",{className:"profile-info-title"},"\ub85c\uadf8\uc778 \uc720\ud615"),t.a.createElement("span",{className:"profile-info-explain"},"\uc5b4\ub5a4 \ubc29\uc2dd\uc73c\ub85c \ub85c\uadf8\uc778\ud588\ub294\uc9c0\ub97c \ud655\uc778\ud569\ub2c8\ub2e4."),t.a.createElement("div",{className:"profile-info-value"},t.a.createElement("span",{className:"value-provider"},g))),t.a.createElement("hr",null),t.a.createElement("form",{className:"profile-form",onSubmit:s},t.a.createElement("div",{className:"profile-info"},t.a.createElement("span",{className:"profile-info-title"},"DISPLAY NAME"),t.a.createElement("span",{className:"profile-info-explain"},"\ub2e4\ub978 \uc0ac\uc6a9\uc790\ub4e4\uc5d0\uac8c \ubcf4\uc5ec\uc9c0\ub294 \uc774\ub984\uc785\ub2c8\ub2e4."),t.a.createElement(p,{type:"text",name:"name",className:!l&&(!0===o?"possible":"impossible"),value:r.name?r.name:"",onChange:a}),!1===o&&t.a.createElement("span",{className:"invalid-message"},c),""!==m&&t.a.createElement("span",{className:"success-message"},m),""!==u&&t.a.createElement("span",{className:"invalid-message"},u)),t.a.createElement(w,{themeColor:!0,fullWidth:!0,disabled:!o||l},"\uc218\uc815"))))}},255:function(e,n,r){"use strict";r.r(n);var a=r(6),s=r(12),t=r(0),o=r.n(t),c=r(11),i=r(9),l=r(194),m=r(45);function u(){var e=Object(c.a)(["\n  margin-top: 0.5rem;\n"]);return u=function(){return e},e}function d(){var e=Object(c.a)(["\n  margin-top: 1.25rem;\n  padding: 0.5rem 0.75rem;\n  font-size: 1rem;\n  border-radius: 0.25rem;\n  background-color: ",";\n  color: ",";\n  outline: none;\n  border: 2px solid ",";\n  width: 20rem;\n  &::placeholder {\n    font-family: 'NanumGothic';\n    color: ",";\n  }\n"]);return d=function(){return e},e}function f(){var e=Object(c.a)(["\n  .password-input-section {\n    display: flex;\n    flex-direction: column;\n  }\n  .change-password-result {\n    margin: 1rem 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"]);return f=function(){return e},e}var p=Object(i.c)(l.a)(f()),w=i.c.input(d(),(function(e){return e.theme.profileInfoValueBody}),(function(e){return e.theme.text}),(function(e){return e.theme.body}),(function(e){return e.theme.hoverText})),b=Object(i.c)(m.b)(u()),g=function(e){var n=e.user,r=e.form,a=e.onChange,s=e.valid,t=e.validMessage,c=e.onSubmit,i=e.submitPassword;if(!n)return o.a.createElement(l.b,null,o.a.createElement("span",{className:"error-title"},"\ub85c\uadf8\uc778 \uc815\ubcf4\uac00 \uc5c6\uc5b4\uc694...\u3160"));var m=r.curPassword,u=r.newPassword,d=r.confirmPassword,f=s.curPassword,g=s.newPassword,v=s.confirmPassword,P=t.curPassword,h=t.newPassword,E=t.confirmPassword,N=i.result,j=i.message,O=(n||"").username;return o.a.createElement(p,null,o.a.createElement("div",null,o.a.createElement("form",{className:"change-password-form",onSubmit:c},o.a.createElement("div",{className:"profile-info"},o.a.createElement("span",{className:"profile-info-title"},"\ube44\ubc00\ubc88\ud638 \ubcc0\uacbd"),o.a.createElement("span",{className:"profile-info-explain"},"\ube44\ubc00\ubc88\ud638\ub97c \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),o.a.createElement("div",{className:"password-input-section"},o.a.createElement(w,{type:"password",name:"curPassword",autoComplete:"new-password",placeholder:"\uae30\uc874 \ube44\ubc00\ubc88\ud638 \uc785\ub825",className:!0===f?"possible":"impossible",value:m,onChange:a}),""!==P&&o.a.createElement("span",{className:"invalid-message"},P)),o.a.createElement("div",{className:"password-input-section"},o.a.createElement(w,{type:"password",name:"newPassword",autoComplete:"new-password",placeholder:"\ubcc0\uacbd\ud560 \ube44\ubc00\ubc88\ud638 \uc785\ub825",className:!0===g?"possible":"impossible",value:u,onChange:a}),""!==h&&o.a.createElement("span",{className:"invalid-message"},h)),o.a.createElement("div",{className:"password-input-section"},o.a.createElement(w,{type:"password",name:"confirmPassword",autoComplete:"new-password",placeholder:"\ubcc0\uacbd\ud560 \ube44\ubc00\ubc88\ud638 \ud55c\ubc88 \ub354 \uc785\ub825",className:!0===v?"possible":"impossible",value:d,onChange:a}),""!==E&&o.a.createElement("span",{className:"invalid-message"},E)),o.a.createElement("input",{type:"hidden",name:"username",value:O||""})),o.a.createElement("div",{className:"change-password-result"},""!==j&&N&&o.a.createElement("span",{className:"success-message"},j),""!==j&&!N&&o.a.createElement("span",{className:"invalid-message"},j)),o.a.createElement(b,{themeColor:!0,fullWidth:!0,disabled:!f||!g||!v},"\ube44\ubc00\ubc88\ud638 \ubcc0\uacbd"))))},v=r(19),P=r(27);n.default=function(){var e=Object(v.b)(),n=Object(v.c)((function(e){var n=e.user;return{user:n.user,form:n.password,changePasswordResult:n.changePasswordResult,changePasswordError:n.changePasswordError}})),r=n.user,c=n.form,i=n.changePasswordResult,l=n.changePasswordError,m=Object(t.useState)({curPassword:!1,newPassword:!1,confirmPassword:!1}),u=Object(s.a)(m,2),d=u[0],f=u[1],p=Object(t.useState)({curPassword:"",newPassword:"",confirmPassword:""}),w=Object(s.a)(p,2),b=w[0],h=w[1],E=Object(t.useState)({result:!1,message:""}),N=Object(s.a)(E,2),j=N[0],O=N[1],x=Object(t.useRef)(b);return Object(t.useEffect)((function(){var e=c.newPassword&&c.newPassword.length>=8,n=c.confirmPassword===c.newPassword&&c.confirmPassword.length>=8;f({curPassword:""!==c.curPassword,newPassword:""!==c.newPassword&&e&&c.newPassword!==c.curPassword,confirmPassword:""!==c.confirmPassword&&n}),e||""===c.newPassword?n||""===c.confirmPassword?""!==c.newPassword&&c.newPassword===c.curPassword&&e?h(Object(a.a)({},x.current,{newPassword:"\uae30\uc874 \ube44\ubc00\ubc88\ud638\uc640 \uc77c\uce58\ud569\ub2c8\ub2e4."})):""===c.newPassword||e?h(Object(a.a)({},x.current,{newPassword:""})):(""===c.confirmPassword||n)&&h(Object(a.a)({},x.current,{confirmPassword:""})):h(Object(a.a)({},x.current,{confirmPassword:"\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4!"})):h(Object(a.a)({},x.current,{newPassword:"\ube44\ubc00\ubc88\ud638\ub294 8\uc790 \uc774\uc0c1 \uc785\ub825\ud574\uc57c \ud569\ub2c8\ub2e4!"}))}),[c,x]),Object(t.useEffect)((function(){i?(O({result:!0,message:"\ube44\ubc00\ubc88\ud638\uac00 \uc131\uacf5\uc801\uc73c\ub85c \ubcc0\uacbd\ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),e(Object(P.f)())):l&&(l.response&&412===l.response.status?(O({result:!1,message:""}),h({curPassword:"\uae30\uc874 \ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4",newPassword:"",confirmPassword:""}),f({curPassword:!1,newPassword:!0,confirmPassword:!0})):O({result:!1,message:"\ube44\ubc00\ubc88\ud638 \ubcc0\uacbd\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."}))}),[e,i,l]),Object(t.useEffect)((function(){return function(){e(Object(P.f)())}}),[e]),o.a.createElement(g,{user:r,form:c,onChange:function(n){var r=n.target,s=r.value,t=r.name;"curPassword"===t&&h(Object(a.a)({},b,{curPassword:""})),j.message&&""!==j.message&&O({result:!1,message:""}),e(Object(P.a)({form:"password",key:t,value:s}))},valid:d,validMessage:b,onSubmit:function(n){n.preventDefault();var a=d.curPassword,s=d.newPassword,t=d.confirmPassword,o=r._id,i=c.curPassword,l=c.newPassword;a&&s&&t&&e(Object(P.b)({id:o,password:i,newPassword:l}))},submitPassword:j})}}}]);
//# sourceMappingURL=19.6e89de31.chunk.js.map