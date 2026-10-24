"use strict";var y=function(n,e){return function(){try{return e||n((e={exports:{}}).exports,e),e.exports}catch(v){throw (e=0, v)}};};var j=y(function(L,g){
var c=require('@stdlib/math-base-assert-is-nan/dist'),_=require('@stdlib/math-base-special-abs/dist');function A(n,e,v,k,r,u,z){var f,p,s,i,a,l,m,b,q;if(i=z,n<=0)return r[i]=0,r[i+u]=0,r;if(s=k,v===0)return c(e[s])?(r[i]=0,r[i+u]=0,r):(r[i]=e[s]*n,r[i+u]=n,r);for(q=0;q<n&&(a=e[s],c(a)!==!1);q++)s+=v;if(q===n)return r[i]=0,r[i+u]=0,r;if(b=1,f=a,s+=v,q+=1,f===0)for(;q<n;q++){if(a=e[s],c(a)===!1){if(a!==0){p=!0;break}f+=a,b+=1}s+=v}else p=!0;for(m=0;q<n;q++)a=e[s],c(a)===!1&&(l=f+a,_(f)>=_(a)?m+=f-l+a:m+=a-l+f,f=l,b+=1),s+=v;return r[i]=p?f+m:f,r[i+u]=b,r}g.exports=A
});var d=y(function(M,E){
var x=require('@stdlib/strided-base-stride2offset/dist'),B=j();function C(n,e,v,k,r){return B(n,e,v,x(n,v),k,r,x(2,r))}E.exports=C
});var t=y(function(P,o){
var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=d(),F=j();D(h,"ndarray",F);o.exports=h
});var G=require("path").join,H=require('@stdlib/utils-try-require/dist'),I=require('@stdlib/assert-is-error/dist'),J=t(),R,w=H(G(__dirname,"./native.js"));I(w)?R=J:R=w;module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
