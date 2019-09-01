/*!
 * w-converws-server v1.0.18
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */(function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("ws"),require("events")):"function"==typeof define&&define.amd?define(["ws","events"],t):(e=e||self,e["w-converws-server"]=t(e.ws,e.events))})(this,function(e,t){'use strict';var pe=Math.min,le=Math.max,ue=Math.ceil;function n(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){return t={exports:{}},e(t,t.exports),t.exports}function a(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Fe&&Fe in Object(e)?Pe(e):Te(e)}function i(e){var t=r(e);return null!=e&&("object"==t||"function"==t)}function c(e){return!!Ne&&Ne in e}function d(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function s(e){var t=r(e);return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}function p(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function l(e){var t=this.__data__=new he(e);this.size=t.size}function u(e,t,n){var r=e[t];ht.call(e,t)&&ye(r,n)&&(n!==void 0||t in e)||ft(e,t,n)}function y(e){return null!=e&&"object"==r(e)}function b(e,t){var n=r(e);return t=null==t?9007199254740991:t,!!t&&("number"==n||"symbol"!=n&&Et.test(e))&&-1<e&&0==e%1&&e<t}function f(e,t,n,r,o,a){var i,c=1&t,d=2&t;if(n&&(i=o?n(e,r,o,a):n(e)),void 0!==i)return i;if(!Me(e))return e;var s=zt(e);if(!s){var p=qn(e),l="[object Function]"==p||"[object GeneratorFunction]"==p;if(vt(e))return cn(e,c);if("[object Object]"!=p&&"[object Arguments]"!=p&&(!l||o)){if(!gr[p])return o?e:{};i=ir(e,p,c)}else if(i=d||l?{}:sr(e),!c)return d?Sn(e,an(i,e)):gn(e,Kt(i,e))}else if(i=Jn(e),!c)return dn(e,i);a||(a=new lt);var u=a.get(e);if(u)return u;a.set(e,i),fr(e)?e.forEach(function(r){i.add(f(r,t,n,r,e,a))}):ur(e)&&e.forEach(function(r,o){i.set(o,f(r,t,n,o,e,a))});var y=4&t?d?kn:wn:d?keysIn:Zt,b=s?void 0:y(e);return ut(b||e,function(r,o){b&&(o=r,r=e[o]),_t(i,o,f(r,t,n,o,e,a))}),i}function g(e){return"symbol"==r(e)||At(e)&&Ie(e)=="[object Symbol]"}function h(e,t){if(zt(e))return!1;var n=r(e);return!!("number"==n||"symbol"==n||"boolean"==n||null==e||_r(e))||mr.test(e)||!jr.test(e)||null!=t&&e in Object(t)}function _(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function n(){var r=arguments,o=t?t.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=e.apply(this,r);return n.cache=a.set(o,i)||a,i};return n.cache=new(_.Cache||pt),n}function j(e){if("string"==typeof e)return e;if(zt(e))return wr(e,j)+"";if(_r(e))return Ur?Ur.call(e):"";var t=e+"";return"0"==t&&1/e==-kr?"-0":t}function m(){var e,t,n=new Promise(function(){e=arguments[0],t=arguments[1]});return n.resolve=e,n.reject=t,n}function A(e,t,n){if(!Me(n))return!1;var o=r(t);return!("number"==o?!(Yt(n)&&Tt(t,n.length)):!("string"==o&&t in n))&&ye(n[t],e)}function x(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new pt;++t<n;)this.add(e[t])}function S(e,t,n,r,o,a){var i=1&n,c=wn(e),d=c.length,s=wn(t),p=s.length;if(d!=p&&!i)return!1;for(var l,u=d;u--;)if(l=c[u],i?!(l in t):!yo.call(t,l))return!1;var y=a.get(e);if(y&&a.get(t))return y==t;var b=!0;a.set(e,t),a.set(t,e);for(var f=i;++u<d;){l=c[u];var g=e[l],h=t[l];if(r)var _=i?r(h,g,l,t,e,a):r(g,h,l,e,t,a);if(void 0===_?!(g===h||o(g,h,n,r,a)):!_){b=!1;break}f||(f="constructor"==l)}if(b&&!f){var j=e.constructor,m=t.constructor;j!=m&&"constructor"in e&&"constructor"in t&&!("function"==typeof j&&j instanceof j&&"function"==typeof m&&m instanceof m)&&(b=!1)}return a["delete"](e),a["delete"](t),b}function O(e,t,n,r,o){return!(e!==t)||(null!=e&&null!=t&&(At(e)||At(t))?go(e,t,n,r,O,o):e!==e&&t!==t)}function w(e,t,n,r){var o=n.length,a=o,i=!r;if(null==e)return!a;for(e=Object(e);o--;){var c=n[o];if(i&&c[2]?c[1]!==e[c[0]]:!(c[0]in e))return!1}for(;++o<a;){c=n[o];var d=c[0],s=e[d],p=c[1];if(!(i&&c[2])){var l=new lt;if(r)var u=r(s,p,d,e,t,l);if(void 0===u?!ho(p,s,3,r,l):!u)return!1}else if(void 0===s&&!(d in e))return!1}return!0}function k(e,t){return null!=e&&t in Object(e)}function B(e){return"function"==typeof e?e:null==e?wo:"object"==r(e)?zt(e)?Oo(e[0],e[1]):Ao(e):Uo(e)}function U(e){var t=Object.prototype.toString.call(e);return"[object String]"===t}function z(e){return!!(U(e)&&""!==e)}function P(e){if(!z(e))return{};if(e=no(e,"?"),e=Fr(e,"[1]"),!z(e))return{};var t=no(e,"&");return t=To(t,function(e){return no(e,"=")}),t=Fo(t),t}function E(e){var t=Object.prototype.toString.call(e);return"[object Object]"===t}function T(e){if(E(e)){for(var t in e)return!0;return!1}return!1}function F(e,t){return T(e)?z(t)?Fr(e,t,""):"":""}function I(e){var t=Object.prototype.toString.call(e);return"[object Number]"===t}function M(e){var t=!1;return z(e)?t=!isNaN(+e):I(e)&&(t=!0),t}function C(e){if(!z(e)&&!M(e))return"";return e+""}function L(e,t){var n=F(e,t);return n=C(n),n}function D(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t||"[object AsyncFunction]"===t}function N(e){if(!M(e))return 0;var t=Vo(e);return t}function R(e){return!!M(e)&&(e=N(e),Yo(e))}function W(e){if(!M(e))return 0;e=N(e);var t=ea(e);return"0"===t+""?0:t}function V(e){if(!R(e))return!1;var t=0<W(e);return t}function H(){var e,t=0<arguments.length&&arguments[0]!==void 0?arguments[0]:32,n=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],o=[],a=n.length;if(V(t))for(e=0;e<t;e++)o[e]=n[0|Math.random()*a];else if("rfc4122"===t){o[8]=o[13]=o[18]=o[23]="-",o[14]="4";var c;for(e=0;36>e;e++)o[e]||(c=0|16*Math.random(),o[e]=n[19===e?8|3&c:c])}else return"";var d=o.join("");return d}function $(e){var t=Object.prototype.toString.call(e);return"[object Uint8Array]"===t}function q(e){var t=Object.prototype.toString.call(e);return"[object Uint16Array]"===t}function G(e,t){return z(e)?V(t)?e.substr(0,t):"":""}function Q(e,t){if(!z(e))return"";if(!V(t))return"";var n=e.length-t;return 0>n&&(n=0),e.substr(n,t)}function J(e,t){return z(e)?V(t)?Q(e,e.length-t):"":""}function X(e){if(!$(e))return"";var t=ra.create(e),n=t.toString(na);return n}function Y(e){if(!U(e))return new Uint8Array;for(var t,n=na.parse(e),r=n.words,o=n.sigBytes,a=new Uint8Array(o),c=0;c<o;c++)t=255&r[c>>>2]>>>24-8*(c%4),a[c]=t;return a}function Z(e){return q(e)?new Uint8Array(e):new Uint8Array}function K(e){return q(e)?X(Z(e)):""}function ee(e){return $(e)?new Uint16Array(e):new Uint16Array}function te(e){if(!U(e))return new Uint16Array;var t=Y(e),n=ee(t);return n}function ne(e){var t=Object.prototype.toString.call(e);return"[object Undefined]"===t}function re(e){var t=Object.prototype.toString.call(e);return"[object Array]"===t}function oe(e){function t(e,t){return 0<=n.indexOf("Uint8Array")&&(t=oa.u8arr2b64(t)),0<=n.indexOf("Uint16Array")&&(t=oa.u16arr2b64(t)),t}var n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"Uint8Array";if(ne(e))return"";if(U(n))n=[n];else if(re(n));else return"";var r="";try{r=JSON.stringify(e,t)}catch(e){r=""}return r}function ae(e,t,n,r,o){var a=oe(n),i=$o(a,t),c=H(),d=i.length;Xo(i,function(t,n){t=Qo(t,"");var a="".concat(c,"|").concat(n,"|").concat(d,"|").concat(t);e.send(a,function(e){e&&Ce(o)&&o(e)}),Ce(r)&&r(100*((n+1)/d))})}function ie(e){function t(e,t){return 0<=n.indexOf("Uint8Array")&&(t=oa.b642u8arr(t)),0<=n.indexOf("Uint16Array")&&(t=oa.b642u16arr(t)),t}var n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"Uint8Array";if(U(n))n=[n];else if(re(n));else return{};var r={};try{r=JSON.parse(e,t)}catch(e){r={}}return r}function ce(e,t){return!!E(e)&&!!z(t)&&t in e}function de(e,t){var n=no(e,"|"),r=n[0],o=Ro(n[1]),a=Ro(n[2]),i=Qo(v(n,3),"|");if(ce(da,r)||(da[r]={}),da[r]["_"+o]=i,o===a-1){var c="";Xo(ca(a),function(e){c+=da[r]["_"+e]}),delete da[r];var d=ie(c);t(d)}}function se(){function n(e){for(var t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];setTimeout(function(){c.emit.apply(c,[e].concat(n))},1)}function r(e){var t=m();return D(i.authenticate)?i.authenticate(e).then(function(e){t.resolve(e)}):t.resolve(!0),t}function o(e){n("error",e)}function a(){n("clientChange",l)}var i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};i=hr(i),i.port||(i.port=8080),i.strSplitLength||(i.strSplitLength=1e6);var c=new t.EventEmitter,d=e.Server,s={port:i.port,verifyClient:function(e,t){var n=P(e.req.url),o=L(n,"token");r(o).then(function(e){t(e)})}},p=null;try{p=new d(s)}catch(e){o({msg:"can not create websocket",err:e})}if(!p)return c;(function(){n("open")})();var l=[];return p.on("connection",function(t){function r(n,r){t.readyState===e.OPEN&&ae(t,i.strSplitLength,n,r,function(e){o({msg:"can not send message",err:e})})}function d(e){function t(t){e.output=t,delete e.input,r(e,null)}var a=L(e,"_mode");if("execute"===a){var i=L(e,"func"),c=Fr(e,"input");n("execute",i,c,t,r)}else"broadcast"===a?n("broadcast",Fr(e,"data")):"deliver"===a?n("deliver",Fr(e,"data")):o({msg:"can not find _mode in data",err:e})}function s(e){de(e,d)}l.push(t),a(),t.on("close",function(){l=l.filter(function(e){return e!==t}),a()}),t.sendData=r,t.on("message",s),c.on("triggerBroadcast",function(e,t){r({_mode:"broadcast",data:e},t)})}),c.broadcast=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:function(){};n("triggerBroadcast",e,t)},c}e=e&&e.hasOwnProperty("default")?e["default"]:e,t=t&&t.hasOwnProperty("default")?t["default"]:t;var ye=function(e,t){return e===t||e!==e&&t!==t},be=function(e,t){for(var n=e.length;n--;)if(ye(e[n][0],t))return n;return-1},fe=Array.prototype,ge=fe.splice;n.prototype.clear=function(){this.__data__=[],this.size=0},n.prototype["delete"]=function(e){var t=this.__data__,n=be(t,e);if(0>n)return!1;var r=t.length-1;return n==r?t.pop():ge.call(t,n,1),--this.size,!0},n.prototype.get=function(e){var t=this.__data__,n=be(t,e);return 0>n?void 0:t[n][1]},n.prototype.has=function(e){return-1<be(this.__data__,e)},n.prototype.set=function(e,t){var n=this.__data__,r=be(n,e);return 0>r?(++this.size,n.push([e,t])):n[r][1]=t,this};var he=n,_e="undefined"==typeof globalThis?"undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?{}:self:global:window:globalThis,je="object"==r(_e)&&_e&&_e.Object===Object&&_e,me=je,Ae="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,xe=me||Ae||Function("return this")(),Se=xe,Oe=Se.Symbol,we=Oe,ke=Object.prototype,Be=ke.hasOwnProperty,Ue=ke.toString,ze=we?we.toStringTag:void 0,Pe=function(e){var t=Be.call(e,ze),n=e[ze];try{e[ze]=void 0;var r=!0}catch(t){}var o=Ue.call(e);return r&&(t?e[ze]=n:delete e[ze]),o},ve=Object.prototype,Ee=ve.toString,Te=function(e){return Ee.call(e)},Fe=we?we.toStringTag:void 0,Ie=a,Me=i,Ce=function(e){if(!Me(e))return!1;var t=Ie(e);return t=="[object Function]"||t=="[object GeneratorFunction]"||t=="[object AsyncFunction]"||t=="[object Proxy]"},Le=Se["__core-js_shared__"],De=Le,Ne=function(){var e=/[^.]+$/.exec(De&&De.keys&&De.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Re=Function.prototype,We=Re.toString,Ve=function(e){if(null!=e){try{return We.call(e)}catch(t){}try{return e+""}catch(t){}}return""},He=/[\\^$.*+?()[\]{}|]/g,$e=/^\[object .+?Constructor\]$/,qe=Function.prototype,Ge=Object.prototype,Qe=qe.toString,Je=Ge.hasOwnProperty,Xe=RegExp("^"+Qe.call(Je).replace(He,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ye=function(e){if(!Me(e)||c(e))return!1;var t=Ce(e)?Xe:$e;return t.test(Ve(e))},Ze=function(e,t){return null==e?void 0:e[t]},Ke=function(e,t){var n=Ze(e,t);return Ye(n)?n:void 0},et=Ke(Se,"Map"),tt=et,nt=Ke(Object,"create"),rt=nt,ot=Object.prototype,at=ot.hasOwnProperty,it=Object.prototype,ct=it.hasOwnProperty;d.prototype.clear=function(){this.__data__=rt?rt(null):{},this.size=0},d.prototype["delete"]=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},d.prototype.get=function(e){var t=this.__data__;if(rt){var n=t[e];return n==="__lodash_hash_undefined__"?void 0:n}return at.call(t,e)?t[e]:void 0},d.prototype.has=function(e){var t=this.__data__;return rt?t[e]!==void 0:ct.call(t,e)},d.prototype.set=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=rt&&void 0===t?"__lodash_hash_undefined__":t,this};var dt=d,st=function(e,t){var n=e.__data__;return s(t)?n["string"==typeof t?"string":"hash"]:n.map};p.prototype.clear=function(){this.size=0,this.__data__={hash:new dt,map:new(tt||he),string:new dt}},p.prototype["delete"]=function(e){var t=st(this,e)["delete"](e);return this.size-=t?1:0,t},p.prototype.get=function(e){return st(this,e).get(e)},p.prototype.has=function(e){return st(this,e).has(e)},p.prototype.set=function(e,t){var n=st(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};var pt=p;l.prototype.clear=function(){this.__data__=new he,this.size=0},l.prototype["delete"]=function(e){var t=this.__data__,n=t["delete"](e);return this.size=t.size,n},l.prototype.get=function(e){return this.__data__.get(e)},l.prototype.has=function(e){return this.__data__.has(e)},l.prototype.set=function(e,t){var n=this.__data__;if(n instanceof he){var r=n.__data__;if(!tt||199>r.length)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new pt(r)}return n.set(e,t),this.size=n.size,this};var lt=l,ut=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!(!1===t(e[n],n,e)););return e},yt=function(){try{var e=Ke(Object,"defineProperty");return e({},"",{}),e}catch(t){}}(),bt=yt,ft=function(e,t,n){"__proto__"==t&&bt?bt(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n},gt=Object.prototype,ht=gt.hasOwnProperty,_t=u,jt=function(e,t,n,r){var o=!n;n||(n={});for(var a=-1,i=t.length;++a<i;){var c=t[a],d=r?r(n[c],e[c],c,n,e):void 0;d===void 0&&(d=e[c]),o?ft(n,c,d):_t(n,c,d)}return n},mt=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},At=y,xt=function(e){return At(e)&&Ie(e)=="[object Arguments]"},St=Object.prototype,Ot=St.hasOwnProperty,wt=St.propertyIsEnumerable,kt=xt(function(){return arguments}())?xt:function(e){return At(e)&&Ot.call(e,"callee")&&!wt.call(e,"callee")},Bt=kt,Ut=Array.isArray,zt=Ut,Pt=function(){return!1},vt=o(function(e,t){var n=t&&!t.nodeType&&t,r=n&&!0&&e&&!e.nodeType&&e,o=r&&r.exports===n,a=o?Se.Buffer:void 0,i=a?a.isBuffer:void 0;e.exports=i||Pt}),Et=/^(?:0|[1-9]\d*)$/,Tt=b,Ft=function(e){return"number"==typeof e&&-1<e&&0==e%1&&e<=9007199254740991},It={};It["[object Float32Array]"]=It["[object Float64Array]"]=It["[object Int8Array]"]=It["[object Int16Array]"]=It["[object Int32Array]"]=It["[object Uint8Array]"]=It["[object Uint8ClampedArray]"]=It["[object Uint16Array]"]=It["[object Uint32Array]"]=!0,It["[object Arguments]"]=It["[object Array]"]=It["[object ArrayBuffer]"]=It["[object Boolean]"]=It["[object DataView]"]=It["[object Date]"]=It["[object Error]"]=It["[object Function]"]=It["[object Map]"]=It["[object Number]"]=It["[object Object]"]=It["[object RegExp]"]=It["[object Set]"]=It["[object String]"]=It["[object WeakMap]"]=!1;var Mt=function(e){return function(t){return e(t)}},Ct=o(function(e,t){var n=t&&!t.nodeType&&t,r=n&&!0&&e&&!e.nodeType&&e,o=r&&r.exports===n,a=o&&me.process,i=function(){try{var e=r&&r.require&&r.require("util").types;return e?e:a&&a.binding&&a.binding("util")}catch(t){}}();e.exports=i}),Lt=Ct&&Ct.isTypedArray,Dt=Lt?Mt(Lt):function(e){return At(e)&&Ft(e.length)&&!!It[Ie(e)]},Nt=Dt,Rt=Object.prototype,Wt=Rt.hasOwnProperty,Vt=function(e,t){var n=zt(e),r=!n&&Bt(e),o=!n&&!r&&vt(e),a=!n&&!r&&!o&&Nt(e),i=n||r||o||a,c=i?mt(e.length,String):[],d=c.length;for(var s in e)(t||Wt.call(e,s))&&!(i&&("length"==s||o&&("offset"==s||"parent"==s)||a&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||Tt(s,d)))&&c.push(s);return c},Ht=Object.prototype,$t=function(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||Ht;return e===n},qt=function(e,t){return function(n){return e(t(n))}},Gt=qt(Object.keys,Object),Qt=Object.prototype,Jt=Qt.hasOwnProperty,Xt=function(e){if(!$t(e))return Gt(e);var t=[];for(var n in Object(e))Jt.call(e,n)&&"constructor"!=n&&t.push(n);return t},Yt=function(e){return null!=e&&Ft(e.length)&&!Ce(e)},Zt=function(e){return Yt(e)?Vt(e):Xt(e)},Kt=function(e,t){return e&&jt(t,Zt(t),e)},en=function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t},tn=Object.prototype,nn=tn.hasOwnProperty,rn=function(e){if(!Me(e))return en(e);var t=$t(e),n=[];for(var r in e)("constructor"!=r||!t&&nn.call(e,r))&&n.push(r);return n},on=function(e){return Yt(e)?Vt(e,!0):rn(e)},an=function(e,t){return e&&jt(t,on(t),e)},cn=o(function(e,t){var n=t&&!t.nodeType&&t,r=n&&!0&&e&&!e.nodeType&&e,o=r&&r.exports===n,a=o?Se.Buffer:void 0,i=a?a.allocUnsafe:void 0;e.exports=function(e,t){if(t)return e.slice();var n=e.length,r=i?i(n):new e.constructor(n);return e.copy(r),r}}),dn=function(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t},sn=function(e,t){for(var n=-1,r=null==e?0:e.length,o=0,a=[];++n<r;){var i=e[n];t(i,n,e)&&(a[o++]=i)}return a},pn=function(){return[]},ln=Object.prototype,un=ln.propertyIsEnumerable,yn=Object.getOwnPropertySymbols,bn=yn?function(e){return null==e?[]:(e=Object(e),sn(yn(e),function(t){return un.call(e,t)}))}:pn,fn=bn,gn=function(e,t){return jt(e,fn(e),t)},hn=function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e},_n=qt(Object.getPrototypeOf,Object),jn=_n,mn=Object.getOwnPropertySymbols,An=mn?function(e){for(var t=[];e;)hn(t,fn(e)),e=jn(e);return t}:pn,xn=An,Sn=function(e,t){return jt(e,xn(e),t)},On=function(e,t,n){var r=t(e);return zt(e)?r:hn(r,n(e))},wn=function(e){return On(e,Zt,fn)},kn=function(e){return On(e,on,xn)},Bn=Ke(Se,"DataView"),Un=Bn,zn=Ke(Se,"Promise"),Pn=zn,vn=Ke(Se,"Set"),En=vn,Tn=Ke(Se,"WeakMap"),Fn=Tn,In="[object Map]",Mn="[object Promise]",Cn="[object Set]",Ln="[object WeakMap]",Dn="[object DataView]",Nn=Ve(Un),Rn=Ve(tt),Wn=Ve(Pn),Vn=Ve(En),Hn=Ve(Fn),$n=Ie;(Un&&$n(new Un(new ArrayBuffer(1)))!=Dn||tt&&$n(new tt)!=In||Pn&&$n(Pn.resolve())!=Mn||En&&$n(new En)!=Cn||Fn&&$n(new Fn)!=Ln)&&($n=function(e){var t=Ie(e),n=t=="[object Object]"?e.constructor:void 0,r=n?Ve(n):"";if(r)switch(r){case Nn:return Dn;case Rn:return In;case Wn:return Mn;case Vn:return Cn;case Hn:return Ln;}return t});var qn=$n,Gn=Object.prototype,Qn=Gn.hasOwnProperty,Jn=function(e){var t=e.length,n=new e.constructor(t);return t&&"string"==typeof e[0]&&Qn.call(e,"index")&&(n.index=e.index,n.input=e.input),n},Xn=Se.Uint8Array,Yn=Xn,Zn=function(e){var t=new e.constructor(e.byteLength);return new Yn(t).set(new Yn(e)),t},Kn=function(e,t){var n=t?Zn(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)},er=/\w*$/,tr=function(e){var t=new e.constructor(e.source,er.exec(e));return t.lastIndex=e.lastIndex,t},nr=we?we.prototype:void 0,rr=nr?nr.valueOf:void 0,or=function(e){return rr?Object(rr.call(e)):{}},ar=function(e,t){var n=t?Zn(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)},ir=function(e,t,n){var r=e.constructor;return"[object ArrayBuffer]"===t?Zn(e):"[object Boolean]"===t||"[object Date]"===t?new r(+e):"[object DataView]"===t?Kn(e,n):"[object Float32Array]"===t||"[object Float64Array]"===t||"[object Int8Array]"===t||"[object Int16Array]"===t||"[object Int32Array]"===t||"[object Uint8Array]"===t||"[object Uint8ClampedArray]"===t||"[object Uint16Array]"===t||"[object Uint32Array]"===t?ar(e,n):"[object Map]"===t?new r:"[object Number]"===t||"[object String]"===t?new r(e):"[object RegExp]"===t?tr(e):"[object Set]"===t?new r:"[object Symbol]"===t?or(e):void 0},cr=Object.create,dr=function(){function e(){}return function(t){if(!Me(t))return{};if(cr)return cr(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}(),sr=function(e){return"function"!=typeof e.constructor||$t(e)?{}:dr(jn(e))},pr=Ct&&Ct.isMap,lr=pr?Mt(pr):function(e){return At(e)&&qn(e)=="[object Map]"},ur=lr,yr=Ct&&Ct.isSet,br=yr?Mt(yr):function(e){return At(e)&&qn(e)=="[object Set]"},fr=br,gr={};gr["[object Arguments]"]=gr["[object Array]"]=gr["[object ArrayBuffer]"]=gr["[object DataView]"]=gr["[object Boolean]"]=gr["[object Date]"]=gr["[object Float32Array]"]=gr["[object Float64Array]"]=gr["[object Int8Array]"]=gr["[object Int16Array]"]=gr["[object Int32Array]"]=gr["[object Map]"]=gr["[object Number]"]=gr["[object Object]"]=gr["[object RegExp]"]=gr["[object Set]"]=gr["[object String]"]=gr["[object Symbol]"]=gr["[object Uint8Array]"]=gr["[object Uint8ClampedArray]"]=gr["[object Uint16Array]"]=gr["[object Uint32Array]"]=!0,gr["[object Error]"]=gr["[object Function]"]=gr["[object WeakMap]"]=!1;var hr=function(e){return f(e,5)},_r=g,jr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,mr=/^\w*$/,Ar=h;_.Cache=pt;var xr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Sr=/\\(\\)?/g,Or=function(e){var t=_(e,function(e){return 500===n.size&&n.clear(),e}),n=t.cache;return t}(function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(xr,function(e,n,r,o){t.push(r?o.replace(Sr,"$1"):n||e)}),t}),wr=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},kr=1/0,Br=we?we.prototype:void 0,Ur=Br?Br.toString:void 0,zr=j,Pr=function(e){return null==e?"":zr(e)},vr=function(e,t){return zt(e)?e:Ar(e,t)?[e]:Or(Pr(e))},Er=function(e){if("string"==typeof e||_r(e))return e;var t=e+"";return"0"==t&&1/e==-(1/0)?"-0":t},Tr=function(e,t){t=vr(t,e);for(var n=0,r=t.length;null!=e&&n<r;)e=e[Er(t[n++])];return n&&n==r?e:void 0},Fr=function(e,t,n){var r=null==e?void 0:Tr(e,t);return r===void 0?n:r},Ir=function(e,t,n){var r=-1,o=e.length;0>t&&(t=-t>o?0:o+t),n=n>o?o:n,0>n&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(o);++r<o;)a[r]=e[r+t];return a},Mr=function(e,t,n){var r=e.length;return n=void 0===n?r:n,!t&&n>=r?e:Ir(e,t,n)},Cr=RegExp("["+"\\u200d"+"\\ud800-\\udfff"+("\\u0300-\\u036f"+"\\ufe20-\\ufe2f"+"\\u20d0-\\u20ff")+"\\ufe0e\\ufe0f"+"]"),Lr=function(e){return Cr.test(e)},Dr=A,Nr=Ct&&Ct.isRegExp,Rr=Nr?Mt(Nr):function(e){return At(e)&&Ie(e)=="[object RegExp]"},Wr=function(e){return e.split("")},Vr="\\ud800-\\udfff",Hr="["+("\\u0300-\\u036f"+"\\ufe20-\\ufe2f"+"\\u20d0-\\u20ff")+"]",$r="\\ud83c[\\udffb-\\udfff]",qr="[^"+Vr+"]",Gr="(?:\\ud83c[\\udde6-\\uddff]){2}",Qr="[\\ud800-\\udbff][\\udc00-\\udfff]",Jr="(?:"+Hr+"|"+$r+")"+"?",Xr="["+"\\ufe0e\\ufe0f"+"]?",Yr="(?:"+"\\u200d"+"(?:"+[qr,Gr,Qr].join("|")+")"+Xr+Jr+")*",Zr="(?:"+[qr+Hr+"?",Hr,Gr,Qr,"["+Vr+"]"].join("|")+")",Kr=RegExp($r+"(?="+$r+")|"+Zr+(Xr+Jr+Yr),"g"),eo=function(e){return e.match(Kr)||[]},to=function(e){return Lr(e)?eo(e):Wr(e)},no=function(e,t,n){return(n&&"number"!=typeof n&&Dr(e,t,n)&&(t=n=void 0),n=void 0===n?4294967295:n>>>0,!n)?[]:(e=Pr(e),e&&("string"==typeof t||null!=t&&!Rr(t))&&(t=zr(t),!t&&Lr(e))?Mr(to(e),0,n):e.split(t,n))};x.prototype.add=x.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},x.prototype.has=function(e){return this.__data__.has(e)};var ro=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},oo=function(e,t){return e.has(t)},ao=function(e,t,n,r,o,a){var i=1&n,c=e.length,d=t.length;if(c!=d&&!(i&&d>c))return!1;var s=a.get(e);if(s&&a.get(t))return s==t;var p=-1,l=!0,u=2&n?new x:void 0;for(a.set(e,t),a.set(t,e);++p<c;){var y=e[p],b=t[p];if(r)var f=i?r(b,y,p,t,e,a):r(y,b,p,e,t,a);if(void 0!==f){if(f)continue;l=!1;break}if(u){if(!ro(t,function(e,t){if(!oo(u,t)&&(y===e||o(y,e,n,r,a)))return u.push(t)})){l=!1;break}}else if(!(y===b||o(y,b,n,r,a))){l=!1;break}}return a["delete"](e),a["delete"](t),l},io=function(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n},co=function(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n},so=we?we.prototype:void 0,po=so?so.valueOf:void 0,lo=function(e,t,n,r,o,a,i){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!!(e.byteLength==t.byteLength&&a(new Yn(e),new Yn(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return ye(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var c=io;case"[object Set]":var d=1&r;if(c||(c=co),e.size!=t.size&&!d)return!1;var s=i.get(e);if(s)return s==t;r|=2,i.set(e,t);var p=ao(c(e),c(t),r,o,a,i);return i["delete"](e),p;case"[object Symbol]":if(po)return po.call(e)==po.call(t);}return!1},uo=Object.prototype,yo=uo.hasOwnProperty,bo=Object.prototype,fo=bo.hasOwnProperty,go=function(e,t,n,r,o,a){var i=zt(e),c=zt(t),d=i?"[object Array]":qn(e),s=c?"[object Array]":qn(t);d="[object Arguments]"==d?"[object Object]":d,s="[object Arguments]"==s?"[object Object]":s;var p="[object Object]"==d,l="[object Object]"==s,u=d==s;if(u&&vt(e)){if(!vt(t))return!1;i=!0,p=!1}if(u&&!p)return a||(a=new lt),i||Nt(e)?ao(e,t,n,r,o,a):lo(e,t,d,n,r,o,a);if(!(1&n)){var y=p&&fo.call(e,"__wrapped__"),b=l&&fo.call(t,"__wrapped__");if(y||b){var f=y?e.value():e,g=b?t.value():t;return a||(a=new lt),o(f,g,n,r,a)}}return!!u&&(a||(a=new lt),S(e,t,n,r,o,a))},ho=O,_o=function(e){return e===e&&!Me(e)},jo=function(e){for(var t=Zt(e),n=t.length;n--;){var r=t[n],o=e[r];t[n]=[r,o,_o(o)]}return t},mo=function(e,t){return function(n){return null!=n&&n[e]===t&&(t!==void 0||e in Object(n))}},Ao=function(e){var t=jo(e);return 1==t.length&&t[0][2]?mo(t[0][0],t[0][1]):function(n){return n===e||w(n,e,t)}},xo=function(e,t,n){t=vr(t,e);for(var r,o=-1,a=t.length,i=!1;++o<a&&(r=Er(t[o]),!!(i=null!=e&&n(e,r)));)e=e[r];return i||++o!=a?i:(a=null==e?0:e.length,!!a&&Ft(a)&&Tt(r,a)&&(zt(e)||Bt(e)))},So=function(e,t){return null!=e&&xo(e,t,k)},Oo=function(e,t){return Ar(e)&&_o(t)?mo(Er(e),t):function(n){var r=Fr(n,e);return r===void 0&&r===t?So(n,e):ho(t,r,3)}},wo=function(e){return e},ko=function(e){return function(t){return null==t?void 0:t[e]}},Bo=function(e){return function(t){return Tr(t,e)}},Uo=function(e){return Ar(e)?ko(Er(e)):Bo(e)},zo=function(e){return function(t,n,r){for(var o=-1,a=Object(t),i=r(t),c=i.length;c--;){var d=i[e?c:++o];if(!1===n(a[d],d,a))break}return t}}(),Po=function(e,t){return function(n,r){if(null==n)return n;if(!Yt(n))return e(n,r);for(var o=n.length,a=t?o:-1,i=Object(n);(t?a--:++a<o)&&!(!1===r(i[a],a,i)););return n}}(function(e,t){return e&&zo(e,t,Zt)}),vo=Po,Eo=function(e,t){var n=-1,r=Yt(e)?Array(e.length):[];return vo(e,function(e,o,a){r[++n]=t(e,o,a)}),r},To=function(e,t){var n=zt(e)?wr:Eo;return n(e,B(t))},Fo=function(e){for(var t=-1,n=null==e?0:e.length,r={};++t<n;){var o=e[t];r[o[0]]=o[1]}return r},Io=0/0,Mo=/^\s+|\s+$/g,Co=/^[-+]0x[0-9a-f]+$/i,Lo=/^0b[01]+$/i,Do=/^0o[0-7]+$/i,No=parseInt,Ro=function(e){if("number"==typeof e)return e;if(_r(e))return Io;if(Me(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Me(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(Mo,"");var n=Lo.test(e);return n||Do.test(e)?No(e.slice(2),n?2:8):Co.test(e)?Io:+e},Wo=1/0,Vo=function(e){if(!e)return 0===e?e:0;if(e=Ro(e),e===Wo||e===-Wo){var t=0>e?-1:1;return 1.7976931348623157e+308*t}return e===e?e:0},Ho=function(e){var t=Vo(e),n=t%1;return t===t?n?t-n:t:0},$o=function(e,t,n){t=(n?Dr(e,t,n):void 0===t)?1:le(Ho(t),0);var r=null==e?0:e.length;if(!r||1>t)return[];for(var o=0,a=0,i=Array(ue(r/t));o<r;)i[a++]=Ir(e,o,o+=t);return i},qo=Array.prototype,Go=qo.join,Qo=function(e,t){return null==e?"":Go.call(e,t)},Jo=function(e){return"function"==typeof e?e:wo},Xo=function(e,t){var n=zt(e)?ut:vo;return n(e,Jo(t))},Yo=function(e){return"number"==typeof e&&e==Ho(e)},Zo=Se.isFinite,Ko=function(e){var t=Math[e];return function(e,n){if(e=Ro(e),n=null==n?0:pe(Ho(n),292),n&&Zo(e)){var r=(Pr(e)+"e").split("e"),o=t(r[0]+"e"+(+r[1]+n));return r=(Pr(o)+"e").split("e"),+(r[0]+"e"+(+r[1]-n))}return t(e)}}("round"),ea=Ko,ta=o(function(e,t){(function(n,r){e.exports=t=r()})(_e,function(){var e=e||function(e,t){var n=Object.create||function(){function e(){}return function(t){var n;return e.prototype=t,n=new e,e.prototype=null,n}}(),r={},o=r.lib={},a=o.Base=function(){return{extend:function(e){var t=n(this);return e&&t.mixIn(e),t.hasOwnProperty("init")&&this.init!==t.init||(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),c=o.WordArray=a.extend({init:function(e,n){e=this.words=e||[],this.sigBytes=n==t?4*e.length:n},toString:function(e){return(e||s).stringify(this)},concat:function(e){var t=this.words,n=e.words,r=this.sigBytes,o=e.sigBytes;if(this.clamp(),r%4)for(var a,c=0;c<o;c++)a=255&n[c>>>2]>>>24-8*(c%4),t[r+c>>>2]|=a<<24-8*((r+c)%4);else for(var c=0;c<o;c+=4)t[r+c>>>2]=n[c>>>2];return this.sigBytes+=o,this},clamp:function(){var e=this.words,t=this.sigBytes;e[t>>>2]&=4294967295<<32-8*(t%4),e.length=ue(t/4)},clone:function e(){var e=a.clone.call(this);return e.words=this.words.slice(0),e},random:function(t){for(var n,o,a=[],d=function(t){var t=t,n=987654321,r=4294967295;return function(){n=36969*(65535&n)+(n>>16)&r,t=18e3*(65535&t)+(t>>16)&r;var o=(n<<16)+t&r;return o/=4294967296,o+=.5,o*(.5<e.random()?1:-1)}},r=0;r<t;r+=4)o=d(4294967296*(n||e.random())),n=987654071*o(),a.push(0|4294967296*o());return new c.init(a,t)}}),d=r.enc={},s=d.Hex={stringify:function(e){for(var t,n=e.words,r=e.sigBytes,o=[],a=0;a<r;a++)t=255&n[a>>>2]>>>24-8*(a%4),o.push((t>>>4).toString(16)),o.push((15&t).toString(16));return o.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r+=2)n[r>>>3]|=parseInt(e.substr(r,2),16)<<24-4*(r%8);return new c.init(n,t/2)}},p=d.Latin1={stringify:function(e){for(var t=(0,eval)("this").String.fromCharCode,n,r=e.words,o=e.sigBytes,a=[],c=0;c<o;c++)n=255&r[c>>>2]>>>24-8*(c%4),a.push(t(n));return a.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r++)n[r>>>2]|=(255&e.charCodeAt(r))<<24-8*(r%4);return new c.init(n,t)}},l=d.Utf8={stringify:function(e){try{return decodeURIComponent(escape(p.stringify(e)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(e){return p.parse(unescape(encodeURIComponent(e)))}},u=o.BufferedBlockAlgorithm=a.extend({reset:function(){this._data=new c.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=l.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(e){var t=this._data,n=t.words,r=t.sigBytes,o=this.blockSize,a=r/(4*o);a=e?ue(a):le((0|a)-this._minBufferSize,0);var i=a*o,d=pe(4*i,r);if(i){for(var s=0;s<i;s+=o)this._doProcessBlock(n,s);var p=n.splice(0,i);t.sigBytes-=d}return new c.init(p,d)},clone:function e(){var e=a.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0}),y=o.Hasher=u.extend({cfg:a.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){u.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){e&&this._append(e);var t=this._doFinalize();return t},blockSize:16,_createHelper:function(e){return function(t,n){return new e.init(n).finalize(t)}},_createHmacHelper:function(e){return function(t,n){return new b.HMAC.init(e,n).finalize(t)}}}),b=r.algo={};return r}(Math);return e})}),na=o(function(e,t){(function(n,r){e.exports=t=r(ta)})(_e,function(e){return function(){function t(e,t,n){for(var r=[],a=0,c=0;c<t;c++)if(c%4){var d=n[e.charCodeAt(c-1)]<<2*(c%4),s=n[e.charCodeAt(c)]>>>6-2*(c%4);r[a>>>2]|=(d|s)<<24-8*(a%4),a++}return o.create(r,a)}var n=e,r=n.lib,o=r.WordArray,a=n.enc,i=a.Base64={stringify:function(e){var t=e.words,n=e.sigBytes,r=this._map;e.clamp();for(var o=[],a=0;a<n;a+=3)for(var c=255&t[a>>>2]>>>24-8*(a%4),d=255&t[a+1>>>2]>>>24-8*((a+1)%4),s=255&t[a+2>>>2]>>>24-8*((a+2)%4),p=0;4>p&&a+.75*p<n;p++)o.push(r.charAt(63&(c<<16|d<<8|s)>>>6*(3-p)));var l=r.charAt(64);if(l)for(;o.length%4;)o.push(l);return o.join("")},parse:function(e){var n=e.length,r=this._map,o=this._reverseMap;if(!o){o=this._reverseMap=[];for(var a=0;a<r.length;a++)o[r.charCodeAt(a)]=a}var i=r.charAt(64);if(i){var c=e.indexOf(i);-1!==c&&(n=c)}return t(e,n,o)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),e.enc.Base64})}),ra=o(function(e,t){(function(n,r){e.exports=t=r(ta)})(_e,function(e){return function(){if("function"==typeof ArrayBuffer){var t=e.lib,n=t.WordArray,r=n.init,o=n.init=function(e){if(e instanceof ArrayBuffer&&(e=new Uint8Array(e)),(e instanceof Int8Array||"undefined"!=typeof Uint8ClampedArray&&e instanceof Uint8ClampedArray||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Float32Array||e instanceof Float64Array)&&(e=new Uint8Array(e.buffer,e.byteOffset,e.byteLength)),e instanceof Uint8Array){for(var t=e.byteLength,n=[],o=0;o<t;o++)n[o>>>2]|=e[o]<<24-8*(o%4);r.call(this,n,t)}else r.apply(this,arguments)};o.prototype=n}}(),e.lib.WordArray})}),oa={tagU8A:"[Uint8Array]::",u8arr2b64:function(e){return $(e)?"[Uint8Array]::"+X(e):e},b642u8arr:function(e){return U(e)&&"[Uint8Array]::"===G(e,14)?(e=J(e,14),Y(e)):e},tagU16A:"[Uint16Array]::",u16arr2b64:function(e){return q(e)?"[Uint16Array]::"+K(e):e},b642u16arr:function(e){return U(e)&&"[Uint16Array]::"===G(e,15)?(e=J(e,15),te(e)):e}},v=function(e,t,r){var o=null==e?0:e.length;return o?(t=r||void 0===t?1:Ho(t),Ir(e,0>t?0:t,o)):[]},aa=function(e,t,n,r){for(var o=-1,a=le(ue((t-e)/(n||1)),0),i=Array(a);a--;)i[r?a:++o]=e,e+=n;return i},ia=function(e){return function(t,n,r){return r&&"number"!=typeof r&&Dr(t,n,r)&&(n=r=void 0),t=Vo(t),void 0===n?(n=t,t=0):n=Vo(n),r=void 0===r?t<n?1:-1:Vo(r),aa(t,n,r,e)}}(),ca=ia,da={};return se});
//# sourceMappingURL=w-converws-server.umd.js.map
