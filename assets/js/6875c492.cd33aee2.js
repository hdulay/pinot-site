"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8610,0],{4137:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return p}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(a),g=n,p=u["".concat(s,".").concat(g)]||u[g]||d[g]||l;return a?r.createElement(p,o(o({ref:t},m),{},{components:a})):r.createElement(p,o({ref:t},m))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},2903:function(e,t,a){a.d(t,{Z:function(){return g}});var r=a(7294),n=a(6010),l=a(4137),o=a(7130),i=a(2511),s=a(4395),c=a(5386),m=a(4175),u=a(7680),d={blogPostTitle:"blogPostTitle_d4p0",blogPostData:"blogPostData_-Im+",blogPostDetailsFull:"blogPostDetailsFull_xD8n"};var g=function(e){var t,a,g,p=(a=(0,s.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,o.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),f=e.children,h=e.frontMatter,b=e.metadata,E=e.truncated,v=e.isBlogPostPage,y=void 0!==v&&v,_=b.date,k=b.formattedDate,N=b.permalink,Z=b.tags,w=b.readingTime,T=b.title,P=b.editUrl,O=h.author,I=h.image,L=h.keywords,j=h.author_url||h.authorURL,x=h.author_title||h.authorTitle,D=h.author_image_url||h.authorImageURL;return r.createElement(r.Fragment,null,r.createElement(m.Z,{keywords:L,image:I}),r.createElement("article",{className:y?void 0:"margin-bottom--xl"},(g=y?"h1":"h2",r.createElement("header",null,r.createElement(g,{className:d.blogPostTitle},y?T:r.createElement(i.Z,{to:N},T)),r.createElement("div",{className:(0,n.Z)(d.blogPostData,"margin-vert--md")},r.createElement("time",{dateTime:_},k),w&&r.createElement(r.Fragment,null," \xb7 ",p(w))),r.createElement("div",{className:"avatar margin-vert--md"},D&&r.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:j},r.createElement("img",{src:D,alt:O})),r.createElement("div",{className:"avatar__intro"},O&&r.createElement(r.Fragment,null,r.createElement("div",{className:"avatar__name"},r.createElement(i.Z,{href:j},O)),r.createElement("small",{className:"avatar__subtitle"},x)))))),r.createElement("div",{className:"markdown"},r.createElement(l.Zo,{components:c.Z},f)),(Z.length>0||E)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(t={},t[d.blogPostDetailsFull]=y,t))},Z.length>0&&r.createElement("div",{className:"col"},r.createElement("b",null,r.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),Z.map((function(e){var t=e.label,a=e.permalink;return r.createElement(i.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),y&&P&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:P})),!y&&E&&r.createElement("div",{className:"col text--right"},r.createElement(i.Z,{to:b.permalink,"aria-label":"Read more about "+T},r.createElement("b",null,r.createElement(o.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},4112:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(7294),n=a(6010),l=a(2511),o={sidebar:"sidebar_q+wC",sidebarItemTitle:"sidebarItemTitle_9G5K",sidebarItemList:"sidebarItemList_6T4b",sidebarItem:"sidebarItem_cjdF",sidebarItemLink:"sidebarItemLink_zyXk",sidebarItemLinkActive:"sidebarItemLinkActive_wcJs"},i=a(7130);function s(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,n.Z)(o.sidebar,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,n.Z)(o.sidebarItemTitle,"margin-bottom--md")},t.title),r.createElement("ul",{className:o.sidebarItemList},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:o.sidebarItem},r.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:o.sidebarItemLink,activeClassName:o.sidebarItemLinkActive},e.title))}))))}},3866:function(e,t,a){a.r(t);var r=a(7294),n=a(3865),l=a(2903),o=a(2511),i=a(4112),s=a(7130),c=a(4395);t.default=function(e){var t,a=e.metadata,m=e.items,u=e.sidebar,d=a.allTagsPath,g=a.name,p=a.count,f=(t=(0,c.c2)().selectMessage,function(e){return t(e,(0,s.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),h=(0,s.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:f(p),tagName:g});return r.createElement(n.Z,{title:h,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("aside",{className:"col col--3"},r.createElement(i.Z,{sidebar:u})),r.createElement("main",{className:"col col--7"},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,h),r.createElement(o.Z,{href:d},r.createElement(s.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),m.map((function(e){var t=e.content;return r.createElement(l.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},r.createElement(t,null))}))))))}},7680:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(7294),n=a(7130),l=a(7462),o=a(3366),i=a(6010),s="iconEdit_mS5F",c=["className"],m=function(e){var t=e.className,a=(0,o.Z)(e,c);return r.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(s,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function u(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},r.createElement(m,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},5386:function(e,t,a){var r=a(7294),n=a(2511),l=a(3522),o=a(4145),i={code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(l.Z,e):r.createElement("code",e)},a:function(e){return r.createElement(n.Z,e)},pre:function(e){var t,a=e.children;return(0,r.isValidElement)(null==a||null==(t=a.props)?void 0:t.children)?null==a?void 0:a.props.children:r.createElement(l.Z,(0,r.isValidElement)(a)?null==a?void 0:a.props:{children:a})},h1:(0,o.Z)("h1"),h2:(0,o.Z)("h2"),h3:(0,o.Z)("h3"),h4:(0,o.Z)("h4"),h5:(0,o.Z)("h5"),h6:(0,o.Z)("h6")};t.Z=i},283:function(e,t,a){a.d(t,{Z:function(){return f}});var r=a(7462),n=a(3366),l=a(7294),o=a(6010),i=a(2511),s=a(4395),c=a(9524),m={footerLogoLink:"footerLogoLink_94kH",footerCopyright:"footerCopyright_-piB"},u=a(4087),d=["to","href","label","prependBaseUrlToHref"];function g(e){var t=e.to,a=e.href,o=e.label,s=e.prependBaseUrlToHref,m=(0,n.Z)(e,d),u=(0,c.Z)(t),g=(0,c.Z)(a,{forcePrependBaseUrl:!0});return l.createElement(i.Z,(0,r.Z)({className:"footer__link-item"},a?{href:s?g:a}:{to:u},m),o)}var p=function(e){var t=e.sources,a=e.alt;return l.createElement(u.Z,{className:"footer__logo",alt:a,sources:t})};var f=function(){var e=(0,s.LU)().footer,t=e||{},a=t.copyright,r=t.links,n=void 0===r?[]:r,u=t.logo,d=void 0===u?{}:u,f={light:(0,c.Z)(d.src),dark:(0,c.Z)(d.srcDark||d.src)};return e?l.createElement("footer",{className:(0,o.Z)("footer",{"footer--dark":"dark"===e.style})},l.createElement("div",{className:"container"},n&&n.length>0&&l.createElement("div",{className:"row footer__links"},n.map((function(e,t){return l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(g,e))}))):null)}))),(d||a)&&l.createElement("div",{className:"footer__bottom text--center"},d&&(d.src||d.srcDark)&&l.createElement("div",{className:"margin-bottom--sm"},d.href?l.createElement(i.Z,{href:d.href,className:m.footerLogoLink},l.createElement(p,{alt:d.alt,sources:f})):l.createElement(p,{alt:d.alt,sources:f})),a?l.createElement("div",{className:m.footerCopyright,dangerouslySetInnerHTML:{__html:a}}):null))):null}}}]);