/*!
 * w-converws-client v1.0.10
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */(function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("ws")):"function"==typeof define&&define.amd?define(["ws"],t):(e=e||self,e["w-converws-client"]=t(e.ws))})(this,function(e){'use strict';var te=Math.max,ne=Math.ceil,re=Math.min;function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e,t){return t={exports:{}},e(t,t.exports),t.exports}function r(){return"undefined"==typeof self?"undefined"==typeof window?"undefined"==typeof global?null:global:window:self}function o(){var e="undefined"!=typeof window&&"undefined"!=typeof window.document,n="object"===("undefined"==typeof self?"undefined":t(self))&&self.constructor&&"DedicatedWorkerGlobalScope"===self.constructor.name,o="undefined"!=typeof process&&null!=process.versions&&null!=process.versions.node;e=e||n;var i={isBrowser:e,isWebWorker:n,isNode:o};return i}function i(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t||"[object AsyncFunction]"===t}function s(t){function n(){i(t.open)&&t.open()}function s(){i(t.close)&&t.close()}function a(e){i(t.message)&&t.message(e)}function d(e){i(t.error)&&t.error(e),c.close()}var c=null;t.url||(t.url="ws://localhost:8080"),t.token||(t.token="*");var l,p=o().isBrowser;l=p?r().WebSocket:e;try{c=new l(t.url+"/?token="+t.token)}catch(e){return null}return p?(c.onopen=n,c.onmessage=function(e){var t=e.data;a(t)},c.onclose=s,c.onerror=d):(c.on("open",n),c.on("message",a),c.on("close",s),c.on("error",d)),c}function a(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ve&&ve in Object(e)?me(e):xe(e)}function d(e){return null!=e&&"object"==t(e)}function c(e){return"symbol"==t(e)||Se(e)&&Oe(e)=="[object Symbol]"}function l(e,n){if(ae(e))return!1;var r=t(e);return!!("number"==r||"symbol"==r||"boolean"==r||null==e||ke(e))||Le.test(e)||!we.test(e)||null!=n&&e in Object(n)}function p(e){var n=t(e);return null!=e&&("object"==n||"function"==n)}function u(e){return!!ze&&ze in e}function g(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function f(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function y(e){var n=t(e);return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e}function h(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function b(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function n(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var s=e.apply(this,r);return n.cache=i.set(o,s)||i,s};return n.cache=new(b.Cache||st),n}function _(e){if("string"==typeof e)return e;if(ae(e))return lt(e,_)+"";if(ke(e))return gt?gt.call(e):"";var t=e+"";return"0"==t&&1/e==-pt?"-0":t}function m(){var e,t,n=new Promise(function(){e=arguments[0],t=arguments[1]});return n.resolve=e,n.reject=t,n}function j(e){var t=Object.prototype.toString.call(e);return"[object String]"===t}function A(e){return!!(j(e)&&""!==e)}function x(e){var t=Object.prototype.toString.call(e);return"[object Number]"===t}function O(e){var t=!1;return A(e)?t=!isNaN(+e):x(e)&&(t=!0),t}function S(e){if(!O(e))return 0;var t=Lt(e);return t}function k(e){return!!O(e)&&(e=S(e),Et(e))}function w(e){if(!O(e))return 0;e=S(e);var t=zt(e);return"0"===t+""?0:t}function L(e){if(!k(e))return!1;var t=0<w(e);return t}function B(){var e,t=0<arguments.length&&arguments[0]!==void 0?arguments[0]:32,n=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],o=[],s=n.length;if(L(t))for(e=0;e<t;e++)o[e]=n[0|Math.random()*s];else if("rfc4122"===t){o[8]=o[13]=o[18]=o[23]="-",o[14]="4";var a;for(e=0;36>e;e++)o[e]||(a=0|16*Math.random(),o[e]=n[19===e?8|3&a:a])}else return"";var d=o.join("");return d}function E(e){var t=Object.prototype.toString.call(e);return"[object Object]"===t}function U(e){if(E(e)){for(var t in e)return!0;return!1}return!1}function P(e,t){return U(e)?A(t)?mt(e,t,""):"":""}function z(e){if(!A(e)&&!O(e))return"";return e+""}function T(e,t){var n=P(e,t);return n=z(n),n}function C(e,n){var r=t(e);return n=null==n?9007199254740991:n,!!n&&("number"==r||"symbol"!=r&&Rt.test(e))&&-1<e&&0==e%1&&e<n}function F(e,n,r){if(!Be(r))return!1;var o=t(n);return!("number"==o?!(Ft(r)&&Wt(n,r.length)):!("string"==o&&n in r))&&et(r[n],e)}function R(e){var t=Object.prototype.toString.call(e);return"[object Uint8Array]"===t}function W(e){var t=Object.prototype.toString.call(e);return"[object Uint16Array]"===t}function D(e,t){return A(e)?L(t)?e.substr(0,t):"":""}function N(e,t){if(!A(e))return"";if(!L(t))return"";var n=e.length-t;return 0>n&&(n=0),e.substr(n,t)}function V(e,t){return A(e)?L(t)?N(e,e.length-t):"":""}function M(e){if(!R(e))return"";var t=xn.create(e),n=t.toString(An);return n}function I(e){if(!j(e))return new Uint8Array;for(var t,n=An.parse(e),r=n.words,o=n.sigBytes,s=new Uint8Array(o),a=0;a<o;a++)t=255&r[a>>>2]>>>24-8*(a%4),s[a]=t;return s}function H(e){return W(e)?new Uint8Array(e):new Uint8Array}function $(e){return W(e)?M(H(e)):""}function G(e){return R(e)?new Uint16Array(e):new Uint16Array}function q(e){if(!j(e))return new Uint16Array;var t=I(e),n=G(t);return n}function Q(e){var t=Object.prototype.toString.call(e);return"[object Undefined]"===t}function X(e){var t=Object.prototype.toString.call(e);return"[object Array]"===t}function Y(e){function t(e,t){return 0<=n.indexOf("Uint8Array")&&(t=vn.u8arr2b64(t)),0<=n.indexOf("Uint16Array")&&(t=vn.u16arr2b64(t)),t}var n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"Uint8Array";if(Q(e))return"";if(j(n))n=[n];else if(X(n));else return"";var r="";try{r=JSON.stringify(e,t)}catch(e){r=""}return r}function Z(e,t,n,r,o){var i=Y(n),s=Nt(i,t),a=B(),d=s.length;mn(s,function(t,n){t=It(t,"");var i="".concat(a,"|").concat(n,"|").concat(d,"|").concat(t);e.send(i,function(e){e&&Ee(o)&&o(e)}),Ee(r)&&r(100*((n+1)/d))})}function J(e){function t(e,t){return 0<=n.indexOf("Uint8Array")&&(t=vn.b642u8arr(t)),0<=n.indexOf("Uint16Array")&&(t=vn.b642u16arr(t)),t}var n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"Uint8Array";if(j(n))n=[n];else if(X(n));else return{};var r={};try{r=JSON.parse(e,t)}catch(e){r={}}return r}function K(e,t){return!!E(e)&&!!A(t)&&t in e}function ee(e,t){var n=Mn(e,"|"),r=n[0],o=kt(n[1]),i=kt(n[2]),s=It(In(n,3),"|");if(K(qn,r)||(qn[r]={}),qn[r]["_"+o]=s,o===i-1){var a="";mn(Gn(i),function(e){a+=qn[r]["_"+e]}),delete qn[r];var d=J(a);t(d)}}e=e&&e.hasOwnProperty("default")?e["default"]:e;var oe="undefined"==typeof globalThis?"undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?{}:self:global:window:globalThis,ie=n(function(e){(function(n){function r(){}function o(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function i(e){return function(){return this[e].apply(this,arguments)}}function s(e){return!!("function"==typeof e||e instanceof RegExp)||!!(e&&"object"===t(e))&&s(e.listener)}var a=r.prototype,d=n.EventEmitter;a.getListeners=function(e){var t,n,r=this._getEvents();if(e instanceof RegExp)for(n in t={},r)r.hasOwnProperty(n)&&e.test(n)&&(t[n]=r[n]);else t=r[e]||(r[e]=[]);return t},a.flattenListeners=function(e){var t,n=[];for(t=0;t<e.length;t+=1)n.push(e[t].listener);return n},a.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},a.addListener=function(e,n){if(!s(n))throw new TypeError("listener must be a function");var r,i=this.getListenersAsObject(e),a="object"===t(n);for(r in i)i.hasOwnProperty(r)&&-1===o(i[r],n)&&i[r].push(a?n:{listener:n,once:!1});return this},a.on=i("addListener"),a.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},a.once=i("addOnceListener"),a.defineEvent=function(e){return this.getListeners(e),this},a.defineEvents=function(e){for(var t=0;t<e.length;t+=1)this.defineEvent(e[t]);return this},a.removeListener=function(e,t){var n,r,i=this.getListenersAsObject(e);for(r in i)i.hasOwnProperty(r)&&(n=o(i[r],t),-1!==n&&i[r].splice(n,1));return this},a.off=i("removeListener"),a.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},a.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},a.manipulateListeners=function(e,n,r){var o,s,a=e?this.removeListener:this.addListener,d=e?this.removeListeners:this.addListeners;if("object"===t(n)&&!(n instanceof RegExp))for(o in n)n.hasOwnProperty(o)&&(s=n[o])&&("function"==typeof s?a.call(this,o,s):d.call(this,o,s));else for(o=r.length;o--;)a.call(this,n,r[o]);return this},a.removeEvent=function(e){var n,r=t(e),o=this._getEvents();if("string"===r)delete o[e];else if(e instanceof RegExp)for(n in o)o.hasOwnProperty(n)&&e.test(n)&&delete o[n];else delete this._events;return this},a.removeAllListeners=i("removeEvent"),a.emitEvent=function(e,t){var n,r,o,s,a,d=this.getListenersAsObject(e);for(s in d)if(d.hasOwnProperty(s))for(n=d[s].slice(0),o=0;o<n.length;o++)r=n[o],!0===r.once&&this.removeListener(e,r.listener),a=r.listener.apply(this,t||[]),a===this._getOnceReturnValue()&&this.removeListener(e,r.listener);return this},a.trigger=i("emitEvent"),a.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},a.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},a._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue},a._getEvents=function(){return this._events||(this._events={})},r.noConflict=function(){return n.EventEmitter=d,r},e.exports?e.exports=r:n.EventEmitter=r})("undefined"==typeof window?oe||{}:window)}),se=Array.isArray,ae=se,de="object"==t(oe)&&oe&&oe.Object===Object&&oe,ce=de,le="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,pe=ce||le||Function("return this")(),ue=pe,ge=ue.Symbol,fe=ge,ye=Object.prototype,he=ye.hasOwnProperty,be=ye.toString,_e=fe?fe.toStringTag:void 0,me=function(e){var t=he.call(e,_e),n=e[_e];try{e[_e]=void 0;var r=!0}catch(t){}var o=be.call(e);return r&&(t?e[_e]=n:delete e[_e]),o},je=Object.prototype,Ae=je.toString,xe=function(e){return Ae.call(e)},ve=fe?fe.toStringTag:void 0,Oe=a,Se=d,ke=c,we=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Le=/^\w*$/,Be=p,Ee=function(e){if(!Be(e))return!1;var t=Oe(e);return t=="[object Function]"||t=="[object GeneratorFunction]"||t=="[object AsyncFunction]"||t=="[object Proxy]"},Ue=ue["__core-js_shared__"],Pe=Ue,ze=function(){var e=/[^.]+$/.exec(Pe&&Pe.keys&&Pe.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Te=Function.prototype,Ce=Te.toString,Fe=function(e){if(null!=e){try{return Ce.call(e)}catch(t){}try{return e+""}catch(t){}}return""},Re=/[\\^$.*+?()[\]{}|]/g,We=/^\[object .+?Constructor\]$/,De=Function.prototype,Ne=Object.prototype,Ve=De.toString,Me=Ne.hasOwnProperty,Ie=RegExp("^"+Ve.call(Me).replace(Re,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),He=function(e){if(!Be(e)||u(e))return!1;var t=Ee(e)?Ie:We;return t.test(Fe(e))},$e=function(e,t){return null==e?void 0:e[t]},Ge=function(e,t){var n=$e(e,t);return He(n)?n:void 0},qe=Ge(Object,"create"),Qe=qe,Xe=Object.prototype,Ye=Xe.hasOwnProperty,Ze=Object.prototype,Je=Ze.hasOwnProperty;g.prototype.clear=function(){this.__data__=Qe?Qe(null):{},this.size=0},g.prototype["delete"]=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},g.prototype.get=function(e){var t=this.__data__;if(Qe){var n=t[e];return n==="__lodash_hash_undefined__"?void 0:n}return Ye.call(t,e)?t[e]:void 0},g.prototype.has=function(e){var t=this.__data__;return Qe?t[e]!==void 0:Je.call(t,e)},g.prototype.set=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Qe&&void 0===t?"__lodash_hash_undefined__":t,this};var Ke=g,et=function(e,t){return e===t||e!==e&&t!==t},tt=function(e,t){for(var n=e.length;n--;)if(et(e[n][0],t))return n;return-1},nt=Array.prototype,rt=nt.splice;f.prototype.clear=function(){this.__data__=[],this.size=0},f.prototype["delete"]=function(e){var t=this.__data__,n=tt(t,e);if(0>n)return!1;var r=t.length-1;return n==r?t.pop():rt.call(t,n,1),--this.size,!0},f.prototype.get=function(e){var t=this.__data__,n=tt(t,e);return 0>n?void 0:t[n][1]},f.prototype.has=function(e){return-1<tt(this.__data__,e)},f.prototype.set=function(e,t){var n=this.__data__,r=tt(n,e);return 0>r?(++this.size,n.push([e,t])):n[r][1]=t,this};var ot=Ge(ue,"Map"),it=function(e,t){var n=e.__data__;return y(t)?n["string"==typeof t?"string":"hash"]:n.map};h.prototype.clear=function(){this.size=0,this.__data__={hash:new Ke,map:new(ot||f),string:new Ke}},h.prototype["delete"]=function(e){var t=it(this,e)["delete"](e);return this.size-=t?1:0,t},h.prototype.get=function(e){return it(this,e).get(e)},h.prototype.has=function(e){return it(this,e).has(e)},h.prototype.set=function(e,t){var n=it(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};var st=h;b.Cache=st;var at=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,dt=/\\(\\)?/g,ct=function(e){var t=b(e,function(e){return 500===n.size&&n.clear(),e}),n=t.cache;return t}(function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(at,function(e,n,r,o){t.push(r?o.replace(dt,"$1"):n||e)}),t}),lt=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},pt=1/0,ut=fe?fe.prototype:void 0,gt=ut?ut.toString:void 0,ft=_,yt=function(e){return null==e?"":ft(e)},ht=function(e,t){return ae(e)?e:l(e,t)?[e]:ct(yt(e))},bt=function(e){if("string"==typeof e||ke(e))return e;var t=e+"";return"0"==t&&1/e==-(1/0)?"-0":t},_t=function(e,t){t=ht(t,e);for(var n=0,r=t.length;null!=e&&n<r;)e=e[bt(t[n++])];return n&&n==r?e:void 0},mt=function(e,t,n){var r=null==e?void 0:_t(e,t);return r===void 0?n:r},jt=0/0,At=/^\s+|\s+$/g,xt=/^[-+]0x[0-9a-f]+$/i,vt=/^0b[01]+$/i,Ot=/^0o[0-7]+$/i,St=parseInt,kt=function(e){if("number"==typeof e)return e;if(ke(e))return jt;if(Be(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Be(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(At,"");var n=vt.test(e);return n||Ot.test(e)?St(e.slice(2),n?2:8):xt.test(e)?jt:+e},wt=1/0,Lt=function(e){if(!e)return 0===e?e:0;if(e=kt(e),e===wt||e===-wt){var t=0>e?-1:1;return 1.7976931348623157e+308*t}return e===e?e:0},Bt=function(e){var t=Lt(e),n=t%1;return t===t?n?t-n:t:0},Et=function(e){return"number"==typeof e&&e==Bt(e)},Ut=ue.isFinite,Pt=function(e){var t=Math[e];return function(e,n){if(e=kt(e),n=null==n?0:re(Bt(n),292),n&&Ut(e)){var r=(yt(e)+"e").split("e"),o=t(r[0]+"e"+(+r[1]+n));return r=(yt(o)+"e").split("e"),+(r[0]+"e"+(+r[1]-n))}return t(e)}}("round"),zt=Pt,Tt=function(e,t,n){var r=-1,o=e.length;0>t&&(t=-t>o?0:o+t),n=n>o?o:n,0>n&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var i=Array(o);++r<o;)i[r]=e[r+t];return i},Ct=function(e){return"number"==typeof e&&-1<e&&0==e%1&&e<=9007199254740991},Ft=function(e){return null!=e&&Ct(e.length)&&!Ee(e)},Rt=/^(?:0|[1-9]\d*)$/,Wt=C,Dt=F,Nt=function(e,t,n){t=(n?Dt(e,t,n):void 0===t)?1:te(Bt(t),0);var r=null==e?0:e.length;if(!r||1>t)return[];for(var o=0,i=0,s=Array(ne(r/t));o<r;)s[i++]=Tt(e,o,o+=t);return s},Vt=Array.prototype,Mt=Vt.join,It=function(e,t){return null==e?"":Mt.call(e,t)},Ht=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!(!1===t(e[n],n,e)););return e},$t=function(e){return function(t,n,r){for(var o=-1,i=Object(t),s=r(t),a=s.length;a--;){var d=s[e?a:++o];if(!1===n(i[d],d,i))break}return t}}(),Gt=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},qt=function(e){return Se(e)&&Oe(e)=="[object Arguments]"},Qt=Object.prototype,Xt=Qt.hasOwnProperty,Yt=Qt.propertyIsEnumerable,Zt=qt(function(){return arguments}())?qt:function(e){return Se(e)&&Xt.call(e,"callee")&&!Yt.call(e,"callee")},Jt=function(){return!1},Kt=n(function(e,t){var n=t&&!t.nodeType&&t,r=n&&!0&&e&&!e.nodeType&&e,o=r&&r.exports===n,i=o?ue.Buffer:void 0,s=i?i.isBuffer:void 0;e.exports=s||Jt}),en={};en["[object Float32Array]"]=en["[object Float64Array]"]=en["[object Int8Array]"]=en["[object Int16Array]"]=en["[object Int32Array]"]=en["[object Uint8Array]"]=en["[object Uint8ClampedArray]"]=en["[object Uint16Array]"]=en["[object Uint32Array]"]=!0,en["[object Arguments]"]=en["[object Array]"]=en["[object ArrayBuffer]"]=en["[object Boolean]"]=en["[object DataView]"]=en["[object Date]"]=en["[object Error]"]=en["[object Function]"]=en["[object Map]"]=en["[object Number]"]=en["[object Object]"]=en["[object RegExp]"]=en["[object Set]"]=en["[object String]"]=en["[object WeakMap]"]=!1;var tn=function(e){return function(t){return e(t)}},nn=n(function(e,t){var n=t&&!t.nodeType&&t,r=n&&!0&&e&&!e.nodeType&&e,o=r&&r.exports===n,i=o&&ce.process,s=function(){try{var e=r&&r.require&&r.require("util").types;return e?e:i&&i.binding&&i.binding("util")}catch(t){}}();e.exports=s}),rn=nn&&nn.isTypedArray,on=rn?tn(rn):function(e){return Se(e)&&Ct(e.length)&&!!en[Oe(e)]},sn=Object.prototype,an=sn.hasOwnProperty,dn=function(e,t){var n=ae(e),r=!n&&Zt(e),o=!n&&!r&&Kt(e),i=!n&&!r&&!o&&on(e),s=n||r||o||i,a=s?Gt(e.length,String):[],d=a.length;for(var c in e)(t||an.call(e,c))&&!(s&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Wt(c,d)))&&a.push(c);return a},cn=Object.prototype,ln=function(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||cn;return e===n},pn=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),un=Object.prototype,gn=un.hasOwnProperty,fn=function(e){if(!ln(e))return pn(e);var t=[];for(var n in Object(e))gn.call(e,n)&&"constructor"!=n&&t.push(n);return t},yn=function(e){return Ft(e)?dn(e):fn(e)},hn=function(e,t){return function(n,r){if(null==n)return n;if(!Ft(n))return e(n,r);for(var o=n.length,i=t?o:-1,s=Object(n);(t?i--:++i<o)&&!(!1===r(s[i],i,s)););return n}}(function(e,t){return e&&$t(e,t,yn)}),bn=function(e){return e},_n=function(e){return"function"==typeof e?e:bn},mn=function(e,t){var n=ae(e)?Ht:hn;return n(e,_n(t))},jn=n(function(e,t){(function(n,r){e.exports=t=r()})(oe,function(){var e=e||function(e,t){var n=Object.create||function(){function e(){}return function(t){var n;return e.prototype=t,n=new e,e.prototype=null,n}}(),r={},o=r.lib={},i=o.Base=function(){return{extend:function(e){var t=n(this);return e&&t.mixIn(e),t.hasOwnProperty("init")&&this.init!==t.init||(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),s=o.WordArray=i.extend({init:function(e,n){e=this.words=e||[],this.sigBytes=n==t?4*e.length:n},toString:function(e){return(e||d).stringify(this)},concat:function(e){var t=this.words,n=e.words,r=this.sigBytes,o=e.sigBytes;if(this.clamp(),r%4)for(var s,a=0;a<o;a++)s=255&n[a>>>2]>>>24-8*(a%4),t[r+a>>>2]|=s<<24-8*((r+a)%4);else for(var a=0;a<o;a+=4)t[r+a>>>2]=n[a>>>2];return this.sigBytes+=o,this},clamp:function(){var e=this.words,t=this.sigBytes;e[t>>>2]&=4294967295<<32-8*(t%4),e.length=ne(t/4)},clone:function e(){var e=i.clone.call(this);return e.words=this.words.slice(0),e},random:function(t){for(var n,o,a=[],d=function(t){var t=t,n=987654321,r=4294967295;return function(){n=36969*(65535&n)+(n>>16)&r,t=18e3*(65535&t)+(t>>16)&r;var o=(n<<16)+t&r;return o/=4294967296,o+=.5,o*(.5<e.random()?1:-1)}},r=0;r<t;r+=4)o=d(4294967296*(n||e.random())),n=987654071*o(),a.push(0|4294967296*o());return new s.init(a,t)}}),a=r.enc={},d=a.Hex={stringify:function(e){for(var t,n=e.words,r=e.sigBytes,o=[],s=0;s<r;s++)t=255&n[s>>>2]>>>24-8*(s%4),o.push((t>>>4).toString(16)),o.push((15&t).toString(16));return o.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r+=2)n[r>>>3]|=parseInt(e.substr(r,2),16)<<24-4*(r%8);return new s.init(n,t/2)}},c=a.Latin1={stringify:function(e){for(var t=(0,eval)("this").String.fromCharCode,n,r=e.words,o=e.sigBytes,s=[],a=0;a<o;a++)n=255&r[a>>>2]>>>24-8*(a%4),s.push(t(n));return s.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r++)n[r>>>2]|=(255&e.charCodeAt(r))<<24-8*(r%4);return new s.init(n,t)}},l=a.Utf8={stringify:function(e){try{return decodeURIComponent(escape(c.stringify(e)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(e){return c.parse(unescape(encodeURIComponent(e)))}},p=o.BufferedBlockAlgorithm=i.extend({reset:function(){this._data=new s.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=l.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(e){var t=this._data,n=t.words,r=t.sigBytes,o=this.blockSize,i=r/(4*o);i=e?ne(i):te((0|i)-this._minBufferSize,0);var a=i*o,d=re(4*a,r);if(a){for(var c=0;c<a;c+=o)this._doProcessBlock(n,c);var l=n.splice(0,a);t.sigBytes-=d}return new s.init(l,d)},clone:function e(){var e=i.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0}),u=o.Hasher=p.extend({cfg:i.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){p.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){e&&this._append(e);var t=this._doFinalize();return t},blockSize:16,_createHelper:function(e){return function(t,n){return new e.init(n).finalize(t)}},_createHmacHelper:function(e){return function(t,n){return new g.HMAC.init(e,n).finalize(t)}}}),g=r.algo={};return r}(Math);return e})}),An=n(function(e,t){(function(n,r){e.exports=t=r(jn)})(oe,function(e){return function(){function t(e,t,n){for(var r=[],s=0,a=0;a<t;a++)if(a%4){var d=n[e.charCodeAt(a-1)]<<2*(a%4),c=n[e.charCodeAt(a)]>>>6-2*(a%4);r[s>>>2]|=(d|c)<<24-8*(s%4),s++}return o.create(r,s)}var n=e,r=n.lib,o=r.WordArray,i=n.enc,s=i.Base64={stringify:function(e){var t=e.words,n=e.sigBytes,r=this._map;e.clamp();for(var o=[],s=0;s<n;s+=3)for(var a=255&t[s>>>2]>>>24-8*(s%4),d=255&t[s+1>>>2]>>>24-8*((s+1)%4),c=255&t[s+2>>>2]>>>24-8*((s+2)%4),l=0;4>l&&s+.75*l<n;l++)o.push(r.charAt(63&(a<<16|d<<8|c)>>>6*(3-l)));var p=r.charAt(64);if(p)for(;o.length%4;)o.push(p);return o.join("")},parse:function(e){var n=e.length,r=this._map,o=this._reverseMap;if(!o){o=this._reverseMap=[];for(var i=0;i<r.length;i++)o[r.charCodeAt(i)]=i}var s=r.charAt(64);if(s){var a=e.indexOf(s);-1!==a&&(n=a)}return t(e,n,o)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),e.enc.Base64})}),xn=n(function(e,t){(function(n,r){e.exports=t=r(jn)})(oe,function(e){return function(){if("function"==typeof ArrayBuffer){var t=e.lib,n=t.WordArray,r=n.init,o=n.init=function(e){if(e instanceof ArrayBuffer&&(e=new Uint8Array(e)),(e instanceof Int8Array||"undefined"!=typeof Uint8ClampedArray&&e instanceof Uint8ClampedArray||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Float32Array||e instanceof Float64Array)&&(e=new Uint8Array(e.buffer,e.byteOffset,e.byteLength)),e instanceof Uint8Array){for(var t=e.byteLength,n=[],o=0;o<t;o++)n[o>>>2]|=e[o]<<24-8*(o%4);r.call(this,n,t)}else r.apply(this,arguments)};o.prototype=n}}(),e.lib.WordArray})}),vn={tagU8A:"[Uint8Array]::",u8arr2b64:function(e){return R(e)?"[Uint8Array]::"+M(e):e},b642u8arr:function(e){return j(e)&&"[Uint8Array]::"===D(e,14)?(e=V(e,14),I(e)):e},tagU16A:"[Uint16Array]::",u16arr2b64:function(e){return W(e)?"[Uint16Array]::"+$(e):e},b642u16arr:function(e){return j(e)&&"[Uint16Array]::"===D(e,15)?(e=V(e,15),q(e)):e}},v=function(e,t,n){var r=e.length;return n=void 0===n?r:n,!t&&n>=r?e:Tt(e,t,n)},On=RegExp("["+"\\u200d"+"\\ud800-\\udfff"+("\\u0300-\\u036f"+"\\ufe20-\\ufe2f"+"\\u20d0-\\u20ff")+"\\ufe0e\\ufe0f"+"]"),Sn=function(e){return On.test(e)},kn=nn&&nn.isRegExp,wn=kn?tn(kn):function(e){return Se(e)&&Oe(e)=="[object RegExp]"},Ln=function(e){return e.split("")},Bn="\\ud800-\\udfff",En="["+("\\u0300-\\u036f"+"\\ufe20-\\ufe2f"+"\\u20d0-\\u20ff")+"]",Un="\\ud83c[\\udffb-\\udfff]",Pn="[^"+Bn+"]",zn="(?:\\ud83c[\\udde6-\\uddff]){2}",Tn="[\\ud800-\\udbff][\\udc00-\\udfff]",Cn="(?:"+En+"|"+Un+")"+"?",Fn="["+"\\ufe0e\\ufe0f"+"]?",Rn="(?:"+"\\u200d"+"(?:"+[Pn,zn,Tn].join("|")+")"+Fn+Cn+")*",Wn="(?:"+[Pn+En+"?",En,zn,Tn,"["+Bn+"]"].join("|")+")",Dn=RegExp(Un+"(?="+Un+")|"+Wn+(Fn+Cn+Rn),"g"),Nn=function(e){return e.match(Dn)||[]},Vn=function(e){return Sn(e)?Nn(e):Ln(e)},Mn=function(e,t,n){return(n&&"number"!=typeof n&&Dt(e,t,n)&&(t=n=void 0),n=void 0===n?4294967295:n>>>0,!n)?[]:(e=yt(e),e&&("string"==typeof t||null!=t&&!wn(t))&&(t=ft(t),!t&&Sn(e))?v(Vn(e),0,n):e.split(t,n))},In=function(e,t,r){var o=null==e?0:e.length;return o?(t=r||void 0===t?1:Bt(t),Tt(e,0>t?0:t,o)):[]},Hn=function(e,t,n,r){for(var o=-1,i=te(ne((t-e)/(n||1)),0),s=Array(i);i--;)s[r?i:++o]=e,e+=n;return s},$n=function(e){return function(t,n,r){return r&&"number"!=typeof r&&Dt(t,n,r)&&(n=r=void 0),t=Lt(t),void 0===n?(n=t,t=0):n=Lt(n),r=void 0===r?t<n?1:-1:Lt(r),Hn(t,n,r,e)}}(),Gn=$n,qn={};return function(e){function t(e){for(var t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];setTimeout(function(){a.emit.apply(a,[e].concat(n))},1)}function n(){function n(){t("open")}function c(){o||(t("openOnce"),o=!0)}function l(){t("close"),r()}function p(e){t("error",{msg:"websocket error",err:e}),i.close()}function u(e){ee(e,g)}function g(e){var n=T(e,"_mode");if("execute"!==n)"broadcast"===n?t("broadcast",mt(e,"data")):"deliver"===n?t("deliver",mt(e,"data")):p({msg:"can not find _mode in data",err:e});else if(mt(e,"_id")&&mt(e,"output")){var r=mt(e,"_id"),o=mt(e,"output");d.emit(r,o)}else t("error",{msg:"can not find _id and output in data",err:e})}function f(n,r){i.readyState===i.OPEN&&Z(i,e.strSplitLength,n,r,function(e){t("error",{msg:"can not send message",err:e})})}e.url||(e.url="ws://localhost:8080"),e.token||(e.token="*"),e.strSplitLength||(e.strSplitLength=1e6);var y={url:e.url,token:e.token,open:function(){n(),c()},close:function(){l()},message:function(e){u(e)},error:function(e){p(e)}};try{i=new s(y)}catch(e){t("error",{msg:"can not create websocket",err:e}),r()}a.removeAllListeners("triggerExecute"),a.on("triggerExecute",function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,n=2<arguments.length?arguments[2]:void 0,r=3<arguments.length?arguments[3]:void 0,o=B();f({_mode:"execute",_id:o,func:e,input:t},r),d.on(o,function(e){n(e),d.removeAllListeners(o)})}),a.removeAllListeners("triggerBroadcast"),a.on("triggerBroadcast",function(e,t){f({_mode:"broadcast",data:e},t)}),a.removeAllListeners("triggerDeliver"),a.on("triggerDeliver",function(e,t){f({_mode:"deliver",data:e},t)})}function r(){setTimeout(function(){t("reconn"),n()},1e3)}var o=!1,i=null,a=new ie,d=new ie;return a.execute=function(e,n){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:function(){},o=m();return t("triggerExecute",e,n,function(e){o.resolve(e)},r),o},a.broadcast=function(e){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:function(){};t("triggerBroadcast",e,n)},a.deliver=function(e){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:function(){};t("triggerDeliver",e,n)},n(),a}});
//# sourceMappingURL=w-converws-client.umd.js.map
