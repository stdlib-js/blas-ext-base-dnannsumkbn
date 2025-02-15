"use strict";var d=function(n,a){return function(){return a||n((a={exports:{}}).exports,a),a.exports}};var k=d(function(M,R){
var j=require('@stdlib/math-base-assert-is-nan/dist'),x=require('@stdlib/math-base-special-abs/dist');function B(n,a,s,b,r,m,i){var e,q,v,c,u,p,y;if(e=0,n<=0)return r[i]=e,r[i+m]=0,r;if(q=b,s===0)return j(a[q])?(r[i]=e,r[i+m]=0,r):(r[i]=a[q]*n,r[i+m]=n,r);for(u=0,p=0,y=0;y<n;y++)v=a[q],j(v)===!1&&(c=e+v,x(e)>=x(v)?u+=e-c+v:u+=v-c+e,e=c,p+=1),q+=s;return r[i]=e+u,r[i+m]=p,r}R.exports=B
});var g=d(function(P,E){
var _=require('@stdlib/strided-base-stride2offset/dist'),C=k();function D(n,a,s,b,r){return C(n,a,s,_(n,s),b,r,_(2,r))}E.exports=D
});var z=d(function(Q,w){
var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=g(),G=k();F(h,"ndarray",G);w.exports=h
});var H=require("path").join,I=require('@stdlib/utils-try-require/dist'),J=require('@stdlib/assert-is-error/dist'),K=z(),l,A=I(H(__dirname,"./native.js"));J(A)?l=K:l=A;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
