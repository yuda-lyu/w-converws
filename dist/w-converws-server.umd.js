/*!
 * w-converws-server v1.0.29
 * (c) 2018-2021 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("ws"),require("events")):"function"==typeof define&&define.amd?define(["ws","events"],r):(t="undefined"!=typeof globalThis?globalThis:t||self)["w-converws-server"]=r(t.ws,t.events)}(this,(function(t,r){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var e=n(t),o=n(r),i=Array.isArray;function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function c(t){if(t.__esModule)return t;var r=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach((function(n){var e=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(r,n,e.get?e:{enumerable:!0,get:function(){return t[n]}})})),r}function f(t){var r={exports:{}};return t(r,r.exports),r.exports}var s="object"==a(u)&&u&&u.Object===Object&&u,l="object"==("undefined"==typeof self?"undefined":a(self))&&self&&self.Object===Object&&self,p=s||l||Function("return this")(),v=p.Symbol,y=Object.prototype,d=y.hasOwnProperty,h=y.toString,b=v?v.toStringTag:void 0;var g=function(t){var r=d.call(t,b),n=t[b];try{t[b]=void 0;var e=!0}catch(t){}var o=h.call(t);return e&&(r?t[b]=n:delete t[b]),o},_=Object.prototype.toString;var j=function(t){return _.call(t)},m=v?v.toStringTag:void 0;var w=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":m&&m in Object(t)?g(t):j(t)};var A=function(t){return null!=t&&"object"==a(t)};var O=function(t){return"symbol"==a(t)||A(t)&&"[object Symbol]"==w(t)},S=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,x=/^\w*$/;var U=function(t,r){if(i(t))return!1;var n=a(t);return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!O(t))||(x.test(t)||!S.test(t)||null!=r&&t in Object(r))};var B=function(t){var r=a(t);return null!=t&&("object"==r||"function"==r)};var z,C=function(t){if(!B(t))return!1;var r=w(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},T=p["__core-js_shared__"],M=(z=/[^.]+$/.exec(T&&T.keys&&T.keys.IE_PROTO||""))?"Symbol(src)_1."+z:"";var E=function(t){return!!M&&M in t},I=Function.prototype.toString;var P=function(t){if(null!=t){try{return I.call(t)}catch(t){}try{return t+""}catch(t){}}return""},k=/^\[object .+?Constructor\]$/,N=Function.prototype,F=Object.prototype,$=N.toString,R=F.hasOwnProperty,L=RegExp("^"+$.call(R).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var D=function(t){return!(!B(t)||E(t))&&(C(t)?L:k).test(P(t))};var W=function(t,r){return null==t?void 0:t[r]};var H=function(t,r){var n=W(t,r);return D(n)?n:void 0},q=H(Object,"create");var V=function(){this.__data__=q?q(null):{},this.size=0};var J=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r},G=Object.prototype.hasOwnProperty;var K=function(t){var r=this.__data__;if(q){var n=r[t];return"__lodash_hash_undefined__"===n?void 0:n}return G.call(r,t)?r[t]:void 0},Q=Object.prototype.hasOwnProperty;var X=function(t){var r=this.__data__;return q?void 0!==r[t]:Q.call(r,t)};var Y=function(t,r){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=q&&void 0===r?"__lodash_hash_undefined__":r,this};function Z(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}Z.prototype.clear=V,Z.prototype.delete=J,Z.prototype.get=K,Z.prototype.has=X,Z.prototype.set=Y;var tt=Z;var rt=function(){this.__data__=[],this.size=0};var nt=function(t,r){return t===r||t!=t&&r!=r};var et=function(t,r){for(var n=t.length;n--;)if(nt(t[n][0],r))return n;return-1},ot=Array.prototype.splice;var it=function(t){var r=this.__data__,n=et(r,t);return!(n<0)&&(n==r.length-1?r.pop():ot.call(r,n,1),--this.size,!0)};var at=function(t){var r=this.__data__,n=et(r,t);return n<0?void 0:r[n][1]};var ut=function(t){return et(this.__data__,t)>-1};var ct=function(t,r){var n=this.__data__,e=et(n,t);return e<0?(++this.size,n.push([t,r])):n[e][1]=r,this};function ft(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}ft.prototype.clear=rt,ft.prototype.delete=it,ft.prototype.get=at,ft.prototype.has=ut,ft.prototype.set=ct;var st=ft,lt=H(p,"Map");var pt=function(){this.size=0,this.__data__={hash:new tt,map:new(lt||st),string:new tt}};var vt=function(t){var r=a(t);return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t};var yt=function(t,r){var n=t.__data__;return vt(r)?n["string"==typeof r?"string":"hash"]:n.map};var dt=function(t){var r=yt(this,t).delete(t);return this.size-=r?1:0,r};var ht=function(t){return yt(this,t).get(t)};var bt=function(t){return yt(this,t).has(t)};var gt=function(t,r){var n=yt(this,t),e=n.size;return n.set(t,r),this.size+=n.size==e?0:1,this};function _t(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}_t.prototype.clear=pt,_t.prototype.delete=dt,_t.prototype.get=ht,_t.prototype.has=bt,_t.prototype.set=gt;var jt=_t;function mt(t,r){if("function"!=typeof t||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var n=function n(){var e=arguments,o=r?r.apply(this,e):e[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,e);return n.cache=i.set(o,a)||i,a};return n.cache=new(mt.Cache||jt),n}mt.Cache=jt;var wt=mt;var At=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ot=/\\(\\)?/g,St=function(t){var r=wt(t,(function(t){return 500===n.size&&n.clear(),t})),n=r.cache;return r}((function(t){var r=[];return 46===t.charCodeAt(0)&&r.push(""),t.replace(At,(function(t,n,e,o){r.push(e?o.replace(Ot,"$1"):n||t)})),r}));var xt=function(t,r){for(var n=-1,e=null==t?0:t.length,o=Array(e);++n<e;)o[n]=r(t[n],n,t);return o},Ut=v?v.prototype:void 0,Bt=Ut?Ut.toString:void 0;var zt=function t(r){if("string"==typeof r)return r;if(i(r))return xt(r,t)+"";if(O(r))return Bt?Bt.call(r):"";var n=r+"";return"0"==n&&1/r==-Infinity?"-0":n};var Ct=function(t){return null==t?"":zt(t)};var Tt=function(t,r){return i(t)?t:U(t,r)?[t]:St(Ct(t))};var Mt=function(t){if("string"==typeof t||O(t))return t;var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r};var Et=function(t,r){for(var n=0,e=(r=Tt(r,t)).length;null!=t&&n<e;)t=t[Mt(r[n++])];return n&&n==e?t:void 0};var It=function(t,r,n){var e=null==t?void 0:Et(t,r);return void 0===e?n:e};var Pt=function(t,r,n){var e=-1,o=t.length;r<0&&(r=-r>o?0:o+r),(n=n>o?o:n)<0&&(n+=o),o=r>n?0:n-r>>>0,r>>>=0;for(var i=Array(o);++e<o;)i[e]=t[e+r];return i};var kt=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991};var Nt=function(t){return null!=t&&kt(t.length)&&!C(t)},Ft=/^(?:0|[1-9]\d*)$/;var $t=function(t,r){var n=a(t);return!!(r=null==r?9007199254740991:r)&&("number"==n||"symbol"!=n&&Ft.test(t))&&t>-1&&t%1==0&&t<r};var Rt=function(t,r,n){if(!B(n))return!1;var e=a(r);return!!("number"==e?Nt(n)&&$t(r,n.length):"string"==e&&r in n)&&nt(n[r],t)},Lt=/\s/;var Dt=function(t){for(var r=t.length;r--&&Lt.test(t.charAt(r)););return r},Wt=/^\s+/;var Ht=function(t){return t?t.slice(0,Dt(t)+1).replace(Wt,""):t},qt=/^[-+]0x[0-9a-f]+$/i,Vt=/^0b[01]+$/i,Jt=/^0o[0-7]+$/i,Gt=parseInt;var Kt=function(t){if("number"==typeof t)return t;if(O(t))return NaN;if(B(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=B(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=Ht(t);var n=Vt.test(t);return n||Jt.test(t)?Gt(t.slice(2),n?2:8):qt.test(t)?NaN:+t},Qt=1/0;var Xt=function(t){return t?(t=Kt(t))===Qt||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0};var Yt=function(t){var r=Xt(t),n=r%1;return r==r?n?r-n:r:0},Zt=Math.ceil,tr=Math.max;var rr=function(t,r,n){r=(n?Rt(t,r,n):void 0===r)?1:tr(Yt(r),0);var e=null==t?0:t.length;if(!e||r<1)return[];for(var o=0,i=0,a=Array(Zt(e/r));o<e;)a[i++]=Pt(t,o,o+=r);return a},nr=Array.prototype.join;var er=function(t,r){return null==t?"":nr.call(t,r)};var or=function(t,r){for(var n=-1,e=null==t?0:t.length;++n<e&&!1!==r(t[n],n,t););return t};var ir=function(t){return function(r,n,e){for(var o=-1,i=Object(r),a=e(r),u=a.length;u--;){var c=a[t?u:++o];if(!1===n(i[c],c,i))break}return r}}();var ar=function(t,r){for(var n=-1,e=Array(t);++n<t;)e[n]=r(n);return e};var ur=function(t){return A(t)&&"[object Arguments]"==w(t)},cr=Object.prototype,fr=cr.hasOwnProperty,sr=cr.propertyIsEnumerable,lr=ur(function(){return arguments}())?ur:function(t){return A(t)&&fr.call(t,"callee")&&!sr.call(t,"callee")};var pr=function(){return!1},vr=f((function(t,r){var n=r&&!r.nodeType&&r,e=n&&t&&!t.nodeType&&t,o=e&&e.exports===n?p.Buffer:void 0,i=(o?o.isBuffer:void 0)||pr;t.exports=i})),yr={};yr["[object Float32Array]"]=yr["[object Float64Array]"]=yr["[object Int8Array]"]=yr["[object Int16Array]"]=yr["[object Int32Array]"]=yr["[object Uint8Array]"]=yr["[object Uint8ClampedArray]"]=yr["[object Uint16Array]"]=yr["[object Uint32Array]"]=!0,yr["[object Arguments]"]=yr["[object Array]"]=yr["[object ArrayBuffer]"]=yr["[object Boolean]"]=yr["[object DataView]"]=yr["[object Date]"]=yr["[object Error]"]=yr["[object Function]"]=yr["[object Map]"]=yr["[object Number]"]=yr["[object Object]"]=yr["[object RegExp]"]=yr["[object Set]"]=yr["[object String]"]=yr["[object WeakMap]"]=!1;var dr=function(t){return A(t)&&kt(t.length)&&!!yr[w(t)]};var hr=function(t){return function(r){return t(r)}},br=f((function(t,r){var n=r&&!r.nodeType&&r,e=n&&t&&!t.nodeType&&t,o=e&&e.exports===n&&s.process,i=function(){try{var t=e&&e.require&&e.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=i})),gr=br&&br.isTypedArray,_r=gr?hr(gr):dr,jr=Object.prototype.hasOwnProperty;var mr=function(t,r){var n=i(t),e=!n&&lr(t),o=!n&&!e&&vr(t),a=!n&&!e&&!o&&_r(t),u=n||e||o||a,c=u?ar(t.length,String):[],f=c.length;for(var s in t)!r&&!jr.call(t,s)||u&&("length"==s||o&&("offset"==s||"parent"==s)||a&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||$t(s,f))||c.push(s);return c},wr=Object.prototype;var Ar=function(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||wr)};var Or=function(t,r){return function(n){return t(r(n))}}(Object.keys,Object),Sr=Object.prototype.hasOwnProperty;var xr=function(t){if(!Ar(t))return Or(t);var r=[];for(var n in Object(t))Sr.call(t,n)&&"constructor"!=n&&r.push(n);return r};var Ur=function(t){return Nt(t)?mr(t):xr(t)};var Br=function(t,r){return function(n,e){if(null==n)return n;if(!Nt(n))return t(n,e);for(var o=n.length,i=r?o:-1,a=Object(n);(r?i--:++i<o)&&!1!==e(a[i],i,a););return n}}((function(t,r){return t&&ir(t,r,Ur)}));var zr=function(t){return t};var Cr=function(t){return"function"==typeof t?t:zr};var Tr=function(t,r){return(i(t)?or:Br)(t,Cr(r))};var Mr=function(t){return"number"==typeof t&&t==Yt(t)};function Er(t){return"[object String]"===Object.prototype.toString.call(t)}function Ir(t){return!(!Er(t)||""===t)}function Pr(t){var r=!1;return Ir(t)?r=!isNaN(Number(t)):function(t){return"[object Number]"===Object.prototype.toString.call(t)}(t)&&(r=!0),r}function kr(t){return Pr(t)?Xt(t):0}var Nr=p.isFinite,Fr=Math.min;var $r=function(t){var r=Math[t];return function(t,n){if(t=Kt(t),(n=null==n?0:Fr(Yt(n),292))&&Nr(t)){var e=(Ct(t)+"e").split("e"),o=r(e[0]+"e"+(+e[1]+n));return+((e=(Ct(o)+"e").split("e"))[0]+"e"+(+e[1]-n))}return r(t)}}("round");function Rr(t){if(!Pr(t))return 0;t=kr(t);var r=$r(t);return"0"===String(r)?0:r}function Lr(t){return!!function(t){return!!Pr(t)&&(t=kr(t),Mr(t))}(t)&&Rr(t)>0}var Dr="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),Wr=Dr.length;function Hr(t){return"[object Uint8Array]"===Object.prototype.toString.call(t)}function qr(t){return"[object Uint16Array]"===Object.prototype.toString.call(t)}function Vr(t,r){return Ir(t)&&Lr(r)?t.substr(0,r):""}function Jr(t,r){return Ir(t)&&Lr(r)?function(t,r){if(!Ir(t))return"";if(!Lr(r))return"";var n=t.length-r;return n<0&&(n=0),t.substr(n,r)}(t,t.length-r):""}var Gr=c(Object.freeze({__proto__:null,default:{}})),Kr=f((function(t,r){var n;t.exports=n=n||function(t,r){var n;if("undefined"!=typeof window&&window.crypto&&(n=window.crypto),"undefined"!=typeof self&&self.crypto&&(n=self.crypto),"undefined"!=typeof globalThis&&globalThis.crypto&&(n=globalThis.crypto),!n&&"undefined"!=typeof window&&window.msCrypto&&(n=window.msCrypto),!n&&void 0!==u&&u.crypto&&(n=u.crypto),!n)try{n=Gr}catch(t){}var e=function(){if(n){if("function"==typeof n.getRandomValues)try{return n.getRandomValues(new Uint32Array(1))[0]}catch(t){}if("function"==typeof n.randomBytes)try{return n.randomBytes(4).readInt32LE()}catch(t){}}throw new Error("Native crypto module could not be used to get secure random number.")},o=Object.create||function(){function t(){}return function(r){var n;return t.prototype=r,n=new t,t.prototype=null,n}}(),i={},a=i.lib={},c=a.Base={extend:function(t){var r=o(this);return t&&r.mixIn(t),r.hasOwnProperty("init")&&this.init!==r.init||(r.init=function(){r.$super.init.apply(this,arguments)}),r.init.prototype=r,r.$super=this,r},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var r in t)t.hasOwnProperty(r)&&(this[r]=t[r]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},f=a.WordArray=c.extend({init:function(t,n){t=this.words=t||[],this.sigBytes=n!=r?n:4*t.length},toString:function(t){return(t||l).stringify(this)},concat:function(t){var r=this.words,n=t.words,e=this.sigBytes,o=t.sigBytes;if(this.clamp(),e%4)for(var i=0;i<o;i++){var a=n[i>>>2]>>>24-i%4*8&255;r[e+i>>>2]|=a<<24-(e+i)%4*8}else for(var u=0;u<o;u+=4)r[e+u>>>2]=n[u>>>2];return this.sigBytes+=o,this},clamp:function(){var r=this.words,n=this.sigBytes;r[n>>>2]&=4294967295<<32-n%4*8,r.length=t.ceil(n/4)},clone:function(){var t=c.clone.call(this);return t.words=this.words.slice(0),t},random:function(t){for(var r=[],n=0;n<t;n+=4)r.push(e());return new f.init(r,t)}}),s=i.enc={},l=s.Hex={stringify:function(t){for(var r=t.words,n=t.sigBytes,e=[],o=0;o<n;o++){var i=r[o>>>2]>>>24-o%4*8&255;e.push((i>>>4).toString(16)),e.push((15&i).toString(16))}return e.join("")},parse:function(t){for(var r=t.length,n=[],e=0;e<r;e+=2)n[e>>>3]|=parseInt(t.substr(e,2),16)<<24-e%8*4;return new f.init(n,r/2)}},p=s.Latin1={stringify:function(t){for(var r=t.words,n=t.sigBytes,e=[],o=0;o<n;o++){var i=r[o>>>2]>>>24-o%4*8&255;e.push(String.fromCharCode(i))}return e.join("")},parse:function(t){for(var r=t.length,n=[],e=0;e<r;e++)n[e>>>2]|=(255&t.charCodeAt(e))<<24-e%4*8;return new f.init(n,r)}},v=s.Utf8={stringify:function(t){try{return decodeURIComponent(escape(p.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return p.parse(unescape(encodeURIComponent(t)))}},y=a.BufferedBlockAlgorithm=c.extend({reset:function(){this._data=new f.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=v.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(r){var n,e=this._data,o=e.words,i=e.sigBytes,a=this.blockSize,u=i/(4*a),c=(u=r?t.ceil(u):t.max((0|u)-this._minBufferSize,0))*a,s=t.min(4*c,i);if(c){for(var l=0;l<c;l+=a)this._doProcessBlock(o,l);n=o.splice(0,c),e.sigBytes-=s}return new f.init(n,s)},clone:function(){var t=c.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0});a.Hasher=y.extend({cfg:c.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){y.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(r,n){return new t.init(n).finalize(r)}},_createHmacHelper:function(t){return function(r,n){return new d.HMAC.init(t,n).finalize(r)}}});var d=i.algo={};return i}(Math)})),Qr=f((function(t,r){var n;t.exports=(n=Kr,function(){var t=n,r=t.lib.WordArray;function e(t,n,e){for(var o=[],i=0,a=0;a<n;a++)if(a%4){var u=e[t.charCodeAt(a-1)]<<a%4*2|e[t.charCodeAt(a)]>>>6-a%4*2;o[i>>>2]|=u<<24-i%4*8,i++}return r.create(o,i)}t.enc.Base64={stringify:function(t){var r=t.words,n=t.sigBytes,e=this._map;t.clamp();for(var o=[],i=0;i<n;i+=3)for(var a=(r[i>>>2]>>>24-i%4*8&255)<<16|(r[i+1>>>2]>>>24-(i+1)%4*8&255)<<8|r[i+2>>>2]>>>24-(i+2)%4*8&255,u=0;u<4&&i+.75*u<n;u++)o.push(e.charAt(a>>>6*(3-u)&63));var c=e.charAt(64);if(c)for(;o.length%4;)o.push(c);return o.join("")},parse:function(t){var r=t.length,n=this._map,o=this._reverseMap;if(!o){o=this._reverseMap=[];for(var i=0;i<n.length;i++)o[n.charCodeAt(i)]=i}var a=n.charAt(64);if(a){var u=t.indexOf(a);-1!==u&&(r=u)}return e(t,r,o)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),n.enc.Base64)})),Xr=f((function(t,r){var n;t.exports=(n=Kr,function(){if("function"==typeof ArrayBuffer){var t=n.lib.WordArray,r=t.init;(t.init=function(t){if(t instanceof ArrayBuffer&&(t=new Uint8Array(t)),(t instanceof Int8Array||"undefined"!=typeof Uint8ClampedArray&&t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array)&&(t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),t instanceof Uint8Array){for(var n=t.byteLength,e=[],o=0;o<n;o++)e[o>>>2]|=t[o]<<24-o%4*8;r.call(this,e,n)}else r.apply(this,arguments)}).prototype=t}}(),n.lib.WordArray)}));function Yr(t){return Hr(t)?Xr.create(t).toString(Qr):""}function Zr(t){if(!Er(t))return new Uint8Array;for(var r=Qr.parse(t),n=r.words,e=r.sigBytes,o=new Uint8Array(e),i=0;i<e;i++){var a=n[i>>>2]>>>24-i%4*8&255;o[i]=a}return o}function tn(t){return qr(t)?Yr(function(t){return qr(t)?new Uint8Array(t):new Uint8Array}(t)):""}function rn(t){return Er(t)?function(t){return Hr(t)?new Uint16Array(t):new Uint16Array}(Zr(t)):new Uint16Array}var nn="[Uint8Array]::";var en="[Uint16Array]::";var on={tagU8A:nn,u8arr2b64:function(t){return Hr(t)?nn+Yr(t):t},b642u8arr:function(t){return Er(t)&&Vr(t,nn.length)===nn?Zr(t=Jr(t,nn.length)):t},tagU16A:en,u16arr2b64:function(t){return qr(t)?en+tn(t):t},b642u16arr:function(t){return Er(t)&&Vr(t,en.length)===en?rn(t=Jr(t,en.length)):t}};function an(t){return"[object Undefined]"===Object.prototype.toString.call(t)}function un(t){return"[object Array]"===Object.prototype.toString.call(t)}function cn(t,r,n,e,o){var i=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Uint8Array";if(an(t))return"";if(Er(r))r=[r];else if(!un(r))return"";function n(t,n){return r.indexOf("Uint8Array")>=0&&(n=on.u8arr2b64(n)),r.indexOf("Uint16Array")>=0&&(n=on.u16arr2b64(n)),n}var e="";try{e=JSON.stringify(t,n)}catch(t){e=""}return e}(n),a=rr(i,r),u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:32,r=[];t=Lr(t)?Rr(t):32;for(var n=0;n<t;n++)r[n]=Dr[0|Math.random()*Wr];return r.join("")}(),c=a.length;Tr(a,(function(r,n){r=er(r,"");var i="".concat(u,"|").concat(n,"|").concat(c,"|").concat(r);t.send(i,(function(t){t&&C(o)&&o(t)})),C(e)&&e((n+1)/c*100)}))}var fn=function(t,r,n){var e=t.length;return n=void 0===n?e:n,!r&&n>=e?t:Pt(t,r,n)},sn=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var ln=function(t){return sn.test(t)};var pn=function(t){return A(t)&&"[object RegExp]"==w(t)},vn=br&&br.isRegExp,yn=vn?hr(vn):pn;var dn=function(t){return t.split("")},hn="[\\ud800-\\udfff]",bn="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",gn="\\ud83c[\\udffb-\\udfff]",_n="[^\\ud800-\\udfff]",jn="(?:\\ud83c[\\udde6-\\uddff]){2}",mn="[\\ud800-\\udbff][\\udc00-\\udfff]",wn="(?:"+bn+"|"+gn+")"+"?",An="[\\ufe0e\\ufe0f]?",On=An+wn+("(?:\\u200d(?:"+[_n,jn,mn].join("|")+")"+An+wn+")*"),Sn="(?:"+[_n+bn+"?",bn,jn,mn,hn].join("|")+")",xn=RegExp(gn+"(?="+gn+")|"+Sn+On,"g");var Un=function(t){return t.match(xn)||[]};var Bn=function(t){return ln(t)?Un(t):dn(t)};var zn=function(t,r,n){return n&&"number"!=typeof n&&Rt(t,r,n)&&(r=n=void 0),(n=void 0===n?4294967295:n>>>0)?(t=Ct(t))&&("string"==typeof r||null!=r&&!yn(r))&&!(r=zt(r))&&ln(t)?fn(Bn(t),0,n):t.split(r,n):[]};var Cn=function(t,r,n){var e=null==t?0:t.length;return e?(r=n||void 0===r?1:Yt(r),Pt(t,r<0?0:r,e)):[]},Tn=Math.ceil,Mn=Math.max;var En=function(t,r,n,e){for(var o=-1,i=Mn(Tn((r-t)/(n||1)),0),a=Array(i);i--;)a[e?i:++o]=t,t+=n;return a};var In=function(t){return function(r,n,e){return e&&"number"!=typeof e&&Rt(r,n,e)&&(n=e=void 0),r=Xt(r),void 0===n?(n=r,r=0):n=Xt(n),e=void 0===e?r<n?1:-1:Xt(e),En(r,n,e,t)}}();function Pn(t,r){return n=t,"[object Object]"===Object.prototype.toString.call(n)&&(!!Ir(r)&&r in t);var n}var kn={};function Nn(t,r){var n=zn(t,"|"),e=n[0],o=Kt(n[1]),i=Kt(n[2]),a=er(Cn(n,3),"|");if(Pn(kn,e)||(kn[e]={}),kn[e]["_"+o]=a,o===i-1){var u="";Tr(In(i),(function(t){u+=kn[e]["_"+t]})),delete kn[e],r(function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Uint8Array";if(Er(r))r=[r];else if(!un(r))return{};function n(t,n){return r.indexOf("Uint8Array")>=0&&(n=on.b642u8arr(n)),r.indexOf("Uint16Array")>=0&&(n=on.b642u16arr(n)),n}var e={};try{e=JSON.parse(t,n)}catch(t){e={}}return e}(u))}}return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r.port||(r.port=8080),r.strSplitLength||(r.strSplitLength=1e6);var n=new o.default.EventEmitter;function i(t){for(var r=arguments.length,e=new Array(r>1?r-1:0),o=1;o<r;o++)e[o-1]=arguments[o];setTimeout((function(){n.emit.apply(n,[t].concat(e))}),1)}var a={port:r.port,perMessageDeflate:{zlibDeflateOptions:{chunkSize:1024,memLevel:7,level:3},zlibInflateOptions:{chunkSize:10240},clientNoContextTakeover:!0,serverNoContextTakeover:!0,serverMaxWindowBits:10,concurrencyLimit:10,threshold:1024}},u=null;try{u=new t.WebSocketServer(a)}catch(t){f({msg:"can not create websocket",err:t})}if(!u)return n;function c(){i("open")}function f(t){i("error",t)}function s(){i("clientChange",l)}c();var l=[];return u.on("connection",(function(t,o){function a(n,o){t.readyState===e.default.OPEN&&cn(t,r.strSplitLength,n,o,(function(t){f({msg:"can not send message",err:t})}))}function u(t){var r=It(t,"_mode","");"execute"===r?i("execute",It(t,"func",""),It(t,"input"),(function(r){t.output=r,delete t.input,a(t,null)}),a):"broadcast"===r?i("broadcast",It(t,"data")):"deliver"===r?i("deliver",It(t,"data")):f({msg:"can not find _mode in data",err:t})}l.push(t),s(),t.on("close",(function(){l=l.filter((function(r){return r!==t})),s()})),t.sendData=a,t.on("message",(function(t){Nn(t,u)})),n.on("triggerBroadcast",(function(t,r){a({_mode:"broadcast",data:t},r)}))})),n.broadcast=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};i("triggerBroadcast",t,r)},n}}));
//# sourceMappingURL=w-converws-server.umd.js.map
