"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[909],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,g=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7954:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),i=["components"],l={title:"Building a culture around metrics and anomaly detection",author:"Kenny Bastani",author_title:"Kenny Bastani",author_url:"https://medium.com/apache-pinot-developer-blog",author_image_url:"https://pinot.apache.org/authors/pinot_team.jpg",description:"ThirdEye as a system is a platform that allows you to integrate your metrics (quantitative information) with events (knowledge or qualitative information) and combine the two so you can distinguish between meaningless anomalies and those ones that matter.",keywords:["Pinot","LinkedIn","User-Facing Analytics","Anomaly detection","Real-time data platform"],tags:["Pinot","DevBlog","ThirdEye","real-time data platform","Realtime","Analytics","User-Facing Analytics"]},c=void 0,s={permalink:"/blog/2020/07/28/DevBlog-AnomalyDetection",editUrl:"https://github.com/apache/pinot-site/edit/dev/website/blog/2020-07-28-DevBlog-AnomalyDetection.md",source:"@site/blog/2020-07-28-DevBlog-AnomalyDetection.md",title:"Building a culture around metrics and anomaly detection",description:"ThirdEye as a system is a platform that allows you to integrate your metrics (quantitative information) with events (knowledge or qualitative information) and combine the two so you can distinguish between meaningless anomalies and those ones that matter.",date:"2020-07-28T00:00:00.000Z",formattedDate:"July 28, 2020",tags:[{label:"Pinot",permalink:"/blog/tags/pinot"},{label:"DevBlog",permalink:"/blog/tags/dev-blog"},{label:"ThirdEye",permalink:"/blog/tags/third-eye"},{label:"real-time data platform",permalink:"/blog/tags/real-time-data-platform"},{label:"Realtime",permalink:"/blog/tags/realtime"},{label:"Analytics",permalink:"/blog/tags/analytics"},{label:"User-Facing Analytics",permalink:"/blog/tags/user-facing-analytics"}],readingTime:.475,truncated:!1,prevItem:{title:"Utilize UDFs to Supercharge Queries in Apache Pinot",permalink:"/blog/2020/08/08/DevBlog-ScalarUDFs"},nextItem:{title:"Moving developers up the stack with Apache Pinot",permalink:"/blog/2020/07/28/DevBlog-DevUpStack"}},u=[],m={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Anomaly detection is a very broad term. Usually it means that you want to see if things are running as usual. This could go from your business metrics down to the lowest level of how your systems are running. Anomaly detection is an entire process. It\u2019s not just a tool that you get out of the box that measures time series data. Similar to DevOps, anomaly detection is a culture of different roles engaging in a process that combines tooling with human analysis."),(0,o.kt)("p",null,"Read More at ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/apache-pinot-developer-blog/building-a-culture-around-metrics-and-anomaly-detection-da740960fcc2"},"https://medium.com/apache-pinot-developer-blog/building-a-culture-around-metrics-and-anomaly-detection-da740960fcc2")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/0*xYm2ZURZVpyJ1JQ5",alt:"Building a culture around metrics and anomaly detection"})))}p.isMDXComponent=!0}}]);