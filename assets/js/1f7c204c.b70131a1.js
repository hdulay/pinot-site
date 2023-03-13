/*! For license information please see 1f7c204c.b70131a1.js.LICENSE.txt */
(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7745],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[f]="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2511:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(3366),o=n(7294),i=n(3727),a=n(9962),u=n(2735),c=n(6136),s=(0,o.createContext)({collectLink:function(){}}),l=function(){return(0,o.useContext)(s)},f=n(9524),p=n(3905),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"],m=function(e){return e.startsWith("/")};var v=function(e){var t,n,s=e.isNavLink,v=e.to,b=e.href,h=e.activeClassName,y=e.isActive,g=e["data-noBrokenLinkCheck"],O=e.autoAddBaseUrl,w=void 0===O||O,j=(0,r.Z)(e,d),P=(0,a.Z)().siteConfig.trailingSlash,k=(0,f.C)().withBaseUrl,C=l(),E=v||b,_=(0,u.Z)(E),N=null==E?void 0:E.replace("pathname://",""),x=void 0!==N?(n=N,w&&m(n)?k(n):n):void 0;x&&_&&(x=(0,p.applyTrailingSlash)(x,P));var Z,T=(0,o.useRef)(!1),S=s?i.OL:i.rU,D=c.Z.canUseIntersectionObserver;(0,o.useEffect)((function(){return!D&&_&&null!=x&&window.docusaurus.prefetch(x),function(){D&&Z&&Z.disconnect()}}),[x,D,_]);var M=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,U=!x||!_||M;return x&&_&&!M&&!g&&C.collectLink(x),U?o.createElement("a",Object.assign({href:x},E&&!_&&{target:"_blank",rel:"noopener noreferrer"},j)):o.createElement(S,Object.assign({},j,{onMouseEnter:function(){T.current||null==x||(window.docusaurus.preload(x),T.current=!0)},innerRef:function(e){var t,n;D&&e&&_&&(t=e,n=function(){null!=x&&window.docusaurus.prefetch(x)},(Z=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(Z.unobserve(t),Z.disconnect(),n())}))}))).observe(t))},to:x||""},s&&{isActive:y,activeClassName:h}))}},2735:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{Z:function(){return o},b:function(){return r}})},9524:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return a}});var r=n(9962),o=n(2735);function i(){var e=(0,r.Z)().siteConfig,t=void 0===e?{}:e,n=t.baseUrl,i=void 0===n?"/":n,a=t.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,u=void 0!==a&&a,c=i.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(u)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(a,i,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},4136:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;var n,r=e.split(/[#?]/)[0],o="/"===r?"/":t?(n=r).endsWith("/")?n:n+"/":function(e){return e.endsWith("/")?e.slice(0,-1):e}(r);return e.replace(r,o)}},3905:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=n(4136);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(o).default}});var i=n(3509);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},3509:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},9342:function(e,t,n){"use strict";var r=n(7294),o=n(2511),i=n(4184),a=n.n(i);t.Z=function(e){var t=e.children,n=e.className,i=e.badge,u=e.icon,c=e.size,s=e.target,l=e.to,f=a()("jump-to","jump-to--"+c,n),p=r.createElement("div",{className:"jump-to--inner"},r.createElement("div",{className:"jump-to--inner-2"},r.createElement("div",{className:"jump-to--main"},i?r.createElement("span",{className:"badge badge--primary badge--right"},i):"",t),r.createElement("div",{className:"jump-to--right"},r.createElement("i",{className:"feather icon-"+(u||"chevron-right")+" arrow"}))));return s?r.createElement("a",{href:l,target:s,className:f},p):r.createElement(o.Z,{to:l,className:f},p)}},2241:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(4137)),a=n(9342),u=["components"],c={title:"Components",description:"Components",sidebar_label:"hidden",hide_pagination:!0,draft:!0},s=void 0,l={unversionedId:"components",id:"components",isDocsHomePage:!1,title:"Components",description:"Components",source:"@site/docs/components.md",sourceDirName:".",slug:"/components",permalink:"/docs/components",editUrl:"https://github.com/apache/pinot/edit/master/website/docs/components.md",version:"current",frontMatter:{title:"Components",description:"Components",sidebar_label:"hidden",hide_pagination:!0,draft:!0}},f=[],p={toc:f},d="wrapper";function m(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Provide basic foundation of Pinot."),(0,i.kt)(a.Z,{to:"/docs/about/what_is_pinot/",mdxType:"Jump"},"What is Pinot?"),(0,i.kt)(a.Z,{to:"/docs/about/features_of_pinot/",mdxType:"Jump"},"Features of Pinot"),(0,i.kt)(a.Z,{to:"/docs/about/guarantees/",mdxType:"Jump"},"Who is using Pinot?"))}m.isMDXComponent=!0},4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var u in n)r.call(n,u)&&n[u]&&e.push(u);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}}]);