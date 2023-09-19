"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6961],{4137:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return h}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(a),d=i,h=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return a?n.createElement(h,r(r({ref:t},m),{},{components:a})):n.createElement(h,r({ref:t},m))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1486:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var n=a(7462),i=a(3366),o=(a(7294),a(4137)),r=["components"],l={title:"Apache Pinot\u2122 0.11 - Timestamp Indexes",author:"Mark Needham",author_title:"Mark Needham",author_url:"https://www.linkedin.com/in/lakshmanan-velusamy-a778a517/",author_image_url:"https://www.datocms-assets.com/75153/1661544338-mark-needham.png",description:"Users write queries that use the datetrunc function to filter at a coarser grain of functionality. Unfortunately, this approach results in scanning data and time value conversion work that takes a long time at large data volumes. The timestamp index solves that problem!",keywords:["Apache Pinot","Apache Pinot 0.11.0","Timestamp Index","datetrunc"],tags:["Pinot","Data","Analytics","User-Facing Analytics","Timestamp","datetrunc"]},s=void 0,c={permalink:"/blog/2022/11/22/Apache-Pinot-Timestamp-Indexes",editUrl:"https://github.com/apache/pinot-site/edit/dev/website/blog/2022-11-22-Apache-Pinot-Timestamp-Indexes.md",source:"@site/blog/2022-11-22-Apache-Pinot-Timestamp-Indexes.md",title:"Apache Pinot\u2122 0.11 - Timestamp Indexes",description:"Users write queries that use the datetrunc function to filter at a coarser grain of functionality. Unfortunately, this approach results in scanning data and time value conversion work that takes a long time at large data volumes. The timestamp index solves that problem!",date:"2022-11-22T00:00:00.000Z",formattedDate:"November 22, 2022",tags:[{label:"Pinot",permalink:"/blog/tags/pinot"},{label:"Data",permalink:"/blog/tags/data"},{label:"Analytics",permalink:"/blog/tags/analytics"},{label:"User-Facing Analytics",permalink:"/blog/tags/user-facing-analytics"},{label:"Timestamp",permalink:"/blog/tags/timestamp"},{label:"datetrunc",permalink:"/blog/tags/datetrunc"}],readingTime:7.725,truncated:!1,prevItem:{title:"Apache Pinot\u2122 0.11 - Pausing Real-Time Ingestion",permalink:"/blog/2022/11/28/Apache-Pinot-Pausing-Real-Time-Ingestion"},nextItem:{title:"Apache Pinot\u2122 0.11 - Inserts from SQL",permalink:"/blog/2022/11/17/Apache Pinot-Inserts-from-SQL"}},m=[{value:"Spinning up Pinot",id:"spinning-up-pinot",children:[]},{value:"Importing Chicago Crime Dataset",id:"importing-chicago-crime-dataset",children:[]},{value:"Querying crimes by date",id:"querying-crimes-by-date",children:[]},{value:"Adding the timestamp index",id:"adding-the-timestamp-index",children:[]},{value:"What does a timestamp index do?",id:"what-does-a-timestamp-index-do",children:[]},{value:"Re-running the query",id:"re-running-the-query",children:[]},{value:"Summary",id:"summary",children:[]}],p={toc:m},u="wrapper";function d(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/DetGpHZuzDU?si=f0ejecqPBbBK21z-"},(0,o.kt)("img",{parentName:"a",src:"https://i3.ytimg.com/vi/DetGpHZuzDU/maxresdefault.jpg",alt:"Watch the video"}))),(0,o.kt)("p",null,"The recent Apache ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/apache-pinot-developer-blog/apache-pinot-0-11-released-d564684df5d4"},"Pinot\u2122 0.11.0")," release has lots of goodies for you to play with. This is the third in a series of blog posts showing off some of the new features in this release."),(0,o.kt)("p",null,"Pinot introduced the TIMESTAMP data type in the 0.8 release, which stores the time in millisecond epoch long format internally. The community feedback has been that the queries they\u2019re running against timestamp columns don\u2019t need this low-level granularity.\xa0"),(0,o.kt)("p",null,"Instead, users write queries that use the datetrunc function to filter at a coarser grain of functionality. Unfortunately, this approach results in scanning data and time value conversion work that takes a long time at large data volumes."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.pinot.apache.org/basics/indexing/timestamp-index"},"timestamp index")," solves that problem! In this blog post, we\u2019ll use it to get an almost 5x query speed improvement on a relatively small dataset of only 7m rows."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.datocms-assets.com/75153/1669133004-image1.png",alt:"Time in milliseconds with and without timestamp indexes bar chart",title:"Time in milliseconds with and without timestamp indexes bar chart"})),(0,o.kt)("h2",{id:"spinning-up-pinot"},"Spinning up Pinot"),(0,o.kt)("p",null,"We\u2019re going to be using the Pinot Docker container, but first, we\u2019re going to create a network, as we\u2019ll need that later on:"),(0,o.kt)("p",null,"docker network create timestamp","_","blog"),(0,o.kt)("p",null,"We\u2019re going to spin up the empty ",(0,o.kt)("a",{parentName:"p",href:"https://docs.pinot.apache.org/basics/getting-started/quick-start"},"QuickStart")," in a container named pinot-timestamp-blog:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run \\\n  -p 8000:8000 \\\n  -p 9000:9000 \\\n --name pinot-timestamp-blog \\\n  --network timestamp_blog \\\n  apachepinot/pinot:0.11.0 \\\n  QuickStart -type EMPTY\n")),(0,o.kt)("p",null,"Or if you\u2019re on a Mac M1, change the name of the image to have the arm-64 suffix, like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run \\\n  -p 8000:8000 \\\n  -p 9000:9000 \\\n    --network timestamp_blog \\\n --name pinot-timestamp-blog \\\n  apachepinot/pinot:0.11.0-arm64 \\\n  QuickStart -type EMPTY\n")),(0,o.kt)("p",null,"Once that\u2019s up and running, we\u2019ll be able to access the Pinot Data Explorer at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:9000/"},"http://localhost:9000"),", but at the moment, we don\u2019t have any data to play with."),(0,o.kt)("h2",{id:"importing-chicago-crime-dataset"},"Importing Chicago Crime Dataset"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://startree.ai/blog/analyzing-chicago-crimes-with-apache-pinot-and-streamlit"},"Chicago Crime dataset")," is a small to medium-sized dataset with 7 million records representing reported crimes in the City of Chicago from 2001 until today."),(0,o.kt)("p",null,"It contains details of the type of crime, where it was committed, whether an arrest was recorded, which beat it occurred on, and more."),(0,o.kt)("p",null,"Each of the crimes has an associated timestamp, which makes it a good dataset to demonstrate timestamp indexes."),(0,o.kt)("p",null,"You can find the code used in this blog post in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/startreedata/pinot-recipes/tree/main/recipes/analyzing-chicago-crimes"},"Analyzing Chicago Crimes")," recipe section of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/startreedata/pinot-recipes"},"Pinot Recipes GitHub repository"),". From here on, I\u2019m assuming that you\u2019ve downloaded this repository and are in the recipes/analyzing-chicago-crimes directory."),(0,o.kt)("p",null,"We\u2019re going to create a schema and table named crimes by running the following command:\xa0\xa0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run \\\n   --network timestamp_blog \\\n   -v $PWD/config:/config \\\n   apachepinot/pinot:0.11.0-arm64 AddTable \\\n     -schemaFile /config/schema.json \\\n     -tableConfigFile /config/table.json \\\n     -controllerHost pinot-timestamp-blog \\\n    -exec  \n\n")),(0,o.kt)("p",null,"We should see the following output:\xa0"),(0,o.kt)("p",null,"2022/11/03 13:07:57.169 INFO ","[","AddTableCommand","]"," ","[","main","]",' {"unrecognizedProperties":{},"status":"TableConfigs crimes successfully added"}'),(0,o.kt)("p",null,"A screenshot of the schema is shown below:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.datocms-assets.com/75153/1669132979-image3.png",alt:"Chicago crime dataset table schema",title:"Chicago crime dataset table schema"})),(0,o.kt)("p",null,"We won\u2019t go through the table config and schema files in this blog post because we did that in the last post, but you can find them in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/startreedata/pinot-recipes/tree/main/recipes/analyzing-chicago-crimes/config"},"config")," directory on GitHub.\xa0"),(0,o.kt)("p",null,"Now, let\u2019s import the dataset.\xa0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run \\\n   --network timestamp_blog \\\n   -v $PWD/config:/config \\\n   -v $PWD/data:/data \\\n   apachepinot/pinot:0.11.0-arm64 LaunchDataIngestionJob \\\n    -jobSpecFile /config/job-spec.yml \\\n     -values controllerHost=pinot-timestamp-blog \n")),(0,o.kt)("p",null,"It will take a few minutes to load, but once that command has finished, we\u2019re ready to query the crimes table."),(0,o.kt)("h2",{id:"querying-crimes-by-date"},"Querying crimes by date"),(0,o.kt)("p",null,"The following query finds the number of crimes that happened after 16th January 2017, grouped by week of the year, with the most crime-filled weeks shown first:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select datetrunc('WEEK', DateEpoch) as tsWeek, count(*) \nfrom crimes \nWHERE tsWeek > fromDateTime('2017-01-16', 'yyyy-MM-dd') \ngroup by tsWeek\norder by count(*) DESC\nlimit 10\n")),(0,o.kt)("p",null,"If we run that query, we\u2019ll see the following results:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.datocms-assets.com/75153/1669133027-image6.png",alt:"Chicago crime dataset query result",title:"Chicago crime dataset query result"})),(0,o.kt)("p",null,"And, if we look above the query result, there\u2019s metadata about the query, including the time that it took to run."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.datocms-assets.com/75153/1669133059-image5.png",alt:"Chicago crime dataset metadata about the query, including the time that it took to run",title:"Chicago crime dataset metadata about the query, including the time that it took to run"})),(0,o.kt)("p",null,"The query took 141 ms to execute, so that\u2019s our baseline."),(0,o.kt)("h2",{id:"adding-the-timestamp-index"},"Adding the timestamp index"),(0,o.kt)("p",null,"We could add a timestamp index directly to this table and then compare query performance, but to make it easier to do comparisons, we\u2019re going to create an identical table with the timestamp index applied.\xa0"),(0,o.kt)("p",null,"The full table config is available in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/startreedata/pinot-recipes/blob/main/recipes/analyzing-chicago-crimes/config/table-index.json"},"config/table-index.json")," file, and the main change is that we\u2019ve added the following section to add a timestamp index on the DateEpoch column:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"fieldConfigList": [\n  {\n    "name": "DateEpoch",\n    "encodingType": "DICTIONARY",\n    "indexTypes": ["TIMESTAMP"],\n    "timestampConfig": {\n      "granularities": [\n        "DAY",\n        "WEEK",\n        "MONTH"\n      ]\n    }\n  }\n],\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"encodingType")," will always be \u2018DICTIONARY\u2019 and ",(0,o.kt)("em",{parentName:"p"},"indexTypes")," must contain \u2018TIMESTAMP\u2019. We should specify granularities based on our query patterns."),(0,o.kt)("p",null,"As a rule of thumb, work out which values you most commonly pass as the first argument to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.pinot.apache.org/configuration-reference/functions/datetrunc"},"datetrunc function")," in your queries and include those values."),(0,o.kt)("p",null,"The full list of valid granularities is: ",(0,o.kt)("em",{parentName:"p"},"millisecond"),", ",(0,o.kt)("em",{parentName:"p"},"second"),", ",(0,o.kt)("em",{parentName:"p"},"minute"),", ",(0,o.kt)("em",{parentName:"p"},"hour"),", ",(0,o.kt)("em",{parentName:"p"},"day"),", ",(0,o.kt)("em",{parentName:"p"},"week"),", ",(0,o.kt)("em",{parentName:"p"},"month"),", ",(0,o.kt)("em",{parentName:"p"},"quarter"),", and ",(0,o.kt)("em",{parentName:"p"},"year"),"."),(0,o.kt)("p",null,"Our new table is called crimes","_","indexed, and we\u2019re also going to create a new schema with all the same columns called crimes","_","indexed, as Pinot requires the table and schema names to match."),(0,o.kt)("p",null,"We can create the schema and table by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run \\\n   --network timestamp_blog \\\n   -v $PWD/config:/config \\\n   apachepinot/pinot:0.11.0-arm64 AddTable \\\n     -schemaFile /config/schema-index.json \\\n     -tableConfigFile /config/table-index.json \\\n     -controllerHost pinot-timestamp-blog \\\n    -exec  \n")),(0,o.kt)("p",null,"We\u2019ll populate that table by copying the segment that we created earlier for the crimes table.\xa0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run \\\n   --network timestamp_blog \\\n   -v $PWD/config:/config \\\n   -v $PWD/data:/data \\\n   apachepinot/pinot:0.11.0-arm64 LaunchDataIngestionJob \\\n    -jobSpecFile /config/job-spec-download.yml \\\n     -values controllerHost=pinot-timestamp-blog \n")),(0,o.kt)("p",null,"If you\u2019re curious how that job spec works, I ",(0,o.kt)("a",{parentName:"p",href:"https://www.markhneedham.com/blog/2021/12/06/apache-pinot-copy-segment-new-table/"},"wrote a blog post explaining it in a bit more detail"),"."),(0,o.kt)("p",null,"Once the Pinot Server has downloaded this segment, it will apply the timestamp index to the DateEpoch column.\xa0"),(0,o.kt)("p",null,"For the curious, we can see this happening in the log files by connecting to the Pinot container and running the following grep command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\u200b\u200bdocker exec -iti pinot-timestamp-blog \\\n  grep -rni -A10 "Successfully downloaded segment:.*crimes_indexed_OFFLINE.*" \\   \n  logs/pinot-all.log\n')),(0,o.kt)("p",null,"We\u2019ll see something like the following (tidied up for brevity):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},"[BaseTableDataManager]  Successfully downloaded segment: crimes_OFFLINE_0 of table: crimes_indexed_OFFLINE to index dir: /tmp/1667490598253/quickstart/PinotServerDataDir0/crimes_indexed_OFFLINE/crimes_OFFLINE_0\n[V3DefaultColumnHandler]  Starting default column action: ADD_DATE_TIME on column: $DateEpoch$DAY\n[SegmentDictionaryCreator]  Created dictionary for LONG column: $DateEpoch$DAY with cardinality: 7969, range: 978307200000 to 1666742400000\n[V3DefaultColumnHandler]  Starting default column action: ADD_DATE_TIME on column: $DateEpoch$WEEK\n[SegmentDictionaryCreator]  Created dictionary for LONG column: $DateEpoch$WEEK with cardinality: 1139, range: 978307200000 to 1666569600000\n[V3DefaultColumnHandler]  Starting default column action: ADD_DATE_TIME on column: $DateEpoch$MONTH\n[SegmentDictionaryCreator]  Created dictionary for LONG column: $DateEpoch$MONTH with cardinality: 262, range: 978307200000 to 1664582400000\n[RangeIndexHandler]  Creating new range index for segment: crimes_OFFLINE_0, column: $DateEpoch$DAY\n[RangeIndexHandler]  Created range index for segment: crimes_OFFLINE_0, column: $DateEpoch$DAY\n[RangeIndexHandler]  Creating new range index for segment: crimes_OFFLINE_0, column: $DateEpoch$WEEK\n[RangeIndexHandler]  Created range index for segment: crimes_OFFLINE_0, column: $DateEpoch$WEEK\n\n")),(0,o.kt)("h2",{id:"what-does-a-timestamp-index-do"},"What does a timestamp index do?"),(0,o.kt)("p",null,"So, the timestamp index has now been created, but what does it actually do?"),(0,o.kt)("p",null,"When we add a timestamp index on a column, Pinot creates a derived column for each granularity and adds a range index for each new column."),(0,o.kt)("p",null,"In our case, that means we\u2019ll have these extra columns: $DateEpoch$DAY, $DateEpoch$WEEK, and $DateEpoch$MONTH.\xa0"),(0,o.kt)("p",null,"We can check if the extra columns and indexes have been added by navigating to the ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:9000/#/tenants/table/crimes_indexed_OFFLINE/crimes_OFFLINE_0"},"segment page")," and typing $Date$Epoch in the search box.\xa0 You should see the following:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.datocms-assets.com/75153/1669133112-image2.png",alt:"Apache Pinot timestamp index on a column",title:"Apache Pinot timestamp index on a column"})),(0,o.kt)("p",null,"These columns will be assigned the following values:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"$DateEpoch$DAY = dateTrunc(\u2018DAY\u2019, DateEpoch)"),(0,o.kt)("li",{parentName:"ul"},"$DateEpoch$WEEK = dateTrunc(\u2018WEEK\u2019, DateEpoch)"),(0,o.kt)("li",{parentName:"ul"},"$DateEpoch$MONTH = dateTrunc(\u2018MONTH\u2019, DateEpoch)")),(0,o.kt)("p",null,"Pinot will also rewrite any queries that use the dateTrunc function with DAY, WEEK, or MONTH and the DateEpoch field to use those new columns."),(0,o.kt)("p",null,"This means that this query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select datetrunc('WEEK', DateEpoch) as tsWeek, count(*) \nfrom crimes_indexed\nGROUP BY tsWeek\nlimit 10\n")),(0,o.kt)("p",null,"Would be rewritten as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select  $DateEpoch$WEEK as tsWeek, count(*) \nfrom crimes_indexed\nGROUP BY tsWeek\nlimit 10\n")),(0,o.kt)("p",null,"And our query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select datetrunc('WEEK', DateEpoch) as tsWeek, count(*) \nfrom crimes \nWHERE tsWeek > fromDateTime('2017-01-16', 'yyyy-MM-dd') \ngroup by tsWeek\norder by count(*) DESC\nlimit 10\n")),(0,o.kt)("p",null,"Would be rewritten as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select $DateEpoch$WEEK as tsWeek, count(*) \nfrom crimes \nWHERE tsWeek > fromDateTime('2017-01-16', 'yyyy-MM-dd') \ngroup by tsWeek\norder by count(*) DESC\nlimit 10\n")),(0,o.kt)("h2",{id:"re-running-the-query"},"Re-running the query"),(0,o.kt)("p",null,"Let\u2019s now run our initial query against the ",(0,o.kt)("em",{parentName:"p"},"crimes","_","indexed")," table. We\u2019ll get exactly the same results as before, but let\u2019s take a look at the query stats:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.datocms-assets.com/75153/1669133083-image4.png",alt:"Chicago crime dataset updated query stats",title:"Chicago crime dataset updated query stats"})),(0,o.kt)("p",null,"This time the query takes 36 milliseconds rather than 140 milliseconds. That\u2019s an almost 5x improvement, thanks to the timestamp index."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"Hopefully, you\u2019ll agree that timestamp indexes are pretty cool, and achieving a 5x query improvement without much work is always welcome!"),(0,o.kt)("p",null,"If you\u2019re using timestamps in your Pinot tables, be sure to try out this index and let us know how it goes on the ",(0,o.kt)("a",{parentName:"p",href:"https://stree.ai/slack"},"StarTree Community Slack")," . We\u2019re always happy to help out with any questions or problems you encounter."))}d.isMDXComponent=!0}}]);