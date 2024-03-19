/* eslint-disable */
import { useEffect } from "react"

export default function FlowDark() {
    useEffect(() => {
        !function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof __SVGATOR_DEFINE__&&__SVGATOR_DEFINE__.amd?__SVGATOR_DEFINE__(n):((t="undefined"!=typeof globalThis?globalThis:t||self).__SVGATOR_PLAYER__=t.__SVGATOR_PLAYER__||{},t.__SVGATOR_PLAYER__["5c7f360c"]=n())}(this,(function(){"use strict";function t(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function n(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?t(Object(r),!0).forEach((function(t){u(n,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))}))}return n}function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,n,e){return n&&i(t.prototype,n),e&&i(t,e),t}function u(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,n){return(l=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function f(t,n,e){return(f=s()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var i=new(Function.bind.apply(t,r));return e&&l(i,e.prototype),i}).apply(null,arguments)}function c(t,n){if(n&&("object"==typeof n||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function h(t,n,e){return(h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,n,e){var r=function(t,n){for(;!Object.prototype.hasOwnProperty.call(t,n)&&null!==(t=a(t)););return t}(t,n);if(r){var i=Object.getOwnPropertyDescriptor(r,n);return i.get?i.get.call(e):i.value}})(t,n,e||t)}function v(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return y(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return y(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function g(t,n,e){if(Number.isInteger(t))return t;var r=Math.pow(10,n);return Math[e]((+t+Number.EPSILON)*r)/r}Number.isInteger||(Number.isInteger=function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t}),Number.EPSILON||(Number.EPSILON=2220446049250313e-31);var d=p(Math.pow(10,-6));function p(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return g(t,n,"round")}function m(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:d;return Math.abs(t-n)<e}p(Math.pow(10,-2)),p(Math.pow(10,-4));var b=Math.PI/180;function w(t){return t}function A(t,n,e){var r=1-e;return 3*e*r*(t*r+n*e)+e*e*e}function _(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return t<0||t>1||e<0||e>1?null:m(t,n)&&m(e,r)?w:function(i){if(i<=0)return t>0?i*n/t:0===n&&e>0?i*r/e:0;if(i>=1)return e<1?1+(i-1)*(r-1)/(e-1):1===e&&t<1?1+(i-1)*(n-1)/(t-1):1;for(var o,u=0,a=1;u<a;){var l=A(t,e,o=(u+a)/2);if(m(i,l))break;l<i?u=o:a=o}return A(n,r,o)}}function x(){return 1}function k(t){return 1===t?1:0}function S(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(1===t){if(0===n)return k;if(1===n)return x}var e=1/t;return function(t){return t>=1?1:(t+=n*e)-t%e}}var O=Math.sin,j=Math.cos,M=Math.acos,E=Math.asin,P=Math.tan,I=Math.atan2,R=Math.PI/180,F=180/Math.PI,N=Math.sqrt,T=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;r(this,t),this.m=[n,e,i,o,u,a],this.i=null,this.w=null,this.s=null}return o(t,[{key:"determinant",get:function(){var t=this.m;return t[0]*t[3]-t[1]*t[2]}},{key:"isIdentity",get:function(){if(null===this.i){var t=this.m;this.i=1===t[0]&&0===t[1]&&0===t[2]&&1===t[3]&&0===t[4]&&0===t[5]}return this.i}},{key:"point",value:function(t,n){var e=this.m;return{x:e[0]*t+e[2]*n+e[4],y:e[1]*t+e[3]*n+e[5]}}},{key:"translateSelf",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!t&&!n)return this;var e=this.m;return e[4]+=e[0]*t+e[2]*n,e[5]+=e[1]*t+e[3]*n,this.w=this.s=this.i=null,this}},{key:"rotateSelf",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(t%=360){var n=O(t*=R),e=j(t),r=this.m,i=r[0],o=r[1];r[0]=i*e+r[2]*n,r[1]=o*e+r[3]*n,r[2]=r[2]*e-i*n,r[3]=r[3]*e-o*n,this.w=this.s=this.i=null}return this}},{key:"scaleSelf",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(1!==t||1!==n){var e=this.m;e[0]*=t,e[1]*=t,e[2]*=n,e[3]*=n,this.w=this.s=this.i=null}return this}},{key:"skewSelf",value:function(t,n){if(n%=360,(t%=360)||n){var e=this.m,r=e[0],i=e[1],o=e[2],u=e[3];t&&(t=P(t*R),e[2]+=r*t,e[3]+=i*t),n&&(n=P(n*R),e[0]+=o*n,e[1]+=u*n),this.w=this.s=this.i=null}return this}},{key:"resetSelf",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,u=this.m;return u[0]=t,u[1]=n,u[2]=e,u[3]=r,u[4]=i,u[5]=o,this.w=this.s=this.i=null,this}},{key:"recomposeSelf",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return this.isIdentity||this.resetSelf(),t&&(t.x||t.y)&&this.translateSelf(t.x,t.y),n&&this.rotateSelf(n),e&&(e.x&&this.skewSelf(e.x,0),e.y&&this.skewSelf(0,e.y)),!r||1===r.x&&1===r.y||this.scaleSelf(r.x,r.y),i&&(i.x||i.y)&&this.translateSelf(i.x,i.y),this}},{key:"decompose",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=this.m,r=e[0]*e[0]+e[1]*e[1],i=[[e[0],e[1]],[e[2],e[3]]],o=N(r);if(0===o)return{origin:{x:p(e[4]),y:p(e[5])},translate:{x:p(t),y:p(n)},scale:{x:0,y:0},skew:{x:0,y:0},rotate:0};i[0][0]/=o,i[0][1]/=o;var u=e[0]*e[3]-e[1]*e[2]<0;u&&(o=-o);var a=i[0][0]*i[1][0]+i[0][1]*i[1][1];i[1][0]-=i[0][0]*a,i[1][1]-=i[0][1]*a;var l=N(i[1][0]*i[1][0]+i[1][1]*i[1][1]);if(0===l)return{origin:{x:p(e[4]),y:p(e[5])},translate:{x:p(t),y:p(n)},scale:{x:p(o),y:0},skew:{x:0,y:0},rotate:0};i[1][0]/=l,i[1][1]/=l,a/=l;var s=0;return i[1][1]<0?(s=M(i[1][1])*F,i[0][1]<0&&(s=360-s)):s=E(i[0][1])*F,u&&(s=-s),a=I(a,N(i[0][0]*i[0][0]+i[0][1]*i[0][1]))*F,u&&(a=-a),{origin:{x:p(e[4]),y:p(e[5])},translate:{x:p(t),y:p(n)},scale:{x:p(o),y:p(l)},skew:{x:p(a),y:0},rotate:p(s)}}},{key:"clone",value:function(){var t=this.m;return new this.constructor(t[0],t[1],t[2],t[3],t[4],t[5])}},{key:"toString",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:" ";if(null===this.s){var n=this.m.map((function(t){return p(t)}));1===n[0]&&0===n[1]&&0===n[2]&&1===n[3]?this.s="translate("+n[4]+t+n[5]+")":this.s="matrix("+n.join(t)+")"}return this.s}}],[{key:"create",value:function(t){return t?Array.isArray(t)?f(this,v(t)):t instanceof this?t.clone():(new this).recomposeSelf(t.origin,t.rotate,t.skew,t.scale,t.translate):new this}}]),t}();function q(t,n,e){return t>=.5?e:n}function B(t,n,e){return 0===t||n===e?n:t*(e-n)+n}function D(t,n,e){var r=B(t,n,e);return r<=0?0:r}function L(t,n,e){var r=B(t,n,e);return r<=0?0:r>=1?1:r}function C(t,n,e){return 0===t?n:1===t?e:{x:B(t,n.x,e.x),y:B(t,n.y,e.y)}}function V(t,n,e){var r=function(t,n,e){return Math.round(B(t,n,e))}(t,n,e);return r<=0?0:r>=255?255:r}function G(t,n,e){return 0===t?n:1===t?e:{r:V(t,n.r,e.r),g:V(t,n.g,e.g),b:V(t,n.b,e.b),a:B(t,null==n.a?1:n.a,null==e.a?1:e.a)}}function z(t,n){for(var e=[],r=0;r<t;r++)e.push(n);return e}function Y(t,n){if(--n<=0)return t;var e=(t=Object.assign([],t)).length;do{for(var r=0;r<e;r++)t.push(t[r])}while(--n>0);return t}var $,U=function(){function t(n){r(this,t),this.list=n,this.length=n.length}return o(t,[{key:"setAttribute",value:function(t,n){for(var e=this.list,r=0;r<this.length;r++)e[r].setAttribute(t,n)}},{key:"removeAttribute",value:function(t){for(var n=this.list,e=0;e<this.length;e++)n[e].removeAttribute(t)}},{key:"style",value:function(t,n){for(var e=this.list,r=0;r<this.length;r++)e[r].style[t]=n}}]),t}(),Q=/-./g,H=function(t,n){return n.toUpperCase()};function J(t){return"function"==typeof t?t:q}function Z(t){return t?"function"==typeof t?t:Array.isArray(t)?function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:w;if(!Array.isArray(t))return n;switch(t.length){case 1:return S(t[0])||n;case 2:return S(t[0],t[1])||n;case 4:return _(t[0],t[1],t[2],t[3])||n}return n}(t,null):function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:w;switch(t){case"linear":return w;case"steps":return S(n.steps||1,n.jump||0)||e;case"bezier":case"cubic-bezier":return _(n.x1||0,n.y1||0,n.x2||0,n.y2||0)||e}return e}(t.type,t.value,null):null}function K(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=n.length-1;if(t<=n[0].t)return r?[0,0,n[0].v]:n[0].v;if(t>=n[i].t)return r?[i,1,n[i].v]:n[i].v;var o,u=n[0],a=null;for(o=1;o<=i;o++){if(!(t>n[o].t)){a=n[o];break}u=n[o]}return null==a?r?[i,1,n[i].v]:n[i].v:u.t===a.t?r?[o,1,a.v]:a.v:(t=(t-u.t)/(a.t-u.t),u.e&&(t=u.e(t)),r?[o,t,e(t,u.v,a.v)]:e(t,u.v,a.v))}function W(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return t&&t.length?"function"!=typeof n?null:("function"!=typeof e&&(e=null),function(r){var i=K(r,t,n);return null!=i&&e&&(i=e(i)),i}):null}function X(t,n){return t.t-n.t}function tt(t,n,r,i,o){var u,a="@"===r[0],l="#"===r[0],s=$[r],f=q;switch(a?(u=r.substr(1),r=u.replace(Q,H)):l&&(r=r.substr(1)),e(s)){case"function":if(f=s(i,o,K,Z,r,a,n,t),l)return f;break;case"string":f=W(i,J(s));break;case"object":if((f=W(i,J(s.i),s.f))&&"function"==typeof s.u)return s.u(n,f,r,a,t)}return f?function(t,n,e){if(arguments.length>3&&void 0!==arguments[3]&&arguments[3])return t instanceof U?function(r){return t.style(n,e(r))}:function(r){return t.style[n]=e(r)};if(Array.isArray(n)){var r=n.length;return function(i){var o=e(i);if(null==o)for(var u=0;u<r;u++)t[u].removeAttribute(n);else for(var a=0;a<r;a++)t[a].setAttribute(n,o)}}return function(r){var i=e(r);null==i?t.removeAttribute(n):t.setAttribute(n,i)}}(n,r,f,a):null}function nt(t,n,r,i){if(!i||"object"!==e(i))return null;var o=null,u=null;return Array.isArray(i)?u=function(t){if(!t||!t.length)return null;for(var n=0;n<t.length;n++)t[n].e&&(t[n].e=Z(t[n].e));return t.sort(X)}(i):(u=i.keys,o=i.data||null),u?tt(t,n,r,u,o):null}function et(t,n,e){if(!e)return null;var r=[];for(var i in e)if(e.hasOwnProperty(i)){var o=nt(t,n,i,e[i]);o&&r.push(o)}return r.length?r:null}function rt(t,n){if(!n.settings.duration||n.settings.duration<0)return null;var e,r,i,o,u,a=function(t,n){if(!n)return null;var e=[];if(Array.isArray(n))for(var r=n.length,i=0;i<r;i++){var o=n[i];if(2===o.length){var u=null;if("string"==typeof o[0])u=t.getElementById(o[0]);else if(Array.isArray(o[0])){u=[];for(var a=0;a<o[0].length;a++)if("string"==typeof o[0][a]){var l=t.getElementById(o[0][a]);l&&u.push(l)}u=u.length?1===u.length?u[0]:new U(u):null}if(u){var s=et(t,u,o[1]);s&&(e=e.concat(s))}}}else for(var f in n)if(n.hasOwnProperty(f)){var c=t.getElementById(f);if(c){var h=et(t,c,n[f]);h&&(e=e.concat(h))}}return e.length?e:null}(t,n.elements);return a?(e=a,r=n.settings,i=r.duration,o=e.length,u=null,function(t,n){var a=r.iterations||1/0,l=(r.alternate&&a%2==0)^r.direction>0?i:0,s=t%i,f=1+(t-s)/i;n*=r.direction,r.alternate&&f%2==0&&(n=-n);var c=!1;if(f>a)s=l,c=!0,-1===r.fill&&(s=r.direction>0?0:i);else if(n<0&&(s=i-s),s===u)return!1;u=s;for(var h=0;h<o;h++)e[h](s);return c}):null}function it(t,n){for(var e=n.querySelectorAll("svg"),r=0;r<e.length;r++)if(e[r].id===t.root&&!e[r].svgatorAnimation)return e[r].svgatorAnimation=!0,e[r];return null}function ot(t){var n=function(t){return t.shadowRoot};return document?Array.from(t.querySelectorAll(":not("+["a","area","audio","br","canvas","circle","datalist","embed","g","head","hr","iframe","img","input","link","object","path","polygon","rect","script","source","style","svg","title","track","video"].join()+")")).filter(n).map(n):[]}function ut(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=it(t,n);if(r)return r;if(e>=20)return null;for(var i=ot(n),o=0;o<i.length;o++){var u=ut(t,i[o],e+1);if(u)return u}return null}function at(t,n){if($=n,!t||!t.root||!Array.isArray(t.animations))return null;var e=ut(t);if(!e)return null;var r=t.animations.map((function(t){return rt(e,t)})).filter((function(t){return!!t}));return r.length?{svg:e,animations:r,animationSettings:t.animationSettings,options:t.options||void 0}:null}function lt(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Number,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"undefined"!=typeof BigInt&&BigInt,i="0x"+(t.replace(/[^0-9a-fA-F]+/g,"")||27);return n&&r&&e.isSafeInteger&&!e.isSafeInteger(+i)?e(r(i))%n+n:+i}function st(t,n,e){return!t||!e||n>t.length?t:t.substring(0,n)+st(t.substring(n+1),e,e)}function ft(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:27;return!t||t%n?t%n:[0,1].includes(n)?n:ft(t/n,n)}function ct(t,n,e){if(t&&t.length){var r=lt(e),i=ft(r)+5,o=st(t,ft(r,5),i);return o=o.replace(/\x7c$/g,"==").replace(/\x2f$/g,"="),o=function(t,n,e){var r=+("0x"+t.substring(0,4));t=t.substring(4);for(var i=lt(n,r)%r+e%27,o=[],u=0;u<t.length;u+=2)if("|"!==t[u]){var a=+("0x"+t[u]+t[u+1])-i;o.push(a)}else{var l=+("0x"+t.substring(u+1,u+1+4))-i;u+=3,o.push(l)}return String.fromCharCode.apply(String,o)}(o=(o=atob(o)).replace(/[\x41-\x5A]/g,""),n,r),o=JSON.parse(o)}}var ht=[{key:"alternate",def:!1},{key:"fill",def:1},{key:"iterations",def:0},{key:"direction",def:1},{key:"speed",def:1},{key:"fps",def:100}],vt=function(){function t(n,e){var i=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;r(this,t),this._id=0,this._running=!1,this._rollingBack=!1,this._animations=n,this._settings=e,(!o||o<"2022-05-02")&&delete this._settings.speed,ht.forEach((function(t){i._settings[t.key]=i._settings[t.key]||t.def})),this.duration=e.duration,this.offset=e.offset||0,this.rollbackStartOffset=0}return o(t,[{key:"alternate",get:function(){return this._settings.alternate}},{key:"fill",get:function(){return this._settings.fill}},{key:"iterations",get:function(){return this._settings.iterations}},{key:"direction",get:function(){return this._settings.direction}},{key:"speed",get:function(){return this._settings.speed}},{key:"fps",get:function(){return this._settings.fps}},{key:"maxFiniteDuration",get:function(){return this.iterations>0?this.iterations*this.duration:this.duration}},{key:"_apply",value:function(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=this._animations,r=e.length,i=0,o=0;o<r;o++)n[o]?i++:(n[o]=e[o](t,1),n[o]&&i++);return i}},{key:"_rollback",value:function(t){var n=this,e=1/0,r=null;this.rollbackStartOffset=t,this._rollingBack=!0,this._running=!0;this._id=window.requestAnimationFrame((function i(o){if(n._rollingBack){null==r&&(r=o);var u=Math.round(t-(o-r)*n.speed);if(u>n.duration&&e!==1/0){var a=!!n.alternate&&u/n.duration%2>1,l=u%n.duration;u=(l+=a?n.duration:0)||n.duration}var s=(n.fps?1e3/n.fps:0)*n.speed,f=Math.max(0,u);f<=e-s&&(n.offset=f,e=f,n._apply(f));var c=n.iterations>0&&-1===n.fill&&u>=n.maxFiniteDuration;(u<=0||n.offset<u||c)&&n.stop(),n._id=window.requestAnimationFrame(i)}}))}},{key:"_start",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=-1/0,r=null,i={};this._running=!0;var o=function o(u){null==r&&(r=u);var a=Math.round((u-r)*t.speed+n),l=(t.fps?1e3/t.fps:0)*t.speed;if(a>=e+l&&!t._rollingBack&&(t.offset=a,e=a,t._apply(a,i)===t._animations.length))return void t.pause(!0);t._id=window.requestAnimationFrame(o)};this._id=window.requestAnimationFrame(o)}},{key:"_pause",value:function(){this._id&&window.cancelAnimationFrame(this._id),this._running=!1}},{key:"play",value:function(){if(!this._running)return this._rollingBack?this._rollback(this.offset):this._start(this.offset)}},{key:"stop",value:function(){this._pause(),this.offset=0,this.rollbackStartOffset=0,this._rollingBack=!1,this._apply(0)}},{key:"reachedToEnd",value:function(){return this.iterations>0&&this.offset>=this.iterations*this.duration}},{key:"restart",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.stop(t),this.play(t)}},{key:"pause",value:function(){this._pause()}},{key:"reverse",value:function(){this.direction=-this.direction}}],[{key:"build",value:function(t,n){delete t.animationSettings,t.options=ct(t.options,t.root,"5c7f360c"),t.animations.map((function(n){n.settings=ct(n.s,t.root,"5c7f360c"),delete n.s,t.animationSettings||(t.animationSettings=n.settings)}));var e=t.version;if(!(t=at(t,n)))return null;var r=t.options||{},i=new this(t.animations,t.animationSettings,e);return{el:t.svg,options:r,player:i}}},{key:"push",value:function(t){return this.build(t)}},{key:"init",value:function(){var t=this,n=window.__SVGATOR_PLAYER__&&window.__SVGATOR_PLAYER__["5c7f360c"];Array.isArray(n)&&n.splice(0).forEach((function(n){return t.build(n)}))}}]),t}();function yt(t){return p(t)+""}function gt(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";return t&&t.length?t.map(yt).join(n):""}function dt(t){if(!t)return"transparent";if(null==t.a||t.a>=1){var n=function(t){return 1===(t=parseInt(t).toString(16)).length?"0"+t:t},e=function(t){return t.charAt(0)===t.charAt(1)},r=n(t.r),i=n(t.g),o=n(t.b);return e(r)&&e(i)&&e(o)&&(r=r.charAt(0),i=i.charAt(0),o=o.charAt(0)),"#"+r+i+o}return"rgba("+t.r+","+t.g+","+t.b+","+t.a+")"}function pt(t){return t?"url(#"+t+")":"none"}!function(){for(var t=0,n=["ms","moz","webkit","o"],e=0;e<n.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[n[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n[e]+"CancelAnimationFrame"]||window[n[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(n){var e=Date.now(),r=Math.max(0,16-(e-t)),i=window.setTimeout((function(){n(e+r)}),r);return t=e+r,i},window.cancelAnimationFrame=window.clearTimeout)}();var mt={f:null,i:function(t,n,e){return 0===t?n:1===t?e:{x:D(t,n.x,e.x),y:D(t,n.y,e.y)}},u:function(t,n){return function(e){var r=n(e);t.setAttribute("rx",yt(r.x)),t.setAttribute("ry",yt(r.y))}}},bt={f:null,i:function(t,n,e){return 0===t?n:1===t?e:{width:D(t,n.width,e.width),height:D(t,n.height,e.height)}},u:function(t,n){return function(e){var r=n(e);t.setAttribute("width",yt(r.width)),t.setAttribute("height",yt(r.height))}}};Object.freeze({M:2,L:2,Z:0,H:1,V:1,C:6,Q:4,T:2,S:4,A:7});var wt={},At=null;function _t(t){var n=function(){if(At)return At;if("object"!==("undefined"==typeof document?"undefined":e(document))||!document.createElementNS)return{};var t=document.createElementNS("http://www.w3.org/2000/svg","svg");return t&&t.style?(t.style.position="absolute",t.style.opacity="0.01",t.style.zIndex="-9999",t.style.left="-9999px",t.style.width="1px",t.style.height="1px",At={svg:t}):{}}().svg;if(!n)return function(t){return null};var r=document.createElementNS(n.namespaceURI,"path");r.setAttributeNS(null,"d",t),r.setAttributeNS(null,"fill","none"),r.setAttributeNS(null,"stroke","none"),n.appendChild(r);var i=r.getTotalLength();return function(t){var n=r.getPointAtLength(i*t);return{x:n.x,y:n.y}}}function xt(t){return wt[t]?wt[t]:wt[t]=_t(t)}function kt(t,n,e,r){if(!t||!r)return!1;var i=["M",t.x,t.y];if(n&&e&&(i.push("C"),i.push(n.x),i.push(n.y),i.push(e.x),i.push(e.y)),n?!e:e){var o=n||e;i.push("Q"),i.push(o.x),i.push(o.y)}return n||e||i.push("L"),i.push(r.x),i.push(r.y),i.join(" ")}function St(t,n,e,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=kt(t,n,e,r),u=xt(o);try{return u(i)}catch(t){return null}}function Ot(t,n,e){return t+(n-t)*e}function jt(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i={x:Ot(t.x,n.x,e),y:Ot(t.y,n.y,e)};return r&&(i.a=Mt(t,n)),i}function Mt(t,n){return Math.atan2(n.y-t.y,n.x-t.x)}function Et(t,n,e,r){var i=1-r;return i*i*t+2*i*r*n+r*r*e}function Pt(t,n,e,r){return 2*(1-r)*(n-t)+2*r*(e-n)}function It(t,n,e,r){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=St(t,n,null,e,r);return o||(o={x:Et(t.x,n.x,e.x,r),y:Et(t.y,n.y,e.y,r)}),i&&(o.a=Rt(t,n,e,r)),o}function Rt(t,n,e,r){return Math.atan2(Pt(t.y,n.y,e.y,r),Pt(t.x,n.x,e.x,r))}function Ft(t,n,e,r,i){var o=i*i;return i*o*(r-t+3*(n-e))+3*o*(t+e-2*n)+3*i*(n-t)+t}function Nt(t,n,e,r,i){var o=1-i;return 3*(o*o*(n-t)+2*o*i*(e-n)+i*i*(r-e))}function Tt(t,n,e,r,i){var o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],u=St(t,n,e,r,i);return u||(u={x:Ft(t.x,n.x,e.x,r.x,i),y:Ft(t.y,n.y,e.y,r.y,i)}),o&&(u.a=qt(t,n,e,r,i)),u}function qt(t,n,e,r,i){return Math.atan2(Nt(t.y,n.y,e.y,r.y,i),Nt(t.x,n.x,e.x,r.x,i))}function Bt(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(Lt(n)){if(Ct(e))return It(n,e.start,e,t,r)}else if(Lt(e)){if(Vt(n))return It(n,n.end,e,t,r)}else{if(Vt(n))return Ct(e)?Tt(n,n.end,e.start,e,t,r):It(n,n.end,e,t,r);if(Ct(e))return It(n,e.start,e,t,r)}return jt(n,e,t,r)}function Dt(t,n,e){var r=Bt(t,n,e,!0);return r.a=function(t){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?t+Math.PI:t}(r.a)/b,r}function Lt(t){return!t.type||"corner"===t.type}function Ct(t){return null!=t.start&&!Lt(t)}function Vt(t){return null!=t.end&&!Lt(t)}var Gt=new T;var zt={f:yt,i:B},Yt={f:yt,i:L};function $t(t,n,e){return t.map((function(t){return function(t,n,e){var r=t.v;if(!r||"g"!==r.t||r.s||!r.v||!r.r)return t;var i=e.getElementById(r.r),o=i&&i.querySelectorAll("stop")||[];return r.s=r.v.map((function(t,n){var e=o[n]&&o[n].getAttribute("offset");return{c:t,o:e=p(parseInt(e)/100)}})),delete r.v,t}(t,0,e)}))}var Ut={gt:"gradientTransform",c:{x:"cx",y:"cy"},rd:"r",f:{x:"x1",y:"y1"},to:{x:"x2",y:"y2"}};function Qt(t,n,r,i,o,u,a,l){return $t(t,0,l),n=function(t,n,e){for(var r,i,o,u=t.length-1,a={},l=0;l<=u;l++)(r=t[l]).e&&(r.e=n(r.e)),r.v&&"g"===(i=r.v).t&&i.r&&(o=e.getElementById(i.r))&&(a[i.r]={e:o,s:o.querySelectorAll("stop")});return a}(t,i,l),function(i){var o=r(i,t,Ht);if(!o)return"none";if("c"===o.t)return dt(o.v);if("g"===o.t){if(!n[o.r])return pt(o.r);var u=n[o.r];return function(t,n){for(var e=t.s,r=e.length;r<n.length;r++){var i=e[e.length-1].cloneNode();i.id=Kt(i.id),t.e.appendChild(i),e=t.s=t.e.querySelectorAll("stop")}for(var o=0,u=e.length,a=n.length-1;o<u;o++)e[o].setAttribute("stop-color",dt(n[Math.min(o,a)].c)),e[o].setAttribute("offset",n[Math.min(o,a)].o)}(u,o.s),Object.keys(Ut).forEach((function(t){if(void 0!==o[t])if("object"!==e(Ut[t])){var n,r="gt"===t?(n=o[t],Array.isArray(n)?"matrix("+n.join(" ")+")":""):o[t],i=Ut[t];u.e.setAttribute(i,r)}else Object.keys(Ut[t]).forEach((function(n){if(void 0!==o[t][n]){var e=o[t][n],r=Ut[t][n];u.e.setAttribute(r,e)}}))})),pt(o.r)}return"none"}}function Ht(t,e,r){if(0===t)return e;if(1===t)return r;if(e&&r){var i=e.t;if(i===r.t)switch(e.t){case"c":return{t:i,v:G(t,e.v,r.v)};case"g":if(e.r===r.r){var o={t:i,s:Jt(t,e.s,r.s),r:e.r};return e.gt&&r.gt&&(o.gt=function(t,n,e){var r=n.length;if(r!==e.length)return q(t,n,e);for(var i=new Array(r),o=0;o<r;o++)i[o]=B(t,n[o],e[o]);return i}(t,e.gt,r.gt)),e.c?(o.c=C(t,e.c,r.c),o.rd=D(t,e.rd,r.rd)):e.f&&(o.f=C(t,e.f,r.f),o.to=C(t,e.to,r.to)),o}}if("c"===e.t&&"g"===r.t||"c"===r.t&&"g"===e.t){var u="c"===e.t?e:r,a="g"===e.t?n({},e):n({},r),l=a.s.map((function(t){return{c:u.v,o:t.o}}));return a.s="c"===e.t?Jt(t,l,a.s):Jt(t,a.s,l),a}}return q(t,e,r)}function Jt(t,n,e){if(n.length===e.length)return n.map((function(n,r){return Zt(t,n,e[r])}));for(var r=Math.max(n.length,e.length),i=[],o=0;o<r;o++){var u=Zt(t,n[Math.min(o,n.length-1)],e[Math.min(o,e.length-1)]);i.push(u)}return i}function Zt(t,n,e){return{o:L(t,n.o,e.o||0),c:G(t,n.c,e.c||{})}}function Kt(t){return t.replace(/-fill-([0-9]+)$/,(function(t,n){return"-fill-"+(+n+1)}))}var Wt={fill:Qt,"fill-opacity":Yt,stroke:Qt,"stroke-opacity":Yt,"strokeWidth":zt,"stroke-dashoffset":{f:yt,i:B},"stroke-dasharray":{f:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";return t&&t.length>0&&(t=t.map((function(t){return p(t,4)}))),gt(t,n)},i:function(t,n,e){var r,i,o,u=n.length,a=e.length;if(u!==a)if(0===u)n=z(u=a,0);else if(0===a)a=u,e=z(u,0);else{var l=(o=(r=u)*(i=a)/function(t,n){for(var e;n;)e=n,n=t%n,t=e;return t||1}(r,i))<0?-o:o;n=Y(n,Math.floor(l/u)),e=Y(e,Math.floor(l/a)),u=a=l}for(var s=[],f=0;f<u;f++)s.push(p(D(t,n[f],e[f])));return s}},opacity:Yt,transform:function(t,n,r,i){if(!(t=function(t,n){if(!t||"object"!==e(t))return null;var r=!1;for(var i in t)t.hasOwnProperty(i)&&(t[i]&&t[i].length?(t[i].forEach((function(t){t.e&&(t.e=n(t.e))})),r=!0):delete t[i]);return r?t:null}(t,i)))return null;var o=function(e,i,o){var u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return t[e]?r(i,t[e],o):n&&n[e]?n[e]:u};return n&&n.a&&t.o?function(n){var e=r(n,t.o,Dt);return Gt.recomposeSelf(e,o("r",n,B,0)+e.a,o("k",n,C),o("s",n,C),o("t",n,C)).toString()}:function(t){return Gt.recomposeSelf(o("o",t,Bt,null),o("r",t,B,0),o("k",t,C),o("s",t,C),o("t",t,C)).toString()}},r:zt,"#size":bt,"#radius":mt,_:function(t,n){if(Array.isArray(t))for(var e=0;e<t.length;e++)this[t[e]]=n;else this[t]=n}},Xt=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&l(t,n)}(u,t);var n,e,i=(n=u,e=s(),function(){var t,r=a(n);if(e){var i=a(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return c(this,t)});function u(){return r(this,u),i.apply(this,arguments)}return o(u,null,[{key:"build",value:function(t){var n=h(a(u),"build",this).call(this,t,Wt);if(!n)return null;n.el,n.options,function(t,n,e){t.play()}(n.player)}}]),u}(vt);return Xt.init(),Xt}));
(function(s,i,o,w,d,a,b){w[o]=w[o]||{};w[o][s]=w[o][s]||[];w[o][s].push(i);})('5c7f360c',{"root":"eMBg36dJpbf1","version":"2022-05-04","animations":[{"elements":{"eMBg36dJpbf1202":{"transform":{"data":{"t":{"x":-223.96875,"y":-648.15625}},"keys":{"o":[{"t":0,"v":{"x":223.96851,"y":635.85937,"type":"cusp"}},{"t":330,"v":{"x":223.96851,"y":722.421878,"type":"cusp","end":{"x":223.96851,"y":753.402349}}},{"t":670,"v":{"x":280.062265,"y":778.515633,"type":"cusp","start":{"x":249.081793,"y":778.515633},"end":{"x":311.042736,"y":778.515633}}},{"t":1010,"v":{"x":336.159925,"y":834.613294,"type":"cusp","start":{"x":336.159925,"y":803.632822}}},{"t":1240,"v":{"x":336.159925,"y":894.789081,"type":"cusp","end":{"x":336.159925,"y":901.738299}}},{"t":1320,"v":{"x":343.835707,"y":913.320332,"type":"cusp","start":{"x":338.921644,"y":908.406269},"end":{"x":348.74977,"y":918.234395}}},{"t":1400,"v":{"x":362.363053,"y":920.996114,"type":"cusp","start":{"x":355.413833,"y":920.996114}}},{"t":1500,"v":{"x":388.570087,"y":920.996114,"type":"cusp"}}]}}},"eMBg36dJpbf1211":{"transform":{"data":{"t":{"x":-607.234375,"y":-706.675781}},"keys":{"o":[{"t":0,"v":{"x":610.672122,"y":731.128662,"type":"cusp"}},{"t":500,"v":{"x":610.672122,"y":520.628643,"type":"cusp","start":{"x":610.672122,"y":479.206764},"end":{"x":607.292553,"y":486.01524}}},{"t":1000,"v":{"x":685.672129,"y":445.628637,"type":"cusp","start":{"x":645.423278,"y":448.977767},"end":{"x":644.25025,"y":445.628637}}},{"t":1500,"v":{"x":905.980742,"y":445.628637,"type":"cusp"}}]}}},"eMBg36dJpbf1220":{"transform":{"data":{"t":{"x":-1101.871094,"y":-737.511719}},"keys":{"o":[{"t":0,"v":{"x":1101.874496,"y":720.000083,"type":"cusp"}},{"t":400,"v":{"x":1101.874496,"y":1258.398567,"type":"cusp","start":{"x":1101.874496,"y":1299.820445},"end":{"x":1101.472473,"y":1307.17593}}},{"t":700,"v":{"x":1176.874502,"y":1333.398573,"type":"cusp","start":{"x":1144.960488,"y":1331.951407},"end":{"x":1135.452624,"y":1333.398573}}},{"t":1500,"v":{"x":1427.976087,"y":1333.398573,"type":"cusp"}}]}}},"eMBg36dJpbf1229":{"transform":{"data":{"t":{"x":-1713.542969,"y":-288.566406}},"keys":{"o":[{"t":0,"v":{"x":1728.80344,"y":290.004045,"type":"cusp"}},{"t":770,"v":{"x":1450.221385,"y":290.004045,"type":"cusp","end":{"x":1408.799506,"y":290.004045}}},{"t":1100,"v":{"x":1375.221378,"y":365.004052,"type":"cusp","start":{"x":1375.221378,"y":323.582173}}},{"t":1220,"v":{"x":1375.221378,"y":408.336086,"type":"cusp","end":{"x":1375.221378,"y":418.609525}}},{"t":1310,"v":{"x":1363.877627,"y":435.722808,"type":"cusp","start":{"x":1371.143253,"y":428.461088},"end":{"x":1356.615908,"y":442.988433}}},{"t":1390,"v":{"x":1336.490906,"y":447.066559,"type":"cusp","start":{"x":1346.764344,"y":447.066559}}},{"t":1500,"v":{"x":1297.760434,"y":447.066559,"type":"cusp"}}]}}},"eMBg36dJpbf1238":{"transform":{"data":{"t":{"x":-1831.429688,"y":-1111.546875}},"keys":{"o":[{"t":0,"v":{"x":1818.101045,"y":1111.171991,"type":"cusp"}},{"t":190,"v":{"x":1916.132303,"y":1111.171991,"type":"cusp","end":{"x":1957.554182,"y":1111.171991}}},{"t":420,"v":{"x":1991.13231,"y":1036.171985,"type":"cusp","start":{"x":1991.13231,"y":1077.593864}}},{"t":840,"v":{"x":1991.13231,"y":825.886811,"type":"cusp","end":{"x":1991.13231,"y":784.464932}}},{"t":1070,"v":{"x":2066.132316,"y":750.886804,"type":"cusp","start":{"x":2024.710438,"y":750.886804}}},{"t":1170,"v":{"x":2117.683102,"y":750.886804,"type":"cusp","end":{"x":2129.710447,"y":750.886804}}},{"t":1240,"v":{"x":2149.753418,"y":764.168055,"type":"cusp","start":{"x":2141.245605,"y":755.664148},"end":{"x":2158.257324,"y":772.671962}}},{"t":1310,"v":{"x":2163.034669,"y":796.234464,"type":"cusp","start":{"x":2163.034669,"y":784.207119}}},{"t":1340,"v":{"x":2163.034669,"y":809.652434,"type":"cusp","end":{"x":2163.034669,"y":818.121185}}},{"t":1390,"v":{"x":2172.390138,"y":832.234467,"type":"cusp","start":{"x":2166.39795,"y":826.246186},"end":{"x":2178.37842,"y":838.222749}}},{"t":1440,"v":{"x":2194.968265,"y":841.58603,"type":"cusp","start":{"x":2186.499515,"y":841.58603}}},{"t":1470,"v":{"x":2226.901862,"y":841.58603,"type":"cusp"}}]}}}},"s":"MTDA1ZDg5MzA3MjgzODRA2ZjgyNzc3ZDdjMzAC0ODNmNDMzZTNlM2EzSMDcyNzdQODA3MzcxONDI3N0Y3ZDdjMzBTNDQgzZjNhMzA3NzgyNzMU4MDZmODI3NzdkN2M4MMTMwRzQ4M2UzYTMwUFjc0Nzc3YTdhMzA0ODBNmM2EzMDZmN2E4MjcWzSTgwN2NJNmY4MjczHMzA0ODc0WDZmN2E4MSTczM2EzMDgxN2U3M1Nk3MzcyMzA0ODNmM2EJzMDc0N2U4MTMwNDhIKM2YzZTNlOGI/"}],"options":"MCDAxMDg4MmY4MDgxRzYZlN2Y4MTJmSzQ3MmYP3OTdjVDZlNzEyZjhhF"},'__SVGATOR_PLAYER__',window,document)

    })

    return (
        <svg id="eMBg36dJpbf1" xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 2730 1439.999935" shapeRendering="geometricPrecision"
    textRendering="geometricPrecision">
    <g clipPath="url(#eMBg36dJpbf9)">
        <g>
            <g clipPath="url(#eMBg36dJpbf7)">
                <g>
                    <path
                        d="M29.179688,86.957031h389.574218v546.316407h-389.574218v-546.316407Zm0,0"
                        fill="#5b6776" />
                </g>
                <clipPath id="eMBg36dJpbf7">
                    <path
                        d="M40.429688,86.957031h367.074218c2.984375,0,5.847656,1.1875,7.957032,3.296875s3.292968,4.96875,3.292968,7.953125v523.15625c0,2.984375-1.183594,5.84375-3.292968,7.953125s-4.972657,3.296875-7.957032,3.296875h-367.074218c-2.984376,0-5.84375-1.1875-7.953126-3.296875-2.113281-2.109375-3.296874-4.96875-3.296874-7.953125v-523.15625c0-2.984375,1.183593-5.84375,3.296874-7.953125c2.109376-2.109375,4.96875-3.296875,7.953126-3.296875Zm0,0" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf9">
            <path d="M29.179688,86.957031h389.574218v546.042969h-389.574218v-546.042969Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf18)">
        <g>
            <g clipPath="url(#eMBg36dJpbf16)">
                <g>
                    <path d="M29.179688,90.324219h389.484374v80.800781h-389.484374v-80.800781Zm0,0"
                        fill="#d9d9d9" />
                </g>
                <clipPath id="eMBg36dJpbf16">
                    <path
                        d="M40.429688,90.324219h367.074218c2.984375,0,5.847656,1.1875,7.957032,3.296875s3.292968,4.972656,3.292968,7.953125v58.300781c0,2.984375-1.183594,5.847656-3.292968,7.957031s-4.972657,3.292969-7.957032,3.292969h-367.074218c-2.984376,0-5.84375-1.183594-7.953126-3.292969-2.113281-2.109375-3.296874-4.972656-3.296874-7.957031v-58.300781c0-2.980469,1.183593-5.84375,3.296874-7.953125c2.109376-2.109375,4.96875-3.296875,7.953126-3.296875Zm0,0" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf18">
            <path d="M29,90.011719h389.976562v81.113281L29,171.125v-81.113281Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf27)">
        <g>
            <g clipPath="url(#eMBg36dJpbf25)">
                <g>
                    <path d="M29.179688,204.855469h389.484374v80.800781h-389.484374v-80.800781Zm0,0"
                        fill="#d9d9d9" />
                </g>
                <clipPath id="eMBg36dJpbf25">
                    <path
                        d="M40.429688,204.855469h367.074218c2.984375,0,5.847656,1.183593,7.957032,3.292969c2.109374,2.113281,3.292968,4.972656,3.292968,7.957031v58.300781c0,2.984375-1.183594,5.84375-3.292968,7.953125s-4.972657,3.296875-7.957032,3.296875h-367.074218c-2.984376,0-5.84375-1.1875-7.953126-3.296875-2.113281-2.109375-3.296874-4.96875-3.296874-7.953125v-58.300781c0-2.984375,1.183593-5.84375,3.296874-7.957031c2.109376-2.109376,4.96875-3.292969,7.953126-3.292969Zm0,0"
                        transform="translate(0 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf27">
            <path d="M29,204.539062h389.976562v81.117188h-389.976562v-81.117188Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf36)">
        <g>
            <g clipPath="url(#eMBg36dJpbf34)">
                <g>
                    <path d="M29.179688,319.382812h389.484374v80.800782h-389.484374v-80.800782Zm0,0"
                        fill="#d9d9d9" />
                </g>
                <clipPath id="eMBg36dJpbf34">
                    <path
                        d="M40.429688,319.382812h367.074218c2.984375,0,5.847656,1.1875,7.957032,3.296876s3.292968,4.972656,3.292968,7.953124v58.300782c0,2.984375-1.183594,5.847656-3.292968,7.957031s-4.972657,3.292969-7.957032,3.292969h-367.074218c-2.984376,0-5.84375-1.183594-7.953126-3.292969-2.113281-2.109375-3.296874-4.972656-3.296874-7.957031v-58.300782c0-2.980468,1.183593-5.84375,3.296874-7.953124c2.109376-2.109376,4.96875-3.296876,7.953126-3.296876Zm0,0" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf36">
            <path d="M29,319.070312h389.976562v81.113282h-389.976562v-81.113282Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf45)">
        <g transform="translate(0 0.000001)">
            <g clipPath="url(#eMBg36dJpbf43)">
                <g transform="translate(0 0.000001)">
                    <path d="M29.179688,547.8125h389.484374v80.796875h-389.484374v-80.796875Zm0,0"
                        transform="translate(0 0.000001)" fill="#d9d9d9" />
                </g>
                <clipPath id="eMBg36dJpbf43">
                    <path
                        d="M40.429688,547.8125h367.074218c2.984375,0,5.847656,1.183594,7.957032,3.292969s3.292968,4.972656,3.292968,7.957031v58.296875c0,2.984375-1.183594,5.847656-3.292968,7.957031s-4.972657,3.292969-7.957032,3.292969h-367.074218c-2.984376,0-5.84375-1.183594-7.953126-3.292969-2.113281-2.109375-3.296874-4.972656-3.296874-7.957031v-58.296875c0-2.984375,1.183593-5.847656,3.296874-7.957031c2.109376-2.109375,4.96875-3.292969,7.953126-3.292969Zm0,0"
                        transform="translate(0 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf45">
            <path d="M29,547.496094h389.976562v81.113281h-389.976562v-81.113281Zm0,0"
                transform="translate(0 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf54)">
        <g>
            <g clipPath="url(#eMBg36dJpbf52)">
                <g>
                    <path d="M41.597656,101.914062h345.574219v19.183594h-345.574219v-19.183594Zm0,0"
                        fill="#00bf63" />
                </g>
                <clipPath id="eMBg36dJpbf52">
                    <path
                        d="M46.097656,101.914062h336.558594c2.488281,0,4.5,2.015626,4.5,4.5v10.183594c0,2.484375-2.011719,4.5-4.5,4.5h-336.558594c-2.488281,0-4.5-2.015625-4.5-4.5v-10.183594c0-2.484374,2.011719-4.5,4.5-4.5Zm0,0" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf54">
            <path d="M41.597656,101.914062h345.574219v19.183594h-345.574219v-19.183594Zm0,0"
                transform="translate(.000001 0)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf63)">
        <g transform="translate(.000001 0)">
            <g clipPath="url(#eMBg36dJpbf61)">
                <g transform="translate(.000001 0)">
                    <path d="M41.597656,128.03125h209.820313v11.027344h-209.820313v-11.027344Zm0,0"
                        transform="translate(.000001 0)" fill="#a6a6a6" />
                </g>
                <clipPath id="eMBg36dJpbf61">
                    <path
                        d="M46.097656,128.03125h200.828125c2.488281,0,4.5,2.015625,4.5,4.5v2.027344c0,2.484375-2.011719,4.5-4.5,4.5h-200.828125c-2.488281,0-4.5-2.015625-4.5-4.5v-2.027344c0-2.484375,2.011719-4.5,4.5-4.5Zm0,0"
                        transform="translate(.000001 0)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf63">
            <path d="M41.597656,128.03125h209.863282v11.027344h-209.863282v-11.027344Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf72)">
        <g>
            <g clipPath="url(#eMBg36dJpbf70)">
                <g>
                    <path d="M41.597656,145.96875h293.496094v11.027344h-293.496094v-11.027344Zm0,0"
                        fill="#a6a6a6" />
                </g>
                <clipPath id="eMBg36dJpbf70">
                    <path
                        d="M46.097656,145.96875h284.492188c2.488281,0,4.5,2.015625,4.5,4.5v2.027344c0,2.484375-2.011719,4.5-4.5,4.5h-284.492188c-2.488281,0-4.5-2.015625-4.5-4.5v-2.027344c0-2.484375,2.011719-4.5,4.5-4.5Zm0,0" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf72">
            <path d="M41.597656,145.96875h293.496094v11.027344h-293.496094v-11.027344Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf81)">
        <g transform="translate(.000001 0)">
            <g clipPath="url(#eMBg36dJpbf79)">
                <g transform="translate(.000001 0)">
                    <path d="M41.597656,219.628906h268.320313v19.183594h-268.320313v-19.183594Zm0,0"
                        transform="translate(.000001 0)" fill="#00bf63" />
                </g>
                <clipPath id="eMBg36dJpbf79">
                    <path
                        d="M46.097656,219.628906h259.292969c2.484375,0,4.5,2.015625,4.5,4.5v10.183594c0,2.484375-2.015625,4.5-4.5,4.5h-259.292969c-2.488281,0-4.5-2.015625-4.5-4.5v-10.183594c0-2.484375,2.011719-4.5,4.5-4.5Zm0,0"
                        transform="translate(.000001 0)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf81">
            <path d="M41.597656,219.628906h268.320313v19.183594h-268.320313v-19.183594Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf90)">
        <g transform="translate(.000001 0)">
            <g clipPath="url(#eMBg36dJpbf88)">
                <g transform="translate(.000001 0)">
                    <path d="M41.597656,245.726562h209.820313v11.023438h-209.820313v-11.023438Zm0,0"
                        transform="translate(.000001 0)" fill="#a6a6a6" />
                </g>
                <clipPath id="eMBg36dJpbf88">
                    <path
                        d="M46.097656,245.726562h200.828125c2.488281,0,4.5,2.011719,4.5,4.5v2.023438c0,2.484375-2.011719,4.5-4.5,4.5h-200.828125c-2.488281,0-4.5-2.015625-4.5-4.5v-2.023438c0-2.488281,2.011719-4.5,4.5-4.5Zm0,0"
                        transform="translate(.000001 0)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf90">
            <path d="M41.597656,245.726562h209.863282v11.023438h-209.863282v-11.023438Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf99)">
        <g>
            <g clipPath="url(#eMBg36dJpbf97)">
                <g>
                    <path d="M41.597656,263.664062h82.6875v11.023438h-82.6875v-11.023438Zm0,0"
                        fill="#a6a6a6" />
                </g>
                <clipPath id="eMBg36dJpbf97">
                    <path
                        d="M46.097656,263.664062h73.679688c2.488281,0,4.5,2.011719,4.5,4.5v2.023438c0,2.484375-2.011719,4.5-4.5,4.5h-73.679688c-2.488281,0-4.5-2.015625-4.5-4.5v-2.023438c0-2.488281,2.011719-4.5,4.5-4.5Zm0,0" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf99">
            <path d="M41.597656,263.664062h82.6875v11.023438h-82.6875v-11.023438Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf108)">
        <g>
            <g clipPath="url(#eMBg36dJpbf106)">
                <g>
                    <path d="M41.597656,334.046875h293.496094v19.179687h-293.496094v-19.179687Zm0,0"
                        fill="#00bf63" />
                </g>
                <clipPath id="eMBg36dJpbf106">
                    <path
                        d="M46.097656,334.046875h284.492188c2.488281,0,4.5,2.015625,4.5,4.5v10.179687c0,2.488282-2.011719,4.5-4.5,4.5h-284.492188c-2.488281,0-4.5-2.011718-4.5-4.5v-10.179687c0-2.484375,2.011719-4.5,4.5-4.5Zm0,0"
                        transform="translate(0 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf108">
            <path d="M41.597656,334.046875h293.496094v19.179687h-293.496094v-19.179687Zm0,0"
                transform="translate(0 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf117)">
        <g>
            <g clipPath="url(#eMBg36dJpbf115)">
                <g>
                    <path d="M41.597656,360.140625h354.777344v12.042969h-354.777344v-12.042969Zm0,0"
                        fill="#a6a6a6" />
                </g>
                <clipPath id="eMBg36dJpbf115">
                    <path
                        d="M46.097656,360.140625h345.761719c2.484375,0,4.5,2.015625,4.5,4.5v3.042969c0,2.484375-2.015625,4.5-4.5,4.5h-345.761719c-2.488281,0-4.5-2.015625-4.5-4.5v-3.042969c0-2.484375,2.011719-4.5,4.5-4.5Zm0,0"
                        transform="translate(.000001 0)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf117">
            <path d="M41.597656,360.140625h354.777344v12.042969h-354.777344v-12.042969Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf126)">
        <g>
            <g clipPath="url(#eMBg36dJpbf124)">
                <g>
                    <path d="M41.597656,379.097656h345.558594v12.042969h-345.558594v-12.042969Zm0,0"
                        fill="#a6a6a6" />
                </g>
                <clipPath id="eMBg36dJpbf124">
                    <path
                        d="M46.097656,379.097656h336.558594c2.488281,0,4.5,2.015625,4.5,4.5v3.042969c0,2.484375-2.011719,4.5-4.5,4.5h-336.558594c-2.488281,0-4.5-2.015625-4.5-4.5v-3.042969c0-2.484375,2.011719-4.5,4.5-4.5Zm0,0" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf126">
            <path d="M41.597656,379.097656h345.605469v12.042969h-345.605469v-12.042969Zm0,0"
                transform="translate(.000001 0)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf135)">
        <g>
            <g clipPath="url(#eMBg36dJpbf133)">
                <g>
                    <path d="M29.179688,433.597656h389.484374v80.800782h-389.484374v-80.800782Zm0,0"
                        fill="#d9d9d9" />
                </g>
                <clipPath id="eMBg36dJpbf133">
                    <path
                        d="M40.429688,433.597656h367.074218c2.984375,0,5.847656,1.183594,7.957032,3.296875c2.109374,2.109375,3.292968,4.96875,3.292968,7.953125v58.300782c0,2.984374-1.183594,5.84375-3.292968,7.953124s-4.972657,3.296876-7.957032,3.296876h-367.074218c-2.984376,0-5.84375-1.1875-7.953126-3.296876-2.113281-2.109374-3.296874-4.96875-3.296874-7.953124v-58.300782c0-2.984375,1.183593-5.84375,3.296874-7.953125c2.109376-2.113281,4.96875-3.296875,7.953126-3.296875Zm0,0" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf135">
            <path d="M29,433.28125h389.976562v81.117188h-389.976562v-81.117188Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf144)">
        <g>
            <g clipPath="url(#eMBg36dJpbf142)">
                <g>
                    <path d="M41.597656,447.582031h82.644532v19.179688h-82.644532v-19.179688Zm0,0"
                        fill="#00bf63" />
                </g>
                <clipPath id="eMBg36dJpbf142">
                    <path
                        d="M46.097656,447.582031h73.679688c2.488281,0,4.5,2.015625,4.5,4.5v10.179688c0,2.488281-2.011719,4.5-4.5,4.5h-73.679688c-2.488281,0-4.5-2.011719-4.5-4.5v-10.179688c0-2.484375,2.011719-4.5,4.5-4.5Zm0,0" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf144">
            <path d="M41.597656,447.582031h82.722656v19.179688h-82.722656v-19.179688Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf153)">
        <g>
            <g clipPath="url(#eMBg36dJpbf151)">
                <g>
                    <path d="M41.597656,473.675781h192.394532v12.042969h-192.394532v-12.042969Zm0,0"
                        fill="#a6a6a6" />
                </g>
                <clipPath id="eMBg36dJpbf151">
                    <path
                        d="M46.097656,473.675781h183.402344c2.484375,0,4.5,2.015625,4.5,4.5v3.042969c0,2.484375-2.015625,4.5-4.5,4.5h-183.402344c-2.488281,0-4.5-2.015625-4.5-4.5v-3.042969c0-2.484375,2.011719-4.5,4.5-4.5Zm0,0" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf153">
            <path d="M41.597656,473.675781h192.402344v12.042969h-192.402344v-12.042969Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf162)">
        <g>
            <g clipPath="url(#eMBg36dJpbf160)">
                <g>
                    <path d="M41.597656,492.632812h259.898438v12.042969h-259.898438v-12.042969Zm0,0"
                        fill="#a6a6a6" />
                </g>
                <clipPath id="eMBg36dJpbf160">
                    <path
                        d="M46.097656,492.632812h250.890625c2.484375,0,4.5,2.011719,4.5,4.5v3.042969c0,2.484375-2.015625,4.5-4.5,4.5h-250.890625c-2.488281,0-4.5-2.015625-4.5-4.5v-3.042969c0-2.488281,2.011719-4.5,4.5-4.5Zm0,0"
                        transform="translate(.000001 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf162">
            <path d="M41.597656,492.632812h259.898438v12.042969h-259.898438v-12.042969Zm0,0"
                transform="translate(0 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf171)">
        <g>
            <g clipPath="url(#eMBg36dJpbf169)">
                <g>
                    <path d="M41.597656,561.636719h209.800782v19.183593h-209.800782v-19.183593Zm0,0"
                        fill="#00bf63" />
                </g>
                <clipPath id="eMBg36dJpbf169">
                    <path
                        d="M46.097656,561.636719h200.828125c2.488281,0,4.5,2.015625,4.5,4.5v10.183593c0,2.484376-2.011719,4.5-4.5,4.5h-200.828125c-2.488281,0-4.5-2.015624-4.5-4.5v-10.183593c0-2.484375,2.011719-4.5,4.5-4.5Zm0,0"
                        transform="translate(.000001 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf171">
            <path d="M41.597656,561.636719h209.875v19.183593h-209.875v-19.183593Zm0,0"
                transform="translate(0 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf180)">
        <g>
            <g clipPath="url(#eMBg36dJpbf178)">
                <g>
                    <path d="M41.597656,588.210938h192.394532v12.042968h-192.394532v-12.042968Zm0,0"
                        fill="#a6a6a6" />
                </g>
                <clipPath id="eMBg36dJpbf178">
                    <path
                        d="M46.097656,588.210938h183.402344c2.484375,0,4.5,2.015624,4.5,4.5v3.042968c0,2.484375-2.015625,4.5-4.5,4.5h-183.402344c-2.488281,0-4.5-2.015625-4.5-4.5v-3.042968c0-2.484376,2.011719-4.5,4.5-4.5Zm0,0" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf180">
            <path d="M41.597656,588.210938h192.402344v12.042968h-192.402344v-12.042968Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf189)">
        <g>
            <g clipPath="url(#eMBg36dJpbf187)">
                <g>
                    <path d="M41.597656,607.167969h219.394532v12.039062h-219.394532v-12.039062Zm0,0"
                        fill="#a6a6a6" />
                </g>
                <clipPath id="eMBg36dJpbf187">
                    <path
                        d="M46.097656,607.167969h210.394532c2.484374,0,4.5,2.011719,4.5,4.5v3.039062c0,2.488281-2.015626,4.5-4.5,4.5h-210.394532c-2.488281,0-4.5-2.011719-4.5-4.5v-3.039062c0-2.488281,2.011719-4.5,4.5-4.5Zm0,0" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf189">
            <path d="M41.597656,607.167969h219.394532v12.039062h-219.394532v-12.039062Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf198)">
        <g>
            <g clipPath="url(#eMBg36dJpbf196)">
                <g>
                    <path
                        d="M418.753906,731.128906h383.835938v538.265625h-383.835938v-538.265625Zm0,0"
                        fill="#5b6776" />
                </g>
                <clipPath id="eMBg36dJpbf196">
                    <path
                        d="M430.003906,731.128906h361.335938c6.210937,0,11.25,5.035156,11.25,11.25v515.113282c0,6.214843-5.039063,11.25-11.25,11.25h-361.335938c-6.210937,0-11.25-5.035157-11.25-11.25v-515.113282c0-6.214844,5.039063-11.25,11.25-11.25Zm0,0" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf198">
            <path d="M418.753906,731.128906h383.835938v537.871094h-383.835938v-537.871094Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf207)">
        <g>
            <g clipPath="url(#eMBg36dJpbf205)">
                <g>
                    <path
                        d="M418.753906,958.726562h383.746094v79.609376h-383.746094v-79.609376Zm0,0"
                        fill="#d9d9d9" />
                </g>
                <clipPath id="eMBg36dJpbf205">
                    <path
                        d="M430.003906,958.726562h361.335938c6.210937,0,11.25,5.039063,11.25,11.25v57.109376c0,6.214843-5.039063,11.25-11.25,11.25h-361.335938c-6.210937,0-11.25-5.035157-11.25-11.25v-57.109376c0-6.210937,5.039063-11.25,11.25-11.25Zm0,0" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf207">
            <path d="M418.753906,958.726562h384.054688v79.609376h-384.054688v-79.609376Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf216)">
        <g>
            <g clipPath="url(#eMBg36dJpbf214)">
                <g>
                    <path
                        d="M430.988281,973.171875h289.175781v18.902344h-289.175781v-18.902344Zm0,0"
                        fill="#737373" />
                </g>
                <clipPath id="eMBg36dJpbf214">
                    <path
                        d="M435.488281,973.171875h280.167969c1.195312,0,2.339844.476563,3.183594,1.320313s1.316406,1.988281,1.316406,3.179687v9.902344c0,1.191406-.472656,2.335937-1.316406,3.179687s-1.988282,1.320313-3.183594,1.320313h-280.167969c-1.195312,0-2.339843-.476563-3.183593-1.320313s-1.316407-1.988281-1.316407-3.179687v-9.902344c0-1.191406.472657-2.335937,1.316407-3.179687s1.988281-1.320313,3.183593-1.320313Zm0,0"
                        transform="translate(.000001 0)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf216">
            <path d="M430.988281,973.171875h289.175781v18.902344h-289.175781v-18.902344Zm0,0"
                transform="translate(.000001 0)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf225)">
        <g>
            <g clipPath="url(#eMBg36dJpbf223)">
                <g>
                    <path
                        d="M430.988281,998.882812h349.550781v11.867188h-349.550781v-11.867188Zm0,0"
                        fill="#a6a6a6" />
                </g>
                <clipPath id="eMBg36dJpbf223">
                    <path
                        d="M435.488281,998.882812h340.535157c1.195312,0,2.339843.476563,3.183593,1.320313s1.316407,1.988281,1.316407,3.179687v2.867188c0,1.191406-.472657,2.335938-1.316407,3.179688s-1.988281,1.320312-3.183593,1.320312h-340.535157c-1.195312,0-2.339843-.476562-3.183593-1.320312s-1.316407-1.988282-1.316407-3.179688v-2.867188c0-1.191406.472657-2.335937,1.316407-3.179687s1.988281-1.320313,3.183593-1.320313Zm0,0"
                        transform="translate(.000001 0)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf225">
            <path d="M430.941406,998.835938h349.597656v11.914062h-349.597656v-11.914062Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf234)">
        <g transform="translate(0 0.000001)">
            <g clipPath="url(#eMBg36dJpbf232)">
                <g transform="translate(0 0.000001)">
                    <path d="M430.988281,1017.558594h340.46875v11.867187h-340.46875v-11.867187Zm0,0"
                        transform="translate(0 0.000001)" fill="#a6a6a6" />
                </g>
                <clipPath id="eMBg36dJpbf232">
                    <path
                        d="M435.488281,1017.558594h331.46875c1.195313,0,2.339844.476562,3.183594,1.320312s1.316406,1.988282,1.316406,3.179688v2.867187c0,1.191407-.472656,2.335938-1.316406,3.179688s-1.988281,1.320312-3.183594,1.320312h-331.46875c-1.195312,0-2.339843-.476562-3.183593-1.320312s-1.316407-1.988281-1.316407-3.179688v-2.867187c0-1.191406.472657-2.335938,1.316407-3.179688s1.988281-1.320312,3.183593-1.320312Zm0,0"
                        transform="translate(0 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf234">
            <path d="M430.941406,1017.511719h340.558594v11.914062h-340.558594v-11.914062Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf243)">
        <g>
            <g clipPath="url(#eMBg36dJpbf241)">
                <g>
                    <path
                        d="M418.753906,1062.175781h383.746094v79.609375h-383.746094v-79.609375Zm0,0"
                        fill="#d9d9d9" />
                </g>
                <clipPath id="eMBg36dJpbf241">
                    <path
                        d="M430.003906,1062.175781h361.335938c6.210937,0,11.25,5.039063,11.25,11.25v57.109375c0,6.214844-5.039063,11.25-11.25,11.25h-361.335938c-6.210937,0-11.25-5.035156-11.25-11.25v-57.109375c0-6.210937,5.039063-11.25,11.25-11.25Zm0,0"
                        transform="translate(0 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf243">
            <path d="M418.753906,1062.175781h384.054688v79.609375h-384.054688v-79.609375Zm0,0"
                transform="translate(0 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf252)">
        <g>
            <g clipPath="url(#eMBg36dJpbf250)">
                <g>
                    <path d="M430.988281,1075.953125h81.429688v18.898437h-81.429688v-18.898437Zm0,0"
                        fill="#737373" />
                </g>
                <clipPath id="eMBg36dJpbf250">
                    <path
                        d="M435.488281,1075.953125h72.464844c1.191406,0,2.335937.476563,3.179687,1.320313s1.320313,1.988281,1.320313,3.179687v9.898437c0,1.195313-.476563,2.339844-1.320313,3.183594s-1.988281,1.316406-3.179687,1.316406h-72.464844c-1.195312,0-2.339843-.472656-3.183593-1.316406s-1.316407-1.988281-1.316407-3.183594v-9.898437c0-1.191406.472657-2.335937,1.316407-3.179687s1.988281-1.320313,3.183593-1.320313Zm0,0"
                        transform="translate(0 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf252">
            <path d="M430.988281,1075.953125h81.503907v18.898437h-81.503907v-18.898437Zm0,0"
                transform="translate(0 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf261)">
        <g>
            <g clipPath="url(#eMBg36dJpbf259)">
                <g>
                    <path
                        d="M430.988281,1101.664062h189.558594v11.863282h-189.558594v-11.863282Zm0,0"
                        fill="#a6a6a6" />
                </g>
                <clipPath id="eMBg36dJpbf259">
                    <path
                        d="M435.488281,1101.664062h180.570313c1.191406,0,2.335937.472657,3.179687,1.316407s1.320313,1.988281,1.320313,3.183593v2.863282c0,1.195312-.476563,2.339844-1.320313,3.183594s-1.988281,1.316406-3.179687,1.316406h-180.570313c-1.195312,0-2.339843-.472656-3.183593-1.316406s-1.316407-1.988282-1.316407-3.183594v-2.863282c0-1.195312.472657-2.339843,1.316407-3.183593s1.988281-1.316407,3.183593-1.316407Zm0,0"
                        transform="translate(.000001 0)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf261">
            <path d="M430.941406,1101.617188h189.652344v11.910156h-189.652344v-11.910156Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf270)">
        <g transform="translate(.000001 0.000001)">
            <g clipPath="url(#eMBg36dJpbf268)">
                <g transform="translate(.000001 0.000001)">
                    <path
                        d="M430.988281,1120.339844h256.070313v11.867187h-256.070313v-11.867187Zm0,0"
                        transform="translate(.000001 0.000001)" fill="#a6a6a6" />
                </g>
                <clipPath id="eMBg36dJpbf268">
                    <path
                        d="M435.488281,1120.339844h247.0625c1.191407,0,2.335938.472656,3.179688,1.320312.84375.84375,1.320312,1.988282,1.320312,3.179688v2.867187c0,1.191407-.476562,2.335938-1.320312,3.179688s-1.988281,1.320312-3.179688,1.320312h-247.0625c-1.195312,0-2.339843-.476562-3.183593-1.320312s-1.316407-1.988281-1.316407-3.179688v-2.867187c0-1.191406.472657-2.335938,1.316407-3.179688.84375-.847656,1.988281-1.320312,3.183593-1.320312Zm0,0"
                        transform="translate(0 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf270">
            <path d="M430.941406,1120.292969h256.117188v11.914062h-256.117188v-11.914062Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf279)">
        <g transform="translate(0 0.000001)">
            <g clipPath="url(#eMBg36dJpbf277)">
                <g transform="translate(0 0.000001)">
                    <path d="M418.753906,1165.625h383.746094v79.609375h-383.746094v-79.609375Zm0,0"
                        transform="translate(0 0.000001)" fill="#d9d9d9" />
                </g>
                <clipPath id="eMBg36dJpbf277">
                    <path
                        d="M430.003906,1165.625h361.335938c6.210937,0,11.25,5.035156,11.25,11.25v57.109375c0,6.214844-5.039063,11.25-11.25,11.25h-361.335938c-6.210937,0-11.25-5.035156-11.25-11.25v-57.109375c0-6.214844,5.039063-11.25,11.25-11.25Zm0,0"
                        transform="translate(0 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf279">
            <path d="M418.753906,1165.625h384.054688v79.609375h-384.054688v-79.609375Zm0,0"
                transform="translate(0 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf288)">
        <g transform="translate(0 0.000001)">
            <g clipPath="url(#eMBg36dJpbf286)">
                <g transform="translate(0 0.000001)">
                    <path
                        d="M430.988281,1177.042969h340.484375v18.898437h-340.484375v-18.898437Zm0,0"
                        transform="translate(0 0.000001)" fill="#737373" />
                </g>
                <clipPath id="eMBg36dJpbf286">
                    <path
                        d="M435.488281,1177.042969h331.46875c1.195313,0,2.339844.472656,3.183594,1.316406s1.316406,1.988281,1.316406,3.183594v9.898437c0,1.195313-.472656,2.339844-1.316406,3.183594s-1.988281,1.316406-3.183594,1.316406h-331.46875c-1.195312,0-2.339843-.472656-3.183593-1.316406s-1.316407-1.988281-1.316407-3.183594v-9.898437c0-1.195313.472657-2.339844,1.316407-3.183594s1.988281-1.316406,3.183593-1.316406Zm0,0"
                        transform="translate(0 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf288">
            <path d="M430.988281,1177.042969h340.484375v18.898437h-340.484375v-18.898437Zm0,0"
                transform="translate(.000001 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf297)">
        <g transform="translate(.000001 0)">
            <g clipPath="url(#eMBg36dJpbf295)">
                <g transform="translate(.000001 0)">
                    <path
                        d="M430.988281,1202.777344h206.726563v10.859375h-206.726563v-10.859375Zm0,0"
                        transform="translate(.000001 0)" fill="#a6a6a6" />
                </g>
                <clipPath id="eMBg36dJpbf295">
                    <path
                        d="M435.488281,1202.777344h197.738281c1.195313,0,2.339844.472656,3.183594,1.316406s1.316406,1.988281,1.316406,3.183594v1.859375c0,1.195312-.472656,2.339843-1.316406,3.183593s-1.988281,1.316407-3.183594,1.316407h-197.738281c-1.195312,0-2.339843-.472657-3.183593-1.316407s-1.316407-1.988281-1.316407-3.183593v-1.859375c0-1.195313.472657-2.339844,1.316407-3.183594s1.988281-1.316406,3.183593-1.316406Zm0,0"
                        transform="translate(.000001 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf297">
            <path d="M430.988281,1202.777344h206.769531v10.859375h-206.769531v-10.859375Zm0,0"
                transform="translate(.000001 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf306)">
        <g>
            <g clipPath="url(#eMBg36dJpbf304)">
                <g>
                    <path
                        d="M430.988281,1220.449219h289.171875v10.863281h-289.171875v-10.863281Zm0,0"
                        fill="#a6a6a6" />
                </g>
                <clipPath id="eMBg36dJpbf304">
                    <path
                        d="M435.488281,1220.449219h280.167969c1.195312,0,2.339844.472656,3.183594,1.316406s1.316406,1.992187,1.316406,3.183594v1.863281c0,1.191406-.472656,2.335938-1.316406,3.179688s-1.988282,1.320312-3.183594,1.320312h-280.167969c-1.195312,0-2.339843-.476562-3.183593-1.320312s-1.316407-1.988282-1.316407-3.179688v-1.863281c0-1.191407.472657-2.339844,1.316407-3.183594s1.988281-1.316406,3.183593-1.316406Zm0,0"
                        transform="translate(.000001 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf306">
            <path d="M430.988281,1220.449219h289.171875v10.863281h-289.171875v-10.863281Zm0,0"
                transform="translate(.000001 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf315)">
        <g>
            <g clipPath="url(#eMBg36dJpbf313)">
                <g>
                    <path
                        d="M503.902344,750.835938h256.851562v105.714843h-256.851562v-105.714843Zm0,0"
                        fill="#00bf63" />
                </g>
                <clipPath id="eMBg36dJpbf313">
                    <path
                        d="M521.152344,750.835938h222.507812c9.527344,0,17.25,7.722656,17.25,17.25v71.214843c0,9.523438-7.722656,17.25-17.25,17.25h-222.507812c-9.527344,0-17.25-7.726562-17.25-17.25v-71.214843c0-9.527344,7.722656-17.25,17.25-17.25Zm0,0"
                        transform="translate(0 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf315">
            <path d="M503.902344,750.835938h257.097656v105.714843h-257.097656v-105.714843Zm0,0"
                transform="translate(0 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf324)">
        <g transform="translate(.000001 0.000001)">
            <g clipPath="url(#eMBg36dJpbf322)">
                <g transform="translate(.000001 0.000001)">
                    <path
                        d="M515.796875,768.261719h224.578125v18.898437h-224.578125v-18.898437Zm0,0"
                        transform="translate(.000001 0.000001)" fill="#737373" />
                </g>
                <clipPath id="eMBg36dJpbf322">
                    <path
                        d="M520.296875,768.261719h215.605469c1.195312,0,2.339844.472656,3.183594,1.320312.84375.84375,1.316406,1.988281,1.316406,3.179688v9.898437c0,1.195313-.472656,2.339844-1.316406,3.183594s-1.988282,1.316406-3.183594,1.316406h-215.605469c-1.191406,0-2.335937-.472656-3.179687-1.316406s-1.320313-1.988281-1.320313-3.183594v-9.898437c0-1.191407.476563-2.335938,1.320313-3.179688.84375-.847656,1.988281-1.320312,3.179687-1.320312Zm0,0"
                        transform="translate(.000001 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf324">
            <path d="M515.796875,768.261719h224.652344v18.898437h-224.652344v-18.898437Zm0,0"
                transform="translate(0 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf333)">
        <g transform="translate(.000001 0.000001)">
            <g clipPath="url(#eMBg36dJpbf331)">
                <g transform="translate(.000001 0.000001)">
                    <path
                        d="M515.796875,796.652344h224.578125v18.898437h-224.578125v-18.898437Zm0,0"
                        transform="translate(.000001 0.000001)" fill="#737373" />
                </g>
                <clipPath id="eMBg36dJpbf331">
                    <path
                        d="M520.296875,796.652344h215.605469c1.195312,0,2.339844.472656,3.183594,1.316406s1.316406,1.988281,1.316406,3.183594v9.898437c0,1.195313-.472656,2.339844-1.316406,3.183594s-1.988282,1.316406-3.183594,1.316406h-215.605469c-1.191406,0-2.335937-.472656-3.179687-1.316406s-1.320313-1.988281-1.320313-3.183594v-9.898437c0-1.195313.476563-2.339844,1.320313-3.183594s1.988281-1.316406,3.179687-1.316406Zm0,0"
                        transform="translate(.000001 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf333">
            <path d="M515.796875,796.652344h224.652344v18.898437h-224.652344v-18.898437Zm0,0"
                transform="translate(0 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf342)">
        <g transform="translate(.000001 0)">
            <g clipPath="url(#eMBg36dJpbf340)">
                <g transform="translate(.000001 0)">
                    <path
                        d="M515.796875,824.632812h224.578125v18.898438h-224.578125v-18.898438Zm0,0"
                        transform="translate(.000001 0)" fill="#737373" />
                </g>
                <clipPath id="eMBg36dJpbf340">
                    <path
                        d="M520.296875,824.632812h215.605469c1.195312,0,2.339844.472657,3.183594,1.316407s1.316406,1.988281,1.316406,3.183593v9.898438c0,1.195312-.472656,2.339844-1.316406,3.183594s-1.988282,1.316406-3.183594,1.316406h-215.605469c-1.191406,0-2.335937-.472656-3.179687-1.316406s-1.320313-1.988282-1.320313-3.183594v-9.898438c0-1.195312.476563-2.339843,1.320313-3.183593s1.988281-1.316407,3.179687-1.316407Zm0,0"
                        transform="translate(.000001 0)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf342">
            <path d="M515.796875,824.632812h224.652344v18.898438h-224.652344v-18.898438Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf351)">
        <g>
            <g clipPath="url(#eMBg36dJpbf349)">
                <g>
                    <path d="M752.921875,878.933594h-40.527344v-35.410156h40.527344v35.410156Zm0,0"
                        fill="#00bf63" />
                </g>
                <clipPath id="eMBg36dJpbf349">
                    <path
                        d="M731.199219,876.328125l-17.257813-30.199219c-.308594-.539062-.304687-1.203125.007813-1.738281.308593-.535156.882812-.867187,1.503906-.867187h34.46875c.621094,0,1.195313.332031,1.507813.867187s.3125,1.199219.003906,1.738281l-17.257813,30.199219c-.304687.535156-.871093.867187-1.488281.867187-.613281,0-1.183594-.332031-1.488281-.867187Zm0,0" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf351">
            <path d="M713.640625,843.523438h38.039063v33.75h-38.039063v-33.75Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf360)">
        <g>
            <g clipPath="url(#eMBg36dJpbf358)">
                <g>
                    <path d="M739.292969,868.136719h25.953125v25.949219h-25.953125v-25.949219Zm0,0"
                        fill="#00bf63" />
                </g>
                <clipPath id="eMBg36dJpbf358">
                    <path
                        d="M752.269531,868.136719c-7.164062,0-12.976562,5.808593-12.976562,12.976562c0,7.164063,5.8125,12.972657,12.976562,12.972657c7.167969,0,12.976563-5.808594,12.976563-12.972657c0-7.167969-5.808594-12.976562-12.976563-12.976562Zm0,0"
                        transform="translate(.000001 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf360">
            <path d="M739.292969,868.136719h25.953125v25.949219h-25.953125v-25.949219Zm0,0"
                transform="translate(.000001 0.000001)" />
        </clipPath>
    </g>
    <path
        d="M16.502013,0.001051v115.416677c0,41.307295,33.484377,74.791673,74.791673,74.791673s74.796881,33.489586,74.796881,74.796881v80.234382c0,9.265626,3.682292,18.151043,10.234376,24.703127c6.552084,6.557293,15.437501,10.234376,24.703127,10.234376h34.942712"
        transform="matrix(.75 0 0 0.75 211.592 632.612)" fill="none" stroke="#737373"
        strokeWidth="33" />
    <g clipPath="url(#eMBg36dJpbf370)">
        <g>
            <g clipPath="url(#eMBg36dJpbf368)">
                <g>
                    <path
                        d="M905.980469,171.257812h391.78125v549.410157h-391.78125v-549.410157Zm0,0"
                        fill="#5b6776" />
                </g>
                <clipPath id="eMBg36dJpbf368">
                    <path
                        d="M917.230469,171.257812h369.28125c2.984375,0,5.84375,1.183594,7.953125,3.292969s3.296875,4.972657,3.296875,7.957031v526.242188c0,2.984375-1.1875,5.84375-3.296875,7.953125-2.109375,2.113281-4.96875,3.296875-7.953125,3.296875h-369.28125c-2.980469,0-5.84375-1.183594-7.953125-3.296875-2.109375-2.109375-3.296875-4.96875-3.296875-7.953125v-526.242188c0-2.984374,1.1875-5.847656,3.296875-7.957031s4.972656-3.292969,7.953125-3.292969Zm0,0" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf370">
            <path d="M905.980469,171.257812h391.78125v548.742188h-391.78125v-548.742188Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf379)">
        <g>
            <g clipPath="url(#eMBg36dJpbf377)">
                <g>
                    <path
                        d="M905.980469,186.574219h391.859375v156.011719h-391.859375v-156.011719Zm0,0"
                        fill="#d9d9d9" />
                </g>
                <clipPath id="eMBg36dJpbf377">
                    <path
                        d="M917.230469,186.574219h369.28125c2.984375,0,5.84375,1.183593,7.953125,3.292969s3.296875,4.972656,3.296875,7.957031v133.511719c0,2.980468-1.1875,5.84375-3.296875,7.953124s-4.96875,3.296876-7.953125,3.296876h-369.28125c-2.980469,0-5.84375-1.1875-7.953125-3.296876s-3.296875-4.972656-3.296875-7.953124v-133.511719c0-2.984375,1.1875-5.847657,3.296875-7.957031s4.972656-3.292969,7.953125-3.292969Zm0,0"
                        transform="translate(0 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf379">
            <path d="M905.980469,186.574219h391.859375v156.011719h-391.859375v-156.011719Zm0,0"
                transform="translate(.000001 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf388)">
        <g>
            <g clipPath="url(#eMBg36dJpbf386)">
                <g>
                    <path d="M918.46875,197.945312h210.988281v19.289063h-210.988281v-19.289063Zm0,0"
                        fill="#8c52ff" />
                </g>
                <clipPath id="eMBg36dJpbf386">
                    <path
                        d="M922.96875,197.945312h202.019531c2.484375,0,4.5,2.015626,4.5,4.5v10.289063c0,2.488281-2.015625,4.5-4.5,4.5h-202.019531c-2.484375,0-4.5-2.011719-4.5-4.5v-10.289063c0-2.484374,2.015625-4.5,4.5-4.5Zm0,0"
                        transform="translate(.000001 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf388">
            <path d="M918.46875,197.945312h211.066406v19.289063h-211.066406v-19.289063Zm0,0"
                transform="translate(0 0.000001)" />
        </clipPath>
    </g>
    <path d="M-0.00085,2.502931l27.258085-.002442"
        transform="matrix(.491734-.566302 0.566302 0.491734 918.364 307.702)" fill="none"
        stroke="#8c52ff" strokeWidth="5" />
    <path d="M-0.000124,2.500799L18.546371,2.50074"
        transform="matrix(.708944 0.244742-.244742 0.708944 935.366 291.223)" fill="none"
        stroke="#8c52ff" strokeWidth="5" />
    <path d="M-0.002612,2.499574l81.367606-.00059"
        transform="matrix(.176865-.728848 0.728848 0.176865 947.245 296.173)" fill="none"
        stroke="#8c52ff" strokeWidth="5" />
    <path d="M-0.000114,2.498925l49.886287.00129"
        transform="matrix(.278777 0.696264-.696264 0.278777 965.939 236.522)" fill="none"
        stroke="#8c52ff" strokeWidth="5" />
    <path d="M0.001516,2.498324l38.50608.002175"
        transform="matrix(.358064-.659007 0.659007 0.358064 977.458 271.153)" fill="none"
        stroke="#8c52ff" strokeWidth="5" />
    <g clipPath="url(#eMBg36dJpbf402)">
        <g>
            <g clipPath="url(#eMBg36dJpbf400)">
                <g>
                    <path d="M995.664062,244.011719h62.878907v62.882812h-62.878907v-62.882812Zm0,0"
                        fill="#8c52ff" />
                </g>
                <clipPath id="eMBg36dJpbf400">
                    <path
                        d="M1027.101562,244.011719c-17.363281,0-31.4375,14.078125-31.4375,31.441406s14.074219,31.441406,31.4375,31.441406c17.367188,0,31.441407-14.078125,31.441407-31.441406s-14.074219-31.441406-31.441407-31.441406Zm0,0"
                        transform="translate(.000001 0)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf402">
            <path d="M995.664062,244.011719h62.878907v62.882812h-62.878907v-62.882812Zm0,0"
                transform="translate(.000001 0)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf411)">
        <g>
            <g clipPath="url(#eMBg36dJpbf409)">
                <g>
                    <path d="M1002.660156,251.007812h48.886719v48.886719h-48.886719v-48.886719Zm0,0"
                        fill="#d9d9d9" />
                </g>
                <clipPath id="eMBg36dJpbf409">
                    <path
                        d="M1027.101562,251.007812c-13.496093,0-24.441406,10.945313-24.441406,24.445313s10.945313,24.441406,24.441406,24.441406c13.5,0,24.445313-10.941406,24.445313-24.441406s-10.945313-24.445313-24.445313-24.445313Zm0,0"
                        transform="translate(.000001 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf411">
            <path d="M1002.660156,251.007812h48.886719v48.886719h-48.886719v-48.886719Zm0,0"
                transform="translate(.000001 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf416)">
        <g>
            <path d="M1002.660156,238.984375h26.464844v26.257813h-26.464844v-26.257813Zm0,0"
                fill="#d9d9d9" />
        </g>
        <clipPath id="eMBg36dJpbf416">
            <path d="M1002.660156,238.984375h26.496094v26.257813h-26.496094v-26.257813Zm0,0"
                transform="translate(0 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf421)">
        <g>
            <path d="M992.894531,252.113281h23.015625v26.246094h-23.015625v-26.246094Zm0,0"
                fill="#d9d9d9" />
        </g>
        <clipPath id="eMBg36dJpbf421">
            <path d="M992.894531,252.113281h23.015625v26.257813h-23.015625v-26.257813Zm0,0"
                transform="translate(.000001 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf426)">
        <g>
            <path d="M989.414062,265.242188h26.460938v26.257812h-26.460938v-26.257812Zm0,0"
                fill="#d9d9d9" />
        </g>
        <clipPath id="eMBg36dJpbf426">
            <path d="M989.414062,265.242188h26.496094v26.257812h-26.496094v-26.257812Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf435)">
        <g>
            <g clipPath="url(#eMBg36dJpbf433)">
                <g>
                    <path
                        d="M1129.488281,236.566406h156.253907v12.113282h-156.253907v-12.113282Zm0,0"
                        fill="#a6a6a6" />
                </g>
                <clipPath id="eMBg36dJpbf433">
                    <path
                        d="M1133.988281,236.566406h147.230469c2.488281,0,4.5,2.015625,4.5,4.5v3.113282c0,2.484374-2.011719,4.5-4.5,4.5h-147.230469c-2.488281,0-4.5-2.015626-4.5-4.5v-3.113282c0-2.484375,2.011719-4.5,4.5-4.5Zm0,0"
                        transform="translate(.000001 0)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf435">
            <path d="M1129.488281,236.566406h156.253907v12.113282h-156.253907v-12.113282Zm0,0"
                transform="translate(.000001 0)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf444)">
        <g>
            <g clipPath="url(#eMBg36dJpbf442)">
                <g>
                    <path
                        d="M1129.488281,253.339844h156.253907v12.109375h-156.253907v-12.109375Zm0,0"
                        fill="#a6a6a6" />
                </g>
                <clipPath id="eMBg36dJpbf442">
                    <path
                        d="M1133.988281,253.339844h147.230469c2.488281,0,4.5,2.011718,4.5,4.5v3.109375c0,2.484375-2.011719,4.5-4.5,4.5h-147.230469c-2.488281,0-4.5-2.015625-4.5-4.5v-3.109375c0-2.488282,2.011719-4.5,4.5-4.5Zm0,0"
                        transform="translate(.000001 0)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf444">
            <path d="M1129.488281,253.339844h156.253907v12.109375h-156.253907v-12.109375Zm0,0"
                transform="translate(.000001 0)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf453)">
        <g>
            <g clipPath="url(#eMBg36dJpbf451)">
                <g>
                    <path
                        d="M1129.488281,270.082031h156.253907v12.113281h-156.253907v-12.113281Zm0,0"
                        fill="#a6a6a6" />
                </g>
                <clipPath id="eMBg36dJpbf451">
                    <path
                        d="M1133.988281,270.082031h147.230469c2.488281,0,4.5,2.015625,4.5,4.5v3.113281c0,2.484376-2.011719,4.5-4.5,4.5h-147.230469c-2.488281,0-4.5-2.015624-4.5-4.5v-3.113281c0-2.484375,2.011719-4.5,4.5-4.5Zm0,0"
                        transform="translate(.000001 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf453">
            <path d="M1129.488281,270.082031h156.253907v12.113281h-156.253907v-12.113281Zm0,0"
                transform="translate(.000001 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf462)">
        <g>
            <g clipPath="url(#eMBg36dJpbf460)">
                <g>
                    <path
                        d="M1129.488281,288.191406h156.253907v12.109375h-156.253907v-12.109375Zm0,0"
                        fill="#a6a6a6" />
                </g>
                <clipPath id="eMBg36dJpbf460">
                    <path
                        d="M1133.988281,288.191406h147.230469c2.488281,0,4.5,2.015625,4.5,4.5v3.109375c0,2.488281-2.011719,4.5-4.5,4.5h-147.230469c-2.488281,0-4.5-2.011719-4.5-4.5v-3.109375c0-2.484375,2.011719-4.5,4.5-4.5Zm0,0"
                        transform="translate(.000001 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf462">
            <path d="M1129.488281,288.191406h156.253907v12.109375h-156.253907v-12.109375Zm0,0"
                transform="translate(.000001 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf467)">
        <g>
            <path d="M1075.972656,262.265625h8.125v44.632813h-8.125v-44.632813Zm0,0" fill="#737373" />
        </g>
        <clipPath id="eMBg36dJpbf467">
            <path d="M1075.972656,262.265625h8.125v44.628906h-8.125v-44.628906Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf472)">
        <g>
            <path d="M1087.5625,251.761719h9.332031v55.113281h-9.332031v-55.113281Zm0,0"
                fill="#737373" />
        </g>
        <clipPath id="eMBg36dJpbf472">
            <path d="M1087.5625,251.761719h9.332031v55.132812h-9.332031v-55.132812Zm0,0"
                transform="translate(.000001 0)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf477)">
        <g>
            <path d="M1099.675781,234.03125h8.808594v72.847656h-8.808594v-72.847656Zm0,0"
                fill="#8c52ff" />
        </g>
        <clipPath id="eMBg36dJpbf477">
            <path d="M1099.675781,234.03125h8.808594v72.863281h-8.808594v-72.863281Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf486)">
        <g>
            <g clipPath="url(#eMBg36dJpbf484)">
                <g>
                    <path
                        d="M905.980469,369.003906h391.859375v156.011719h-391.859375v-156.011719Zm0,0"
                        fill="#d9d9d9" />
                </g>
                <clipPath id="eMBg36dJpbf484">
                    <path
                        d="M917.230469,369.003906h369.28125c2.984375,0,5.84375,1.183594,7.953125,3.296875c2.109375,2.109375,3.296875,4.96875,3.296875,7.953125v133.511719c0,2.984375-1.1875,5.84375-3.296875,7.953125-2.109375,2.113281-4.96875,3.296875-7.953125,3.296875h-369.28125c-2.980469,0-5.84375-1.183594-7.953125-3.296875-2.109375-2.109375-3.296875-4.96875-3.296875-7.953125v-133.511719c0-2.984375,1.1875-5.84375,3.296875-7.953125c2.109375-2.113281,4.972656-3.296875,7.953125-3.296875Zm0,0" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf486">
            <path d="M905.980469,369.003906h391.859375v156.011719h-391.859375v-156.011719Zm0,0"
                transform="translate(.000001 0)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf495)">
        <g transform="translate(0 0.000001)">
            <g clipPath="url(#eMBg36dJpbf493)">
                <g transform="translate(0 0.000001)">
                    <path d="M918.46875,380.378906h210.988281v19.289063h-210.988281v-19.289063Zm0,0"
                        transform="translate(0 0.000001)" fill="#00bf63" />
                </g>
                <clipPath id="eMBg36dJpbf493">
                    <path
                        d="M922.96875,380.378906h202.019531c2.484375,0,4.5,2.011719,4.5,4.5v10.289063c0,2.484375-2.015625,4.5-4.5,4.5h-202.019531c-2.484375,0-4.5-2.015625-4.5-4.5v-10.289063c0-2.488281,2.015625-4.5,4.5-4.5Zm0,0"
                        transform="translate(.000001 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf495">
            <path d="M918.46875,380.378906h211.066406v19.289063h-211.066406v-19.289063Zm0,0"
                transform="translate(0 0.000001)" />
        </clipPath>
    </g>
    <path d="M0.001101,2.501237l27.258085-.002442"
        transform="matrix(.491734-.566302 0.566302 0.491734 918.364 490.134)" fill="none"
        stroke="#8c52ff" strokeWidth="5" />
    <path d="M-0.001653,2.500654l24.832156.001391"
        transform="matrix(.271628-.699084 0.699084 0.271628 931.436 475.249)" fill="none"
        stroke="#8c52ff" strokeWidth="5" />
    <path d="M0.000652,2.501983l23.527347.001108"
        transform="matrix(.704454-.25738 0.25738 0.704454 939.285 456.808)" fill="none"
        stroke="#8c52ff" strokeWidth="5" />
    <path d="M0.000644,2.499394l39.025869.002088"
        transform="matrix(.259506-.703674 0.703674 0.259506 954.741 451.864)" fill="none"
        stroke="#8c52ff" strokeWidth="5" />
    <path d="M0.000555,2.500152l25.364574.000481"
        transform="matrix(.500678 0.55841-.55841 0.500678 968.025 425.193)" fill="none"
        stroke="#8c52ff" strokeWidth="5" />
    <g clipPath="url(#eMBg36dJpbf509)">
        <g>
            <g clipPath="url(#eMBg36dJpbf507)">
                <g>
                    <path d="M995.664062,426.445312h62.878907v62.878907h-62.878907v-62.878907Zm0,0"
                        fill="#8c52ff" />
                </g>
                <clipPath id="eMBg36dJpbf507">
                    <path
                        d="M1027.101562,426.445312c-17.363281,0-31.4375,14.074219-31.4375,31.4375s14.074219,31.441407,31.4375,31.441407c17.367188,0,31.441407-14.078125,31.441407-31.441407s-14.074219-31.4375-31.441407-31.4375Zm0,0"
                        transform="translate(.000001 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf509">
            <path d="M995.664062,426.445312h62.878907v62.878907h-62.878907v-62.878907Zm0,0"
                transform="translate(.000001 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf518)">
        <g>
            <g clipPath="url(#eMBg36dJpbf516)">
                <g>
                    <path d="M1002.660156,433.441406h48.886719v48.886719h-48.886719v-48.886719Zm0,0"
                        fill="#d9d9d9" />
                </g>
                <clipPath id="eMBg36dJpbf516">
                    <path
                        d="M1027.101562,433.441406c-13.496093,0-24.441406,10.941406-24.441406,24.441406s10.945313,24.445313,24.441406,24.445313c13.5,0,24.445313-10.945313,24.445313-24.445313s-10.945313-24.441406-24.445313-24.441406Zm0,0"
                        transform="translate(.000001 0)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf518">
            <path d="M1002.660156,433.441406h48.886719v48.886719h-48.886719v-48.886719Zm0,0"
                transform="translate(.000001 0)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf523)">
        <g>
            <path d="M1004.285156,422.640625h26.464844v26.257813h-26.464844v-26.257813Zm0,0"
                fill="#d9d9d9" />
        </g>
        <clipPath id="eMBg36dJpbf523">
            <path d="M1004.285156,422.640625h26.496094v26.257813h-26.496094v-26.257813Zm0,0"
                transform="translate(0 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf532)">
        <g transform="translate(0 0.000001)">
            <g clipPath="url(#eMBg36dJpbf530)">
                <g transform="translate(0 0.000001)">
                    <path d="M1129.488281,419h156.253907v12.109375h-156.253907v-12.109375Zm0,0"
                        transform="translate(0 0.000001)" fill="#a6a6a6" />
                </g>
                <clipPath id="eMBg36dJpbf530">
                    <path
                        d="M1133.988281,419h147.230469c2.488281,0,4.5,2.015625,4.5,4.5v3.109375c0,2.484375-2.011719,4.5-4.5,4.5h-147.230469c-2.488281,0-4.5-2.015625-4.5-4.5v-3.109375c0-2.484375,2.011719-4.5,4.5-4.5Zm0,0"
                        transform="translate(.000001 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf532">
            <path d="M1129.488281,419h156.253907v12.109375h-156.253907v-12.109375Zm0,0"
                transform="translate(.000001 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf541)">
        <g>
            <g clipPath="url(#eMBg36dJpbf539)">
                <g>
                    <path
                        d="M1129.488281,435.769531h156.253907v12.109375h-156.253907v-12.109375Zm0,0"
                        fill="#a6a6a6" />
                </g>
                <clipPath id="eMBg36dJpbf539">
                    <path
                        d="M1133.988281,435.769531h147.230469c2.488281,0,4.5,2.015625,4.5,4.5v3.109375c0,2.488282-2.011719,4.5-4.5,4.5h-147.230469c-2.488281,0-4.5-2.011718-4.5-4.5v-3.109375c0-2.484375,2.011719-4.5,4.5-4.5Zm0,0"
                        transform="translate(.000001 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf541">
            <path d="M1129.488281,435.769531h156.253907v12.109375h-156.253907v-12.109375Zm0,0"
                transform="translate(.000001 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf550)">
        <g transform="translate(0 0.000001)">
            <g clipPath="url(#eMBg36dJpbf548)">
                <g transform="translate(0 0.000001)">
                    <path
                        d="M1129.488281,452.515625h156.253907v12.109375h-156.253907v-12.109375Zm0,0"
                        transform="translate(0 0.000001)" fill="#a6a6a6" />
                </g>
                <clipPath id="eMBg36dJpbf548">
                    <path
                        d="M1133.988281,452.515625h147.230469c2.488281,0,4.5,2.015625,4.5,4.5v3.109375c0,2.484375-2.011719,4.5-4.5,4.5h-147.230469c-2.488281,0-4.5-2.015625-4.5-4.5v-3.109375c0-2.484375,2.011719-4.5,4.5-4.5Zm0,0"
                        transform="translate(.000001 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf550">
            <path d="M1129.488281,452.515625h156.253907v12.109375h-156.253907v-12.109375Zm0,0"
                transform="translate(.000001 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf559)">
        <g>
            <g clipPath="url(#eMBg36dJpbf557)">
                <g>
                    <path
                        d="M1129.488281,470.621094h156.253907v12.113281h-156.253907v-12.113281Zm0,0"
                        fill="#a6a6a6" />
                </g>
                <clipPath id="eMBg36dJpbf557">
                    <path
                        d="M1133.988281,470.621094h147.230469c2.488281,0,4.5,2.015625,4.5,4.5v3.113281c0,2.484375-2.011719,4.5-4.5,4.5h-147.230469c-2.488281,0-4.5-2.015625-4.5-4.5v-3.113281c0-2.484375,2.011719-4.5,4.5-4.5Zm0,0"
                        transform="translate(.000001 0)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf559">
            <path d="M1129.488281,470.621094h156.253907v12.113281h-156.253907v-12.113281Zm0,0"
                transform="translate(.000001 0)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf564)">
        <g>
            <path d="M1075.972656,470.621094h8.125v18.699218h-8.125v-18.699218Zm0,0" fill="#737373" />
        </g>
        <clipPath id="eMBg36dJpbf564">
            <path d="M1075.972656,470.621094h8.125v18.703125h-8.125v-18.703125Zm0,0"
                transform="translate(0 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf569)">
        <g>
            <path d="M1087.5625,426.445312h9.332031v62.878907h-9.332031v-62.878907Zm0,0"
                fill="#737373" />
        </g>
        <clipPath id="eMBg36dJpbf569">
            <path d="M1087.5625,426.445312h9.332031v62.878907h-9.332031v-62.878907Zm0,0"
                transform="translate(.000001 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf574)">
        <g>
            <path d="M1099.675781,448.898438h8.808594v40.414062h-8.808594v-40.414062Zm0,0"
                fill="#00bf63" />
        </g>
        <clipPath id="eMBg36dJpbf574">
            <path d="M1099.675781,448.898438h8.808594v40.425781h-8.808594v-40.425781Zm0,0"
                transform="translate(0 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf583)">
        <g>
            <g clipPath="url(#eMBg36dJpbf581)">
                <g>
                    <path
                        d="M905.980469,551.664062h391.859375v156.011719h-391.859375v-156.011719Zm0,0"
                        fill="#d9d9d9" />
                </g>
                <clipPath id="eMBg36dJpbf581">
                    <path
                        d="M917.230469,551.664062h369.28125c2.984375,0,5.84375,1.1875,7.953125,3.296876s3.296875,4.96875,3.296875,7.953124v133.511719c0,2.984375-1.1875,5.847657-3.296875,7.957031s-4.96875,3.292969-7.953125,3.292969h-369.28125c-2.980469,0-5.84375-1.183593-7.953125-3.292969s-3.296875-4.972656-3.296875-7.957031v-133.511719c0-2.984374,1.1875-5.84375,3.296875-7.953124s4.972656-3.296876,7.953125-3.296876Zm0,0"
                        transform="translate(0 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf583">
            <path d="M905.980469,551.664062h391.859375v156.011719h-391.859375v-156.011719Zm0,0"
                transform="translate(.000001 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf592)">
        <g>
            <g clipPath="url(#eMBg36dJpbf590)">
                <g>
                    <path d="M918.46875,563.039062h210.988281v19.289063h-210.988281v-19.289063Zm0,0"
                        fill="#00bf63" />
                </g>
                <clipPath id="eMBg36dJpbf590">
                    <path
                        d="M922.96875,563.039062h202.019531c2.484375,0,4.5,2.015626,4.5,4.5v10.289063c0,2.484375-2.015625,4.5-4.5,4.5h-202.019531c-2.484375,0-4.5-2.015625-4.5-4.5v-10.289063c0-2.484374,2.015625-4.5,4.5-4.5Zm0,0"
                        transform="translate(.000001 0)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf592">
            <path d="M918.46875,563.039062h211.066406v19.289063h-211.066406v-19.289063Zm0,0" />
        </clipPath>
    </g>
    <path d="M0.001854,2.5022l81.206118-.00219"
        transform="matrix(.109358-.741984 0.741984 0.109358 917.924 673.751)" fill="none"
        stroke="#00bf63" strokeWidth="5" />
    <path d="M0.00116,2.500043l44.208214.001691"
        transform="matrix(.254858 0.70537-.70537 0.254858 930.423 615.467)" fill="none"
        stroke="#00bf63" strokeWidth="5" />
    <path d="M-0.001962,2.498406l68.149416.00032"
        transform="matrix(.356177-.660029 0.660029 0.356177 938.277 646.394)" fill="none"
        stroke="#00bf63" strokeWidth="5" />
    <path d="M-0.000491,2.501774l56.72528-.00121"
        transform="matrix(.189976 0.72554-.72554 0.189976 966.014 601.834)" fill="none"
        stroke="#00bf63" strokeWidth="5" />
    <path d="M0.002243,2.498322L65.723094,2.5017"
        transform="matrix(.166861-.731203 0.731203 0.166861 973.149 639.706)" fill="none"
        stroke="#00bf63" strokeWidth="5" />
    <g clipPath="url(#eMBg36dJpbf606)">
        <g>
            <g clipPath="url(#eMBg36dJpbf604)">
                <g>
                    <path d="M995.664062,609.105469h62.878907v62.878906h-62.878907v-62.878906Zm0,0"
                        fill="#00bf63" />
                </g>
                <clipPath id="eMBg36dJpbf604">
                    <path
                        d="M1027.101562,609.105469c-17.363281,0-31.4375,14.074219-31.4375,31.441406c0,17.363281,14.074219,31.4375,31.4375,31.4375c17.367188,0,31.441407-14.074219,31.441407-31.4375c0-17.367187-14.074219-31.441406-31.441407-31.441406Zm0,0"
                        transform="translate(.000001 0)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf606">
            <path d="M995.664062,609.105469h62.878907v62.878906h-62.878907v-62.878906Zm0,0"
                transform="translate(.000001 0)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf615)">
        <g>
            <g clipPath="url(#eMBg36dJpbf613)">
                <g>
                    <path d="M1002.660156,616.101562h48.886719v48.886719h-48.886719v-48.886719Zm0,0"
                        fill="#d9d9d9" />
                </g>
                <clipPath id="eMBg36dJpbf613">
                    <path
                        d="M1027.101562,616.101562c-13.496093,0-24.441406,10.945313-24.441406,24.445313c0,13.496094,10.945313,24.441406,24.441406,24.441406c13.5,0,24.445313-10.945312,24.445313-24.441406c0-13.5-10.945313-24.445313-24.445313-24.445313Zm0,0"
                        transform="translate(.000001 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf615">
            <path d="M1002.660156,616.101562h48.886719v48.886719h-48.886719v-48.886719Zm0,0"
                transform="translate(.000001 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf620)">
        <g>
            <path d="M1002.660156,604.074219h26.464844v26.257812h-26.464844v-26.257812Zm0,0"
                fill="#d9d9d9" />
        </g>
        <clipPath id="eMBg36dJpbf620">
            <path d="M1002.660156,604.074219h26.496094v26.257812h-26.496094v-26.257812Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf625)">
        <g>
            <path d="M989.414062,617.203125h26.460938v26.257813h-26.460938v-26.257813Zm0,0"
                fill="#d9d9d9" />
        </g>
        <clipPath id="eMBg36dJpbf625">
            <path d="M989.414062,617.203125h26.496094v26.257813h-26.496094v-26.257813Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf630)">
        <g transform="translate(0 0.000001)">
            <path d="M989.414062,630.332031h26.460938v26.257813h-26.460938v-26.257813Zm0,0"
                transform="translate(0 0.000001)" fill="#d9d9d9" />
        </g>
        <clipPath id="eMBg36dJpbf630">
            <path d="M989.414062,630.332031h26.496094v26.257813h-26.496094v-26.257813Zm0,0"
                transform="translate(0 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf639)">
        <g>
            <g clipPath="url(#eMBg36dJpbf637)">
                <g>
                    <path
                        d="M1129.488281,601.660156h156.253907v12.109375h-156.253907v-12.109375Zm0,0"
                        fill="#a6a6a6" />
                </g>
                <clipPath id="eMBg36dJpbf637">
                    <path
                        d="M1133.988281,601.660156h147.230469c2.488281,0,4.5,2.015625,4.5,4.5v3.109375c0,2.488281-2.011719,4.5-4.5,4.5h-147.230469c-2.488281,0-4.5-2.011719-4.5-4.5v-3.109375c0-2.484375,2.011719-4.5,4.5-4.5Zm0,0"
                        transform="translate(.000001 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf639">
            <path d="M1129.488281,601.660156h156.253907v12.109375h-156.253907v-12.109375Zm0,0"
                transform="translate(.000001 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf648)">
        <g>
            <g clipPath="url(#eMBg36dJpbf646)">
                <g>
                    <path
                        d="M1129.488281,618.429688h156.253907v12.113281h-156.253907v-12.113281Zm0,0"
                        fill="#a6a6a6" />
                </g>
                <clipPath id="eMBg36dJpbf646">
                    <path
                        d="M1133.988281,618.429688h147.230469c2.488281,0,4.5,2.015624,4.5,4.5v3.113281c0,2.484375-2.011719,4.5-4.5,4.5h-147.230469c-2.488281,0-4.5-2.015625-4.5-4.5v-3.113281c0-2.484376,2.011719-4.5,4.5-4.5Zm0,0"
                        transform="translate(.000001 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf648">
            <path d="M1129.488281,618.429688h156.253907v12.113281h-156.253907v-12.113281Zm0,0"
                transform="translate(.000001 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf657)">
        <g>
            <g clipPath="url(#eMBg36dJpbf655)">
                <g>
                    <path
                        d="M1129.488281,635.175781h156.253907v12.109375h-156.253907v-12.109375Zm0,0"
                        fill="#a6a6a6" />
                </g>
                <clipPath id="eMBg36dJpbf655">
                    <path
                        d="M1133.988281,635.175781h147.230469c2.488281,0,4.5,2.015625,4.5,4.5v3.109375c0,2.488282-2.011719,4.5-4.5,4.5h-147.230469c-2.488281,0-4.5-2.011718-4.5-4.5v-3.109375c0-2.484375,2.011719-4.5,4.5-4.5Zm0,0"
                        transform="translate(.000001 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf657">
            <path d="M1129.488281,635.175781h156.253907v12.109375h-156.253907v-12.109375Zm0,0"
                transform="translate(.000001 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf666)">
        <g>
            <g clipPath="url(#eMBg36dJpbf664)">
                <g>
                    <path
                        d="M1129.488281,653.285156h156.253907v12.109375h-156.253907v-12.109375Zm0,0"
                        fill="#a6a6a6" />
                </g>
                <clipPath id="eMBg36dJpbf664">
                    <path
                        d="M1133.988281,653.285156h147.230469c2.488281,0,4.5,2.011719,4.5,4.5v3.109375c0,2.484375-2.011719,4.5-4.5,4.5h-147.230469c-2.488281,0-4.5-2.015625-4.5-4.5v-3.109375c0-2.488281,2.011719-4.5,4.5-4.5Zm0,0"
                        transform="translate(.000001 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf666">
            <path d="M1129.488281,653.285156h156.253907v12.109375h-156.253907v-12.109375Zm0,0"
                transform="translate(.000001 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf671)">
        <g>
            <path d="M1075.972656,599.125h8.125v72.851562h-8.125v-72.851562Zm0,0" fill="#737373" />
        </g>
        <clipPath id="eMBg36dJpbf671">
            <path d="M1075.972656,599.125h8.125v72.859375h-8.125v-72.859375Zm0,0"
                transform="translate(0 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf676)">
        <g>
            <path d="M1087.5625,635.175781h9.332031v36.816407h-9.332031v-36.816407Zm0,0"
                fill="#737373" />
        </g>
        <clipPath id="eMBg36dJpbf676">
            <path d="M1087.5625,635.175781h9.332031v36.808594h-9.332031v-36.808594Zm0,0"
                transform="translate(.000001 0)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf681)">
        <g>
            <path d="M1099.675781,616.101562h8.808594v55.890626h-8.808594v-55.890626Zm0,0"
                fill="#00bf63" />
        </g>
        <clipPath id="eMBg36dJpbf681">
            <path d="M1099.675781,616.101562h8.808594v55.882813h-8.808594v-55.882813Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf686)">
        <g>
            <path d="M997.664062,432.316406h13.246094v16.558594h-13.246094v-16.558594Zm0,0"
                fill="#d9d9d9" />
        </g>
        <clipPath id="eMBg36dJpbf686">
            <path d="M997.664062,432.316406h13.246094v16.582032h-13.246094v-16.582032Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf691)">
        <g>
            <path d="M997.664062,649.496094h26.460938v26.257812h-26.460938v-26.257812Zm0,0"
                fill="#d9d9d9" />
        </g>
        <clipPath id="eMBg36dJpbf691">
            <path d="M997.664062,649.496094h26.496094v26.257812h-26.496094v-26.257812Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf696)">
        <g>
            <path d="M1017.535156,645.460938h26.460938v26.257812h-26.460938v-26.257812Zm0,0"
                fill="#d9d9d9" />
        </g>
        <clipPath id="eMBg36dJpbf696">
            <path d="M1017.535156,645.460938h26.464844v26.257812h-26.464844v-26.257812Zm0,0" />
        </clipPath>
    </g>
    <path
        d="M410.244989,16.500849h-293.744817c-55.229172,0-100.000009,44.770837-100.000009,100.000009v280.666691"
        transform="matrix(.75 0 0 0.75 598.297 433.253)" fill="none" stroke="#737373"
        strokeWidth="33" />
    <g clipPath="url(#eMBg36dJpbf706)">
        <g transform="translate(.000001 0.000001)">
            <g clipPath="url(#eMBg36dJpbf704)">
                <g transform="translate(.000001 0.000001)">
                    <path d="M1728.804688,14.476562h391.375v548.84375h-391.375v-548.84375Zm0,0"
                        transform="translate(.000001 0.000001)" fill="#5b6776" />
                </g>
                <clipPath id="eMBg36dJpbf704">
                    <path
                        d="M1740.054688,14.476562h368.875c2.984374,0,5.847656,1.183594,7.957031,3.292969s3.292969,4.972657,3.292969,7.957031v525.679688c0,2.980469-1.183594,5.84375-3.292969,7.953125s-4.972657,3.296875-7.957031,3.296875h-368.875c-2.984376,0-5.84375-1.1875-7.957032-3.296875-2.109375-2.109375-3.292968-4.972656-3.292968-7.953125v-525.679688c0-2.984374,1.183593-5.847656,3.292968-7.957031c2.113282-2.109375,4.972656-3.292969,7.957032-3.292969Zm0,0" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf706">
            <path d="M1728.804688,14.476562h391.375v548.523438h-391.375v-548.523438Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf711)">
        <g>
            <path d="M1796.792969,32.847656h6.015625v505.285156h-6.015625v-505.285156Zm0,0" />
        </g>
        <clipPath id="eMBg36dJpbf711">
            <path d="M1796.792969,32.847656h6.015625v505.292969h-6.015625v-505.292969Zm0,0"
                transform="translate(.000001 0)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf716)">
        <g transform="translate(0 0.000001)">
            <path d="M1797.023438,279.929688h5.785156v258.21875h-5.785156v-258.21875Zm0,0"
                transform="translate(0 0.000001)" fill="#8c52ff" />
        </g>
        <clipPath id="eMBg36dJpbf716">
            <path d="M1797.023438,279.929688h5.785156v258.207031h-5.785156v-258.207031Zm0,0"
                transform="translate(0 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf721)">
        <g>
            <path d="M1778.273438,32.847656h6.015624v505.285156h-6.015624v-505.285156Zm0,0" />
        </g>
        <clipPath id="eMBg36dJpbf721">
            <path d="M1778.273438,32.847656h6.015624v505.292969h-6.015624v-505.292969Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf726)">
        <g>
            <path d="M1778.503906,193.488281h5.785156v344.648438h-5.785156v-344.648438Zm0,0"
                fill="#8c52ff" />
        </g>
        <clipPath id="eMBg36dJpbf726">
            <path d="M1778.503906,193.488281h5.785156v344.648438h-5.785156v-344.648438Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf731)">
        <g>
            <path d="M1759.753906,32.847656h6.015625v505.285156h-6.015625v-505.285156Zm0,0" />
        </g>
        <clipPath id="eMBg36dJpbf731">
            <path d="M1759.753906,32.847656h6.015625v505.292969h-6.015625v-505.292969Zm0,0"
                transform="translate(.000001 0)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf736)">
        <g transform="translate(0 0.000001)">
            <path d="M1759.90625,97.03125h5.863281v441.109375h-5.863281v-441.109375Zm0,0"
                transform="translate(0 0.000001)" fill="#8c52ff" />
        </g>
        <clipPath id="eMBg36dJpbf736">
            <path d="M1759.90625,97.03125h5.863281v441.109375h-5.863281v-441.109375Zm0,0"
                transform="translate(.000001 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf741)">
        <g transform="translate(.000001 0)">
            <path d="M1741.234375,32.847656h6.015625v505.285156h-6.015625v-505.285156Zm0,0"
                transform="translate(.000001 0)" />
        </g>
        <clipPath id="eMBg36dJpbf741">
            <path d="M1741.234375,32.847656h6.015625v505.292969h-6.015625v-505.292969Zm0,0"
                transform="translate(.000001 0)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf746)">
        <g transform="translate(.000001 0)">
            <path d="M1741.347656,216.117188h5.789063v322.019531h-5.789063v-322.019531Zm0,0"
                transform="translate(.000001 0)" fill="#8c52ff" />
        </g>
        <clipPath id="eMBg36dJpbf746">
            <path d="M1741.347656,216.117188h5.789063v322.019531h-5.789063v-322.019531Zm0,0"
                transform="translate(.000001 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf755)">
        <g>
            <g clipPath="url(#eMBg36dJpbf753)">
                <g>
                    <path d="M1738.566406,193.488281h11.355469v28.386719h-11.355469v-28.386719Zm0,0"
                        fill="#d9d9d9" />
                </g>
                <clipPath id="eMBg36dJpbf753">
                    <path
                        d="M1744.242188,193.488281c1.507812,0,2.949218.597657,4.015624,1.664063c1.0625,1.0625,1.664063,2.507812,1.664063,4.011718v17.035157c0,1.503906-.601563,2.949219-1.664063,4.015625-1.066406,1.0625-2.507812,1.660156-4.015624,1.660156-1.503907,0-2.949219-.597656-4.015626-1.660156-1.0625-1.066406-1.660156-2.511719-1.660156-4.015625v-17.035157c0-1.503906.597656-2.949218,1.660156-4.011718c1.066407-1.066406,2.511719-1.664063,4.015626-1.664063Zm0,0"
                        transform="translate(.000001 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf755">
            <path d="M1738.566406,193.488281h11.355469v28.386719h-11.355469v-28.386719Zm0,0"
                transform="translate(.000001 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf764)">
        <g>
            <g clipPath="url(#eMBg36dJpbf762)">
                <g>
                    <path d="M1757.085938,82.835938h11.355468v28.386718h-11.355468v-28.386718Zm0,0"
                        fill="#d9d9d9" />
                </g>
                <clipPath id="eMBg36dJpbf762">
                    <path
                        d="M1762.761719,82.835938c1.507812,0,2.949219.597656,4.015625,1.664062c1.066406,1.0625,1.664062,2.507812,1.664062,4.011719v17.035156c0,1.503906-.597656,2.949219-1.664062,4.015625-1.066406,1.0625-2.507813,1.660156-4.015625,1.660156-1.503907,0-2.949219-.597656-4.015625-1.660156-1.0625-1.066406-1.660156-2.511719-1.660156-4.015625v-17.035156c0-1.503907.597656-2.949219,1.660156-4.011719c1.066406-1.066406,2.511718-1.664062,4.015625-1.664062Zm0,0" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf764">
            <path d="M1757.085938,82.835938h11.355468v28.386718h-11.355468v-28.386718Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf773)">
        <g>
            <g clipPath="url(#eMBg36dJpbf771)">
                <g>
                    <path d="M1776.1875,179.292969h11.355469v28.390625h-11.355469v-28.390625Zm0,0"
                        fill="#d9d9d9" />
                </g>
                <clipPath id="eMBg36dJpbf771">
                    <path
                        d="M1781.867188,179.292969c1.503906,0,2.949218.597656,4.011718,1.664062c1.066406,1.0625,1.664063,2.507813,1.664063,4.015625v17.03125c0,1.507813-.597657,2.949219-1.664063,4.015625-1.0625,1.0625-2.507812,1.664063-4.011718,1.664063-1.507813,0-2.953126-.601563-4.015626-1.664063-1.066406-1.066406-1.664062-2.507812-1.664062-4.015625v-17.03125c0-1.507812.597656-2.953125,1.664062-4.015625c1.0625-1.066406,2.507813-1.664062,4.015626-1.664062Zm0,0"
                        transform="translate(.000001 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf773">
            <path d="M1776.1875,179.292969h11.355469v28.390625h-11.355469v-28.390625Zm0,0"
                transform="translate(.000001 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf782)">
        <g>
            <g clipPath="url(#eMBg36dJpbf780)">
                <g>
                    <path d="M1794.125,257.105469h11.355469v28.386719h-11.355469v-28.386719Zm0,0"
                        fill="#d9d9d9" />
                </g>
                <clipPath id="eMBg36dJpbf780">
                    <path
                        d="M1799.800781,257.105469c1.507813,0,2.953125.597656,4.015625,1.660156c1.066406,1.066406,1.664063,2.511719,1.664063,4.015625v17.035156c0,1.503906-.597657,2.949219-1.664063,4.015625-1.0625,1.0625-2.507812,1.660157-4.015625,1.660157-1.503906,0-2.949219-.597657-4.011719-1.660157-1.066406-1.066406-1.664062-2.511719-1.664062-4.015625v-17.035156c0-1.503906.597656-2.949219,1.664062-4.015625c1.0625-1.0625,2.507813-1.660156,4.011719-1.660156Zm0,0"
                        transform="translate(.000001 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf782">
            <path d="M1794.125,257.105469h11.355469v28.386719h-11.355469v-28.386719Zm0,0"
                transform="translate(.000001 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf791)">
        <g transform="translate(0 0.000001)">
            <g clipPath="url(#eMBg36dJpbf789)">
                <g transform="translate(0 0.000001)">
                    <path d="M1849.3125,146.507812h26.152344v26.15625h-26.152344v-26.15625Zm0,0"
                        transform="translate(0 0.000001)" fill="#8c52ff" />
                </g>
                <clipPath id="eMBg36dJpbf789">
                    <path
                        d="M1862.386719,146.507812c-7.222657,0-13.074219,5.855469-13.074219,13.078126s5.851562,13.078124,13.074219,13.078124s13.078125-5.855468,13.078125-13.078124-5.855469-13.078126-13.078125-13.078126Zm0,0" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf791">
            <path d="M1849.3125,146.507812h26.152344v26.15625h-26.152344v-26.15625Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf800)">
        <g transform="translate(.000001 0.000001)">
            <g clipPath="url(#eMBg36dJpbf798)">
                <g transform="translate(.000001 0.000001)">
                    <path
                        d="M1878.589844,153.046875h209.242187v13.078125h-209.242187v-13.078125Zm0,0"
                        transform="translate(.000001 0.000001)" fill="#737373" />
                </g>
                <clipPath id="eMBg36dJpbf798">
                    <path
                        d="M1885.128906,153.046875h196.164063c1.734375,0,3.394531.6875,4.621093,1.914063s1.917969,2.890624,1.917969,4.625-.691406,3.394531-1.917969,4.621093-2.886718,1.917969-4.621093,1.917969h-196.164063c-1.734375,0-3.394531-.691406-4.621094-1.917969s-1.917968-2.886719-1.917968-4.621093.691406-3.398438,1.917968-4.625s2.886719-1.914063,4.621094-1.914063Zm0,0"
                        transform="translate(.000001 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf800">
            <path d="M1878.589844,153.046875h209.242187v13.078125h-209.242187v-13.078125Zm0,0"
                transform="translate(.000001 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf809)">
        <g>
            <g clipPath="url(#eMBg36dJpbf807)">
                <g>
                    <path d="M1849.3125,188.421875h26.152344v26.15625h-26.152344v-26.15625Zm0,0"
                        fill="#a6a6a6" />
                </g>
                <clipPath id="eMBg36dJpbf807">
                    <path
                        d="M1862.386719,188.421875c-7.222657,0-13.074219,5.855469-13.074219,13.078125s5.851562,13.078125,13.074219,13.078125s13.078125-5.855469,13.078125-13.078125-5.855469-13.078125-13.078125-13.078125Zm0,0" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf809">
            <path d="M1849.3125,188.421875h26.152344v26.15625h-26.152344v-26.15625Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf818)">
        <g transform="translate(.000001 0)">
            <g clipPath="url(#eMBg36dJpbf816)">
                <g transform="translate(.000001 0)">
                    <path
                        d="M1878.589844,194.960938h209.242187v13.078124h-209.242187v-13.078124Zm0,0"
                        transform="translate(.000001 0)" fill="#737373" />
                </g>
                <clipPath id="eMBg36dJpbf816">
                    <path
                        d="M1885.128906,194.960938h196.164063c1.734375,0,3.394531.6875,4.621093,1.914062s1.917969,2.890625,1.917969,4.625-.691406,3.394531-1.917969,4.621094-2.886718,1.917968-4.621093,1.917968h-196.164063c-1.734375,0-3.394531-.691406-4.621094-1.917968s-1.917968-2.886719-1.917968-4.621094.691406-3.398438,1.917968-4.625s2.886719-1.914062,4.621094-1.914062Zm0,0"
                        transform="translate(.000001 0)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf818">
            <path d="M1878.589844,194.960938h209.242187v13.078124h-209.242187v-13.078124Zm0,0"
                transform="translate(.000001 0)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf827)">
        <g>
            <g clipPath="url(#eMBg36dJpbf825)">
                <g>
                    <path d="M1849.3125,229.886719h26.152344v26.15625h-26.152344v-26.15625Zm0,0"
                        fill="#a6a6a6" />
                </g>
                <clipPath id="eMBg36dJpbf825">
                    <path
                        d="M1862.386719,229.886719c-7.222657,0-13.074219,5.855469-13.074219,13.078125s5.851562,13.078125,13.074219,13.078125s13.078125-5.855469,13.078125-13.078125-5.855469-13.078125-13.078125-13.078125Zm0,0" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf827">
            <path d="M1849.3125,229.886719h26.152344v26.15625h-26.152344v-26.15625Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf836)">
        <g transform="translate(.000001 0)">
            <g clipPath="url(#eMBg36dJpbf834)">
                <g transform="translate(.000001 0)">
                    <path
                        d="M1878.589844,236.425781h209.242187v13.078125h-209.242187v-13.078125Zm0,0"
                        transform="translate(.000001 0)" fill="#737373" />
                </g>
                <clipPath id="eMBg36dJpbf834">
                    <path
                        d="M1885.128906,236.425781h196.164063c1.734375,0,3.394531.691407,4.621093,1.914063c1.226563,1.226562,1.917969,2.890625,1.917969,4.625s-.691406,3.398437-1.917969,4.625-2.886718,1.914062-4.621093,1.914062h-196.164063c-1.734375,0-3.394531-.6875-4.621094-1.914062s-1.917968-2.890625-1.917968-4.625.691406-3.398438,1.917968-4.625c1.226563-1.222656,2.886719-1.914063,4.621094-1.914063Zm0,0"
                        transform="translate(.000001 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf836">
            <path d="M1878.589844,236.425781h209.242187v13.078125h-209.242187v-13.078125Zm0,0"
                transform="translate(.000001 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf845)">
        <g>
            <g clipPath="url(#eMBg36dJpbf843)">
                <g>
                    <path d="M1849.3125,271.089844h26.152344v26.15625h-26.152344v-26.15625Zm0,0"
                        fill="#8c52ff" />
                </g>
                <clipPath id="eMBg36dJpbf843">
                    <path
                        d="M1862.386719,271.089844c-7.222657,0-13.074219,5.855468-13.074219,13.078125s5.851562,13.078125,13.074219,13.078125s13.078125-5.855469,13.078125-13.078125-5.855469-13.078125-13.078125-13.078125Zm0,0" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf845">
            <path d="M1849.3125,271.089844h26.152344v26.15625h-26.152344v-26.15625Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf854)">
        <g transform="translate(.000001 0)">
            <g clipPath="url(#eMBg36dJpbf852)">
                <g transform="translate(.000001 0)">
                    <path
                        d="M1878.589844,277.628906h209.242187v13.078125h-209.242187v-13.078125Zm0,0"
                        transform="translate(.000001 0)" fill="#737373" />
                </g>
                <clipPath id="eMBg36dJpbf852">
                    <path
                        d="M1885.128906,277.628906h196.164063c1.734375,0,3.394531.6875,4.621093,1.914063s1.917969,2.890625,1.917969,4.625-.691406,3.398437-1.917969,4.625c-1.226562,1.222656-2.886718,1.914062-4.621093,1.914062h-196.164063c-1.734375,0-3.394531-.691406-4.621094-1.914062-1.226562-1.226563-1.917968-2.890625-1.917968-4.625s.691406-3.398438,1.917968-4.625s2.886719-1.914063,4.621094-1.914063Zm0,0"
                        transform="translate(.000001 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf854">
            <path d="M1878.589844,277.628906h209.242187v13.078125h-209.242187v-13.078125Zm0,0"
                transform="translate(.000001 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf863)">
        <g transform="translate(0 0.000001)">
            <g clipPath="url(#eMBg36dJpbf861)">
                <g transform="translate(0 0.000001)">
                    <path d="M1834.0625,345.613281h269.050781v20.851563h-269.050781v-20.851563Zm0,0"
                        transform="translate(0 0.000001)" fill="#a6a6a6" />
                </g>
                <clipPath id="eMBg36dJpbf861">
                    <path
                        d="M1838.5625,345.613281h260.015625c2.484375,0,4.5,2.015625,4.5,4.5v11.851563c0,2.484375-2.015625,4.5-4.5,4.5h-260.015625c-2.484375,0-4.5-2.015625-4.5-4.5v-11.851563c0-2.484375,2.015625-4.5,4.5-4.5Zm0,0"
                        transform="translate(.000001 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf863">
            <path d="M1834.0625,345.613281h269.050781v20.851563h-269.050781v-20.851563Zm0,0"
                transform="translate(.000001 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf872)">
        <g>
            <g clipPath="url(#eMBg36dJpbf870)">
                <g>
                    <path d="M1834.0625,374.488281h269.050781v20.855469h-269.050781v-20.855469Zm0,0"
                        fill="#a6a6a6" />
                </g>
                <clipPath id="eMBg36dJpbf870">
                    <path
                        d="M1838.5625,374.488281h260.015625c2.484375,0,4.5,2.015625,4.5,4.5v11.855469c0,2.484375-2.015625,4.5-4.5,4.5h-260.015625c-2.484375,0-4.5-2.015625-4.5-4.5v-11.855469c0-2.484375,2.015625-4.5,4.5-4.5Zm0,0"
                        transform="translate(.000001 0)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf872">
            <path d="M1834.0625,374.488281h269.050781v20.855469h-269.050781v-20.855469Zm0,0"
                transform="translate(.000001 0)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf881)">
        <g>
            <g clipPath="url(#eMBg36dJpbf879)">
                <g>
                    <path d="M1834.0625,403.324219h269.050781v20.851562h-269.050781v-20.851562Zm0,0"
                        fill="#a6a6a6" />
                </g>
                <clipPath id="eMBg36dJpbf879">
                    <path
                        d="M1838.5625,403.324219h260.015625c2.484375,0,4.5,2.011719,4.5,4.5v11.851562c0,2.484375-2.015625,4.5-4.5,4.5h-260.015625c-2.484375,0-4.5-2.015625-4.5-4.5v-11.851562c0-2.488281,2.015625-4.5,4.5-4.5Zm0,0"
                        transform="translate(.000001 0)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf881">
            <path d="M1834.0625,403.324219h269.050781v20.851562h-269.050781v-20.851562Zm0,0"
                transform="translate(.000001 0)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf890)">
        <g>
            <g clipPath="url(#eMBg36dJpbf888)">
                <g>
                    <path d="M1834.0625,434.5h269.050781v20.855469h-269.050781v-20.855469Zm0,0"
                        fill="#a6a6a6" />
                </g>
                <clipPath id="eMBg36dJpbf888">
                    <path
                        d="M1838.5625,434.5h260.015625c2.484375,0,4.5,2.015625,4.5,4.5v11.855469c0,2.484375-2.015625,4.5-4.5,4.5h-260.015625c-2.484375,0-4.5-2.015625-4.5-4.5v-11.855469c0-2.484375,2.015625-4.5,4.5-4.5Zm0,0"
                        transform="translate(.000001 0)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf890">
            <path d="M1834.0625,434.5h269.050781v20.855469h-269.050781v-20.855469Zm0,0"
                transform="translate(.000001 0)" />
        </clipPath>
    </g>
    <path
        d="M574.724587,16.501675h-371.442741c-55.229171,0-100.000009,44.770837-100.000009,100.000008v57.776047c0,13.69271-5.4375,26.828127-15.125001,36.515628-9.682292,9.682293-22.81771,15.125002-36.515628,15.125002h-51.64063"
        transform="matrix(.75 0 0 0.75 1297.76 276.19)" fill="none" stroke="#737373"
        strokeWidth="33" />
    <g clipPath="url(#eMBg36dJpbf900)">
        <g transform="translate(.000001 0)">
            <g clipPath="url(#eMBg36dJpbf898)">
                <g transform="translate(.000001 0)">
                    <path
                        d="M1427.972656,838.332031h390.132813v547.097657h-390.132813v-547.097657Zm0,0"
                        transform="translate(.000001 0)" fill="#5b6776" />
                </g>
                <clipPath id="eMBg36dJpbf898">
                    <path
                        d="M1439.222656,838.332031h367.632813c2.984375,0,5.84375,1.183594,7.953125,3.292969s3.296875,4.972656,3.296875,7.957031v523.933594c0,2.984375-1.1875,5.84375-3.296875,7.953125s-4.96875,3.296875-7.953125,3.296875h-367.632813c-2.984375,0-5.84375-1.1875-7.953125-3.296875s-3.296875-4.96875-3.296875-7.953125v-523.933594c0-2.984375,1.1875-5.847656,3.296875-7.957031s4.96875-3.292969,7.953125-3.292969Zm0,0"
                        transform="translate(.000001 0)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf900">
            <path d="M1427.972656,838.332031h390.132813v546.667969h-390.132813v-546.667969Zm0,0"
                transform="translate(.000001 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf909)">
        <g transform="translate(0 0.000001)">
            <g clipPath="url(#eMBg36dJpbf907)">
                <g transform="translate(0 0.000001)">
                    <path d="M1514.519531,858.363281h261.0625v107.445313h-261.0625v-107.445313Zm0,0"
                        transform="translate(0 0.000001)" fill="#00bf63" />
                </g>
                <clipPath id="eMBg36dJpbf907">
                    <path
                        d="M1531.769531,858.363281h226.722657c9.527343,0,17.25,7.722657,17.25,17.25v72.945313c0,9.527344-7.722657,17.25-17.25,17.25h-226.722657c-9.527343,0-17.25-7.722656-17.25-17.25v-72.945313c0-9.527343,7.722657-17.25,17.25-17.25Zm0,0"
                        transform="translate(.000001 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf909">
            <path d="M1514.519531,858.363281h261.480469v107.445313h-261.480469v-107.445313Zm0,0"
                transform="translate(.000001 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf918)">
        <g transform="translate(0 0.000001)">
            <g clipPath="url(#eMBg36dJpbf916)">
                <g transform="translate(0 0.000001)">
                    <path
                        d="M1526.609375,876.074219h228.261719v19.210937h-228.261719v-19.210937Zm0,0"
                        transform="translate(0 0.000001)" fill="#737373" />
                </g>
                <clipPath id="eMBg36dJpbf916">
                    <path
                        d="M1531.109375,876.074219h219.289063c1.191406,0,2.335937.472656,3.179687,1.316406.847656.847656,1.320313,1.992187,1.320313,3.183594v10.210937c0,1.191406-.472657,2.335938-1.320313,3.179688-.84375.84375-1.988281,1.320312-3.179687,1.320312h-219.289063c-1.195313,0-2.339844-.476562-3.183594-1.320312s-1.316406-1.988282-1.316406-3.179688v-10.210937c0-1.191407.472656-2.335938,1.316406-3.183594.84375-.84375,1.988281-1.316406,3.183594-1.316406Zm0,0"
                        transform="translate(.000001 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf918">
            <path d="M1526.609375,876.074219h228.335937v19.210937h-228.335937v-19.210937Zm0,0"
                transform="translate(.000001 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf927)">
        <g>
            <g clipPath="url(#eMBg36dJpbf925)">
                <g>
                    <path
                        d="M1526.609375,904.929688h228.261719v19.210937h-228.261719v-19.210937Zm0,0"
                        fill="#737373" />
                </g>
                <clipPath id="eMBg36dJpbf925">
                    <path
                        d="M1531.109375,904.929688h219.289063c1.191406,0,2.335937.472656,3.179687,1.316406.847656.847656,1.320313,1.992187,1.320313,3.183594v10.210937c0,1.191406-.472657,2.335937-1.320313,3.179687-.84375.84375-1.988281,1.320313-3.179687,1.320313h-219.289063c-1.195313,0-2.339844-.476563-3.183594-1.320313s-1.316406-1.988281-1.316406-3.179687v-10.210937c0-1.191407.472656-2.335938,1.316406-3.183594.84375-.84375,1.988281-1.316406,3.183594-1.316406Zm0,0"
                        transform="translate(.000001 0)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf927">
            <path d="M1526.609375,904.929688h228.335937v19.210937h-228.335937v-19.210937Zm0,0"
                transform="translate(.000001 0)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf936)">
        <g>
            <g clipPath="url(#eMBg36dJpbf934)">
                <g>
                    <path
                        d="M1526.609375,933.371094h228.261719v19.207031h-228.261719v-19.207031Zm0,0"
                        fill="#737373" />
                </g>
                <clipPath id="eMBg36dJpbf934">
                    <path
                        d="M1531.109375,933.371094h219.289063c1.191406,0,2.335937.472656,3.179687,1.316406.847656.84375,1.320313,1.988281,1.320313,3.183594v10.207031c0,1.195313-.472657,2.339844-1.320313,3.183594-.84375.84375-1.988281,1.316406-3.179687,1.316406h-219.289063c-1.195313,0-2.339844-.472656-3.183594-1.316406s-1.316406-1.988281-1.316406-3.183594v-10.207031c0-1.195313.472656-2.339844,1.316406-3.183594s1.988281-1.316406,3.183594-1.316406Zm0,0"
                        transform="translate(.000001 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf936">
            <path d="M1526.609375,933.371094h228.335937v19.207031h-228.335937v-19.207031Zm0,0"
                transform="translate(.000001 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf945)">
        <g transform="translate(0 0.000001)">
            <g clipPath="url(#eMBg36dJpbf943)">
                <g transform="translate(0 0.000001)">
                    <path d="M1767.628906,988.566406h-41.195312v-35.992187h41.195312v35.992187Zm0,0"
                        transform="translate(0 0.000001)" fill="#00bf63" />
                </g>
                <clipPath id="eMBg36dJpbf943">
                    <path
                        d="M1745.574219,985.960938l-17.589844-30.78125c-.308594-.539063-.308594-1.199219.003906-1.738282.3125-.535156.886719-.867187,1.507813-.867187h35.132812c.621094,0,1.195313.332031,1.503906.867187.3125.539063.316407,1.199219.007813,1.738282l-17.589844,30.78125c-.304687.535156-.875.867187-1.488281.867187-.617188,0-1.183594-.332031-1.488281-.867187Zm0,0"
                        transform="translate(.000001 0)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf945">
            <path d="M1727.699219,952.574219h38.804687v34.304687h-38.804687v-34.304687Zm0,0"
                transform="translate(.000001 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf954)">
        <g transform="translate(.000001 0)">
            <g clipPath="url(#eMBg36dJpbf952)">
                <g transform="translate(.000001 0)">
                    <path d="M1753.773438,977.585938h26.375v26.378906h-26.375v-26.378906Zm0,0"
                        transform="translate(.000001 0)" fill="#00bf63" />
                </g>
                <clipPath id="eMBg36dJpbf952">
                    <path
                        d="M1766.960938,977.585938c-7.285157,0-13.1875,5.90625-13.1875,13.1875c0,7.285156,5.902343,13.191406,13.1875,13.191406s13.1875-5.90625,13.1875-13.191406c0-7.28125-5.902344-13.1875-13.1875-13.1875Zm0,0" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf954">
            <path d="M1753.773438,977.585938h26.375v26.378906h-26.375v-26.378906Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf963)">
        <g transform="translate(.000001 0)">
            <g clipPath="url(#eMBg36dJpbf961)">
                <g transform="translate(.000001 0)">
                    <path d="M1465.273438,990.773438h261.0625v107.449218h-261.0625v-107.449218Zm0,0"
                        transform="translate(.000001 0)" fill="#8c52ff" />
                </g>
                <clipPath id="eMBg36dJpbf961">
                    <path
                        d="M1482.523438,990.773438h226.722656c9.527344,0,17.25,7.726562,17.25,17.25v72.949218c0,9.527344-7.722656,17.25-17.25,17.25h-226.722656c-9.527344,0-17.25-7.722656-17.25-17.25v-72.949218c0-9.523438,7.722656-17.25,17.25-17.25Zm0,0" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf963">
            <path d="M1465.273438,990.773438h261.480468v107.449218h-261.480468v-107.449218Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf972)">
        <g transform="translate(.000001 0)">
            <g clipPath="url(#eMBg36dJpbf970)">
                <g transform="translate(.000001 0)">
                    <path
                        d="M1477.363281,1008.488281h228.257813v19.207031h-228.257813v-19.207031Zm0,0"
                        transform="translate(.000001 0)" fill="#d9d9d9" />
                </g>
                <clipPath id="eMBg36dJpbf970">
                    <path
                        d="M1481.863281,1008.488281h219.289063c1.191406,0,2.335937.472657,3.179687,1.316407s1.320313,1.988281,1.320313,3.183593v10.207031c0,1.195313-.476563,2.339844-1.320313,3.183594s-1.988281,1.316406-3.179687,1.316406h-219.289063c-1.195312,0-2.339843-.472656-3.183593-1.316406s-1.316407-1.988281-1.316407-3.183594v-10.207031c0-1.195312.472657-2.339843,1.316407-3.183593s1.988281-1.316407,3.183593-1.316407Zm0,0"
                        transform="translate(.000001 0)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf972">
            <path d="M1477.363281,1008.488281h228.335938v19.207031h-228.335938v-19.207031Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf981)">
        <g transform="translate(.000001 0)">
            <g clipPath="url(#eMBg36dJpbf979)">
                <g transform="translate(.000001 0)">
                    <path
                        d="M1477.363281,1037.34375h228.257813v19.207031h-228.257813v-19.207031Zm0,0"
                        transform="translate(.000001 0)" fill="#d9d9d9" />
                </g>
                <clipPath id="eMBg36dJpbf979">
                    <path
                        d="M1481.863281,1037.34375h219.289063c1.191406,0,2.335937.472656,3.179687,1.316406s1.320313,1.988282,1.320313,3.183594v10.207031c0,1.195313-.476563,2.339844-1.320313,3.183594s-1.988281,1.316406-3.179687,1.316406h-219.289063c-1.195312,0-2.339843-.472656-3.183593-1.316406s-1.316407-1.988281-1.316407-3.183594v-10.207031c0-1.195312.472657-2.339844,1.316407-3.183594s1.988281-1.316406,3.183593-1.316406Zm0,0"
                        transform="translate(.000001 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf981">
            <path d="M1477.363281,1037.34375h228.335938v19.207031h-228.335938v-19.207031Zm0,0"
                transform="translate(0 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf990)">
        <g transform="translate(.000001 0)">
            <g clipPath="url(#eMBg36dJpbf988)">
                <g transform="translate(.000001 0)">
                    <path
                        d="M1477.363281,1065.78125h228.257813v19.210938h-228.257813v-19.210938Zm0,0"
                        transform="translate(.000001 0)" fill="#d9d9d9" />
                </g>
                <clipPath id="eMBg36dJpbf988">
                    <path
                        d="M1481.863281,1065.78125h219.289063c1.191406,0,2.335937.476562,3.179687,1.320312s1.320313,1.988282,1.320313,3.179688v10.210938c0,1.191406-.476563,2.335937-1.320313,3.183593-.84375.84375-1.988281,1.316407-3.179687,1.316407h-219.289063c-1.195312,0-2.339843-.472657-3.183593-1.316407-.84375-.847656-1.316407-1.992187-1.316407-3.183593v-10.210938c0-1.191406.472657-2.335938,1.316407-3.179688s1.988281-1.320312,3.183593-1.320312Zm0,0"
                        transform="translate(.000001 0)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf990">
            <path d="M1477.363281,1065.78125h228.335938v19.210938h-228.335938v-19.210938Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf999)">
        <g transform="translate(.000001 0)">
            <g clipPath="url(#eMBg36dJpbf997)">
                <g transform="translate(.000001 0)">
                    <path
                        d="M1518.496094,1120.980469h-41.195313v-35.992188h41.195313v35.992188Zm0,0"
                        transform="translate(.000001 0)" fill="#8c52ff" />
                </g>
                <clipPath id="eMBg36dJpbf997">
                    <path
                        d="M1496.4375,1118.375l-17.589844-30.78125c-.304687-.539062-.304687-1.203125.007813-1.738281.3125-.539063.886719-.867188,1.503906-.867188h35.136719c.621094,0,1.191406.328125,1.503906.867188.3125.535156.3125,1.199219.007812,1.738281l-17.589843,30.78125c-.308594.535156-.875.863281-1.488281.863281-.617188,0-1.183594-.328125-1.492188-.863281Zm0,0" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf999">
            <path d="M1478.566406,1084.988281h38.804688v34.304688h-38.804688v-34.304688Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf1008)">
        <g>
            <g clipPath="url(#eMBg36dJpbf1006)">
                <g>
                    <path
                        d="M1452.082031,1107.453125h26.378907v26.378906h-26.378907v-26.378906Zm0,0"
                        fill="#8c52ff" />
                </g>
                <clipPath id="eMBg36dJpbf1006">
                    <path
                        d="M1465.273438,1107.453125c-7.285157,0-13.191407,5.90625-13.191407,13.1875c0,7.285156,5.90625,13.191406,13.191407,13.191406c7.28125,0,13.1875-5.90625,13.1875-13.191406c0-7.28125-5.90625-13.1875-13.1875-13.1875Zm0,0"
                        transform="translate(.000001 0)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf1008">
            <path d="M1452.082031,1107.453125h26.378907v26.378906h-26.378907v-26.378906Zm0,0"
                transform="translate(.000001 0)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf1017)">
        <g>
            <g clipPath="url(#eMBg36dJpbf1015)">
                <g>
                    <path
                        d="M1536.308594,1117.835938h261.152344v81.929687h-261.152344v-81.929687Zm0,0"
                        fill="#00bf63" />
                </g>
                <clipPath id="eMBg36dJpbf1015">
                    <path
                        d="M1553.558594,1117.835938h226.722656c9.527344,0,17.25,7.722656,17.25,17.25v47.429687c0,9.527344-7.722656,17.25-17.25,17.25h-226.722656c-9.527344,0-17.25-7.722656-17.25-17.25v-47.429687c0-9.527344,7.722656-17.25,17.25-17.25Zm0,0"
                        transform="translate(0 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf1017">
            <path d="M1536.308594,1117.835938h261.472656v81.929687h-261.472656v-81.929687Zm0,0"
                transform="translate(0 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf1026)">
        <g>
            <g clipPath="url(#eMBg36dJpbf1024)">
                <g>
                    <path
                        d="M1548.398438,1135.550781h228.261718v19.207031h-228.261718v-19.207031Zm0,0"
                        fill="#737373" />
                </g>
                <clipPath id="eMBg36dJpbf1024">
                    <path
                        d="M1552.898438,1135.550781h219.289062c1.191406,0,2.335938.472657,3.183594,1.316407.84375.84375,1.316406,1.988281,1.316406,3.183593v10.207031c0,1.195313-.472656,2.339844-1.316406,3.183594-.847656.84375-1.992188,1.316406-3.183594,1.316406h-219.289062c-1.195313,0-2.339844-.472656-3.183594-1.316406s-1.316406-1.988281-1.316406-3.183594v-10.207031c0-1.195312.472656-2.339843,1.316406-3.183593s1.988281-1.316407,3.183594-1.316407Zm0,0" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf1026">
            <path d="M1548.398438,1135.550781h228.335937v19.207031h-228.335937v-19.207031Zm0,0"
                transform="translate(.000001 0)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf1035)">
        <g>
            <g clipPath="url(#eMBg36dJpbf1033)">
                <g>
                    <path
                        d="M1548.398438,1164.40625h228.261718v19.207031h-228.261718v-19.207031Zm0,0"
                        fill="#737373" />
                </g>
                <clipPath id="eMBg36dJpbf1033">
                    <path
                        d="M1552.898438,1164.40625h219.289062c1.191406,0,2.335938.472656,3.183594,1.316406.84375.84375,1.316406,1.988282,1.316406,3.183594v10.207031c0,1.195313-.472656,2.339844-1.316406,3.183594-.847656.84375-1.992188,1.316406-3.183594,1.316406h-219.289062c-1.195313,0-2.339844-.472656-3.183594-1.316406s-1.316406-1.988281-1.316406-3.183594v-10.207031c0-1.195312.472656-2.339844,1.316406-3.183594s1.988281-1.316406,3.183594-1.316406Zm0,0"
                        transform="translate(0 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf1035">
            <path d="M1548.398438,1164.40625h228.335937v19.207031h-228.335937v-19.207031Zm0,0"
                transform="translate(.000001 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf1044)">
        <g>
            <g clipPath="url(#eMBg36dJpbf1042)">
                <g>
                    <path
                        d="M1788.195312,1219.601562h-41.195312v-35.992187h41.195312v35.992187Zm0,0"
                        fill="#00bf63" />
                </g>
                <clipPath id="eMBg36dJpbf1042">
                    <path
                        d="M1766.140625,1216.996094l-17.589844-30.78125c-.308593-.539063-.308593-1.199219.003907-1.738282.3125-.535156.886718-.867187,1.507812-.867187h35.132812c.621094,0,1.195313.332031,1.503907.867187.3125.539063.316406,1.199219.007812,1.738282l-17.589843,30.78125c-.304688.535156-.875.867187-1.488282.867187-.617187,0-1.183594-.332031-1.488281-.867187Zm0,0"
                        transform="translate(.000001 0)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf1044">
            <path d="M1748.265625,1183.609375h38.734375v34.304687h-38.734375v-34.304687Zm0,0"
                transform="translate(.000001 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf1053)">
        <g>
            <g clipPath="url(#eMBg36dJpbf1051)">
                <g>
                    <path
                        d="M1775.742188,1211.304688h26.378906v26.378906h-26.378906v-26.378906Zm0,0"
                        fill="#00bf63" />
                </g>
                <clipPath id="eMBg36dJpbf1051">
                    <path
                        d="M1788.929688,1211.304688c-7.28125,0-13.1875,5.90625-13.1875,13.191406c0,7.28125,5.90625,13.1875,13.1875,13.1875c7.285156,0,13.191406-5.90625,13.191406-13.1875c0-7.285156-5.90625-13.191406-13.191406-13.191406Zm0,0" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf1053">
            <path d="M1775.742188,1211.304688h26.378906v26.378906h-26.378906v-26.378906Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf1062)">
        <g transform="translate(.000001 0)">
            <g clipPath="url(#eMBg36dJpbf1060)">
                <g transform="translate(.000001 0)">
                    <path
                        d="M1465.273438,1214.765625h261.0625v107.449219h-261.0625v-107.449219Zm0,0"
                        transform="translate(.000001 0)" fill="#8c52ff" />
                </g>
                <clipPath id="eMBg36dJpbf1060">
                    <path
                        d="M1482.523438,1214.765625h226.722656c9.527344,0,17.25,7.722656,17.25,17.25v72.949219c0,9.527344-7.722656,17.25-17.25,17.25h-226.722656c-9.527344,0-17.25-7.722656-17.25-17.25v-72.949219c0-9.527344,7.722656-17.25,17.25-17.25Zm0,0"
                        transform="translate(0 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf1062">
            <path d="M1465.273438,1214.765625h261.480468v107.449219h-261.480468v-107.449219Zm0,0"
                transform="translate(0 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf1071)">
        <g transform="translate(.000001 0)">
            <g clipPath="url(#eMBg36dJpbf1069)">
                <g transform="translate(.000001 0)">
                    <path
                        d="M1477.363281,1232.480469h228.257813v19.207031h-228.257813v-19.207031Zm0,0"
                        transform="translate(.000001 0)" fill="#d9d9d9" />
                </g>
                <clipPath id="eMBg36dJpbf1069">
                    <path
                        d="M1481.863281,1232.480469h219.289063c1.191406,0,2.335937.472656,3.179687,1.316406s1.320313,1.988281,1.320313,3.183594v10.207031c0,1.195312-.476563,2.339844-1.320313,3.183594s-1.988281,1.316406-3.179687,1.316406h-219.289063c-1.195312,0-2.339843-.472656-3.183593-1.316406s-1.316407-1.988282-1.316407-3.183594v-10.207031c0-1.195313.472657-2.339844,1.316407-3.183594s1.988281-1.316406,3.183593-1.316406Zm0,0"
                        transform="translate(.000001 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf1071">
            <path d="M1477.363281,1232.480469h228.335938v19.207031h-228.335938v-19.207031Zm0,0"
                transform="translate(0 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf1080)">
        <g transform="translate(.000001 0)">
            <g clipPath="url(#eMBg36dJpbf1078)">
                <g transform="translate(.000001 0)">
                    <path
                        d="M1477.363281,1261.335938h228.257813v19.207031h-228.257813v-19.207031Zm0,0"
                        transform="translate(.000001 0)" fill="#d9d9d9" />
                </g>
                <clipPath id="eMBg36dJpbf1078">
                    <path
                        d="M1481.863281,1261.335938h219.289063c1.191406,0,2.335937.472656,3.179687,1.316406s1.320313,1.988281,1.320313,3.183594v10.207031c0,1.195312-.476563,2.339843-1.320313,3.183593s-1.988281,1.316407-3.179687,1.316407h-219.289063c-1.195312,0-2.339843-.472657-3.183593-1.316407s-1.316407-1.988281-1.316407-3.183593v-10.207031c0-1.195313.472657-2.339844,1.316407-3.183594s1.988281-1.316406,3.183593-1.316406Zm0,0"
                        transform="translate(.000001 0)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf1080">
            <path d="M1477.363281,1261.335938h228.335938v19.207031h-228.335938v-19.207031Zm0,0" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf1089)">
        <g transform="translate(.000001 0)">
            <g clipPath="url(#eMBg36dJpbf1087)">
                <g transform="translate(.000001 0)">
                    <path
                        d="M1477.363281,1289.773438h228.257813v19.210937h-228.257813v-19.210937Zm0,0"
                        transform="translate(.000001 0)" fill="#d9d9d9" />
                </g>
                <clipPath id="eMBg36dJpbf1087">
                    <path
                        d="M1481.863281,1289.773438h219.289063c1.191406,0,2.335937.476562,3.179687,1.320312s1.320313,1.988281,1.320313,3.179688v10.210937c0,1.191406-.476563,2.335937-1.320313,3.179687s-1.988281,1.320313-3.179687,1.320313h-219.289063c-1.195312,0-2.339843-.476563-3.183593-1.320313s-1.316407-1.988281-1.316407-3.179687v-10.210937c0-1.191407.472657-2.335938,1.316407-3.179688s1.988281-1.320312,3.183593-1.320312Zm0,0"
                        transform="translate(.000001 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf1089">
            <path d="M1477.363281,1289.773438h228.335938v19.210937h-228.335938v-19.210937Zm0,0"
                transform="translate(0 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf1098)">
        <g transform="translate(.000001 0.000001)">
            <g clipPath="url(#eMBg36dJpbf1096)">
                <g transform="translate(.000001 0.000001)">
                    <path
                        d="M1518.496094,1344.972656h-41.195313v-35.992187h41.195313v35.992187Zm0,0"
                        transform="translate(.000001 0.000001)" fill="#8c52ff" />
                </g>
                <clipPath id="eMBg36dJpbf1096">
                    <path
                        d="M1496.4375,1342.367188l-17.589844-30.78125c-.304687-.539063-.304687-1.203126.007813-1.738282.3125-.539062.886719-.867187,1.503906-.867187h35.136719c.621094,0,1.191406.328125,1.503906.867187.3125.535156.3125,1.199219.007812,1.738282l-17.589843,30.78125c-.308594.535156-.875.863281-1.488281.863281-.617188,0-1.183594-.328125-1.492188-.863281Zm0,0" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf1098">
            <path d="M1478.566406,1308.980469h38.804688v34.304687h-38.804688v-34.304687Zm0,0"
                transform="translate(0 0.000001)" />
        </clipPath>
    </g>
    <g clipPath="url(#eMBg36dJpbf1107)">
        <g transform="translate(0 0.000001)">
            <g clipPath="url(#eMBg36dJpbf1105)">
                <g transform="translate(0 0.000001)">
                    <path d="M1452.082031,1331.445312h26.378907v26.375h-26.378907v-26.375Zm0,0"
                        transform="translate(0 0.000001)" fill="#8c52ff" />
                </g>
                <clipPath id="eMBg36dJpbf1105">
                    <path
                        d="M1465.273438,1331.445312c-7.285157,0-13.191407,5.902344-13.191407,13.1875s5.90625,13.1875,13.191407,13.1875c7.28125,0,13.1875-5.902343,13.1875-13.1875s-5.90625-13.1875-13.1875-13.1875Zm0,0"
                        transform="translate(.000001 0)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf1107">
            <path d="M1452.082031,1331.445312h26.378907v26.375h-26.378907v-26.375Zm0,0"
                transform="translate(.000001 0)" />
        </clipPath>
    </g>
    <path
        d="M451.301449,817.864764h-334.802113c-55.229171,0-100.000008-44.770837-100.000008-100.000008v-717.864646"
        transform="matrix(.75 0 0 0.75 1089.5 720)" fill="none" stroke="#737373" strokeWidth="33" />
    <g clipPath="url(#eMBg36dJpbf1117)">
        <g>
            <g clipPath="url(#eMBg36dJpbf1115)">
                <g>
                    <path
                        d="M2226.90625,497.511719h491.84375v689.734375h-491.84375v-689.734375Zm0,0"
                        fill="#5b6776" />
                </g>
                <clipPath id="eMBg36dJpbf1115">
                    <path
                        d="M2238.15625,497.511719h469.34375c6.214844,0,11.25,5.039062,11.25,11.25v666.398437c0,6.210938-5.035156,11.25-11.25,11.25h-469.34375c-6.210938,0-11.25-5.039062-11.25-11.25v-666.398437c0-6.210938,5.039062-11.25,11.25-11.25Zm0,0"
                        transform="translate(0 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf1117">
            <path d="M2226.90625,497.511719h491.84375v689.488281h-491.84375v-689.488281Zm0,0"
                transform="translate(0 0.000001)" />
        </clipPath>
    </g>
    <g>
        <g transform="translate(2343.66 1046.34)">
            <g>
                <path
                    d="M224.226562,-275.894531c5.683594,0,8.265626-3.097657,8.265626-8.265625v-54.765625c0-47.015625-24.28125-72.847657-70.261719-74.398438v-30.480469c0-5.167968-3.101563-8.265624-8.269531-8.265624h-50.113282c-5.683594,0-8.265625,3.097656-8.265625,8.265624v30.480469c-44.949219,1.550781-69.75,27.382813-69.75,74.398438v121.929687c0,9.816406,4.652344,16.019532,13.949219,19.117188l122.449219,40.300781v68.714844c0,13.949219-7.234375,20.664062-20.667969,20.664062h-24.800781c-12.914063,0-20.664063-6.714843-20.664063-20.664062v-39.785157c0-5.679687-2.582031-8.265624-8.265625-8.265624h-53.734375c-5.164062,0-8.265625,2.585937-8.265625,8.265624v54.25c0,47.015626,24.800781,72.847657,69.75,74.398438v30.484375c0,5.164063,2.582031,8.265625,8.265625,8.265625h50.113282c5.167968,0,8.269531-3.101562,8.269531-8.265625v-30.484375c45.980469-1.550781,70.261719-27.382812,70.261719-74.398438v-119.347656c0-9.816406-4.648438-15.5-13.429688-19.113281L96.097656,-253.160156v-71.296875c0-13.433594,7.75-20.667969,20.664063-20.667969h24.800781c13.949219,0,20.667969,7.234375,20.667969,20.667969v40.296875c0,5.167968,3.097656,8.265625,8.265625,8.265625h53.730468Zm0,0"
                    fill="#00bf63" />
            </g>
        </g>
    </g>
    <path
        d="M545.069149,137.434707h-42.578129c-11.291667,0-22.119793-4.484375-30.104169-12.468751-7.989584-7.984375-12.473959-18.81771-12.473959-30.109377v-17.890627c0-16.03646-6.369793-31.416669-17.708335-42.755212-11.343751-11.338542-26.723961-17.708335-42.760421-17.708335h-68.734381c-55.229171,0-100.000008,44.770838-100.000008,100.000009v280.380233c0,55.229171-44.770838,100.000008-100.000009,100.000008h-130.708345"
        transform="matrix(.75 0 0 0.75 1818.1 738.885)" fill="none" stroke="#737373"
        strokeWidth="33" />
    <g clipPath="url(#eMBg36dJpbf1131)">
        <g>
            <g clipPath="url(#eMBg36dJpbf1129)">
                <g>
                    <path d="M548.894531,170.253906h46.847657v46.847656h-46.847657v-46.847656Zm0,0"
                        fill="#00bf63" />
                </g>
                <clipPath id="eMBg36dJpbf1129">
                    <path
                        d="M572.316406,170.253906c-12.933594,0-23.421875,10.484375-23.421875,23.421875s10.488281,23.425781,23.421875,23.425781c12.9375,0,23.425782-10.488281,23.425782-23.425781s-10.488282-23.421875-23.425782-23.421875Zm0,0"
                        transform="translate(.000001 0)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf1131">
            <path d="M548.894531,170.253906h46.847657v46.847656h-46.847657v-46.847656Zm0,0"
                transform="translate(.000001 0)" />
        </clipPath>
    </g>
    <g>
        <g transform="translate(599.153 212.801)">
            <g transform="translate(.000001 0)">
                <path
                    d="M16.453125,0.53125c-2.574219,0-4.867187-.320312-6.875-.953125-2-.632813-3.671875-1.46875-5.015625-2.5-1.335938-1.03125-2.355469-2.164063-3.0625-3.40625L5.53125,-11.25h.640625c1.113281,1.65625,2.53125,2.980469,4.25,3.96875c1.71875.980469,3.726563,1.46875,6.03125,1.46875c1.96875,0,3.445313-.410156,4.4375-1.234375c1-.832031,1.5-1.976563,1.5-3.4375c0-.882813-.164063-1.617187-.484375-2.203125-.3125-.59375-.84375-1.101562-1.59375-1.53125-.742188-.425781-1.746094-.789062-3.015625-1.09375l-4.78125-1.09375c-3.335937-.757812-5.820313-2.023438-7.453125-3.796875-1.636719-1.769531-2.453125-4.066406-2.453125-6.890625c0-2.09375.523437-3.9375,1.578125-5.53125c1.050781-1.59375,2.578125-2.828125,4.578125-3.703125c2.007813-.882813,4.410156-1.328125,7.203125-1.328125c2.863281,0,5.3125.382812,7.34375,1.140625c2.039062.75,3.765625,1.902344,5.171875,3.453125l-3.625,4.984375h-.640625c-1.042969-1.101563-2.242188-1.929687-3.59375-2.484375-1.355469-.550781-2.90625-.828125-4.65625-.828125-2.011719,0-3.542969.359375-4.59375,1.078125-1.054688.710938-1.578125,1.6875-1.578125,2.9375c0,1.167969.367187,2.101562,1.109375,2.796875.738281.699219,2.015625,1.242187,3.828125,1.625l4.875,1.015625c3.601563.761719,6.21875,2.054688,7.84375,3.875c1.625,1.8125,2.4375,4.1875,2.4375,7.125c0,2.3125-.5,4.328125-1.5,6.046875s-2.511719,3.054687-4.53125,4c-2.011719.945313-4.480469,1.421875-7.40625,1.421875Zm0,0"
                    transform="translate(.000001 0)" fill="#fff" />
            </g>
        </g>
    </g>
    <g>
        <g transform="translate(631.041 212.801)">
            <g transform="translate(0 0.000001)">
                <path
                    d="M27.671875,-12.421875h-18c.207031,2.4375.898437,4.214844,2.078125,5.328125c1.1875,1.105469,2.804688,1.65625,4.859375,1.65625c1.601563,0,2.90625-.296875,3.90625-.890625c1-.601563,1.800781-1.515625,2.40625-2.734375h.546875l4.671875,3C27.222656,-4.101562,25.84375,-2.515625,24,-1.296875s-4.308594,1.828125-7.390625,1.828125c-2.898437,0-5.402344-.546875-7.515625-1.640625-2.105469-1.101563-3.730469-2.742187-4.875-4.921875-1.136719-2.175781-1.703125-4.828125-1.703125-7.953125c0-3.1875.597656-5.867187,1.796875-8.046875c1.207031-2.1875,2.832031-3.816406,4.875-4.890625c2.050781-1.082031,4.351562-1.625,6.90625-1.625c3.96875,0,7.003906,1.054687,9.109375,3.15625c2.101563,2.09375,3.15625,5.171875,3.15625,9.234375c0,1.480469-.054687,2.625-.15625,3.4375l-.53125.296875Zm-6.03125-4.546875c-.074219-2.125-.574219-3.671875-1.5-4.640625-.917969-.976563-2.265625-1.46875-4.046875-1.46875-3.554688,0-5.640625,2.039063-6.265625,6.109375h11.8125Zm0,0"
                    transform="translate(0 0.000001)" fill="#fff" />
            </g>
        </g>
    </g>
    <g>
        <g transform="translate(661.482 212.801)">
            <g transform="translate(.000001 0)">
                <path
                    d="M11.625,0.53125c-2.523438,0-4.449219-.679688-5.78125-2.046875-1.324219-1.363281-1.984375-3.429687-1.984375-6.203125v-31.53125h7.03125v31.25c0,1.710938.710937,2.5625,2.140625,2.5625.40625,0,.835938-.066406,1.296875-.203125l.34375.109375L15.3125,-0.125c-.386719.195313-.902344.351562-1.546875.46875-.648437.125-1.359375.1875-2.140625.1875Zm0,0"
                    transform="translate(.000001 0)" fill="#fff" />
            </g>
        </g>
    </g>
    <g>
        <g transform="translate(677.579 212.801)">
            <g transform="translate(.000001 0)">
                <path
                    d="M11.625,0.53125c-2.523438,0-4.449219-.679688-5.78125-2.046875-1.324219-1.363281-1.984375-3.429687-1.984375-6.203125v-31.53125h7.03125v31.25c0,1.710938.710937,2.5625,2.140625,2.5625.40625,0,.835938-.066406,1.296875-.203125l.34375.109375L15.3125,-0.125c-.386719.195313-.902344.351562-1.546875.46875-.648437.125-1.359375.1875-2.140625.1875Zm0,0"
                    transform="translate(.000001 0)" fill="#fff" />
            </g>
        </g>
    </g>
    <g>
        <g transform="translate(705.938 212.801)">
            <g transform="translate(.000001 0)">
                <path
                    d="M16.453125,0.53125c-2.574219,0-4.867187-.320312-6.875-.953125-2-.632813-3.671875-1.46875-5.015625-2.5-1.335938-1.03125-2.355469-2.164063-3.0625-3.40625L5.53125,-11.25h.640625c1.113281,1.65625,2.53125,2.980469,4.25,3.96875c1.71875.980469,3.726563,1.46875,6.03125,1.46875c1.96875,0,3.445313-.410156,4.4375-1.234375c1-.832031,1.5-1.976563,1.5-3.4375c0-.882813-.164063-1.617187-.484375-2.203125-.3125-.59375-.84375-1.101562-1.59375-1.53125-.742188-.425781-1.746094-.789062-3.015625-1.09375l-4.78125-1.09375c-3.335937-.757812-5.820313-2.023438-7.453125-3.796875-1.636719-1.769531-2.453125-4.066406-2.453125-6.890625c0-2.09375.523437-3.9375,1.578125-5.53125c1.050781-1.59375,2.578125-2.828125,4.578125-3.703125c2.007813-.882813,4.410156-1.328125,7.203125-1.328125c2.863281,0,5.3125.382812,7.34375,1.140625c2.039062.75,3.765625,1.902344,5.171875,3.453125l-3.625,4.984375h-.640625c-1.042969-1.101563-2.242188-1.929687-3.59375-2.484375-1.355469-.550781-2.90625-.828125-4.65625-.828125-2.011719,0-3.542969.359375-4.59375,1.078125-1.054688.710938-1.578125,1.6875-1.578125,2.9375c0,1.167969.367187,2.101562,1.109375,2.796875.738281.699219,2.015625,1.242187,3.828125,1.625l4.875,1.015625c3.601563.761719,6.21875,2.054688,7.84375,3.875c1.625,1.8125,2.4375,4.1875,2.4375,7.125c0,2.3125-.5,4.328125-1.5,6.046875s-2.511719,3.054687-4.53125,4c-2.011719.945313-4.480469,1.421875-7.40625,1.421875Zm0,0"
                    transform="translate(.000001 0)" fill="#fff" />
            </g>
        </g>
    </g>
    <g>
        <g transform="translate(737.826 212.801)">
            <g transform="translate(.000001 0.000001)">
                <path
                    d="M7.546875,-31.359375c-1.273437,0-2.308594-.382813-3.109375-1.15625C3.644531,-33.285156,3.25,-34.28125,3.25,-35.5c0-1.195312.394531-2.179688,1.1875-2.953125.800781-.769531,1.835938-1.15625,3.109375-1.15625.84375,0,1.59375.179687,2.25.53125.664063.355469,1.179687.84375,1.546875,1.46875.363281.617187.546875,1.320313.546875,2.109375c0,.804688-.183594,1.515625-.546875,2.140625-.367188.625-.882812,1.117187-1.546875,1.46875-.65625.355469-1.40625.53125-2.25.53125ZM4.03125,0v-28h7.046875v28L4.03125,0Zm0,0"
                    transform="translate(.000001 0.000001)" fill="#fff" />
            </g>
        </g>
    </g>
    <g>
        <g transform="translate(752.907 212.801)">
            <g transform="translate(.000001 0)">
                <path
                    d="M13.84375,0.53125c-2.21875,0-4.183594-.535156-5.890625-1.609375-1.699219-1.070313-3.03125-2.695313-4-4.875-.960937-2.175781-1.4375-4.851563-1.4375-8.03125c0-3.207031.492187-5.894531,1.484375-8.0625.988281-2.175781,2.359375-3.800781,4.109375-4.875c1.75-1.082031,3.773437-1.625,6.078125-1.625c1.75,0,3.257812.304687,4.53125.90625c1.28125.605469,2.363281,1.542969,3.25,2.8125l.53125-.125v-14.296875h7.03125v39.25L22.5,0v-3.625l-.53125-.109375c-.78125,1.324219-1.851562,2.367187-3.203125,3.125-1.355469.757813-2.996094,1.140625-4.921875,1.140625ZM16.125,-5.4375c1.976562,0,3.539062-.703125,4.6875-2.109375c1.15625-1.414063,1.734375-3.5625,1.734375-6.4375c0-2.882813-.578125-5.035156-1.734375-6.453125-1.148438-1.425781-2.710938-2.140625-4.6875-2.140625-2.0625,0-3.640625.695313-4.734375,2.078125C10.296875,-19.125,9.75,-16.953125,9.75,-13.984375c0,2.9375.546875,5.101563,1.640625,6.484375c1.09375,1.375,2.671875,2.0625,4.734375,2.0625Zm0,0"
                    transform="translate(.000001 0)" fill="#fff" />
            </g>
        </g>
    </g>
    <g>
        <g transform="translate(786.471 212.801)">
            <g transform="translate(0 0.000001)">
                <path
                    d="M27.671875,-12.421875h-18c.207031,2.4375.898437,4.214844,2.078125,5.328125c1.1875,1.105469,2.804688,1.65625,4.859375,1.65625c1.601563,0,2.90625-.296875,3.90625-.890625c1-.601563,1.800781-1.515625,2.40625-2.734375h.546875l4.671875,3C27.222656,-4.101562,25.84375,-2.515625,24,-1.296875s-4.308594,1.828125-7.390625,1.828125c-2.898437,0-5.402344-.546875-7.515625-1.640625-2.105469-1.101563-3.730469-2.742187-4.875-4.921875-1.136719-2.175781-1.703125-4.828125-1.703125-7.953125c0-3.1875.597656-5.867187,1.796875-8.046875c1.207031-2.1875,2.832031-3.816406,4.875-4.890625c2.050781-1.082031,4.351562-1.625,6.90625-1.625c3.96875,0,7.003906,1.054687,9.109375,3.15625c2.101563,2.09375,3.15625,5.171875,3.15625,9.234375c0,1.480469-.054687,2.625-.15625,3.4375l-.53125.296875Zm-6.03125-4.546875c-.074219-2.125-.574219-3.671875-1.5-4.640625-.917969-.976563-2.265625-1.46875-4.046875-1.46875-3.554688,0-5.640625,2.039063-6.265625,6.109375h11.8125Zm0,0"
                    transform="translate(0 0.000001)" fill="#fff" />
            </g>
        </g>
    </g>
    <g clipPath="url(#eMBg36dJpbf1172)">
        <g>
            <g clipPath="url(#eMBg36dJpbf1170)">
                <g>
                    <path d="M1429.851562,170.253906h46.847657v46.847656h-46.847657v-46.847656Zm0,0"
                        fill="#8c52ff" />
                </g>
                <clipPath id="eMBg36dJpbf1170">
                    <path
                        d="M1453.273438,170.253906c-12.9375,0-23.421876,10.484375-23.421876,23.421875s10.484376,23.425781,23.421876,23.425781s23.425781-10.488281,23.425781-23.425781-10.488281-23.421875-23.425781-23.421875Zm0,0"
                        transform="translate(.000001 0)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf1172">
            <path d="M1429.851562,170.253906h46.847657v46.847656h-46.847657v-46.847656Zm0,0"
                transform="translate(.000001 0)" />
        </clipPath>
    </g>
    <g>
        <g transform="translate(1477.99 212.801)">
            <g transform="translate(.000001 0)">
                <path
                    d="M4.828125,0v-37.125h15.84375c2.28125,0,4.210937.359375,5.796875,1.078125c1.582031.71875,2.78125,1.746094,3.59375,3.078125.8125,1.324219,1.21875,2.890625,1.21875,4.703125c0,1.648437-.402344,3.09375-1.203125,4.34375-.792969,1.25-1.933594,2.261719-3.421875,3.03125v.53125c2.34375.605469,4.144531,1.714844,5.40625,3.328125c1.269531,1.605469,1.90625,3.574219,1.90625,5.90625c0,3.554688-1.074219,6.296875-3.21875,8.234375C28.613281,-0.960938,25.441406,0,21.234375,0h-16.40625Zm14.3125-22.3125c3.425781,0,5.140625-1.539062,5.140625-4.625c0-1.570312-.429688-2.742188-1.28125-3.515625-.84375-.769531-2.132812-1.15625-3.859375-1.15625h-6.984375v9.296875h6.984375Zm1.34375,16.5c4.050781,0,6.078125-1.835938,6.078125-5.515625c0-3.6875-2.027344-5.53125-6.078125-5.53125h-8.328125v11.046875h8.328125Zm0,0"
                    transform="translate(.000001 0)" fill="#fff" />
            </g>
        </g>
    </g>
    <g>
        <g transform="translate(1514.29 212.801)">
            <g>
                <path
                    d="M12.828125,0.53125c-3.15625,0-5.484375-.859375-6.984375-2.578125-1.492188-1.71875-2.234375-4.1875-2.234375-7.40625v-18.546875h7.03125v17.671875c0,1.710937.363281,2.960937,1.09375,3.75.738281.78125,1.878906,1.171875,3.421875,1.171875c1.945312,0,3.460938-.640625,4.546875-1.921875c1.082031-1.28125,1.625-3.289063,1.625-6.03125v-14.640625h7.03125v28h-6.75v-4.109375l-.53125-.125c-.898437,1.605469-1.996094,2.804687-3.296875,3.59375-1.292969.78125-2.945312,1.171875-4.953125,1.171875Zm0,0"
                    fill="#fff" />
            </g>
        </g>
    </g>
    <g>
        <g transform="translate(1546.69 212.801)">
            <g transform="translate(.000001 0.000001)">
                <path
                    d="M6.203125,11.890625c-1.210937,0-2.304687-.09375-3.28125-.28125-.96875-.1875-1.757813-.433594-2.359375-.734375L1.671875,5.1875l.46875-.15625c.414063.21875.9375.394531,1.5625.53125.625.132812,1.269531.203125,1.9375.203125c1.132813,0,2.078125-.152344,2.828125-.453125.75-.292969,1.382812-.78125,1.90625-1.46875.53125-.6875,1-1.640625,1.40625-2.859375L0.609375,-28h7.359375L14.9375,-8.53125h.609375L22.3125,-28h7.171875l-11.25,29.75c-.898437,2.40625-1.886719,4.335938-2.96875,5.796875-1.074219,1.46875-2.34375,2.554687-3.8125,3.265625-1.460937.71875-3.210937,1.078125-5.25,1.078125Zm0,0"
                    transform="translate(.000001 0.000001)" fill="#fff" />
            </g>
        </g>
    </g>
    <g>
        <g transform="translate(1589.01 212.801)">
            <g transform="translate(.000001 0)">
                <path
                    d="M16.453125,0.53125c-2.574219,0-4.867187-.320312-6.875-.953125-2-.632813-3.671875-1.46875-5.015625-2.5-1.335938-1.03125-2.355469-2.164063-3.0625-3.40625L5.53125,-11.25h.640625c1.113281,1.65625,2.53125,2.980469,4.25,3.96875c1.71875.980469,3.726563,1.46875,6.03125,1.46875c1.96875,0,3.445313-.410156,4.4375-1.234375c1-.832031,1.5-1.976563,1.5-3.4375c0-.882813-.164063-1.617187-.484375-2.203125-.3125-.59375-.84375-1.101562-1.59375-1.53125-.742188-.425781-1.746094-.789062-3.015625-1.09375l-4.78125-1.09375c-3.335937-.757812-5.820313-2.023438-7.453125-3.796875-1.636719-1.769531-2.453125-4.066406-2.453125-6.890625c0-2.09375.523437-3.9375,1.578125-5.53125c1.050781-1.59375,2.578125-2.828125,4.578125-3.703125c2.007813-.882813,4.410156-1.328125,7.203125-1.328125c2.863281,0,5.3125.382812,7.34375,1.140625c2.039062.75,3.765625,1.902344,5.171875,3.453125l-3.625,4.984375h-.640625c-1.042969-1.101563-2.242188-1.929687-3.59375-2.484375-1.355469-.550781-2.90625-.828125-4.65625-.828125-2.011719,0-3.542969.359375-4.59375,1.078125-1.054688.710938-1.578125,1.6875-1.578125,2.9375c0,1.167969.367187,2.101562,1.109375,2.796875.738281.699219,2.015625,1.242187,3.828125,1.625l4.875,1.015625c3.601563.761719,6.21875,2.054688,7.84375,3.875c1.625,1.8125,2.4375,4.1875,2.4375,7.125c0,2.3125-.5,4.328125-1.5,6.046875s-2.511719,3.054687-4.53125,4c-2.011719.945313-4.480469,1.421875-7.40625,1.421875Zm0,0"
                    transform="translate(.000001 0)" fill="#fff" />
            </g>
        </g>
    </g>
    <g>
        <g transform="translate(1620.9 212.801)">
            <g transform="translate(.000001 0.000001)">
                <path
                    d="M7.546875,-31.359375c-1.273437,0-2.308594-.382813-3.109375-1.15625C3.644531,-33.285156,3.25,-34.28125,3.25,-35.5c0-1.195312.394531-2.179688,1.1875-2.953125.800781-.769531,1.835938-1.15625,3.109375-1.15625.84375,0,1.59375.179687,2.25.53125.664063.355469,1.179687.84375,1.546875,1.46875.363281.617187.546875,1.320313.546875,2.109375c0,.804688-.183594,1.515625-.546875,2.140625-.367188.625-.882812,1.117187-1.546875,1.46875-.65625.355469-1.40625.53125-2.25.53125ZM4.03125,0v-28h7.046875v28L4.03125,0Zm0,0"
                    transform="translate(.000001 0.000001)" fill="#fff" />
            </g>
        </g>
    </g>
    <g>
        <g transform="translate(1635.98 212.801)">
            <g transform="translate(.000001 0)">
                <path
                    d="M13.84375,0.53125c-2.21875,0-4.183594-.535156-5.890625-1.609375-1.699219-1.070313-3.03125-2.695313-4-4.875-.960937-2.175781-1.4375-4.851563-1.4375-8.03125c0-3.207031.492187-5.894531,1.484375-8.0625.988281-2.175781,2.359375-3.800781,4.109375-4.875c1.75-1.082031,3.773437-1.625,6.078125-1.625c1.75,0,3.257812.304687,4.53125.90625c1.28125.605469,2.363281,1.542969,3.25,2.8125l.53125-.125v-14.296875h7.03125v39.25L22.5,0v-3.625l-.53125-.109375c-.78125,1.324219-1.851562,2.367187-3.203125,3.125-1.355469.757813-2.996094,1.140625-4.921875,1.140625ZM16.125,-5.4375c1.976562,0,3.539062-.703125,4.6875-2.109375c1.15625-1.414063,1.734375-3.5625,1.734375-6.4375c0-2.882813-.578125-5.035156-1.734375-6.453125-1.148438-1.425781-2.710938-2.140625-4.6875-2.140625-2.0625,0-3.640625.695313-4.734375,2.078125C10.296875,-19.125,9.75,-16.953125,9.75,-13.984375c0,2.9375.546875,5.101563,1.640625,6.484375c1.09375,1.375,2.671875,2.0625,4.734375,2.0625Zm0,0"
                    transform="translate(.000001 0)" fill="#fff" />
            </g>
        </g>
    </g>
    <g>
        <g transform="translate(1669.55 212.801)">
            <g transform="translate(0 0.000001)">
                <path
                    d="M27.671875,-12.421875h-18c.207031,2.4375.898437,4.214844,2.078125,5.328125c1.1875,1.105469,2.804688,1.65625,4.859375,1.65625c1.601563,0,2.90625-.296875,3.90625-.890625c1-.601563,1.800781-1.515625,2.40625-2.734375h.546875l4.671875,3C27.222656,-4.101562,25.84375,-2.515625,24,-1.296875s-4.308594,1.828125-7.390625,1.828125c-2.898437,0-5.402344-.546875-7.515625-1.640625-2.105469-1.101563-3.730469-2.742187-4.875-4.921875-1.136719-2.175781-1.703125-4.828125-1.703125-7.953125c0-3.1875.597656-5.867187,1.796875-8.046875c1.207031-2.1875,2.832031-3.816406,4.875-4.890625c2.050781-1.082031,4.351562-1.625,6.90625-1.625c3.96875,0,7.003906,1.054687,9.109375,3.15625c2.101563,2.09375,3.15625,5.171875,3.15625,9.234375c0,1.480469-.054687,2.625-.15625,3.4375l-.53125.296875Zm-6.03125-4.546875c-.074219-2.125-.574219-3.671875-1.5-4.640625-.917969-.976563-2.265625-1.46875-4.046875-1.46875-3.554688,0-5.640625,2.039063-6.265625,6.109375h11.8125Zm0,0"
                    transform="translate(0 0.000001)" fill="#fff" />
            </g>
        </g>
    </g>
    <g id="eMBg36dJpbf1202" transform="translate(-.00024-12.29688)"
        clipPath="url(#eMBg36dJpbf1209)">
        <g>
            <g clipPath="url(#eMBg36dJpbf1207)">
                <g>
                    <path d="M210.644531,634.832031h26.648438v26.648438h-26.648438v-26.648438Zm0,0"
                        fill="#fffafa" />
                </g>
                <clipPath id="eMBg36dJpbf1207">
                    <path
                        d="M223.96875,634.832031c-7.359375,0-13.324219,5.964844-13.324219,13.324219c0,7.355469,5.964844,13.324219,13.324219,13.324219c7.355469,0,13.324219-5.96875,13.324219-13.324219c0-7.359375-5.96875-13.324219-13.324219-13.324219Zm0,0" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf1209">
            <path d="M210.644531,634.832031h26.648438v26.648438h-26.648438v-26.648438Zm0,0" />
        </clipPath>
    </g>
    <g id="eMBg36dJpbf1211" transform="translate(3.437747 24.452881)"
        clipPath="url(#eMBg36dJpbf1218)">
        <g>
            <g clipPath="url(#eMBg36dJpbf1216)">
                <g>
                    <path d="M593.910156,693.351562h26.648438v26.648438h-26.648438v-26.648438Zm0,0"
                        fill="#fffafa" />
                </g>
                <clipPath id="eMBg36dJpbf1216">
                    <path
                        d="M607.234375,693.351562c-7.359375,0-13.324219,5.964844-13.324219,13.324219s5.964844,13.324219,13.324219,13.324219c7.355469,0,13.324219-5.964844,13.324219-13.324219s-5.96875-13.324219-13.324219-13.324219Zm0,0" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf1218">
            <path d="M593.910156,693.351562h26.648438v26.648438h-26.648438v-26.648438Zm0,0" />
        </clipPath>
    </g>
    <g id="eMBg36dJpbf1220" transform="translate(.003402-17.511636)"
        clipPath="url(#eMBg36dJpbf1227)">
        <g>
            <g clipPath="url(#eMBg36dJpbf1225)">
                <g>
                    <path d="M1088.546875,724.1875h26.648437v26.648438h-26.648437v-26.648438Zm0,0"
                        fill="#fffafa" />
                </g>
                <clipPath id="eMBg36dJpbf1225">
                    <path
                        d="M1101.871094,724.1875c-7.359375,0-13.324219,5.964844-13.324219,13.324219s5.964844,13.324219,13.324219,13.324219s13.324218-5.964844,13.324218-13.324219-5.964843-13.324219-13.324218-13.324219Zm0,0"
                        transform="translate(.000001 0)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf1227">
            <path d="M1088.546875,724.1875h26.648437v26.648438h-26.648437v-26.648438Zm0,0"
                transform="translate(.000001 0)" />
        </clipPath>
    </g>
    <g id="eMBg36dJpbf1229" transform="translate(15.260471 1.437639)"
        clipPath="url(#eMBg36dJpbf1236)">
        <g>
            <g clipPath="url(#eMBg36dJpbf1234)">
                <g>
                    <path d="M1700.21875,275.242188h26.648438v26.648437h-26.648438v-26.648437Zm0,0"
                        fill="#fffafa" />
                </g>
                <clipPath id="eMBg36dJpbf1234">
                    <path
                        d="M1713.542969,275.242188c-7.355469,0-13.324219,5.964843-13.324219,13.324218c0,7.355469,5.96875,13.324219,13.324219,13.324219c7.359375,0,13.324219-5.96875,13.324219-13.324219c0-7.359375-5.964844-13.324218-13.324219-13.324218Zm0,0"
                        transform="translate(0 0.000001)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf1236">
            <path d="M1700.21875,275.242188h26.648438v26.648437h-26.648438v-26.648437Zm0,0"
                transform="translate(0 0.000001)" />
        </clipPath>
    </g>
    <g id="eMBg36dJpbf1238" transform="translate(-13.328643-.374884)"
        clipPath="url(#eMBg36dJpbf1245)">
        <g transform="translate(.000001 0)">
            <g clipPath="url(#eMBg36dJpbf1243)">
                <g transform="translate(.000001 0)">
                    <path
                        d="M1818.105469,1098.222656h26.648437v26.648438h-26.648437v-26.648438Zm0,0"
                        transform="translate(.000001 0)" fill="#fffafa" />
                </g>
                <clipPath id="eMBg36dJpbf1243">
                    <path
                        d="M1831.429688,1098.222656c-7.359376,0-13.324219,5.964844-13.324219,13.324219s5.964843,13.324219,13.324219,13.324219c7.355468,0,13.324218-5.964844,13.324218-13.324219s-5.96875-13.324219-13.324218-13.324219Zm0,0"
                        transform="translate(.000001 0)" />
                </clipPath>
            </g>
        </g>
        <clipPath id="eMBg36dJpbf1245">
            <path d="M1818.105469,1098.222656h26.648437v26.648438h-26.648437v-26.648438Zm0,0"
                transform="translate(.000001 0)" />
        </clipPath>
    </g>
</svg>
    )
}