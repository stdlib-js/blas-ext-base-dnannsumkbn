// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e,t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,l=n.__lookupSetter__;function f(e){return e!=e}function c(e){return Math.abs(e)}function _(e,t,r,n,o){var i,u,a,l,_,p,d,b;if(u=r<0?(1-e)*r:0,a=o<0?-o:0,i=0,e<=0)return n[a]=i,n[a+o]=0,n;if(1===e||0===r)return f(t[u])?(n[a]=i,n[a+o]=0,n):(n[a]=t[u],n[a+o]=1,n);for(p=0,d=0,b=0;b<e;b++)!1===f(l=t[u])&&(_=i+l,c(i)>=c(l)?p+=i-_+l:p+=l-_+i,i=_,d+=1),u+=r;return n[a]=i+p,n[a+o]=d,n}return e=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var f,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(a.call(e,t)||l.call(e,t)?(f=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=f):e[t]=r.value),_="get"in r,p="set"in r,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,t,r.get),p&&u&&u.call(e,t,r.set),e},e(_,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,t,r,n,o,i,u){var a,l,_,p,d,b,s,y;if(l=n,_=u,a=0,e<=0)return o[_]=a,o[_+i]=0,o;if(1===e||0===r)return f(t[l])?(o[_]=a,o[_+i]=0,o):(o[_]=t[l],o[_+i]=1,o);for(b=0,s=0,y=0;y<e;y++)!1===f(p=t[l])&&(d=a+p,c(a)>=c(p)?b+=a-d+p:b+=p-d+a,a=d,s+=1),l+=r;return o[_]=a+b,o[_+i]=s,o}}),_},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).dnannsumkbn=t();
//# sourceMappingURL=index.js.map
