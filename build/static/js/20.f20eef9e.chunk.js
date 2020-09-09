(this["webpackJsonpmakeuphara-front-end"]=this["webpackJsonpmakeuphara-front-end"]||[]).push([[20],{178:function(e,n,a){"use strict";var r=a(13);function t(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 3rem;\n  font-family: 'NanumBarunGothic';\n  color: ",";\n  span + span {\n    margin-top: 1rem;\n  }\n  .error-msg {\n    color: ",";\n  }\n"]);return t=function(){return e},e}var s=a(11).c.div(t(),(function(e){return e.theme.text}),(function(e){return e.theme.errorText}));n.a=s},194:function(e,n,a){"use strict";a.d(n,"a",(function(){return d})),a.d(n,"b",(function(){return b}));var r=a(13),t=a(0),s=a.n(t),o=a(11),c=a(47),i=a(178);function l(){var e=Object(r.a)(["\n  margin: 2rem;\n"]);return l=function(){return e},e}function m(){var e=Object(r.a)(["\n  margin-top: 0.5rem;\n"]);return m=function(){return e},e}function u(){var e=Object(r.a)(["\n  margin-top: 1.25rem;\n  padding: 0.5rem 0.75rem;\n  font-size: 1.125rem;\n  font-family: 'Raleway', 'NanumGothic';\n  border-radius: 0.25rem;\n  background-color: ",";\n  color: ",";\n  outline: none;\n  border: 2px solid ",";\n"]);return u=function(){return e},e}function f(){var e=Object(r.a)(["\n  margin-top: 2rem;\n  margin-left: 1rem;\n  display: flex;\n  flex-direction: column;\n  color: ",";\n\n  .profile-info {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 1rem;\n  }\n  .profile-info-title {\n    font-weight: 300;\n    font-size: 1.5rem;\n    font-family: 'Raleway', 'NanumGothic';\n  }\n  .profile-info-explain {\n    font-size: 1rem;\n    font-family: 'NanumGothic';\n    margin-top: 0.25rem;\n    color: ",";\n  }\n  .profile-info-value {\n    margin-top: 1.25rem;\n    span {\n      padding: 0.25rem 0.5rem;\n      font-size: 1.125rem;\n      font-family: 'Raleway', 'NanumGothic';\n      border-radius: 0.25rem;\n      background-color: ",";\n    }\n  }\n  hr {\n    border: 0.5px solid ",";\n  }\n  .profile-form {\n    margin: 1.5rem 0;\n    display: flex;\n    flex-direction: column;\n  }\n  .value-provider {\n    text-transform: uppercase;\n  }\n  .possible {\n    border: 2px solid ",";\n  }\n  .impossible {\n    border: 2px solid ",";\n  }\n  .invalid-message {\n    font-weight: 300;\n    color: ",";\n    margin-top: 0.5rem;\n  }\n  .success-message {\n    font-weight: 300;\n    color: ",";\n    margin-top: 0.5rem;\n  }\n"]);return f=function(){return e},e}var d=o.c.div(f(),(function(e){return e.theme.text}),(function(e){return e.theme.categoryBorder}),(function(e){return e.theme.profileInfoValueBody}),(function(e){return e.theme.categoryBorder}),(function(e){return e.theme.profileInputValid}),(function(e){return e.theme.profileInputInValid}),(function(e){return e.theme.errorText}),(function(e){return e.theme.categoryBorder})),p=o.c.input(u(),(function(e){return e.theme.profileInfoValueBody}),(function(e){return e.theme.text}),(function(e){return e.theme.body})),w=Object(o.c)(c.b)(m()),b=Object(o.c)(i.a)(l());n.c=function(e){var n=e.user,a=e.form,r=e.onChange,t=e.onSubmit,o=e.isValid,c=e.validMessage,i=e.resultMessage;if(!n)return s.a.createElement(b,null,s.a.createElement("span",{className:"error-title"},"\ub85c\uadf8\uc778 \uc815\ubcf4\uac00 \uc5c6\uc5b4\uc694...\u3160"));var l=n.username,m=n.provider,u=o.existName,f=o.equalName,g=c.existName,v=i.submit,h=i.error;return s.a.createElement(d,null,s.a.createElement("div",null,s.a.createElement("div",{className:"profile-info"},s.a.createElement("span",{className:"profile-info-title"},"ID"),s.a.createElement("div",{className:"profile-info-value"},s.a.createElement("span",null,l))),s.a.createElement("div",{className:"profile-info"},s.a.createElement("span",{className:"profile-info-title"},"\ub85c\uadf8\uc778 \uc720\ud615"),s.a.createElement("span",{className:"profile-info-explain"},"\uc5b4\ub5a4 \ubc29\uc2dd\uc73c\ub85c \ub85c\uadf8\uc778\ud588\ub294\uc9c0\ub97c \ud655\uc778\ud569\ub2c8\ub2e4."),s.a.createElement("div",{className:"profile-info-value"},s.a.createElement("span",{className:"value-provider"},m))),s.a.createElement("hr",null),s.a.createElement("form",{className:"profile-form",onSubmit:t},s.a.createElement("div",{className:"profile-info"},s.a.createElement("span",{className:"profile-info-title"},"DISPLAY NAME"),s.a.createElement("span",{className:"profile-info-explain"},"\ub2e4\ub978 \uc0ac\uc6a9\uc790\ub4e4\uc5d0\uac8c \ubcf4\uc5ec\uc9c0\ub294 \uc774\ub984\uc785\ub2c8\ub2e4."),s.a.createElement(p,{type:"text",name:"name",className:!f&&(!0===u?"possible":"impossible"),value:a.name?a.name:"",onChange:r}),!1===u&&s.a.createElement("span",{className:"invalid-message"},g),""!==v&&s.a.createElement("span",{className:"success-message"},v),""!==h&&s.a.createElement("span",{className:"invalid-message"},h)),s.a.createElement(w,{themeColor:!0,fullWidth:!0,disabled:!u||f},"\uc218\uc815"))))}},264:function(e,n,a){"use strict";a.r(n);var r=a(1),t=a(9),s=a(0),o=a.n(s),c=a(13),i=a(11),l=a(194),m=a(47);function u(){var e=Object(c.a)(["\n  margin-top: 0.5rem;\n"]);return u=function(){return e},e}function f(){var e=Object(c.a)(["\n  margin-top: 1.25rem;\n  padding: 0.5rem 0.75rem;\n  font-size: 1rem;\n  border-radius: 0.25rem;\n  background-color: ",";\n  color: ",";\n  outline: none;\n  border: 2px solid ",";\n  width: 20rem;\n  &::placeholder {\n    font-family: 'NanumGothic';\n    color: ",";\n  }\n"]);return f=function(){return e},e}function d(){var e=Object(c.a)(["\n  .password-input-section {\n    display: flex;\n    flex-direction: column;\n  }\n  .change-password-result {\n    margin: 1rem 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"]);return d=function(){return e},e}var p=Object(i.c)(l.a)(d()),w=i.c.input(f(),(function(e){return e.theme.profileInfoValueBody}),(function(e){return e.theme.text}),(function(e){return e.theme.body}),(function(e){return e.theme.hoverText})),b=Object(i.c)(m.b)(u()),g=function(e){var n=e.user,a=e.form,r=e.onChange,t=e.isValid,s=e.validMessage,c=e.onSubmit,i=e.submitPassword;if(!n)return o.a.createElement(l.b,null,o.a.createElement("span",{className:"error-title"},"\ub85c\uadf8\uc778 \uc815\ubcf4\uac00 \uc5c6\uc5b4\uc694...\u3160"));var m=a.curPassword,u=a.newPassword,f=a.confirmPassword,d=t.curPassword,g=t.newPassword,v=t.confirmPassword,h=s.curPassword,P=s.newPassword,E=s.confirmPassword,j=i.result,O=i.message,N=(n||"").username;return o.a.createElement(p,null,o.a.createElement("div",null,o.a.createElement("form",{className:"change-password-form",onSubmit:c},o.a.createElement("div",{className:"profile-info"},o.a.createElement("span",{className:"profile-info-title"},"\ube44\ubc00\ubc88\ud638 \ubcc0\uacbd"),o.a.createElement("span",{className:"profile-info-explain"},"\ube44\ubc00\ubc88\ud638\ub97c \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),o.a.createElement("div",{className:"password-input-section"},o.a.createElement(w,{type:"password",name:"curPassword",autoComplete:"new-password",placeholder:"\uae30\uc874 \ube44\ubc00\ubc88\ud638 \uc785\ub825",className:!0===d?"possible":"impossible",value:m,onChange:r}),h&&o.a.createElement("span",{className:"invalid-message"},h)),o.a.createElement("div",{className:"password-input-section"},o.a.createElement(w,{type:"password",name:"newPassword",autoComplete:"new-password",placeholder:"\ubcc0\uacbd\ud560 \ube44\ubc00\ubc88\ud638 \uc785\ub825",className:!0===g?"possible":"impossible",value:u,onChange:r}),P&&o.a.createElement("span",{className:"invalid-message"},P)),o.a.createElement("div",{className:"password-input-section"},o.a.createElement(w,{type:"password",name:"confirmPassword",autoComplete:"new-password",placeholder:"\ubcc0\uacbd\ud560 \ube44\ubc00\ubc88\ud638 \ud55c\ubc88 \ub354 \uc785\ub825",className:!0===v?"possible":"impossible",value:f,onChange:r}),E&&o.a.createElement("span",{className:"invalid-message"},E)),o.a.createElement("input",{type:"hidden",name:"username",value:N||""})),o.a.createElement("div",{className:"change-password-result"},j&&O&&o.a.createElement("span",{className:"success-message"},O),!j&&O&&o.a.createElement("span",{className:"invalid-message"},O)),o.a.createElement(b,{themeColor:!0,fullWidth:!0,disabled:!d||!g||!v},"\ube44\ubc00\ubc88\ud638 \ubcc0\uacbd"))))},v=a(20),h=a(29);n.default=function(){var e=Object(v.b)(),n=Object(v.c)((function(e){var n=e.user;return{user:n.user,form:n.password,changePasswordResult:n.changePasswordResult,changePasswordError:n.changePasswordError}})),a=n.user,c=n.form,i=n.changePasswordResult,l=n.changePasswordError,m=Object(s.useState)({curPassword:!1,newPassword:!1,confirmPassword:!1}),u=Object(t.a)(m,2),f=u[0],d=u[1],p=Object(s.useState)({curPassword:null,newPassword:null,confirmPassword:null}),w=Object(t.a)(p,2),b=w[0],P=w[1],E=Object(s.useState)({result:!1,message:null}),j=Object(t.a)(E,2),O=j[0],N=j[1],x=Object(s.useCallback)((function(n){var a=n.target,t=a.value,s=a.name;"curPassword"===s&&P(Object(r.a)(Object(r.a)({},b),{},{curPassword:null})),O.message&&N({result:!1,message:null}),e(Object(h.a)({form:"password",key:s,value:t}))}),[e,O,b]),y=Object(s.useCallback)((function(n){n.preventDefault();var r=f.curPassword,t=f.newPassword,s=f.confirmPassword,o=a._id,i=c.curPassword,l=c.newPassword;r&&t&&s&&e(Object(h.b)({id:o,password:i,newPassword:l}))}),[e,c,a,f]);return Object(s.useEffect)((function(){var e=c.newPassword&&c.newPassword.length>=8,n=c.confirmPassword===c.newPassword&&c.confirmPassword.length>=8;d({curPassword:""!==c.curPassword,newPassword:""!==c.newPassword&&e&&c.newPassword!==c.curPassword,confirmPassword:""!==c.confirmPassword&&n}),e||""===c.newPassword?""!==c.newPassword&&c.newPassword===c.curPassword&&e?P((function(e){return Object(r.a)(Object(r.a)({},e),{},{newPassword:"\uae30\uc874 \ube44\ubc00\ubc88\ud638\uc640 \uc77c\uce58\ud569\ub2c8\ub2e4."})})):(""===c.newPassword||e)&&P((function(e){return Object(r.a)(Object(r.a)({},e),{},{newPassword:""})})):P((function(e){return Object(r.a)(Object(r.a)({},e),{},{newPassword:"\ube44\ubc00\ubc88\ud638\ub294 8\uc790 \uc774\uc0c1 \uc785\ub825\ud574\uc57c \ud569\ub2c8\ub2e4!"})})),n||""===c.confirmPassword?(""===c.confirmPassword||n)&&P((function(e){return Object(r.a)(Object(r.a)({},e),{},{confirmPassword:""})})):P((function(e){return Object(r.a)(Object(r.a)({},e),{},{confirmPassword:"\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4!"})}))}),[c]),Object(s.useEffect)((function(){i?(N({result:!0,message:"\ube44\ubc00\ubc88\ud638\uac00 \uc131\uacf5\uc801\uc73c\ub85c \ubcc0\uacbd\ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),e(Object(h.f)())):l&&(l.response&&412===l.response.status?(N({result:!1,message:null}),P((function(e){return Object(r.a)(Object(r.a)({},e),{},{curPassword:"\uae30\uc874 \ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4"})})),d((function(e){return Object(r.a)(Object(r.a)({},e),{},{curPassword:!1})}))):N({result:!1,message:"\ube44\ubc00\ubc88\ud638 \ubcc0\uacbd\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4."}))}),[e,i,l]),Object(s.useEffect)((function(){return function(){e(Object(h.f)())}}),[e]),o.a.createElement(g,{user:a,form:c,onChange:x,isValid:f,validMessage:b,onSubmit:y,submitPassword:O})}}}]);
//# sourceMappingURL=20.f20eef9e.chunk.js.map