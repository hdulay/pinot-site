"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9434],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),g=o,f=u["".concat(l,".").concat(g)]||u[g]||m[g]||s;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,r[1]=i;for(var p=2;p<s;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3221:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var a=n(7462),o=n(3366),s=(n(7294),n(4137)),r=["components"],i={title:"Apache Pinot\u2122 0.12 - Consumer Record Lag",author:"Mark Needham",author_title:"Mark Needham",author_url:"https://www.linkedin.com/in/lakshmanan-velusamy-a778a517/",author_image_url:"https://www.datocms-assets.com/75153/1661544338-mark-needham.png",description:"This post will explore a new API endpoint that lets you check how much Pinot is lagging when ingesting from Apache Kafka.",keywords:["Apache Pinot","Apache Pinot 0.11.0","hybrid tables","consumer record lag","Kafka"],tags:["Pinot","Data","Analytics","User-Facing Analytics","consumer record lag","kafka"]},l=void 0,p={permalink:"/blog/2023/03/30/Apache-Pinot-0-12-Consumer-Record-Lag",editUrl:"https://github.com/apache/pinot-site/edit/dev/website/blog/2023-03-30-Apache-Pinot-0-12-Consumer-Record-Lag.md",source:"@site/blog/2023-03-30-Apache-Pinot-0-12-Consumer-Record-Lag.md",title:"Apache Pinot\u2122 0.12 - Consumer Record Lag",description:"This post will explore a new API endpoint that lets you check how much Pinot is lagging when ingesting from Apache Kafka.",date:"2023-03-30T00:00:00.000Z",formattedDate:"March 30, 2023",tags:[{label:"Pinot",permalink:"/blog/tags/pinot"},{label:"Data",permalink:"/blog/tags/data"},{label:"Analytics",permalink:"/blog/tags/analytics"},{label:"User-Facing Analytics",permalink:"/blog/tags/user-facing-analytics"},{label:"consumer record lag",permalink:"/blog/tags/consumer-record-lag"},{label:"kafka",permalink:"/blog/tags/kafka"}],readingTime:4.55,truncated:!1,prevItem:{title:"Geospatial Indexing in Apache Pinot",permalink:"/blog/2023/05/11/Geospatial-Indexing-in-Apache-Pinot"},nextItem:{title:"Apache Pinot\u2122 0.12 - Configurable Time Boundary",permalink:"/blog/2023/02/21/Apache-Pinot-0-12-Configurable-Time-Boundary"}},c=[{value:"Why do we need this?",id:"why-do-we-need-this",children:[]},{value:"Worked Example",id:"worked-example",children:[]},{value:"Summary",id:"summary",children:[]}],u={toc:c},m="wrapper";function g(e){var t=e.components,n=(0,o.Z)(e,r);return(0,s.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://youtu.be/JJEh_kBfJts"},(0,s.kt)("img",{parentName:"a",src:"https://i3.ytimg.com/vi/JJEh_kBfJts/maxresdefault.jpg",alt:"Watch the video"}))),(0,s.kt)("p",null,"The Apache Pinot community recently released version ",(0,s.kt)("a",{parentName:"p",href:"https://docs.pinot.apache.org/basics/releases/0.12.0"},"0.12.0"),", which has lots of goodies for you to play with. I\u2019ve been exploring and writing about those features in a series of blog posts."),(0,s.kt)("p",null,"This post will explore a new API endpoint that lets you check how much Pinot is lagging when ingesting from Apache Kafka."),(0,s.kt)("h2",{id:"why-do-we-need-this"},"Why do we need this?"),(0,s.kt)("p",null,"A common question in the Pinot community is how to work out the consumption status of real-time tables.\xa0"),(0,s.kt)("p",null,"This was a tricky one to answer, but Pinot 0.12 sees the addition of a new API that lets us see exactly what\u2019s going on."),(0,s.kt)("h2",{id:"worked-example"},"Worked Example"),(0,s.kt)("p",null,"Let\u2019s have a look at how it works with help from a worked example.\xa0"),(0,s.kt)("p",null,"First, we\u2019re going to create a Kafka topic with 5 partitions:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it kafka-lag-blog kafka-topics.sh \\\n--bootstrap-server localhost:9092 \\\n--partitions 5 \\\n--topic events \\\n--create \n")),(0,s.kt)("p",null,"We\u2019re going to populate this topic with data from a data generator, which is shown below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'import datetime, uuid, random, json, click, time\n\n@click.command()\n@click.option(\'--sleep\', default=0.0, help=\'Sleep between each message\')\ndef generate(sleep):\n    while True:\n        ts = datetime.datetime.now().strftime("%Y-%m-%dT%H:%M:%S.%fZ")\n        id = str(uuid.uuid4())\n        count = random.randint(0, 1000)\n        print(json.dumps({"tsString": ts, "uuid": id, "count": count}))\n        time.sleep(sleep)\n\nif __name__ == \'__main__\':\n    generate()\n')),(0,s.kt)("p",null,"We can see an example of the messages generated by this script by running the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"python datagen.py --sleep 0.01 2>/dev/null | head -n3 | jq -c\n")),(0,s.kt)("p",null,"You should see something like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{"tsString":"2023-03-17T12:10:03.854680Z","uuid":"f3b7b5d3-b352-4cfb-a5e3-527f2c663143","count":690}\n{"tsString":"2023-03-17T12:10:03.864815Z","uuid":"eac57622-4b58-4456-bb38-96d1ef5a1ed5","count":522}\n{"tsString":"2023-03-17T12:10:03.875723Z","uuid":"65926a80-208a-408b-90d0-36cf74c8923a","count":154}\n')),(0,s.kt)("p",null,"So far, so good. Let\u2019s now ingest this data into Kafka:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"python datagen.py --sleep 0.01 2>/dev/null |\njq -cr --arg sep \xf8 '[.uuid, tostring] | join($sep)' |\nkcat -P -b localhost:9092 -t events -K \n")),(0,s.kt)("p",null,"Next we\u2019re going to create a Pinot schema and table. First, the schema config:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "schemaName": "events",\n    "dimensionFieldSpecs": [{"name": "uuid", "dataType": "STRING"}],\n    "metricFieldSpecs": [{"name": "count", "dataType": "INT"}],\n    "dateTimeFieldSpecs": [\n      {\n        "name": "ts",\n        "dataType": "TIMESTAMP",\n        "format": "1:MILLISECONDS:EPOCH",\n        "granularity": "1:MILLISECONDS"\n      }\n    ]\n  }\n')),(0,s.kt)("p",null,"And now, the table config:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "tableName": "events",\n    "tableType": "REALTIME",\n    "segmentsConfig": {\n      "timeColumnName": "ts",\n      "schemaName": "events",\n      "replication": "1",\n      "replicasPerPartition": "1"\n    },\n    "tableIndexConfig": {\n      "loadMode": "MMAP",\n      "streamConfigs": {\n        "streamType": "kafka",\n        "stream.kafka.topic.name": "events",\n        "stream.kafka.broker.list": "kafka-lag-blog:9093",\n        "stream.kafka.consumer.type": "lowlevel",\n        "stream.kafka.consumer.prop.auto.offset.reset": "smallest",\n        "stream.kafka.consumer.factory.class.name": "org.apache.pinot.plugin.stream.kafka20.KafkaConsumerFactory",\n        "stream.kafka.decoder.class.name": "org.apache.pinot.plugin.stream.kafka.KafkaJSONMessageDecoder",\n        "realtime.segment.flush.threshold.rows": "10000000"\n      }\n    },\n    "ingestionConfig": {\n      "transformConfigs": [\n        {\n          "columnName": "ts",\n          "transformFunction": "FromDateTime(tsString, \'YYYY-MM-dd\'\'T\'\'HH:mm:ss.SSSSSS\'\'Z\'\'\')"\n        }\n      ]\n    },\n    "tenants": {},\n    "metadata": {}\n  }\n')),(0,s.kt)("p",null,"We can create both the table and schema using the ",(0,s.kt)("em",{parentName:"p"},"AddTable")," command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'docker run \\\n  --network lag_blog \\\n  -v $PWD/config:/config \\\n  apachepinot/pinot:0.12.0-arm64 AddTable \\\n  -schemaFile /config/schema.json \\\n  -tableConfigFile /config/table.json \\\n  -controllerHost "pinot-controller-lag-blog" \\\n  -exec\n')),(0,s.kt)("p",null,"Now let\u2019s call the /consumingSegmentsInfo endpoint to see what\u2019s going on:"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},'curl "http://localhost:9000/tables/events/consumingSegmentsInfo" 2>/dev/null | jq')),(0,s.kt)("p",null,"The output of calling this end point is shown below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "_segmentToConsumingInfoMap": {\n    "events__0__0__20230317T1133Z": [\n      {\n        "serverName": "Server_172.29.0.4_8098",\n        "consumerState": "CONSUMING",\n        "lastConsumedTimestamp": 1679052823350,\n        "partitionToOffsetMap": {\n          "0": "969"\n        },\n        "partitionOffsetInfo": {\n          "currentOffsetsMap": {\n            "0": "969"\n          },\n          "latestUpstreamOffsetMap": {\n            "0": "969"\n          },\n          "recordsLagMap": {\n            "0": "0"\n          },\n          "availabilityLagMsMap": {\n            "0": "26"\n          }\n        }\n      }\n    ],\n\u2026\n}\n')),(0,s.kt)("p",null,"If we look under ",(0,s.kt)("em",{parentName:"p"},"partitionOffsetInfo"),", we can see what\u2019s going on:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"currentOffsetsMap is Pinot\u2019s current offset"),(0,s.kt)("li",{parentName:"ul"},"latestUpstreamOffsetMap is Kafka\u2019s offset"),(0,s.kt)("li",{parentName:"ul"},"recordsLagMap is the record lag"),(0,s.kt)("li",{parentName:"ul"},"availabilityLagMsMap is the time lag")),(0,s.kt)("p",null,"This output is a bit unwieldy, so let\u2019s create a bash function to tidy up the output into something that\u2019s easier to consume:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'function consuming_info() {\n  curl "http://localhost:9000/tables/events/consumingSegmentsInfo" 2>/dev/null | \n  jq -rc \'[._segmentToConsumingInfoMap | keys[] as $k | (.[$k] | .[] | {\n    segment: $k,\n    kafka: (.partitionOffsetInfo.currentOffsetsMap | keys[] as $k | (.[$k])),\n    pinot: (.partitionOffsetInfo.latestUpstreamOffsetMap | keys[] as $k | (.[$k])),\n    recordLag: (.partitionOffsetInfo.recordsLagMap | keys[] as $k | (.[$k])),\n    timeLagMs: (.partitionOffsetInfo.availabilityLagMsMap | keys[] as $k | (.[$k]))\n})] | (.[0] |keys_unsorted | @tsv), (.[]  |map(.) |@tsv)\'  | column -t\n  printf "\\n"\n\n}\n')),(0,s.kt)("p",null,"Let\u2019s call the function:"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"consuming\\_info")),(0,s.kt)("p",null,"We\u2019ll see the following output:"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://www.datocms-assets.com/75153/1680190272-image2.png",alt:"Consumer record lag output",title:"Consumer record lag output"})),(0,s.kt)("p",null,"Now let\u2019s put it in a script and call the watch command so that it will be refreshed every couple of seconds:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'!#/bin/bash\n\nfunction consuming_info() {\n  curl "http://localhost:9000/tables/events/consumingSegmentsInfo" 2>/dev/null |\n  jq -rc \'[._segmentToConsumingInfoMap | keys[] as $k | (.[$k] | .[] | {\n    segment: $k,\n    kafka: (.partitionOffsetInfo.currentOffsetsMap | keys[] as $k | (.[$k])),\n    pinot: (.partitionOffsetInfo.latestUpstreamOffsetMap | keys[] as $k | (.[$k])),\n    recordLag: (.partitionOffsetInfo.recordsLagMap | keys[] as $k | (.[$k])),\n    timeLagMs: (.partitionOffsetInfo.availabilityLagMsMap | keys[] as $k | (.[$k]))\n})] | (.[0] |keys_unsorted | @tsv), (.[]  |map(.) |@tsv)\'  | column -t\n  printf "\\n"\n}\n\nexport -f consuming_info\nwatch bash -c consuming_info\n\n')),(0,s.kt)("p",null,"Give permissions to run it as a script:"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"chmod u+x watch\\_consuming\\_info.sh")),(0,s.kt)("p",null,"And finally, run it:"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"./watch\\_consuming\\_info.sh")),(0,s.kt)("p",null,"This will print out a new table every two seconds. Let\u2019s now make things more interesting by removing the sleep from our ingestion command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"python datagen.py  2>/dev/null |\njq -cr --arg sep \xf8 '[.uuid, tostring] | join($sep)' |\nkcat -P -b localhost:9092 -t events -K\xf8\n")),(0,s.kt)("p",null,"And now if we look at the watch output:"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://www.datocms-assets.com/75153/1680190286-image1.png",alt:"Apache Pinot Consumer Record Lag",title:"Apache Pinot Consumer Record Lag"})),(0,s.kt)("p",null,"We get some transitory lag, but it generally goes away by the next time the command is run.\xa0"),(0,s.kt)("h2",{id:"summary"},"Summary"),(0,s.kt)("p",null,"I love this feature, and it solves a problem I\u2019ve struggled with when using my datasets. I hope you\u2019ll find it just as useful."),(0,s.kt)("p",null,"Give it a try, and let us know how you get on. If you have any questions about this feature, feel free to join us on ",(0,s.kt)("a",{parentName:"p",href:"https://stree.ai/slack"},"Slack"),", where we\u2019ll be happy to help you out."))}g.isMDXComponent=!0}}]);