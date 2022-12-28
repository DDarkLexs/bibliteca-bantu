(function(){"use strict";var e={5746:function(e,t,a){var r=a(144),n=function(){var e=this,t=e._self._c;return t("router-view")},o=[],i=a(757),s=a(6190),l=a(4324),u=function(){var e=this,t=e._self._c;return t(i.Z,{attrs:{value:e.route,dark:"",shift:"",app:""}},e._l(e.BottomRoute,(function({label:a,icon:r,name:n},o){return t(s.Z,{key:o,attrs:{to:{name:n}}},[t("span",[e._v(e._s(a))]),t(l.Z,[e._v(e._s(r))])],1)})),1)},c=[],d=JSON.parse('[{"label":"Inicio","icon":"mdi-home","name":"home"},{"label":"Dicionário","icon":"mdi-book-open-variant","name":"dicionario"},{"label":"Biblioteca","icon":"mdi-multimedia","name":"biblioteca"},{"label":"Aulas","icon":"mdi-google-classroom","name":"aulas"}]'),m={name:"App",data:()=>({BottomRoute:d,route:0,absolute:!0,grow:!0,horizontal:!0})},p=m,h=a(1001),f=(0,h.Z)(p,u,c,!1,null,"2d9500b8",null),v=f.exports,g={name:"App",components:{BottomNav:v},data:()=>({})},b=g,Z=(0,h.Z)(b,n,o,!1,null,null,null),w=Z.exports,y=a(5205);(0,y.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var _=a(8345),k=a(998),x=a(8492),C=a(3059),$=a(3687),A=function(){var e=this,t=e._self._c;return t(k.Z,{attrs:{app:""}},[t(x.Z,{attrs:{app:"",color:"primary",dark:"",dense:""}},[t("div",{staticClass:"d-flex align-center text-h5"},[e._v(" Bibloteca Bantu ")]),t($.Z),e.isUserLoggedIn()?t(s.Z,{attrs:{icon:""},on:{click:e.logOut}},[t(l.Z,[e._v("mdi-logout ")])],1):t(s.Z,{attrs:{to:{name:"entrada"},icon:""}},[t(l.Z,[e._v(" mdi-login ")])],1),t(s.Z,{attrs:{to:{name:"perfil"},icon:""}},[t(l.Z,[e._v("mdi-account ")])],1)],1),t(C.Z,[t("router-view")],1),t("BottomNav")],1)},O=[];a(7658);const T="AuthTokenClient";function P(e,t,a){var r;if(a){var n=new Date;n.setTime(n.getTime()+24*a*60*60*1e3),r="; expires="+n.toGMTString()}else r="";document.cookie=e+"="+t+r+"; path=/"}function I(e){if(document.cookie.length>0){var t=document.cookie.indexOf(e+"=");if(-1!=t){t=t+e.length+1;var a=document.cookie.indexOf(";",t);return-1==a&&(a=document.cookie.length),unescape(document.cookie.substring(t,a))}}return""}function D(e,t,a){I(e)&&(document.cookie=e+"="+(t?";path="+t:"")+(a?";domain="+a:"")+";expires=Thu, 01 Jan 1970 00:00:01 GMT")}function M(){return Boolean(I(T))}var j={name:"App",components:{BottomNav:v},methods:{isUserLoggedIn:M,logOut(){D(T,"/"),this.$router.push({name:"entrada"})}},data:()=>({})},q=j,S=(0,h.Z)(q,A,O,!1,null,null,null),R=S.exports,N=a(266),L=a(2118),B=a(1713),E=function(){var e=this,t=e._self._c;return t(L.Z,[t(B.Z,{attrs:{"g-5":""}},[t(N.Z,{attrs:{cols:"12",sm:"12"}},[t("div",{staticClass:"ma-4 text-center"},[t("p",{staticClass:"text-h6"},[t(l.Z,[e._v("mdi-calendar")]),e._v(" "+e._s(e.calendario_em_pt)+" ")],1),t("p",{staticClass:"font-weight-medium"},[e._v(" "+e._s(e.dica)+" ")])])]),t(N.Z,{attrs:{cols:"12",sm:"12"}},[t("h4",[e._v(" Inovações")])]),t(N.Z,{attrs:{cols:"12",sm:"12"}},[t("h4",[e._v("Lançamentos")])]),t(N.Z,{attrs:{cols:"12",sm:"12"}},[t("h4",[e._v("Link úteis")])])],1)],1)},z=[],U=a(629),G={name:"Home",components:{},data(){return{width:"400",height:"150"}},computed:{...(0,U.Se)({calendario_em_pt:"home/calendarioEmPortugues",dica:"home/dicaDoDia"})},methods:{...(0,U.nv)({data:"home/getDateFromServer"})},async beforeMount(){await this.data()}},F=G,J=(0,h.Z)(F,E,z,!1,null,null,null),V=J.exports,W=a(9582),H=a(4886),K=a(5125),Q=a(381),X=a(2648),Y=function(){var e=this,t=e._self._c;return t(K.Z,{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.procedimento.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(W.Z,{attrs:{outlined:""}},[t(H.ZB,[t(B.Z,{attrs:{"g-5":""}},[t(N.Z,{attrs:{cols:"12",sm:"6"}},[t(Q.Z,{attrs:{outlined:"",required:"",disabled:e.loading,loading:e.loading,"menu-props":"auto","single-line":"",rules:[e=>!!e||"informe o idioma"],items:e.linguas,"item-text":"nome","item-value":"lingua",label:"Traduzir de"},model:{value:e.de.lingua,callback:function(t){e.$set(e.de,"lingua",t)},expression:"de.lingua"}}),t(X.Z,{attrs:{disabled:e.loading,loading:e.loading,rules:[e=>!!e||"informe a palavra"],required:"",outlined:"",placeholder:"Digite a palavra",counter:"",autoGrow:!0,clearable:""},on:{input:function(t){e.para.palavra="escrevendo..."},focus:function(t){e.para.palavra="..."},blur:function(t){e.para.palavra=""},change:t=>e.de.palavra=t}})],1),t(N.Z,{attrs:{cols:"12",sm:"6"}},[t(Q.Z,{attrs:{outlined:"",required:"",disabled:e.loading,loading:e.loading,"menu-props":"auto","single-line":"",rules:[e=>!!e||"informe a idioma"],items:e.linguas,"item-text":"nome","item-value":"lingua",label:"Traduzir para"},model:{value:e.para.lingua,callback:function(t){e.$set(e.para,"lingua",t)},expression:"para.lingua"}}),t(X.Z,{attrs:{disabled:e.loading,loading:e.loading,outlined:"",placeholder:"tradução",readonly:"",autoGrow:!0},model:{value:e.para.palavra,callback:function(t){e.$set(e.para,"palavra",t)},expression:"para.palavra"}})],1)],1)],1),t(H.h7,[t(s.Z,{attrs:{disabled:e.loading,loading:e.loading,type:"submit",color:"success"}},[e._v("Traduzir")]),t($.Z),t(s.Z,{staticClass:"white--text",attrs:{disabled:e.loading,loading:e.loading,color:"red"},on:{click:function(t){return e.$refs.form.reset()}}},[e._v(" "+e._s("Limpar")+" ")])],1)],1)],1)},ee=[],te={data(){return{valid:!0}},watch:{"para.lingua":{handler(e,t){this.para.palavra&&this.procedimento()},immediate:!1},"de.palavra":{handler(e,t){},immediate:!1}},computed:{de:{get:function(){return this.$store.state.dicionario.primario},set:function(e){this.$store.state.dicionario.primario=e}},para:{get:function(){return this.$store.state.dicionario.secondario},set:function(e){this.$store.state.dicionario.secondario=e}},...(0,U.Se)({disableLang:"dicionario/disabilitarLinguaSelec",linguas:"dicionario/linguas",loading:"dicionario/l"})},methods:{async procedimento(){try{const e=await this.$refs.form.validate();if(!e)throw"preencha campo em falta";await this.translate()}catch(e){this.para.palavra=e}},...(0,U.nv)({translate:"dicionario/traduzir"})},mounted(){},beforeDestroy(){this.$refs.form.reset()}},ae=te,re=(0,h.Z)(ae,Y,ee,!1,null,null,null),ne=re.exports,oe=a(3423),ie=a(5495),se=a(4525),le=a(6098),ue=function(){var e=this,t=e._self._c;return t(L.Z,[t("div",{},[t(W.Z,{staticClass:"mx-auto ma-auto text-center elevation-0",attrs:{"max-width":"434",tile:""}},[t(ie.Z,{attrs:{height:"100%",src:"https://cdn.vuetifyjs.com/images/cards/server-room.jpg"}},[t(B.Z,{staticClass:"fill-height",attrs:{align:"end"}},[t(N.Z,{staticClass:"pa-0",attrs:{cols:"12"}},[t(oe.Z,{staticClass:"profile",attrs:{color:"grey",size:"164",tile:""}},[t(ie.Z,{attrs:{src:a(413)}})],1)],1),t(N.Z,{staticClass:"py-0"},[t(se.Z,{attrs:{color:"rgba(0, 0, 0, .4)"}},[t(le.km,[t(le.V9,{staticClass:"text-h5"},[e._v(" "+e._s(e.usuario.nome)+" ")]),t(le.oZ,[e._v(" "+e._s(e.usuario.email)+" ")])],1)],1)],1)],1)],1)],1)],1)])},ce=[],de={data(){return{}},methods:{...(0,U.nv)({get:"usuario/getUsuarioData"})},computed:{...(0,U.Se)({usuario:"usuario/usuario"})},async beforeMount(){await this.get()}},me=de,pe=(0,h.Z)(me,ue,ce,!1,null,null,null),he=pe.exports,fe=function(){var e=this,t=e._self._c;return t(L.Z,[t("h1",[e._v("Aula")]),e._l(e.linguagem,(function({nome:a,id:r},n){return t("div",{key:n},[t("router-link",{staticClass:"text-decoration-none",attrs:{to:"#"}},[e._v(" "+e._s(r)+" - "+e._s(a)+" ")])],1)}))],2)},ve=[],ge=JSON.parse('[{"id":1,"nome":"português","lingua":"portugues"},{"id":2,"nome":"chokwe","lingua":"chokwe"},{"id":3,"nome":"umbundu","lingua":"umbundu"}]'),be={data(){return{linguagem:ge}}},Ze=be,we=(0,h.Z)(Ze,fe,ve,!1,null,null,null),ye=we.exports,_e=a(626),ke=a(4468),xe=function(){var e=this,t=e._self._c;return t("div",[t(ke.Z,{attrs:{centered:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.tabs,(function({name:a,label:r},n){return t(_e.Z,{key:r+" "+n,attrs:{to:{name:a}}},[e._v(" "+e._s(r)+" ")])})),1),t(L.Z,[t("router-view")],1)],1)},Ce=[],$e={data(){return{tab:null,tabs:[{label:"Livros",name:"livros"},{label:"Videos",name:"videos"},{label:"Audios",name:"audios"},{label:"Descarregados",name:"descarregados"}]}}},Ae=$e,Oe=(0,h.Z)(Ae,xe,Ce,!1,null,null,null),Te=Oe.exports,Pe=a(8271),Ie=function(){var e=this,t=e._self._c;return t(k.Z,[t(C.Z,{staticClass:"d-flex align-center justify-center"},[t("router-view")],1),t(Pe.Z,{attrs:{dark:"",dense:"",padless:"",app:""}},[t(W.Z,{staticClass:"flex",attrs:{flat:"",tile:""}},[t(H.ZB,{staticClass:"py-0 white--text text-center"},[t("strong",[e._v("Todos os direitos reservado")])])],1)],1)],1)},De=[],Me={},je=(0,h.Z)(Me,Ie,De,!1,null,null,null),qe=je.exports,Se=a(7808),Re=function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-flex justify-center"},[t("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),e.verificar.apply(null,arguments)}}},[t(W.Z,{staticClass:"elevation-0 mb-10 pa-4",attrs:{"max-width":"350"}},[e.$vuetify.theme.dark?t(ie.Z,{staticClass:"ma-auto",attrs:{src:a(9069),width:"200"}}):t(ie.Z,{staticClass:"ma-auto",attrs:{src:a(6252),width:"200"}}),t("div",{staticClass:"text-h4 text-center"},[e._v(" Entrar ")]),t(H.ZB,[t(B.Z,{attrs:{"no-gutters":""}},[t(N.Z,{attrs:{cols:"12",sm:"12"}},[t(Se.Z,{attrs:{type:"text",required:"",rules:e.nomeRegra,label:"usuário","prepend-icon":"mdi-account",hint:"Informe o usuário"},model:{value:e.$store.state.auth.usuario.nome,callback:function(t){e.$set(e.$store.state.auth.usuario,"nome",t)},expression:"$store.state.auth.usuario.nome"}})],1),t(N.Z,{attrs:{cols:"12",sm:"12"}},[t(Se.Z,{attrs:{required:"",type:"password",rules:e.passwordRegra,"append-icon":e.show1?"mdi-eye":"mdi-eye-off",type:e.show1?"text":"password",label:"Palavra-passe","prepend-icon":"mdi-lock",hint:"Informe a Palavra-passe"},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.$store.state.auth.usuario.senha,callback:function(t){e.$set(e.$store.state.auth.usuario,"senha",t)},expression:"$store.state.auth.usuario.senha"}})],1)],1)],1),t(H.h7,[t($.Z),t(s.Z,{attrs:{color:"primary",tile:"",type:"submit"}},[e._v(" entrar ")]),t($.Z)],1),t("div",{staticClass:"text-center mt-3"},[t("router-link",{staticClass:"text-decoration-none",attrs:{to:""}},[e._v(" Esqueceu a palavra-passe ")])],1)],1),t("div",{staticClass:"text-center"},[e._v(" Ainda não tens conta? "),t("router-link",{staticClass:"text-decoration-none",attrs:{to:{name:"registrar"}}},[e._v(" crie uma ")])],1)],1)])},Ne=[],Le=a(9669),Be=a.n(Le);const Ee=`${location.origin}/api`,ze=Be().create({baseURL:Ee,headers:{"User-token":I(T)||!1}});r.ZP.prototype.$http=ze;var Ue=ze,Ge={data(){return{loading:!1,show1:!1,valid:!0,nomeRegra:[e=>!!e||"Informe o nome de usuário!"],passwordRegra:[e=>!!e||"Informe a palavra-passe do usuário!"]}},methods:{...(0,U.nv)({autenticar:"auth/autenticarClient"}),async verificar(){try{await this.autenticar(),this.$router.push({name:"home"})}catch(e){alert(e)}}},mounted(){}},Fe=Ge,Je=(0,h.Z)(Fe,Re,Ne,!1,null,"85019d06",null),Ve=Je.exports,We=function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-flex justify-center"},[t("form",{attrs:{enctype:"text/plain"},on:{submit:function(t){return t.preventDefault(),e.registrar.apply(null,arguments)}}},[t(W.Z,{staticClass:"elevation-0 mb-10 pa-4",attrs:{"max-width":"350"}},[e.$vuetify.theme.dark?t(ie.Z,{staticClass:"ma-auto",attrs:{src:a(9069),width:"200"}}):t(ie.Z,{staticClass:"ma-auto",attrs:{src:a(6252),width:"200"}}),t("div",{staticClass:"text-h4 text-center"},[e._v(" Criar Conta ")]),t(H.ZB,[t(B.Z,{attrs:{"no-gutters":""}},[t(N.Z,{attrs:{cols:"12",sm:"12"}},[t(Se.Z,{attrs:{type:"text",label:"Nome completo",required:"","prepend-icon":"mdi-account"},model:{value:e.$store.state.auth.inscrever.nome,callback:function(t){e.$set(e.$store.state.auth.inscrever,"nome",t)},expression:"$store.state.auth.inscrever.nome"}})],1),t(N.Z,{attrs:{cols:"12",sm:"12"}},[t(Se.Z,{attrs:{type:"tel",required:"",label:"Telefone","prepend-icon":"mdi-phone"},model:{value:e.$store.state.auth.inscrever.telefone,callback:function(t){e.$set(e.$store.state.auth.inscrever,"telefone",t)},expression:"$store.state.auth.inscrever.telefone"}})],1),t(N.Z,{attrs:{cols:"12",sm:"12"}},[t(Se.Z,{attrs:{type:"email",label:"E-mail","prepend-icon":"mdi-email"},model:{value:e.$store.state.auth.inscrever.email,callback:function(t){e.$set(e.$store.state.auth.inscrever,"email",t)},expression:"$store.state.auth.inscrever.email"}})],1),t(N.Z,{attrs:{cols:"12",sm:"12"}},[t(Se.Z,{attrs:{type:"password",rules:e.passwordRegra,"append-icon":e.show1?"mdi-eye":"mdi-eye-off",type:e.show1?"text":"password",label:"Palavra-passe","prepend-icon":"mdi-lock"},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.$store.state.auth.inscrever.senha,callback:function(t){e.$set(e.$store.state.auth.inscrever,"senha",t)},expression:"$store.state.auth.inscrever.senha"}})],1),t(N.Z,{attrs:{cols:"12",sm:"12"}},[t(Se.Z,{attrs:{label:"Reeconfirmar palavra-passe",type:"password",rules:e.passwordRegra2,"append-icon":e.show2?"mdi-eye":"mdi-eye-off",type:e.show2?"text":"password","prepend-icon":"mdi-lock"},on:{"click:append":function(t){e.show2=!e.show2}}})],1)],1)],1),t(H.h7,[t($.Z),t(s.Z,{attrs:{color:"primary",tile:"",type:"submit"}},[e._v(" Inscrever-se ")]),t($.Z)],1)],1),t("div",{staticClass:"text-center mb-4"},[e._v(" já tens uma conta? "),t("router-link",{staticClass:"text-decoration-none",attrs:{to:{name:"entrada"}}},[e._v(" entrar ")])],1)],1)])},He=[],Ke={data(){return{loading:!1,show1:!1,show2:!1,valid:!0,nomeRegra:[e=>!!e||"Informe o nome de usuário!"],passwordRegra:[e=>!!e||"Informe a palavra-passe do usuário!"],passwordRegra2:[e=>!!e||"Informe a palavra-passe do usuário!",e=>this.senhaigual===e||"Informe a palavra-passe não consta acima"]}},computed:{senhaigual:function(){return this.$store.state.auth.inscrever.senha}},methods:{async registrar(){try{await this.inscrever(),alert("Inscrito com sucesso")}catch(e){alert(e)}},...(0,U.nv)({inscrever:"auth/inscrever"})},mounted(){}},Qe=Ke,Xe=(0,h.Z)(Qe,We,He,!1,null,null,null),Ye=Xe.exports;r.ZP.use(_.ZP);const et=[{path:"/autenticacao",redirect:{name:"entrada"},component:qe,children:[{path:"entrada",name:"entrada",component:Ve},{path:"registrar",name:"registrar",component:Ye}]},{path:"/",redirect:{name:"home"},component:R,meta:{requiresAuth:!1},children:[{path:"/home",name:"home",component:V},{path:"/perfil",name:"perfil",meta:{requiresAuth:!0},component:he},{path:"/dicionario",name:"dicionario",meta:{requiresAuth:!1},component:ne},{path:"/biblioteca",name:"biblioteca",redirect:{name:"livros"},meta:{requiresAuth:!1},component:Te,children:[{path:"livros",name:"livros",meta:{requiresAuth:!1},component:()=>a.e(643).then(a.bind(a,6643))},{path:"videos",name:"videos",meta:{requiresAuth:!1},component:()=>a.e(578).then(a.bind(a,1578))},{path:"audios",name:"audios",meta:{requiresAuth:!1},component:()=>a.e(104).then(a.bind(a,1104))},{path:"descarregados",name:"descarregados",meta:{requiresAuth:!1},component:()=>a.e(599).then(a.bind(a,4599))}]},{path:"/aulas",name:"aulas",meta:{requiresAuth:!0},component:ye},{path:"/nao-autorizado",name:"nao-autorizado",meta:{requiresAuth:!1},component:()=>a.e(157).then(a.bind(a,5157))}]}],tt=new _.ZP({mode:"history",base:"/",routes:et});tt.beforeEach(((e,t,a)=>{const r=e.matched.some((e=>e.meta.requiresAuth));r&&(M()?a():a({name:"nao-autorizado"})),a()}));var at=tt,rt={namespaced:!0,state:{linguas:ge,loading:!1,primario:{lingua:"",palavra:""},secondario:{lingua:"",palavra:""}},getters:{disabilitarLinguaSelec:({linguas:e,primario:t})=>e.indexOf(e.filter((e=>t.lingua===e.lingua))[0]),l:({loading:e})=>e,linguas:({linguas:e})=>e},mutations:{COMMIT_LOADING({loading:e},t){t},COMMIT_TRADUCAO({secondario:e},t){e.palavra=t.significado}},actions:{async traduzir({getters:e,state:t,commit:a}){return new Promise((async(e,r)=>{try{a("COMMIT_LOADING",!0);const r=await Ue.get("/translate/universal",{params:{key:t.primario.lingua,palavra:t.primario.palavra,para:t.secondario.lingua}});if(!r.data.response)throw r.data.msg;a("COMMIT_TRADUCAO",r.data.query),e({response:r.data.response,msg:"ok"})}catch(n){r(n)}}))}}},nt={namespaced:!0,state:{usuario:{nome:"",senha:""},inscrever:{nome:"",senha:"",email:"",telefone:""}},getters:{},mutations:{},actions:{inscrever({state:e,commit:t,dispatch:a}){return new Promise((async(t,a)=>{try{const a=e.inscrever,r=(await Ue.post("/usuario/inscrever",{},{params:a})).status;console.log(r),t(r)}catch(r){a(r)}}))},autenticarClient({state:e,commit:t,dispatch:a}){return new Promise((async(t,r)=>{try{const{usuario:r}=e,{token:n}=(await Ue.get("/usuario/auth",{params:r})).data;console.log(n),await a("addClientCookie",n),t(n)}catch(n){r(n)}}))},addClientCookie({state:e,commit:t,dispatch:a},r){return new Promise((async(e,t)=>{try{P(T,r,1),e(r)}catch(a){t(a)}}))}}},ot={namespaced:!0,state:{calendar:new Date,dica:"Não leve a vida tão a sério, afinal ninguém vai sair vivo dela"},getters:{dicaDoDia:({dica:e})=>e,calendarioEmPortugues:({calendar:e})=>new Date(e).toLocaleDateString("pt-br",{dateStyle:"full"})},mutations:{COMMIT_CALENDAR({calendar:e},t){t}},actions:{async getDateFromServer({commit:e}){new Promise((async(t,a)=>{try{const a=(await Ue.get("/calendar")).data;e("COMMIT_CALENDAR",a),t(a)}catch(r){a(r)}}))}}},it={namespaced:!0,state:{usuario:{}},getters:{usuario:({usuario:e})=>e},mutations:{COMMIT_USUARIO(e,t){e.usuario=t}},actions:{getUsuarioData({getters:e,state:t,commit:a}){return new Promise((async(e,t)=>{try{const t=(await Ue.get("/usuario")).data;a("COMMIT_USUARIO",t),e("ok")}catch(r){t(r)}}))}}};r.ZP.use(U.ZP);var st=new U.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{dicionario:rt,usuario:it,auth:nt,home:ot}}),lt=a(1705),ut=a(7258);r.ZP.use(lt.Z);var ct=new lt.Z({breakpoint:{scrollBarWidth:16,thresholds:{xs:600,sm:960,md:1280,lg:1920}},lang:{current:"pt",locales:{pt:ut.Z}},theme:{dark:!1,default:"light",disable:!1,options:{cspNonce:void 0,customProperties:void 0,minifyTheme:void 0,themeCache:void 0}}});r.ZP.config.productionTip=!1,new r.ZP({router:at,store:st,vuetify:ct,render:e=>e(w)}).$mount("#app")},413:function(e,t,a){e.exports=a.p+"img/IMG-20221224-WA0003.d9fbd569.jpg"},9069:function(e,t,a){e.exports=a.p+"img/logo-dark.46120fe0.jpg"},6252:function(e,t,a){e.exports=a.p+"img/logo-light.f9a90d67.jpg"}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,r,n,o){if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],n=e[c][1],o=e[c][2];for(var s=!0,l=0;l<r.length;l++)(!1&o||i>=o)&&Object.keys(a.O).every((function(e){return a.O[e](r[l])}))?r.splice(l--,1):(s=!1,o<i&&(i=o));if(s){e.splice(c--,1);var u=n();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,n,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,r){return a.f[r](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+e+"."+{104:"88d0b7e1",157:"eab3fd91",578:"264af3ae",599:"0b85f9f4",643:"248519fe"}[e]+".js"}}(),function(){a.miniCssF=function(e){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="biblioteca-bantu:";a.l=function(r,n,o,i){if(e[r])e[r].push(n);else{var s,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+o),s.src=r),e[r]=[n];var m=function(t,a){s.onerror=s.onload=null,clearTimeout(p);var n=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((function(e){return e(a)})),t)return t(a)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={143:0};a.f.j=function(t,r){var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise((function(a,r){n=e[t]=[a,r]}));r.push(n[2]=o);var i=a.p+a.u(t),s=new Error,l=function(r){if(a.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,n[1](s)}};a.l(i,l,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,o,i=r[0],s=r[1],l=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(l)var c=l(a)}for(t&&t(r);u<i.length;u++)o=i[u],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(c)},r=self["webpackChunkbiblioteca_bantu"]=self["webpackChunkbiblioteca_bantu"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(5746)}));r=a.O(r)})();
//# sourceMappingURL=app.f4dc955c.js.map