(this["webpackJsonpmesto-react-auth"]=this["webpackJsonpmesto-react-auth"]||[]).push([[0],{27:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(18),s=n.n(c),i=n(6),r=(n(27),n(21)),l=n(2),u=n.p+"static/media/logo.bbe2a6ea.svg",m=n(3),d=n(0);var b=function(e){var t=Object(m.h)(),n="/sign-in"===t.pathname,a="/"===t.pathname,c=o.a.useState(!1),s=Object(l.a)(c,2),r=s[0],b=s[1];return Object(d.jsxs)("header",{className:"header ".concat(r?"":"header__block"," ").concat(r?"header__column":""),children:[Object(d.jsxs)("div",{className:"header__container ".concat(r?"header__container_column":""," "),children:[Object(d.jsx)("img",{src:u,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",className:"header__logo"}),Object(d.jsx)("button",{type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u0435\u043d\u044e",onClick:function(){b(!1)},className:"popup__close popup__close_form popup__close_menu ".concat(r?"popup__close_active":"")})]}),Object(d.jsxs)("div",{className:"header__burger-menu ".concat(!e.islogOn||r?"header__burger-menu_inactive":""),onClick:function(){b(!0)},children:[Object(d.jsx)("div",{className:"header__burger-item"}),Object(d.jsx)("div",{className:"header__burger-item"}),Object(d.jsx)("div",{className:"header__burger-item"})]}),(!e.isLoading||a)&&Object(d.jsxs)("nav",{className:"header__nav-menu ".concat(e.islogOn&&!r?"header__nav-menu_inactive":""," ").concat(r?"header__nav-menu_column":""," "),children:[Object(d.jsx)("p",{className:"header__email",children:e.islogOn?e.userEmail:""}),n?Object(d.jsx)(i.c,{className:"header__nav-item header__nav-item_mob",activeClassName:"header_nav-item_active",to:"/sign-up",children:e.islogOn?"":"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}):Object(d.jsx)(i.c,{onClick:e.islogOn?function(){e.onSignOut(),b(!1)}:function(){},className:"header__nav-item ".concat(a?"header__nav-item_active":"header__nav-item_mob"),to:"/sign-in",children:e.islogOn?"\u0412\u044b\u0439\u0442\u0438":"\u0412\u043e\u0439\u0442\u0438"})]})]})},j=o.a.createContext();var p=function(e){var t=e.card,n=e.onCardClick,a=e.onCardLike,c=e.onCardDelete,s=o.a.useContext(j),i=t.owner._id===s._id,r="element__remove ".concat(i?"element__remove_visible":"element__remove_hidden"),l=t.likes.some((function(e){return e._id===s._id})),u="element__emotion ".concat(l?"element__emotion_active":"element__emotion");return Object(d.jsxs)("li",{className:"element",children:[Object(d.jsx)("img",{src:t.link,alt:t.name,className:"element__image",onClick:function(){n(t)}}),Object(d.jsx)("button",{type:"button","aria-label":"\u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",className:r,onClick:function(){c(t)}}),Object(d.jsxs)("div",{className:"element__description",children:[Object(d.jsx)("h2",{className:"element__title",children:t.name}),Object(d.jsxs)("div",{className:"element__rate",children:[Object(d.jsx)("button",{type:"button","aria-label":"\u043e\u0446\u0435\u043d\u0438\u0442\u044c \u0444\u043e\u0442\u043e",className:u,onClick:function(){a(t)}}),Object(d.jsx)("h3",{className:"element__number",children:t.likes.length})]})]})]})};var h=function(e){var t=e.onEditProfile,n=e.onAddPlace,a=e.onEditAvatar,c=e.onCardClick,s=e.onCardLike,i=e.onCardDelete,r=e.cards,l=o.a.useContext(j);return Object(d.jsxs)("main",{className:"content",children:[Object(d.jsxs)("section",{className:"profile",children:[Object(d.jsxs)("div",{className:"profile__edit-avatar",children:[Object(d.jsx)("img",{src:"".concat(l.avatar),alt:"\u0430\u0432\u0442\u0430\u0440\u043a\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:"profile__avatar"}),Object(d.jsx)("button",{type:"button","aria-label":"\u043e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043b\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0438",onClick:a,className:"profile__avatar-button"})]}),Object(d.jsxs)("div",{className:"profile__info",children:[Object(d.jsxs)("div",{className:"profile__edit",children:[Object(d.jsx)("h1",{className:"profile__title",children:l.name}),Object(d.jsx)("p",{className:"profile__subtitle",children:l.about})]}),Object(d.jsx)("button",{type:"button","aria-label":"\u043e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043f\u0430\u043f",className:"profile__edit-button",onClick:t})]}),Object(d.jsx)("button",{type:"button","aria-label":"\u043e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043b\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0444\u043e\u0442\u043e",className:"profile__add-button",onClick:n})]}),Object(d.jsx)("section",{className:"elements",children:Object(d.jsx)("ul",{className:"elements__table",children:r.map((function(e){return Object(d.jsx)(p,{card:e,onCardClick:c,onCardLike:s,onCardDelete:i},e._id)}))})})]})};var _=function(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Mesto Russia"})})};var f=function(e){var t=e.card,n=e.onClose;return Object(d.jsx)("div",{className:"popup popup_images ".concat(t.link?"popup_opened":""),children:Object(d.jsxs)("div",{className:"popup__content popup__content_image",children:[Object(d.jsx)("button",{type:"button","aria-label":"\u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043f\u0430\u043f",className:"popup__close popup__close_image",onClick:n}),Object(d.jsxs)("figure",{children:[Object(d.jsx)("img",{src:t.link,alt:t.name,className:"popup__image"}),Object(d.jsx)("figcaption",{className:"popup__title",children:t.name})]})]})})},O=n(11),v=n(12),x=new(function(){function e(t){var n=t.baseUrl,a=t.token;Object(O.a)(this,e),this.handleResponse=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))},this._baseUrl=n,this._token=a}return Object(v.a)(e,[{key:"getUser",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:this._token}}).then(this.handleResponse)}},{key:"setUser",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:"".concat(e.name),about:"".concat(e.about)})}).then(this.handleResponse)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatar})}).then(this.handleResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this.handleResponse)}},{key:"addCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:"".concat(e.name),link:"".concat(e.link)})}).then(this.handleResponse)}},{key:"removeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this.handleResponse)}},{key:"changeCardLikeStatus",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this.handleResponse)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-30",token:"15dc4595-bdc3-4503-bc80-ce15dbc42c36"});var g=function(e){return Object(d.jsx)("div",{className:"popup ".concat(e.isOpen?"popup_opened":""),children:Object(d.jsxs)("div",{className:"popup__content popup__content_".concat(e.name),children:[Object(d.jsx)("button",{type:"button","aria-label":"\u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043f\u0430\u043f",className:"popup__close popup__close_form popup__close_".concat(e.name),onClick:e.onClose}),Object(d.jsxs)("form",{name:"".concat(e.name),className:"form form_".concat(e.name),onSubmit:e.onSubmit,children:[Object(d.jsx)("h2",{className:"form__title",children:e.title}),e.children,Object(d.jsx)("fieldset",{className:"form__handler",children:Object(d.jsx)("button",{type:"submit",className:"form__button form__button_".concat(e.button),children:e.buttonSubmitText})})]})]})})};var C=function(e){var t=o.a.useContext(j),n=o.a.useState(""),a=Object(l.a)(n,2),c=a[0],s=a[1],i=o.a.useState(""),r=Object(l.a)(i,2),u=r[0],m=r[1];return o.a.useEffect((function(){s(t.name),m(t.about)}),[t,e.isOpen]),Object(d.jsx)(g,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",button:"add",buttonSubmitText:e.buttonSubmitText,isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:c,about:u})},children:Object(d.jsxs)("fieldset",{className:"form__input-container",children:[Object(d.jsx)("input",{type:"text",className:"form__item form__item_input_name",id:"firstname",name:"name",required:!0,minLength:"2",maxLength:"40",autoComplete:"off",placeholder:"\u0418\u043c\u044f",value:c||"",onChange:function(e){s(e.target.value)}}),Object(d.jsx)("span",{id:"firstname-error",className:"error"}),Object(d.jsx)("input",{type:"text",className:"form__item form__item_input_job",id:"jobname",name:"job",required:!0,minLength:"2",maxLength:"200",autoComplete:"off",placeholder:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u044e \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c",value:u||"",onChange:function(e){m(e.target.value)}}),Object(d.jsx)("span",{id:"jobname-error",className:"error"})]})})};var N=function(e){var t=o.a.useRef();return o.a.useEffect((function(){t.current.value=""}),[e.isOpen]),Object(d.jsx)(g,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",button:"add",buttonSubmitText:e.buttonSubmitText,isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},children:Object(d.jsxs)("fieldset",{className:"form__input-container",children:[Object(d.jsx)("input",{type:"url",className:"form__item form__item_input_avatar",id:"avatar",name:"avatar",required:!0,autoComplete:"off",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",ref:t}),Object(d.jsx)("span",{id:"avatar-error",className:"error"})]})})};var k=function(e){var t=o.a.useState(""),n=Object(l.a)(t,2),a=n[0],c=n[1],s=o.a.useState(""),i=Object(l.a)(s,2),r=i[0],u=i[1];return o.a.useEffect((function(){c(""),u("")}),[e.isOpen]),Object(d.jsx)(g,{name:"edit",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",button:"add",buttonSubmitText:e.buttonSubmitText,isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:a,link:r})},children:Object(d.jsxs)("fieldset",{className:"form__input-container",children:[Object(d.jsx)("input",{type:"text",className:"form__item form__item_input_title",id:"title",name:"name",required:!0,minLength:"2",maxLength:"30",autoComplete:"off",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:a,onChange:function(e){c(e.target.value)}}),Object(d.jsx)("span",{id:"title-error",className:"error"}),Object(d.jsx)("input",{type:"url",className:"form__item form__item_input_link",id:"link",name:"link",required:!0,autoComplete:"off",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",value:r,onChange:function(e){u(e.target.value)}}),Object(d.jsx)("span",{id:"link-error",className:"error"})]})})};var S=function(e){return Object(d.jsx)(g,{name:"remove",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",button:"add-remove",buttonSubmitText:e.buttonSubmitText,isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onSubmitDeleteCard(e.card)}})},y=n(9),T=n(22),L=["component"],E=function(e){var t=e.component,n=Object(T.a)(e,L);return Object(d.jsx)(m.b,{children:function(){return n.islogOn?Object(d.jsx)(t,Object(y.a)({},n)):Object(d.jsx)(m.a,{to:"./login"})}})},U=n(13);var w=function(e){var t="/sign-up"===Object(m.h)().pathname,n=o.a.useState({}),a=Object(l.a)(n,2),c=a[0],s=a[1];function r(e){var t=e.target,n=t.name,a=t.value;s(Object(y.a)(Object(y.a)({},c),{},Object(U.a)({},n,a)))}return Object(d.jsxs)("div",{className:"auth",children:[Object(d.jsx)("h2",{className:"auth__welcome",children:e.title}),Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.onSubmit({email:c.email,password:c.password})},name:"".concat(e.name),className:"auth__form",noValidate:!0,children:["Email",Object(d.jsx)("label",{htmlFor:"email",className:"auth__label",children:Object(d.jsx)("input",{id:"email",name:"email",type:"email",value:c.email||"",className:"auth__input",placeholder:"Email",required:!0,minLength:"2",maxLength:"30",onChange:r})}),Object(d.jsx)("label",{htmlFor:"password",className:"auth__label",children:Object(d.jsx)("input",{id:"password",name:"password",type:"password",className:"auth__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:c.password||"",required:!0,minLength:"6",maxLength:"20",onChange:r})}),Object(d.jsx)("button",{type:"submit",className:"auth__button",children:e.buttonText})]}),t&&Object(d.jsxs)("div",{className:"auth__signin",children:[Object(d.jsx)("p",{className:"auth__text",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? "}),Object(d.jsx)(i.b,{to:"/sign-in",className:"auth__login-link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})};var P=function(e){return Object(d.jsx)(d.Fragment,{children:!e.isLoading&&Object(d.jsx)(w,{title:"\u0412\u0445\u043e\u0434",name:"login",buttonText:"\u0412\u043e\u0439\u0442\u0438",onSubmit:e.onSubmitLogin})})};var R=function(e){return Object(d.jsx)(w,{title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",name:"register",buttonText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",onSubmit:e.onSubmitRegister})},D=new(function(){function e(t){var n=t.baseUrl;Object(O.a)(this,e),this.handleResponse=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))},this._baseUrl=n}return Object(v.a)(e,[{key:"register",value:function(e){var t=e.email,n=e.password;return fetch("".concat(this._baseUrl,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:n,email:t})}).then(this.handleResponse)}},{key:"login",value:function(e){var t=e.email,n=e.password;return fetch("".concat(this._baseUrl,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:n,email:t})}).then(this.handleResponse)}},{key:"checkToken",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(this.handleResponse)}}]),e}())({baseUrl:"https://auth.nomoreparties.co"});var A=function(e){return Object(d.jsx)("div",{className:"popup ".concat(e.isOpen?"popup_opened":""),children:Object(d.jsxs)("div",{className:"popup__content popup__content_info",children:[Object(d.jsx)("button",{type:"button","aria-label":"\u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043f\u0430\u043f",className:"popup__close popup__close_form popup__close_info",onClick:e.onClose}),Object(d.jsxs)("div",{className:"info",children:[Object(d.jsx)("div",{className:"popup__info-image ".concat(e.isLuck?"":"popup__info-image_type_error")}),Object(d.jsx)("h2",{className:"info__title",children:e.isLuck?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437."})]})]})})};var z=function(){var e=o.a.useState(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],c=o.a.useState(!1),s=Object(l.a)(c,2),i=s[0],u=s[1],p=o.a.useState(!1),O=Object(l.a)(p,2),v=O[0],g=O[1],y=o.a.useState(!1),T=Object(l.a)(y,2),L=T[0],U=T[1],w=o.a.useState(!1),z=Object(l.a)(w,2),q=z[0],F=z[1],I=o.a.useState(null),J=Object(l.a)(I,2),B=J[0],G=J[1],H=o.a.useState(null),M=Object(l.a)(H,2),V=M[0],K=M[1],Q=o.a.useState(!0),W=Object(l.a)(Q,2),X=W[0],Y=W[1],Z=Object(m.g)(),$=o.a.useState({link:"",name:""}),ee=Object(l.a)($,2),te=ee[0],ne=ee[1],ae=o.a.useState({}),oe=Object(l.a)(ae,2),ce=oe[0],se=oe[1],ie=o.a.useState(""),re=Object(l.a)(ie,2),le=re[0],ue=re[1],me=o.a.useState(""),de=Object(l.a)(me,2),be=de[0],je=de[1],pe=o.a.useState([]),he=Object(l.a)(pe,2),_e=he[0],fe=he[1],Oe=o.a.useState({}),ve=Object(l.a)(Oe,2),xe=ve[0],ge=ve[1],Ce=o.a.useState("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),Ne=Object(l.a)(Ce,2),ke=Ne[0],Se=Ne[1],ye=o.a.useState("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),Te=Object(l.a)(ye,2),Le=Te[0],Ee=Te[1],Ue=o.a.useState("\u0421\u043e\u0437\u0434\u0430\u0442\u044c"),we=Object(l.a)(Ue,2),Pe=we[0],Re=we[1],De=o.a.useState("\u0414\u0430"),Ae=Object(l.a)(De,2),ze=Ae[0],qe=Ae[1];function Fe(){a(!1),u(!1),g(!1),U(!1),F(!1),ne({link:"",name:""}),ge({link:"",name:""})}function Ie(){Fe(),B&&Be({email:le,password:be})}function Je(){Y(!0);var e=localStorage.getItem("jwt");e?D.checkToken(e).then((function(e){ue(e.data.email),K(!0),Y(!1),Z.push("/")})).catch((function(){G(!1),F(!0)})):Y(!1)}function Be(e){D.login(e).then((function(e){localStorage.setItem("jwt",e.token),Je()})).catch((function(){G(!1),F(!0)}))}return o.a.useEffect((function(){function e(e){e.target.classList.contains("popup")&&(B?Ie():Fe())}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[B,n,i,v,te]),o.a.useEffect((function(){function e(e){"Escape"===e.key&&(B?Ie():Fe())}return document.addEventListener("keyup",e),function(){document.removeEventListener("keyup",e)}}),[B,n,i,v,te]),o.a.useEffect((function(){Je(),G(!1)}),[]),o.a.useEffect((function(){Promise.all([x.getUser(),x.getInitialCards()]).then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];se(n),fe(a)})).catch((function(e){console.log(e)}))}),[]),Object(d.jsx)("div",{className:"page",children:Object(d.jsxs)(j.Provider,{value:ce,children:[Object(d.jsx)(b,{islogOn:V,userEmail:le,onSignOut:function(){K(!1),Z.push("/sign-in"),localStorage.removeItem("jwt"),ue(""),je(""),G(null),Y(!1)},isLoading:X}),Object(d.jsxs)(m.d,{children:[Object(d.jsx)(E,{exact:!0,path:"/",component:h,onEditAvatar:function(){a(!0)},onEditProfile:function(){u(!0)},onAddPlace:function(){g(!0)},onCardClick:function(e){ne(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===ce._id}));x.changeCardLikeStatus(e._id,!t).then((function(t){fe((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log(e)}))},onCardDelete:function(e){U(!0),ge(e)},cards:_e,islogOn:V}),Object(d.jsx)(m.b,{path:"/sign-up",children:Object(d.jsx)(R,{onSubmitRegister:function(e){D.register(e).then((function(t){ue(t.data.email),je(e.password),G(!0),F(!0)})).catch((function(){G(!1),F(!0)}))}})}),Object(d.jsx)(m.b,{path:"/sign-in",children:Object(d.jsx)(P,{onSubmitLogin:Be,isLoading:X})}),Object(d.jsx)(m.b,{children:Object(d.jsx)(m.a,{to:V?"/":"/sign-in"})})]}),Object(d.jsx)(_,{}),Object(d.jsx)(C,{isOpen:i,onClose:Fe,onUpdateUser:function(e){Se("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435..."),x.setUser(e).then((function(e){se(e),Fe()})).catch((function(e){console.log(e)})).finally((function(){Se("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")}))},buttonSubmitText:ke}),Object(d.jsx)(k,{isOpen:v,onClose:Fe,onAddPlace:function(e){Re("\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435..."),x.addCard(e).then((function(e){fe([e].concat(Object(r.a)(_e))),Fe()})).catch((function(e){console.log(e)})).finally((function(){Re("\u0421\u043e\u0437\u0434\u0430\u0442\u044c")}))},buttonSubmitText:Pe}),Object(d.jsx)(N,{isOpen:n,onClose:Fe,onUpdateAvatar:function(e){Ee("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435..."),x.setUserAvatar(e).then((function(e){se(e),Fe()})).catch((function(e){console.log(e)})).finally((function(){Ee("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")}))},buttonSubmitText:Le}),Object(d.jsx)(S,{isOpen:L,onClose:Fe,onSubmitDeleteCard:function(e){qe("\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435..."),x.removeCard(e._id).then((function(){var t=_e.filter((function(t){return t._id!==e._id}));fe(t),Fe()})).catch((function(e){console.log(e)})).finally((function(){qe("\u0414\u0430")}))},card:xe,buttonSubmitText:ze}),Object(d.jsx)(f,{card:te,onClose:Fe}),Object(d.jsx)(A,{isOpen:q,onClose:Ie,isLuck:B})]})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),o(e),c(e),s(e)}))};s.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(i.a,{children:Object(d.jsx)(z,{})})}),document.getElementById("root")),q()}},[[37,1,2]]]);
//# sourceMappingURL=main.43d6e12e.chunk.js.map