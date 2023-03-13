"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3031],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,d=u["".concat(s,".").concat(m)]||u[m]||g[m]||r;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6435:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(7462),i=n(3366),r=(n(7294),n(4137)),o=["components"],l={title:"Text analytics on LinkedIn Talent Insights using Apache Pinot",author:"LinkedIn",author_title:"LinkedIn Engineering Team",author_url:"https://engineering.linkedin.com/blog/topic/pinot",author_image_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/512px-Linkedin_icon.svg.png",description:"Introduction LinkedIn Talent Insights (LTI) is a platform that helps organizations understand the external labor market and their internal workforce, and enables the long term success of their employees",keywords:["Pinot","Text analytics","Text index","User-Facing Analytics","Real-time data platform"],tags:["Pinot","LinkedIn","Data","Text analytics","real-time data platform","Realtime","ThirdEye","Analytics","User-Facing Analytics"]},s=void 0,c={permalink:"/blog/2021/06/16/LinkedIn-TextAnalytics",editUrl:"https://github.com/apache/pinot-site/edit/dev/website/blog/2021-06-16-LinkedIn-TextAnalytics.md",source:"@site/blog/2021-06-16-LinkedIn-TextAnalytics.md",title:"Text analytics on LinkedIn Talent Insights using Apache Pinot",description:"Introduction LinkedIn Talent Insights (LTI) is a platform that helps organizations understand the external labor market and their internal workforce, and enables the long term success of their employees",date:"2021-06-16T00:00:00.000Z",formattedDate:"June 16, 2021",tags:[{label:"Pinot",permalink:"/blog/tags/pinot"},{label:"LinkedIn",permalink:"/blog/tags/linked-in"},{label:"Data",permalink:"/blog/tags/data"},{label:"Text analytics",permalink:"/blog/tags/text-analytics"},{label:"real-time data platform",permalink:"/blog/tags/real-time-data-platform"},{label:"Realtime",permalink:"/blog/tags/realtime"},{label:"ThirdEye",permalink:"/blog/tags/third-eye"},{label:"Analytics",permalink:"/blog/tags/analytics"},{label:"User-Facing Analytics",permalink:"/blog/tags/user-facing-analytics"}],readingTime:.32,truncated:!1,prevItem:{title:"Announcing Apache Pinot 0.10",permalink:"/blog/2022/04/04/Announcing-Apache-Pinot-0-10"},nextItem:{title:"Introduction to Geospatial Queries in Apache Pinot",permalink:"/blog/2021/06/13/DevBlog-Geospatial"}},p=[],u={toc:p},g="wrapper";function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)(g,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"LinkedIn Talent Insights (LTI) is a platform that helps organizations understand the external labor market and their internal workforce, and enables the long term success of their employees. Users of LTI have the flexibility to construct searches using the various facets of the LinkedIn Economic Graph (skills, titles, location, company, etc.)."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://engineering.linkedin.com/blog/2021/text-analytics-on-linkedin-talent-insights-using-apache-pinot"},"Read More at https://engineering.linkedin.com/blog/2021/text-analytics-on-linkedin-talent-insights-using-apache-pinot")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://content.linkedin.com/content/dam/engineering/site-assets/images/blog/posts/2021/06/ltipinot6.png",alt:"Text analytics on LinkedIn Talent Insights using Apache Pinot"})))}m.isMDXComponent=!0}}]);