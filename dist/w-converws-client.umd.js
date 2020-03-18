/*!
 * w-converws-client v1.0.27
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("ws")):"function"==typeof define&&define.amd?define(["ws"],n):(t=t||self)["w-converws-client"]=n(t.ws)}(this,(function(t){"use strict";function n(t){var n=Object.prototype.toString.call(t);return"[object Function]"===n||"[object AsyncFunction]"===n}function r(r){var e=null;r.url||(r.url="ws://localhost:8080"),r.token||(r.token="*");var o,i=function(){var t="undefined"!=typeof window&&void 0!==window.document,n="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope;return{isBrowser:t=t||n,isWebWorker:n,isNode:"undefined"!=typeof process&&null!=process.versions&&null!=process.versions.node}}().isBrowser;o=i?("undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:null).WebSocket:t;try{e=new o(r.url+"/?token="+r.token)}catch(t){e=null}if(null===e)return{error:"can not new MixWS"};function u(){n(r.open)&&r.open()}function a(){n(r.close)&&r.close()}function c(t){n(r.message)&&r.message(t)}function f(t){n(r.error)&&r.error(t),e.close()}return i?(e.onopen=u,e.onmessage=function(t){c(t.data)},e.onclose=a,e.onerror=f):(e.on("open",u),e.on("message",c),e.on("close",a),e.on("error",f)),e}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var e=Array.isArray,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function i(t,n){return t(n={exports:{}},n.exports),n.exports}var u=i((function(t){function n(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(r)}t.exports=n})),a="object"==u(o)&&o&&o.Object===Object&&o,c="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,f=a||c||Function("return this")(),s=f.Symbol,l=Object.prototype,v=l.hasOwnProperty,p=l.toString,h=s?s.toStringTag:void 0;var y=function(t){var n=v.call(t,h),r=t[h];try{t[h]=void 0;var e=!0}catch(t){}var o=p.call(t);return e&&(n?t[h]=r:delete t[h]),o},d=Object.prototype.toString;var g=function(t){return d.call(t)},b=s?s.toStringTag:void 0;var _=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":b&&b in Object(t)?y(t):g(t)};var m=function(t){return null!=t&&"object"==u(t)};var w=function(t){return"symbol"==u(t)||m(t)&&"[object Symbol]"==_(t)},j=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,A=/^\w*$/;var x=function(t,n){if(e(t))return!1;var r=u(t);return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!w(t))||(A.test(t)||!j.test(t)||null!=n&&t in Object(n))};var O=function(t){var n=u(t);return null!=t&&("object"==n||"function"==n)};var S,U=function(t){if(!O(t))return!1;var n=_(t);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n},B=f["__core-js_shared__"],k=(S=/[^.]+$/.exec(B&&B.keys&&B.keys.IE_PROTO||""))?"Symbol(src)_1."+S:"";var C=function(t){return!!k&&k in t},z=Function.prototype.toString;var P=function(t){if(null!=t){try{return z.call(t)}catch(t){}try{return t+""}catch(t){}}return""},E=/^\[object .+?Constructor\]$/,M=Function.prototype,L=Object.prototype,F=M.toString,T=L.hasOwnProperty,N=RegExp("^"+F.call(T).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var I=function(t){return!(!O(t)||C(t))&&(U(t)?N:E).test(P(t))};var W=function(t,n){return null==t?void 0:t[n]};var $=function(t,n){var r=W(t,n);return I(r)?r:void 0},R=$(Object,"create");var D=function(){this.__data__=R?R(null):{},this.size=0};var H=function(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n},q=Object.prototype.hasOwnProperty;var G=function(t){var n=this.__data__;if(R){var r=n[t];return"__lodash_hash_undefined__"===r?void 0:r}return q.call(n,t)?n[t]:void 0},J=Object.prototype.hasOwnProperty;var V=function(t){var n=this.__data__;return R?void 0!==n[t]:J.call(n,t)};var K=function(t,n){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=R&&void 0===n?"__lodash_hash_undefined__":n,this};function Q(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}Q.prototype.clear=D,Q.prototype.delete=H,Q.prototype.get=G,Q.prototype.has=V,Q.prototype.set=K;var X=Q;var Y=function(){this.__data__=[],this.size=0};var Z=function(t,n){return t===n||t!=t&&n!=n};var tt=function(t,n){for(var r=t.length;r--;)if(Z(t[r][0],n))return r;return-1},nt=Array.prototype.splice;var rt=function(t){var n=this.__data__,r=tt(n,t);return!(r<0)&&(r==n.length-1?n.pop():nt.call(n,r,1),--this.size,!0)};var et=function(t){var n=this.__data__,r=tt(n,t);return r<0?void 0:n[r][1]};var ot=function(t){return tt(this.__data__,t)>-1};var it=function(t,n){var r=this.__data__,e=tt(r,t);return e<0?(++this.size,r.push([t,n])):r[e][1]=n,this};function ut(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}ut.prototype.clear=Y,ut.prototype.delete=rt,ut.prototype.get=et,ut.prototype.has=ot,ut.prototype.set=it;var at=ut,ct=$(f,"Map");var ft=function(){this.size=0,this.__data__={hash:new X,map:new(ct||at),string:new X}};var st=function(t){var n=u(t);return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==t:null===t};var lt=function(t,n){var r=t.__data__;return st(n)?r["string"==typeof n?"string":"hash"]:r.map};var vt=function(t){var n=lt(this,t).delete(t);return this.size-=n?1:0,n};var pt=function(t){return lt(this,t).get(t)};var ht=function(t){return lt(this,t).has(t)};var yt=function(t,n){var r=lt(this,t),e=r.size;return r.set(t,n),this.size+=r.size==e?0:1,this};function dt(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}dt.prototype.clear=ft,dt.prototype.delete=vt,dt.prototype.get=pt,dt.prototype.has=ht,dt.prototype.set=yt;var gt=dt;function bt(t,n){if("function"!=typeof t||null!=n&&"function"!=typeof n)throw new TypeError("Expected a function");var r=function r(){var e=arguments,o=n?n.apply(this,e):e[0],i=r.cache;if(i.has(o))return i.get(o);var u=t.apply(this,e);return r.cache=i.set(o,u)||i,u};return r.cache=new(bt.Cache||gt),r}bt.Cache=gt;var _t=bt;var mt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,wt=/\\(\\)?/g,jt=function(t){var n=_t(t,(function(t){return 500===r.size&&r.clear(),t})),r=n.cache;return n}((function(t){var n=[];return 46===t.charCodeAt(0)&&n.push(""),t.replace(mt,(function(t,r,e,o){n.push(e?o.replace(wt,"$1"):r||t)})),n}));var At=function(t,n){for(var r=-1,e=null==t?0:t.length,o=Array(e);++r<e;)o[r]=n(t[r],r,t);return o},xt=s?s.prototype:void 0,Ot=xt?xt.toString:void 0;var St=function t(n){if("string"==typeof n)return n;if(e(n))return At(n,t)+"";if(w(n))return Ot?Ot.call(n):"";var r=n+"";return"0"==r&&1/n==-1/0?"-0":r};var Ut=function(t){return null==t?"":St(t)};var Bt=function(t,n){return e(t)?t:x(t,n)?[t]:jt(Ut(t))};var kt=function(t){if("string"==typeof t||w(t))return t;var n=t+"";return"0"==n&&1/t==-1/0?"-0":n};var Ct=function(t,n){for(var r=0,e=(n=Bt(n,t)).length;null!=t&&r<e;)t=t[kt(n[r++])];return r&&r==e?t:void 0};var zt=function(t,n,r){var e=null==t?void 0:Ct(t,n);return void 0===e?r:e};function Pt(){var t,n,r=new Promise((function(){t=arguments[0],n=arguments[1]}));return r.resolve=t,r.reject=n,r}var Et=/^\s+|\s+$/g,Mt=/^[-+]0x[0-9a-f]+$/i,Lt=/^0b[01]+$/i,Ft=/^0o[0-7]+$/i,Tt=parseInt;var Nt=function(t){if("number"==typeof t)return t;if(w(t))return NaN;if(O(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=O(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Et,"");var r=Lt.test(t);return r||Ft.test(t)?Tt(t.slice(2),r?2:8):Mt.test(t)?NaN:+t};var It=function(t){return t?(t=Nt(t))===1/0||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0};var Wt=function(t){var n=It(t),r=n%1;return n==n?r?n-r:n:0};var $t=function(t){return"number"==typeof t&&t==Wt(t)};function Rt(t){return"[object String]"===Object.prototype.toString.call(t)}function Dt(t){return!(!Rt(t)||""===t)}function Ht(t){var n=!1;return Dt(t)?n=!isNaN(Number(t)):function(t){return"[object Number]"===Object.prototype.toString.call(t)}(t)&&(n=!0),n}function qt(t){return Ht(t)?It(t):0}var Gt=f.isFinite,Jt=Math.min;var Vt=function(t){var n=Math[t];return function(t,r){if(t=Nt(t),(r=null==r?0:Jt(Wt(r),292))&&Gt(t)){var e=(Ut(t)+"e").split("e"),o=n(e[0]+"e"+(+e[1]+r));return+((e=(Ut(o)+"e").split("e"))[0]+"e"+(+e[1]-r))}return n(t)}}("round");function Kt(t){return!!function(t){return!!Ht(t)&&(t=qt(t),$t(t))}(t)&&function(t){if(!Ht(t))return 0;t=qt(t);var n=Vt(t);return"0"===String(n)?0:n}(t)>0}function Qt(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:32,r="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),e=[],o=r.length;if(Kt(n))for(t=0;t<n;t++)e[t]=r[0|Math.random()*o];else{if("rfc4122"!==n)return"";var i;for(e[8]=e[13]=e[18]=e[23]="-",e[14]="4",t=0;t<36;t++)e[t]||(i=0|16*Math.random(),e[t]=r[19===t?3&i|8:i])}var u=e.join("");return u}var Xt=i((function(t){var n=Object.prototype.hasOwnProperty,r="~";function e(){}function o(t,n,r){this.fn=t,this.context=n,this.once=r||!1}function i(t,n,e,i,u){if("function"!=typeof e)throw new TypeError("The listener must be a function");var a=new o(e,i||t,u),c=r?r+n:n;return t._events[c]?t._events[c].fn?t._events[c]=[t._events[c],a]:t._events[c].push(a):(t._events[c]=a,t._eventsCount++),t}function u(t,n){0==--t._eventsCount?t._events=new e:delete t._events[n]}function a(){this._events=new e,this._eventsCount=0}Object.create&&(e.prototype=Object.create(null),(new e).__proto__||(r=!1)),a.prototype.eventNames=function(){var t,e,o=[];if(0===this._eventsCount)return o;for(e in t=this._events)n.call(t,e)&&o.push(r?e.slice(1):e);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(t)):o},a.prototype.listeners=function(t){var n=r?r+t:t,e=this._events[n];if(!e)return[];if(e.fn)return[e.fn];for(var o=0,i=e.length,u=new Array(i);o<i;o++)u[o]=e[o].fn;return u},a.prototype.listenerCount=function(t){var n=r?r+t:t,e=this._events[n];return e?e.fn?1:e.length:0},a.prototype.emit=function(t,n,e,o,i,u){var a=r?r+t:t;if(!this._events[a])return!1;var c,f,s=this._events[a],l=arguments.length;if(s.fn){switch(s.once&&this.removeListener(t,s.fn,void 0,!0),l){case 1:return s.fn.call(s.context),!0;case 2:return s.fn.call(s.context,n),!0;case 3:return s.fn.call(s.context,n,e),!0;case 4:return s.fn.call(s.context,n,e,o),!0;case 5:return s.fn.call(s.context,n,e,o,i),!0;case 6:return s.fn.call(s.context,n,e,o,i,u),!0}for(f=1,c=new Array(l-1);f<l;f++)c[f-1]=arguments[f];s.fn.apply(s.context,c)}else{var v,p=s.length;for(f=0;f<p;f++)switch(s[f].once&&this.removeListener(t,s[f].fn,void 0,!0),l){case 1:s[f].fn.call(s[f].context);break;case 2:s[f].fn.call(s[f].context,n);break;case 3:s[f].fn.call(s[f].context,n,e);break;case 4:s[f].fn.call(s[f].context,n,e,o);break;default:if(!c)for(v=1,c=new Array(l-1);v<l;v++)c[v-1]=arguments[v];s[f].fn.apply(s[f].context,c)}}return!0},a.prototype.on=function(t,n,r){return i(this,t,n,r,!1)},a.prototype.once=function(t,n,r){return i(this,t,n,r,!0)},a.prototype.removeListener=function(t,n,e,o){var i=r?r+t:t;if(!this._events[i])return this;if(!n)return u(this,i),this;var a=this._events[i];if(a.fn)a.fn!==n||o&&!a.once||e&&a.context!==e||u(this,i);else{for(var c=0,f=[],s=a.length;c<s;c++)(a[c].fn!==n||o&&!a[c].once||e&&a[c].context!==e)&&f.push(a[c]);f.length?this._events[i]=1===f.length?f[0]:f:u(this,i)}return this},a.prototype.removeAllListeners=function(t){var n;return t?(n=r?r+t:t,this._events[n]&&u(this,n)):(this._events=new e,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=r,a.EventEmitter=a,t.exports=a}));function Yt(){return new Xt}var Zt=function(t,n,r){var e=-1,o=t.length;n<0&&(n=-n>o?0:o+n),(r=r>o?o:r)<0&&(r+=o),o=n>r?0:r-n>>>0,n>>>=0;for(var i=Array(o);++e<o;)i[e]=t[e+n];return i};var tn=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991};var nn=function(t){return null!=t&&tn(t.length)&&!U(t)},rn=/^(?:0|[1-9]\d*)$/;var en=function(t,n){var r=u(t);return!!(n=null==n?9007199254740991:n)&&("number"==r||"symbol"!=r&&rn.test(t))&&t>-1&&t%1==0&&t<n};var on=function(t,n,r){if(!O(r))return!1;var e=u(n);return!!("number"==e?nn(r)&&en(n,r.length):"string"==e&&n in r)&&Z(r[n],t)},un=Math.ceil,an=Math.max;var cn=function(t,n,r){n=(r?on(t,n,r):void 0===n)?1:an(Wt(n),0);var e=null==t?0:t.length;if(!e||n<1)return[];for(var o=0,i=0,u=Array(un(e/n));o<e;)u[i++]=Zt(t,o,o+=n);return u},fn=Array.prototype.join;var sn=function(t,n){return null==t?"":fn.call(t,n)};var ln=function(t,n){for(var r=-1,e=null==t?0:t.length;++r<e&&!1!==n(t[r],r,t););return t};var vn=function(t){return function(n,r,e){for(var o=-1,i=Object(n),u=e(n),a=u.length;a--;){var c=u[t?a:++o];if(!1===r(i[c],c,i))break}return n}}();var pn=function(t,n){for(var r=-1,e=Array(t);++r<t;)e[r]=n(r);return e};var hn=function(t){return m(t)&&"[object Arguments]"==_(t)},yn=Object.prototype,dn=yn.hasOwnProperty,gn=yn.propertyIsEnumerable,bn=hn(function(){return arguments}())?hn:function(t){return m(t)&&dn.call(t,"callee")&&!gn.call(t,"callee")};var _n=function(){return!1},mn=i((function(t,n){var r=n&&!n.nodeType&&n,e=r&&t&&!t.nodeType&&t,o=e&&e.exports===r?f.Buffer:void 0,i=(o?o.isBuffer:void 0)||_n;t.exports=i})),wn={};wn["[object Float32Array]"]=wn["[object Float64Array]"]=wn["[object Int8Array]"]=wn["[object Int16Array]"]=wn["[object Int32Array]"]=wn["[object Uint8Array]"]=wn["[object Uint8ClampedArray]"]=wn["[object Uint16Array]"]=wn["[object Uint32Array]"]=!0,wn["[object Arguments]"]=wn["[object Array]"]=wn["[object ArrayBuffer]"]=wn["[object Boolean]"]=wn["[object DataView]"]=wn["[object Date]"]=wn["[object Error]"]=wn["[object Function]"]=wn["[object Map]"]=wn["[object Number]"]=wn["[object Object]"]=wn["[object RegExp]"]=wn["[object Set]"]=wn["[object String]"]=wn["[object WeakMap]"]=!1;var jn=function(t){return m(t)&&tn(t.length)&&!!wn[_(t)]};var An=function(t){return function(n){return t(n)}},xn=i((function(t,n){var r=n&&!n.nodeType&&n,e=r&&t&&!t.nodeType&&t,o=e&&e.exports===r&&a.process,i=function(){try{var t=e&&e.require&&e.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=i})),On=xn&&xn.isTypedArray,Sn=On?An(On):jn,Un=Object.prototype.hasOwnProperty;var Bn=function(t,n){var r=e(t),o=!r&&bn(t),i=!r&&!o&&mn(t),u=!r&&!o&&!i&&Sn(t),a=r||o||i||u,c=a?pn(t.length,String):[],f=c.length;for(var s in t)!n&&!Un.call(t,s)||a&&("length"==s||i&&("offset"==s||"parent"==s)||u&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||en(s,f))||c.push(s);return c},kn=Object.prototype;var Cn=function(t){var n=t&&t.constructor;return t===("function"==typeof n&&n.prototype||kn)};var zn=function(t,n){return function(r){return t(n(r))}}(Object.keys,Object),Pn=Object.prototype.hasOwnProperty;var En=function(t){if(!Cn(t))return zn(t);var n=[];for(var r in Object(t))Pn.call(t,r)&&"constructor"!=r&&n.push(r);return n};var Mn=function(t){return nn(t)?Bn(t):En(t)};var Ln=function(t,n){return function(r,e){if(null==r)return r;if(!nn(r))return t(r,e);for(var o=r.length,i=n?o:-1,u=Object(r);(n?i--:++i<o)&&!1!==e(u[i],i,u););return r}}((function(t,n){return t&&vn(t,n,Mn)}));var Fn=function(t){return t};var Tn=function(t){return"function"==typeof t?t:Fn};var Nn=function(t,n){return(e(t)?ln:Ln)(t,Tn(n))};function In(t){return"[object Uint8Array]"===Object.prototype.toString.call(t)}function Wn(t){return"[object Uint16Array]"===Object.prototype.toString.call(t)}function $n(t,n){return Dt(t)&&Kt(n)?t.substr(0,n):""}function Rn(t,n){return Dt(t)&&Kt(n)?function(t,n){if(!Dt(t))return"";if(!Kt(n))return"";var r=t.length-n;return r<0&&(r=0),t.substr(r,n)}(t,t.length-n):""}var Dn=i((function(t,n){var r;t.exports=(r=r||function(t,n){var r=Object.create||function(){function t(){}return function(n){var r;return t.prototype=n,r=new t,t.prototype=null,r}}(),e={},o=e.lib={},i=o.Base={extend:function(t){var n=r(this);return t&&n.mixIn(t),n.hasOwnProperty("init")&&this.init!==n.init||(n.init=function(){n.$super.init.apply(this,arguments)}),n.init.prototype=n,n.$super=this,n},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var n in t)t.hasOwnProperty(n)&&(this[n]=t[n]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},u=o.WordArray=i.extend({init:function(t,n){t=this.words=t||[],this.sigBytes=null!=n?n:4*t.length},toString:function(t){return(t||c).stringify(this)},concat:function(t){var n=this.words,r=t.words,e=this.sigBytes,o=t.sigBytes;if(this.clamp(),e%4)for(var i=0;i<o;i++){var u=r[i>>>2]>>>24-i%4*8&255;n[e+i>>>2]|=u<<24-(e+i)%4*8}else for(i=0;i<o;i+=4)n[e+i>>>2]=r[i>>>2];return this.sigBytes+=o,this},clamp:function(){var n=this.words,r=this.sigBytes;n[r>>>2]&=4294967295<<32-r%4*8,n.length=t.ceil(r/4)},clone:function(){var t=i.clone.call(this);return t.words=this.words.slice(0),t},random:function(n){for(var r,e=[],o=function(n){n=n;var r=987654321,e=4294967295;return function(){var o=((r=36969*(65535&r)+(r>>16)&e)<<16)+(n=18e3*(65535&n)+(n>>16)&e)&e;return o/=4294967296,(o+=.5)*(t.random()>.5?1:-1)}},i=0;i<n;i+=4){var a=o(4294967296*(r||t.random()));r=987654071*a(),e.push(4294967296*a()|0)}return new u.init(e,n)}}),a=e.enc={},c=a.Hex={stringify:function(t){for(var n=t.words,r=t.sigBytes,e=[],o=0;o<r;o++){var i=n[o>>>2]>>>24-o%4*8&255;e.push((i>>>4).toString(16)),e.push((15&i).toString(16))}return e.join("")},parse:function(t){for(var n=t.length,r=[],e=0;e<n;e+=2)r[e>>>3]|=parseInt(t.substr(e,2),16)<<24-e%8*4;return new u.init(r,n/2)}},f=a.Latin1={stringify:function(t){for(var n=t.words,r=t.sigBytes,e=[],o=0;o<r;o++){var i=n[o>>>2]>>>24-o%4*8&255;e.push(String.fromCharCode(i))}return e.join("")},parse:function(t){for(var n=t.length,r=[],e=0;e<n;e++)r[e>>>2]|=(255&t.charCodeAt(e))<<24-e%4*8;return new u.init(r,n)}},s=a.Utf8={stringify:function(t){try{return decodeURIComponent(escape(f.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return f.parse(unescape(encodeURIComponent(t)))}},l=o.BufferedBlockAlgorithm=i.extend({reset:function(){this._data=new u.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=s.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(n){var r=this._data,e=r.words,o=r.sigBytes,i=this.blockSize,a=o/(4*i),c=(a=n?t.ceil(a):t.max((0|a)-this._minBufferSize,0))*i,f=t.min(4*c,o);if(c){for(var s=0;s<c;s+=i)this._doProcessBlock(e,s);var l=e.splice(0,c);r.sigBytes-=f}return new u.init(l,f)},clone:function(){var t=i.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),v=(o.Hasher=l.extend({cfg:i.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){l.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(n,r){return new t.init(r).finalize(n)}},_createHmacHelper:function(t){return function(n,r){return new v.HMAC.init(t,r).finalize(n)}}}),e.algo={});return e}(Math),r)})),Hn=i((function(t,n){var r,e,o;t.exports=(e=(r=o=Dn).lib.WordArray,r.enc.Base64={stringify:function(t){var n=t.words,r=t.sigBytes,e=this._map;t.clamp();for(var o=[],i=0;i<r;i+=3)for(var u=(n[i>>>2]>>>24-i%4*8&255)<<16|(n[i+1>>>2]>>>24-(i+1)%4*8&255)<<8|n[i+2>>>2]>>>24-(i+2)%4*8&255,a=0;a<4&&i+.75*a<r;a++)o.push(e.charAt(u>>>6*(3-a)&63));var c=e.charAt(64);if(c)for(;o.length%4;)o.push(c);return o.join("")},parse:function(t){var n=t.length,r=this._map,o=this._reverseMap;if(!o){o=this._reverseMap=[];for(var i=0;i<r.length;i++)o[r.charCodeAt(i)]=i}var u=r.charAt(64);if(u){var a=t.indexOf(u);-1!==a&&(n=a)}return function(t,n,r){for(var o=[],i=0,u=0;u<n;u++)if(u%4){var a=r[t.charCodeAt(u-1)]<<u%4*2,c=r[t.charCodeAt(u)]>>>6-u%4*2;o[i>>>2]|=(a|c)<<24-i%4*8,i++}return e.create(o,i)}(t,n,o)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},o.enc.Base64)})),qn=i((function(t,n){var r;t.exports=(r=Dn,function(){if("function"==typeof ArrayBuffer){var t=r.lib.WordArray,n=t.init;(t.init=function(t){if(t instanceof ArrayBuffer&&(t=new Uint8Array(t)),(t instanceof Int8Array||"undefined"!=typeof Uint8ClampedArray&&t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array)&&(t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),t instanceof Uint8Array){for(var r=t.byteLength,e=[],o=0;o<r;o++)e[o>>>2]|=t[o]<<24-o%4*8;n.call(this,e,r)}else n.apply(this,arguments)}).prototype=t}}(),r.lib.WordArray)}));function Gn(t){return In(t)?qn.create(t).toString(Hn):""}function Jn(t){if(!Rt(t))return new Uint8Array;for(var n=Hn.parse(t),r=n.words,e=n.sigBytes,o=new Uint8Array(e),i=0;i<e;i++){var u=r[i>>>2]>>>24-i%4*8&255;o[i]=u}return o}function Vn(t){return Wn(t)?Gn(function(t){return Wn(t)?new Uint8Array(t):new Uint8Array}(t)):""}function Kn(t){return Rt(t)?function(t){return In(t)?new Uint16Array(t):new Uint16Array}(Jn(t)):new Uint16Array}var Qn="[Uint8Array]::";var Xn="[Uint16Array]::";var Yn={tagU8A:Qn,u8arr2b64:function(t){return In(t)?Qn+Gn(t):t},b642u8arr:function(t){return Rt(t)&&$n(t,Qn.length)===Qn?Jn(t=Rn(t,Qn.length)):t},tagU16A:Xn,u16arr2b64:function(t){return Wn(t)?Xn+Vn(t):t},b642u16arr:function(t){return Rt(t)&&$n(t,Xn.length)===Xn?Kn(t=Rn(t,Xn.length)):t}};function Zn(t){return"[object Undefined]"===Object.prototype.toString.call(t)}function tr(t){return"[object Array]"===Object.prototype.toString.call(t)}function nr(t,n,r,e,o){var i=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Uint8Array";if(Zn(t))return"";if(Rt(n))n=[n];else if(!tr(n))return"";function r(t,r){return n.indexOf("Uint8Array")>=0&&(r=Yn.u8arr2b64(r)),n.indexOf("Uint16Array")>=0&&(r=Yn.u16arr2b64(r)),r}var e="";try{e=JSON.stringify(t,r)}catch(t){e=""}return e}(r),u=cn(i,n),a=Qt(),c=u.length;Nn(u,(function(n,r){n=sn(n,"");var i="".concat(a,"|").concat(r,"|").concat(c,"|").concat(n);t.send(i,(function(t){t&&U(o)&&o(t)})),U(e)&&e((r+1)/c*100)}))}var rr=function(t,n,r){var e=t.length;return r=void 0===r?e:r,!n&&r>=e?t:Zt(t,n,r)},er=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var or=function(t){return er.test(t)};var ir=function(t){return m(t)&&"[object RegExp]"==_(t)},ur=xn&&xn.isRegExp,ar=ur?An(ur):ir;var cr=function(t){return t.split("")},fr="[\\ud800-\\udfff]",sr="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",lr="\\ud83c[\\udffb-\\udfff]",vr="[^\\ud800-\\udfff]",pr="(?:\\ud83c[\\udde6-\\uddff]){2}",hr="[\\ud800-\\udbff][\\udc00-\\udfff]",yr="(?:"+sr+"|"+lr+")"+"?",dr="[\\ufe0e\\ufe0f]?"+yr+("(?:\\u200d(?:"+[vr,pr,hr].join("|")+")[\\ufe0e\\ufe0f]?"+yr+")*"),gr="(?:"+[vr+sr+"?",sr,pr,hr,fr].join("|")+")",br=RegExp(lr+"(?="+lr+")|"+gr+dr,"g");var _r=function(t){return t.match(br)||[]};var mr=function(t){return or(t)?_r(t):cr(t)};var wr=function(t,n,r){return r&&"number"!=typeof r&&on(t,n,r)&&(n=r=void 0),(r=void 0===r?4294967295:r>>>0)?(t=Ut(t))&&("string"==typeof n||null!=n&&!ar(n))&&!(n=St(n))&&or(t)?rr(mr(t),0,r):t.split(n,r):[]};var jr=function(t,n,r){var e=null==t?0:t.length;return e?(n=r||void 0===n?1:Wt(n),Zt(t,n<0?0:n,e)):[]},Ar=Math.ceil,xr=Math.max;var Or=function(t,n,r,e){for(var o=-1,i=xr(Ar((n-t)/(r||1)),0),u=Array(i);i--;)u[e?i:++o]=t,t+=r;return u};var Sr=function(t){return function(n,r,e){return e&&"number"!=typeof e&&on(n,r,e)&&(r=e=void 0),n=It(n),void 0===r?(r=n,n=0):r=It(r),e=void 0===e?n<r?1:-1:It(e),Or(n,r,e,t)}}();function Ur(t,n){return r=t,"[object Object]"===Object.prototype.toString.call(r)&&(!!Dt(n)&&n in t);var r}var Br={};function kr(t,n){var r=wr(t,"|"),e=r[0],o=Nt(r[1]),i=Nt(r[2]),u=sn(jr(r,3),"|");if(Ur(Br,e)||(Br[e]={}),Br[e]["_"+o]=u,o===i-1){var a="";Nn(Sr(i),(function(t){a+=Br[e]["_"+t]})),delete Br[e],n(function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Uint8Array";if(Rt(n))n=[n];else if(!tr(n))return{};function r(t,r){return n.indexOf("Uint8Array")>=0&&(r=Yn.b642u8arr(r)),n.indexOf("Uint16Array")>=0&&(r=Yn.b642u16arr(r)),r}var e={};try{e=JSON.parse(t,r)}catch(t){e={}}return e}(a))}}return function(t){var n=!1,e=null,o=new Yt,i=new Yt;function u(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),e=1;e<n;e++)r[e-1]=arguments[e];setTimeout((function(){o.emit.apply(o,[t].concat(r))}),1)}function a(){t.url||(t.url="ws://localhost:8080"),t.token||(t.token="*"),t.strSplitLength||(t.strSplitLength=1e6);var a={url:t.url,token:t.token,open:function(){u("open"),n||(u("openOnce"),n=!0)},close:function(){u("close"),c()},message:function(t){!function(t){kr(t,s)}(t)},error:function(t){f(t)}};try{e=new r(a)}catch(t){return u("error",{msg:"can not create websocket",err:t}),void c()}if(zt(e,"error"))return u("error",{msg:"can not create websocket",err:"can not new MixWS in WWebsocketClient"}),void c();function f(t){u("error",{msg:"websocket error",err:t}),e.close()}function s(t){var n=zt(t,"_mode","");if("execute"===n)if(zt(t,"_id")&&zt(t,"output")){var r=zt(t,"_id"),e=zt(t,"output");i.emit(r,e)}else u("error",{msg:"can not find _id and output in data",err:t});else"broadcast"===n?u("broadcast",zt(t,"data")):"deliver"===n?u("deliver",zt(t,"data")):f({msg:"can not find _mode in data",err:t})}function l(n,r){e.readyState===e.OPEN&&nr(e,t.strSplitLength,n,r,(function(t){u("error",{msg:"can not send message",err:t})}))}o.removeAllListeners("triggerExecute"),o.on("triggerExecute",(function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2?arguments[2]:void 0,e=arguments.length>3?arguments[3]:void 0,o=Qt(),u={_mode:"execute",_id:o,func:t,input:n};l(u,e),i.on(o,(function(t){r(t),i.removeAllListeners(o)}))})),o.removeAllListeners("triggerBroadcast"),o.on("triggerBroadcast",(function(t,n){l({_mode:"broadcast",data:t},n)})),o.removeAllListeners("triggerDeliver"),o.on("triggerDeliver",(function(t,n){l({_mode:"deliver",data:t},n)}))}function c(){setTimeout((function(){u("reconn"),a()}),1e3)}return o.execute=function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},e=Pt();return u("triggerExecute",t,n,(function(t){e.resolve(t)}),r),e},o.broadcast=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};u("triggerBroadcast",t,n)},o.deliver=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};u("triggerDeliver",t,n)},a(),o}}));
//# sourceMappingURL=w-converws-client.umd.js.map
