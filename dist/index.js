"use strict";var d=function(e,n){return function(){return n||e((n={exports:{}}).exports,n),n.exports}};var k=d(function(M,R){
var x=require('@stdlib/math-base-assert-is-nan/dist'),j=require('@stdlib/math-base-special-abs/dist');function B(e,n,q,b,r,v,a){var i,m,s,c,u,p,y;if(i=0,e<=0)return r[a]=i,r[a+v]=0,r;if(m=b,q===0)return x(n[m])?(r[a]=i,r[a+v]=0,r):(r[a]=n[m]*e,r[a+v]=e,r);for(u=0,p=0,y=0;y<e;y++)s=n[m],x(s)===!1&&(c=i+s,j(i)>=j(s)?u+=i-c+s:u+=s-c+i,i=c,p+=1),m+=q;return r[a]=i+u,r[a+v]=p,r}R.exports=B
});var g=d(function(P,E){
var _=require('@stdlib/strided-base-stride2offset/dist'),C=k();function D(e,n,q,b,r){var v,a;return v=_(e,q),a=_(2,r),C(e,n,q,v,b,r,a)}E.exports=D
});var z=d(function(Q,w){
var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=g(),G=k();F(h,"ndarray",G);w.exports=h
});var H=require("path").join,I=require('@stdlib/utils-try-require/dist'),J=require('@stdlib/assert-is-error/dist'),K=z(),l,A=I(H(__dirname,"./native.js"));J(A)?l=K:l=A;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
