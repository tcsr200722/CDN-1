var AG_onLoad=function(func){if(document.readyState==="complete"||document.readyState==="interactive")func();else if(document.addEventListener)document.addEventListener("DOMContentLoaded",func);else if(document.attachEvent)document.attachEvent("DOMContentLoaded",func)};
var AG_removeElementById = function(id) { var element = document.getElementById(id); if (element && element.parentNode) { element.parentNode.removeChild(element); }};
var AG_removeElementBySelector = function(selector) { if (!document.querySelectorAll) { return; } var nodes = document.querySelectorAll(selector); if (nodes) { for (var i = 0; i < nodes.length; i++) { if (nodes[i] && nodes[i].parentNode) { nodes[i].parentNode.removeChild(nodes[i]); } } } };
var AG_each = function(selector, fn) { if (!document.querySelectorAll) return; var elements = document.querySelectorAll(selector); for (var i = 0; i < elements.length; i++) { fn(elements[i]); }; };
var AG_removeParent = function(el, fn) { while (el && el.parentNode) { if (fn(el)) { el.parentNode.removeChild(el); return; } el = el.parentNode; } };
var AG_removeCookie=function(a){var e=/./;/^\/.+\/$/.test(a)?e=new RegExp(a.slice(1,-1)):""!==a&&(e=new RegExp(a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")));a=function(){for(var a=document.cookie.split(";"),g=a.length;g--;){cookieStr=a[g];var d=cookieStr.indexOf("=");if(-1!==d&&(d=cookieStr.slice(0,d).trim(),e.test(d)))for(var h=document.location.hostname.split("."),f=0;f<h.length-1;f++){var b=h.slice(f).join(".");if(b){var c=d+"=",k="; domain="+b;b="; domain=."+b;document.cookie=c+"; expires=Thu, 01 Jan 1970 00:00:00 GMT";document.cookie=c+k+"; expires=Thu, 01 Jan 1970 00:00:00 GMT";document.cookie=c+b+"; expires=Thu, 01 Jan 1970 00:00:00 GMT";document.cookie=c+"; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";document.cookie=c+k+"; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";document.cookie=c+b+"; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"}}}};a();window.addEventListener("beforeunload",a)};
var AG_defineProperty=function(){var p,q=Object.defineProperty;if("function"==typeof WeakMap)p=WeakMap;else{var r=0,t=function(){this.a=(r+=Math.random()).toString()};t.prototype.set=function(a,b){var d=a[this.a];d&&d[0]===a?d[1]=b:q(a,this.a,{value:[a,b],writable:!0});return this};t.prototype.get=function(a){var b;return(b=a[this.a])&&b[0]===a?b[1]:void 0};t.prototype.has=function(a){var b=a[this.a];return b?b[0]===a:!1};p=t}function u(a){this.b=a;this.h=Object.create(null)}function v(a,b,d,e){this.a=a;this.i=b;this.c=d;this.f=e}function w(){this.g=/^([^\\\.]|\\.)*?\./;this.j=/\\(.)/g;this.a=new p}function x(a,b){var d=b.f;if(d&&!("beforeGet"in d||"beforeSet"in d))return z(d);var e={get:function(){var c=b.f;c&&c.beforeGet&&c.beforeGet.call(this,b.a.b);a:if(c=b.g)c=A(c)?c.value:c.get?c.get.call(this):void 0;else{c=b.a.b;if(b.i in c&&(c=B(c),null!==c)){var d=C.call(c,b.i);c=d?d.call(this):c[b.i];break a}c=void 0}(this===b.a.b||D.call(b.a.b,this))&&E(a,c,b.c);return c},set:function(c){if(this===b.a.b||D.call(b.a.b,this)){b.f&&b.f.beforeSet&&(c=b.f.beforeSet.call(this,c,this));var d=b.g;d&&A(d)&&d.value===c?c=!0:(d=F(b,c,this),G(c)&&(c=H(a,c),I(a,c,b.c)),c=d)}else c=F(b,c,this);return c}};d&&J(d,e,K);return e}function I(a,b,d){for(var e in d.h){var c=d.h[e];if(b.h[e]){var h=a,g=b.h[e],k=c;!k.f||g.f||"undefined"===typeof g.a.b||g.g||(g.g=z(k.f));g.c&&k.c&&g.c!==k.c&&I(h,g.c,k.c)}else{g=h=void 0;k=a;var f=b,l=c.i,m="undefined"!==typeof f.b,y=!1;m&&(g=L(f.b,l))&&!g.configurable&&(y=!0,h=f.b[l]);var n=y?H(k,h):new u(c.c.b);I(k,n,c.c);n=new v(f,l,n,c.f);f.h[l]=n;m&&(n.g=g,m=x(k,n),y?E(k,h,c.c):(q(f.b,l,m),g&&A(g)&&(M(m,g.value,f.b),E(k,g.value,c.c))))}}}function E(a,b,d){G(b)&&(b=H(a,b),I(a,b,d))}function F(a,b,d){var e=a.g;if(!e){e=B(a.a.b);if(null!==e&&(e=N.call(e,a.i)))return e.call(d,b);if(!O(a.a.b))return!1;a.g={value:b,configurable:!0,writable:!0,enumerable:!0};return!0}return M(e,b,d)}function H(a,b){var d=a.a.get(b);d||(d=new u(b),a.a.set(b,d));return d}function A(a){return"undefined"!==typeof a.writable}function J(a,b,d){for(var e=0,c=d.length;e<c;e++){var h=d[e];h in a&&(b[h]=a[h])}}function z(a){if(a){var b={};J(a,b,P);return b}}function M(a,b,d){if(A(a))return a.writable?(a.value=b,!0):!1;if(!a.set)return!1;a.set.call(d,b);return!0}var P="configurable enumerable value get set writable".split(" "),K=P.slice(0,2),L=Object.getOwnPropertyDescriptor,O=Object.isExtensible,B=Object.getPrototypeOf,D=Object.prototype.isPrototypeOf,C=Object.prototype.__lookupGetter__||function(a){return(a=Q(this,a))&&a.get?a.get:void 0},N=Object.prototype.__lookupSetter__||function(a){return(a=Q(this,a))&&a.set?a.set:void 0};function Q(a,b){if(b in a){for(;!w.hasOwnProperty.call(a,b);)a=B(a);return L(a,b)}}function G(a){var b=typeof a;return"function"===b||"object"===b&&null!==a?!0:!1}var R;return function(a,b,d){R||(R=new w);var e=R;d=d||window;var c=new u;a+=".";var h=c||new u;for(var g=e.g,k=e.j,f,l,m;a;){f=g.exec(a);if(null===f)throw 1;f=f[0].length;l=a.slice(0,f-1).replace(k,"$1");a=a.slice(f);(f=h.h[l])?m=f.c:(m=new u,f=new v(h,l,m),h.h[l]=f);h=m}if(!f)throw 1;a=f;a.f=b;E(e,d,c)};}();
var AG_abortOnPropertyWrite=function(a,b){var c=Math.random().toString(36).substr(2,8);AG_defineProperty(a,{beforeSet:function(){b&&console.warn("AdGuard aborted property write: "+a);throw new ReferenceError(c);}});var d=window.onerror;window.onerror=function(e){if("string"===typeof e&&-1!==e.indexOf(c))return b&&console.warn("AdGuard has caught window.onerror: "+a),!0;if(d instanceof Function)return d.apply(this,arguments)}};
var AG_abortOnPropertyRead=function(a,b){var c=Math.random().toString(36).substr(2,8);AG_defineProperty(a,{beforeGet:function(){b&&console.warn("AdGuard aborted property read: "+a);throw new ReferenceError(c);}});var d=window.onerror;window.onerror=function(e){if("string"===typeof e&&-1!==e.indexOf(c))return b&&console.warn("AdGuard has caught window.onerror: "+a),!0;if(d instanceof Function)return d.apply(this,arguments)}};
var AG_abortInlineScript=function(g,b,c){var d=function(){if("currentScript"in document)return document.currentScript;var a=document.getElementsByTagName("script");return a[a.length-1]},e=Math.random().toString(36).substr(2,8),h=d();AG_defineProperty(b,{beforeGet:function(){var a=d();if(a instanceof HTMLScriptElement&&a!==h&&""===a.src&&g.test(a.textContent))throw c&&console.warn("AdGuard aborted execution of an inline script"),new ReferenceError(e);}});var f=window.onerror;window.onerror=function(a){if("string"===typeof a&&-1!==a.indexOf(e))return c&&console.warn("AdGuard has caught window.onerror: "+b),!0;if(f instanceof Function)return f.apply(this,arguments)}};
var AG_setConstant=function(e,a){if("undefined"===a)a=void 0;else if("false"===a)a=!1;else if("true"===a)a=!0;else if("noopFunc"===a)a=function(){};else if("trueFunc"===a)a=function(){return!0};else if("falseFunc"===a)a=function(){return!1};else if(/^\d+$/.test(a)){if(a=parseFloat(a),isNaN(a)||32767<Math.abs(a))return}else return;var b=!1;AG_defineProperty(e,{get:function(){return a},set:function(c){if(b)var d=!0;else void 0!==c&&void 0!==a&&typeof c!==typeof a&&(b=!0),d=b;d&&(a=c)}})};
(function(source, args){function setConstant(source, property, value, stack) {if (!property || !matchStackTrace(stack, new Error().stack)) {return;}var emptyArr = noopArray();var emptyObj = noopObject();var constantValue;if (value === 'undefined') {constantValue = undefined;} else if (value === 'false') {constantValue = false;} else if (value === 'true') {constantValue = true;} else if (value === 'null') {constantValue = null;} else if (value === 'emptyArr') {constantValue = emptyArr;} else if (value === 'emptyObj') {constantValue = emptyObj;} else if (value === 'noopFunc') {constantValue = noopFunc;} else if (value === 'trueFunc') {constantValue = trueFunc;} else if (value === 'falseFunc') {constantValue = falseFunc;} else if (/^\d+$/.test(value)) {constantValue = parseFloat(value);if (nativeIsNaN(constantValue)) {return;}if (Math.abs(constantValue) > 0x7FFF) {return;}} else if (value === '-1') {constantValue = -1;} else if (value === '') {constantValue = '';} else {return;}var canceled = false;var mustCancel = function mustCancel(value) {if (canceled) {return canceled;}canceled = value !== undefined && constantValue !== undefined && typeof value !== typeof constantValue;return canceled;};var setChainPropAccess = function setChainPropAccess(owner, property) {var chainInfo = getPropertyInChain(owner, property);var base = chainInfo.base;var prop = chainInfo.prop,chain = chainInfo.chain;if (base instanceof Object === false && base === null) {if (source.verbose) {var props = property.split('.');var propIndex = props.indexOf(prop);var baseName = props[propIndex - 1];console.log("set-constant failed because the property '".concat(baseName, "' does not exist"));}return;}if (chain) {var setter = function setter(a) {base = a;if (a instanceof Object) {setChainPropAccess(a, chain);}};Object.defineProperty(owner, prop, {get: function get() {return base;},set: setter});return;}if (mustCancel(base[prop])) {return;}hit(source);setPropertyAccess(base, prop, {get: function get() {return constantValue;},set: function set(a) {if (mustCancel(a)) {constantValue = a;}}});};setChainPropAccess(window, property);}function hit(source, message) {if (source.verbose !== true) {return;}try {var log = console.log.bind(console);var trace = console.trace.bind(console);var prefix = source.ruleText || '';if (source.domainName) {var AG_SCRIPTLET_MARKER = '#%#//';var UBO_SCRIPTLET_MARKER = '##+js';var ruleStartIndex;if (source.ruleText.indexOf(AG_SCRIPTLET_MARKER) > -1) {ruleStartIndex = source.ruleText.indexOf(AG_SCRIPTLET_MARKER);} else if (source.ruleText.indexOf(UBO_SCRIPTLET_MARKER) > -1) {ruleStartIndex = source.ruleText.indexOf(UBO_SCRIPTLET_MARKER);}var rulePart = source.ruleText.slice(ruleStartIndex);prefix = "".concat(source.domainName).concat(rulePart);}var LOG_MARKER = 'log: ';if (message) {if (message.indexOf(LOG_MARKER) === -1) {log("".concat(prefix, " message:\n").concat(message));} else {log(message.slice(LOG_MARKER.length));}}log("".concat(prefix, " trace start"));if (trace) {trace();}log("".concat(prefix, " trace end"));} catch (e) {}if (typeof window.__debug === 'function') {window.__debug(source);}}function noopArray() {return [];}function noopObject() {return {};}function noopFunc() {}function trueFunc() {return true;}function falseFunc() {return false;}function getPropertyInChain(base, chain) {var pos = chain.indexOf('.');if (pos === -1) {return {base: base,prop: chain};}var prop = chain.slice(0, pos);if (base === null) {return {base: base,prop: prop,chain: chain};}var nextBase = base[prop];chain = chain.slice(pos + 1);if (nextBase !== undefined) {return getPropertyInChain(nextBase, chain);}Object.defineProperty(base, prop, {configurable: true});return {base: nextBase,prop: prop,chain: chain};}function setPropertyAccess(object, property, descriptor) {var currentDescriptor = Object.getOwnPropertyDescriptor(object, property);if (currentDescriptor && !currentDescriptor.configurable) {return false;}Object.defineProperty(object, property, descriptor);return true;}function toRegExp() {var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';var DEFAULT_VALUE = '.?';var FORWARD_SLASH = '/';if (input === '') {return new RegExp(DEFAULT_VALUE);}if (input[0] === FORWARD_SLASH && input[input.length - 1] === FORWARD_SLASH) {return new RegExp(input.slice(1, -1));}var escaped = input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');return new RegExp(escaped);}function matchStackTrace(stackMatch, stackTrace) {if (!stackMatch || stackMatch === '') {return true;}var stackRegexp = toRegExp(stackMatch);var refinedStackTrace = stackTrace.split('\n').slice(2).map(function (line) {return line.trim();}).join('\n');return stackRegexp.test(refinedStackTrace);}function nativeIsNaN(num) {var native = Number.isNaN || window.isNaN;return native(num);};const updatedArgs = args ? [].concat(source).concat(args) : [source];try {setConstant.apply(this, updatedArgs);} catch (e) {console.log(e);}})({name:"set-constant",engine:"corelibs",version:"1.8.274",verbose:true,ruleText:"youtubekids.com,youtube-nocookie.com,youtube.com#%#\/\/scriptlet('set-constant', 'ytInitialPlayerResponse.adPlacements', 'undefined')"},["ytInitialPlayerResponse.adPlacements","undefined",]);
(function(source, args){function setConstant(source, property, value, stack) {if (!property || !matchStackTrace(stack, new Error().stack)) {return;}var emptyArr = noopArray();var emptyObj = noopObject();var constantValue;if (value === 'undefined') {constantValue = undefined;} else if (value === 'false') {constantValue = false;} else if (value === 'true') {constantValue = true;} else if (value === 'null') {constantValue = null;} else if (value === 'emptyArr') {constantValue = emptyArr;} else if (value === 'emptyObj') {constantValue = emptyObj;} else if (value === 'noopFunc') {constantValue = noopFunc;} else if (value === 'trueFunc') {constantValue = trueFunc;} else if (value === 'falseFunc') {constantValue = falseFunc;} else if (/^\d+$/.test(value)) {constantValue = parseFloat(value);if (nativeIsNaN(constantValue)) {return;}if (Math.abs(constantValue) > 0x7FFF) {return;}} else if (value === '-1') {constantValue = -1;} else if (value === '') {constantValue = '';} else {return;}var canceled = false;var mustCancel = function mustCancel(value) {if (canceled) {return canceled;}canceled = value !== undefined && constantValue !== undefined && typeof value !== typeof constantValue;return canceled;};var setChainPropAccess = function setChainPropAccess(owner, property) {var chainInfo = getPropertyInChain(owner, property);var base = chainInfo.base;var prop = chainInfo.prop,chain = chainInfo.chain;if (base instanceof Object === false && base === null) {if (source.verbose) {var props = property.split('.');var propIndex = props.indexOf(prop);var baseName = props[propIndex - 1];console.log("set-constant failed because the property '".concat(baseName, "' does not exist"));}return;}if (chain) {var setter = function setter(a) {base = a;if (a instanceof Object) {setChainPropAccess(a, chain);}};Object.defineProperty(owner, prop, {get: function get() {return base;},set: setter});return;}if (mustCancel(base[prop])) {return;}hit(source);setPropertyAccess(base, prop, {get: function get() {return constantValue;},set: function set(a) {if (mustCancel(a)) {constantValue = a;}}});};setChainPropAccess(window, property);}function hit(source, message) {if (source.verbose !== true) {return;}try {var log = console.log.bind(console);var trace = console.trace.bind(console);var prefix = source.ruleText || '';if (source.domainName) {var AG_SCRIPTLET_MARKER = '#%#//';var UBO_SCRIPTLET_MARKER = '##+js';var ruleStartIndex;if (source.ruleText.indexOf(AG_SCRIPTLET_MARKER) > -1) {ruleStartIndex = source.ruleText.indexOf(AG_SCRIPTLET_MARKER);} else if (source.ruleText.indexOf(UBO_SCRIPTLET_MARKER) > -1) {ruleStartIndex = source.ruleText.indexOf(UBO_SCRIPTLET_MARKER);}var rulePart = source.ruleText.slice(ruleStartIndex);prefix = "".concat(source.domainName).concat(rulePart);}var LOG_MARKER = 'log: ';if (message) {if (message.indexOf(LOG_MARKER) === -1) {log("".concat(prefix, " message:\n").concat(message));} else {log(message.slice(LOG_MARKER.length));}}log("".concat(prefix, " trace start"));if (trace) {trace();}log("".concat(prefix, " trace end"));} catch (e) {}if (typeof window.__debug === 'function') {window.__debug(source);}}function noopArray() {return [];}function noopObject() {return {};}function noopFunc() {}function trueFunc() {return true;}function falseFunc() {return false;}function getPropertyInChain(base, chain) {var pos = chain.indexOf('.');if (pos === -1) {return {base: base,prop: chain};}var prop = chain.slice(0, pos);if (base === null) {return {base: base,prop: prop,chain: chain};}var nextBase = base[prop];chain = chain.slice(pos + 1);if (nextBase !== undefined) {return getPropertyInChain(nextBase, chain);}Object.defineProperty(base, prop, {configurable: true});return {base: nextBase,prop: prop,chain: chain};}function setPropertyAccess(object, property, descriptor) {var currentDescriptor = Object.getOwnPropertyDescriptor(object, property);if (currentDescriptor && !currentDescriptor.configurable) {return false;}Object.defineProperty(object, property, descriptor);return true;}function toRegExp() {var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';var DEFAULT_VALUE = '.?';var FORWARD_SLASH = '/';if (input === '') {return new RegExp(DEFAULT_VALUE);}if (input[0] === FORWARD_SLASH && input[input.length - 1] === FORWARD_SLASH) {return new RegExp(input.slice(1, -1));}var escaped = input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');return new RegExp(escaped);}function matchStackTrace(stackMatch, stackTrace) {if (!stackMatch || stackMatch === '') {return true;}var stackRegexp = toRegExp(stackMatch);var refinedStackTrace = stackTrace.split('\n').slice(2).map(function (line) {return line.trim();}).join('\n');return stackRegexp.test(refinedStackTrace);}function nativeIsNaN(num) {var native = Number.isNaN || window.isNaN;return native(num);};const updatedArgs = args ? [].concat(source).concat(args) : [source];try {setConstant.apply(this, updatedArgs);} catch (e) {console.log(e);}})({name:"set-constant",engine:"corelibs",version:"1.8.274",verbose:true,ruleText:"youtubekids.com,youtube-nocookie.com,youtube.com#%#\/\/scriptlet('set-constant', 'playerResponse.adPlacements', 'undefined')"},["playerResponse.adPlacements","undefined",]);
(function(source, args){function jsonPrune(source, propsToRemove, requiredInitialProps, stack) {if (!!stack && !matchStackTrace(stack, new Error().stack)) {return;}var log = console.log.bind(console);var prunePaths = propsToRemove !== undefined && propsToRemove !== '' ? propsToRemove.split(/ +/) : [];var requiredPaths = requiredInitialProps !== undefined && requiredInitialProps !== '' ? requiredInitialProps.split(/ +/) : [];function isPruningNeeded(root) {if (!root) {return false;}var shouldProcess;for (var i = 0; i < requiredPaths.length; i += 1) {var requiredPath = requiredPaths[i];var lastNestedPropName = requiredPath.split('.').pop();var hasWildcard = requiredPath.indexOf('.*.') > -1 || requiredPath.indexOf('*.') > -1 || requiredPath.indexOf('.*') > -1 || requiredPath.indexOf('.[].') > -1 || requiredPath.indexOf('[].') > -1 || requiredPath.indexOf('.[]') > -1;var details = getWildcardPropertyInChain(root, requiredPath, hasWildcard);shouldProcess = !hasWildcard;for (var _i = 0; _i < details.length; _i += 1) {if (hasWildcard) {shouldProcess = !(details[_i].base[lastNestedPropName] === undefined) || shouldProcess;} else {shouldProcess = !(details[_i].base[lastNestedPropName] === undefined) && shouldProcess;}}}return shouldProcess;}var jsonPruner = function jsonPruner(root) {if (prunePaths.length === 0) {log(window.location.hostname, root);return root;}try {if (isPruningNeeded(root) === false) {return root;}prunePaths.forEach(function (path) {var ownerObjArr = getWildcardPropertyInChain(root, path, true);ownerObjArr.forEach(function (ownerObj) {if (ownerObj !== undefined && ownerObj.base) {delete ownerObj.base[ownerObj.prop];hit(source);}});});} catch (e) {log(e.toString());}return root;};var nativeJSONParse = JSON.parse;var jsonParseWrapper = function jsonParseWrapper() {for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}var root = nativeJSONParse.apply(JSON, args);return jsonPruner(root);};jsonParseWrapper.toString = nativeJSONParse.toString.bind(nativeJSONParse);JSON.parse = jsonParseWrapper;var nativeResponseJson = Response.prototype.json;var responseJsonWrapper = function responseJsonWrapper() {var promise = nativeResponseJson.apply(this);return promise.then(function (obj) {return jsonPruner(obj);});};if (typeof Response === 'undefined') {return;}Response.prototype.json = responseJsonWrapper;}function hit(source, message) {if (source.verbose !== true) {return;}try {var log = console.log.bind(console);var trace = console.trace.bind(console);var prefix = source.ruleText || '';if (source.domainName) {var AG_SCRIPTLET_MARKER = '#%#//';var UBO_SCRIPTLET_MARKER = '##+js';var ruleStartIndex;if (source.ruleText.indexOf(AG_SCRIPTLET_MARKER) > -1) {ruleStartIndex = source.ruleText.indexOf(AG_SCRIPTLET_MARKER);} else if (source.ruleText.indexOf(UBO_SCRIPTLET_MARKER) > -1) {ruleStartIndex = source.ruleText.indexOf(UBO_SCRIPTLET_MARKER);}var rulePart = source.ruleText.slice(ruleStartIndex);prefix = "".concat(source.domainName).concat(rulePart);}var LOG_MARKER = 'log: ';if (message) {if (message.indexOf(LOG_MARKER) === -1) {log("".concat(prefix, " message:\n").concat(message));} else {log(message.slice(LOG_MARKER.length));}}log("".concat(prefix, " trace start"));if (trace) {trace();}log("".concat(prefix, " trace end"));} catch (e) {}if (typeof window.__debug === 'function') {window.__debug(source);}}function matchStackTrace(stackMatch, stackTrace) {if (!stackMatch || stackMatch === '') {return true;}var stackRegexp = toRegExp(stackMatch);var refinedStackTrace = stackTrace.split('\n').slice(2).map(function (line) {return line.trim();}).join('\n');return stackRegexp.test(refinedStackTrace);}function getWildcardPropertyInChain(base, chain) {var lookThrough = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;var output = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var pos = chain.indexOf('.');if (pos === -1) {if (chain === getWildcardSymbol() || chain === '[]') {for (var key in base) {if (Object.prototype.hasOwnProperty.call(base, key)) {output.push({base: base,prop: key});}}} else {output.push({base: base,prop: chain});}return output;}var prop = chain.slice(0, pos);var shouldLookThrough = prop === '[]' && Array.isArray(base) || prop === getWildcardSymbol() && base instanceof Object;if (shouldLookThrough) {var nextProp = chain.slice(pos + 1);var baseKeys = Object.keys(base);baseKeys.forEach(function (key) {var item = base[key];getWildcardPropertyInChain(item, nextProp, lookThrough, output);});}var nextBase = base[prop];chain = chain.slice(pos + 1);if (nextBase !== undefined) {getWildcardPropertyInChain(nextBase, chain, lookThrough, output);}return output;}function toRegExp() {var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';var DEFAULT_VALUE = '.?';var FORWARD_SLASH = '/';if (input === '') {return new RegExp(DEFAULT_VALUE);}if (input[0] === FORWARD_SLASH && input[input.length - 1] === FORWARD_SLASH) {return new RegExp(input.slice(1, -1));}var escaped = input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');return new RegExp(escaped);}function getWildcardSymbol() {return '*';};const updatedArgs = args ? [].concat(source).concat(args) : [source];try {jsonPrune.apply(this, updatedArgs);} catch (e) {console.log(e);}})({name:"json-prune",engine:"corelibs",version:"1.8.274",verbose:true,ruleText:"youtubekids.com,youtube-nocookie.com,youtube.com#%#\/\/scriptlet('json-prune', '0.playerResponse.adPlacements 0.playerResponse.playerAds playerResponse.adPlacements playerResponse.playerAds adPlacements playerAds')"},["0.playerResponse.adPlacements 0.playerResponse.playerAds playerResponse.adPlacements playerResponse.playerAds adPlacements playerAds",]);
(function(source, args){function setConstant(source, property, value, stack) {if (!property || !matchStackTrace(stack, new Error().stack)) {return;}var emptyArr = noopArray();var emptyObj = noopObject();var constantValue;if (value === 'undefined') {constantValue = undefined;} else if (value === 'false') {constantValue = false;} else if (value === 'true') {constantValue = true;} else if (value === 'null') {constantValue = null;} else if (value === 'emptyArr') {constantValue = emptyArr;} else if (value === 'emptyObj') {constantValue = emptyObj;} else if (value === 'noopFunc') {constantValue = noopFunc;} else if (value === 'trueFunc') {constantValue = trueFunc;} else if (value === 'falseFunc') {constantValue = falseFunc;} else if (/^\d+$/.test(value)) {constantValue = parseFloat(value);if (nativeIsNaN(constantValue)) {return;}if (Math.abs(constantValue) > 0x7FFF) {return;}} else if (value === '-1') {constantValue = -1;} else if (value === '') {constantValue = '';} else {return;}var canceled = false;var mustCancel = function mustCancel(value) {if (canceled) {return canceled;}canceled = value !== undefined && constantValue !== undefined && typeof value !== typeof constantValue;return canceled;};var setChainPropAccess = function setChainPropAccess(owner, property) {var chainInfo = getPropertyInChain(owner, property);var base = chainInfo.base;var prop = chainInfo.prop,chain = chainInfo.chain;if (base instanceof Object === false && base === null) {if (source.verbose) {var props = property.split('.');var propIndex = props.indexOf(prop);var baseName = props[propIndex - 1];console.log("set-constant failed because the property '".concat(baseName, "' does not exist"));}return;}if (chain) {var setter = function setter(a) {base = a;if (a instanceof Object) {setChainPropAccess(a, chain);}};Object.defineProperty(owner, prop, {get: function get() {return base;},set: setter});return;}if (mustCancel(base[prop])) {return;}hit(source);setPropertyAccess(base, prop, {get: function get() {return constantValue;},set: function set(a) {if (mustCancel(a)) {constantValue = a;}}});};setChainPropAccess(window, property);}function hit(source, message) {if (source.verbose !== true) {return;}try {var log = console.log.bind(console);var trace = console.trace.bind(console);var prefix = source.ruleText || '';if (source.domainName) {var AG_SCRIPTLET_MARKER = '#%#//';var UBO_SCRIPTLET_MARKER = '##+js';var ruleStartIndex;if (source.ruleText.indexOf(AG_SCRIPTLET_MARKER) > -1) {ruleStartIndex = source.ruleText.indexOf(AG_SCRIPTLET_MARKER);} else if (source.ruleText.indexOf(UBO_SCRIPTLET_MARKER) > -1) {ruleStartIndex = source.ruleText.indexOf(UBO_SCRIPTLET_MARKER);}var rulePart = source.ruleText.slice(ruleStartIndex);prefix = "".concat(source.domainName).concat(rulePart);}var LOG_MARKER = 'log: ';if (message) {if (message.indexOf(LOG_MARKER) === -1) {log("".concat(prefix, " message:\n").concat(message));} else {log(message.slice(LOG_MARKER.length));}}log("".concat(prefix, " trace start"));if (trace) {trace();}log("".concat(prefix, " trace end"));} catch (e) {}if (typeof window.__debug === 'function') {window.__debug(source);}}function noopArray() {return [];}function noopObject() {return {};}function noopFunc() {}function trueFunc() {return true;}function falseFunc() {return false;}function getPropertyInChain(base, chain) {var pos = chain.indexOf('.');if (pos === -1) {return {base: base,prop: chain};}var prop = chain.slice(0, pos);if (base === null) {return {base: base,prop: prop,chain: chain};}var nextBase = base[prop];chain = chain.slice(pos + 1);if (nextBase !== undefined) {return getPropertyInChain(nextBase, chain);}Object.defineProperty(base, prop, {configurable: true});return {base: nextBase,prop: prop,chain: chain};}function setPropertyAccess(object, property, descriptor) {var currentDescriptor = Object.getOwnPropertyDescriptor(object, property);if (currentDescriptor && !currentDescriptor.configurable) {return false;}Object.defineProperty(object, property, descriptor);return true;}function toRegExp() {var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';var DEFAULT_VALUE = '.?';var FORWARD_SLASH = '/';if (input === '') {return new RegExp(DEFAULT_VALUE);}if (input[0] === FORWARD_SLASH && input[input.length - 1] === FORWARD_SLASH) {return new RegExp(input.slice(1, -1));}var escaped = input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');return new RegExp(escaped);}function matchStackTrace(stackMatch, stackTrace) {if (!stackMatch || stackMatch === '') {return true;}var stackRegexp = toRegExp(stackMatch);var refinedStackTrace = stackTrace.split('\n').slice(2).map(function (line) {return line.trim();}).join('\n');return stackRegexp.test(refinedStackTrace);}function nativeIsNaN(num) {var native = Number.isNaN || window.isNaN;return native(num);};const updatedArgs = args ? [].concat(source).concat(args) : [source];try {setConstant.apply(this, updatedArgs);} catch (e) {console.log(e);}})({name:"set-constant",engine:"corelibs",version:"1.8.274",verbose:true,ruleText:"#%#\/\/scriptlet('set-constant', 'Document.prototype.interestCohort', 'undefined')"},["Document.prototype.interestCohort","undefined",]);
navigator.getBattery = undefined;
var _gaq = []; var _gat = { _getTracker: function() { return { _initData: function(){}, _trackPageview: function(){}, _trackEvent: function(){}, _setAllowLinker: function() {}, _setCustomVar: function() {} } }, _createTracker: function() { return this._getTracker(); }, _anonymizeIp: function() {} };
function urchinTracker() {};