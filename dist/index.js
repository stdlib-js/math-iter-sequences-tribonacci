"use strict";var c=function(n,r){return function(){try{return r||n((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var g=c(function(I,d){
var P=require('@stdlib/assert-is-plain-object/dist'),T=require('@stdlib/assert-has-own-property/dist'),j=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,f=require('@stdlib/error-tools-fmtprodmsg/dist');function N(n,r){if(!P(r))return new TypeError(f('1sl2V',r));if(T(r,"iter")){if(n.iter=r.iter,!j(r.iter))return new TypeError(f('1sl2t',"iter",r.iter));if(r.iter>64)return new RangeError(f('1slFf',"iter",r.iter));}return null}d.exports=N
});var w=c(function(L,h){
var s=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=require('@stdlib/symbol-iterator/dist'),R=g(),q=0,b=0,p=1;function O(n){var r,e,l,v,o,a,u,t,i;if(r={iter:64},arguments.length&&(v=R(r,n),v))throw v;return o=q,a=b,u=p,t=0,i=0,e={},s(e,"next",x),s(e,"return",y),m&&s(e,m,F),e;function x(){return i+=1,l||i>r.iter?{done:!0}:(i===1?t=q:i===2?t=b:i===3?t=p:(t=o+a+u,o=a,a=u,u=t),{value:t,done:!1})}function y(E){return l=!0,arguments.length?{value:E,done:!0}:{done:!0}}function F(){return O(r)}}h.exports=O
});var S=w();module.exports=S;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
