if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const u=e=>n(e,r),t={module:{uri:r},exports:o,require:u};i[r]=Promise.all(s.map((e=>t[e]||u(e)))).then((e=>(l(...e),o)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"biblioteca-bantu"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.94899b0c.css",revision:null},{url:"/css/chunk-vendors.03e0626a.css",revision:null},{url:"/fonts/materialdesignicons-webfont.27a0fd11.woff2",revision:null},{url:"/fonts/materialdesignicons-webfont.2f788fed.woff",revision:null},{url:"/fonts/materialdesignicons-webfont.325befe2.ttf",revision:null},{url:"/fonts/materialdesignicons-webfont.7df0a622.eot",revision:null},{url:"/img/IMG-20221224-WA0003.d9fbd569.jpg",revision:null},{url:"/img/logo-dark.46120fe0.jpg",revision:null},{url:"/img/logo-light.f9a90d67.jpg",revision:null},{url:"/img/not-authorized-dark.81c781ab.svg",revision:null},{url:"/index.html",revision:"32e5d5c832169813dbad550079308060"},{url:"/js/104.88d0b7e1.js",revision:null},{url:"/js/157.eab3fd91.js",revision:null},{url:"/js/578.264af3ae.js",revision:null},{url:"/js/599.0b85f9f4.js",revision:null},{url:"/js/643.248519fe.js",revision:null},{url:"/js/app.f4dc955c.js",revision:null},{url:"/js/chunk-vendors.2308ea28.js",revision:null},{url:"/manifest.json",revision:"953fc6035458d6725586fca1c07115fb"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
