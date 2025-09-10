"use strict";var y=function(a,n){return function(){return n||a((n={exports:{}}).exports,n),n.exports}};var j=y(function(L,g){
var c=require('@stdlib/math-base-assert-is-nan/dist'),_=require('@stdlib/math-base-special-abs/dist');function A(a,n,q,k,r,u,z){var v,p,f,i,e,l,m,b,s;if(i=z,a<=0)return r[i]=0,r[i+u]=0,r;if(f=k,q===0)return c(n[f])?(r[i]=0,r[i+u]=0,r):(r[i]=n[f]*a,r[i+u]=a,r);for(s=0;s<a&&(e=n[f],c(e)!==!1);s++)f+=q;if(s===a)return r[i]=0,r[i+u]=0,r;if(b=1,v=e,f+=q,s+=1,v===0)for(;s<a;s++){if(e=n[f],c(e)===!1){if(e!==0){p=!0;break}v+=e,b+=1}f+=q}else p=!0;for(m=0;s<a;s++)e=n[f],c(e)===!1&&(l=v+e,_(v)>=_(e)?m+=v-l+e:m+=e-l+v,v=l,b+=1),f+=q;return r[i]=p?v+m:v,r[i+u]=b,r}g.exports=A
});var d=y(function(M,E){
var x=require('@stdlib/strided-base-stride2offset/dist'),B=j();function C(a,n,q,k,r){return B(a,n,q,x(a,q),k,r,x(2,r))}E.exports=C
});var t=y(function(P,o){
var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=d(),F=j();D(h,"ndarray",F);o.exports=h
});var G=require("path").join,H=require('@stdlib/utils-try-require/dist'),I=require('@stdlib/assert-is-error/dist'),J=t(),R,w=H(G(__dirname,"./native.js"));I(w)?R=J:R=w;module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
