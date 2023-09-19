"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2194],{4137:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),u=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(a),c=n,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||r;return a?i.createElement(h,l(l({ref:t},p),{},{components:a})):i.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:n,l[1]=o;for(var u=2;u<r;u++)l[u]=a[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5625:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var i=a(7462),n=a(3366),r=(a(7294),a(4137)),l=["components"],o={title:"GapFill Function For Time-Series Datasets In Pinot",author:"Weixiang Sun,Lakshmanan Velusamy",author_title:"Weixiang Sun,Lakshmanan Velusamy",author_url:"https://www.linkedin.com/in/lakshmanan-velusamy-a778a517/",author_image_url:"https://www.datocms-assets.com/75153/1661479772-lakshmanan-portait.jpeg",description:"Gapfilling functions in Pinot to provide the on-the-fly interpolation (filling the missing data) functionality to better handle time-series data.",keywords:["Apache Pinot","Apache Pinot 0.11.0","Interpolation","Gapfilling","Time-series","Timeseries"],tags:["Pinot","Data","Analytics","User-Facing Analytics","interpolation","gapfilling"]},s=void 0,u={permalink:"/blog/2022/08/02/GapFill-Function-For-Time-Series-Datasets-In-Pinot",editUrl:"https://github.com/apache/pinot-site/edit/dev/website/blog/2022-08-02-GapFill-Function-For-Time-Series-Datasets-In-Pinot.md",source:"@site/blog/2022-08-02-GapFill-Function-For-Time-Series-Datasets-In-Pinot.md",title:"GapFill Function For Time-Series Datasets In Pinot",description:"Gapfilling functions in Pinot to provide the on-the-fly interpolation (filling the missing data) functionality to better handle time-series data.",date:"2022-08-02T00:00:00.000Z",formattedDate:"August 2, 2022",tags:[{label:"Pinot",permalink:"/blog/tags/pinot"},{label:"Data",permalink:"/blog/tags/data"},{label:"Analytics",permalink:"/blog/tags/analytics"},{label:"User-Facing Analytics",permalink:"/blog/tags/user-facing-analytics"},{label:"interpolation",permalink:"/blog/tags/interpolation"},{label:"gapfilling",permalink:"/blog/tags/gapfilling"}],readingTime:8.59,truncated:!1,prevItem:{title:"Apache Pinot\u2122 0.11 - How do I see my indexes?",permalink:"/blog/2022/11/08/Apache Pinot-How-do-I-see-my-indexes"},nextItem:{title:"Announcing Apache Pinot 0.10",permalink:"/blog/2022/04/04/Announcing-Apache-Pinot-0-10"}},p=[{value:"Processing time series data in Pinot",id:"processing-time-series-data-in-pinot",children:[{value:"Sample Dataset:",id:"sample-dataset",children:[]}]},{value:"Interpolating missing data",id:"interpolating-missing-data",children:[]},{value:"Gapfill Query with a Use Case:",id:"gapfill-query-with-a-use-case",children:[{value:"Query Syntax:",id:"query-syntax",children:[]},{value:"Query components:",id:"query-components",children:[]},{value:"Query Workflow",id:"query-workflow",children:[]},{value:"Other Supported Query Scenarios:",id:"other-supported-query-scenarios",children:[]}]},{value:"How does it work?",id:"how-does-it-work",children:[{value:"Request Flow",id:"request-flow",children:[]},{value:"Execution Plan",id:"execution-plan",children:[]},{value:"Time and Space complexity:",id:"time-and-space-complexity",children:[]},{value:"Challenges",id:"challenges",children:[]}]},{value:"The Future Work",id:"the-future-work",children:[]}],d={toc:p},m="wrapper";function c(e){var t=e.components,a=(0,n.Z)(e,l);return(0,r.kt)(m,(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Many real-world datasets are time-series in nature, tracking the value or state changes of entities over time. The values may be polled and recorded at constant time intervals or at random irregular intervals or only when the value/state changes. There are many real-world use cases of time series data. Here are some specific examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Telemetry from sensors monitoring the status of industrial equipment."),(0,r.kt)("li",{parentName:"ul"},"Real-time vehicle data such as speed, braking, and acceleration, to produce the driver's risk score trend."),(0,r.kt)("li",{parentName:"ul"},"Server performance metrics such as CPU, I/O, memory, and network usage over time."),(0,r.kt)("li",{parentName:"ul"},"An automated system tracking the status of a store or items in an online marketplace.")),(0,r.kt)("p",null,"Let us use an IOT dataset tracking the occupancy status of the individual parking slots in a parking garage using automated sensors in this post. The granularity of recorded data points might be sparse or the events could be missing due to network and other device issues in the IOT environment. The following figure demonstrates entities emitting values at irregular intervals as the value changes. Polling and recording values of all entities regularly at a lower granularity would consume more resources, take up more space on disk and during processing and incur high costs. But analytics applications that are operating on these datasets, might be querying for values at a lower granularity than the data recording interval (Ex: A dashboard showing the total no of occupied parking slots at 15 min granularity in the past week when the sensors are not recording status as frequent)."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.datocms-assets.com/75153/1661700264-entities-emitting-data.png",alt:"Entities emitting data over time at irregular intervals",title:"Entities emitting data over time at irregular intervals"})),(0,r.kt)("p",null,"It is important for Pinot to provide the on-the-fly interpolation (filling the missing data) functionality to better handle time-series data."),(0,r.kt)("p",null,"Starting from the 0.11.0 release, we introduced the new query syntax, gapfilling functions to interpolate data and perform powerful aggregations and data processing over time series data."),(0,r.kt)("p",null,"We will discuss the query syntax with an example and then the internal architecture."),(0,r.kt)("h2",{id:"processing-time-series-data-in-pinot"},"Processing time series data in Pinot"),(0,r.kt)("p",null,"Let us use the following sample data set tracking the status of parking lots in the parking space to understand this feature in detail."),(0,r.kt)("h3",{id:"sample-dataset"},"Sample Dataset:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.datocms-assets.com/75153/1661700333-parking-data-table.png",alt:"Sample parking lot dataset",title:"Sample parking lot dataset"})),(0,r.kt)("p",null,"parking","_","data table"),(0,r.kt)("p",null,"Use case:\xa0We want to find out the total number of parking lots that are occupied over a period of time, which would be a common use case for a company that manages parking spaces."),(0,r.kt)("p",null,"Let us take 30 minutes time bucket as an example:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.datocms-assets.com/75153/1661700377-30-min-bucket-example.png",alt:"Sample parking lot dataset with 30 minute time bucket",title:"Sample parking lot dataset with 30 minute time bucket"})),(0,r.kt)("p",null,"In the 30 mins aggregation results table above, we can see a lot of missing data as many lots didn't have anything recorded in those 30-minute windows. To calculate the number of occupied parking lots per time bucket, we need to gap-fill the missing data for each of these 30-minute windows."),(0,r.kt)("h2",{id:"interpolating-missing-data"},"Interpolating missing data"),(0,r.kt)("p",null,"There are multiple ways to infer and fill the missing values. In the current version, we introduce the following methods, which are more common:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"FILL","_","PREVIOUS","_","VALUE\xa0can be used to fill time buckets missing values for entities with the last observed value. If no previous observed value can be found, the default value is used as an alternative."),(0,r.kt)("li",{parentName:"ul"},"FILL","_","DEFAULT","_","VALUE\xa0can be used to fill time buckets missing values for entities with the default value depending on the data type.")),(0,r.kt)("p",null,"More advanced gapfilling strategies such as using the next observed value, the value from the previous day or past week, or the value computed using a subquery shall be introduced in the future."),(0,r.kt)("h2",{id:"gapfill-query-with-a-use-case"},"Gapfill Query with a Use Case:"),(0,r.kt)("p",null,"Let us write a query to\xa0",(0,r.kt)("em",{parentName:"p"},"get"),"\xa0",(0,r.kt)("em",{parentName:"p"},"the total number of occupied parking lots every 30 minutes over time on the parking lot dataset"),"\xa0discussed above."),(0,r.kt)("h3",{id:"query-syntax"},"Query Syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT time_col, SUM(status) AS occupied_slots_count\nFROM (\n    SELECT GAPFILL(time_col,'1:MILLISECONDS:SIMPLE_DATE_FORMAT:yyyy-MM-dd HH:mm:ss.SSS','2021-10-01 09:00:00.000',\n                   '2021-10-01 12:00:00.000','30:MINUTES', FILL(status, 'FILL_PREVIOUS_VALUE'),\n                    TIMESERIESON(lot_id)), lot_id, status\n    FROM (\n        SELECT DATETIMECONVERT(event_time,'1:MILLISECONDS:EPOCH',\n               '1:MILLISECONDS:SIMPLE_DATE_FORMAT:yyyy-MM-dd HH:mm:ss.SSS','30:MINUTES') AS time_col,\n               lot_id, lastWithTime(is_occupied, event_time, 'INT') AS status\n        FROM parking_data\n        WHERE event_time >= 1633078800000 AND  event_time <= 1633089600000\n        GROUP BY 1, 2\n        ORDER BY 1\n        LIMIT 100)\n    LIMIT 100)\nGROUP BY 1\nLIMIT 100\n")),(0,r.kt)("p",null,"This query suggests three main steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The raw data will be aggregated;"),(0,r.kt)("li",{parentName:"ol"},"The aggregated data will be gapfilled;"),(0,r.kt)("li",{parentName:"ol"},"The gapfilled data will be aggregated.")),(0,r.kt)("p",null,"We make one assumption that the raw data is sorted by timestamp. The Gapfill and Post-Gapfill Aggregation will not sort the data."),(0,r.kt)("h3",{id:"query-components"},"Query components:"),(0,r.kt)("p",null,"The following concepts were added to interpolate and handle time-series data."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"LastWithTime(dataColumn, timeColumn, 'dataType')\xa0","-"," To get the last value of\xa0dataColumn\xa0where the\xa0timeColumn\xa0is used to define the time of dataColumn. This is useful to pick the latest value when there are multiple values found within a time bucket. Please see\xa0",(0,r.kt)("a",{parentName:"li",href:"https://docs.pinot.apache.org/users/user-guide-query/supported-aggregations"},"https://docs.pinot.apache.org/users/user-guide-query/supported-aggregations"),"\xa0for more details."),(0,r.kt)("li",{parentName:"ul"},"Fill(colum, FILL","_","TYPE)\xa0- To fill the missing data of the column with the FILL","_","TYPE."),(0,r.kt)("li",{parentName:"ul"},"TimeSeriesOn\xa0- To specify the columns to uniquely identify entities whose data will be interpolated."),(0,r.kt)("li",{parentName:"ul"},"Gapfill\xa0- Specify the time range, the time bucket size, how to fill the missing data, and entity definition.")),(0,r.kt)("h3",{id:"query-workflow"},"Query Workflow"),(0,r.kt)("p",null,"The innermost sql will convert the raw event table to the following table."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.datocms-assets.com/75153/1661700439-innermost-sql.png",alt:"Sample parking lot query workflow innermost SQL",title:"Sample parking lot query workflow innermost SQL"})),(0,r.kt)("p",null,"The second most nested sql will gap fill the returned data as below:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.datocms-assets.com/75153/1661700473-second-most.png",alt:"Sample parking lot query workflow second most SQL",title:"Sample parking lot query workflow second most SQL"})),(0,r.kt)("p",null,"The outermost query will aggregate the gapfilled data as follows:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.datocms-assets.com/75153/1661700517-outermost.png",alt:"Sample parking lot query workflow outermost SQL",title:"Sample parking lot query workflow outermost SQL"})),(0,r.kt)("h3",{id:"other-supported-query-scenarios"},"Other Supported Query Scenarios:"),(0,r.kt)("p",null,"The above example demonstrates the support to aggregate before and post gapfilling. Pre and/or post aggregations can be skipped if they are not needed. The gapfilling query syntax is flexible to support the following use cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select/Gapfill\xa0- Gapfill the missing data for the time bucket. Just the raw events are fetched, gapfilled, and returned. No aggregation is needed."),(0,r.kt)("li",{parentName:"ul"},"Aggregate/Gapfill\xa0- If there are multiple entries within the time bucket we can pick a representative value by applying an aggregate function. Then the missing data for the time buckets will be gap filled."),(0,r.kt)("li",{parentName:"ul"},"Gapfill/Aggregate\xa0- Gapfill the data and perform some form of aggregation on the interpolated data.")),(0,r.kt)("p",null,"For detailed query syntax and how it works, please refer to the documentation here:\xa0",(0,r.kt)("a",{parentName:"p",href:"https://docs.pinot.apache.org/users/user-guide-query/gap-fill-functions"},"https://docs.pinot.apache.org/users/user-guide-query/gap-fill-functions"),"."),(0,r.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,r.kt)("p",null,"Let us use the sample query given above as an example to understand what's going on behind the scenes and how Pinot executes the gapfill queries."),(0,r.kt)("h3",{id:"request-flow"},"Request Flow"),(0,r.kt)("p",null,"Here is the list of steps in executing the query at a high level:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Pinot Broker receives the gapfill query. It will strip off the gapfill part and send out the stripped SQL query to the pinot server."),(0,r.kt)("li",{parentName:"ol"},"The pinot server will process the query as a normal query and return the result back to the pinot broker."),(0,r.kt)("li",{parentName:"ol"},"The pinot broker will run the DataTableReducer to merge the results from pinot servers. The result will be sent to GapfillProcessor."),(0,r.kt)("li",{parentName:"ol"},"The GapfillProcessor will gapfill the received result and apply the filter against the gap-filled result."),(0,r.kt)("li",{parentName:"ol"},"Post-Gapfill aggregation and filtering will be applied to the result from the last step.")),(0,r.kt)("p",null,"There are two gapfill-specific steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"When Pinot Broker Server receives the gapfill SQL query, it will strip out gapfill related information and send out the stripped SQL query to the pinot server"),(0,r.kt)("li",{parentName:"ol"},"GapfillProcessor will process the result from BrokerReducerService. The gapfill logic will be applied to the reduced result.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.datocms-assets.com/75153/1661700601-gapfill-steps.png",alt:"Gapfill steps",title:"Gapfill steps"})),(0,r.kt)("p",null,"Here is the stripped version of the sql query sent to servers for the query shared above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DATETIMECONVERT(event_time,'1:MILLISECONDS:EPOCH',\n               '1:MILLISECONDS:SIMPLE_DATE_FORMAT:yyyy-MM-dd HH:mm:ss.SSS','30:MINUTES') AS time_col,\n               lot_id, lastWithTime(is_occupied, event_time, 'INT') AS status\n        FROM parking_data\n        WHERE event_time >= 1633078800000 AND  event_time <= 1633089600000\n        GROUP BY 1, 2\n        ORDER BY 1\n        LIMIT 100\n")),(0,r.kt)("h3",{id:"execution-plan"},"Execution Plan"),(0,r.kt)("p",null,"The sample execution plan for this query is as shown in the figure below:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.datocms-assets.com/75153/1661700642-execution-plan.png",alt:"Sample query execution plan",title:"Sample query execution plan"})),(0,r.kt)("h3",{id:"time-and-space-complexity"},"Time and Space complexity:"),(0,r.kt)("p",null,"Let us say there are M entities, R rows returned from servers, and N time buckets. The data is gapfilled time bucket by time bucket to limit the broker memory usage to O(M + N + R). When the data is gapfilled for a time bucket, it will be aggregated and stored in the final result (which has N slots). The previous values for each of the M entities are maintained in memory and carried forward as the gapfilling is performed in sequence. The time complexity is O(M ","*"," N) where M is the number of entities and N is the number of time buckets."),(0,r.kt)("h3",{id:"challenges"},"Challenges"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.datocms-assets.com/75153/1661700716-challenges.png",alt:"Sample server challenges graph",title:"Sample server challenges graph"})),(0,r.kt)("p",null,"As the time-series datasets are enormous and partitioned, it's hard to get answers to the following questions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How many different entities exist within the query time frame. In the temporal partition scheme demonstrated above, a server/partition may not know the answer."),(0,r.kt)("li",{parentName:"ul"},"What's the previously observed value for entities especially for the first data points in a time bucket where previous time buckets don\u2019t exist in the same server.")),(0,r.kt)("p",null,"For the scenario shown in the figure above, server2 may not know about the circle entity, as there are no events for the circle in Server2. It would also not know the last observed value for the square entity frame beginning of the time bucket till the first observed value timestamp within the partition."),(0,r.kt)("h2",{id:"the-future-work"},"The Future Work"),(0,r.kt)("p",null,"When doing the gapfill for one or a few entities, there might not be too much data. But when we deal with a large dataset that has multiple entities queried over a long date range without any filtering, this gets tricky. Since gapfill happens at the pinot broker, it will become very slow and the broker will become a bottleneck. The raw data transferred from servers to brokers would be enormous. Data explodes when interpolated. Parallelism is limited as the single broker instance is handling the query."),(0,r.kt)("p",null,"The next step of the gapfill project is to remove the pinot broker as a bottleneck. The gapfill logic will be pushed down to the servers and be running where the data live. This will reduce the data transmission and increase the parallelism and performance of gapfill."))}c.isMDXComponent=!0}}]);