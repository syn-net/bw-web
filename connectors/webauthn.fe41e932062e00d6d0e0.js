!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1331)}({1331:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(162),a=n(440);n(441);var o,i=!1,c=null,u=null,d=null,l=null,s=null,f=null,p=!1,g=!1,b=null;function y(){i||((l=r.getQsParam("parent"))?(l=decodeURIComponent(l),s=new URL(l).origin,"1"===r.getQsParam("v")?function(){var e=r.getQsParam("data");if(!e)return void h("No data.");o=r.b64Decode(e),c=r.getQsParam("headerText"),u=r.getQsParam("btnText"),d=r.getQsParam("btnReturnText")}():function(){var e=null;try{e=JSON.parse(r.b64Decode(r.getQsParam("data")))}catch(t){return void h("Cannot parse data.")}f=e.callbackUri,o=e.data,c=e.headerText,u=e.btnText,d=e.btnReturnText}(),i=!0):h("No parent."))}function m(){if(g=!1,"credentials"in navigator)if(y(),o){try{b=a.parseWebauthnJson(o)}catch(e){return void h("Cannot parse webauthn data.")}p=!1,null!=f||-1!==navigator.userAgent.indexOf(" Safari/")&&-1===navigator.userAgent.indexOf("Chrome")||v()}else h("No data.");else h("WebAuthn is not supported in this browser.")}function v(){p||navigator.credentials.get({publicKey:b}).then(w).catch(h)}function h(e){f?(document.location.replace(f+"?error="+encodeURIComponent(e)),U(f+"?error="+encodeURIComponent(e))):parent.postMessage("error|"+e,l)}function w(e){if(!g){var t=a.buildDataString(e);f?(document.location.replace(f+"?data="+encodeURIComponent(t)),U(f+"?data="+encodeURIComponent(t))):(parent.postMessage("success|"+t,l),g=!0)}}function U(e){var t=document.getElementById("webauthn-button");t.innerText=decodeURI(d),t.onclick=function(){document.location.replace(e)}}document.addEventListener("DOMContentLoaded",(function(){var e;(m(),window.addEventListener("message",(function(e){e.origin&&""!==e.origin&&e.origin===s&&("stop"===e.data?p=!0:"start"===e.data&&p&&m())}),!1),e="ready",f||parent.postMessage("info|"+e,l),y(),c)&&(document.getElementById("webauthn-header").innerText=decodeURI(c));if(u){var t=document.getElementById("webauthn-button");t.innerText=decodeURI(u),t.onclick=v}}))},162:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.b64Decode=t.getQsParam=void 0,t.getQsParam=function(e){var t=window.location.href;e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null},t.b64Decode=function(e){return decodeURIComponent(Array.prototype.map.call(atob(e),(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""))}},440:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)&&(e=Uint8Array.from(e)),e instanceof ArrayBuffer&&(e=new Uint8Array(e)),e instanceof Uint8Array){for(var t="",n=e.byteLength,r=0;r<n;r++)t+=String.fromCharCode(e[r]);e=window.btoa(t)}if("string"!=typeof e)throw new Error("could not coerce to string");return e=e.replace(/\+/g,"-").replace(/\//g,"_").replace(/=*$/g,"")}Object.defineProperty(t,"__esModule",{value:!0}),t.parseWebauthnJson=t.buildDataString=void 0,t.buildDataString=function(e){var t=e.response,n=new Uint8Array(t.authenticatorData),a=new Uint8Array(t.clientDataJSON),o=new Uint8Array(e.rawId),i=new Uint8Array(t.signature),c={id:e.id,rawId:r(o),type:e.type,extensions:e.getClientExtensionResults(),response:{authenticatorData:r(n),clientDataJson:r(a),signature:r(i)}};return JSON.stringify(c)},t.parseWebauthnJson=function(e){var t=JSON.parse(e),n=t.challenge.replace(/-/g,"+").replace(/_/g,"/");return t.challenge=Uint8Array.from(atob(n),(function(e){return e.charCodeAt(0)})),t.allowCredentials.forEach((function(e){var t=e.id.replace(/\_/g,"/").replace(/\-/g,"+");e.id=Uint8Array.from(atob(t),(function(e){return e.charCodeAt(0)}))})),t}},441:function(e,t,n){"use strict";n.r(t)}});
//# sourceMappingURL=webauthn.fe41e932062e00d6d0e0.js.map