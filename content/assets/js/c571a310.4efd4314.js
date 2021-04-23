/*! For license information please see c571a310.4efd4314.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),i=(n(0),n(129)),o=n(137),c=n(136),s={title:"AWS Quickstart",sidebar_label:"AWS",description:"Run Pinot on AWS"},l={unversionedId:"administration/installation/cloud/aws",id:"administration/installation/cloud/aws",isDocsHomePage:!1,title:"AWS Quickstart",description:"Run Pinot on AWS",source:"@site/docs/administration/installation/cloud/aws.md",sourceDirName:"administration/installation/cloud",slug:"/administration/installation/cloud/aws",permalink:"/docs/administration/installation/cloud/aws",editUrl:"https://github.com/apache/incubator-pinot/edit/master/website/docs/administration/installation/cloud/aws.md",version:"current",sidebar_label:"AWS",frontMatter:{title:"AWS Quickstart",sidebar_label:"AWS",description:"Run Pinot on AWS"},sidebar:"docs",previous:{title:"Running Pinot in Kubernetes",permalink:"/docs/administration/installation/cloud/on-premise"},next:{title:"GCP Quickstart",permalink:"/docs/administration/installation/cloud/gcp"}},u=[{value:"Tooling Installation",id:"tooling-installation",children:[]},{value:"(Optional) Login to your AWS account",id:"optional-login-to-your-aws-account",children:[{value:"(Optional) Create a Kubernetes cluster(EKS) in AWS",id:"optional-create-a-kubernetes-clustereks-in-aws",children:[]}]},{value:"Connect to an existing cluster",id:"connect-to-an-existing-cluster",children:[]},{value:"Pinot Quickstart",id:"pinot-quickstart",children:[]},{value:"Delete a Kubernetes Cluster",id:"delete-a-kubernetes-cluster",children:[]}],b={toc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This document provides the basic instruction to set up a Kubernetes Cluster on ",Object(i.b)("a",{parentName:"p",href:"https://aws.amazon.com/eks/"},"Amazon Elastic Kubernetes Service (Amazon EKS)")),Object(i.b)(o.a,{type:"info",mdxType:"Alert"}," Because Pinot must be manually updated on Nix, new Pinot releases will be delayed. Generally new Pinot releases are made available within a few days."),Object(i.b)("h2",{id:"tooling-installation"},"Tooling Installation"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Install Pinot"),Object(i.b)("p",{parentName:"li"},"Please follow this link (",Object(i.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl"},"https://kubernetes.io/docs/tasks/tools/install-kubectl"),") to install kubectl."),Object(i.b)("p",{parentName:"li"},"For Mac User"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"brew install kubernetes-cli\n")),Object(i.b)("p",{parentName:"li"},"Please check kubectl version after installation:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"kubectl version\n")),Object(i.b)(o.a,{icon:!1,type:"info",mdxType:"Alert"},"QuickStart scripts are tested under kubectl client version v1.16.3 and server version v1.13.12")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Install Helm"),Object(i.b)("p",{parentName:"li"},"Please follow this link (",Object(i.b)("a",{parentName:"p",href:"https://helm.sh/docs/using_helm/#installing-helm"},"https://helm.sh/docs/using_helm/#installing-helm"),") to install helm."),Object(i.b)("p",{parentName:"li"},"For Mac User"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"brew install kubernetes-helm\n")),Object(i.b)("p",{parentName:"li"},"Please check helm version after installation."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"helm version\n")),Object(i.b)(o.a,{icon:!1,type:"info",mdxType:"Alert"},Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This QuickStart provides helm supports for helm v3.0.0 and v2.12.1."),Object(i.b)("li",{parentName:"ul"},"Please pick the script based on your helm version.")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Install AWS CLI"),Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"(https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html#install-tool-bundled)"},"Install AWS CLI")),Object(i.b)("p",{parentName:"li"},"For Mac User"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},'curl "https://d1vvhvl2y92vvt.cloudfront.net/awscli-exe-macos.zip" -o "awscliv2.zip"\nunzip awscliv2.zip\nsudo ./aws/install\n'))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Install Eksctl"),Object(i.b)("p",{parentName:"li"},"Install ",Object(i.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html#installing-eksctl"},"AWS CLI")),Object(i.b)("p",{parentName:"li"},"For Mac User"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"brew tap weaveworks/tap\nbrew install weaveworks/tap/eksctl\n")))),Object(i.b)("h2",{id:"optional-login-to-your-aws-account"},"(Optional) Login to your AWS account"),Object(i.b)("p",null,"For first time AWS user, please register your ",Object(i.b)("a",{parentName:"p",href:"https://aws.amazon.com/"},"aws account")),Object(i.b)("p",null,"Once created the account, you can go to ",Object(i.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/iam/home#/home"},"AWS Identity and Access Management (IAM)")," to create a user and create access keys under Security Credential tab."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"aws configure\n")),Object(i.b)(o.a,{type:"info",mdxType:"Alert"}," Environment variables AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY will override  AWS configuration stored in file ~/.aws/credentials"),Object(i.b)("h3",{id:"optional-create-a-kubernetes-clustereks-in-aws"},"(Optional) Create a Kubernetes cluster(EKS) in AWS"),Object(i.b)("p",null,"Below script will create a 3 nodes cluster named pinot-quickstart in us-west-2 with t3.small machines for demo purposes.\nPlease modify the parameters in the example command below:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"EKS_CLUSTER_NAME=pinot-quickstart\neksctl create cluster \\\n  --name ${EKS_CLUSTER_NAME} \\\n  --version 1.14 \\\n  --region us-west-2 \\\n  --nodegroup-name standard-workers \\\n  --node-type t3.small \\\n  --nodes 3 \\\n  --nodes-min 3 \\\n  --nodes-max 4 \\\n  --node-ami auto\n")),Object(i.b)("p",null,"You can monitor cluster status by command:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"EKS_CLUSTER_NAME=pinot-quickstart\naws eks describe-cluster --name ${EKS_CLUSTER_NAME}\n")),Object(i.b)("p",null,"Once the cluster is in ACTIVE status, it's ready to be used."),Object(i.b)("h2",{id:"connect-to-an-existing-cluster"},"Connect to an existing cluster"),Object(i.b)("p",null,"Simply run below command to get the credential for the cluster pinot-quickstart that you just created or your existing cluster."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"EKS_CLUSTER_NAME=pinot-quickstart\naws eks update-kubeconfig --name ${EKS_CLUSTER_NAME}\n")),Object(i.b)("p",null,"To verify the connection, you can run:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"kubectl get nodes\n")),Object(i.b)("h2",{id:"pinot-quickstart"},"Pinot Quickstart"),Object(i.b)("p",null,"Please follow this ",Object(i.b)("a",{parentName:"p",href:"/docs/administration/installation/cloud/on-premises"},"Kubernetes QuickStart")," to deploy your Pinot Demo."),Object(i.b)(c.a,{to:"/docs/administration/installation/cloud/on-premises",mdxType:"Jump"},"Kubernetes Quickstart"),Object(i.b)("h2",{id:"delete-a-kubernetes-cluster"},"Delete a Kubernetes Cluster"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"EKS_CLUSTER_NAME=pinot-quickstart\naws eks delete-cluster --name ${EKS_CLUSTER_NAME}\n")))}p.isMDXComponent=!0},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),m=a,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||i;return n?r.a.createElement(d,c(c({ref:t},l),{},{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},130:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)){if(a.length){var o=r.apply(null,a);o&&e.push(o)}}else if("object"===i)if(a.toString===Object.prototype.toString)for(var c in a)n.call(a,c)&&a[c]&&e.push(c);else e.push(a.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},131:function(e,t,n){"use strict";var a=n(8),r=n(0),i=n.n(r),o=n(10),c=n(132),s=n(7),l=Object(r.createContext)({collectLink:function(){}}),u=n(134);t.a=function(e){var t,n,b,p=e.isNavLink,m=e.to,d=e.href,f=e.activeClassName,h=e.isActive,O=e["data-noBrokenLinkCheck"],j=e.autoAddBaseUrl,v=void 0===j||j,g=Object(a.a)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),N=Object(u.b)().withBaseUrl,w=Object(r.useContext)(l),y=m||d,k=Object(c.a)(y),E=null==y?void 0:y.replace("pathname://",""),S=void 0!==E?(n=E,v&&function(e){return e.startsWith("/")}(n)?N(n):n):void 0,A=Object(r.useRef)(!1),C=p?o.e:o.c,P=s.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!P&&k&&null!=S&&window.docusaurus.prefetch(S),function(){P&&b&&b.disconnect()}}),[S,P,k]);var x=null!==(t=null==S?void 0:S.startsWith("#"))&&void 0!==t&&t,T=!S||!k||x;return S&&k&&!x&&!O&&w.collectLink(S),T?i.a.createElement("a",Object.assign({href:S},y&&!k&&{target:"_blank",rel:"noopener noreferrer"},g)):i.a.createElement(C,Object.assign({},g,{onMouseEnter:function(){A.current||null==S||(window.docusaurus.preload(S),A.current=!0)},innerRef:function(e){var t,n;P&&e&&k&&(t=e,n=function(){null!=S&&window.docusaurus.prefetch(S)},(b=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(b.unobserve(t),b.disconnect(),n())}))}))).observe(t))},to:S||""},p&&{isActive:h,activeClassName:f}))}},132:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},134:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(16),r=n(132);function i(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,c=void 0!==o&&o,s=i.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},136:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(131),o=n(130),c=n.n(o);n(57);t.a=function(e){var t=e.children,n=e.className,a=e.badge,o=e.icon,s=e.size,l=e.target,u=e.to,b=c()("jump-to","jump-to--"+s,n),p=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},r.a.createElement("div",{className:"jump-to--main"},a?r.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",t),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(o||"chevron-right")+" arrow"}))));return l?r.a.createElement("a",{href:u,target:l,className:b},p):r.a.createElement(i.a,{to:u,className:b},p)}},137:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(130),o=n.n(i);n(58);t.a=function(e){var t=e.children,n=e.classNames,a=e.fill,i=e.icon,c=e.type,s=null;switch(c){case"danger":s="alert-triangle";break;case"success":s="check-circle";break;case"warning":s="alert-triangle";break;default:s="info"}return r.a.createElement("div",{className:o()(n,"alert","alert--"+c,{"alert--fill":a,"alert--icon":!1!==i}),role:"alert"},!1!==i&&r.a.createElement("i",{className:o()("feather","icon-"+(i||s))}),t)}}}]);