var f={exports:{}},n={};const i=React;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=i,a=Symbol.for("react.element"),y=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,m=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function l(t,e,s){var r,o={},_=null,p=null;s!==void 0&&(_=""+s),e.key!==void 0&&(_=""+e.key),e.ref!==void 0&&(p=e.ref);for(r in e)c.call(e,r)&&!x.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:a,type:t,key:_,ref:p,props:o,_owner:m.current}}n.Fragment=y;n.jsx=l;n.jsxs=l;f.exports=n;var R=f.exports;export{R as j};
