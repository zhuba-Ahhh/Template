import{j as e,B as t,u as r}from"./.pnpm-CUXj8hN8.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();function n(e="u_"){return e+Date.now().toString(36)+Math.floor(1e4*Math.random()).toString(36)}const o="_test_cq02t_7",i="_resizable_5fdmh_1",c="_resizer-r_5fdmh_4",a="_resizer-b_5fdmh_18";function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){var n;return n=function(e,t){if("object"!=s(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==s(n)?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var m=function(e){var t=e.axis,r=e.onMouseDown,n=e.onMouseMove,o=e.onMouseUp,i=e.className,s=React.useRef([0,0]),u=function(e){var t=e.clientX-s.current[0],r=e.clientY-s.current[1];n&&n([t,r])},l=function e(){document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",e),o&&o()},f=React.useCallback((function(){var e=new CustomEvent("hover",{detail:{axis:t}});document.dispatchEvent(e)}),[t]),d=React.useCallback((function(){var e=new CustomEvent("leave",{detail:{axis:t}});document.dispatchEvent(e)}),[t]);return React.createElement("div",{className:"".concat("x"===t?c:a," ").concat(null!=i?i:""),onMouseDown:function(e){s.current=[e.clientX,e.clientY],document.addEventListener("mousemove",u),document.addEventListener("mouseup",l),r&&r(e),e.stopPropagation()},onMouseOver:f,onMouseLeave:d})},y=function(e){var t,r=e.axis,n=void 0===r?"x":r,o=e.zoom,c=void 0===o?1:o,a=e.onResizeStart,s=e.onResize,u=e.onResizeStop,f=e.children,p=e.className,y=React.useRef(null),v=React.useRef(null),h=function(){v.current&&(y.current=v.current.getBoundingClientRect(),a&&a())},b=React.useCallback((function(e){if(y.current&&s){var t=y.current,r=t.width,o=void 0===r?0:r,i=t.height,a=void 0===i?0:i,u=Math.floor((o+("y"===n?0:e[0]))/c),l=Math.floor((a+("x"===n?0:e[1]))/c);s({width:"".concat(u,"px"),height:"".concat(l,"px")})}}),[n,c]),g=function(){u&&u()},w=React.useMemo((function(){return"x"===n||"y"===n?[n]:"both"===n?["x","y"]:[]}),[n]);return React.cloneElement.apply(void 0,[f,l(l({},f.props),{},{ref:v,className:"".concat(i," ").concat(null!==(t=f.props.className)&&void 0!==t?t:""),onMouseDown:h})].concat(d(w.map((function(e){return React.createElement(m,{key:"resizer-".concat(e),axis:e,onMouseDown:h,onMouseMove:b,onMouseUp:g,className:p})})))))};function v(){const[i,c]=React.useState({width:100,height:100,backgroundColor:"#ff4d4f"}),a=React.useCallback((({width:e,height:t})=>{c((r=>({...r,width:e,height:t})))}),[]);return e.jsxs("div",{className:`flex items-center justify-center ${o}`,children:[e.jsx("img",{src:"data:image/svg+xml,%3csvg%20width='410'%20height='404'%20viewBox='0%200%20410%20404'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M399.641%2059.5246L215.643%20388.545C211.844%20395.338%20202.084%20395.378%20198.228%20388.618L10.5817%2059.5563C6.38087%2052.1896%2012.6802%2043.2665%2021.0281%2044.7586L205.223%2077.6824C206.398%2077.8924%20207.601%2077.8904%20208.776%2077.6763L389.119%2044.8058C397.439%2043.2894%20403.768%2052.1434%20399.641%2059.5246Z'%20fill='url(%23paint0_linear)'/%3e%3cpath%20d='M292.965%201.5744L156.801%2028.2552C154.563%2028.6937%20152.906%2030.5903%20152.771%2032.8664L144.395%20174.33C144.198%20177.662%20147.258%20180.248%20150.51%20179.498L188.42%20170.749C191.967%20169.931%20195.172%20173.055%20194.443%20176.622L183.18%20231.775C182.422%20235.487%20185.907%20238.661%20189.532%20237.56L212.947%20230.446C216.577%20229.344%20220.065%20232.527%20219.297%20236.242L201.398%20322.875C200.278%20328.294%20207.486%20331.249%20210.492%20326.603L212.5%20323.5L323.454%20102.072C325.312%2098.3645%20322.108%2094.137%20318.036%2094.9228L279.014%20102.454C275.347%20103.161%20272.227%2099.746%20273.262%2096.1583L298.731%207.86689C299.767%204.27314%20296.636%200.855181%20292.965%201.5744Z'%20fill='url(%23paint1_linear)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear'%20x1='6.00017'%20y1='32.9999'%20x2='235'%20y2='344'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2341D1FF'/%3e%3cstop%20offset='1'%20stop-color='%23BD34FE'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear'%20x1='194.651'%20y1='8.81818'%20x2='236.076'%20y2='292.989'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFEA83'/%3e%3cstop%20offset='0.0833333'%20stop-color='%23FFDD35'/%3e%3cstop%20offset='1'%20stop-color='%23FFA800'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",className:"logo",alt:"Vite logo",height:100,width:100},n()),e.jsxs(t,{onClick:()=>{},children:["Hello",r()]},n()),n(),e.jsx(y,{onResize:a,axis:"both",onResizeStart:()=>{},onResizeStop:()=>{},children:e.jsx("div",{style:i})},r())]})}const h=document.getElementById("root");if(h){ReactDOM.createRoot(h).render(e.jsx(React.StrictMode,{children:e.jsx(v,{})}))}
