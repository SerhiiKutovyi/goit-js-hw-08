!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="Expected a function",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,m=Math.max,v=Math.min,g=function(){return s.Date.now()};function p(e,t,n){var o,i,f,u,a,c,l=0,s=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(r);function j(t){var n=o,r=i;return o=i=void 0,l=t,u=e.apply(r,n)}function S(e){return l=e,a=setTimeout(h,t),s?j(e):u}function T(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=f}function h(){var e=g();if(T(e))return w(e);a=setTimeout(h,function(e){var n=t-(e-c);return d?v(n,f-(e-l)):n}(e))}function w(e){return a=void 0,p&&o?j(e):(o=i=void 0,u)}function O(){var e=g(),n=T(e);if(o=arguments,i=this,c=e,n){if(void 0===a)return S(c);if(d)return a=setTimeout(h,t),j(c)}return void 0===a&&(a=setTimeout(h,t)),u}return t=b(t)||0,y(n)&&(s=!!n.leading,f=(d="maxWait"in n)?m(b(n.maxWait)||0,t):f,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=c=i=a=void 0},O.flush=function(){return void 0===a?u:w(g())},O}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=f.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};const j="feedback-form-state",S={form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form input"),message:document.querySelector(".feedback-form textarea")},T={};S.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(T),e.currentTarget.reset(),localStorage.removeItem(j)})),S.form.addEventListener("input",e(t)((function(e){T[e.target.name]=e.target.value,localStorage.setItem(j,JSON.stringify(T))}),500)),function(){const e=JSON.parse(localStorage.getItem(j));e&&(S.email.value=e.email,S.message.value=e.message)}()}();
//# sourceMappingURL=03-feedback.abaec18a.js.map
