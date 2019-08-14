/*!
 * merge-split-data v1.0.8
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */(function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,e["merge-split-data"]=t())})(this,function(){'use strict';var C=Math.min,z=Math.max,I=Math.ceil;function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){return t={exports:{}},e(t,t.exports),t.exports}function n(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ee&&ee in Object(e)?J(e):Z(e)}function r(t){return null!=t&&"object"==e(t)}function i(t){return"symbol"==e(t)||ne(t)&&te(t)=="[object Symbol]"}function o(e){if("string"==typeof e)return e;if(G(e))return R(e,o)+"";if(re(e))return ae?ae.call(e):"";var t=e+"";return"0"==t&&1/e==-ie?"-0":t}function a(t){var n=e(t);return null!=t&&("object"==n||"function"==n)}function s(t,n){var r=e(t);return n=null==n?9007199254740991:n,!!n&&("number"==r||"symbol"!=r&&he.test(t))&&-1<t&&0==t%1&&t<n}function d(t,n,r){if(!fe(r))return!1;var i=e(n);return!("number"==i?!(be(r)&&je(n,r.length)):!("string"==i&&n in r))&&le(r[n],t)}function c(e){var t=Object.prototype.toString.call(e);return"[object Uint8Array]"===t}function p(e){var t=Object.prototype.toString.call(e);return"[object Uint16Array]"===t}function u(e){var t=Object.prototype.toString.call(e);return"[object String]"===t}function l(e){return!!(u(e)&&""!==e)}function f(e){var t=Object.prototype.toString.call(e);return"[object Number]"===t}function y(e){var t=!1;return l(e)?t=!isNaN(+e):f(e)&&(t=!0),t}function g(e){if(!y(e))return 0;var t=Qe(e);return t}function b(e){return!!y(e)&&(e=g(e),kt(e))}function h(e){if(!y(e))return 0;e=g(e);var t=Ct(e);return"0"===t+""?0:t}function j(e){if(!b(e))return!1;var t=0<h(e);return t}function m(e,t){return l(e)?j(t)?e.substr(0,t):"":""}function A(e,t){if(!l(e))return"";if(!j(t))return"";var n=e.length-t;return 0>n&&(n=0),e.substr(n,t)}function x(e,t){return l(e)?j(t)?A(e,e.length-t):"":""}function S(e){if(!c(e))return"";var t=Nt.create(e),n=t.toString(It);return n}function B(e){if(!u(e))return new Uint8Array;for(var t,n=It.parse(e),r=n.words,o=n.sigBytes,a=new Uint8Array(o),s=0;s<o;s++)t=255&r[s>>>2]>>>24-8*(s%4),a[s]=t;return a}function _(e){return p(e)?new Uint8Array(e):new Uint8Array}function U(e){return p(e)?S(_(e)):""}function w(e){return c(e)?new Uint16Array(e):new Uint16Array}function O(e){if(!u(e))return new Uint16Array;var t=B(e),n=w(t);return n}function T(e){var t=Object.prototype.toString.call(e);return"[object Array]"===t}function k(e){function t(e,t){return 0<=n.indexOf("Uint8Array")&&(t=Ht.b642u8arr(t)),0<=n.indexOf("Uint16Array")&&(t=Ht.b642u16arr(t)),t}var n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"Uint8Array";if(u(n))n=[n];else if(T(n));else return{};var r={};try{r=JSON.parse(e,t)}catch(e){r={}}return r}function F(e){var t=Object.prototype.toString.call(e);return"[object Object]"===t}function P(e,t){return!!F(e)&&!!l(t)&&t in e}var N="undefined"==typeof globalThis?"undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?{}:self:global:window:globalThis,H="object"==e(N)&&N&&N.Object===Object&&N,M=H,W="object"==("undefined"==typeof self?"undefined":e(self))&&self&&self.Object===Object&&self,E=M||W||Function("return this")(),v=E,D=v.Symbol,L=D,R=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},q=Array.isArray,G=q,V=Object.prototype,$=V.hasOwnProperty,Q=V.toString,K=L?L.toStringTag:void 0,J=function(e){var t=$.call(e,K),n=e[K];try{e[K]=void 0;var r=!0}catch(t){}var i=Q.call(e);return r&&(t?e[K]=n:delete e[K]),i},X=Object.prototype,Y=X.toString,Z=function(e){return Y.call(e)},ee=L?L.toStringTag:void 0,te=n,ne=r,re=i,ie=1/0,oe=L?L.prototype:void 0,ae=oe?oe.toString:void 0,se=o,de=function(e,t,n){var r=-1,i=e.length;0>t&&(t=-t>i?0:i+t),n=n>i?i:n,0>n&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var o=Array(i);++r<i;)o[r]=e[r+t];return o},ce=function(e,t,n){var r=e.length;return n=void 0===n?r:n,!t&&n>=r?e:de(e,t,n)},pe=RegExp("["+"\\u200d"+"\\ud800-\\udfff"+("\\u0300-\\u036f"+"\\ufe20-\\ufe2f"+"\\u20d0-\\u20ff")+"\\ufe0e\\ufe0f"+"]"),ue=function(e){return pe.test(e)},le=function(e,t){return e===t||e!==e&&t!==t},fe=a,ye=function(e){if(!fe(e))return!1;var t=te(e);return t=="[object Function]"||t=="[object GeneratorFunction]"||t=="[object AsyncFunction]"||t=="[object Proxy]"},ge=function(e){return"number"==typeof e&&-1<e&&0==e%1&&e<=9007199254740991},be=function(e){return null!=e&&ge(e.length)&&!ye(e)},he=/^(?:0|[1-9]\d*)$/,je=s,me=d,Ae=function(e){return function(t){return e(t)}},xe=t(function(e,t){var n=t&&!t.nodeType&&t,r=n&&!0&&e&&!e.nodeType&&e,i=r&&r.exports===n,o=i&&M.process,a=function(){try{var e=r&&r.require&&r.require("util").types;return e?e:o&&o.binding&&o.binding("util")}catch(t){}}();e.exports=a}),Se=xe&&xe.isRegExp,Be=Se?Ae(Se):function(e){return ne(e)&&te(e)=="[object RegExp]"},_e=function(e){return e.split("")},Ue="\\ud800-\\udfff",we="["+("\\u0300-\\u036f"+"\\ufe20-\\ufe2f"+"\\u20d0-\\u20ff")+"]",Oe="\\ud83c[\\udffb-\\udfff]",Te="[^"+Ue+"]",ke="(?:\\ud83c[\\udde6-\\uddff]){2}",Fe="[\\ud800-\\udbff][\\udc00-\\udfff]",Pe="(?:"+we+"|"+Oe+")"+"?",Ce="["+"\\ufe0e\\ufe0f"+"]?",ze="(?:"+"\\u200d"+"(?:"+[Te,ke,Fe].join("|")+")"+Ce+Pe+")*",Ie="(?:"+[Te+we+"?",we,ke,Fe,"["+Ue+"]"].join("|")+")",Ne=RegExp(Oe+"(?="+Oe+")|"+Ie+(Ce+Pe+ze),"g"),He=function(e){return e.match(Ne)||[]},Me=function(e){return ue(e)?He(e):_e(e)},We=function(e){return null==e?"":se(e)},Ee=function(e,t,n){return(n&&"number"!=typeof n&&me(e,t,n)&&(t=n=void 0),n=void 0===n?4294967295:n>>>0,!n)?[]:(e=We(e),e&&("string"==typeof t||null!=t&&!Be(t))&&(t=se(t),!t&&ue(e))?ce(Me(e),0,n):e.split(t,n))},ve=0/0,De=/^\s+|\s+$/g,Le=/^[-+]0x[0-9a-f]+$/i,Re=/^0b[01]+$/i,qe=/^0o[0-7]+$/i,Ge=parseInt,Ve=function(e){if("number"==typeof e)return e;if(re(e))return ve;if(fe(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=fe(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(De,"");var n=Re.test(e);return n||qe.test(e)?Ge(e.slice(2),n?2:8):Le.test(e)?ve:+e},$e=1/0,Qe=function(e){if(!e)return 0===e?e:0;if(e=Ve(e),e===$e||e===-$e){var t=0>e?-1:1;return 1.7976931348623157e+308*t}return e===e?e:0},Ke=function(e){var t=Qe(e),n=t%1;return t===t?n?t-n:t:0},Je=function(e,t,r){var i=null==e?0:e.length;return i?(t=r||void 0===t?1:Ke(t),de(e,0>t?0:t,i)):[]},Xe=Array.prototype,Ye=Xe.join,Ze=function(e,t){return null==e?"":Ye.call(e,t)},et=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!(!1===t(e[n],n,e)););return e},tt=function(e){return function(t,n,r){for(var i=-1,o=Object(t),a=r(t),s=a.length;s--;){var d=a[e?s:++i];if(!1===n(o[d],d,o))break}return t}}(),nt=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},rt=function(e){return ne(e)&&te(e)=="[object Arguments]"},it=Object.prototype,ot=it.hasOwnProperty,at=it.propertyIsEnumerable,st=rt(function(){return arguments}())?rt:function(e){return ne(e)&&ot.call(e,"callee")&&!at.call(e,"callee")},dt=function(){return!1},ct=t(function(e,t){var n=t&&!t.nodeType&&t,r=n&&!0&&e&&!e.nodeType&&e,i=r&&r.exports===n,o=i?v.Buffer:void 0,a=o?o.isBuffer:void 0;e.exports=a||dt}),pt={};pt["[object Float32Array]"]=pt["[object Float64Array]"]=pt["[object Int8Array]"]=pt["[object Int16Array]"]=pt["[object Int32Array]"]=pt["[object Uint8Array]"]=pt["[object Uint8ClampedArray]"]=pt["[object Uint16Array]"]=pt["[object Uint32Array]"]=!0,pt["[object Arguments]"]=pt["[object Array]"]=pt["[object ArrayBuffer]"]=pt["[object Boolean]"]=pt["[object DataView]"]=pt["[object Date]"]=pt["[object Error]"]=pt["[object Function]"]=pt["[object Map]"]=pt["[object Number]"]=pt["[object Object]"]=pt["[object RegExp]"]=pt["[object Set]"]=pt["[object String]"]=pt["[object WeakMap]"]=!1;var ut=xe&&xe.isTypedArray,lt=ut?Ae(ut):function(e){return ne(e)&&ge(e.length)&&!!pt[te(e)]},ft=Object.prototype,yt=ft.hasOwnProperty,gt=function(e,t){var n=G(e),r=!n&&st(e),i=!n&&!r&&ct(e),o=!n&&!r&&!i&&lt(e),a=n||r||i||o,s=a?nt(e.length,String):[],d=s.length;for(var c in e)(t||yt.call(e,c))&&!(a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||je(c,d)))&&s.push(c);return s},bt=Object.prototype,ht=function(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||bt;return e===n},jt=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),mt=Object.prototype,At=mt.hasOwnProperty,xt=function(e){if(!ht(e))return jt(e);var t=[];for(var n in Object(e))At.call(e,n)&&"constructor"!=n&&t.push(n);return t},St=function(e){return be(e)?gt(e):xt(e)},Bt=function(e,t){return function(n,r){if(null==n)return n;if(!be(n))return e(n,r);for(var i=n.length,o=t?i:-1,a=Object(n);(t?o--:++o<i)&&!(!1===r(a[o],o,a)););return n}}(function(e,t){return e&&tt(e,t,St)}),_t=function(e){return e},Ut=function(e){return"function"==typeof e?e:_t},wt=function(e,t){var n=G(e)?et:Bt;return n(e,Ut(t))},Ot=function(e,t,n,r){for(var i=-1,o=z(I((t-e)/(n||1)),0),a=Array(o);o--;)a[r?o:++i]=e,e+=n;return a},Tt=function(e){return function(t,n,r){return r&&"number"!=typeof r&&me(t,n,r)&&(n=r=void 0),t=Qe(t),void 0===n?(n=t,t=0):n=Qe(n),r=void 0===r?t<n?1:-1:Qe(r),Ot(t,n,r,e)}}(),kt=function(e){return"number"==typeof e&&e==Ke(e)},Ft=v.isFinite,Pt=function(e){var t=Math[e];return function(e,n){if(e=Ve(e),n=null==n?0:C(Ke(n),292),n&&Ft(e)){var r=(We(e)+"e").split("e"),i=t(r[0]+"e"+(+r[1]+n));return r=(We(i)+"e").split("e"),+(r[0]+"e"+(+r[1]-n))}return t(e)}}("round"),Ct=Pt,zt=t(function(e,t){(function(n,r){e.exports=t=r()})(N,function(){var e=e||function(e,t){var n=Object.create||function(){function e(){}return function(t){var n;return e.prototype=t,n=new e,e.prototype=null,n}}(),r={},i=r.lib={},o=i.Base=function(){return{extend:function(e){var t=n(this);return e&&t.mixIn(e),t.hasOwnProperty("init")&&this.init!==t.init||(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),a=i.WordArray=o.extend({init:function(e,n){e=this.words=e||[],this.sigBytes=n==t?4*e.length:n},toString:function(e){return(e||d).stringify(this)},concat:function(e){var t=this.words,n=e.words,r=this.sigBytes,o=e.sigBytes;if(this.clamp(),r%4)for(var a,s=0;s<o;s++)a=255&n[s>>>2]>>>24-8*(s%4),t[r+s>>>2]|=a<<24-8*((r+s)%4);else for(var s=0;s<o;s+=4)t[r+s>>>2]=n[s>>>2];return this.sigBytes+=o,this},clamp:function(){var e=this.words,t=this.sigBytes;e[t>>>2]&=4294967295<<32-8*(t%4),e.length=I(t/4)},clone:function e(){var e=o.clone.call(this);return e.words=this.words.slice(0),e},random:function(t){for(var n,o,s=[],d=function(t){var t=t,n=987654321,r=4294967295;return function(){n=36969*(65535&n)+(n>>16)&r,t=18e3*(65535&t)+(t>>16)&r;var i=(n<<16)+t&r;return i/=4294967296,i+=.5,i*(.5<e.random()?1:-1)}},r=0;r<t;r+=4)o=d(4294967296*(n||e.random())),n=987654071*o(),s.push(0|4294967296*o());return new a.init(s,t)}}),s=r.enc={},d=s.Hex={stringify:function(e){for(var t,n=e.words,r=e.sigBytes,o=[],a=0;a<r;a++)t=255&n[a>>>2]>>>24-8*(a%4),o.push((t>>>4).toString(16)),o.push((15&t).toString(16));return o.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r+=2)n[r>>>3]|=parseInt(e.substr(r,2),16)<<24-4*(r%8);return new a.init(n,t/2)}},c=s.Latin1={stringify:function(e){for(var t=(0,eval)("this").String.fromCharCode,n,r=e.words,o=e.sigBytes,a=[],s=0;s<o;s++)n=255&r[s>>>2]>>>24-8*(s%4),a.push(t(n));return a.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r++)n[r>>>2]|=(255&e.charCodeAt(r))<<24-8*(r%4);return new a.init(n,t)}},p=s.Utf8={stringify:function(e){try{return decodeURIComponent(escape(c.stringify(e)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(e){return c.parse(unescape(encodeURIComponent(e)))}},u=i.BufferedBlockAlgorithm=o.extend({reset:function(){this._data=new a.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=p.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(e){var t=this._data,n=t.words,r=t.sigBytes,i=this.blockSize,o=r/(4*i);o=e?I(o):z((0|o)-this._minBufferSize,0);var s=o*i,d=C(4*s,r);if(s){for(var c=0;c<s;c+=i)this._doProcessBlock(n,c);var p=n.splice(0,s);t.sigBytes-=d}return new a.init(p,d)},clone:function e(){var e=o.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0}),l=i.Hasher=u.extend({cfg:o.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){u.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){e&&this._append(e);var t=this._doFinalize();return t},blockSize:16,_createHelper:function(e){return function(t,n){return new e.init(n).finalize(t)}},_createHmacHelper:function(e){return function(t,n){return new f.HMAC.init(e,n).finalize(t)}}}),f=r.algo={};return r}(Math);return e})}),It=t(function(e,t){(function(n,r){e.exports=t=r(zt)})(N,function(e){return function(){function t(e,t,n){for(var r=[],a=0,s=0;s<t;s++)if(s%4){var d=n[e.charCodeAt(s-1)]<<2*(s%4),c=n[e.charCodeAt(s)]>>>6-2*(s%4);r[a>>>2]|=(d|c)<<24-8*(a%4),a++}return o.create(r,a)}var n=e,r=n.lib,o=r.WordArray,a=n.enc,s=a.Base64={stringify:function(e){var t=e.words,n=e.sigBytes,r=this._map;e.clamp();for(var o=[],a=0;a<n;a+=3)for(var s=255&t[a>>>2]>>>24-8*(a%4),d=255&t[a+1>>>2]>>>24-8*((a+1)%4),c=255&t[a+2>>>2]>>>24-8*((a+2)%4),p=0;4>p&&a+.75*p<n;p++)o.push(r.charAt(63&(s<<16|d<<8|c)>>>6*(3-p)));var u=r.charAt(64);if(u)for(;o.length%4;)o.push(u);return o.join("")},parse:function(e){var n=e.length,r=this._map,i=this._reverseMap;if(!i){i=this._reverseMap=[];for(var o=0;o<r.length;o++)i[r.charCodeAt(o)]=o}var a=r.charAt(64);if(a){var s=e.indexOf(a);-1!==s&&(n=s)}return t(e,n,i)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),e.enc.Base64})}),Nt=t(function(e,t){(function(n,r){e.exports=t=r(zt)})(N,function(e){return function(){if("function"==typeof ArrayBuffer){var t=e.lib,n=t.WordArray,r=n.init,i=n.init=function(e){if(e instanceof ArrayBuffer&&(e=new Uint8Array(e)),(e instanceof Int8Array||"undefined"!=typeof Uint8ClampedArray&&e instanceof Uint8ClampedArray||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Float32Array||e instanceof Float64Array)&&(e=new Uint8Array(e.buffer,e.byteOffset,e.byteLength)),e instanceof Uint8Array){for(var t=e.byteLength,n=[],o=0;o<t;o++)n[o>>>2]|=e[o]<<24-8*(o%4);r.call(this,n,t)}else r.apply(this,arguments)};i.prototype=n}}(),e.lib.WordArray})}),Ht={tagU8A:"[Uint8Array]::",u8arr2b64:function(e){return c(e)?"[Uint8Array]::"+S(e):e},b642u8arr:function(e){return u(e)&&"[Uint8Array]::"===m(e,14)?(e=x(e,14),B(e)):e},tagU16A:"[Uint16Array]::",u16arr2b64:function(e){return p(e)?"[Uint16Array]::"+U(e):e},b642u16arr:function(e){return u(e)&&"[Uint16Array]::"===m(e,15)?(e=x(e,15),O(e)):e}},Mt={};return function(e,t){var n=Ee(e,"|"),r=n[0],i=Ve(n[1]),o=Ve(n[2]),a=Ze(Je(n,3),"|");if(P(Mt,r)||(Mt[r]={}),Mt[r]["_"+i]=a,i===o-1){var s="";wt(Tt(o),function(e){s+=Mt[r]["_"+e]}),delete Mt[r];var d=k(s);t(d)}}});
//# sourceMappingURL=merge-split-data.umd.js.map
