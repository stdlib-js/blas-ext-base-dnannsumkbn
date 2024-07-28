"use strict";var y=function(q,v){return function(){return v||q((v={exports:{}}).exports,v),v.exports}};var _=y(function(P,R){
var u=require('@stdlib/math-base-assert-is-nan/dist'),x=require('@stdlib/math-base-special-abs/dist');function D(q,v,b,e,a){var n,m,r,s,i,f,c,l;if(b<0?m=(1-q)*b:m=0,a<0?r=-a:r=0,n=0,q<=0)return e[r]=n,e[r+a]=0,e;if(q===1||b===0)return u(v[m])?(e[r]=n,e[r+a]=0,e):(e[r]=v[m],e[r+a]=1,e);for(f=0,c=0,l=0;l<q;l++)s=v[m],u(s)===!1&&(i=n+s,x(n)>=x(s)?f+=n-i+s:f+=s-i+n,n=i,c+=1),m+=b;return e[r]=n+f,e[r+a]=c,e}R.exports=D
});var w=y(function(Q,h){
var E=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/math-base-special-abs/dist');function F(q,v,b,e,a,n,m){var r,s,i,f,c,l,p,k;if(s=e,i=m,r=0,q<=0)return a[i]=r,a[i+n]=0,a;if(q===1||b===0)return E(v[s])?(a[i]=r,a[i+n]=0,a):(a[i]=v[s],a[i+n]=1,a);for(l=0,p=0,k=0;k<q;k++)f=v[s],E(f)===!1&&(c=r+f,g(r)>=g(f)?l+=r-c+f:l+=f-c+r,r=c,p+=1),s+=b;return a[i]=r+l,a[i+n]=p,a}h.exports=F
});var B=y(function(S,A){
var G=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=_(),H=w();G(z,"ndarray",H);A.exports=z
});var I=require("path").join,J=require('@stdlib/utils-try-require/dist'),K=require('@stdlib/assert-is-error/dist'),L=B(),j,C=J(I(__dirname,"./native.js"));K(C)?j=L:j=C;module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
