(self.webpackChunkleejaehyeon=self.webpackChunkleejaehyeon||[]).push([[989],{6107:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return d},default:function(){return m}});var r=n(7294),o=n(1883),l=n(8771),a=n(8678),u=n(9357),c=n(5683),f=n.n(c),i="toc-module--activeItem--db864";var s=e=>{let{content:t}=e;const n=e=>{const t=e.target,n=document.querySelector("."+i);n&&n.classList.remove(i),t.classList.add(i)};return(0,r.useEffect)((()=>{const e=()=>{const e=document.getElementsByTagName("aside");if(!e||e.length<0||!e[0]||!e[0].style||0===e[0].offsetWidth)return;const t=document.getElementsByClassName("anchor-header");if(!t||t.length<=0)return;let n=null;const r=Array.from(t);for(let o of r)if(o.getBoundingClientRect().top>-30){n=o.getAttribute("href");break}if(n||(n=r[r.length-1].getAttribute("href")),document.querySelectorAll("aside a.selected").forEach((e=>{e.classList.remove("selected")})),n){const e=document.querySelector("aside a[href='"+decodeURIComponent(n)+"']");e&&e.classList.add("selected")}};return"undefined"!=typeof document&&document.body.addEventListener("scroll",e),()=>{"undefined"!=typeof document&&document.body.removeEventListener("scroll",e)}}),[]),r.createElement("div",{className:"toc-module--toc--dc590",onClick:n,onKeyDown:e=>{"Enter"===e.key&&n(e)},role:"button",tabIndex:0,"aria-label":"Table of Contents",dangerouslySetInnerHTML:{__html:t}})};const d=e=>{let{data:{markdownRemark:t}}=e;return r.createElement(u.Z,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt})};var m=e=>{var t;let{data:{previous:n,next:u,site:c,markdownRemark:i},location:d}=e;const m=(null===(t=c.siteMetadata)||void 0===t?void 0:t.title)||"Title",x=i.tableOfContents;return r.createElement(a.Z,{location:d,title:m},r.createElement("article",{className:"blog-post",itemScope:!0,itemType:"https://schema.org/Article"},r.createElement("header",null,r.createElement("h1",{itemProp:"headline"},i.frontmatter.title),r.createElement("p",null,i.frontmatter.date)),r.createElement("section",{dangerouslySetInnerHTML:{__html:i.html},itemProp:"articleBody"}),r.createElement("hr",null),r.createElement(s,{content:x}),r.createElement("div",{className:"tags"},r.createElement("ul",null,i.frontmatter.tags?i.frontmatter.tags.map((e=>r.createElement("li",{key:f()(e)},r.createElement(o.Link,{to:"/tags/"+f()(e)},f()(e))))):null)),r.createElement("footer",null,r.createElement(l.Z,null))),r.createElement("nav",{className:"blog-post-nav"},r.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.createElement("li",null,n&&r.createElement(o.Link,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),r.createElement("li",null,u&&r.createElement(o.Link,{to:u.fields.slug,rel:"next"},u.frontmatter.title," →")))))}},5683:function(e,t,n){var r=1/0,o="[object Symbol]",l=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,u="\\ud800-\\udfff",c="\\u2700-\\u27bf",f="a-z\\xdf-\\xf6\\xf8-\\xff",i="A-Z\\xc0-\\xd6\\xd8-\\xde",s="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",d="['’]",m="["+s+"]",x="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",g="\\d+",E="["+c+"]",p="["+f+"]",b="[^"+u+s+g+c+f+i+"]",y="(?:\\ud83c[\\udde6-\\uddff]){2}",h="[\\ud800-\\udbff][\\udc00-\\udfff]",v="["+i+"]",A="(?:"+p+"|"+b+")",j="(?:"+v+"|"+b+")",L="(?:['’](?:d|ll|m|re|s|t|ve))?",k="(?:['’](?:D|LL|M|RE|S|T|VE))?",O="(?:"+x+"|\\ud83c[\\udffb-\\udfff])"+"?",S="[\\ufe0e\\ufe0f]?",C=S+O+("(?:\\u200d(?:"+["[^"+u+"]",y,h].join("|")+")"+S+O+")*"),I="(?:"+[E,y,h].join("|")+")"+C,Z=RegExp(d,"g"),N=RegExp(x,"g"),R=RegExp([v+"?"+p+"+"+L+"(?="+[m,v,"$"].join("|")+")",j+"+"+k+"(?="+[m,v+A,"$"].join("|")+")",v+"?"+A+"+"+L,v+"+"+k,g,I].join("|"),"g"),T=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,U="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,w="object"==typeof self&&self&&self.Object===Object&&self,z=U||w||Function("return this")();var D,H=(D={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==D?void 0:D[e]});var B=Object.prototype.toString,G=z.Symbol,M=G?G.prototype:void 0,_=M?M.toString:void 0;function q(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&B.call(e)==o}(e))return _?_.call(e):"";var t=e+"";return"0"==t&&1/e==-r?"-0":t}function W(e){return null==e?"":q(e)}var Y,J=(Y=function(e,t,n){return e+(n?"-":"")+t.toLowerCase()},function(e){return function(e,t,n,r){var o=-1,l=e?e.length:0;for(r&&l&&(n=e[++o]);++o<l;)n=t(n,e[o],o,e);return n}(function(e,t,n){return e=W(e),void 0===(t=n?void 0:t)?function(e){return T.test(e)}(e)?function(e){return e.match(R)||[]}(e):function(e){return e.match(l)||[]}(e):e.match(t)||[]}(function(e){return(e=W(e))&&e.replace(a,H).replace(N,"")}(e).replace(Z,"")),Y,"")});e.exports=J}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-c68bba4c29061bfb45af.js.map