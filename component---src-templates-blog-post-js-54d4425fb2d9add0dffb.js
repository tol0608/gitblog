(self.webpackChunkleejaehyeon=self.webpackChunkleejaehyeon||[]).push([[989],{6107:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return d},default:function(){return s}});var r=n(7294),u=n(1883),l=n(8771),a=n(8678),o=n(9357),c=n(5683),f=n.n(c);var i=e=>{let{content:t}=e;return r.createElement("div",{className:"toc-module--toc--dc590",dangerouslySetInnerHTML:{__html:t}})};const d=e=>{let{data:{markdownRemark:t}}=e;return r.createElement(o.Z,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt})};var s=e=>{var t;let{data:{previous:n,next:o,site:c,markdownRemark:d},location:s}=e;const m=(null===(t=c.siteMetadata)||void 0===t?void 0:t.title)||"Title",x=d.tableOfContents;return r.createElement(a.Z,{location:s,title:m},r.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},r.createElement("header",null,r.createElement("h1",{itemProp:"headline"},d.frontmatter.title),r.createElement("p",null,d.frontmatter.date)),r.createElement("section",{dangerouslySetInnerHTML:{__html:d.html},itemProp:"articleBody"}),r.createElement("hr",null),r.createElement(i,{content:x}),r.createElement("div",{className:"tags"},r.createElement("ul",null,d.frontmatter.tags?d.frontmatter.tags.map((e=>r.createElement("li",{key:f()(e)},r.createElement(u.Link,{to:"/tags/"+f()(e)},f()(e))))):null)),r.createElement("footer",null,r.createElement(l.Z,null))),r.createElement("nav",{className:"blog-post-nav"},r.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.createElement("li",null,n&&r.createElement(u.Link,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),r.createElement("li",null,o&&r.createElement(u.Link,{to:o.fields.slug,rel:"next"},o.frontmatter.title," →")))))}},5683:function(e,t,n){var r=1/0,u="[object Symbol]",l=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o="\\ud800-\\udfff",c="\\u2700-\\u27bf",f="a-z\\xdf-\\xf6\\xf8-\\xff",i="A-Z\\xc0-\\xd6\\xd8-\\xde",d="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",s="['’]",m="["+d+"]",x="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",p="\\d+",E="["+c+"]",g="["+f+"]",b="[^"+o+d+p+c+f+i+"]",v="(?:\\ud83c[\\udde6-\\uddff]){2}",y="[\\ud800-\\udbff][\\udc00-\\udfff]",h="["+i+"]",j="(?:"+g+"|"+b+")",A="(?:"+h+"|"+b+")",O="(?:['’](?:d|ll|m|re|s|t|ve))?",k="(?:['’](?:D|LL|M|RE|S|T|VE))?",L="(?:"+x+"|\\ud83c[\\udffb-\\udfff])"+"?",S="[\\ufe0e\\ufe0f]?",I=S+L+("(?:\\u200d(?:"+["[^"+o+"]",v,y].join("|")+")"+S+L+")*"),Z="(?:"+[E,v,y].join("|")+")"+I,C=RegExp(s,"g"),U=RegExp(x,"g"),z=RegExp([h+"?"+g+"+"+O+"(?="+[m,h,"$"].join("|")+")",A+"+"+k+"(?="+[m,h+j,"$"].join("|")+")",h+"?"+j+"+"+O,h+"+"+k,p,Z].join("|"),"g"),N=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,R="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,T="object"==typeof self&&self&&self.Object===Object&&self,w=R||T||Function("return this")();var H,D=(H={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==H?void 0:H[e]});var G=Object.prototype.toString,M=w.Symbol,_=M?M.prototype:void 0,Y=_?_.toString:void 0;function J(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&G.call(e)==u}(e))return Y?Y.call(e):"";var t=e+"";return"0"==t&&1/e==-r?"-0":t}function P(e){return null==e?"":J(e)}var W,$=(W=function(e,t,n){return e+(n?"-":"")+t.toLowerCase()},function(e){return function(e,t,n,r){var u=-1,l=e?e.length:0;for(r&&l&&(n=e[++u]);++u<l;)n=t(n,e[u],u,e);return n}(function(e,t,n){return e=P(e),void 0===(t=n?void 0:t)?function(e){return N.test(e)}(e)?function(e){return e.match(z)||[]}(e):function(e){return e.match(l)||[]}(e):e.match(t)||[]}(function(e){return(e=P(e))&&e.replace(a,D).replace(U,"")}(e).replace(C,"")),W,"")});e.exports=$}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-54d4425fb2d9add0dffb.js.map