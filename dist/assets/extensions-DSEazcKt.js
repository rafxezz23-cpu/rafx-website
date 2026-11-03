(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=o(i);fetch(i.href,s)}})();/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=([t,a,o])=>{const n=document.createElementNS("http://www.w3.org/2000/svg",t);return Object.keys(a).forEach(i=>{n.setAttribute(i,String(a[i]))}),o!=null&&o.length&&o.forEach(i=>{const s=N(i);n.appendChild(s)}),n},_=(t,a={})=>{const n={...D,...a};return N(["svg",n,t])};/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=(...t)=>t.filter((a,o,n)=>!!a&&a.trim()!==""&&n.indexOf(a)===o).join(" ").trim();/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=t=>{for(const a in t)if(a.startsWith("aria-")||a==="role"||a==="title")return!0;return!1};/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=t=>{let a="",o=!1;for(const n of t){if(n==="-"||n==="_"||n<=" "){o=a.length>0;continue}a.length===0?a+=n.toLowerCase():a+=o?n.toUpperCase():n,o=!1}return a};/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=t=>{const a=W(t);return a.charAt(0).toUpperCase()+a.slice(1)};/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=t=>Array.from(t.attributes).reduce((a,o)=>(a[o.name]=o.value,a),{}),$=t=>typeof t=="string"?t:!t||!t.class?"":t.class&&typeof t.class=="string"?t.class.split(" "):t.class&&Array.isArray(t.class)?t.class:"",H=(t,{nameAttr:a,icons:o,attrs:n})=>{var g;const i=t.getAttribute(a);if(i==null)return;const s=q(i),r=o[s];if(!r)return console.warn(`${t.outerHTML} icon name was not found in the provided icons object.`);const c=O(t),w=I(c)?{}:{"aria-hidden":"true"},k={...D,"data-lucide":i,...w,...n,...c},x=$(c),h=$(n),l=K("lucide",`lucide-${i}`,...x,...h);l&&Object.assign(k,{class:l});const p=_(r,k);return(g=t.parentNode)==null?void 0:g.replaceChild(p,t)};/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742"}],["path",{d:"m2 2 20 20"}],["path",{d:"M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=[["path",{d:"M12 5v16"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=[["path",{d:"M12 8V4H8"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M15 13v2"}],["path",{d:"M9 13v2"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18"}],["path",{d:"M16 10h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M8 18h.01"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=[["path",{d:"M8 2v3"}],["path",{d:"M16 2v3"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M8 13h.01"}],["path",{d:"M12 13h.01"}],["path",{d:"M16 13h.01"}],["path",{d:"M8 17h.01"}],["path",{d:"M12 17h.01"}],["path",{d:"M16 17h.01"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["path",{d:"M8 2v3"}],["path",{d:"M16 2v3"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}],["path",{d:"M3 9h18"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M18 17V9"}],["path",{d:"M13 17V5"}],["path",{d:"M8 17v-3"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=[["path",{d:"m6 9 6 6 6-6"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=[["path",{d:"m15 18-6-6 6-6"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=[["path",{d:"m9 18 6-6-6-6"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=[["path",{d:"m7 6 5 5 5-5"}],["path",{d:"m7 13 5 5 5-5"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 18V6"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M12 11h4"}],["path",{d:"M12 16h4"}],["path",{d:"M8 11h.01"}],["path",{d:"M8 16h.01"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 6v6l4 2"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=[["path",{d:"m18 16 4-4-4-4"}],["path",{d:"m6 8-4 4 4 4"}],["path",{d:"m14.5 4-5 16"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=[["path",{d:"m16 18 6-6-6-6"}],["path",{d:"m8 6-6 6 6 6"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=[["path",{d:"M12 20v2"}],["path",{d:"M12 2v2"}],["path",{d:"M17 20v2"}],["path",{d:"M17 2v2"}],["path",{d:"M2 12h2"}],["path",{d:"M2 17h2"}],["path",{d:"M2 7h2"}],["path",{d:"M20 12h2"}],["path",{d:"M20 17h2"}],["path",{d:"M20 7h2"}],["path",{d:"M7 20v2"}],["path",{d:"M7 2v2"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02"}],["path",{d:"M2 12a10 10 0 0 1 18-6"}],["path",{d:"M2 16h.01"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["path",{d:"M8 10v4"}],["path",{d:"M12 10v2"}],["path",{d:"M16 10v6"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=[["line",{x1:"22",x2:"2",y1:"6",y2:"6"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=[["path",{d:"M12 7v14"}],["path",{d:"M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5"}],["rect",{x:"3",y:"7",width:"18",height:"4",rx:"1"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=[["path",{d:"M2 17h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H2"}],["path",{d:"M2 21V3"}],["path",{d:"M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3"}],["circle",{cx:"16",cy:"11",r:"2"}],["circle",{cx:"8",cy:"11",r:"2"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=[["path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"}],["path",{d:"m18 15 4-4"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=[["path",{d:"m5 8 6 6"}],["path",{d:"m4 14 6-6 2-3"}],["path",{d:"M2 5h12"}],["path",{d:"M7 2h1"}],["path",{d:"m22 22-5-10-5 10"}],["path",{d:"M14 18h6"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"}],["path",{d:"M10 19v-3.96 3.15"}],["path",{d:"M7 19h5"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7"}],["path",{d:"M12 6v4"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=[["path",{d:"M12 22V12"}],["path",{d:"M20.27 18.27 22 20"}],["path",{d:"M21 10.498V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.98-.559"}],["path",{d:"M3.29 7 12 12l8.71-5"}],["path",{d:"m7.5 4.27 8.997 5.148"}],["circle",{cx:"18.5",cy:"16.5",r:"2.5"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=[["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814"}],["path",{d:"M16.47214 7.52786 A 5 10 0 1 0 13 21.79796"}],["path",{d:"M21.79796 11 A 10 5 0 1 0 19 15.57071"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=[["path",{d:"M12 3v18"}],["path",{d:"m19 8 3 8a5 5 0 0 1-6 0zV7"}],["path",{d:"M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"}],["path",{d:"m5 8 3 8a5 5 0 0 1-6 0zV7"}],["path",{d:"M7 21h10"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m16 16-1.9-1.9"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=[["path",{d:"M19 17V5a2 2 0 0 0-2-2H4"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12 18h.01"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=[["path",{d:"M12 3v18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M3 15h18"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=[["path",{d:"M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M9 9h.01"}],["path",{d:"m15 9-6 6"}],["path",{d:"M15 15h.01"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=[["circle",{cx:"12",cy:"8",r:"5"}],["path",{d:"M20 21a8 8 0 0 0-16 0"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];/**
 * @license lucide v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=({icons:t={},nameAttr:a="data-lucide",attrs:o={},root:n=document,inTemplates:i}={})=>{if(!Object.values(t).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof n>"u")throw new Error("`createIcons()` only works in a browser environment.");if(Array.from(n.querySelectorAll(`[${a}]`)).forEach(r=>H(r,{nameAttr:a,icons:t,attrs:o})),i&&Array.from(n.querySelectorAll("template")).forEach(c=>et({icons:t,nameAttr:a,attrs:o,root:c.content,inTemplates:i})),a==="data-lucide"){const r=n.querySelectorAll("[icon-name]");r.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(r).forEach(c=>H(c,{nameAttr:"icon-name",icons:t,attrs:o})))}},nt={ArrowLeft:B,ArrowRight:F,ArrowUpRight:U,BellOff:J,BookOpen:Q,Bot:G,Calculator:X,Calendar:Y,CalendarDays:Z,Camera:ee,ChartColumn:te,ChevronDown:ae,ChevronLeft:ie,ChevronRight:ne,ChevronsDown:oe,CircleDollarSign:se,ClipboardList:re,Clock:ce,Code:le,CodeXml:de,Copy:pe,Cpu:he,Download:ue,ExternalLink:me,Eye:ye,FingerprintPattern:we,FolderKanban:ke,Frame:fe,Gift:ge,Globe:xe,Gpu:ze,Hammer:ve,Languages:Me,LayoutDashboard:be,LayoutGrid:je,Link:Se,Mail:Ce,MessageCircle:Le,Monitor:Ee,MonitorSmartphone:Ae,Mouse:Pe,Package:Ve,PackageSearch:Te,Palette:$e,Puzzle:He,Radio:De,Rotate3d:Ne,Scale:Re,ScanEye:_e,ScanSearch:Ke,Scroll:Ie,Send:We,Server:qe,Shield:Oe,Shirt:Be,Smartphone:Fe,Sparkles:Ue,Store:Je,Table:Qe,TicketPercent:Ge,UserRound:Xe,Users:Ze,X:Ye},tt=matchMedia("(prefers-reduced-motion: reduce)").matches,at=matchMedia("(any-pointer: fine)").matches;function ot(t,a,o){const n=t.getContext("2d"),i=Math.min(devicePixelRatio,1.5),s=()=>{t.width=innerWidth*i,t.height=innerHeight*i,n.setTransform(i,0,0,i,0,0)};s(),addEventListener("resize",s);const r=document.createElement("canvas");r.width=r.height=64;const c=r.getContext("2d"),w=c.createRadialGradient(32,32,0,32,32,32);w.addColorStop(0,a),w.addColorStop(.18,a),w.addColorStop(.35,o),w.addColorStop(1,"transparent"),c.fillStyle=w,c.fillRect(0,0,64,64);const k=innerWidth<768?24:50,x=Array.from({length:k},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,s:.8+Math.random()*2,v:.15+Math.random()*.5,r:Math.random()*6,o:.2+Math.random()*.6})),h=()=>{if(document.hidden){setTimeout(()=>requestAnimationFrame(h),400);return}n.clearRect(0,0,innerWidth,innerHeight);for(const l of x){l.y-=l.v,l.r+=.01,l.y<-20&&(l.y=innerHeight+20,l.x=Math.random()*innerWidth),n.globalAlpha=l.o*(.6+Math.sin(l.r*3)*.4);const p=l.s*6;n.drawImage(r,l.x+Math.sin(l.r)*10-p/2,l.y-p/2,p,p)}tt||requestAnimationFrame(h)};h()}function st(t,a,o){if(!at)return;const n=document.documentElement;n.classList.add("has-cursor");let i=-100,s=-100,r=i,c=s,w=innerWidth/2,k=innerHeight/2,x=!1;const h=()=>{r+=(i-r)*.22,c+=(s-c)*.22,w+=(i-w)*.07,k+=(s-k)*.07,a.style.translate=`${i}px ${s}px`,o.style.translate=`${r}px ${c}px`,t.style.translate=`${w-280}px ${k-280}px`,Math.abs(i-w)+Math.abs(s-k)>.5?requestAnimationFrame(h):x=!1},l=()=>{x||(x=!0,requestAnimationFrame(h))};addEventListener("pointermove",p=>{p.pointerType==="mouse"&&(n.classList.contains("cursor-on")||(r=p.clientX,c=p.clientY,n.classList.add("cursor-on")),i=p.clientX,s=p.clientY,l())},{passive:!0}),addEventListener("pointerdown",()=>o.classList.add("down")),addEventListener("pointerup",()=>o.classList.remove("down")),document.addEventListener("pointerover",p=>{const g=!!p.target.closest("a, button");o.classList.toggle("hover",g),a.classList.toggle("hover",g)}),n.addEventListener("mouseleave",()=>n.classList.remove("cursor-on"))}const R="./",b=t=>t.startsWith("http")?t:`${R}${t}`,y=t=>document.querySelector(t),L=[["camera","Podgląd QC bez klikania","Automatycznie wyszukuje i pokazuje zdjęcia QC — bez przeklikiwania dziesiątek linków."],["link","Auto-Link do agenta","Przekierowuje na stronę twojego agenta z odpowiednim produktem."],["circle-dollar-sign","Live konwersja cen","Przelicza ceny z CNY na PLN, USD, EUR, GBP — bez wychodzenia ze strony."],["bell-off","Bez warnów i checków","Usuwa popupy „Check Agree” i „Warn Remind”."],["package","Czas dostawy","Szacuje, kiedy paczka dotrze do magazynu agenta."],["chart-column","Statystyki KakoBuy","Saldo, waga paczek, opłaty i najcięższa paczka w jednym panelu."]],j=[{id:"salvitool",kind:"Wtyczka Chrome",stack:["TypeScript","Chrome Extension API","Manifest V3","HTML / CSS"],about:["SalviTool to wtyczka do Chrome zrobiona dla społeczności Salvi Reps. Działa na stronach agentów zakupowych i sklepów takich jak Weidian, Taobao czy Yupoo.","Zamiast przeklikiwać dziesiątki linków, wtyczka sama znajduje zdjęcia QC, przelicza ceny z juanów na złotówki i przekierowuje produkt do wybranego agenta. Ma własny panel ustawień w czerwono-czarnym stylu Salvi."],name:"SalviTool",acc:"#ff2b2b",ink:"#ffffff",meta:"140 użytkowników",cta:"Dodaj do Chrome",url:"https://chromewebstore.google.com/detail/salvitool/holgjhajjgkeonkdndpbbllbladpepjo",icon:"ext/salvitool-icon.webp",desc:"Czerwono-czarna wtyczka dla społeczności Salvi Reps. Zdjęcia QC, odznaki sellerów, przelicznik cen i automatyczny konwerter linków dla agentów zakupowych.",shots:["ext/salvitool-1.webp","ext/salvitool-2.webp"],tags:["Chrome Extension","TypeScript","KakoBuy"],features:L},{id:"kakomaxing",kind:"Wtyczka Chrome",stack:["TypeScript","Chrome Extension API","Manifest V3","HTML / CSS"],about:["Kakomaxing to czarno-biała wersja mojej wtyczki dla agentów zakupowych. Obsługuje 22 agentów i ustawia Auto-Link jednym kliknięciem.","Po instalacji wita użytkownika własnym panelem z kodem -60 zł na wysyłkę, wyborem agenta, języka i waluty."],name:"Kakomaxing",acc:"#ffffff",ink:"#000000",meta:"45 użytkowników",cta:"Dodaj do Chrome",url:"https://chromewebstore.google.com/detail/kakomaxing/konhmgafbkgjipiekalbmgogpijjgeph",icon:"ext/kakomaxing-icon.webp",desc:"Niezbędnik w świecie repów: 22 agentów, Auto-Link jednym kliknięciem, automatyczne QC i kod -60 zł na wysyłkę.",shots:["ext/kakomaxing-1.webp"],tags:["22 agentów","Auto-Link","QC auto"],features:L},{id:"trustedreps",kind:"Wtyczka Chrome",stack:["TypeScript","Chrome Extension API","Manifest V3","HTML / CSS"],about:["TrustedReps to wersja wtyczki przygotowana dla społeczności TrustedReps. Ma ten sam zestaw funkcji co SalviTool, ale w eleganckim, czarno-białym wydaniu.","Z wtyczki korzysta 160 osób — najwięcej ze wszystkich moich rozszerzeń."],name:"TrustedReps",acc:"#e5e5e5",ink:"#000000",meta:"160 użytkowników",cta:"Dodaj do Chrome",url:"https://chromewebstore.google.com/detail/trustedreps/glgjnocnbhjnghhmoemfadjknpkinkke",icon:"ext/trustedreps-icon.webp",desc:"Wersja dla społeczności TrustedReps — te same mocne funkcje w czarno-białym, eleganckim wydaniu.",shots:["ext/trustedreps-1.webp","ext/trustedreps-2.webp","ext/trustedreps-3.webp"],tags:["Chrome Extension","QC","Konwersja cen"],features:L}],S=[{id:"jachu",kind:"Strona internetowa",stack:["Vite","TypeScript","Tailwind CSS","Discord API","Vercel"],about:["Strona profilowa dla Jacha — właściciela serwera Jachu Reps z 1,2 tys. osób. Dane profilu (avatar, animowany banner, nick i tag) pobierają się na żywo z Discorda po samym ID.","Najważniejszy jest duży kupon z kodem JACHU20, który kopiuje się jednym kliknięciem, a pod nim wszystkie promki z bio Jacha. Strona działa bez własnego backendu i stoi na Vercelu."],name:"Jachu Reps",acc:"#b18cff",ink:"#000000",meta:"Strona profilowa · live",cta:"Otwórz stronę",url:"https://jachureps.vercel.app",icon:"https://cdn.discordapp.com/avatars/1357365138423812176/b95d13e266392efae78c3baca7003081.png?size=128",desc:"Strona profilowa dla Jacha w fioletowym, neonowym stylu. Animowany banner i avatar pobierane na żywo z Discorda, duży kupon z kodem Jachu20 do skopiowania i wszystkie promki z jego bio.",shots:["sites/jachu-1.webp","sites/jachu-2.webp","sites/jachu-3.webp"],tags:["Vite","TypeScript","Tailwind","Discord API"],features:[["user-round","Profil z Discorda na żywo","Avatar, animowany banner, nick i tag REPS pobierane po ID."],["ticket-percent","Kupon z kodem","Kod JACHU20 kopiuje się jednym kliknięciem."],["gift","Promki z bio","$410 kuponów, -63 zł na ship, 20 zł BLIK, 1,50 zł za zaproszenie."],["eye","Licznik wyświetleń","Liczy odwiedziny bez własnego backendu."],["sparkles","Animacje","Świecące cząsteczki, wjeżdżające litery, karty z poświatą."]]},{id:"vynx",kind:"Strona internetowa",stack:["Vite","TypeScript","Tailwind CSS","Lanyard","Canvas"],about:["Strona profilowa dla vynxa w gotyckim, zielono-czarnym klimacie. Kolory nicku są czytane bezpośrednio z jego ustawień na Discordzie, a nick ma pikselową czcionkę jak w aplikacji.","Karta profilu przechyla się w 3D za kursorem, w tle spadają krzyże rysowane na canvasie, a data założenia konta liczy się z samego Discord ID."],name:"! vynx",acc:"#c4ed65",ink:"#000000",meta:"Strona profilowa · live",cta:"Otwórz stronę",url:"https://vynx-eight.vercel.app",icon:"https://cdn.discordapp.com/avatars/943108101492580362/400c9819e46e700b414eb0b7623aad71.png?size=128",desc:"Strona profilowa dla vynxa w zielono-czarnym klimacie z gotyckimi krzyżami. Nick w pikselowej czcionce z gradientem z jego profilu Discord, karta profilu przechylająca się w 3D i linki.",shots:["sites/vynx-1.webp","sites/vynx-2.webp","sites/vynx-3.webp"],tags:["Vite","TypeScript","Tailwind","Lanyard"],features:[["palette","Kolory z Discorda","Gradient nicku czytany z jego ustawień na Discordzie."],["rotate-3d","Karta 3D","Karta profilu przechyla się za kursorem."],["calendar","Dane konta","Data założenia konta liczona z samego ID."],["link","Linki","Discord, serwer, Spotify i KakoBuy w jednym miejscu."],["sparkles","Animacje","Spadające krzyże, przewijany pasek, liczniki."]]},{id:"salvireps",name:"salvireps.pl",acc:"#ff2b2b",ink:"#ffffff",meta:"Już niedługo pod domeną salvireps.pl",cta:"Już niedługo",kind:"Strona internetowa",icon:"sites/salvireps-icon.webp",stack:["Next.js","React","TypeScript","Tailwind CSS","VPS"],desc:"Największy projekt: pełny serwis dla społeczności Salvi Reps — katalog produktów, zweryfikowani sprzedawcy, narzędzia do QC i wysyłki, poradniki, outfity i forum w jednym miejscu.",about:["salvireps.pl to strona dla społeczności Salvi Reps, która ma już ponad 6 tys. członków i 1,5 tys. osób online na Discordzie. Zebrałem w niej wszystko, czego potrzeba przy zamawianiu repów: produkty, sprzedawców, poradniki i narzędzia.","Przy pierwszym wejściu użytkownik wybiera język, walutę i jednego z kilkunastu agentów (KakoBuy, USFans, Mulebuy, ACBuy, Sugargoo i inni), a strona sama dopasowuje ceny i linki zakupowe. Całość stoi na własnym VPS i jest zrobiona w Next.js."],shots:["sites/salvireps-2.webp","sites/salvireps-3.webp","sites/salvireps-1.webp"],tags:["Next.js","VPS","Społeczność 6k+"],features:[["scan-search","QC Finder","Zdjęcia QC z dowolnego linku Weidian, Taobao lub 1688."],["link","Link Converter","Konwersja linków między platformami i agentami."],["calculator","Kalkulator wysyłki","Oblicza koszt shipa dla całego zamówienia."],["scale","Porównanie agentów","Ceny, kursy i opłaty agentów obok siebie."],["package-search","Śledzenie paczki","Status przesyłki w jednym miejscu."],["store","Zweryfikowani sprzedawcy","Każdy seller przechodzi weryfikację moderacji."],["shirt","Produkty i outfity","Katalog z batchami, kategoriami, filtrami i koszykiem."],["book-open","Poradniki i forum","Jak zamówić pierwszą pakę, kupony i pomoc."],["languages","Język, waluta, agent","PL / EN, PLN / USD / EUR / CNY i kilkunastu agentów."]]}],it=[...j,...S];function rt(){const t=e=>{const d=e.id==="jachu"||e.id==="vynx",u=e.url?e.kind.startsWith("Strona")?'<span class="size-1.5 rounded-full bg-[#23a55a]"></span>Live':`<i data-lucide="users" class="size-3"></i>${parseInt(e.meta)}`:'<span class="size-1.5 rounded-full bg-amber-400"></span>Wkrótce',m=e.url?e.url.replace(/^https?:\/\//,"").replace(/\/.*$/,""):e.name,z=e.icon?`<img src="${b(e.icon)}" alt="" class="size-11 shrink-0 ${d?"rounded-full":"rounded-xl"} object-cover" />`:'<span class="grid size-11 shrink-0 place-items-center rounded-xl bg-white/5 text-neutral-400"><i data-lucide="hammer" class="size-5"></i></span>';return`
    <a href="${R}projekt.html?id=${e.id}" style="--acc:${e.acc}" class="pcard rv group flex flex-col">
      <div class="pcard-frame">
        <div class="pcard-bar">
          <span class="flex gap-1.5"><i></i><i></i><i></i></span>
          <span class="truncate">${m}</span>
          <span class="pcard-status">${u}</span>
        </div>
        <div class="pcard-shot">
          ${e.shots.length?`<img src="${b(e.shots[0])}" alt="Podgląd ${e.name}" loading="lazy" decoding="async" />`:""}
        </div>
      </div>
      <div class="flex flex-1 flex-col px-1 pt-5">
        <div class="flex items-center gap-3">
          ${z}
          <div class="min-w-0 flex-1">
            <h4 class="font-display truncate text-xl font-bold text-white">${e.name}</h4>
            <p class="truncate text-xs text-neutral-500">${e.tags.slice(0,3).join(" · ")}</p>
          </div>
          <span class="pcard-arrow"><i data-lucide="arrow-up-right" class="size-4"></i></span>
        </div>
        <p class="mt-3 line-clamp-2 text-sm leading-relaxed text-neutral-400">${e.desc}</p>
      </div>
    </a>`},a=e=>e.kind.startsWith("Strona")?"site":"ext",o=`
    <a href="#zamow" data-cat="bot" style="--acc:#5865f2" class="pcard pcard-empty is-hidden rv group flex flex-col">
      <div class="pcard-frame">
        <div class="pcard-bar"><span class="flex gap-1.5"><i></i><i></i><i></i></span><span class="truncate">discord.com</span><span class="pcard-status"><span class="size-1.5 rounded-full bg-[#5865f2]"></span>Na zamówienie</span></div>
        <div class="pcard-shot grid place-items-center">
          <div class="relative text-center">
            <span class="mx-auto grid size-16 place-items-center rounded-2xl bg-[#5865f2] text-white shadow-[0_15px_40px_-10px_#5865f2]"><i data-lucide="bot" class="size-8"></i></span>
            <p class="font-mono mt-4 text-xs text-neutral-400">/ticket · /verify · /giveaway</p>
          </div>
        </div>
      </div>
      <div class="flex flex-1 flex-col px-1 pt-5">
        <div class="flex items-center gap-3">
          <div class="min-w-0 flex-1"><h4 class="font-display text-xl font-bold text-white">Twój bot Discord</h4><p class="text-xs text-neutral-500">discord.js · Slash commands · 24/7</p></div>
          <span class="pcard-arrow"><i data-lucide="arrow-up-right" class="size-4"></i></span>
        </div>
        <p class="mt-3 line-clamp-2 text-sm leading-relaxed text-neutral-400">Tickety, weryfikacja, giveawaye, ekonomia, moderacja — zrobię bota pod twój serwer.</p>
      </div>
    </a>`,n=y("#projGrid");n.innerHTML=[...S,...j].map(e=>t(e).replace('class="pcard ',`data-cat="${a(e)}" class="pcard `)).join("")+o;const i={all:S.length+j.length,site:S.length,ext:j.length,bot:0};document.querySelectorAll(".ptab [data-count]").forEach(e=>{const d=i[e.dataset.count];d?e.textContent=String(d):e.remove()}),y("#statProjects").textContent=String(i.all);const s=[...document.querySelectorAll(".ptab")],r=document.querySelector(".ptab-pill"),c=e=>{r.style.width=`${e.offsetWidth}px`,r.style.translate=`${e.offsetLeft}px 0`},w=e=>{const d=e.dataset.tab;s.forEach(m=>{const z=m===e;m.classList.toggle("is-active",z),m.setAttribute("aria-selected",String(z))}),c(e);let u=0;n.querySelectorAll("[data-cat]").forEach(m=>{if(!(d==="all"?m.dataset.cat!=="bot":m.dataset.cat===d)){m.classList.add("is-hidden");return}m.classList.remove("is-hidden","on"),m.style.transitionDelay=`${u++*60}ms`,requestAnimationFrame(()=>requestAnimationFrame(()=>m.classList.add("on")))})};s.forEach(e=>e.addEventListener("click",()=>w(e))),requestAnimationFrame(()=>c(s[0])),addEventListener("resize",()=>c(s.find(e=>e.classList.contains("is-active"))));const k=y("#extModal"),x=y("#extPanel"),h=y("#extShot"),l=k.querySelector("[data-close]"),p=h.parentElement;p.insertAdjacentHTML("beforeend",`
    <div id="extSoon" class="absolute inset-0 hidden place-items-center bg-[radial-gradient(circle_at_50%_120%,rgb(255_43_43/.45),transparent_60%),#0a0303]">
      <div class="absolute inset-0 opacity-40 [background-image:linear-gradient(rgb(255_43_43/.15)_1px,transparent_1px),linear-gradient(90deg,rgb(255_43_43/.15)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"></div>
      <div class="relative text-center">
        <p id="extSoonName" class="font-display text-5xl font-extrabold text-white drop-shadow-[0_0_30px_#ff2b2b] sm:text-6xl"></p>
        <p class="font-mono mt-4 inline-flex items-center gap-2 text-sm tracking-[.3em] text-red uppercase"><span class="size-2 animate-ping rounded-full bg-red"></span>w budowie</p>
      </div>
    </div>`);let g=it[0],f=0;const A="cubic-bezier(.16,1,.3,1)";let C=!1;const v=(e,d=0)=>{const u=g.shots.length;if(y("#extSoon").style.display=u?"none":"grid",h.style.display=u?"":"none",y("#extCount").style.display=u?"":"none",y("#extPrev").style.display=y("#extNext").style.display=u>1?"":"none",y("#extThumbs").innerHTML="",!u)return;const m=(e+u)%u;if(C||d!==0&&m===f)return;f=m;const z=b(g.shots[f]),T=new Image;if(T.src=z,d===0)h.getAnimations().forEach(M=>M.cancel()),h.src=z,h.animate([{opacity:0,transform:"scale(1.06)",filter:"blur(10px)"},{opacity:1,transform:"none",filter:"none"}],{duration:700,easing:A});else{C=!0;const M=h.animate([{opacity:1,transform:"none",filter:"none"},{opacity:0,transform:`translateX(${-d*12}%) scale(.96)`,filter:"blur(8px)"}],{duration:280,easing:"cubic-bezier(.4,0,1,1)",fill:"forwards"});M.onfinish=()=>T.decode().catch(()=>{}).then(()=>{h.src=z,M.cancel(),h.animate([{opacity:0,transform:`translateX(${d*12}%) scale(.96)`,filter:"blur(8px)"},{opacity:1,transform:"none",filter:"none"}],{duration:600,easing:A}).onfinish=()=>C=!1})}y("#extCount").textContent=`${f+1} / ${u}`,y("#extThumbs").innerHTML=u>1?g.shots.map((M,V)=>`<button data-dot="${V}" class="relative aspect-[16/10] w-28 shrink-0 overflow-hidden rounded-lg border-2 transition ${V===f?"border-[var(--acc)] opacity-100":"border-transparent opacity-45 hover:opacity-80"}"><img src="${b(M)}" alt="" class="pointer-events-none size-full object-cover object-top" /></button>`).join(""):""},E=()=>{l.classList.add("opacity-0"),x.classList.add("opacity-0","translate-y-10","scale-95"),document.body.style.overflow="",setTimeout(()=>k.classList.replace("flex","hidden"),400)};k.querySelectorAll("[data-close]").forEach(e=>e.addEventListener("click",E)),y("#extPrev").addEventListener("click",()=>v(f-1,-1)),y("#extNext").addEventListener("click",()=>v(f+1,1));let P=0;p.addEventListener("pointerdown",e=>P=e.clientX),p.addEventListener("pointerup",e=>{const d=e.clientX-P;Math.abs(d)>50&&g.shots.length>1&&v(f-Math.sign(d),-Math.sign(d))}),y("#extThumbs").addEventListener("click",e=>{var u;const d=(u=e.target.closest("[data-dot]"))==null?void 0:u.dataset.dot;d&&v(Number(d),Math.sign(Number(d)-f))}),addEventListener("keydown",e=>{k.classList.contains("hidden")||(e.key==="Escape"&&E(),e.key==="ArrowLeft"&&v(f-1,-1),e.key==="ArrowRight"&&v(f+1,1))})}export{st as a,it as b,et as c,nt as i,rt as r,ot as s};
