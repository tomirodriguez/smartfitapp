(this["webpackJsonpsmart-fit-app"]=this["webpackJsonpsmart-fit-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(8),o=a.n(l),r=(a(14),a(15),a(16),a(1));a(17);function s(e){return c.a.createElement("form",{className:"socialMediaLogin d-flex flex-column justify-content-between py-5",onSubmit:function(){e.onSocialMediaLogIn()}},c.a.createElement("h1",{className:"brand text-center"},"SMARTFIT"),c.a.createElement("p",{className:"socialLogInText mb-4"},"Entra con alguna red social para hacerlo mas rapido"),c.a.createElement("button",{className:"btn facebook py-2 my-2  w-100"},c.a.createElement("div",{className:"buttonContent d-flex align-items-center justify-content-center"},c.a.createElement("i",{className:"fab fa-facebook-f mr-3"}),c.a.createElement("div",{className:""},"Entra con facebook"))),c.a.createElement("button",{className:"btn twitter py-2 my-2 w-100"},c.a.createElement("div",{className:"buttonContent d-flex align-items-center justify-content-center"},c.a.createElement("i",{className:"fab fa-twitter mr-3"}),c.a.createElement("div",{className:""},"Entra con twitter"))),c.a.createElement("button",{className:"btn google py-2 my-2 w-100"},c.a.createElement("div",{className:"buttonContent d-flex align-items-center justify-content-center"},c.a.createElement("i",{className:"fab fa-google mr-3"}),c.a.createElement("div",{className:""},"Entra con google"))))}a(18);function i(e){var t=Object(n.useState)(!1),a=Object(r.a)(t,2),l=a[0],o=a[1],s=function(e){o(!l),e.target.previousSibling.focus()};return c.a.createElement("div",{className:"p-2 my-3  d-flex align-items-center passwordInput"},c.a.createElement("input",{className:"flex-grow-1",type:l?"text":"password",placeholder:"Contrasena",onChange:function(t){return e.onPasswordChange(t)}}),l?c.a.createElement("i",{className:"far fa-eye",onClick:s}):c.a.createElement("i",{className:"far fa-eye-slash",onClick:s}))}function m(e){var t=Object(n.useState)(""),a=Object(r.a)(t,2),l=(a[0],a[1]),o=Object(n.useState)(""),s=Object(r.a)(o,2),m=(s[0],s[1]),u=Object(n.useState)(!1),f=Object(r.a)(u,2),d=f[0],p=f[1];return c.a.createElement("form",{className:"d-flex flex-column justify-content-between",onSubmit:function(t){e.onLogIn(t)}},c.a.createElement("div",{className:"d-flex flex-column align-items-center justify-content-center"},c.a.createElement("h2",{className:"text-center font-weight-bold"},"Ingresa a tu cuenta"),c.a.createElement("p",null,"Todavia no tenes una?",c.a.createElement("span",{className:"link",onClick:function(){return e.onRegisterClicked()}}," Registrate! "))),c.a.createElement("div",{className:"d-flex flex-column justify-content-between"},c.a.createElement("input",{className:"p-2 my-3 defaultInput",type:"text",placeholder:"Direccion de mail",onChange:function(e){l(e.target.value)}}),c.a.createElement(i,{onPasswordChange:function(e){m(e.target.value)}}),c.a.createElement("div",{className:"d-flex justify-content-between align-items-center my-3 font-size-small "},c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",name:"remember",id:"remember",checked:d,onChange:function(){p(!d)}}),c.a.createElement("span",{className:"ml-2"},"Recordame")),c.a.createElement("div",{className:"link"},"Recuperar contrasena"))),c.a.createElement("button",{className:"py-2 btn btn-primary"},"Entra con tu mail"))}function u(e){var t=Object(n.useState)(""),a=Object(r.a)(t,2),l=(a[0],a[1]),o=Object(n.useState)(""),s=Object(r.a)(o,2),m=(s[0],s[1]),u=Object(n.useState)(""),f=Object(r.a)(u,2),d=(f[0],f[1]);return c.a.createElement("form",{className:"d-flex flex-column justify-content-between",onSubmit:function(t){e.onSignIn(t)}},c.a.createElement("div",{className:"d-flex flex-column align-items-center justify-content-center"},c.a.createElement("h2",{className:"text-center font-weight-bold"},"Crea gratis tu cuenta!"),c.a.createElement("p",null,"Ya tenes una cuenta?",c.a.createElement("span",{className:"link",onClick:function(){return e.onLogInClicked()}}," Entra! "))),c.a.createElement("div",{className:"d-flex flex-column"},c.a.createElement("input",{className:"p-2 my-3 defaultInput",type:"text",placeholder:"Direccion de mail",onChange:function(e){l(e.target.value)}}),c.a.createElement("input",{className:"p-2 my-3 defaultInput",type:"text",placeholder:"Nombre",onChange:function(e){m(e.target.value)}}),c.a.createElement(i,{onPasswordChange:function(e){d(e.target.value)}})),c.a.createElement("button",{className:"py-2 btn btn-primary"},"Registrate con tu mail"))}var f=a(3);a(21);f.initializeApp({apiKey:"AIzaSyAbxr7tiFQ0IHF6iuB2uAYBpRYm2VJMXuQ",authDomain:"smart-fit-app.firebaseapp.com",databaseURL:"https://smart-fit-app.firebaseio.com",projectId:"smart-fit-app",storageBucket:"smart-fit-app.appspot.com",messagingSenderId:"10757053827",appId:"1:10757053827:web:5a91cf7ade97ec65116ab6",measurementId:"G-B0KZKMLTV7"});var d=f.auth();function p(){var e=Object(n.useState)(!0),t=Object(r.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!0),i=Object(r.a)(o,2),f=(i[0],i[1]);return c.a.createElement("div",{className:"d-flex align-items-center h-100 p-2"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row",style:{boxShadow:"10px 0px 30px rgba(56, 56, 56, 0.4"}},c.a.createElement("div",{className:"col-12 col-md-7 p-5 my-auto"},a?c.a.createElement(m,{onLogIn:function(e){e.preventDefault();var t=d.signInWithEmailAndPassword("hola","asd");alert(t),console.log(t)},onRegisterClicked:function(){l(!1),f(!0)}}):c.a.createElement(u,{onSignIn:function(e){e.preventDefault();var t=d.createUserWithEmailAndPassword("tomirodriguez.89@gmail.com","pendorchorosa");console.log(t)},onLogInClicked:function(){l(!0),f(!1)}})),c.a.createElement("div",{className:"col-12 col-md-5 p-5  bg-darkblue d-none d-md-block"},c.a.createElement(s,{onSocialMediaLogIn:function(e){e.preventDefault()}})))))}var b=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(23)}},[[9,1,2]]]);
//# sourceMappingURL=main.fd8088b2.chunk.js.map