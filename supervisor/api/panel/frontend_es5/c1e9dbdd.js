"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[8226],{98226:function(e,r,t){t.r(r),t.d(r,{REDIRECTS:function(){return x}});var n,i,o,s=t(54211),a=t(37500),c=t(63550),l=t(83849),u=t(15493);t(48811);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function d(e,r){return T(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,i,o=[],s=!0,a=!1;try{for(t=t.call(e);!(s=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);s=!0);}catch(c){a=!0,i=c}finally{try{s||null==t.return||t.return()}finally{if(a)throw i}}return o}(e,r)||S(e,r)||C()}function p(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}function h(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function y(e,r){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e},y(e,r)}function v(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=R(e);if(r){var i=R(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return b(this,t)}}function b(e,r){if(r&&("object"===f(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return k(e)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(){w=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,r){["method","field"].forEach((function(t){r.forEach((function(r){r.kind===t&&"own"===r.placement&&this.defineClassElement(e,r)}),this)}),this)},initializeClassElements:function(e,r){var t=e.prototype;["method","field"].forEach((function(n){r.forEach((function(r){var i=r.placement;if(r.kind===n&&("static"===i||"prototype"===i)){var o="static"===i?e:t;this.defineClassElement(o,r)}}),this)}),this)},defineClassElement:function(e,r){var t=r.descriptor;if("field"===r.kind){var n=r.initializer;t={enumerable:t.enumerable,writable:t.writable,configurable:t.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,r.key,t)},decorateClass:function(e,r){var t=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!_(e))return t.push(e);var r=this.decorateElement(e,i);t.push(r.element),t.push.apply(t,r.extras),n.push.apply(n,r.finishers)}),this),!r)return{elements:t,finishers:n};var o=this.decorateConstructor(t,r);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,r,t){var n=r[e.placement];if(!t&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,r){for(var t=[],n=[],i=e.decorators,o=i.length-1;o>=0;o--){var s=r[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,i[o])(a)||a);e=c.element,this.addElementPlacement(e,r),c.finisher&&n.push(c.finisher);var l=c.extras;if(l){for(var u=0;u<l.length;u++)this.addElementPlacement(l[u],r);t.push.apply(t,l)}}return{element:e,finishers:n,extras:t}},decorateConstructor:function(e,r){for(var t=[],n=r.length-1;n>=0;n--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,r[n])(i)||i);if(void 0!==o.finisher&&t.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:t}},fromElementDescriptor:function(e){var r={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(r.initializer=e.initializer),r},toElementDescriptors:function(e){var r;if(void 0!==e)return(r=e,T(r)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||S(r)||C()).map((function(e){var r=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),r}),this)},toElementDescriptor:function(e){var r=String(e.kind);if("method"!==r&&"field"!==r)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+r+'"');var t=j(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:r,key:t,placement:n,descriptor:Object.assign({},i)};return"field"!==r?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:O(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var r={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),r},toClassDescriptor:function(e){var r=String(e.kind);if("class"!==r)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+r+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var t=O(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:t}},runClassFinishers:function(e,r){for(var t=0;t<r.length;t++){var n=(0,r[t])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,r,t){if(void 0!==e[r])throw new TypeError(t+" can't have a ."+r+" property.")}};return e}function g(e){var r,t=j(e.key);"method"===e.kind?r={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?r={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?r={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(r={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:t,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:r};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function E(e,r){void 0!==e.descriptor.get?r.descriptor.get=e.descriptor.get:r.descriptor.set=e.descriptor.set}function _(e){return e.decorators&&e.decorators.length}function P(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function O(e,r){var t=e[r];if(void 0!==t&&"function"!=typeof t)throw new TypeError("Expected '"+r+"' to be a function");return t}function j(e){var r=function(e,r){if("object"!==f(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"===f(r)?r:String(r)}function C(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function S(e,r){if(e){if("string"==typeof e)return D(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?D(e,r):void 0}}function D(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function T(e){if(Array.isArray(e))return e}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,r,t){var n=z(e,r);if(n){var i=Object.getOwnPropertyDescriptor(n,r);return i.get?i.get.call(arguments.length<3?e:t):i.value}},A.apply(this,arguments)}function z(e,r){for(;!Object.prototype.hasOwnProperty.call(e,r)&&null!==(e=R(e)););return e}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var x={supervisor:{redirect:"/hassio/dashboard"},supervisor_logs:{redirect:"/hassio/system"},supervisor_info:{redirect:"/hassio/system"},supervisor_snapshots:{redirect:"/hassio/backups"},supervisor_backups:{redirect:"/hassio/backups"},supervisor_store:{redirect:"/hassio/store"},supervisor_addons:{redirect:"/hassio/dashboard"},supervisor_addon:{redirect:"/hassio/addon",params:{addon:"string"},optional_params:{repository_url:"url"}},supervisor_ingress:{redirect:"/hassio/ingress",params:{addon:"string"}},supervisor_add_addon_repository:{redirect:"/hassio/store",params:{repository_url:"url"}}};!function(e,r,t,n){var i=w();if(n)for(var o=0;o<n.length;o++)i=n[o](i);var s=r((function(e){i.initializeInstanceElements(e,a.elements)}),t),a=i.decorateClass(function(e){for(var r=[],t=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var i,o=e[n];if("method"===o.kind&&(i=r.find(t)))if(P(o.descriptor)||P(i.descriptor)){if(_(o)||_(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(_(o)){if(_(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}E(o,i)}else r.push(o)}return r}(s.d.map(g)),e);i.initializeClassElements(s.F,a.elements),i.runClassFinishers(s.F,a.finishers)}([(0,c.Mo)("hassio-my-redirect")],(function(e,r){var t=function(r){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&y(e,r)}(s,r);var t,n,i,o=v(s);function s(){var r;m(this,s);for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return r=o.call.apply(o,[this].concat(n)),e(k(r)),r}return t=s,n&&h(t.prototype,n),i&&h(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}(r);return{F:t,d:[{kind:"field",decorators:[(0,c.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,c.Cb)({attribute:!1})],key:"supervisor",value:void 0},{kind:"field",decorators:[(0,c.Cb)({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[(0,c.SB)()],key:"_error",value:void 0},{kind:"method",key:"connectedCallback",value:function(){A(R(t.prototype),"connectedCallback",this).call(this);var e=this.route.path.substr(1),r=x[e];if(r){var i;try{i=this._createRedirectUrl(r)}catch(o){return void(this._error=this.supervisor.localize("my.error"))}(0,l.c)(i,{replace:!0})}else this._error=this.supervisor.localize("my.not_supported","link",(0,a.dy)(n||(n=p(['<a\n          target="_blank"\n          rel="noreferrer noopener"\n          href="https://my.home-assistant.io/faq.html#supported-pages"\n        >\n          ',"\n        </a>"])),this.supervisor.localize("my.faq_link")))}},{kind:"method",key:"render",value:function(){return this._error?(0,a.dy)(i||(i=p(["<hass-error-screen\n        .error=","\n      ></hass-error-screen>"])),this._error):(0,a.dy)(o||(o=p([""])))}},{kind:"method",key:"_createRedirectUrl",value:function(e){var r=this._createRedirectParams(e);return"".concat(e.redirect).concat(r)}},{kind:"method",key:"_createRedirectParams",value:function(e){var r=this,t=(0,u.Q2)();if(!e.params&&!Object.keys(t).length)return"";var n={};return Object.entries(e.params||{}).forEach((function(e){var i=d(e,2),o=i[0],s=i[1];if(!t[o]||!r._checkParamType(s,t[o]))throw Error();n[o]=t[o]})),Object.entries(e.optional_params||{}).forEach((function(e){var i=d(e,2),o=i[0],s=i[1];if(t[o]){if(!r._checkParamType(s,t[o]))throw Error();n[o]=t[o]}})),"?".concat((0,u.ou)(n))}},{kind:"method",key:"_checkParamType",value:function(e,r){return"string"===e||"url"===e&&(r&&r===(0,s.N)(r))}}]}}),a.oi)},54211:function(e,r){r.N=void 0;var t=/^([^\w]*)(javascript|data|vbscript)/im,n=/&#(\w+)(^\w|;)?/g,i=/&(newline|tab);/gi,o=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,s=/^.+(:|&colon;)/gim,a=[".","/"];r.N=function(e){var r,c=(r=e||"",r.replace(n,(function(e,r){return String.fromCharCode(r)}))).replace(i,"").replace(o,"").trim();if(!c)return"about:blank";if(function(e){return a.indexOf(e[0])>-1}(c))return c;var l=c.match(s);if(!l)return c;var u=l[0];return t.test(u)?"about:blank":c}}}]);