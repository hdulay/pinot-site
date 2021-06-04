(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5118],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(r),m=a,b=g["".concat(s,".").concat(m)]||g[m]||u[m]||o;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7432:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],l={title:"Engineering SQL Support on Apache Pinot at Uber",author:"Uber",author_title:"Uber Data Team",author_url:"https://eng.uber.com/category/articles/uberdata/",author_image_url:"https://pbs.twimg.com/profile_images/1192909783856103427/6A4s8gW2_400x400.png",description:"Talks about solution that linked Presto, a query engine that supports full ANSI SQL, and Pinot, a real-time OLAP (online analytical processing) datastore.",keywords:["Pinot","Pinot SQL","Pinot Presto","Uber Data","User-Facing Analytics","Real-time data platform"],tags:["Pinot","Uber","real-time data platform","Realtime","Analytics","User-Facing Analytics","Presto","SQL"]},s={permalink:"/blog/2020/01/15/Pinot-Presto-SQL",editUrl:"https://github.com/apache/incubator-pinot-site/edit/dev/website/blog/2020-01-15-Pinot-Presto-SQL.md",source:"@site/blog/2020-01-15-Pinot-Presto-SQL.md",title:"Engineering SQL Support on Apache Pinot at Uber",description:"Talks about solution that linked Presto, a query engine that supports full ANSI SQL, and Pinot, a real-time OLAP (online analytical processing) datastore.",date:"2020-01-15T00:00:00.000Z",formattedDate:"January 15, 2020",tags:[{label:"Pinot",permalink:"/blog/tags/pinot"},{label:"Uber",permalink:"/blog/tags/uber"},{label:"real-time data platform",permalink:"/blog/tags/real-time-data-platform"},{label:"Realtime",permalink:"/blog/tags/realtime"},{label:"Analytics",permalink:"/blog/tags/analytics"},{label:"User-Facing Analytics",permalink:"/blog/tags/user-facing-analytics"},{label:"Presto",permalink:"/blog/tags/presto"},{label:"SQL",permalink:"/blog/tags/sql"}],readingTime:.42,truncated:!1,prevItem:{title:"Operating Apache Pinot at Uber Scale",permalink:"/blog/2020/10/20/Uber-Operating"},nextItem:{title:"Engineering Restaurant Manager - UberEATS Analytics Dashboard",permalink:"/blog/2017/09/17/Restaurant-Manager"}},p=[],c={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Uber leverages real-time analytics on aggregate data to improve the user experience across our products, from fighting fraudulent behavior on Uber Eats to forecasting demand on our platform."),(0,o.kt)("p",null,"To resolve these issues, we built a solution that linked Presto, a query engine that supports full ANSI SQL, and Pinot, a real-time OLAP (online analytical processing) datastore. This married solution allows users to write ad-hoc SQL queries, empowering teams to unlock significant analysis capabilities."),(0,o.kt)("p",null,"Read More at ",(0,o.kt)("a",{parentName:"p",href:"https://eng.uber.com/engineering-sql-support-on-apache-pinot/"},"https://eng.uber.com/engineering-sql-support-on-apache-pinot/")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://1fykyq3mdn5r21tpna3wkdyi-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/Header-SQL-768x329.png",alt:"SQL Support on Apache Pinot at Uber"})))}u.isMDXComponent=!0}}]);