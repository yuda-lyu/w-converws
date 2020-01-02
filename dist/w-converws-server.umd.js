/*!
 * w-converws-server v1.0.26
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("ws"),require("events")):"function"==typeof define&&define.amd?define(["ws","events"],r):(t=t||self)["w-converws-server"]=r(t.ws,t.events)}(this,(function(t,r){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t,r=r&&r.hasOwnProperty("default")?r.default:r;var n=Array.isArray;function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function i(t,r){return t(r={exports:{}},r.exports),r.exports}var a="object"==e(o)&&o&&o.Object===Object&&o,u="object"==("undefined"==typeof self?"undefined":e(self))&&self&&self.Object===Object&&self,c=a||u||Function("return this")(),f=c.Symbol,s=Object.prototype,l=s.hasOwnProperty,v=s.toString,p=f?f.toStringTag:void 0;var h=function(t){var r=l.call(t,p),n=t[p];try{t[p]=void 0;var e=!0}catch(t){}var o=v.call(t);return e&&(r?t[p]=n:delete t[p]),o},y=Object.prototype.toString;var d=function(t){return y.call(t)},b="[object Null]",g="[object Undefined]",_=f?f.toStringTag:void 0;var j=function(t){return null==t?void 0===t?g:b:_&&_ in Object(t)?h(t):d(t)};var w=function(t){return null!=t&&"object"==e(t)},m="[object Symbol]";var A=function(t){return"symbol"==e(t)||w(t)&&j(t)==m},O=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,S=/^\w*$/;var x=function(t,r){if(n(t))return!1;var o=e(t);return!("number"!=o&&"symbol"!=o&&"boolean"!=o&&null!=t&&!A(t))||(S.test(t)||!O.test(t)||null!=r&&t in Object(r))};var U=function(t){var r=e(t);return null!=t&&("object"==r||"function"==r)},z="[object AsyncFunction]",B="[object Function]",P="[object GeneratorFunction]",M="[object Proxy]";var E,k=function(t){if(!U(t))return!1;var r=j(t);return r==B||r==P||r==z||r==M},C=c["__core-js_shared__"],F=(E=/[^.]+$/.exec(C&&C.keys&&C.keys.IE_PROTO||""))?"Symbol(src)_1."+E:"";var I=function(t){return!!F&&F in t},$=Function.prototype.toString;var T=function(t){if(null!=t){try{return $.call(t)}catch(t){}try{return t+""}catch(t){}}return""},N=/^\[object .+?Constructor\]$/,L=Function.prototype,R=Object.prototype,D=L.toString,W=R.hasOwnProperty,H=RegExp("^"+D.call(W).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var q=function(t){return!(!U(t)||I(t))&&(k(t)?H:N).test(T(t))};var V=function(t,r){return null==t?void 0:t[r]};var J=function(t,r){var n=V(t,r);return q(n)?n:void 0},G=J(Object,"create");var K=function(){this.__data__=G?G(null):{},this.size=0};var Q=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r},X="__lodash_hash_undefined__",Y=Object.prototype.hasOwnProperty;var Z=function(t){var r=this.__data__;if(G){var n=r[t];return n===X?void 0:n}return Y.call(r,t)?r[t]:void 0},tt=Object.prototype.hasOwnProperty;var rt=function(t){var r=this.__data__;return G?void 0!==r[t]:tt.call(r,t)},nt="__lodash_hash_undefined__";var et=function(t,r){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=G&&void 0===r?nt:r,this};function ot(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}ot.prototype.clear=K,ot.prototype.delete=Q,ot.prototype.get=Z,ot.prototype.has=rt,ot.prototype.set=et;var it=ot;var at=function(){this.__data__=[],this.size=0};var ut=function(t,r){return t===r||t!=t&&r!=r};var ct=function(t,r){for(var n=t.length;n--;)if(ut(t[n][0],r))return n;return-1},ft=Array.prototype.splice;var st=function(t){var r=this.__data__,n=ct(r,t);return!(n<0)&&(n==r.length-1?r.pop():ft.call(r,n,1),--this.size,!0)};var lt=function(t){var r=this.__data__,n=ct(r,t);return n<0?void 0:r[n][1]};var vt=function(t){return ct(this.__data__,t)>-1};var pt=function(t,r){var n=this.__data__,e=ct(n,t);return e<0?(++this.size,n.push([t,r])):n[e][1]=r,this};function ht(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}ht.prototype.clear=at,ht.prototype.delete=st,ht.prototype.get=lt,ht.prototype.has=vt,ht.prototype.set=pt;var yt=ht,dt=J(c,"Map");var bt=function(){this.size=0,this.__data__={hash:new it,map:new(dt||yt),string:new it}};var gt=function(t){var r=e(t);return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t};var _t=function(t,r){var n=t.__data__;return gt(r)?n["string"==typeof r?"string":"hash"]:n.map};var jt=function(t){var r=_t(this,t).delete(t);return this.size-=r?1:0,r};var wt=function(t){return _t(this,t).get(t)};var mt=function(t){return _t(this,t).has(t)};var At=function(t,r){var n=_t(this,t),e=n.size;return n.set(t,r),this.size+=n.size==e?0:1,this};function Ot(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}Ot.prototype.clear=bt,Ot.prototype.delete=jt,Ot.prototype.get=wt,Ot.prototype.has=mt,Ot.prototype.set=At;var St=Ot,xt="Expected a function";function Ut(t,r){if("function"!=typeof t||null!=r&&"function"!=typeof r)throw new TypeError(xt);var n=function n(){var e=arguments,o=r?r.apply(this,e):e[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,e);return n.cache=i.set(o,a)||i,a};return n.cache=new(Ut.Cache||St),n}Ut.Cache=St;var zt=Ut,Bt=500;var Pt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Mt=/\\(\\)?/g,Et=function(t){var r=zt(t,(function(t){return n.size===Bt&&n.clear(),t})),n=r.cache;return r}((function(t){var r=[];return 46===t.charCodeAt(0)&&r.push(""),t.replace(Pt,(function(t,n,e,o){r.push(e?o.replace(Mt,"$1"):n||t)})),r}));var kt=function(t,r){for(var n=-1,e=null==t?0:t.length,o=Array(e);++n<e;)o[n]=r(t[n],n,t);return o},Ct=1/0,Ft=f?f.prototype:void 0,It=Ft?Ft.toString:void 0;var $t=function t(r){if("string"==typeof r)return r;if(n(r))return kt(r,t)+"";if(A(r))return It?It.call(r):"";var e=r+"";return"0"==e&&1/r==-Ct?"-0":e};var Tt=function(t){return null==t?"":$t(t)};var Nt=function(t,r){return n(t)?t:x(t,r)?[t]:Et(Tt(t))},Lt=1/0;var Rt=function(t){if("string"==typeof t||A(t))return t;var r=t+"";return"0"==r&&1/t==-Lt?"-0":r};var Dt=function(t,r){for(var n=0,e=(r=Nt(r,t)).length;null!=t&&n<e;)t=t[Rt(r[n++])];return n&&n==e?t:void 0};var Wt=function(t,r,n){var e=null==t?void 0:Dt(t,r);return void 0===e?n:e};var Ht=function(t,r,n){var e=-1,o=t.length;r<0&&(r=-r>o?0:o+r),(n=n>o?o:n)<0&&(n+=o),o=r>n?0:n-r>>>0,r>>>=0;for(var i=Array(o);++e<o;)i[e]=t[e+r];return i};var qt=function(t,r,n){var e=t.length;return n=void 0===n?e:n,!r&&n>=e?t:Ht(t,r,n)},Vt=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var Jt=function(t){return Vt.test(t)},Gt=9007199254740991;var Kt=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=Gt};var Qt=function(t){return null!=t&&Kt(t.length)&&!k(t)},Xt=9007199254740991,Yt=/^(?:0|[1-9]\d*)$/;var Zt=function(t,r){var n=e(t);return!!(r=null==r?Xt:r)&&("number"==n||"symbol"!=n&&Yt.test(t))&&t>-1&&t%1==0&&t<r};var tr=function(t,r,n){if(!U(n))return!1;var o=e(r);return!!("number"==o?Qt(n)&&Zt(r,n.length):"string"==o&&r in n)&&ut(n[r],t)},rr="[object RegExp]";var nr=function(t){return w(t)&&j(t)==rr};var er=function(t){return function(r){return t(r)}},or=i((function(t,r){var n=r&&!r.nodeType&&r,e=n&&t&&!t.nodeType&&t,o=e&&e.exports===n&&a.process,i=function(){try{var t=e&&e.require&&e.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=i})),ir=or&&or.isRegExp,ar=ir?er(ir):nr;var ur=function(t){return t.split("")},cr="[\\ud800-\\udfff]",fr="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",sr="\\ud83c[\\udffb-\\udfff]",lr="[^\\ud800-\\udfff]",vr="(?:\\ud83c[\\udde6-\\uddff]){2}",pr="[\\ud800-\\udbff][\\udc00-\\udfff]",hr="(?:"+fr+"|"+sr+")"+"?",yr="[\\ufe0e\\ufe0f]?"+hr+("(?:\\u200d(?:"+[lr,vr,pr].join("|")+")[\\ufe0e\\ufe0f]?"+hr+")*"),dr="(?:"+[lr+fr+"?",fr,vr,pr,cr].join("|")+")",br=RegExp(sr+"(?="+sr+")|"+dr+yr,"g");var gr=function(t){return t.match(br)||[]};var _r=function(t){return Jt(t)?gr(t):ur(t)},jr=4294967295;var wr=function(t,r,n){return n&&"number"!=typeof n&&tr(t,r,n)&&(r=n=void 0),(n=void 0===n?jr:n>>>0)?(t=Tt(t))&&("string"==typeof r||null!=r&&!ar(r))&&!(r=$t(r))&&Jt(t)?qt(_r(t),0,n):t.split(r,n):[]};var mr=function(){this.__data__=new yt,this.size=0};var Ar=function(t){var r=this.__data__,n=r.delete(t);return this.size=r.size,n};var Or=function(t){return this.__data__.get(t)};var Sr=function(t){return this.__data__.has(t)},xr=200;var Ur=function(t,r){var n=this.__data__;if(n instanceof yt){var e=n.__data__;if(!dt||e.length<xr-1)return e.push([t,r]),this.size=++n.size,this;n=this.__data__=new St(e)}return n.set(t,r),this.size=n.size,this};function zr(t){var r=this.__data__=new yt(t);this.size=r.size}zr.prototype.clear=mr,zr.prototype.delete=Ar,zr.prototype.get=Or,zr.prototype.has=Sr,zr.prototype.set=Ur;var Br=zr,Pr="__lodash_hash_undefined__";var Mr=function(t){return this.__data__.set(t,Pr),this};var Er=function(t){return this.__data__.has(t)};function kr(t){var r=-1,n=null==t?0:t.length;for(this.__data__=new St;++r<n;)this.add(t[r])}kr.prototype.add=kr.prototype.push=Mr,kr.prototype.has=Er;var Cr=kr;var Fr=function(t,r){for(var n=-1,e=null==t?0:t.length;++n<e;)if(r(t[n],n,t))return!0;return!1};var Ir=function(t,r){return t.has(r)},$r=1,Tr=2;var Nr=function(t,r,n,e,o,i){var a=n&$r,u=t.length,c=r.length;if(u!=c&&!(a&&c>u))return!1;var f=i.get(t);if(f&&i.get(r))return f==r;var s=-1,l=!0,v=n&Tr?new Cr:void 0;for(i.set(t,r),i.set(r,t);++s<u;){var p=t[s],h=r[s];if(e)var y=a?e(h,p,s,r,t,i):e(p,h,s,t,r,i);if(void 0!==y){if(y)continue;l=!1;break}if(v){if(!Fr(r,(function(t,r){if(!Ir(v,r)&&(p===t||o(p,t,n,e,i)))return v.push(r)}))){l=!1;break}}else if(p!==h&&!o(p,h,n,e,i)){l=!1;break}}return i.delete(t),i.delete(r),l},Lr=c.Uint8Array;var Rr=function(t){var r=-1,n=Array(t.size);return t.forEach((function(t,e){n[++r]=[e,t]})),n};var Dr=function(t){var r=-1,n=Array(t.size);return t.forEach((function(t){n[++r]=t})),n},Wr=1,Hr=2,qr="[object Boolean]",Vr="[object Date]",Jr="[object Error]",Gr="[object Map]",Kr="[object Number]",Qr="[object RegExp]",Xr="[object Set]",Yr="[object String]",Zr="[object Symbol]",tn="[object ArrayBuffer]",rn="[object DataView]",nn=f?f.prototype:void 0,en=nn?nn.valueOf:void 0;var on=function(t,r,n,e,o,i,a){switch(n){case rn:if(t.byteLength!=r.byteLength||t.byteOffset!=r.byteOffset)return!1;t=t.buffer,r=r.buffer;case tn:return!(t.byteLength!=r.byteLength||!i(new Lr(t),new Lr(r)));case qr:case Vr:case Kr:return ut(+t,+r);case Jr:return t.name==r.name&&t.message==r.message;case Qr:case Yr:return t==r+"";case Gr:var u=Rr;case Xr:var c=e&Wr;if(u||(u=Dr),t.size!=r.size&&!c)return!1;var f=a.get(t);if(f)return f==r;e|=Hr,a.set(t,r);var s=Nr(u(t),u(r),e,o,i,a);return a.delete(t),s;case Zr:if(en)return en.call(t)==en.call(r)}return!1};var an=function(t,r){for(var n=-1,e=r.length,o=t.length;++n<e;)t[o+n]=r[n];return t};var un=function(t,r,e){var o=r(t);return n(t)?o:an(o,e(t))};var cn=function(t,r){for(var n=-1,e=null==t?0:t.length,o=0,i=[];++n<e;){var a=t[n];r(a,n,t)&&(i[o++]=a)}return i};var fn=function(){return[]},sn=Object.prototype.propertyIsEnumerable,ln=Object.getOwnPropertySymbols,vn=ln?function(t){return null==t?[]:(t=Object(t),cn(ln(t),(function(r){return sn.call(t,r)})))}:fn;var pn=function(t,r){for(var n=-1,e=Array(t);++n<t;)e[n]=r(n);return e},hn="[object Arguments]";var yn=function(t){return w(t)&&j(t)==hn},dn=Object.prototype,bn=dn.hasOwnProperty,gn=dn.propertyIsEnumerable,_n=yn(function(){return arguments}())?yn:function(t){return w(t)&&bn.call(t,"callee")&&!gn.call(t,"callee")};var jn=function(){return!1},wn=i((function(t,r){var n=r&&!r.nodeType&&r,e=n&&t&&!t.nodeType&&t,o=e&&e.exports===n?c.Buffer:void 0,i=(o?o.isBuffer:void 0)||jn;t.exports=i})),mn={};mn["[object Float32Array]"]=mn["[object Float64Array]"]=mn["[object Int8Array]"]=mn["[object Int16Array]"]=mn["[object Int32Array]"]=mn["[object Uint8Array]"]=mn["[object Uint8ClampedArray]"]=mn["[object Uint16Array]"]=mn["[object Uint32Array]"]=!0,mn["[object Arguments]"]=mn["[object Array]"]=mn["[object ArrayBuffer]"]=mn["[object Boolean]"]=mn["[object DataView]"]=mn["[object Date]"]=mn["[object Error]"]=mn["[object Function]"]=mn["[object Map]"]=mn["[object Number]"]=mn["[object Object]"]=mn["[object RegExp]"]=mn["[object Set]"]=mn["[object String]"]=mn["[object WeakMap]"]=!1;var An=function(t){return w(t)&&Kt(t.length)&&!!mn[j(t)]},On=or&&or.isTypedArray,Sn=On?er(On):An,xn=Object.prototype.hasOwnProperty;var Un=function(t,r){var e=n(t),o=!e&&_n(t),i=!e&&!o&&wn(t),a=!e&&!o&&!i&&Sn(t),u=e||o||i||a,c=u?pn(t.length,String):[],f=c.length;for(var s in t)!r&&!xn.call(t,s)||u&&("length"==s||i&&("offset"==s||"parent"==s)||a&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||Zt(s,f))||c.push(s);return c},zn=Object.prototype;var Bn=function(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||zn)};var Pn=function(t,r){return function(n){return t(r(n))}}(Object.keys,Object),Mn=Object.prototype.hasOwnProperty;var En=function(t){if(!Bn(t))return Pn(t);var r=[];for(var n in Object(t))Mn.call(t,n)&&"constructor"!=n&&r.push(n);return r};var kn=function(t){return Qt(t)?Un(t):En(t)};var Cn=function(t){return un(t,kn,vn)},Fn=1,In=Object.prototype.hasOwnProperty;var $n=function(t,r,n,e,o,i){var a=n&Fn,u=Cn(t),c=u.length;if(c!=Cn(r).length&&!a)return!1;for(var f=c;f--;){var s=u[f];if(!(a?s in r:In.call(r,s)))return!1}var l=i.get(t);if(l&&i.get(r))return l==r;var v=!0;i.set(t,r),i.set(r,t);for(var p=a;++f<c;){var h=t[s=u[f]],y=r[s];if(e)var d=a?e(y,h,s,r,t,i):e(h,y,s,t,r,i);if(!(void 0===d?h===y||o(h,y,n,e,i):d)){v=!1;break}p||(p="constructor"==s)}if(v&&!p){var b=t.constructor,g=r.constructor;b!=g&&"constructor"in t&&"constructor"in r&&!("function"==typeof b&&b instanceof b&&"function"==typeof g&&g instanceof g)&&(v=!1)}return i.delete(t),i.delete(r),v},Tn=J(c,"DataView"),Nn=J(c,"Promise"),Ln=J(c,"Set"),Rn=J(c,"WeakMap"),Dn=T(Tn),Wn=T(dt),Hn=T(Nn),qn=T(Ln),Vn=T(Rn),Jn=j;(Tn&&"[object DataView]"!=Jn(new Tn(new ArrayBuffer(1)))||dt&&"[object Map]"!=Jn(new dt)||Nn&&"[object Promise]"!=Jn(Nn.resolve())||Ln&&"[object Set]"!=Jn(new Ln)||Rn&&"[object WeakMap]"!=Jn(new Rn))&&(Jn=function(t){var r=j(t),n="[object Object]"==r?t.constructor:void 0,e=n?T(n):"";if(e)switch(e){case Dn:return"[object DataView]";case Wn:return"[object Map]";case Hn:return"[object Promise]";case qn:return"[object Set]";case Vn:return"[object WeakMap]"}return r});var Gn=Jn,Kn=1,Qn="[object Arguments]",Xn="[object Array]",Yn="[object Object]",Zn=Object.prototype.hasOwnProperty;var te=function(t,r,e,o,i,a){var u=n(t),c=n(r),f=u?Xn:Gn(t),s=c?Xn:Gn(r),l=(f=f==Qn?Yn:f)==Yn,v=(s=s==Qn?Yn:s)==Yn,p=f==s;if(p&&wn(t)){if(!wn(r))return!1;u=!0,l=!1}if(p&&!l)return a||(a=new Br),u||Sn(t)?Nr(t,r,e,o,i,a):on(t,r,f,e,o,i,a);if(!(e&Kn)){var h=l&&Zn.call(t,"__wrapped__"),y=v&&Zn.call(r,"__wrapped__");if(h||y){var d=h?t.value():t,b=y?r.value():r;return a||(a=new Br),i(d,b,e,o,a)}}return!!p&&(a||(a=new Br),$n(t,r,e,o,i,a))};var re=function t(r,n,e,o,i){return r===n||(null==r||null==n||!w(r)&&!w(n)?r!=r&&n!=n:te(r,n,e,o,t,i))},ne=1,ee=2;var oe=function(t,r,n,e){var o=n.length,i=o,a=!e;if(null==t)return!i;for(t=Object(t);o--;){var u=n[o];if(a&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<i;){var c=(u=n[o])[0],f=t[c],s=u[1];if(a&&u[2]){if(void 0===f&&!(c in t))return!1}else{var l=new Br;if(e)var v=e(f,s,c,t,r,l);if(!(void 0===v?re(s,f,ne|ee,e,l):v))return!1}}return!0};var ie=function(t){return t==t&&!U(t)};var ae=function(t){for(var r=kn(t),n=r.length;n--;){var e=r[n],o=t[e];r[n]=[e,o,ie(o)]}return r};var ue=function(t,r){return function(n){return null!=n&&(n[t]===r&&(void 0!==r||t in Object(n)))}};var ce=function(t){var r=ae(t);return 1==r.length&&r[0][2]?ue(r[0][0],r[0][1]):function(n){return n===t||oe(n,t,r)}};var fe=function(t,r){return null!=t&&r in Object(t)};var se=function(t,r,e){for(var o=-1,i=(r=Nt(r,t)).length,a=!1;++o<i;){var u=Rt(r[o]);if(!(a=null!=t&&e(t,u)))break;t=t[u]}return a||++o!=i?a:!!(i=null==t?0:t.length)&&Kt(i)&&Zt(u,i)&&(n(t)||_n(t))};var le=function(t,r){return null!=t&&se(t,r,fe)},ve=1,pe=2;var he=function(t,r){return x(t)&&ie(r)?ue(Rt(t),r):function(n){var e=Wt(n,t);return void 0===e&&e===r?le(n,t):re(r,e,ve|pe)}};var ye=function(t){return t};var de=function(t){return function(r){return null==r?void 0:r[t]}};var be=function(t){return function(r){return Dt(r,t)}};var ge=function(t){return x(t)?de(Rt(t)):be(t)};var _e=function(t){return"function"==typeof t?t:null==t?ye:"object"==e(t)?n(t)?he(t[0],t[1]):ce(t):ge(t)};var je=function(t){return function(r,n,e){for(var o=-1,i=Object(r),a=e(r),u=a.length;u--;){var c=a[t?u:++o];if(!1===n(i[c],c,i))break}return r}}();var we=function(t,r){return function(n,e){if(null==n)return n;if(!Qt(n))return t(n,e);for(var o=n.length,i=r?o:-1,a=Object(n);(r?i--:++i<o)&&!1!==e(a[i],i,a););return n}}((function(t,r){return t&&je(t,r,kn)}));var me=function(t,r){var n=-1,e=Qt(t)?Array(t.length):[];return we(t,(function(t,o,i){e[++n]=r(t,o,i)})),e};var Ae=function(t,r){return(n(t)?kt:me)(t,_e(r))};var Oe=function(t){for(var r=-1,n=null==t?0:t.length,e={};++r<n;){var o=t[r];e[o[0]]=o[1]}return e};function Se(t){return"[object String]"===Object.prototype.toString.call(t)}function xe(t){return!(!Se(t)||""===t)}var Ue=NaN,ze=/^\s+|\s+$/g,Be=/^[-+]0x[0-9a-f]+$/i,Pe=/^0b[01]+$/i,Me=/^0o[0-7]+$/i,Ee=parseInt;var ke=function(t){if("number"==typeof t)return t;if(A(t))return Ue;if(U(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=U(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(ze,"");var n=Pe.test(t);return n||Me.test(t)?Ee(t.slice(2),n?2:8):Be.test(t)?Ue:+t},Ce=1/0,Fe=17976931348623157e292;var Ie=function(t){return t?(t=ke(t))===Ce||t===-Ce?(t<0?-1:1)*Fe:t==t?t:0:0===t?t:0};var $e=function(t){var r=Ie(t),n=r%1;return r==r?n?r-n:r:0},Te=Math.ceil,Ne=Math.max;var Le=function(t,r,n){r=(n?tr(t,r,n):void 0===r)?1:Ne($e(r),0);var e=null==t?0:t.length;if(!e||r<1)return[];for(var o=0,i=0,a=Array(Te(e/r));o<e;)a[i++]=Ht(t,o,o+=r);return a},Re=Array.prototype.join;var De=function(t,r){return null==t?"":Re.call(t,r)};var We=function(t,r){for(var n=-1,e=null==t?0:t.length;++n<e&&!1!==r(t[n],n,t););return t};var He=function(t){return"function"==typeof t?t:ye};var qe=function(t,r){return(n(t)?We:we)(t,He(r))};var Ve=function(t){return"number"==typeof t&&t==$e(t)};function Je(t){var r=!1;return xe(t)?r=!isNaN(Number(t)):function(t){return"[object Number]"===Object.prototype.toString.call(t)}(t)&&(r=!0),r}function Ge(t){return Je(t)?Ie(t):0}var Ke=c.isFinite,Qe=Math.min;var Xe=function(t){var r=Math[t];return function(t,n){if(t=ke(t),(n=null==n?0:Qe($e(n),292))&&Ke(t)){var e=(Tt(t)+"e").split("e"),o=r(e[0]+"e"+(+e[1]+n));return+((e=(Tt(o)+"e").split("e"))[0]+"e"+(+e[1]-n))}return r(t)}}("round");function Ye(t){return!!function(t){return!!Je(t)&&(t=Ge(t),Ve(t))}(t)&&function(t){if(!Je(t))return 0;t=Ge(t);var r=Xe(t);return"0"===String(r)?0:r}(t)>0}function Ze(t){return"[object Uint8Array]"===Object.prototype.toString.call(t)}function to(t){return"[object Uint16Array]"===Object.prototype.toString.call(t)}function ro(t,r){return xe(t)&&Ye(r)?t.substr(0,r):""}function no(t,r){return xe(t)&&Ye(r)?function(t,r){if(!xe(t))return"";if(!Ye(r))return"";var n=t.length-r;return n<0&&(n=0),t.substr(n,r)}(t,t.length-r):""}var eo=i((function(t,r){var n;t.exports=(n=n||function(t,r){var n=Object.create||function(){function t(){}return function(r){var n;return t.prototype=r,n=new t,t.prototype=null,n}}(),e={},o=e.lib={},i=o.Base={extend:function(t){var r=n(this);return t&&r.mixIn(t),r.hasOwnProperty("init")&&this.init!==r.init||(r.init=function(){r.$super.init.apply(this,arguments)}),r.init.prototype=r,r.$super=this,r},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var r in t)t.hasOwnProperty(r)&&(this[r]=t[r]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},a=o.WordArray=i.extend({init:function(t,r){t=this.words=t||[],this.sigBytes=null!=r?r:4*t.length},toString:function(t){return(t||c).stringify(this)},concat:function(t){var r=this.words,n=t.words,e=this.sigBytes,o=t.sigBytes;if(this.clamp(),e%4)for(var i=0;i<o;i++){var a=n[i>>>2]>>>24-i%4*8&255;r[e+i>>>2]|=a<<24-(e+i)%4*8}else for(i=0;i<o;i+=4)r[e+i>>>2]=n[i>>>2];return this.sigBytes+=o,this},clamp:function(){var r=this.words,n=this.sigBytes;r[n>>>2]&=4294967295<<32-n%4*8,r.length=t.ceil(n/4)},clone:function(){var t=i.clone.call(this);return t.words=this.words.slice(0),t},random:function(r){for(var n,e=[],o=function(r){r=r;var n=987654321,e=4294967295;return function(){var o=((n=36969*(65535&n)+(n>>16)&e)<<16)+(r=18e3*(65535&r)+(r>>16)&e)&e;return o/=4294967296,(o+=.5)*(t.random()>.5?1:-1)}},i=0;i<r;i+=4){var u=o(4294967296*(n||t.random()));n=987654071*u(),e.push(4294967296*u()|0)}return new a.init(e,r)}}),u=e.enc={},c=u.Hex={stringify:function(t){for(var r=t.words,n=t.sigBytes,e=[],o=0;o<n;o++){var i=r[o>>>2]>>>24-o%4*8&255;e.push((i>>>4).toString(16)),e.push((15&i).toString(16))}return e.join("")},parse:function(t){for(var r=t.length,n=[],e=0;e<r;e+=2)n[e>>>3]|=parseInt(t.substr(e,2),16)<<24-e%8*4;return new a.init(n,r/2)}},f=u.Latin1={stringify:function(t){for(var r=t.words,n=t.sigBytes,e=[],o=0;o<n;o++){var i=r[o>>>2]>>>24-o%4*8&255;e.push(String.fromCharCode(i))}return e.join("")},parse:function(t){for(var r=t.length,n=[],e=0;e<r;e++)n[e>>>2]|=(255&t.charCodeAt(e))<<24-e%4*8;return new a.init(n,r)}},s=u.Utf8={stringify:function(t){try{return decodeURIComponent(escape(f.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return f.parse(unescape(encodeURIComponent(t)))}},l=o.BufferedBlockAlgorithm=i.extend({reset:function(){this._data=new a.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=s.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(r){var n=this._data,e=n.words,o=n.sigBytes,i=this.blockSize,u=o/(4*i),c=(u=r?t.ceil(u):t.max((0|u)-this._minBufferSize,0))*i,f=t.min(4*c,o);if(c){for(var s=0;s<c;s+=i)this._doProcessBlock(e,s);var l=e.splice(0,c);n.sigBytes-=f}return new a.init(l,f)},clone:function(){var t=i.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),v=(o.Hasher=l.extend({cfg:i.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){l.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(r,n){return new t.init(n).finalize(r)}},_createHmacHelper:function(t){return function(r,n){return new v.HMAC.init(t,n).finalize(r)}}}),e.algo={});return e}(Math),n)})),oo=i((function(t,r){var n,e,o;t.exports=(e=(n=o=eo).lib.WordArray,n.enc.Base64={stringify:function(t){var r=t.words,n=t.sigBytes,e=this._map;t.clamp();for(var o=[],i=0;i<n;i+=3)for(var a=(r[i>>>2]>>>24-i%4*8&255)<<16|(r[i+1>>>2]>>>24-(i+1)%4*8&255)<<8|r[i+2>>>2]>>>24-(i+2)%4*8&255,u=0;u<4&&i+.75*u<n;u++)o.push(e.charAt(a>>>6*(3-u)&63));var c=e.charAt(64);if(c)for(;o.length%4;)o.push(c);return o.join("")},parse:function(t){var r=t.length,n=this._map,o=this._reverseMap;if(!o){o=this._reverseMap=[];for(var i=0;i<n.length;i++)o[n.charCodeAt(i)]=i}var a=n.charAt(64);if(a){var u=t.indexOf(a);-1!==u&&(r=u)}return function(t,r,n){for(var o=[],i=0,a=0;a<r;a++)if(a%4){var u=n[t.charCodeAt(a-1)]<<a%4*2,c=n[t.charCodeAt(a)]>>>6-a%4*2;o[i>>>2]|=(u|c)<<24-i%4*8,i++}return e.create(o,i)}(t,r,o)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},o.enc.Base64)})),io=i((function(t,r){var n;t.exports=(n=eo,function(){if("function"==typeof ArrayBuffer){var t=n.lib.WordArray,r=t.init;(t.init=function(t){if(t instanceof ArrayBuffer&&(t=new Uint8Array(t)),(t instanceof Int8Array||"undefined"!=typeof Uint8ClampedArray&&t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array)&&(t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),t instanceof Uint8Array){for(var n=t.byteLength,e=[],o=0;o<n;o++)e[o>>>2]|=t[o]<<24-o%4*8;r.call(this,e,n)}else r.apply(this,arguments)}).prototype=t}}(),n.lib.WordArray)}));function ao(t){return Ze(t)?io.create(t).toString(oo):""}function uo(t){if(!Se(t))return new Uint8Array;for(var r=oo.parse(t),n=r.words,e=r.sigBytes,o=new Uint8Array(e),i=0;i<e;i++){var a=n[i>>>2]>>>24-i%4*8&255;o[i]=a}return o}function co(t){return to(t)?ao(function(t){return to(t)?new Uint8Array(t):new Uint8Array}(t)):""}function fo(t){return Se(t)?function(t){return Ze(t)?new Uint16Array(t):new Uint16Array}(uo(t)):new Uint16Array}var so="[Uint8Array]::";var lo="[Uint16Array]::";var vo={tagU8A:so,u8arr2b64:function(t){return Ze(t)?so+ao(t):t},b642u8arr:function(t){return Se(t)&&ro(t,so.length)===so?uo(t=no(t,so.length)):t},tagU16A:lo,u16arr2b64:function(t){return to(t)?lo+co(t):t},b642u16arr:function(t){return Se(t)&&ro(t,lo.length)===lo?fo(t=no(t,lo.length)):t}};function po(t){return"[object Array]"===Object.prototype.toString.call(t)}function ho(t){var r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Uint8Array";if(r=t,"[object Undefined]"===Object.prototype.toString.call(r))return"";if(Se(n))n=[n];else if(!po(n))return"";var e="";try{e=JSON.stringify(t,(function(t,r){return n.indexOf("Uint8Array")>=0&&(r=vo.u8arr2b64(r)),n.indexOf("Uint16Array")>=0&&(r=vo.u16arr2b64(r)),r}))}catch(t){e=""}return e}function yo(t,r,n,e,o){var i=ho(n),a=Le(i,r),u=function(){var t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:32,n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),e=[],o=n.length;if(Ye(r))for(t=0;t<r;t++)e[t]=n[0|Math.random()*o];else{if("rfc4122"!==r)return"";var i;for(e[8]=e[13]=e[18]=e[23]="-",e[14]="4",t=0;t<36;t++)e[t]||(i=0|16*Math.random(),e[t]=n[19===t?3&i|8:i])}return e.join("")}(),c=a.length;qe(a,(function(r,n){r=De(r,"");var i="".concat(u,"|").concat(n,"|").concat(c,"|").concat(r);t.send(i,(function(t){t&&k(o)&&o(t)})),k(e)&&e((n+1)/c*100)}))}var bo=function(t,r,n){var e=null==t?0:t.length;return e?(r=n||void 0===r?1:$e(r),Ht(t,r<0?0:r,e)):[]},go=Math.ceil,_o=Math.max;var jo=function(t,r,n,e){for(var o=-1,i=_o(go((r-t)/(n||1)),0),a=Array(i);i--;)a[e?i:++o]=t,t+=n;return a};var wo=function(t){return function(r,n,e){return e&&"number"!=typeof e&&tr(r,n,e)&&(n=e=void 0),r=Ie(r),void 0===n?(n=r,r=0):n=Ie(n),e=void 0===e?r<n?1:-1:Ie(e),jo(r,n,e,t)}}();function mo(t,r){return n=t,"[object Object]"===Object.prototype.toString.call(n)&&(!!xe(r)&&r in t);var n}var Ao={};function Oo(t,r){var n=wr(t,"|"),e=n[0],o=ke(n[1]),i=ke(n[2]),a=De(bo(n,3),"|");if(mo(Ao,e)||(Ao[e]={}),Ao[e]["_"+o]=a,o===i-1){var u="";qe(wo(i),(function(t){u+=Ao[e]["_"+t]})),delete Ao[e],r(function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Uint8Array";if(Se(r))r=[r];else if(!po(r))return{};var n={};try{n=JSON.parse(t,(function(t,n){return r.indexOf("Uint8Array")>=0&&(n=vo.b642u8arr(n)),r.indexOf("Uint16Array")>=0&&(n=vo.b642u16arr(n)),n}))}catch(t){n={}}return n}(u))}}return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n.port||(n.port=8080),n.strSplitLength||(n.strSplitLength=1e6);var e=new r.EventEmitter;function o(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];setTimeout((function(){e.emit.apply(e,[t].concat(n))}),1)}var i=t.Server;function a(t){var r,e,o,i,a,u=((o=new Promise((function(){r=arguments[0],e=arguments[1]}))).resolve=r,o.reject=e,o);return i=n.authenticate,"[object Function]"===(a=Object.prototype.toString.call(i))||"[object AsyncFunction]"===a?n.authenticate(t).then((function(t){u.resolve(t)})):u.resolve(!0),u}var u={port:n.port,verifyClient:function(t,r){var n=function(t){if(!xe(t))return{};if(t=wr(t,"?"),!xe(t=Wt(t,"[1]")))return{};var r=wr(t,"&");return r=Ae(r,(function(t){return wr(t,"=")})),r=Oe(r)}(t.req.url);a(Wt(n,"token","")).then((function(t){r(t)}))}},c=null;try{c=new i(u)}catch(t){f({msg:"can not create websocket",err:t})}if(!c)return e;function f(t){o("error",t)}function s(){o("clientChange",l)}o("open");var l=[];return c.on("connection",(function(r,i){function a(e,o){r.readyState===t.OPEN&&yo(r,n.strSplitLength,e,o,(function(t){f({msg:"can not send message",err:t})}))}function u(t){var r=Wt(t,"_mode","");"execute"===r?o("execute",Wt(t,"func",""),Wt(t,"input"),(function(r){t.output=r,delete t.input,a(t,null)}),a):"broadcast"===r?o("broadcast",Wt(t,"data")):"deliver"===r?o("deliver",Wt(t,"data")):f({msg:"can not find _mode in data",err:t})}l.push(r),s(),r.on("close",(function(){l=l.filter((function(t){return t!==r})),s()})),r.sendData=a,r.on("message",(function(t){Oo(t,u)})),e.on("triggerBroadcast",(function(t,r){a({_mode:"broadcast",data:t},r)}))})),e.broadcast=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};o("triggerBroadcast",t,r)},e}}));
//# sourceMappingURL=w-converws-server.umd.js.map
