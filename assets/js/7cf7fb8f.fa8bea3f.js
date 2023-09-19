"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6442],{4137:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=o,m=u["".concat(s,".").concat(d)]||u[d]||h[d]||i;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},511:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var n=a(7462),o=a(3366),i=(a(7294),a(4137)),r=["components"],l={title:"Announcing Apache Pinot 1.0\u2122",author:"Hubert Dulay",author_title:"Hubert Dulay, Mayank Shrivastava, Neha Pawar",author_url:"https://pinot.apache.org/",author_image_url:"https://pinot.apache.org/authors/pinot_team.jpg",description:"Introducing Apache Pinot 1.0 Release",keywords:["Apache Pinot","Apache Pinot 1.0","joins","upsert","clp compression","null support","pluggable index","spark integration"],tags:["Pinot","Data","Analytics","User-Facing Analytics","joins","compression","null support","pluggable index","spark integration"]},s="Announcing Apache Pinot 1.0\u2122",p={permalink:"/blog/2023/09/19/Annoucing-Apache-Pinot-1-0",editUrl:"https://github.com/apache/pinot-site/edit/dev/website/blog/2023-09-19-Annoucing-Apache-Pinot-1-0.md",source:"@site/blog/2023-09-19-Annoucing-Apache-Pinot-1-0.md",title:"Announcing Apache Pinot 1.0\u2122",description:"Introducing Apache Pinot 1.0 Release",date:"2023-09-19T00:00:00.000Z",formattedDate:"September 19, 2023",tags:[{label:"Pinot",permalink:"/blog/tags/pinot"},{label:"Data",permalink:"/blog/tags/data"},{label:"Analytics",permalink:"/blog/tags/analytics"},{label:"User-Facing Analytics",permalink:"/blog/tags/user-facing-analytics"},{label:"joins",permalink:"/blog/tags/joins"},{label:"compression",permalink:"/blog/tags/compression"},{label:"null support",permalink:"/blog/tags/null-support"},{label:"pluggable index",permalink:"/blog/tags/pluggable-index"},{label:"spark integration",permalink:"/blog/tags/spark-integration"}],readingTime:12.235,truncated:!1,nextItem:{title:"Geospatial Indexing in Apache Pinot",permalink:"/blog/2023/05/11/Geospatial-Indexing-in-Apache-Pinot"}},c=[{value:"What Makes a \u201c1.0 Release?\u201d",id:"what-makes-a-10-release",children:[]},{value:"Join Support",id:"join-support",children:[]},{value:"Upsert Improvements",id:"upsert-improvements",children:[{value:"Segment Compaction for Upsert Tables",id:"segment-compaction-for-upsert-tables",children:[]},{value:"DELETE Support for Upsert Tables",id:"delete-support-for-upsert-tables",children:[]}]},{value:"NULL Value Support",id:"null-value-support",children:[{value:"Aggregations",id:"aggregations",children:[]},{value:"Group By",id:"group-by",children:[]},{value:"Sorting",id:"sorting",children:[]}]},{value:"Index Pluggability",id:"index-pluggability",children:[]},{value:"Apache Pinot Spark 3 Connector and Passing Pinot Options",id:"apache-pinot-spark-3-connector-and-passing-pinot-options",children:[]},{value:"Petabyte-Scale Log Storage and Search in Pinot with CLP",id:"petabyte-scale-log-storage-and-search-in-pinot-with-clp",children:[]},{value:"Summary",id:"summary",children:[]},{value:"Resources",id:"resources",children:[]}],u={toc:c},h="wrapper";function d(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)(h,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"By: Hubert Dulay,  Mayank Shrivastava, Neha Pawar"),(0,i.kt)("h2",{id:"what-makes-a-10-release"},"What Makes a \u201c1.0 Release?\u201d"),(0,i.kt)("p",null,"Apache Pinot has continuously evolved since the project\u2019s inception within LinkedIn in 2013. Back then it was developed at a single company with a single use case in mind: to power \u201cwho viewed my profile?\u201d Over the ensuing decade the Apache Pinot community expanded to be embraced by many other organizations, and those organizations have expanded its capabilities to address new use cases. Apache Pinot in 2023 is continuously evolving to address emerging needs in the real-time analytics community. Let\u2019s look at how much innovation has gone into Apache Pinot over the years:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Upserts \u2014 data-in-motion tends to stay in motion, and one of the cornerstone capabilities of Apache Pinot is upsert support to handle upsert mutations in real-time."),(0,i.kt)("li",{parentName:"ul"},"Query-time Native JOINs \u2014 it was important to get this right, so that they were performant and scalable, allowing high QPS. This we will discuss in more detail below."),(0,i.kt)("li",{parentName:"ul"},"Pluggable architecture \u2014 a broad user base requires the ability to extend the database with new customizable index types, routing strategies and storage options"),(0,i.kt)("li",{parentName:"ul"},"Handling Semi-Structured/Unstructured Data \u2014 Pinot can easily index JSON and text data types at scale."),(0,i.kt)("li",{parentName:"ul"},"Improving ANSI SQL Compliance \u2014 to that end, we\u2019ve added better NULL handling, window functions, and as stated above, the capability for native JOINs.")),(0,i.kt)("p",null,"With all of these features and capabilities, Apache Pinot moves farther and farther from mere database status, and becomes more of a complete platform that can tackle entire new classes of use cases that were beyond its capabilities in earlier days."),(0,i.kt)("p",null,"First let\u2019s look at what Apache Pinot 1.0 itself is delivering. The first foundational pillar of what makes something worthy of a \u201c1.0\u201d release is software quality. Over the past year, since September 2022, engineers across the Apache Pinot community have closed over 300 issues to provide new features, optimize performance, expand test coverage, and squash bugs."),(0,i.kt)("p",null,"Features are also a key thing that makes a new release worthy of \u201c1.0\u201d status. The most critical part of the 1.0 release is undoubtedly the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pinot.apache.org/developers/advanced/v2-multi-stage-query-engine"},"Multi-Stage Query Engine"),", which permits Apache Pinot users to do ",(0,i.kt)("a",{parentName:"p",href:"https://startree.ai/blog/apache-pinot-native-join-support"},"performant and scalable query-time JOINs"),"."),(0,i.kt)("p",null,"The original engine works very well for simpler filter-and-aggregate queries, but the broker could become a bottleneck for more complex queries. The new engine also resolves this by introducing intermediary compute stages on the query servers, and brings Apache Pinot closer to full ANSI SQL semantics. While this query engine has been available within Apache Pinot already (since release 0.11.0), with the release of Apache Pinot 1.0 this feature is functionally complete."),(0,i.kt)("p",null,"(While you can read more below, check out the accompanying blog by Apache Pinot PMC Neha Pawar about using query-time JOINs ",(0,i.kt)("a",{parentName:"p",href:"https://startree.ai/blog/query-time-joins-in-apache-pinot-1-0"},"here"),")."),(0,i.kt)("p",null,"This post is a summary of the high points, but you can find a full list of everything included in the release notes.  And if you\u2019d like a ",(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/2cwRHM4J7kI?si=hEtl6W2eNlMkWqag"},"video treatment of many of the main features in 1.0"),", including some helpful animations, watch here:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=2cwRHM4J7kI&ab_channel=StarTree"},(0,i.kt)("img",{parentName:"a",src:"https://i3.ytimg.com/vi/2cwRHM4J7kI/maxresdefault.jpg",alt:"Watch the video"}))),(0,i.kt)("p",null,"Otherwise, let\u2019s have a look at some of the highlighted changes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Join Support - Part of the Multi-Stage Query Engine "),(0,i.kt)("li",{parentName:"ul"},"Improved Upserts - Deletion and Compaction Support"),(0,i.kt)("li",{parentName:"ul"},"Encode User-Specified Compressed Log Processor (CLP) During Ingestion"),(0,i.kt)("li",{parentName:"ul"},"NULL Support"),(0,i.kt)("li",{parentName:"ul"},"Pluggable Index Types ","[Index Service Provider Interface (SPI)]"),(0,i.kt)("li",{parentName:"ul"},"Improved Pinot-Spark Integration - Spark3 Compatibility")),(0,i.kt)("h2",{id:"join-support"},"Join Support"),(0,i.kt)("p",null,"Apache Pinot 1.0 introduces native query-time JOIN support equipping Pinot to handle a broad spectrum of JOIN scenarios providing full coverage from user-facing analytics all the way up to ad hoc analytics. Underpinning this innovation is the multi-stage query engine, introduced a year ago, which efficiently manages complex analytical queries, including JOIN operations. This engine alleviates computational burdens by offloading tasks from brokers to a dedicated intermediate compute stage. Additionally, a new planner supporting full SQL semantics enhances Pinot's analytical capabilities."),(0,i.kt)("p",null,"JOIN optimization strategies play a pivotal role in Apache Pinot 1.0. These include predicate push-down to individual tables and using indexing and pruning to reduce scanning which speeds up query processing, smart data layout considerations to minimize data shuffling, and query hints for fine-tuning JOIN operations. With support for all JOIN types and three JOIN algorithms, including broadcast join, shuffle distributed hash join, and lookup join, Apache Pinot delivers versatility and scalability. By significantly reducing query latency and simplifying architecture, Apache Pinot 1.0 is a game-changer for real-time OLAP systems. "),(0,i.kt)("p",null,"For more detailed information on JOINs, please visit this blog ",(0,i.kt)("a",{parentName:"p",href:"https://startree.ai/blog/query-time-joins-in-apache-pinot-1-0"},"post"),"."),(0,i.kt)("p",null,"Discover How Uber is using Joins in Apache Pinot\nFor a real-world use case, Uber is already using the new join capabilities of Apache Pinot at scale in production. You can watch this video to learn more."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/embed/z4Chhref1BM?si=eCOfxuw8Y_ZP8ZHN"},(0,i.kt)("img",{parentName:"a",src:"https://i3.ytimg.com/vi/z4Chhref1BM/maxresdefault.jpg",alt:"Watch the video"}))),(0,i.kt)("h2",{id:"upsert-improvements"},"Upsert Improvements"),(0,i.kt)("p",null,"Support for upserts is one of the key capabilities Apache Pinot offers that differentiates it from other real-time analytics databases. It is a vital feature when real-time streaming data is prone to frequent updates. While upserts have been available in Apache Pinot since 0.6.0, with 1.0 they include two major new enhancements: segment compaction and delete support for upsert tables."),(0,i.kt)("h3",{id:"segment-compaction-for-upsert-tables"},"Segment Compaction for Upsert Tables"),(0,i.kt)("p",null,"Pinot\u2019s Upsert tables store all versions of a record ingested into immutable segments on disk. Older records unnecessarily consume valuable storage space when they\u2019re no longer used in query results. Pinot\u2019s Segment Compaction reclaims this valuable storage space by introducing a periodic process that replaces completed segments with compacted segments which only contain the latest version of the records."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"task": {\n  "taskTypeConfigsMap": {\n    "UpsertCompactionTask": {\n      "schedule": "0 */5 * ? * *",\n      "bufferTimePeriod": "7d",\n      "invalidRecordsThresholdPercent": "30",\n      "invalidRecordsThresholdCount": "100000"\n    }\n  }\n}\n')),(0,i.kt)("p",null,"The example above, bufferTimePeriod is set to \u201c7d\u201d which means that any segment that was completed over 7 days ago may be eligible for compaction. However, if you want to ensure that segments are compacted without any additional delay this config can be set to \u201c0d\u201d."),(0,i.kt)("p",null,"invalidRecordsThresholdPercent is an optional limit to the amount of older records allowed in the completed segment represented as a percentage of the total number of records in the segment (i.e. old records / total records). In the example, this property is set to \u201c30\u201d which means that if more than 30% of the records in the completed segment are old, then the segment may be selected for compaction."),(0,i.kt)("p",null,"invalidRecordsThresholdCount is also a limit similar to the previous property, but allows you to express the threshold as a record count. In the example above, this property is set to \u201c100000\u201d which means that if the segment contains more than 100K records then it may be selected for compaction."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://robert-zych.medium.com/segment-compaction-for-upsert-enabled-tables-in-apache-pinot-3f30657aa077"},"Read more")," about the design of this feature."),(0,i.kt)("h3",{id:"delete-support-for-upsert-tables"},"DELETE Support for Upsert Tables"),(0,i.kt)("p",null,"Apache Pinot upsert tables now support deleting records. Supporting delete with upsert avoids the need for the user to explicitly filter out invalid records in the query. SELECT ",(0,i.kt)("em",{parentName:"p"}," FROM table WHERE deleted_column != true becomes as simple as SELECT ")," FROM table. Pinot will only return the latest non-deleted records from the table. This feature opens up the support to ingest Change Data Capture (CDC) data like Debezium where the changes from a source (typically, mutable) will contain DELETE events."),(0,i.kt)("p",null,"Deletes itself is implemented as a soft-delete in Apache Pinot with a dedicated boolean column that serves as a delete marker for the record. Pinot automatically filters out records that are marked in this column. For more details, please see the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pinot.apache.org/basics/data-import/upsert#delete-column"},"documentation"),"."),(0,i.kt)("h2",{id:"null-value-support"},"NULL Value Support"),(0,i.kt)("p",null,"This feature enables Postgres compatible NULL semantics in Apache Pinot queries. The NULL semantics are important for usability for full SQL compatibility which many BI applications like Tableau rely upon when invoking queries to render dashboards. Previously in Pinot, we could not represent NULL. The workaround was to use special values like Integer.MIN_VALUE to represent NULL. Now Pinot 1.0 has full support to represent NULL values. By adding NULL support, Pinot 1.0 has increased the Tableau certification pass rate by 90%."),(0,i.kt)("p",null,"Here are some examples of how NULLs will work in Pinot 1.0."),(0,i.kt)("h3",{id:"aggregations"},"Aggregations"),(0,i.kt)("p",null,"Given the following table below, aggregating columns with NULL values will have this behavior."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"col1"),(0,i.kt)("th",{parentName:"tr",align:null},"col2"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"NULL")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"NULL")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3"),(0,i.kt)("td",{parentName:"tr",align:null},"1")))),(0,i.kt)("p",null,"Since col1 does not contain NULL values, all the values are included in the aggregation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select sum(col1) -- returns 6\nselect count(col1) -- returns 3\n")),(0,i.kt)("p",null,"In the select statement below, the NULL values in col2 are not included in the aggregation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select sum(col2) -- returns 1\nselect count(col2) -- returns 1\n")),(0,i.kt)("h3",{id:"group-by"},"Group By"),(0,i.kt)("p",null,"Pinot now supports grouping by NULL. In the example below, we are grouping by col1 which contains a NULL value. Given the table below, grouping by columns with NULL value will have this behavior."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"col1"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"a")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"NULL")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"b")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"a")))),(0,i.kt)("p",null,"The following select statement will output the following result."),(0,i.kt)("p",null,"select col1, count(*) from table group by col1"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"col1"),(0,i.kt)("th",{parentName:"tr",align:null},"count()"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"a"),(0,i.kt)("td",{parentName:"tr",align:null},"2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"b"),(0,i.kt)("td",{parentName:"tr",align:null},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"NULL"),(0,i.kt)("td",{parentName:"tr",align:null},"1")))),(0,i.kt)("h3",{id:"sorting"},"Sorting"),(0,i.kt)("p",null,"Pinot now allows you to specify the location of NULL values when sorting records. The default is to act as though NULLs are larger than non-NULLs."),(0,i.kt)("p",null,"Given this list of values, sorting them will result in the following."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"values: 1, 2, 3, NULL")),(0,i.kt)("p",null,"Example 1:"),(0,i.kt)("p",null,"NULL values sort BEFORE all non-NULL values."),(0,i.kt)("p",null,"SQL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select col from table order by col NULLS FIRST\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"RESULT: NULL, 1, 2, 3 ")),(0,i.kt)("p",null,"Example 2:"),(0,i.kt)("p",null,"NULL values sort AFTER all non-NULL values."),(0,i.kt)("p",null,"SQL: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select col from table order by col ASC NULLS LAST\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"RESULT: 1, 2, 3, NULL")),(0,i.kt)("p",null,"Example 3:"),(0,i.kt)("p",null,"Default behavior is NULL LAST."),(0,i.kt)("p",null,"SQL: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select col from table order by col\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"RESULT: 1, 2, 3, NULL")),(0,i.kt)("h2",{id:"index-pluggability"},"Index Pluggability"),(0,i.kt)("p",null,"Today, Pinot supports multiple index types, like forward index, bloom filter, and range index. Before Pinot 1.0, index types were all statically defined, which means that in order to create a new index type, you\u2019d need to rebuild Pinot from source. Ideally that shouldn\u2019t be the case."),(0,i.kt)("p",null,"To increase speed of development, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pinot/issues/10183"},"Index Service Provider Interface (SPI)"),", or index-spi, reduces friction by adding the ability to include new index types at runtime in Pinot. This opens the ability of adding third party indexes by including an external jar in the classpath and adding some configuration. This opens up Pinot indexing to lower-friction innovation from the community."),(0,i.kt)("p",null,"For now, SPI-accessible indexes are limited to single field index types. Features like the star-tree index or other multi-column approaches are not yet supported."),(0,i.kt)("h2",{id:"apache-pinot-spark-3-connector-and-passing-pinot-options"},"Apache Pinot Spark 3 Connector and Passing Pinot Options"),(0,i.kt)("p",null,"Apache Spark users can now take advantage of Pinot\u2019s ability to provide high scalability, low latency, and high concurrency within the context of a Spark 3 cluster using the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pinot/blob/master/pinot-connectors/pinot-spark-3-connector/README.md"},"Apache Pinot Spark 3 Connector"),"."),(0,i.kt)("p",null,"This connector supports Apache Spark (2.x and 3.x) as a processor to create and push segment files to the database and can read realtime, offline, and hybrid tables from Pinot."),(0,i.kt)("p",null,"Now you can merge your streaming and batch datasets together in Spark to provide a full view of real-time and historical data for your machine learning algorithms and feature stores."),(0,i.kt)("p",null,"Performance Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Distributed, parallel scan"),(0,i.kt)("li",{parentName:"ul"},"Streaming reads using gRPC (optional)"),(0,i.kt)("li",{parentName:"ul"},"Column and filter push down to optimize performance"),(0,i.kt)("li",{parentName:"ul"},"Support for Pinot\u2019s Query Options that include: maxExecutionThreads, enableNullHandling, skipUpsert, etc.")),(0,i.kt)("p",null,"Usability Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SQL support instead of PQL"),(0,i.kt)("li",{parentName:"ul"},"Overlap between realtime and offline segments is queried exactly once for hybrid tables"),(0,i.kt)("li",{parentName:"ul"},"Schema discovery - If schema is not specified, the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pinot/blob/master/pinot-connectors/pinot-spark-3-connector/documentation/read_model.md"},"connector reads the table schema")," from the Pinot controller, and then converts to the Spark schema.")),(0,i.kt)("p",null,"Here is an example that reads a Pinot table, by setting the format to \u201cpinot\u201d spark will automatically load the Pinot connector and read the \u201cairlinesStats\u201d table. The queryOptions property allows you to provide ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pinot.apache.org/users/user-guide-query/query-options"},"Pinot Query Options"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'val data = spark.read\n  .format("pinot")\n  .option("table", "airlineStats")\n  .option("tableType", "offline")\n  .option("queryOptions", "enableNullHandling=true,maxExecutionThreads=1")\n  .load()\n  .sql("SELECT * FROM airlineStats WHERE DEST = \u2018SFO\u2019")\n\ndata.show(100)\n')),(0,i.kt)("h2",{id:"petabyte-scale-log-storage-and-search-in-pinot-with-clp"},"Petabyte-Scale Log Storage and Search in Pinot with CLP"),(0,i.kt)("p",null,"Compressed Log Processor (CLP) is a tool capable of losslessly compressing text logs and searching them in their compressed state. It achieves a better compression ratio than general purpose compressors alone, while retaining the ability to search the compressed log events without incurring the performance penalty of fully decompressing them. Part of CLP\u2019s algorithm was deployed within ",(0,i.kt)("a",{parentName:"p",href:"https://www.uber.com/blog/reducing-logging-cost-by-two-orders-of-magnitude-using-clp/"},"Uber")," to compress unstructured Spark logs, as they are generated, achieving an unprecedented compression of 169\xd7."),(0,i.kt)("p",null,"Log events generated as JSON objects with user-defined schemas, meaning each event may have different keys. Such user-defined schemas make these events challenging to store in a table with a set schema.  With Log Storage and Search in Pinot with CLP, users would be able to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Store their log events losslessly (without dropping fields)"),(0,i.kt)("li",{parentName:"ul"},"Store their logs with some amount of compression"),(0,i.kt)("li",{parentName:"ul"},"Query their logs efficiently")),(0,i.kt)("p",null,"The CLP ingestion pipeline can be used on log events from a stream, such as JSON log events ingested from Kafka. The plugin takes two inputs: a JSON record and a list of fields to encode with CLP."),(0,i.kt)("p",null,"The fields to encode can be configured as shown:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "tableIndexConfig": {\n        ...\n        "streamConfigs": {\n            ...\n            "stream.kafka.decoder.class.name": "org.apache.pinot.plugin.inputformat.clplog.CLPLogMessageDecoder",\n            "stream.kafka.decoder.prop.fieldsForClpEncoding": "<field-name-1>,<field-name-2>"\n        }\n    }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<field-names-1 and 2>")," are a comma-separated list of fields you wish to encode with CLP."),(0,i.kt)("p",null,"You can read the design ",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1nHZb37re4mUwEA258x3a2pgX13EWLWMJ0uLEDk1dUyU/edit"},"document")," for more details into why and how this feature was implemented."),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"Apache Pinot\u2019s evolution is expressly due to the humans behind the code, and in reaching 1.0 release status it is proper and fitting to give credit to the open source project\u2019s key committers. Since its early days, over ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pinot/graphs/contributors"},"three hundred contributors")," have produced more than 1.3 million source lines of code (SLOC)."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://pinot.apache.org/blogs/apache-pinot-1-0-name-cloud.png",alt:"alt"})),(0,i.kt)("p",null,"The introduction of Apache Pinot 1.0 represents an exceptional stride forward in real-time online analytical processing (OLAP) capabilities, marking a watershed moment in the evolution of real-time analytics systems. This release redefines the limits of what can be achieved in the realm of instant data analysis, presenting a game-changing solution for organizations seeking high throughput and low latency in their OLAP queries. If you would like to get started with Apache Pinot 1.0, you can check out the documentation, and download it now."),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("p",null,"If you want to try out Apache Pinot, the following resources will help you get started:"),(0,i.kt)("p",null,"Download page: ",(0,i.kt)("a",{parentName:"p",href:"https://pinot.apache.org/download/"},"https://pinot.apache.org/download/")," "),(0,i.kt)("p",null,"Getting started: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pinot.apache.org/getting-started"},"https://docs.pinot.apache.org/getting-started")," "),(0,i.kt)("p",null,"Join our Slack channel: ",(0,i.kt)("a",{parentName:"p",href:"https://communityinviter.com/apps/apache-pinot/apache-pinot"},"https://communityinviter.com/apps/apache-pinot/apache-pinot")," "),(0,i.kt)("p",null,"See our upcoming events: ",(0,i.kt)("a",{parentName:"p",href:"https://www.meetup.com/apache-pinot"},"https://www.meetup.com/apache-pinot")," "),(0,i.kt)("p",null,"Follow us on social media: ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/ApachePinot"},"https://twitter.com/ApachePinot")))}d.isMDXComponent=!0}}]);