"use strict";var c=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var g=c(function(I,d){
var P=require('@stdlib/assert-is-plain-object/dist'),T=require('@stdlib/assert-has-own-property/dist'),j=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,f=require('@stdlib/error-tools-fmtprodmsg/dist');function N(i,r){if(!P(r))return new TypeError(f('1sl2V',r));if(T(r,"iter")){if(i.iter=r.iter,!j(r.iter))return new TypeError(f('1sl2t',"iter",r.iter));if(r.iter>64)return new RangeError(f('1slFf',"iter",r.iter));}return null}d.exports=N
});var w=c(function(L,h){
var s=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=require('@stdlib/symbol-iterator/dist'),R=g(),q=0,b=0,p=1;function O(i){var r,n,l,v,o,a,u,e,t;if(r={iter:64},arguments.length&&(v=R(r,i),v))throw v;return o=q,a=b,u=p,e=0,t=0,n={},s(n,"next",x),s(n,"return",y),m&&s(n,m,F),n;function x(){return t+=1,l||t>r.iter?{done:!0}:(t===1?e=q:t===2?e=b:t===3?e=p:(e=o+a+u,o=a,a=u,u=e),{value:e,done:!1})}function y(E){return l=!0,arguments.length?{value:E,done:!0}:{done:!0}}function F(){return O(r)}}h.exports=O
});var S=w();module.exports=S;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
