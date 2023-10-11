// ==UserScript==
// @name        Anilist Activity Saver
// @namespace   https://github.com/KanashiiDev
// @match       https://anilist.co/*
// @version     1.1.36
// @license     GPL-3.0-or-later
// @require     https://code.jquery.com/jquery-3.3.1.min.js
// @author      KanashiiDev
// @supportURL  https://github.com/KanashiiDev/Ani-ActivitySaver/issues
// @description Simple userscript/extension for AniList that allows users to save text activities.
// @run-at      document-end
// ==/UserScript==

/*minified libraries*/
/*! @license DOMPurify 3.0.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.3/LICENSE */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).DOMPurify=t()}(this,(function(){"use strict";const{entries:e,setPrototypeOf:t,isFrozen:n,getPrototypeOf:o,getOwnPropertyDescriptor:r}=Object;let{freeze:i,seal:a,create:l}=Object,{apply:c,construct:s}="undefined"!=typeof Reflect&&Reflect;c||(c=function(e,t,n){return e.apply(t,n)}),i||(i=function(e){return e}),a||(a=function(e){return e}),s||(s=function(e,t){return new e(...t)});const m=b(Array.prototype.forEach),u=b(Array.prototype.pop),f=b(Array.prototype.push),p=b(String.prototype.toLowerCase),d=b(String.prototype.toString),h=b(String.prototype.match),g=b(String.prototype.replace),T=b(String.prototype.indexOf),y=b(String.prototype.trim),E=b(RegExp.prototype.test),A=(_=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return s(_,t)});var _;function b(e){return function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return c(e,t,o)}}function N(e,o,r){var i;r=null!==(i=r)&&void 0!==i?i:p,t&&t(e,null);let a=o.length;for(;a--;){let t=o[a];if("string"==typeof t){const e=r(t);e!==t&&(n(o)||(o[a]=e),t=e)}e[t]=!0}return e}function S(t){const n=l(null);for(const[o,r]of e(t))n[o]=r;return n}function R(e,t){for(;null!==e;){const n=r(e,t);if(n){if(n.get)return b(n.get);if("function"==typeof n.value)return b(n.value)}e=o(e)}return function(e){return console.warn("fallback value for",e),null}}const w=i(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),D=i(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),L=i(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),v=i(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),x=i(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),C=i(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),k=i(["#text"]),O=i(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),I=i(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),M=i(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),U=i(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),P=a(/\{\{[\w\W]*|[\w\W]*\}\}/gm),F=a(/<%[\w\W]*|[\w\W]*%>/gm),H=a(/\${[\w\W]*}/gm),z=a(/^data-[\-\w.\u00B7-\uFFFF]/),B=a(/^aria-[\-\w]+$/),W=a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),G=a(/^(?:\w+script|data):/i),Y=a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),j=a(/^html$/i);var q=Object.freeze({__proto__:null,MUSTACHE_EXPR:P,ERB_EXPR:F,TMPLIT_EXPR:H,DATA_ATTR:z,ARIA_ATTR:B,IS_ALLOWED_URI:W,IS_SCRIPT_OR_DATA:G,ATTR_WHITESPACE:Y,DOCTYPE_NAME:j});const X=()=>"undefined"==typeof window?null:window,K=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let n=null;const o="data-tt-policy-suffix";t&&t.hasAttribute(o)&&(n=t.getAttribute(o));const r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+r+" could not be created."),null}};var V=function t(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X();const o=e=>t(e);if(o.version="3.0.3",o.removed=[],!n||!n.document||9!==n.document.nodeType)return o.isSupported=!1,o;const r=n.document,a=r.currentScript;let{document:l}=n;const{DocumentFragment:c,HTMLTemplateElement:s,Node:_,Element:b,NodeFilter:P,NamedNodeMap:F=n.NamedNodeMap||n.MozNamedAttrMap,HTMLFormElement:H,DOMParser:z,trustedTypes:B}=n,G=b.prototype,Y=R(G,"cloneNode"),V=R(G,"nextSibling"),$=R(G,"childNodes"),Z=R(G,"parentNode");if("function"==typeof s){const e=l.createElement("template");e.content&&e.content.ownerDocument&&(l=e.content.ownerDocument)}let J,Q="";const{implementation:ee,createNodeIterator:te,createDocumentFragment:ne,getElementsByTagName:oe}=l,{importNode:re}=r;let ie={};o.isSupported="function"==typeof e&&"function"==typeof Z&&ee&&void 0!==ee.createHTMLDocument;const{MUSTACHE_EXPR:ae,ERB_EXPR:le,TMPLIT_EXPR:ce,DATA_ATTR:se,ARIA_ATTR:me,IS_SCRIPT_OR_DATA:ue,ATTR_WHITESPACE:fe}=q;let{IS_ALLOWED_URI:pe}=q,de=null;const he=N({},[...w,...D,...L,...x,...k]);let ge=null;const Te=N({},[...O,...I,...M,...U]);let ye=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ee=null,Ae=null,_e=!0,be=!0,Ne=!1,Se=!0,Re=!1,we=!1,De=!1,Le=!1,ve=!1,xe=!1,Ce=!1,ke=!0,Oe=!1;const Ie="user-content-";let Me=!0,Ue=!1,Pe={},Fe=null;const He=N({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let ze=null;const Be=N({},["audio","video","img","source","image","track"]);let We=null;const Ge=N({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ye="http://www.w3.org/1998/Math/MathML",je="http://www.w3.org/2000/svg",qe="http://www.w3.org/1999/xhtml";let Xe=qe,Ke=!1,Ve=null;const $e=N({},[Ye,je,qe],d);let Ze;const Je=["application/xhtml+xml","text/html"],Qe="text/html";let et,tt=null;const nt=l.createElement("form"),ot=function(e){return e instanceof RegExp||e instanceof Function},rt=function(e){if(!tt||tt!==e){if(e&&"object"==typeof e||(e={}),e=S(e),Ze=Ze=-1===Je.indexOf(e.PARSER_MEDIA_TYPE)?Qe:e.PARSER_MEDIA_TYPE,et="application/xhtml+xml"===Ze?d:p,de="ALLOWED_TAGS"in e?N({},e.ALLOWED_TAGS,et):he,ge="ALLOWED_ATTR"in e?N({},e.ALLOWED_ATTR,et):Te,Ve="ALLOWED_NAMESPACES"in e?N({},e.ALLOWED_NAMESPACES,d):$e,We="ADD_URI_SAFE_ATTR"in e?N(S(Ge),e.ADD_URI_SAFE_ATTR,et):Ge,ze="ADD_DATA_URI_TAGS"in e?N(S(Be),e.ADD_DATA_URI_TAGS,et):Be,Fe="FORBID_CONTENTS"in e?N({},e.FORBID_CONTENTS,et):He,Ee="FORBID_TAGS"in e?N({},e.FORBID_TAGS,et):{},Ae="FORBID_ATTR"in e?N({},e.FORBID_ATTR,et):{},Pe="USE_PROFILES"in e&&e.USE_PROFILES,_e=!1!==e.ALLOW_ARIA_ATTR,be=!1!==e.ALLOW_DATA_ATTR,Ne=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Se=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,Re=e.SAFE_FOR_TEMPLATES||!1,we=e.WHOLE_DOCUMENT||!1,ve=e.RETURN_DOM||!1,xe=e.RETURN_DOM_FRAGMENT||!1,Ce=e.RETURN_TRUSTED_TYPE||!1,Le=e.FORCE_BODY||!1,ke=!1!==e.SANITIZE_DOM,Oe=e.SANITIZE_NAMED_PROPS||!1,Me=!1!==e.KEEP_CONTENT,Ue=e.IN_PLACE||!1,pe=e.ALLOWED_URI_REGEXP||W,Xe=e.NAMESPACE||qe,ye=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&ot(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(ye.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&ot(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(ye.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(ye.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Re&&(be=!1),xe&&(ve=!0),Pe&&(de=N({},[...k]),ge=[],!0===Pe.html&&(N(de,w),N(ge,O)),!0===Pe.svg&&(N(de,D),N(ge,I),N(ge,U)),!0===Pe.svgFilters&&(N(de,L),N(ge,I),N(ge,U)),!0===Pe.mathMl&&(N(de,x),N(ge,M),N(ge,U))),e.ADD_TAGS&&(de===he&&(de=S(de)),N(de,e.ADD_TAGS,et)),e.ADD_ATTR&&(ge===Te&&(ge=S(ge)),N(ge,e.ADD_ATTR,et)),e.ADD_URI_SAFE_ATTR&&N(We,e.ADD_URI_SAFE_ATTR,et),e.FORBID_CONTENTS&&(Fe===He&&(Fe=S(Fe)),N(Fe,e.FORBID_CONTENTS,et)),Me&&(de["#text"]=!0),we&&N(de,["html","head","body"]),de.table&&(N(de,["tbody"]),delete Ee.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw A('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw A('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');J=e.TRUSTED_TYPES_POLICY,Q=J.createHTML("")}else void 0===J&&(J=K(B,a)),null!==J&&"string"==typeof Q&&(Q=J.createHTML(""));i&&i(e),tt=e}},it=N({},["mi","mo","mn","ms","mtext"]),at=N({},["foreignobject","desc","title","annotation-xml"]),lt=N({},["title","style","font","a","script"]),ct=N({},D);N(ct,L),N(ct,v);const st=N({},x);N(st,C);const mt=function(e){let t=Z(e);t&&t.tagName||(t={namespaceURI:Xe,tagName:"template"});const n=p(e.tagName),o=p(t.tagName);return!!Ve[e.namespaceURI]&&(e.namespaceURI===je?t.namespaceURI===qe?"svg"===n:t.namespaceURI===Ye?"svg"===n&&("annotation-xml"===o||it[o]):Boolean(ct[n]):e.namespaceURI===Ye?t.namespaceURI===qe?"math"===n:t.namespaceURI===je?"math"===n&&at[o]:Boolean(st[n]):e.namespaceURI===qe?!(t.namespaceURI===je&&!at[o])&&(!(t.namespaceURI===Ye&&!it[o])&&(!st[n]&&(lt[n]||!ct[n]))):!("application/xhtml+xml"!==Ze||!Ve[e.namespaceURI]))},ut=function(e){f(o.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){e.remove()}},ft=function(e,t){try{f(o.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){f(o.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!ge[e])if(ve||xe)try{ut(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},pt=function(e){let t,n;if(Le)e="<remove></remove>"+e;else{const t=h(e,/^[\r\n\t ]+/);n=t&&t[0]}"application/xhtml+xml"===Ze&&Xe===qe&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const o=J?J.createHTML(e):e;if(Xe===qe)try{t=(new z).parseFromString(o,Ze)}catch(e){}if(!t||!t.documentElement){t=ee.createDocument(Xe,"template",null);try{t.documentElement.innerHTML=Ke?Q:o}catch(e){}}const r=t.body||t.documentElement;return e&&n&&r.insertBefore(l.createTextNode(n),r.childNodes[0]||null),Xe===qe?oe.call(t,we?"html":"body")[0]:we?t.documentElement:r},dt=function(e){return te.call(e.ownerDocument||e,e,P.SHOW_ELEMENT|P.SHOW_COMMENT|P.SHOW_TEXT,null,!1)},ht=function(e){return e instanceof H&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof F)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},gt=function(e){return"object"==typeof _?e instanceof _:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},Tt=function(e,t,n){ie[e]&&m(ie[e],(e=>{e.call(o,t,n,tt)}))},yt=function(e){let t;if(Tt("beforeSanitizeElements",e,null),ht(e))return ut(e),!0;const n=et(e.nodeName);if(Tt("uponSanitizeElement",e,{tagName:n,allowedTags:de}),e.hasChildNodes()&&!gt(e.firstElementChild)&&(!gt(e.content)||!gt(e.content.firstElementChild))&&E(/<[/\w]/g,e.innerHTML)&&E(/<[/\w]/g,e.textContent))return ut(e),!0;if(!de[n]||Ee[n]){if(!Ee[n]&&At(n)){if(ye.tagNameCheck instanceof RegExp&&E(ye.tagNameCheck,n))return!1;if(ye.tagNameCheck instanceof Function&&ye.tagNameCheck(n))return!1}if(Me&&!Fe[n]){const t=Z(e)||e.parentNode,n=$(e)||e.childNodes;if(n&&t){for(let o=n.length-1;o>=0;--o)t.insertBefore(Y(n[o],!0),V(e))}}return ut(e),!0}return e instanceof b&&!mt(e)?(ut(e),!0):"noscript"!==n&&"noembed"!==n||!E(/<\/no(script|embed)/i,e.innerHTML)?(Re&&3===e.nodeType&&(t=e.textContent,t=g(t,ae," "),t=g(t,le," "),t=g(t,ce," "),e.textContent!==t&&(f(o.removed,{element:e.cloneNode()}),e.textContent=t)),Tt("afterSanitizeElements",e,null),!1):(ut(e),!0)},Et=function(e,t,n){if(ke&&("id"===t||"name"===t)&&(n in l||n in nt))return!1;if(be&&!Ae[t]&&E(se,t));else if(_e&&E(me,t));else if(!ge[t]||Ae[t]){if(!(At(e)&&(ye.tagNameCheck instanceof RegExp&&E(ye.tagNameCheck,e)||ye.tagNameCheck instanceof Function&&ye.tagNameCheck(e))&&(ye.attributeNameCheck instanceof RegExp&&E(ye.attributeNameCheck,t)||ye.attributeNameCheck instanceof Function&&ye.attributeNameCheck(t))||"is"===t&&ye.allowCustomizedBuiltInElements&&(ye.tagNameCheck instanceof RegExp&&E(ye.tagNameCheck,n)||ye.tagNameCheck instanceof Function&&ye.tagNameCheck(n))))return!1}else if(We[t]);else if(E(pe,g(n,fe,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==T(n,"data:")||!ze[e]){if(Ne&&!E(ue,g(n,fe,"")));else if(n)return!1}else;return!0},At=function(e){return e.indexOf("-")>0},_t=function(e){let t,n,r,i;Tt("beforeSanitizeAttributes",e,null);const{attributes:a}=e;if(!a)return;const l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ge};for(i=a.length;i--;){t=a[i];const{name:c,namespaceURI:s}=t;if(n="value"===c?t.value:y(t.value),r=et(c),l.attrName=r,l.attrValue=n,l.keepAttr=!0,l.forceKeepAttr=void 0,Tt("uponSanitizeAttribute",e,l),n=l.attrValue,l.forceKeepAttr)continue;if(ft(c,e),!l.keepAttr)continue;if(!Se&&E(/\/>/i,n)){ft(c,e);continue}Re&&(n=g(n,ae," "),n=g(n,le," "),n=g(n,ce," "));const m=et(e.nodeName);if(Et(m,r,n)){if(!Oe||"id"!==r&&"name"!==r||(ft(c,e),n=Ie+n),J&&"object"==typeof B&&"function"==typeof B.getAttributeType)if(s);else switch(B.getAttributeType(m,r)){case"TrustedHTML":n=J.createHTML(n);break;case"TrustedScriptURL":n=J.createScriptURL(n)}try{s?e.setAttributeNS(s,c,n):e.setAttribute(c,n),u(o.removed)}catch(e){}}}Tt("afterSanitizeAttributes",e,null)},bt=function e(t){let n;const o=dt(t);for(Tt("beforeSanitizeShadowDOM",t,null);n=o.nextNode();)Tt("uponSanitizeShadowNode",n,null),yt(n)||(n.content instanceof c&&e(n.content),_t(n));Tt("afterSanitizeShadowDOM",t,null)};return o.sanitize=function(e){let t,n,i,a,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Ke=!e,Ke&&(e="\x3c!--\x3e"),"string"!=typeof e&&!gt(e)){if("function"!=typeof e.toString)throw A("toString is not a function");if("string"!=typeof(e=e.toString()))throw A("dirty is not a string, aborting")}if(!o.isSupported)return e;if(De||rt(l),o.removed=[],"string"==typeof e&&(Ue=!1),Ue){if(e.nodeName){const t=et(e.nodeName);if(!de[t]||Ee[t])throw A("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof _)t=pt("\x3c!----\x3e"),n=t.ownerDocument.importNode(e,!0),1===n.nodeType&&"BODY"===n.nodeName||"HTML"===n.nodeName?t=n:t.appendChild(n);else{if(!ve&&!Re&&!we&&-1===e.indexOf("<"))return J&&Ce?J.createHTML(e):e;if(t=pt(e),!t)return ve?null:Ce?Q:""}t&&Le&&ut(t.firstChild);const s=dt(Ue?e:t);for(;i=s.nextNode();)yt(i)||(i.content instanceof c&&bt(i.content),_t(i));if(Ue)return e;if(ve){if(xe)for(a=ne.call(t.ownerDocument);t.firstChild;)a.appendChild(t.firstChild);else a=t;return(ge.shadowroot||ge.shadowrootmod)&&(a=re.call(r,a,!0)),a}let m=we?t.outerHTML:t.innerHTML;return we&&de["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&E(j,t.ownerDocument.doctype.name)&&(m="<!DOCTYPE "+t.ownerDocument.doctype.name+">\n"+m),Re&&(m=g(m,ae," "),m=g(m,le," "),m=g(m,ce," ")),J&&Ce?J.createHTML(m):m},o.setConfig=function(e){rt(e),De=!0},o.clearConfig=function(){tt=null,De=!1},o.isValidAttribute=function(e,t,n){tt||rt({});const o=et(e),r=et(t);return Et(o,r,n)},o.addHook=function(e,t){"function"==typeof t&&(ie[e]=ie[e]||[],f(ie[e],t))},o.removeHook=function(e){if(ie[e])return u(ie[e])},o.removeHooks=function(e){ie[e]&&(ie[e]=[])},o.removeAllHooks=function(){ie={}},o}();return V}));
/*! showdown v 2.1.0 - 21-04-2022 */
!function(){function a(e){"use strict";var r={omitExtraWLInCodeBlocks:{defaultValue:!1,describe:"Omit the default extra whiteline added to code blocks",type:"boolean"},noHeaderId:{defaultValue:!1,describe:"Turn on/off generated header id",type:"boolean"},prefixHeaderId:{defaultValue:!1,describe:"Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",type:"string"},rawPrefixHeaderId:{defaultValue:!1,describe:'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',type:"boolean"},ghCompatibleHeaderId:{defaultValue:!1,describe:"Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",type:"boolean"},rawHeaderId:{defaultValue:!1,describe:"Remove only spaces, ' and \" from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids",type:"boolean"},headerLevelStart:{defaultValue:!1,describe:"The header blocks level start",type:"integer"},parseImgDimensions:{defaultValue:!1,describe:"Turn on/off image dimension parsing",type:"boolean"},simplifiedAutoLink:{defaultValue:!1,describe:"Turn on/off GFM autolink style",type:"boolean"},excludeTrailingPunctuationFromURLs:{defaultValue:!1,describe:"Excludes trailing punctuation from links generated with autoLinking",type:"boolean"},literalMidWordUnderscores:{defaultValue:!1,describe:"Parse midword underscores as literal underscores",type:"boolean"},literalMidWordAsterisks:{defaultValue:!1,describe:"Parse midword asterisks as literal asterisks",type:"boolean"},strikethrough:{defaultValue:!1,describe:"Turn on/off strikethrough support",type:"boolean"},tables:{defaultValue:!1,describe:"Turn on/off tables support",type:"boolean"},tablesHeaderId:{defaultValue:!1,describe:"Add an id to table headers",type:"boolean"},ghCodeBlocks:{defaultValue:!0,describe:"Turn on/off GFM fenced code blocks support",type:"boolean"},tasklists:{defaultValue:!1,describe:"Turn on/off GFM tasklist support",type:"boolean"},smoothLivePreview:{defaultValue:!1,describe:"Prevents weird effects in live previews due to incomplete input",type:"boolean"},smartIndentationFix:{defaultValue:!1,describe:"Tries to smartly fix indentation in es6 strings",type:"boolean"},disableForced4SpacesIndentedSublists:{defaultValue:!1,describe:"Disables the requirement of indenting nested sublists by 4 spaces",type:"boolean"},simpleLineBreaks:{defaultValue:!1,describe:"Parses simple line breaks as <br> (GFM Style)",type:"boolean"},requireSpaceBeforeHeadingText:{defaultValue:!1,describe:"Makes adding a space between `#` and the header text mandatory (GFM Style)",type:"boolean"},ghMentions:{defaultValue:!1,describe:"Enables github @mentions",type:"boolean"},ghMentionsLink:{defaultValue:"https://github.com/{u}",describe:"Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",type:"string"},encodeEmails:{defaultValue:!0,describe:"Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",type:"boolean"},openLinksInNewWindow:{defaultValue:!1,describe:"Open all links in new windows",type:"boolean"},backslashEscapesHTMLTags:{defaultValue:!1,describe:"Support for HTML Tag escaping. ex: <div>foo</div>",type:"boolean"},emoji:{defaultValue:!1,describe:"Enable emoji support. Ex: `this is a :smile: emoji`",type:"boolean"},underline:{defaultValue:!1,describe:"Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",type:"boolean"},ellipsis:{defaultValue:!0,describe:"Replaces three dots with the ellipsis unicode character",type:"boolean"},completeHTMLDocument:{defaultValue:!1,describe:"Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",type:"boolean"},metadata:{defaultValue:!1,describe:"Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",type:"boolean"},splitAdjacentBlockquotes:{defaultValue:!1,describe:"Split adjacent blockquote blocks",type:"boolean"}};if(!1===e)return JSON.parse(JSON.stringify(r));var t,a={};for(t in r)r.hasOwnProperty(t)&&(a[t]=r[t].defaultValue);return a}var x={},t={},d={},p=a(!0),h="vanilla",_={github:{omitExtraWLInCodeBlocks:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,disableForced4SpacesIndentedSublists:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghCompatibleHeaderId:!0,ghMentions:!0,backslashEscapesHTMLTags:!0,emoji:!0,splitAdjacentBlockquotes:!0},original:{noHeaderId:!0,ghCodeBlocks:!1},ghost:{omitExtraWLInCodeBlocks:!0,parseImgDimensions:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,smoothLivePreview:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghMentions:!1,encodeEmails:!0},vanilla:a(!0),allOn:function(){"use strict";var e,r=a(!0),t={};for(e in r)r.hasOwnProperty(e)&&(t[e]=!0);return t}()};function g(e,r){"use strict";var t=r?"Error in "+r+" extension->":"Error in unnamed extension",a={valid:!0,error:""};x.helper.isArray(e)||(e=[e]);for(var n=0;n<e.length;++n){var s=t+" sub-extension "+n+": ",o=e[n];if("object"!=typeof o)return a.valid=!1,a.error=s+"must be an object, but "+typeof o+" given",a;if(!x.helper.isString(o.type))return a.valid=!1,a.error=s+'property "type" must be a string, but '+typeof o.type+" given",a;var i=o.type=o.type.toLowerCase();if("lang"!==(i="html"===(i="language"===i?o.type="lang":i)?o.type="output":i)&&"output"!==i&&"listener"!==i)return a.valid=!1,a.error=s+"type "+i+' is not recognized. Valid values: "lang/language", "output/html" or "listener"',a;if("listener"===i){if(x.helper.isUndefined(o.listeners))return a.valid=!1,a.error=s+'. Extensions of type "listener" must have a property called "listeners"',a}else if(x.helper.isUndefined(o.filter)&&x.helper.isUndefined(o.regex))return a.valid=!1,a.error=s+i+' extensions must define either a "regex" property or a "filter" method',a;if(o.listeners){if("object"!=typeof o.listeners)return a.valid=!1,a.error=s+'"listeners" property must be an object but '+typeof o.listeners+" given",a;for(var l in o.listeners)if(o.listeners.hasOwnProperty(l)&&"function"!=typeof o.listeners[l])return a.valid=!1,a.error=s+'"listeners" property must be an hash of [event name]: [callback]. listeners.'+l+" must be a function but "+typeof o.listeners[l]+" given",a}if(o.filter){if("function"!=typeof o.filter)return a.valid=!1,a.error=s+'"filter" must be a function, but '+typeof o.filter+" given",a}else if(o.regex){if(x.helper.isString(o.regex)&&(o.regex=new RegExp(o.regex,"g")),!(o.regex instanceof RegExp))return a.valid=!1,a.error=s+'"regex" property must either be a string or a RegExp object, but '+typeof o.regex+" given",a;if(x.helper.isUndefined(o.replace))return a.valid=!1,a.error=s+'"regex" extensions must implement a replace string or function',a}}return a}function n(e,r){"use strict";return"¨E"+r.charCodeAt(0)+"E"}x.helper={},x.extensions={},x.setOption=function(e,r){"use strict";return p[e]=r,this},x.getOption=function(e){"use strict";return p[e]},x.getOptions=function(){"use strict";return p},x.resetOptions=function(){"use strict";p=a(!0)},x.setFlavor=function(e){"use strict";if(!_.hasOwnProperty(e))throw Error(e+" flavor was not found");x.resetOptions();var r,t=_[e];for(r in h=e,t)t.hasOwnProperty(r)&&(p[r]=t[r])},x.getFlavor=function(){"use strict";return h},x.getFlavorOptions=function(e){"use strict";if(_.hasOwnProperty(e))return _[e]},x.getDefaultOptions=a,x.subParser=function(e,r){"use strict";if(x.helper.isString(e)){if(void 0===r){if(t.hasOwnProperty(e))return t[e];throw Error("SubParser named "+e+" not registered!")}t[e]=r}},x.extension=function(e,r){"use strict";if(!x.helper.isString(e))throw Error("Extension 'name' must be a string");if(e=x.helper.stdExtName(e),x.helper.isUndefined(r)){if(d.hasOwnProperty(e))return d[e];throw Error("Extension named "+e+" is not registered!")}"function"==typeof r&&(r=r());var t=g(r=x.helper.isArray(r)?r:[r],e);if(!t.valid)throw Error(t.error);d[e]=r},x.getAllExtensions=function(){"use strict";return d},x.removeExtension=function(e){"use strict";delete d[e]},x.resetExtensions=function(){"use strict";d={}},x.validateExtension=function(e){"use strict";e=g(e,null);return!!e.valid||(console.warn(e.error),!1)},x.hasOwnProperty("helper")||(x.helper={}),x.helper.isString=function(e){"use strict";return"string"==typeof e||e instanceof String},x.helper.isFunction=function(e){"use strict";return e&&"[object Function]"==={}.toString.call(e)},x.helper.isArray=function(e){"use strict";return Array.isArray(e)},x.helper.isUndefined=function(e){"use strict";return void 0===e},x.helper.forEach=function(e,r){"use strict";if(x.helper.isUndefined(e))throw new Error("obj param is required");if(x.helper.isUndefined(r))throw new Error("callback param is required");if(!x.helper.isFunction(r))throw new Error("callback param must be a function/closure");if("function"==typeof e.forEach)e.forEach(r);else if(x.helper.isArray(e))for(var t=0;t<e.length;t++)r(e[t],t,e);else{if("object"!=typeof e)throw new Error("obj does not seem to be an array or an iterable object");for(var a in e)e.hasOwnProperty(a)&&r(e[a],a,e)}},x.helper.stdExtName=function(e){"use strict";return e.replace(/[_?*+\/\\.^-]/g,"").replace(/\s/g,"").toLowerCase()},x.helper.escapeCharactersCallback=n,x.helper.escapeCharacters=function(e,r,t){"use strict";r="(["+r.replace(/([\[\]\\])/g,"\\$1")+"])",t&&(r="\\\\"+r),t=new RegExp(r,"g");return e=e.replace(t,n)},x.helper.unescapeHTMLEntities=function(e){"use strict";return e.replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")};function u(e,r,t,a){"use strict";var n,s,o,i=-1<(a=a||"").indexOf("g"),l=new RegExp(r+"|"+t,"g"+a.replace(/g/g,"")),c=new RegExp(r,a.replace(/g/g,"")),u=[];do{for(n=0;p=l.exec(e);)if(c.test(p[0]))n++||(o=(s=l.lastIndex)-p[0].length);else if(n&&!--n){var d=p.index+p[0].length,p={left:{start:o,end:s},match:{start:s,end:p.index},right:{start:p.index,end:d},wholeMatch:{start:o,end:d}};if(u.push(p),!i)return u}}while(n&&(l.lastIndex=s));return u}function s(u){"use strict";return function(e,r,t,a,n,s,o){var i=t=t.replace(x.helper.regexes.asteriskDashAndColon,x.helper.escapeCharactersCallback),l="",c="",r=r||"",o=o||"";return/^www\./i.test(t)&&(t=t.replace(/^www\./i,"http://www.")),u.excludeTrailingPunctuationFromURLs&&s&&(l=s),r+'<a href="'+t+'"'+(c=u.openLinksInNewWindow?' rel="noopener noreferrer" target="¨E95Eblank"':c)+">"+i+"</a>"+l+o}}function o(n,s){"use strict";return function(e,r,t){var a="mailto:";return r=r||"",t=x.subParser("unescapeSpecialChars")(t,n,s),n.encodeEmails?(a=x.helper.encodeEmailAddress(a+t),t=x.helper.encodeEmailAddress(t)):a+=t,r+'<a href="'+a+'">'+t+"</a>"}}x.helper.matchRecursiveRegExp=function(e,r,t,a){"use strict";for(var n=u(e,r,t,a),s=[],o=0;o<n.length;++o)s.push([e.slice(n[o].wholeMatch.start,n[o].wholeMatch.end),e.slice(n[o].match.start,n[o].match.end),e.slice(n[o].left.start,n[o].left.end),e.slice(n[o].right.start,n[o].right.end)]);return s},x.helper.replaceRecursiveRegExp=function(e,r,t,a,n){"use strict";x.helper.isFunction(r)||(s=r,r=function(){return s});var s,o=u(e,t,a,n),t=e,i=o.length;if(0<i){var l=[];0!==o[0].wholeMatch.start&&l.push(e.slice(0,o[0].wholeMatch.start));for(var c=0;c<i;++c)l.push(r(e.slice(o[c].wholeMatch.start,o[c].wholeMatch.end),e.slice(o[c].match.start,o[c].match.end),e.slice(o[c].left.start,o[c].left.end),e.slice(o[c].right.start,o[c].right.end))),c<i-1&&l.push(e.slice(o[c].wholeMatch.end,o[c+1].wholeMatch.start));o[i-1].wholeMatch.end<e.length&&l.push(e.slice(o[i-1].wholeMatch.end)),t=l.join("")}return t},x.helper.regexIndexOf=function(e,r,t){"use strict";if(!x.helper.isString(e))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";if(r instanceof RegExp==!1)throw"InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";e=e.substring(t||0).search(r);return 0<=e?e+(t||0):e},x.helper.splitAtIndex=function(e,r){"use strict";if(x.helper.isString(e))return[e.substring(0,r),e.substring(r)];throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string"},x.helper.encodeEmailAddress=function(e){"use strict";var t=[function(e){return"&#"+e.charCodeAt(0)+";"},function(e){return"&#x"+e.charCodeAt(0).toString(16)+";"},function(e){return e}];return e=e.replace(/./g,function(e){var r;return e="@"===e?t[Math.floor(2*Math.random())](e):.9<(r=Math.random())?t[2](e):.45<r?t[1](e):t[0](e)})},x.helper.padEnd=function(e,r,t){"use strict";return r>>=0,t=String(t||" "),e.length>r?String(e):((r-=e.length)>t.length&&(t+=t.repeat(r/t.length)),String(e)+t.slice(0,r))},"undefined"==typeof console&&(console={warn:function(e){"use strict";alert(e)},log:function(e){"use strict";alert(e)},error:function(e){"use strict";throw e}}),x.helper.regexes={asteriskDashAndColon:/([*_:~])/g},x.helper.emojis={"+1":"👍","-1":"👎",100:"💯",1234:"🔢","1st_place_medal":"🥇","2nd_place_medal":"🥈","3rd_place_medal":"🥉","8ball":"🎱",a:"🅰️",ab:"🆎",abc:"🔤",abcd:"🔡",accept:"🉑",aerial_tramway:"🚡",airplane:"✈️",alarm_clock:"⏰",alembic:"⚗️",alien:"👽",ambulance:"🚑",amphora:"🏺",anchor:"⚓️",angel:"👼",anger:"💢",angry:"😠",anguished:"😧",ant:"🐜",apple:"🍎",aquarius:"♒️",aries:"♈️",arrow_backward:"◀️",arrow_double_down:"⏬",arrow_double_up:"⏫",arrow_down:"⬇️",arrow_down_small:"🔽",arrow_forward:"▶️",arrow_heading_down:"⤵️",arrow_heading_up:"⤴️",arrow_left:"⬅️",arrow_lower_left:"↙️",arrow_lower_right:"↘️",arrow_right:"➡️",arrow_right_hook:"↪️",arrow_up:"⬆️",arrow_up_down:"↕️",arrow_up_small:"🔼",arrow_upper_left:"↖️",arrow_upper_right:"↗️",arrows_clockwise:"🔃",arrows_counterclockwise:"🔄",art:"🎨",articulated_lorry:"🚛",artificial_satellite:"🛰",astonished:"😲",athletic_shoe:"👟",atm:"🏧",atom_symbol:"⚛️",avocado:"🥑",b:"🅱️",baby:"👶",baby_bottle:"🍼",baby_chick:"🐤",baby_symbol:"🚼",back:"🔙",bacon:"🥓",badminton:"🏸",baggage_claim:"🛄",baguette_bread:"🥖",balance_scale:"⚖️",balloon:"🎈",ballot_box:"🗳",ballot_box_with_check:"☑️",bamboo:"🎍",banana:"🍌",bangbang:"‼️",bank:"🏦",bar_chart:"📊",barber:"💈",baseball:"⚾️",basketball:"🏀",basketball_man:"⛹️",basketball_woman:"⛹️&zwj;♀️",bat:"🦇",bath:"🛀",bathtub:"🛁",battery:"🔋",beach_umbrella:"🏖",bear:"🐻",bed:"🛏",bee:"🐝",beer:"🍺",beers:"🍻",beetle:"🐞",beginner:"🔰",bell:"🔔",bellhop_bell:"🛎",bento:"🍱",biking_man:"🚴",bike:"🚲",biking_woman:"🚴&zwj;♀️",bikini:"👙",biohazard:"☣️",bird:"🐦",birthday:"🎂",black_circle:"⚫️",black_flag:"🏴",black_heart:"🖤",black_joker:"🃏",black_large_square:"⬛️",black_medium_small_square:"◾️",black_medium_square:"◼️",black_nib:"✒️",black_small_square:"▪️",black_square_button:"🔲",blonde_man:"👱",blonde_woman:"👱&zwj;♀️",blossom:"🌼",blowfish:"🐡",blue_book:"📘",blue_car:"🚙",blue_heart:"💙",blush:"😊",boar:"🐗",boat:"⛵️",bomb:"💣",book:"📖",bookmark:"🔖",bookmark_tabs:"📑",books:"📚",boom:"💥",boot:"👢",bouquet:"💐",bowing_man:"🙇",bow_and_arrow:"🏹",bowing_woman:"🙇&zwj;♀️",bowling:"🎳",boxing_glove:"🥊",boy:"👦",bread:"🍞",bride_with_veil:"👰",bridge_at_night:"🌉",briefcase:"💼",broken_heart:"💔",bug:"🐛",building_construction:"🏗",bulb:"💡",bullettrain_front:"🚅",bullettrain_side:"🚄",burrito:"🌯",bus:"🚌",business_suit_levitating:"🕴",busstop:"🚏",bust_in_silhouette:"👤",busts_in_silhouette:"👥",butterfly:"🦋",cactus:"🌵",cake:"🍰",calendar:"📆",call_me_hand:"🤙",calling:"📲",camel:"🐫",camera:"📷",camera_flash:"📸",camping:"🏕",cancer:"♋️",candle:"🕯",candy:"🍬",canoe:"🛶",capital_abcd:"🔠",capricorn:"♑️",car:"🚗",card_file_box:"🗃",card_index:"📇",card_index_dividers:"🗂",carousel_horse:"🎠",carrot:"🥕",cat:"🐱",cat2:"🐈",cd:"💿",chains:"⛓",champagne:"🍾",chart:"💹",chart_with_downwards_trend:"📉",chart_with_upwards_trend:"📈",checkered_flag:"🏁",cheese:"🧀",cherries:"🍒",cherry_blossom:"🌸",chestnut:"🌰",chicken:"🐔",children_crossing:"🚸",chipmunk:"🐿",chocolate_bar:"🍫",christmas_tree:"🎄",church:"⛪️",cinema:"🎦",circus_tent:"🎪",city_sunrise:"🌇",city_sunset:"🌆",cityscape:"🏙",cl:"🆑",clamp:"🗜",clap:"👏",clapper:"🎬",classical_building:"🏛",clinking_glasses:"🥂",clipboard:"📋",clock1:"🕐",clock10:"🕙",clock1030:"🕥",clock11:"🕚",clock1130:"🕦",clock12:"🕛",clock1230:"🕧",clock130:"🕜",clock2:"🕑",clock230:"🕝",clock3:"🕒",clock330:"🕞",clock4:"🕓",clock430:"🕟",clock5:"🕔",clock530:"🕠",clock6:"🕕",clock630:"🕡",clock7:"🕖",clock730:"🕢",clock8:"🕗",clock830:"🕣",clock9:"🕘",clock930:"🕤",closed_book:"📕",closed_lock_with_key:"🔐",closed_umbrella:"🌂",cloud:"☁️",cloud_with_lightning:"🌩",cloud_with_lightning_and_rain:"⛈",cloud_with_rain:"🌧",cloud_with_snow:"🌨",clown_face:"🤡",clubs:"♣️",cocktail:"🍸",coffee:"☕️",coffin:"⚰️",cold_sweat:"😰",comet:"☄️",computer:"💻",computer_mouse:"🖱",confetti_ball:"🎊",confounded:"😖",confused:"😕",congratulations:"㊗️",construction:"🚧",construction_worker_man:"👷",construction_worker_woman:"👷&zwj;♀️",control_knobs:"🎛",convenience_store:"🏪",cookie:"🍪",cool:"🆒",policeman:"👮",copyright:"©️",corn:"🌽",couch_and_lamp:"🛋",couple:"👫",couple_with_heart_woman_man:"💑",couple_with_heart_man_man:"👨&zwj;❤️&zwj;👨",couple_with_heart_woman_woman:"👩&zwj;❤️&zwj;👩",couplekiss_man_man:"👨&zwj;❤️&zwj;💋&zwj;👨",couplekiss_man_woman:"💏",couplekiss_woman_woman:"👩&zwj;❤️&zwj;💋&zwj;👩",cow:"🐮",cow2:"🐄",cowboy_hat_face:"🤠",crab:"🦀",crayon:"🖍",credit_card:"💳",crescent_moon:"🌙",cricket:"🏏",crocodile:"🐊",croissant:"🥐",crossed_fingers:"🤞",crossed_flags:"🎌",crossed_swords:"⚔️",crown:"👑",cry:"😢",crying_cat_face:"😿",crystal_ball:"🔮",cucumber:"🥒",cupid:"💘",curly_loop:"➰",currency_exchange:"💱",curry:"🍛",custard:"🍮",customs:"🛃",cyclone:"🌀",dagger:"🗡",dancer:"💃",dancing_women:"👯",dancing_men:"👯&zwj;♂️",dango:"🍡",dark_sunglasses:"🕶",dart:"🎯",dash:"💨",date:"📅",deciduous_tree:"🌳",deer:"🦌",department_store:"🏬",derelict_house:"🏚",desert:"🏜",desert_island:"🏝",desktop_computer:"🖥",male_detective:"🕵️",diamond_shape_with_a_dot_inside:"💠",diamonds:"♦️",disappointed:"😞",disappointed_relieved:"😥",dizzy:"💫",dizzy_face:"😵",do_not_litter:"🚯",dog:"🐶",dog2:"🐕",dollar:"💵",dolls:"🎎",dolphin:"🐬",door:"🚪",doughnut:"🍩",dove:"🕊",dragon:"🐉",dragon_face:"🐲",dress:"👗",dromedary_camel:"🐪",drooling_face:"🤤",droplet:"💧",drum:"🥁",duck:"🦆",dvd:"📀","e-mail":"📧",eagle:"🦅",ear:"👂",ear_of_rice:"🌾",earth_africa:"🌍",earth_americas:"🌎",earth_asia:"🌏",egg:"🥚",eggplant:"🍆",eight_pointed_black_star:"✴️",eight_spoked_asterisk:"✳️",electric_plug:"🔌",elephant:"🐘",email:"✉️",end:"🔚",envelope_with_arrow:"📩",euro:"💶",european_castle:"🏰",european_post_office:"🏤",evergreen_tree:"🌲",exclamation:"❗️",expressionless:"😑",eye:"👁",eye_speech_bubble:"👁&zwj;🗨",eyeglasses:"👓",eyes:"👀",face_with_head_bandage:"🤕",face_with_thermometer:"🤒",fist_oncoming:"👊",factory:"🏭",fallen_leaf:"🍂",family_man_woman_boy:"👪",family_man_boy:"👨&zwj;👦",family_man_boy_boy:"👨&zwj;👦&zwj;👦",family_man_girl:"👨&zwj;👧",family_man_girl_boy:"👨&zwj;👧&zwj;👦",family_man_girl_girl:"👨&zwj;👧&zwj;👧",family_man_man_boy:"👨&zwj;👨&zwj;👦",family_man_man_boy_boy:"👨&zwj;👨&zwj;👦&zwj;👦",family_man_man_girl:"👨&zwj;👨&zwj;👧",family_man_man_girl_boy:"👨&zwj;👨&zwj;👧&zwj;👦",family_man_man_girl_girl:"👨&zwj;👨&zwj;👧&zwj;👧",family_man_woman_boy_boy:"👨&zwj;👩&zwj;👦&zwj;👦",family_man_woman_girl:"👨&zwj;👩&zwj;👧",family_man_woman_girl_boy:"👨&zwj;👩&zwj;👧&zwj;👦",family_man_woman_girl_girl:"👨&zwj;👩&zwj;👧&zwj;👧",family_woman_boy:"👩&zwj;👦",family_woman_boy_boy:"👩&zwj;👦&zwj;👦",family_woman_girl:"👩&zwj;👧",family_woman_girl_boy:"👩&zwj;👧&zwj;👦",family_woman_girl_girl:"👩&zwj;👧&zwj;👧",family_woman_woman_boy:"👩&zwj;👩&zwj;👦",family_woman_woman_boy_boy:"👩&zwj;👩&zwj;👦&zwj;👦",family_woman_woman_girl:"👩&zwj;👩&zwj;👧",family_woman_woman_girl_boy:"👩&zwj;👩&zwj;👧&zwj;👦",family_woman_woman_girl_girl:"👩&zwj;👩&zwj;👧&zwj;👧",fast_forward:"⏩",fax:"📠",fearful:"😨",feet:"🐾",female_detective:"🕵️&zwj;♀️",ferris_wheel:"🎡",ferry:"⛴",field_hockey:"🏑",file_cabinet:"🗄",file_folder:"📁",film_projector:"📽",film_strip:"🎞",fire:"🔥",fire_engine:"🚒",fireworks:"🎆",first_quarter_moon:"🌓",first_quarter_moon_with_face:"🌛",fish:"🐟",fish_cake:"🍥",fishing_pole_and_fish:"🎣",fist_raised:"✊",fist_left:"🤛",fist_right:"🤜",flags:"🎏",flashlight:"🔦",fleur_de_lis:"⚜️",flight_arrival:"🛬",flight_departure:"🛫",floppy_disk:"💾",flower_playing_cards:"🎴",flushed:"😳",fog:"🌫",foggy:"🌁",football:"🏈",footprints:"👣",fork_and_knife:"🍴",fountain:"⛲️",fountain_pen:"🖋",four_leaf_clover:"🍀",fox_face:"🦊",framed_picture:"🖼",free:"🆓",fried_egg:"🍳",fried_shrimp:"🍤",fries:"🍟",frog:"🐸",frowning:"😦",frowning_face:"☹️",frowning_man:"🙍&zwj;♂️",frowning_woman:"🙍",middle_finger:"🖕",fuelpump:"⛽️",full_moon:"🌕",full_moon_with_face:"🌝",funeral_urn:"⚱️",game_die:"🎲",gear:"⚙️",gem:"💎",gemini:"♊️",ghost:"👻",gift:"🎁",gift_heart:"💝",girl:"👧",globe_with_meridians:"🌐",goal_net:"🥅",goat:"🐐",golf:"⛳️",golfing_man:"🏌️",golfing_woman:"🏌️&zwj;♀️",gorilla:"🦍",grapes:"🍇",green_apple:"🍏",green_book:"📗",green_heart:"💚",green_salad:"🥗",grey_exclamation:"❕",grey_question:"❔",grimacing:"😬",grin:"😁",grinning:"😀",guardsman:"💂",guardswoman:"💂&zwj;♀️",guitar:"🎸",gun:"🔫",haircut_woman:"💇",haircut_man:"💇&zwj;♂️",hamburger:"🍔",hammer:"🔨",hammer_and_pick:"⚒",hammer_and_wrench:"🛠",hamster:"🐹",hand:"✋",handbag:"👜",handshake:"🤝",hankey:"💩",hatched_chick:"🐥",hatching_chick:"🐣",headphones:"🎧",hear_no_evil:"🙉",heart:"❤️",heart_decoration:"💟",heart_eyes:"😍",heart_eyes_cat:"😻",heartbeat:"💓",heartpulse:"💗",hearts:"♥️",heavy_check_mark:"✔️",heavy_division_sign:"➗",heavy_dollar_sign:"💲",heavy_heart_exclamation:"❣️",heavy_minus_sign:"➖",heavy_multiplication_x:"✖️",heavy_plus_sign:"➕",helicopter:"🚁",herb:"🌿",hibiscus:"🌺",high_brightness:"🔆",high_heel:"👠",hocho:"🔪",hole:"🕳",honey_pot:"🍯",horse:"🐴",horse_racing:"🏇",hospital:"🏥",hot_pepper:"🌶",hotdog:"🌭",hotel:"🏨",hotsprings:"♨️",hourglass:"⌛️",hourglass_flowing_sand:"⏳",house:"🏠",house_with_garden:"🏡",houses:"🏘",hugs:"🤗",hushed:"😯",ice_cream:"🍨",ice_hockey:"🏒",ice_skate:"⛸",icecream:"🍦",id:"🆔",ideograph_advantage:"🉐",imp:"👿",inbox_tray:"📥",incoming_envelope:"📨",tipping_hand_woman:"💁",information_source:"ℹ️",innocent:"😇",interrobang:"⁉️",iphone:"📱",izakaya_lantern:"🏮",jack_o_lantern:"🎃",japan:"🗾",japanese_castle:"🏯",japanese_goblin:"👺",japanese_ogre:"👹",jeans:"👖",joy:"😂",joy_cat:"😹",joystick:"🕹",kaaba:"🕋",key:"🔑",keyboard:"⌨️",keycap_ten:"🔟",kick_scooter:"🛴",kimono:"👘",kiss:"💋",kissing:"😗",kissing_cat:"😽",kissing_closed_eyes:"😚",kissing_heart:"😘",kissing_smiling_eyes:"😙",kiwi_fruit:"🥝",koala:"🐨",koko:"🈁",label:"🏷",large_blue_circle:"🔵",large_blue_diamond:"🔷",large_orange_diamond:"🔶",last_quarter_moon:"🌗",last_quarter_moon_with_face:"🌜",latin_cross:"✝️",laughing:"😆",leaves:"🍃",ledger:"📒",left_luggage:"🛅",left_right_arrow:"↔️",leftwards_arrow_with_hook:"↩️",lemon:"🍋",leo:"♌️",leopard:"🐆",level_slider:"🎚",libra:"♎️",light_rail:"🚈",link:"🔗",lion:"🦁",lips:"👄",lipstick:"💄",lizard:"🦎",lock:"🔒",lock_with_ink_pen:"🔏",lollipop:"🍭",loop:"➿",loud_sound:"🔊",loudspeaker:"📢",love_hotel:"🏩",love_letter:"💌",low_brightness:"🔅",lying_face:"🤥",m:"Ⓜ️",mag:"🔍",mag_right:"🔎",mahjong:"🀄️",mailbox:"📫",mailbox_closed:"📪",mailbox_with_mail:"📬",mailbox_with_no_mail:"📭",man:"👨",man_artist:"👨&zwj;🎨",man_astronaut:"👨&zwj;🚀",man_cartwheeling:"🤸&zwj;♂️",man_cook:"👨&zwj;🍳",man_dancing:"🕺",man_facepalming:"🤦&zwj;♂️",man_factory_worker:"👨&zwj;🏭",man_farmer:"👨&zwj;🌾",man_firefighter:"👨&zwj;🚒",man_health_worker:"👨&zwj;⚕️",man_in_tuxedo:"🤵",man_judge:"👨&zwj;⚖️",man_juggling:"🤹&zwj;♂️",man_mechanic:"👨&zwj;🔧",man_office_worker:"👨&zwj;💼",man_pilot:"👨&zwj;✈️",man_playing_handball:"🤾&zwj;♂️",man_playing_water_polo:"🤽&zwj;♂️",man_scientist:"👨&zwj;🔬",man_shrugging:"🤷&zwj;♂️",man_singer:"👨&zwj;🎤",man_student:"👨&zwj;🎓",man_teacher:"👨&zwj;🏫",man_technologist:"👨&zwj;💻",man_with_gua_pi_mao:"👲",man_with_turban:"👳",tangerine:"🍊",mans_shoe:"👞",mantelpiece_clock:"🕰",maple_leaf:"🍁",martial_arts_uniform:"🥋",mask:"😷",massage_woman:"💆",massage_man:"💆&zwj;♂️",meat_on_bone:"🍖",medal_military:"🎖",medal_sports:"🏅",mega:"📣",melon:"🍈",memo:"📝",men_wrestling:"🤼&zwj;♂️",menorah:"🕎",mens:"🚹",metal:"🤘",metro:"🚇",microphone:"🎤",microscope:"🔬",milk_glass:"🥛",milky_way:"🌌",minibus:"🚐",minidisc:"💽",mobile_phone_off:"📴",money_mouth_face:"🤑",money_with_wings:"💸",moneybag:"💰",monkey:"🐒",monkey_face:"🐵",monorail:"🚝",moon:"🌔",mortar_board:"🎓",mosque:"🕌",motor_boat:"🛥",motor_scooter:"🛵",motorcycle:"🏍",motorway:"🛣",mount_fuji:"🗻",mountain:"⛰",mountain_biking_man:"🚵",mountain_biking_woman:"🚵&zwj;♀️",mountain_cableway:"🚠",mountain_railway:"🚞",mountain_snow:"🏔",mouse:"🐭",mouse2:"🐁",movie_camera:"🎥",moyai:"🗿",mrs_claus:"🤶",muscle:"💪",mushroom:"🍄",musical_keyboard:"🎹",musical_note:"🎵",musical_score:"🎼",mute:"🔇",nail_care:"💅",name_badge:"📛",national_park:"🏞",nauseated_face:"🤢",necktie:"👔",negative_squared_cross_mark:"❎",nerd_face:"🤓",neutral_face:"😐",new:"🆕",new_moon:"🌑",new_moon_with_face:"🌚",newspaper:"📰",newspaper_roll:"🗞",next_track_button:"⏭",ng:"🆖",no_good_man:"🙅&zwj;♂️",no_good_woman:"🙅",night_with_stars:"🌃",no_bell:"🔕",no_bicycles:"🚳",no_entry:"⛔️",no_entry_sign:"🚫",no_mobile_phones:"📵",no_mouth:"😶",no_pedestrians:"🚷",no_smoking:"🚭","non-potable_water":"🚱",nose:"👃",notebook:"📓",notebook_with_decorative_cover:"📔",notes:"🎶",nut_and_bolt:"🔩",o:"⭕️",o2:"🅾️",ocean:"🌊",octopus:"🐙",oden:"🍢",office:"🏢",oil_drum:"🛢",ok:"🆗",ok_hand:"👌",ok_man:"🙆&zwj;♂️",ok_woman:"🙆",old_key:"🗝",older_man:"👴",older_woman:"👵",om:"🕉",on:"🔛",oncoming_automobile:"🚘",oncoming_bus:"🚍",oncoming_police_car:"🚔",oncoming_taxi:"🚖",open_file_folder:"📂",open_hands:"👐",open_mouth:"😮",open_umbrella:"☂️",ophiuchus:"⛎",orange_book:"📙",orthodox_cross:"☦️",outbox_tray:"📤",owl:"🦉",ox:"🐂",package:"📦",page_facing_up:"📄",page_with_curl:"📃",pager:"📟",paintbrush:"🖌",palm_tree:"🌴",pancakes:"🥞",panda_face:"🐼",paperclip:"📎",paperclips:"🖇",parasol_on_ground:"⛱",parking:"🅿️",part_alternation_mark:"〽️",partly_sunny:"⛅️",passenger_ship:"🛳",passport_control:"🛂",pause_button:"⏸",peace_symbol:"☮️",peach:"🍑",peanuts:"🥜",pear:"🍐",pen:"🖊",pencil2:"✏️",penguin:"🐧",pensive:"😔",performing_arts:"🎭",persevere:"😣",person_fencing:"🤺",pouting_woman:"🙎",phone:"☎️",pick:"⛏",pig:"🐷",pig2:"🐖",pig_nose:"🐽",pill:"💊",pineapple:"🍍",ping_pong:"🏓",pisces:"♓️",pizza:"🍕",place_of_worship:"🛐",plate_with_cutlery:"🍽",play_or_pause_button:"⏯",point_down:"👇",point_left:"👈",point_right:"👉",point_up:"☝️",point_up_2:"👆",police_car:"🚓",policewoman:"👮&zwj;♀️",poodle:"🐩",popcorn:"🍿",post_office:"🏣",postal_horn:"📯",postbox:"📮",potable_water:"🚰",potato:"🥔",pouch:"👝",poultry_leg:"🍗",pound:"💷",rage:"😡",pouting_cat:"😾",pouting_man:"🙎&zwj;♂️",pray:"🙏",prayer_beads:"📿",pregnant_woman:"🤰",previous_track_button:"⏮",prince:"🤴",princess:"👸",printer:"🖨",purple_heart:"💜",purse:"👛",pushpin:"📌",put_litter_in_its_place:"🚮",question:"❓",rabbit:"🐰",rabbit2:"🐇",racehorse:"🐎",racing_car:"🏎",radio:"📻",radio_button:"🔘",radioactive:"☢️",railway_car:"🚃",railway_track:"🛤",rainbow:"🌈",rainbow_flag:"🏳️&zwj;🌈",raised_back_of_hand:"🤚",raised_hand_with_fingers_splayed:"🖐",raised_hands:"🙌",raising_hand_woman:"🙋",raising_hand_man:"🙋&zwj;♂️",ram:"🐏",ramen:"🍜",rat:"🐀",record_button:"⏺",recycle:"♻️",red_circle:"🔴",registered:"®️",relaxed:"☺️",relieved:"😌",reminder_ribbon:"🎗",repeat:"🔁",repeat_one:"🔂",rescue_worker_helmet:"⛑",restroom:"🚻",revolving_hearts:"💞",rewind:"⏪",rhinoceros:"🦏",ribbon:"🎀",rice:"🍚",rice_ball:"🍙",rice_cracker:"🍘",rice_scene:"🎑",right_anger_bubble:"🗯",ring:"💍",robot:"🤖",rocket:"🚀",rofl:"🤣",roll_eyes:"🙄",roller_coaster:"🎢",rooster:"🐓",rose:"🌹",rosette:"🏵",rotating_light:"🚨",round_pushpin:"📍",rowing_man:"🚣",rowing_woman:"🚣&zwj;♀️",rugby_football:"🏉",running_man:"🏃",running_shirt_with_sash:"🎽",running_woman:"🏃&zwj;♀️",sa:"🈂️",sagittarius:"♐️",sake:"🍶",sandal:"👡",santa:"🎅",satellite:"📡",saxophone:"🎷",school:"🏫",school_satchel:"🎒",scissors:"✂️",scorpion:"🦂",scorpius:"♏️",scream:"😱",scream_cat:"🙀",scroll:"📜",seat:"💺",secret:"㊙️",see_no_evil:"🙈",seedling:"🌱",selfie:"🤳",shallow_pan_of_food:"🥘",shamrock:"☘️",shark:"🦈",shaved_ice:"🍧",sheep:"🐑",shell:"🐚",shield:"🛡",shinto_shrine:"⛩",ship:"🚢",shirt:"👕",shopping:"🛍",shopping_cart:"🛒",shower:"🚿",shrimp:"🦐",signal_strength:"📶",six_pointed_star:"🔯",ski:"🎿",skier:"⛷",skull:"💀",skull_and_crossbones:"☠️",sleeping:"😴",sleeping_bed:"🛌",sleepy:"😪",slightly_frowning_face:"🙁",slightly_smiling_face:"🙂",slot_machine:"🎰",small_airplane:"🛩",small_blue_diamond:"🔹",small_orange_diamond:"🔸",small_red_triangle:"🔺",small_red_triangle_down:"🔻",smile:"😄",smile_cat:"😸",smiley:"😃",smiley_cat:"😺",smiling_imp:"😈",smirk:"😏",smirk_cat:"😼",smoking:"🚬",snail:"🐌",snake:"🐍",sneezing_face:"🤧",snowboarder:"🏂",snowflake:"❄️",snowman:"⛄️",snowman_with_snow:"☃️",sob:"😭",soccer:"⚽️",soon:"🔜",sos:"🆘",sound:"🔉",space_invader:"👾",spades:"♠️",spaghetti:"🍝",sparkle:"❇️",sparkler:"🎇",sparkles:"✨",sparkling_heart:"💖",speak_no_evil:"🙊",speaker:"🔈",speaking_head:"🗣",speech_balloon:"💬",speedboat:"🚤",spider:"🕷",spider_web:"🕸",spiral_calendar:"🗓",spiral_notepad:"🗒",spoon:"🥄",squid:"🦑",stadium:"🏟",star:"⭐️",star2:"🌟",star_and_crescent:"☪️",star_of_david:"✡️",stars:"🌠",station:"🚉",statue_of_liberty:"🗽",steam_locomotive:"🚂",stew:"🍲",stop_button:"⏹",stop_sign:"🛑",stopwatch:"⏱",straight_ruler:"📏",strawberry:"🍓",stuck_out_tongue:"😛",stuck_out_tongue_closed_eyes:"😝",stuck_out_tongue_winking_eye:"😜",studio_microphone:"🎙",stuffed_flatbread:"🥙",sun_behind_large_cloud:"🌥",sun_behind_rain_cloud:"🌦",sun_behind_small_cloud:"🌤",sun_with_face:"🌞",sunflower:"🌻",sunglasses:"😎",sunny:"☀️",sunrise:"🌅",sunrise_over_mountains:"🌄",surfing_man:"🏄",surfing_woman:"🏄&zwj;♀️",sushi:"🍣",suspension_railway:"🚟",sweat:"😓",sweat_drops:"💦",sweat_smile:"😅",sweet_potato:"🍠",swimming_man:"🏊",swimming_woman:"🏊&zwj;♀️",symbols:"🔣",synagogue:"🕍",syringe:"💉",taco:"🌮",tada:"🎉",tanabata_tree:"🎋",taurus:"♉️",taxi:"🚕",tea:"🍵",telephone_receiver:"📞",telescope:"🔭",tennis:"🎾",tent:"⛺️",thermometer:"🌡",thinking:"🤔",thought_balloon:"💭",ticket:"🎫",tickets:"🎟",tiger:"🐯",tiger2:"🐅",timer_clock:"⏲",tipping_hand_man:"💁&zwj;♂️",tired_face:"😫",tm:"™️",toilet:"🚽",tokyo_tower:"🗼",tomato:"🍅",tongue:"👅",top:"🔝",tophat:"🎩",tornado:"🌪",trackball:"🖲",tractor:"🚜",traffic_light:"🚥",train:"🚋",train2:"🚆",tram:"🚊",triangular_flag_on_post:"🚩",triangular_ruler:"📐",trident:"🔱",triumph:"😤",trolleybus:"🚎",trophy:"🏆",tropical_drink:"🍹",tropical_fish:"🐠",truck:"🚚",trumpet:"🎺",tulip:"🌷",tumbler_glass:"🥃",turkey:"🦃",turtle:"🐢",tv:"📺",twisted_rightwards_arrows:"🔀",two_hearts:"💕",two_men_holding_hands:"👬",two_women_holding_hands:"👭",u5272:"🈹",u5408:"🈴",u55b6:"🈺",u6307:"🈯️",u6708:"🈷️",u6709:"🈶",u6e80:"🈵",u7121:"🈚️",u7533:"🈸",u7981:"🈲",u7a7a:"🈳",umbrella:"☔️",unamused:"😒",underage:"🔞",unicorn:"🦄",unlock:"🔓",up:"🆙",upside_down_face:"🙃",v:"✌️",vertical_traffic_light:"🚦",vhs:"📼",vibration_mode:"📳",video_camera:"📹",video_game:"🎮",violin:"🎻",virgo:"♍️",volcano:"🌋",volleyball:"🏐",vs:"🆚",vulcan_salute:"🖖",walking_man:"🚶",walking_woman:"🚶&zwj;♀️",waning_crescent_moon:"🌘",waning_gibbous_moon:"🌖",warning:"⚠️",wastebasket:"🗑",watch:"⌚️",water_buffalo:"🐃",watermelon:"🍉",wave:"👋",wavy_dash:"〰️",waxing_crescent_moon:"🌒",wc:"🚾",weary:"😩",wedding:"💒",weight_lifting_man:"🏋️",weight_lifting_woman:"🏋️&zwj;♀️",whale:"🐳",whale2:"🐋",wheel_of_dharma:"☸️",wheelchair:"♿️",white_check_mark:"✅",white_circle:"⚪️",white_flag:"🏳️",white_flower:"💮",white_large_square:"⬜️",white_medium_small_square:"◽️",white_medium_square:"◻️",white_small_square:"▫️",white_square_button:"🔳",wilted_flower:"🥀",wind_chime:"🎐",wind_face:"🌬",wine_glass:"🍷",wink:"😉",wolf:"🐺",woman:"👩",woman_artist:"👩&zwj;🎨",woman_astronaut:"👩&zwj;🚀",woman_cartwheeling:"🤸&zwj;♀️",woman_cook:"👩&zwj;🍳",woman_facepalming:"🤦&zwj;♀️",woman_factory_worker:"👩&zwj;🏭",woman_farmer:"👩&zwj;🌾",woman_firefighter:"👩&zwj;🚒",woman_health_worker:"👩&zwj;⚕️",woman_judge:"👩&zwj;⚖️",woman_juggling:"🤹&zwj;♀️",woman_mechanic:"👩&zwj;🔧",woman_office_worker:"👩&zwj;💼",woman_pilot:"👩&zwj;✈️",woman_playing_handball:"🤾&zwj;♀️",woman_playing_water_polo:"🤽&zwj;♀️",woman_scientist:"👩&zwj;🔬",woman_shrugging:"🤷&zwj;♀️",woman_singer:"👩&zwj;🎤",woman_student:"👩&zwj;🎓",woman_teacher:"👩&zwj;🏫",woman_technologist:"👩&zwj;💻",woman_with_turban:"👳&zwj;♀️",womans_clothes:"👚",womans_hat:"👒",women_wrestling:"🤼&zwj;♀️",womens:"🚺",world_map:"🗺",worried:"😟",wrench:"🔧",writing_hand:"✍️",x:"❌",yellow_heart:"💛",yen:"💴",yin_yang:"☯️",yum:"😋",zap:"⚡️",zipper_mouth_face:"🤐",zzz:"💤",octocat:'<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',showdown:"<span style=\"font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;\">S</span>"},x.Converter=function(e){"use strict";var r,t,n={},i=[],l=[],o={},a=h,s={parsed:{},raw:"",format:""};for(r in e=e||{},p)p.hasOwnProperty(r)&&(n[r]=p[r]);if("object"!=typeof e)throw Error("Converter expects the passed parameter to be an object, but "+typeof e+" was passed instead.");for(t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);function c(e,r){if(r=r||null,x.helper.isString(e)){if(r=e=x.helper.stdExtName(e),x.extensions[e]){console.warn("DEPRECATION WARNING: "+e+" is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!");var t=x.extensions[e],a=e;if("function"==typeof t&&(t=t(new x.Converter)),x.helper.isArray(t)||(t=[t]),!(a=g(t,a)).valid)throw Error(a.error);for(var n=0;n<t.length;++n)switch(t[n].type){case"lang":i.push(t[n]);break;case"output":l.push(t[n]);break;default:throw Error("Extension loader error: Type unrecognized!!!")}return}if(x.helper.isUndefined(d[e]))throw Error('Extension "'+e+'" could not be loaded. It was either not found or is not a valid extension.');e=d[e]}"function"==typeof e&&(e=e());a=g(e=x.helper.isArray(e)?e:[e],r);if(!a.valid)throw Error(a.error);for(var s=0;s<e.length;++s){switch(e[s].type){case"lang":i.push(e[s]);break;case"output":l.push(e[s])}if(e[s].hasOwnProperty("listeners"))for(var o in e[s].listeners)e[s].listeners.hasOwnProperty(o)&&u(o,e[s].listeners[o])}}function u(e,r){if(!x.helper.isString(e))throw Error("Invalid argument in converter.listen() method: name must be a string, but "+typeof e+" given");if("function"!=typeof r)throw Error("Invalid argument in converter.listen() method: callback must be a function, but "+typeof r+" given");o.hasOwnProperty(e)||(o[e]=[]),o[e].push(r)}n.extensions&&x.helper.forEach(n.extensions,c),this._dispatch=function(e,r,t,a){if(o.hasOwnProperty(e))for(var n=0;n<o[e].length;++n){var s=o[e][n](e,r,this,t,a);s&&void 0!==s&&(r=s)}return r},this.listen=function(e,r){return u(e,r),this},this.makeHtml=function(r){if(!r)return r;var e,t,a={gHtmlBlocks:[],gHtmlMdBlocks:[],gHtmlSpans:[],gUrls:{},gTitles:{},gDimensions:{},gListLevel:0,hashLinkCounts:{},langExtensions:i,outputModifiers:l,converter:this,ghCodeBlocks:[],metadata:{parsed:{},raw:"",format:""}};return r=(r=(r=(r=(r=r.replace(/¨/g,"¨T")).replace(/\$/g,"¨D")).replace(/\r\n/g,"\n")).replace(/\r/g,"\n")).replace(/\u00A0/g,"&nbsp;"),n.smartIndentationFix&&(t=(e=r).match(/^\s*/)[0].length,t=new RegExp("^\\s{0,"+t+"}","gm"),r=e.replace(t,"")),r="\n\n"+r+"\n\n",r=(r=x.subParser("detab")(r,n,a)).replace(/^[ \t]+$/gm,""),x.helper.forEach(i,function(e){r=x.subParser("runExtension")(e,r,n,a)}),r=x.subParser("metadata")(r,n,a),r=x.subParser("hashPreCodeTags")(r,n,a),r=x.subParser("githubCodeBlocks")(r,n,a),r=x.subParser("hashHTMLBlocks")(r,n,a),r=x.subParser("hashCodeTags")(r,n,a),r=x.subParser("stripLinkDefinitions")(r,n,a),r=x.subParser("blockGamut")(r,n,a),r=x.subParser("unhashHTMLSpans")(r,n,a),r=(r=(r=x.subParser("unescapeSpecialChars")(r,n,a)).replace(/¨D/g,"$$")).replace(/¨T/g,"¨"),r=x.subParser("completeHTMLDocument")(r,n,a),x.helper.forEach(l,function(e){r=x.subParser("runExtension")(e,r,n,a)}),s=a.metadata,r},this.makeMarkdown=this.makeMd=function(e,r){if(e=(e=(e=e.replace(/\r\n/g,"\n")).replace(/\r/g,"\n")).replace(/>[ \t]+</,">¨NBSP;<"),!r){if(!window||!window.document)throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");r=window.document}for(var r=r.createElement("div"),t=(r.innerHTML=e,{preList:function(e){for(var r=e.querySelectorAll("pre"),t=[],a=0;a<r.length;++a)if(1===r[a].childElementCount&&"code"===r[a].firstChild.tagName.toLowerCase()){var n=r[a].firstChild.innerHTML.trim(),s=r[a].firstChild.getAttribute("data-language")||"";if(""===s)for(var o=r[a].firstChild.className.split(" "),i=0;i<o.length;++i){var l=o[i].match(/^language-(.+)$/);if(null!==l){s=l[1];break}}n=x.helper.unescapeHTMLEntities(n),t.push(n),r[a].outerHTML='<precode language="'+s+'" precodenum="'+a.toString()+'"></precode>'}else t.push(r[a].innerHTML),r[a].innerHTML="",r[a].setAttribute("prenum",a.toString());return t}(r)}),a=(!function e(r){for(var t=0;t<r.childNodes.length;++t){var a=r.childNodes[t];3===a.nodeType?/\S/.test(a.nodeValue)||/^[ ]+$/.test(a.nodeValue)?(a.nodeValue=a.nodeValue.split("\n").join(" "),a.nodeValue=a.nodeValue.replace(/(\s)+/g,"$1")):(r.removeChild(a),--t):1===a.nodeType&&e(a)}}(r),r.childNodes),n="",s=0;s<a.length;s++)n+=x.subParser("makeMarkdown.node")(a[s],t);return n},this.setOption=function(e,r){n[e]=r},this.getOption=function(e){return n[e]},this.getOptions=function(){return n},this.addExtension=function(e,r){c(e,r=r||null)},this.useExtension=function(e){c(e)},this.setFlavor=function(e){if(!_.hasOwnProperty(e))throw Error(e+" flavor was not found");var r,t=_[e];for(r in a=e,t)t.hasOwnProperty(r)&&(n[r]=t[r])},this.getFlavor=function(){return a},this.removeExtension=function(e){x.helper.isArray(e)||(e=[e]);for(var r=0;r<e.length;++r){for(var t=e[r],a=0;a<i.length;++a)i[a]===t&&i.splice(a,1);for(var n=0;n<l.length;++n)l[n]===t&&l.splice(n,1)}},this.getAllExtensions=function(){return{language:i,output:l}},this.getMetadata=function(e){return e?s.raw:s.parsed},this.getMetadataFormat=function(){return s.format},this._setMetadataPair=function(e,r){s.parsed[e]=r},this._setMetadataFormat=function(e){s.format=e},this._setMetadataRaw=function(e){s.raw=e}},x.subParser("anchors",function(e,i,l){"use strict";function r(e,r,t,a,n,s,o){if(x.helper.isUndefined(o)&&(o=""),t=t.toLowerCase(),-1<e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m))a="";else if(!a){if(a="#"+(t=t||r.toLowerCase().replace(/ ?\n/g," ")),x.helper.isUndefined(l.gUrls[t]))return e;a=l.gUrls[t],x.helper.isUndefined(l.gTitles[t])||(o=l.gTitles[t])}return e='<a href="'+(a=a.replace(x.helper.regexes.asteriskDashAndColon,x.helper.escapeCharactersCallback))+'"',""!==o&&null!==o&&(e+=' title="'+(o=(o=o.replace(/"/g,"&quot;")).replace(x.helper.regexes.asteriskDashAndColon,x.helper.escapeCharactersCallback))+'"'),i.openLinksInNewWindow&&!/^#/.test(a)&&(e+=' rel="noopener noreferrer" target="¨E95Eblank"'),e+=">"+r+"</a>"}return e=(e=(e=(e=(e=l.converter._dispatch("anchors.before",e,i,l)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g,r)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,r)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,r)).replace(/\[([^\[\]]+)]()()()()()/g,r),i.ghMentions&&(e=e.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gim,function(e,r,t,a,n){if("\\"===t)return r+a;if(!x.helper.isString(i.ghMentionsLink))throw new Error("ghMentionsLink option must be a string");t="";return r+'<a href="'+i.ghMentionsLink.replace(/\{u}/g,n)+'"'+(t=i.openLinksInNewWindow?' rel="noopener noreferrer" target="¨E95Eblank"':t)+">"+a+"</a>"})),e=l.converter._dispatch("anchors.after",e,i,l)});var i=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,l=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,c=/()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,m=/(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gim,f=/<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi;x.subParser("autoLinks",function(e,r,t){"use strict";return e=(e=(e=t.converter._dispatch("autoLinks.before",e,r,t)).replace(c,s(r))).replace(f,o(r,t)),e=t.converter._dispatch("autoLinks.after",e,r,t)}),x.subParser("simplifiedAutoLinks",function(e,r,t){"use strict";return r.simplifiedAutoLink?(e=t.converter._dispatch("simplifiedAutoLinks.before",e,r,t),e=(e=r.excludeTrailingPunctuationFromURLs?e.replace(l,s(r)):e.replace(i,s(r))).replace(m,o(r,t)),t.converter._dispatch("simplifiedAutoLinks.after",e,r,t)):e}),x.subParser("blockGamut",function(e,r,t){"use strict";return e=t.converter._dispatch("blockGamut.before",e,r,t),e=x.subParser("blockQuotes")(e,r,t),e=x.subParser("headers")(e,r,t),e=x.subParser("horizontalRule")(e,r,t),e=x.subParser("lists")(e,r,t),e=x.subParser("codeBlocks")(e,r,t),e=x.subParser("tables")(e,r,t),e=x.subParser("hashHTMLBlocks")(e,r,t),e=x.subParser("paragraphs")(e,r,t),e=t.converter._dispatch("blockGamut.after",e,r,t)}),x.subParser("blockQuotes",function(e,r,t){"use strict";e=t.converter._dispatch("blockQuotes.before",e,r,t);var a=/(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;return r.splitAdjacentBlockquotes&&(a=/^ {0,3}>[\s\S]*?(?:\n\n)/gm),e=(e+="\n\n").replace(a,function(e){return e=(e=(e=e.replace(/^[ \t]*>[ \t]?/gm,"")).replace(/¨0/g,"")).replace(/^[ \t]+$/gm,""),e=x.subParser("githubCodeBlocks")(e,r,t),e=(e=(e=x.subParser("blockGamut")(e,r,t)).replace(/(^|\n)/g,"$1  ")).replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(e,r){return r.replace(/^  /gm,"¨0").replace(/¨0/g,"")}),x.subParser("hashBlock")("<blockquote>\n"+e+"\n</blockquote>",r,t)}),e=t.converter._dispatch("blockQuotes.after",e,r,t)}),x.subParser("codeBlocks",function(e,n,s){"use strict";e=s.converter._dispatch("codeBlocks.before",e,n,s);return e=(e=(e+="¨0").replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g,function(e,r,t){var a="\n",r=x.subParser("outdent")(r,n,s);return r=x.subParser("encodeCode")(r,n,s),r="<pre><code>"+(r=(r=(r=x.subParser("detab")(r,n,s)).replace(/^\n+/g,"")).replace(/\n+$/g,""))+(a=n.omitExtraWLInCodeBlocks?"":a)+"</code></pre>",x.subParser("hashBlock")(r,n,s)+t})).replace(/¨0/,""),e=s.converter._dispatch("codeBlocks.after",e,n,s)}),x.subParser("codeSpans",function(e,n,s){"use strict";return e=(e=void 0===(e=s.converter._dispatch("codeSpans.before",e,n,s))?"":e).replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(e,r,t,a){return a=(a=a.replace(/^([ \t]*)/g,"")).replace(/[ \t]*$/g,""),a=r+"<code>"+(a=x.subParser("encodeCode")(a,n,s))+"</code>",a=x.subParser("hashHTMLSpans")(a,n,s)}),e=s.converter._dispatch("codeSpans.after",e,n,s)}),x.subParser("completeHTMLDocument",function(e,r,t){"use strict";if(!r.completeHTMLDocument)return e;e=t.converter._dispatch("completeHTMLDocument.before",e,r,t);var a,n="html",s="<!DOCTYPE HTML>\n",o="",i='<meta charset="utf-8">\n',l="",c="";for(a in void 0!==t.metadata.parsed.doctype&&(s="<!DOCTYPE "+t.metadata.parsed.doctype+">\n","html"!==(n=t.metadata.parsed.doctype.toString().toLowerCase())&&"html5"!==n||(i='<meta charset="utf-8">')),t.metadata.parsed)if(t.metadata.parsed.hasOwnProperty(a))switch(a.toLowerCase()){case"doctype":break;case"title":o="<title>"+t.metadata.parsed.title+"</title>\n";break;case"charset":i="html"===n||"html5"===n?'<meta charset="'+t.metadata.parsed.charset+'">\n':'<meta name="charset" content="'+t.metadata.parsed.charset+'">\n';break;case"language":case"lang":l=' lang="'+t.metadata.parsed[a]+'"',c+='<meta name="'+a+'" content="'+t.metadata.parsed[a]+'">\n';break;default:c+='<meta name="'+a+'" content="'+t.metadata.parsed[a]+'">\n'}return e=s+"<html"+l+">\n<head>\n"+o+i+c+"</head>\n<body>\n"+e.trim()+"\n</body>\n</html>",e=t.converter._dispatch("completeHTMLDocument.after",e,r,t)}),x.subParser("detab",function(e,r,t){"use strict";return e=(e=(e=(e=(e=(e=t.converter._dispatch("detab.before",e,r,t)).replace(/\t(?=\t)/g,"    ")).replace(/\t/g,"¨A¨B")).replace(/¨B(.+?)¨A/g,function(e,r){for(var t=r,a=4-t.length%4,n=0;n<a;n++)t+=" ";return t})).replace(/¨A/g,"    ")).replace(/¨B/g,""),e=t.converter._dispatch("detab.after",e,r,t)}),x.subParser("ellipsis",function(e,r,t){"use strict";return r.ellipsis?(e=(e=t.converter._dispatch("ellipsis.before",e,r,t)).replace(/\.\.\./g,"…"),t.converter._dispatch("ellipsis.after",e,r,t)):e}),x.subParser("emoji",function(e,r,t){"use strict";if(!r.emoji)return e;return e=(e=t.converter._dispatch("emoji.before",e,r,t)).replace(/:([\S]+?):/g,function(e,r){return x.helper.emojis.hasOwnProperty(r)?x.helper.emojis[r]:e}),e=t.converter._dispatch("emoji.after",e,r,t)}),x.subParser("encodeAmpsAndAngles",function(e,r,t){"use strict";return e=(e=(e=(e=(e=t.converter._dispatch("encodeAmpsAndAngles.before",e,r,t)).replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;")).replace(/<(?![a-z\/?$!])/gi,"&lt;")).replace(/</g,"&lt;")).replace(/>/g,"&gt;"),e=t.converter._dispatch("encodeAmpsAndAngles.after",e,r,t)}),x.subParser("encodeBackslashEscapes",function(e,r,t){"use strict";return e=(e=(e=t.converter._dispatch("encodeBackslashEscapes.before",e,r,t)).replace(/\\(\\)/g,x.helper.escapeCharactersCallback)).replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g,x.helper.escapeCharactersCallback),e=t.converter._dispatch("encodeBackslashEscapes.after",e,r,t)}),x.subParser("encodeCode",function(e,r,t){"use strict";return e=(e=t.converter._dispatch("encodeCode.before",e,r,t)).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/([*_{}\[\]\\=~-])/g,x.helper.escapeCharactersCallback),e=t.converter._dispatch("encodeCode.after",e,r,t)}),x.subParser("escapeSpecialCharsWithinTagAttributes",function(e,r,t){"use strict";return e=(e=(e=t.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before",e,r,t)).replace(/<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi,function(e){return e.replace(/(.)<\/?code>(?=.)/g,"$1`").replace(/([\\`*_~=|])/g,x.helper.escapeCharactersCallback)})).replace(/<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi,function(e){return e.replace(/([\\`*_~=|])/g,x.helper.escapeCharactersCallback)}),e=t.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after",e,r,t)}),x.subParser("githubCodeBlocks",function(e,s,o){"use strict";return s.ghCodeBlocks?(e=o.converter._dispatch("githubCodeBlocks.before",e,s,o),e=(e=(e+="¨0").replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g,function(e,r,t,a){var n=s.omitExtraWLInCodeBlocks?"":"\n";return a=x.subParser("encodeCode")(a,s,o),a="<pre><code"+(t?' class="'+t+" language-"+t+'"':"")+">"+(a=(a=(a=x.subParser("detab")(a,s,o)).replace(/^\n+/g,"")).replace(/\n+$/g,""))+n+"</code></pre>",a=x.subParser("hashBlock")(a,s,o),"\n\n¨G"+(o.ghCodeBlocks.push({text:e,codeblock:a})-1)+"G\n\n"})).replace(/¨0/,""),o.converter._dispatch("githubCodeBlocks.after",e,s,o)):e}),x.subParser("hashBlock",function(e,r,t){"use strict";return e=(e=t.converter._dispatch("hashBlock.before",e,r,t)).replace(/(^\n+|\n+$)/g,""),e="\n\n¨K"+(t.gHtmlBlocks.push(e)-1)+"K\n\n",e=t.converter._dispatch("hashBlock.after",e,r,t)}),x.subParser("hashCodeTags",function(e,n,s){"use strict";e=s.converter._dispatch("hashCodeTags.before",e,n,s);return e=x.helper.replaceRecursiveRegExp(e,function(e,r,t,a){t=t+x.subParser("encodeCode")(r,n,s)+a;return"¨C"+(s.gHtmlSpans.push(t)-1)+"C"},"<code\\b[^>]*>","</code>","gim"),e=s.converter._dispatch("hashCodeTags.after",e,n,s)}),x.subParser("hashElement",function(e,r,t){"use strict";return function(e,r){return r=(r=(r=r.replace(/\n\n/g,"\n")).replace(/^\n/,"")).replace(/\n+$/g,""),r="\n\n¨K"+(t.gHtmlBlocks.push(r)-1)+"K\n\n"}}),x.subParser("hashHTMLBlocks",function(e,r,n){"use strict";e=n.converter._dispatch("hashHTMLBlocks.before",e,r,n);function t(e,r,t,a){return-1!==t.search(/\bmarkdown\b/)&&(e=t+n.converter.makeHtml(r)+a),"\n\n¨K"+(n.gHtmlBlocks.push(e)-1)+"K\n\n"}var a=["pre","div","h1","h2","h3","h4","h5","h6","blockquote","table","dl","ol","ul","script","noscript","form","fieldset","iframe","math","style","section","header","footer","nav","article","aside","address","audio","canvas","figure","hgroup","output","video","p"];r.backslashEscapesHTMLTags&&(e=e.replace(/\\<(\/?[^>]+?)>/g,function(e,r){return"&lt;"+r+"&gt;"}));for(var s=0;s<a.length;++s)for(var o=new RegExp("^ {0,3}(<"+a[s]+"\\b[^>]*>)","im"),i="<"+a[s]+"\\b[^>]*>",l="</"+a[s]+">";-1!==(c=x.helper.regexIndexOf(e,o));){var c=x.helper.splitAtIndex(e,c),u=x.helper.replaceRecursiveRegExp(c[1],t,i,l,"im");if(u===c[1])break;e=c[0].concat(u)}return e=e.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,x.subParser("hashElement")(e,r,n)),e=(e=x.helper.replaceRecursiveRegExp(e,function(e){return"\n\n¨K"+(n.gHtmlBlocks.push(e)-1)+"K\n\n"},"^ {0,3}\x3c!--","--\x3e","gm")).replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,x.subParser("hashElement")(e,r,n)),e=n.converter._dispatch("hashHTMLBlocks.after",e,r,n)}),x.subParser("hashHTMLSpans",function(e,r,t){"use strict";function a(e){return"¨C"+(t.gHtmlSpans.push(e)-1)+"C"}return e=(e=(e=(e=(e=t.converter._dispatch("hashHTMLSpans.before",e,r,t)).replace(/<[^>]+?\/>/gi,a)).replace(/<([^>]+?)>[\s\S]*?<\/\1>/g,a)).replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g,a)).replace(/<[^>]+?>/gi,a),e=t.converter._dispatch("hashHTMLSpans.after",e,r,t)}),x.subParser("unhashHTMLSpans",function(e,r,t){"use strict";e=t.converter._dispatch("unhashHTMLSpans.before",e,r,t);for(var a=0;a<t.gHtmlSpans.length;++a){for(var n=t.gHtmlSpans[a],s=0;/¨C(\d+)C/.test(n);){var o=RegExp.$1,n=n.replace("¨C"+o+"C",t.gHtmlSpans[o]);if(10===s){console.error("maximum nesting of 10 spans reached!!!");break}++s}e=e.replace("¨C"+a+"C",n)}return e=t.converter._dispatch("unhashHTMLSpans.after",e,r,t)}),x.subParser("hashPreCodeTags",function(e,n,s){"use strict";e=s.converter._dispatch("hashPreCodeTags.before",e,n,s);return e=x.helper.replaceRecursiveRegExp(e,function(e,r,t,a){t=t+x.subParser("encodeCode")(r,n,s)+a;return"\n\n¨G"+(s.ghCodeBlocks.push({text:e,codeblock:t})-1)+"G\n\n"},"^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>","^ {0,3}</code>\\s*</pre>","gim"),e=s.converter._dispatch("hashPreCodeTags.after",e,n,s)}),x.subParser("headers",function(e,n,s){"use strict";e=s.converter._dispatch("headers.before",e,n,s);var o=isNaN(parseInt(n.headerLevelStart))?1:parseInt(n.headerLevelStart),r=n.smoothLivePreview?/^(.+)[ \t]*\n={2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n=+[ \t]*\n+/gm,t=n.smoothLivePreview?/^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n-+[ \t]*\n+/gm,r=(e=(e=e.replace(r,function(e,r){var t=x.subParser("spanGamut")(r,n,s),r=n.noHeaderId?"":' id="'+i(r)+'"',r="<h"+o+r+">"+t+"</h"+o+">";return x.subParser("hashBlock")(r,n,s)})).replace(t,function(e,r){var t=x.subParser("spanGamut")(r,n,s),r=n.noHeaderId?"":' id="'+i(r)+'"',a=o+1,r="<h"+a+r+">"+t+"</h"+a+">";return x.subParser("hashBlock")(r,n,s)}),n.requireSpaceBeforeHeadingText?/^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm:/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm);function i(e){var r=e=n.customizedHeaderId&&(r=e.match(/\{([^{]+?)}\s*$/))&&r[1]?r[1]:e,e=x.helper.isString(n.prefixHeaderId)?n.prefixHeaderId:!0===n.prefixHeaderId?"section-":"";return n.rawPrefixHeaderId||(r=e+r),r=(n.ghCompatibleHeaderId?r.replace(/ /g,"-").replace(/&amp;/g,"").replace(/¨T/g,"").replace(/¨D/g,"").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g,""):n.rawHeaderId?r.replace(/ /g,"-").replace(/&amp;/g,"&").replace(/¨T/g,"¨").replace(/¨D/g,"$").replace(/["']/g,"-"):r.replace(/[^\w]/g,"")).toLowerCase(),n.rawPrefixHeaderId&&(r=e+r),s.hashLinkCounts[r]?r=r+"-"+s.hashLinkCounts[r]++:s.hashLinkCounts[r]=1,r}return e=e.replace(r,function(e,r,t){var a=t,a=(n.customizedHeaderId&&(a=t.replace(/\s?\{([^{]+?)}\s*$/,"")),x.subParser("spanGamut")(a,n,s)),t=n.noHeaderId?"":' id="'+i(t)+'"',r=o-1+r.length,t="<h"+r+t+">"+a+"</h"+r+">";return x.subParser("hashBlock")(t,n,s)}),e=s.converter._dispatch("headers.after",e,n,s)}),x.subParser("horizontalRule",function(e,r,t){"use strict";e=t.converter._dispatch("horizontalRule.before",e,r,t);var a=x.subParser("hashBlock")("<hr />",r,t);return e=(e=(e=e.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm,a)).replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm,a)).replace(/^ {0,2}( ?_){3,}[ \t]*$/gm,a),e=t.converter._dispatch("horizontalRule.after",e,r,t)}),x.subParser("images",function(e,r,d){"use strict";function l(e,r,t,a,n,s,o,i){var l=d.gUrls,c=d.gTitles,u=d.gDimensions;if(t=t.toLowerCase(),i=i||"",-1<e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m))a="";else if(""===a||null===a){if(a="#"+(t=""!==t&&null!==t?t:r.toLowerCase().replace(/ ?\n/g," ")),x.helper.isUndefined(l[t]))return e;a=l[t],x.helper.isUndefined(c[t])||(i=c[t]),x.helper.isUndefined(u[t])||(n=u[t].width,s=u[t].height)}r=r.replace(/"/g,"&quot;").replace(x.helper.regexes.asteriskDashAndColon,x.helper.escapeCharactersCallback);e='<img src="'+(a=a.replace(x.helper.regexes.asteriskDashAndColon,x.helper.escapeCharactersCallback))+'" alt="'+r+'"';return i&&x.helper.isString(i)&&(e+=' title="'+(i=i.replace(/"/g,"&quot;").replace(x.helper.regexes.asteriskDashAndColon,x.helper.escapeCharactersCallback))+'"'),n&&s&&(e=e+(' width="'+(n="*"===n?"auto":n))+'" height="'+(s="*"===s?"auto":s)+'"'),e+=" />"}return e=(e=(e=(e=(e=(e=d.converter._dispatch("images.before",e,r,d)).replace(/!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,l)).replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,function(e,r,t,a,n,s,o,i){return l(e,r,t,a=a.replace(/\s/g,""),n,s,0,i)})).replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,l)).replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,l)).replace(/!\[([^\[\]]+)]()()()()()/g,l),e=d.converter._dispatch("images.after",e,r,d)}),x.subParser("italicsAndBold",function(e,r,t){"use strict";return e=t.converter._dispatch("italicsAndBold.before",e,r,t),e=r.literalMidWordUnderscores?(e=(e=e.replace(/\b___(\S[\s\S]*?)___\b/g,function(e,r){return"<strong><em>"+r+"</em></strong>"})).replace(/\b__(\S[\s\S]*?)__\b/g,function(e,r){return"<strong>"+r+"</strong>"})).replace(/\b_(\S[\s\S]*?)_\b/g,function(e,r){return"<em>"+r+"</em>"}):(e=(e=e.replace(/___(\S[\s\S]*?)___/g,function(e,r){return/\S$/.test(r)?"<strong><em>"+r+"</em></strong>":e})).replace(/__(\S[\s\S]*?)__/g,function(e,r){return/\S$/.test(r)?"<strong>"+r+"</strong>":e})).replace(/_([^\s_][\s\S]*?)_/g,function(e,r){return/\S$/.test(r)?"<em>"+r+"</em>":e}),e=r.literalMidWordAsterisks?(e=(e=e.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g,function(e,r,t){return r+"<strong><em>"+t+"</em></strong>"})).replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g,function(e,r,t){return r+"<strong>"+t+"</strong>"})).replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g,function(e,r,t){return r+"<em>"+t+"</em>"}):(e=(e=e.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g,function(e,r){return/\S$/.test(r)?"<strong><em>"+r+"</em></strong>":e})).replace(/\*\*(\S[\s\S]*?)\*\*/g,function(e,r){return/\S$/.test(r)?"<strong>"+r+"</strong>":e})).replace(/\*([^\s*][\s\S]*?)\*/g,function(e,r){return/\S$/.test(r)?"<em>"+r+"</em>":e}),e=t.converter._dispatch("italicsAndBold.after",e,r,t)}),x.subParser("lists",function(e,d,c){"use strict";function p(e,r){c.gListLevel++,e=e.replace(/\n{2,}$/,"\n");var t=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,l=/\n[ \t]*\n(?!¨0)/.test(e+="¨0");return d.disableForced4SpacesIndentedSublists&&(t=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm),e=(e=e.replace(t,function(e,r,t,a,n,s,o){o=o&&""!==o.trim();var n=x.subParser("outdent")(n,d,c),i="";return s&&d.tasklists&&(i=' class="task-list-item" style="list-style-type: none;"',n=n.replace(/^[ \t]*\[(x|X| )?]/m,function(){var e='<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';return o&&(e+=" checked"),e+=">"})),n=n.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g,function(e){return"¨A"+e}),n="<li"+i+">"+(n=(n=r||-1<n.search(/\n{2,}/)?(n=x.subParser("githubCodeBlocks")(n,d,c),x.subParser("blockGamut")(n,d,c)):(n=(n=x.subParser("lists")(n,d,c)).replace(/\n$/,""),n=(n=x.subParser("hashHTMLBlocks")(n,d,c)).replace(/\n\n+/g,"\n\n"),(l?x.subParser("paragraphs"):x.subParser("spanGamut"))(n,d,c))).replace("¨A",""))+"</li>\n"})).replace(/¨0/g,""),c.gListLevel--,e=r?e.replace(/\s+$/,""):e}function h(e,r){if("ol"===r){r=e.match(/^ *(\d+)\./);if(r&&"1"!==r[1])return' start="'+r[1]+'"'}return""}function n(n,s,o){var e,i=d.disableForced4SpacesIndentedSublists?/^ ?\d+\.[ \t]/gm:/^ {0,3}\d+\.[ \t]/gm,l=d.disableForced4SpacesIndentedSublists?/^ ?[*+-][ \t]/gm:/^ {0,3}[*+-][ \t]/gm,c="ul"===s?i:l,u="";return-1!==n.search(c)?function e(r){var t=r.search(c),a=h(n,s);-1!==t?(u+="\n\n<"+s+a+">\n"+p(r.slice(0,t),!!o)+"</"+s+">\n",c="ul"===(s="ul"===s?"ol":"ul")?i:l,e(r.slice(t))):u+="\n\n<"+s+a+">\n"+p(r,!!o)+"</"+s+">\n"}(n):(e=h(n,s),u="\n\n<"+s+e+">\n"+p(n,!!o)+"</"+s+">\n"),u}return e=c.converter._dispatch("lists.before",e,d,c),e+="¨0",e=(e=c.gListLevel?e.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(e,r,t){return n(r,-1<t.search(/[*+-]/g)?"ul":"ol",!0)}):e.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(e,r,t,a){return n(t,-1<a.search(/[*+-]/g)?"ul":"ol",!1)})).replace(/¨0/,""),e=c.converter._dispatch("lists.after",e,d,c)}),x.subParser("metadata",function(e,r,a){"use strict";return r.metadata?(e=(e=(e=(e=a.converter._dispatch("metadata.before",e,r,a)).replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/,function(e,r,t){return n(t),"¨M"})).replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/,function(e,r,t){return r&&(a.metadata.format=r),n(t),"¨M"})).replace(/¨M/g,""),a.converter._dispatch("metadata.after",e,r,a)):e;function n(e){(e=(e=(a.metadata.raw=e).replace(/&/g,"&amp;").replace(/"/g,"&quot;")).replace(/\n {4}/g," ")).replace(/^([\S ]+): +([\s\S]+?)$/gm,function(e,r,t){return a.metadata.parsed[r]=t,""})}}),x.subParser("outdent",function(e,r,t){"use strict";return e=(e=(e=t.converter._dispatch("outdent.before",e,r,t)).replace(/^(\t|[ ]{1,4})/gm,"¨0")).replace(/¨0/g,""),e=t.converter._dispatch("outdent.after",e,r,t)}),x.subParser("paragraphs",function(e,r,t){"use strict";for(var a=(e=(e=(e=t.converter._dispatch("paragraphs.before",e,r,t)).replace(/^\n+/g,"")).replace(/\n+$/g,"")).split(/\n{2,}/g),n=[],s=a.length,o=0;o<s;o++){var i=a[o];0<=i.search(/¨(K|G)(\d+)\1/g)?n.push(i):0<=i.search(/\S/)&&(i=(i=x.subParser("spanGamut")(i,r,t)).replace(/^([ \t]*)/g,"<p>"),i+="</p>",n.push(i))}for(s=n.length,o=0;o<s;o++){for(var l="",c=n[o],u=!1;/¨(K|G)(\d+)\1/.test(c);){var d=RegExp.$1,p=RegExp.$2;l=(l="K"===d?t.gHtmlBlocks[p]:u?x.subParser("encodeCode")(t.ghCodeBlocks[p].text,r,t):t.ghCodeBlocks[p].codeblock).replace(/\$/g,"$$$$"),c=c.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/,l),/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(c)&&(u=!0)}n[o]=c}return e=(e=(e=n.join("\n")).replace(/^\n+/g,"")).replace(/\n+$/g,""),t.converter._dispatch("paragraphs.after",e,r,t)}),x.subParser("runExtension",function(e,r,t,a){"use strict";return e.filter?r=e.filter(r,a.converter,t):e.regex&&((a=e.regex)instanceof RegExp||(a=new RegExp(a,"g")),r=r.replace(a,e.replace)),r}),x.subParser("spanGamut",function(e,r,t){"use strict";return e=t.converter._dispatch("spanGamut.before",e,r,t),e=x.subParser("codeSpans")(e,r,t),e=x.subParser("escapeSpecialCharsWithinTagAttributes")(e,r,t),e=x.subParser("encodeBackslashEscapes")(e,r,t),e=x.subParser("images")(e,r,t),e=x.subParser("anchors")(e,r,t),e=x.subParser("autoLinks")(e,r,t),e=x.subParser("simplifiedAutoLinks")(e,r,t),e=x.subParser("emoji")(e,r,t),e=x.subParser("underline")(e,r,t),e=x.subParser("italicsAndBold")(e,r,t),e=x.subParser("strikethrough")(e,r,t),e=x.subParser("ellipsis")(e,r,t),e=x.subParser("hashHTMLSpans")(e,r,t),e=x.subParser("encodeAmpsAndAngles")(e,r,t),r.simpleLineBreaks?/\n\n¨K/.test(e)||(e=e.replace(/\n+/g,"<br />\n")):e=e.replace(/  +\n/g,"<br />\n"),e=t.converter._dispatch("spanGamut.after",e,r,t)}),x.subParser("strikethrough",function(e,t,a){"use strict";return t.strikethrough&&(e=(e=a.converter._dispatch("strikethrough.before",e,t,a)).replace(/(?:~){2}([\s\S]+?)(?:~){2}/g,function(e,r){return r=r,"<del>"+(r=t.simplifiedAutoLink?x.subParser("simplifiedAutoLinks")(r,t,a):r)+"</del>"}),e=a.converter._dispatch("strikethrough.after",e,t,a)),e}),x.subParser("stripLinkDefinitions",function(i,l,c){"use strict";function e(e,r,t,a,n,s,o){return r=r.toLowerCase(),i.toLowerCase().split(r).length-1<2?e:(t.match(/^data:.+?\/.+?;base64,/)?c.gUrls[r]=t.replace(/\s/g,""):c.gUrls[r]=x.subParser("encodeAmpsAndAngles")(t,l,c),s?s+o:(o&&(c.gTitles[r]=o.replace(/"|'/g,"&quot;")),l.parseImgDimensions&&a&&n&&(c.gDimensions[r]={width:a,height:n}),""))}return i=(i=(i=(i+="¨0").replace(/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm,e)).replace(/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,e)).replace(/¨0/,"")}),x.subParser("tables",function(e,y,P){"use strict";if(!y.tables)return e;function r(e){for(var r=e.split("\n"),t=0;t<r.length;++t)/^ {0,3}\|/.test(r[t])&&(r[t]=r[t].replace(/^ {0,3}\|/,"")),/\|[ \t]*$/.test(r[t])&&(r[t]=r[t].replace(/\|[ \t]*$/,"")),r[t]=x.subParser("codeSpans")(r[t],y,P);var a,n,s,o,i,l=r[0].split("|").map(function(e){return e.trim()}),c=r[1].split("|").map(function(e){return e.trim()}),u=[],d=[],p=[],h=[];for(r.shift(),r.shift(),t=0;t<r.length;++t)""!==r[t].trim()&&u.push(r[t].split("|").map(function(e){return e.trim()}));if(l.length<c.length)return e;for(t=0;t<c.length;++t)p.push((a=c[t],/^:[ \t]*--*$/.test(a)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(a)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(a)?' style="text-align:center;"':""));for(t=0;t<l.length;++t)x.helper.isUndefined(p[t])&&(p[t]=""),d.push((n=l[t],s=p[t],void 0,o="",n=n.trim(),"<th"+(o=y.tablesHeaderId||y.tableHeaderId?' id="'+n.replace(/ /g,"_").toLowerCase()+'"':o)+s+">"+(n=x.subParser("spanGamut")(n,y,P))+"</th>\n"));for(t=0;t<u.length;++t){for(var _=[],g=0;g<d.length;++g)x.helper.isUndefined(u[t][g]),_.push((i=u[t][g],"<td"+p[g]+">"+x.subParser("spanGamut")(i,y,P)+"</td>\n"));h.push(_)}for(var m=d,f=h,b="<table>\n<thead>\n<tr>\n",w=m.length,k=0;k<w;++k)b+=m[k];for(b+="</tr>\n</thead>\n<tbody>\n",k=0;k<f.length;++k){b+="<tr>\n";for(var v=0;v<w;++v)b+=f[k][v];b+="</tr>\n"}return b+="</tbody>\n</table>\n"}return e=(e=(e=(e=P.converter._dispatch("tables.before",e,y,P)).replace(/\\(\|)/g,x.helper.escapeCharactersCallback)).replace(/^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,r)).replace(/^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm,r),e=P.converter._dispatch("tables.after",e,y,P)}),x.subParser("underline",function(e,r,t){"use strict";return r.underline?(e=t.converter._dispatch("underline.before",e,r,t),e=(e=r.literalMidWordUnderscores?(e=e.replace(/\b___(\S[\s\S]*?)___\b/g,function(e,r){return"<u>"+r+"</u>"})).replace(/\b__(\S[\s\S]*?)__\b/g,function(e,r){return"<u>"+r+"</u>"}):(e=e.replace(/___(\S[\s\S]*?)___/g,function(e,r){return/\S$/.test(r)?"<u>"+r+"</u>":e})).replace(/__(\S[\s\S]*?)__/g,function(e,r){return/\S$/.test(r)?"<u>"+r+"</u>":e})).replace(/(_)/g,x.helper.escapeCharactersCallback),t.converter._dispatch("underline.after",e,r,t)):e}),x.subParser("unescapeSpecialChars",function(e,r,t){"use strict";return e=(e=t.converter._dispatch("unescapeSpecialChars.before",e,r,t)).replace(/¨E(\d+)E/g,function(e,r){r=parseInt(r);return String.fromCharCode(r)}),e=t.converter._dispatch("unescapeSpecialChars.after",e,r,t)}),x.subParser("makeMarkdown.blockquote",function(e,r){"use strict";var t="";if(e.hasChildNodes())for(var a=e.childNodes,n=a.length,s=0;s<n;++s){var o=x.subParser("makeMarkdown.node")(a[s],r);""!==o&&(t+=o)}return t="> "+(t=t.trim()).split("\n").join("\n> ")}),x.subParser("makeMarkdown.codeBlock",function(e,r){"use strict";var t=e.getAttribute("language"),e=e.getAttribute("precodenum");return"```"+t+"\n"+r.preList[e]+"\n```"}),x.subParser("makeMarkdown.codeSpan",function(e){"use strict";return"`"+e.innerHTML+"`"}),x.subParser("makeMarkdown.emphasis",function(e,r){"use strict";var t="";if(e.hasChildNodes()){t+="*";for(var a=e.childNodes,n=a.length,s=0;s<n;++s)t+=x.subParser("makeMarkdown.node")(a[s],r);t+="*"}return t}),x.subParser("makeMarkdown.header",function(e,r,t){"use strict";var t=new Array(t+1).join("#"),a="";if(e.hasChildNodes())for(var a=t+" ",n=e.childNodes,s=n.length,o=0;o<s;++o)a+=x.subParser("makeMarkdown.node")(n[o],r);return a}),x.subParser("makeMarkdown.hr",function(){"use strict";return"---"}),x.subParser("makeMarkdown.image",function(e){"use strict";var r="";return e.hasAttribute("src")&&(r=(r+="!["+e.getAttribute("alt")+"](")+"<"+e.getAttribute("src")+">",e.hasAttribute("width")&&e.hasAttribute("height")&&(r+=" ="+e.getAttribute("width")+"x"+e.getAttribute("height")),e.hasAttribute("title")&&(r+=' "'+e.getAttribute("title")+'"'),r+=")"),r}),x.subParser("makeMarkdown.links",function(e,r){"use strict";var t="";if(e.hasChildNodes()&&e.hasAttribute("href")){for(var a=e.childNodes,n=a.length,t="[",s=0;s<n;++s)t+=x.subParser("makeMarkdown.node")(a[s],r);t=(t+="](")+("<"+e.getAttribute("href")+">"),e.hasAttribute("title")&&(t+=' "'+e.getAttribute("title")+'"'),t+=")"}return t}),x.subParser("makeMarkdown.list",function(e,r,t){"use strict";var a="";if(!e.hasChildNodes())return"";for(var n=e.childNodes,s=n.length,o=e.getAttribute("start")||1,i=0;i<s;++i)void 0!==n[i].tagName&&"li"===n[i].tagName.toLowerCase()&&(a+=("ol"===t?o.toString()+". ":"- ")+x.subParser("makeMarkdown.listItem")(n[i],r),++o);return(a+="\n\x3c!-- --\x3e\n").trim()}),x.subParser("makeMarkdown.listItem",function(e,r){"use strict";for(var t="",a=e.childNodes,n=a.length,s=0;s<n;++s)t+=x.subParser("makeMarkdown.node")(a[s],r);return/\n$/.test(t)?t=t.split("\n").join("\n    ").replace(/^ {4}$/gm,"").replace(/\n\n+/g,"\n\n"):t+="\n",t}),x.subParser("makeMarkdown.node",function(e,r,t){"use strict";t=t||!1;var a="";if(3===e.nodeType)return x.subParser("makeMarkdown.txt")(e,r);if(8===e.nodeType)return"\x3c!--"+e.data+"--\x3e\n\n";if(1!==e.nodeType)return"";switch(e.tagName.toLowerCase()){case"h1":t||(a=x.subParser("makeMarkdown.header")(e,r,1)+"\n\n");break;case"h2":t||(a=x.subParser("makeMarkdown.header")(e,r,2)+"\n\n");break;case"h3":t||(a=x.subParser("makeMarkdown.header")(e,r,3)+"\n\n");break;case"h4":t||(a=x.subParser("makeMarkdown.header")(e,r,4)+"\n\n");break;case"h5":t||(a=x.subParser("makeMarkdown.header")(e,r,5)+"\n\n");break;case"h6":t||(a=x.subParser("makeMarkdown.header")(e,r,6)+"\n\n");break;case"p":t||(a=x.subParser("makeMarkdown.paragraph")(e,r)+"\n\n");break;case"blockquote":t||(a=x.subParser("makeMarkdown.blockquote")(e,r)+"\n\n");break;case"hr":t||(a=x.subParser("makeMarkdown.hr")(e,r)+"\n\n");break;case"ol":t||(a=x.subParser("makeMarkdown.list")(e,r,"ol")+"\n\n");break;case"ul":t||(a=x.subParser("makeMarkdown.list")(e,r,"ul")+"\n\n");break;case"precode":t||(a=x.subParser("makeMarkdown.codeBlock")(e,r)+"\n\n");break;case"pre":t||(a=x.subParser("makeMarkdown.pre")(e,r)+"\n\n");break;case"table":t||(a=x.subParser("makeMarkdown.table")(e,r)+"\n\n");break;case"code":a=x.subParser("makeMarkdown.codeSpan")(e,r);break;case"em":case"i":a=x.subParser("makeMarkdown.emphasis")(e,r);break;case"strong":case"b":a=x.subParser("makeMarkdown.strong")(e,r);break;case"del":a=x.subParser("makeMarkdown.strikethrough")(e,r);break;case"a":a=x.subParser("makeMarkdown.links")(e,r);break;case"img":a=x.subParser("makeMarkdown.image")(e,r);break;default:a=e.outerHTML+"\n\n"}return a}),x.subParser("makeMarkdown.paragraph",function(e,r){"use strict";var t="";if(e.hasChildNodes())for(var a=e.childNodes,n=a.length,s=0;s<n;++s)t+=x.subParser("makeMarkdown.node")(a[s],r);return t=t.trim()}),x.subParser("makeMarkdown.pre",function(e,r){"use strict";e=e.getAttribute("prenum");return"<pre>"+r.preList[e]+"</pre>"}),x.subParser("makeMarkdown.strikethrough",function(e,r){"use strict";var t="";if(e.hasChildNodes()){t+="~~";for(var a=e.childNodes,n=a.length,s=0;s<n;++s)t+=x.subParser("makeMarkdown.node")(a[s],r);t+="~~"}return t}),x.subParser("makeMarkdown.strong",function(e,r){"use strict";var t="";if(e.hasChildNodes()){t+="**";for(var a=e.childNodes,n=a.length,s=0;s<n;++s)t+=x.subParser("makeMarkdown.node")(a[s],r);t+="**"}return t}),x.subParser("makeMarkdown.table",function(e,r){"use strict";for(var t="",a=[[],[]],n=e.querySelectorAll("thead>tr>th"),s=e.querySelectorAll("tbody>tr"),o=0;o<n.length;++o){var i=x.subParser("makeMarkdown.tableCell")(n[o],r),l="---";if(n[o].hasAttribute("style"))switch(n[o].getAttribute("style").toLowerCase().replace(/\s/g,"")){case"text-align:left;":l=":---";break;case"text-align:right;":l="---:";break;case"text-align:center;":l=":---:"}a[0][o]=i.trim(),a[1][o]=l}for(o=0;o<s.length;++o)for(var c=a.push([])-1,u=s[o].getElementsByTagName("td"),d=0;d<n.length;++d){var p=" ";void 0!==u[d]&&(p=x.subParser("makeMarkdown.tableCell")(u[d],r)),a[c].push(p)}var h=3;for(o=0;o<a.length;++o)for(d=0;d<a[o].length;++d){var _=a[o][d].length;h<_&&(h=_)}for(o=0;o<a.length;++o){for(d=0;d<a[o].length;++d)1===o?":"===a[o][d].slice(-1)?a[o][d]=x.helper.padEnd(a[o][d].slice(-1),h-1,"-")+":":a[o][d]=x.helper.padEnd(a[o][d],h,"-"):a[o][d]=x.helper.padEnd(a[o][d],h);t+="| "+a[o].join(" | ")+" |\n"}return t.trim()}),x.subParser("makeMarkdown.tableCell",function(e,r){"use strict";var t="";if(!e.hasChildNodes())return"";for(var a=e.childNodes,n=a.length,s=0;s<n;++s)t+=x.subParser("makeMarkdown.node")(a[s],r,!0);return t.trim()}),x.subParser("makeMarkdown.txt",function(e){"use strict";e=e.nodeValue;return e=(e=e.replace(/ +/g," ")).replace(/¨NBSP;/g," "),e=(e=(e=(e=(e=(e=(e=(e=(e=x.helper.unescapeHTMLEntities(e)).replace(/([*_~|`])/g,"\\$1")).replace(/^(\s*)>/g,"\\$1>")).replace(/^#/gm,"\\#")).replace(/^(\s*)([-=]{3,})(\s*)$/,"$1\\$2$3")).replace(/^( {0,3}\d+)\./gm,"$1\\.")).replace(/^( {0,3})([+-])/gm,"$1\\$2")).replace(/]([\s]*)\(/g,"\\]$1\\(")).replace(/^ {0,3}\[([\S \t]*?)]:/gm,"\\[$1]:")});"function"==typeof define&&define.amd?define(function(){"use strict";return x}):"undefined"!=typeof module&&module.exports?module.exports=x:this.showdown=x}.call(this);
/*! showdown Youtube Extension. */
!function(e){"use strict";if("undefined"!=typeof showdown)e(showdown);else if("function"==typeof define&&define.amd)define(["showdown"],e);else{if("object"!=typeof exports)throw Error("Could not find showdown library");module.exports=e(require("showdown"))}}((function(e){"use strict";var t=/(?:<p>)?<img.*?src="(.+?)"(.*?)\/?>(?:<\/p>)?/gi,o=/(?:(?:https?:)?(?:\/\/)?)(?:(?:www)?\.)?youtube\.(?:.+?)\/(?:(?:watch\?v=)|(?:embed\/|shorts|))([a-zA-Z0-9_-]{11})/i,i=/(?:(?:https?:)?(?:\/\/)?)?youtu\.be\/([a-zA-Z0-9_-]{11})/i,r=/(?:(?:https?:)?(?:\/\/)?)(?:(?:www)?\.)?vimeo.com\/(\d+)/;e.extension("youtube",(function(){return[{type:"output",filter:function(e,s,n){var l='<iframe src="%1" width="%2" height="%3" frameborder="0" allowfullscreen></iframe>';return n.smoothLivePreview&&(l=n.youtubeUseSimpleImg?'<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=" width="%2" height="%3">':'<div class="youtube-preview" style="width:%2; height:%3; background-color:#333; position:relative;"><svg version="1.1" xmlns="http://www.w3.org/2000/svg"      width="100" height="70" viewBox="0 0 100 70"     style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">    <defs>      <linearGradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">        <stop offset="0%" style="stop-color:rgb(229,45,49);stop-opacity:1" />        <stop offset="100%" style="stop-color:rgb(191,23,29);stop-opacity:1" />      </linearGradient>    </defs>    <rect width="100%" height="100%" rx="26" fill="url(#grad1)"/>    <polygon points="35,20 70,35 35,50" fill="#fff"/>    <polygon points="35,20 70,35 64,37 35,21" fill="#e8e0e0"/></svg><div style="text-align:center; padding-top:10px; color:#fff"><a href="%1">%1</a></div></div>'),e.replace(t,(function(e,t,s){var d,f=function(e,t){var o,i,r,s,n;return s=t.youtubeWidth?t.youtubeWidth:420,n=t.youtubeHeight?t.youtubeHeight:315,e&&(o=(r=/width="(.+?)"/.exec(e))?r[1]:s,i=(r=/height="(.+?)"/.exec(e))?r[1]:n),/^\d+$/gm.exec(o)&&(o+="px"),/^\d+$/gm.exec(i)&&(i+="px"),{width:o,height:i}}(s,n),h="";if((d=i.exec(t))||(d=o.exec(t)))h="https://www.youtube.com/embed/"+d[1]+"?rel=0";else{if(!(d=r.exec(t)))return e;h="https://player.vimeo.com/video/"+d[1]}return l.replace(/%1/g,h).replace("%2",f.width).replace("%3",f.height)}))}}]}))}));
/*! showdown Options. */
showdown.setOption("strikethrough", true);showdown.setOption("ghMentions", true);showdown.setOption("emoji", true);showdown.setOption("tables", true);showdown.setOption("simpleLineBreaks", true);showdown.setOption("simplifiedAutoLink", true);showdown.setOption("noHeaderId",true);showdown.setOption("omitExtraWLInCodeBlocks",true);showdown.setOption("ghMentionsLink", "https://anilist.co/user/{u}/");showdown.setOption("youtubeHeight", "300px");showdown.setOption("youtubeWidth", "300px");
const converter=new showdown.Converter({extensions:["youtube"]});
let makeHtml=function(e){let t=(e=e.replace("----","---")).split("~~~"),r=/img(\d+%?)?\(http.+?\)/gi;t=t.map(e=>{let t=e.match(r);return t&&t.forEach(t=>{let r=t.match(/^img(\d+%?)?\((http.+?)\)$/i);e=e.replace(t,`<img width="${r[1]||""}" src="${r[2]}">`)}),e});let a=/webm\(http.+?\)/gi;t=t.map(e=>{let t=e.match(a);return t&&t.forEach(t=>{let r=t.match(/^webm\((http.+?)\)$/i);e=e.replace(t,`<video src="${r[1]}" controls="true" muted=""></video>`)}),e});let c=/youtube\(.+?\)/gi,l=[(t=t.map(e=>{let t=e.match(c);return t&&t.forEach(t=>{let r=t.match(/^youtube\((.+?)\)$/i);e=e.replace(t,`<a href="${r[1]}">${r[1]}</a>`)}),e}))[0]],m=!1;for(let n=1;n<t.length;n++)m?l.push("</center>"):l.push("<center>"),l.push(t[n]),m=!m;return l=l.map(e=>/~!/.test(e)||/!~/.test(e)?e.replace(/~!/g,'<span class="markdown_spoiler">').replace(/!~/g,"</span>"):e),converter.makeHtml(l.join(""))};
//LZString
var LZString=function(){var r=String.fromCharCode,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",e={};function t(r,o){if(!e[r]){e[r]={};for(var n=0;n<r.length;n++)e[r][r.charAt(n)]=n}return e[r][o]}var i={compressToBase64:function(r){if(null==r)return"";var n=i._compress(r,6,function(r){return o.charAt(r)});switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(r){return null==r?"":""==r?null:i._decompress(r.length,32,function(n){return t(o,r.charAt(n))})},compressToUTF16:function(o){return null==o?"":i._compress(o,15,function(o){return r(o+32)})+" "},decompressFromUTF16:function(r){return null==r?"":""==r?null:i._decompress(r.length,16384,function(o){return r.charCodeAt(o)-32})},compressToUint8Array:function(r){for(var o=i.compress(r),n=new Uint8Array(2*o.length),e=0,t=o.length;e<t;e++){var s=o.charCodeAt(e);n[2*e]=s>>>8,n[2*e+1]=s%256}return n},decompressFromUint8Array:function(o){if(null==o)return i.decompress(o);for(var n=new Array(o.length/2),e=0,t=n.length;e<t;e++)n[e]=256*o[2*e]+o[2*e+1];var s=[];return n.forEach(function(o){s.push(r(o))}),i.decompress(s.join(""))},compressToEncodedURIComponent:function(r){return null==r?"":i._compress(r,6,function(r){return n.charAt(r)})},decompressFromEncodedURIComponent:function(r){return null==r?"":""==r?null:(r=r.replace(/ /g,"+"),i._decompress(r.length,32,function(o){return t(n,r.charAt(o))}))},compress:function(o){return i._compress(o,16,function(o){return r(o)})},_compress:function(r,o,n){if(null==r)return"";var e,t,i,s={},u={},a="",p="",c="",l=2,f=3,h=2,d=[],m=0,v=0;for(i=0;i<r.length;i+=1)if(a=r.charAt(i),Object.prototype.hasOwnProperty.call(s,a)||(s[a]=f++,u[a]=!0),p=c+a,Object.prototype.hasOwnProperty.call(s,p))c=p;else{if(Object.prototype.hasOwnProperty.call(u,c)){if(c.charCodeAt(0)<256){for(e=0;e<h;e++)m<<=1,v==o-1?(v=0,d.push(n(m)),m=0):v++;for(t=c.charCodeAt(0),e=0;e<8;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;e<h;e++)m=m<<1|t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=c.charCodeAt(0),e=0;e<16;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}0==--l&&(l=Math.pow(2,h),h++),delete u[c]}else for(t=s[c],e=0;e<h;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;0==--l&&(l=Math.pow(2,h),h++),s[p]=f++,c=String(a)}if(""!==c){if(Object.prototype.hasOwnProperty.call(u,c)){if(c.charCodeAt(0)<256){for(e=0;e<h;e++)m<<=1,v==o-1?(v=0,d.push(n(m)),m=0):v++;for(t=c.charCodeAt(0),e=0;e<8;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;e<h;e++)m=m<<1|t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=c.charCodeAt(0),e=0;e<16;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}0==--l&&(l=Math.pow(2,h),h++),delete u[c]}else for(t=s[c],e=0;e<h;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;0==--l&&(l=Math.pow(2,h),h++)}for(t=2,e=0;e<h;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;for(;;){if(m<<=1,v==o-1){d.push(n(m));break}v++}return d.join("")},decompress:function(r){return null==r?"":""==r?null:i._decompress(r.length,32768,function(o){return r.charCodeAt(o)})},_decompress:function(o,n,e){var t,i,s,u,a,p,c,l=[],f=4,h=4,d=3,m="",v=[],g={val:e(0),position:n,index:1};for(t=0;t<3;t+=1)l[t]=t;for(s=0,a=Math.pow(2,2),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;switch(s){case 0:for(s=0,a=Math.pow(2,8),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;c=r(s);break;case 1:for(s=0,a=Math.pow(2,16),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;c=r(s);break;case 2:return""}for(l[3]=c,i=c,v.push(c);;){if(g.index>o)return"";for(s=0,a=Math.pow(2,d),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;switch(c=s){case 0:for(s=0,a=Math.pow(2,8),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;l[h++]=r(s),c=h-1,f--;break;case 1:for(s=0,a=Math.pow(2,16),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;l[h++]=r(s),c=h-1,f--;break;case 2:return v.join("")}if(0==f&&(f=Math.pow(2,d),d++),l[c])m=l[c];else{if(c!==h)return null;m=i+i.charAt(0)}v.push(m),l[h++]=i+m.charAt(0),i=m,0==--f&&(f=Math.pow(2,d),d++)}}};return i}();"function"==typeof define&&define.amd?define(function(){return LZString}):"undefined"!=typeof module&&null!=module?module.exports=LZString:"undefined"!=typeof angular&&null!=angular&&angular.module("LZString",[]).factory("LZString",function(){return LZString});
//AuthAPIQuery
let APIlimit=90,APIcallsUsed=0,APIcallsUsed_shortTerm=0,pending={},APIcounter=setInterval(function(){APIcallsUsed=0},6e4),APIcounter2=setInterval(function(){APIcallsUsed_shortTerm=0},1e4),handleResponse=function(e){APIcallsUsed=(APIlimit=e.headers.get("x-ratelimit-limit"))-e.headers.get("x-ratelimit-remaining");try{return e.json().then(function(t){return e.ok?t:Promise.reject(t)})}catch(t){throw console.warn(t,e),t}};function authAPIcall(e,t,r,a,n,i,s,l){if(!accessToken)return;if(APIcallsUsed_shortTerm>18||APIcallsUsed>APIlimit-2){setTimeout(function(){authAPIcall(e,t,r,a,n,i,s,l)},2e3);return}if("object"==typeof e&&(t=e.variables,r=e.callback,a=e.cacheKey,n=e.timeFresh,i=e.useLocalStorage,s=e.overWrite,l=e.oldCallback,e=e.query),a){let o=JSON.parse(i?localStorage.getItem(a):sessionStorage.getItem(a));if(o){if((!o.duration||NOW()<o.time+o.duration)&&!s){r(o.data,t);return}l&&l(o.data,t),i?localStorage.removeItem(a):sessionStorage.removeItem(a)}}let c=function(e,s){if(r(e,t,s),a){let l=JSON.stringify({data:e,time:NOW(),duration:n});i?localStorage.setItem(a,l):sessionStorage.setItem(a,l)}},u={method:"POST",headers:{Authorization:"Bearer "+accessToken,"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:e,variables:t})},m=function(t){if(console.error(t),t.errors&&t.errors.some(e=>"Invalid token"===e.message)){let loginLink = create("a", {class: "mainbtns",id: "signIn",href: "https://anilist.co/api/v2/oauth/authorize?client_id=12455&response_type=token"}, "<b>Error: Expired Token. Click here to renew token.</b>");listDiv2.insertBefore(loginLink, listDiv2.children[1]);accessToken="",localStorage.setItem("savetkn",accessToken);return}e.includes("mutation")?r(t.errors):c(null,t)};fetch("https://graphql.anilist.co",u).then(handleResponse).then(c).catch(m),APIcallsUsed++,APIcallsUsed_shortTerm++}
//SVG
const svgns="http://www.w3.org/2000/svg",svgShape=function(e,t,a,c,r){e=e||"g";let l=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(a||{}).forEach((e=>{l.setAttributeNS(null,e,a[e])})),r&&l.appendChild(document.createTextNode(r)),t&&t.appendChild(l),(c||[]).forEach((e=>{e.element?svgShape(e.element,l,e.attributes,e.children,e.content):l.appendChild(e)})),l},svg={};[{name:"pinned",shape:{element:"svg",attributes:{focusable:"false","data-prefix":"fas","data-icon":"thumbtack",role:"img",xmls:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",class:"svg-inline--fa fa-link fa-w-16 fa-sm","aria-hidden":"true"},children:[{element:"path",attributes:{fill:"currentColor",d:"M298.028 214.267L285.793 96H328c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v48c0 13.255 10.745 24 24 24h42.207L85.972 214.267C37.465 236.82 0 277.261 0 328c0 13.255 10.745 24 24 24h136v104.007c0 1.242.289 2.467.845 3.578l24 48c2.941 5.882 11.364 5.893 14.311 0l24-48a8.008 8.008 0 0 0 .845-3.578V352h136c13.255 0 24-10.745 24-24-.001-51.183-37.983-91.42-85.973-113.733z"}}]}},{name:"likeNative",shape:{element:"svg",attributes:{"aria-hidden":"true","data-prefix":"fas","data-icon":"heart",role:"img",xmls:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",class:"svg-inline--fa fa-heart fa-w-16 fa-sm"},children:[{element:"path",attributes:{fill:"currentColor",d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"}}]}},{name:"reply",shape:{element:"svg",attributes:{"aria-hidden":"true","data-prefix":"fas","data-icon":"comments",role:"img",xmls:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",class:"svg-inline--fa fa-comments fa-w-16 fa-sm"},children:[{element:"path",attributes:{fill:"currentColor",d:"M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"}}]}},{name:"expand",shape:{element:"svg",attributes:{"aria-hidden":"true","data-prefix":"fas","data-icon":"expand",role:"img",xmls:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",class:"svg-inline--fa fa-link fa-w-16 fa-sm"},children:[{element:"path",attributes:{fill:"currentColor",d:"M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z"}}]}},{name:"compress",shape:{element:"svg",attributes:{"aria-hidden":"true","data-prefix":"fas","data-icon":"compress",role:"img",xmls:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",class:"svg-inline--fa fa-link fa-w-16 fa-sm"},children:[{element:"path",attributes:{fill:"currentColor",d:"M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-276-24V44c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z"}}]}},{name:"link",shape:{element:"svg",attributes:{"aria-hidden":"true","data-prefix":"fas","data-icon":"link",role:"img",xmls:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",class:"svg-inline--fa fa-link fa-w-16 fa-sm"},children:[{element:"path",attributes:{fill:"currentColor",d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}}]}},{name:"xmark",shape:{element:"svg",attributes:{"aria-hidden":"true","data-prefix":"fas","data-icon":"link",role:"img",xmls:"http://www.w3.org/2000/svg",viewBox:"0 55 400 400",class:"svg-inline--fa fa-link fa-w-16 fa-sm"},children:[{element:"path",attributes:{fill:"currentColor",d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"}}]}},{name:"gear",shape:{element:"svg",attributes:{"aria-hidden":"true","data-prefix":"fas","data-icon":"link",role:"img",xmls:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",class:"svg-inline--fa fa-link fa-w-16 fa-sm"},children:[{element:"path",attributes:{fill:"currentColor",d:"M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"}}]}},{name:"edit",shape:{element:"svg",attributes:{"aria-hidden":"true","data-prefix":"fas","data-icon":"link",role:"img",xmls:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",class:"svg-inline--fa fa-link fa-w-16 fa-sm"},children:[{element:"path",attributes:{fill:"currentColor",d:"M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"}}]}},{name:"cross",shape:{element:"svg",attributes:{"aria-hidden":"true","data-prefix":"fas","data-icon":"cross",role:"img",xmls:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",class:"svg-inline--fa fa-link fa-w-16 fa-sm"},children:[{element:"path",attributes:{fill:"currentColor",d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"}}]}}].forEach((e=>{svg[e.name]=svgShape(e.shape.element,!1,e.shape.attributes,e.shape.children,e.shape.content)}));var ElementPrototype=Element.prototype,hasOwnProperty=Object.hasOwnProperty,setPrototypeOf=Object.setPrototypeOf,isFrozen=Object.isFrozen,getPrototypeOf=Object.getPrototypeOf,getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,cloneNode=lookupGetter(ElementPrototype,"cloneNode");function lookupGetter(e,t){for(;null!==e;){var a=getOwnPropertyDescriptor(e,t);if(a){if(a.get)return unapply(a.get);if("function"==typeof a.value)return unapply(a.value)}e=getPrototypeOf(e)}return function(e){return console.warn("fallback value for",e),null}}function hasOwn(e,t){return Object.hasOwn?Object.hasOwn(e,t):Object.prototype.hasOwnProperty.call(e,t)}function watchElem(e,t){return new Promise((a=>{new MutationObserver(((c,r)=>{let l=(t||document).querySelector(e);l&&(r.disconnect(),a(l))})).observe(t||document.body,{subtree:!0,childList:!0})}))}function unapply(e){return function(t){for(var a=arguments.length,c=new Array(a>1?a-1:0),r=1;r<a;r++)c[r-1]=arguments[r];return apply(e,t,c)}}//Delay
const delay = (delayInms) => {return new Promise(resolve => setTimeout(resolve, delayInms));}
//Time
function nativeTimeElement(e){let n=new Date(1e3*e),o=create2("time","activitytime");o.setAttribute("datetime",n),o.title=n.toLocaleString(void 0);let t=function(){let e=Math.round(new Date().valueOf()/1e3)-Math.round(n.valueOf()/1e3);0===e&&(o.innerText="Now"),1===e?o.innerText="1 second ago":e<60?o.innerText=e+" seconds ago":1===(e=Math.floor(e/60))?o.innerText="1 minute ago":e<60?o.innerText=e+" minutes ago":1===(e=Math.floor(e/60))?o.innerText="1 hour ago":e<24?o.innerText=e+" hours ago":1===(e=Math.floor(e/24))?o.innerText="1 day ago":e<7?o.innerText=e+" days ago":e<14?o.innerText="1 week ago":e<30?o.innerText=Math.floor(e/7)+" weeks ago":e<365?1===Math.floor(e/30)?o.innerText="1 month ago":o.innerText=Math.floor(e/30)+" months ago":1===(e=Math.floor(e/365))?o.innerText="1 year ago":o.innerText=e+"years ago",setTimeout(function(){document.body.contains(o)&&t()},2e4)};return t(),o}
function create(e,t,n){if(!e)throw new SyntaxError("'tag' not defined");
var r,i,f=document.createElement(e);if(t)for(r in t)if("style"===r)for(i in t.style)f.style[i]=t.style[i];else t[r]&&f.setAttribute(r,t[r]);return n&&(f.innerHTML=n),f}
function create2(t,e,a,s,n){let i=document.createElement(t);return Array.isArray(e)?(i.classList.add(...e),e.includes("newTab")&&i.setAttribute("target","_blank")):e&&("#"===e[0]?i.id=e.substring(1):(i.classList.add(e),"newTab"===e&&i.setAttribute("target","_blank"))),(a||0===a)&&(i.innerText=a),s&&s.appendChild&&s.appendChild(i),n&&(i.style.cssText=n),i}
function set(t,e,n){if(!t)throw new SyntaxError("'tag' not defined");
var r,i,f=t;if(e)for(r in e)if("style"===r)for(i in e.style)f.style[i]=e.style[i];else e[r]&&f.setAttribute(r,e[r]);return n&&(f.innerHTML=n),f}

//CSS
var styles = `
.activitydata span.markdown_spoiler {
    display:block;
    margin:10px
}

.activitydata span.markdown_spoiler_cont {
    margin-top:10px
}

.activitydata span.markdown_spoiler_show {
    cursor: pointer;
    padding: 5px;
    padding-top: 3px;
    font-weight: 700;
    padding-bottom: 3px;
    background: rgb(var(--color-foreground));
    font-size:12px;
    color: rgb(var(--color-blue));
    -webkit-border-radius: 5px;
            border-radius: 5px
}

.activitydata .button.liked {
  color: rgb(var(--color-red));
}

.activitydata .activitylinksdiv {
  color: rgb(var(--color-blue-dim));
  position: relative;
  left: -webkit-calc(100% - 105px);
  left: calc(100% - 105px);
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: -webkit-inline-flex;
  display: inline-flex;
  font-family: Overpass,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  font-weight: 800;
}

.activitydata .actions {
    color: rgb(var(--color-blue-dim));
    position: relative;
    left: -webkit-calc(100% - 85px);
    left: calc(100% - 85px);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 95px;
    font-family: Overpass,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    font-weight: 800;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
            justify-content: flex-end;
}

.activitydata .action {
  color: rgb(var(--color-blue-dim))!important;
  cursor: pointer;
  display: inline-block;
  padding-left: 5px;
  -webkit-transition: .2s;
  -o-transition: .2s;
  transition: .2s;
}

.activitydata .time {
  font: 800 1.1rem Overpass,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  color: rgb(var(--color-text-lighter));
  position: relative;
  right: 12px;
  top: 12px;
}

.activitydata .acttime {
  font: 800 1.1rem Overpass,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  color: rgb(var(--color-text-lighter));
  margin-top:3px
}

.activitydata .reply .actions {
  font-family: Overpass,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  font-weight: 700;
  top: 12px;
  position: absolute;
  width:125px;
  left: -webkit-calc(100% - 135px);
  left: calc(100% - 135px);
  -webkit-box-align: center;
      -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center
}

.activitydata .reply .action {
  padding-left: 5px;
  -webkit-transition: .2s;
  -o-transition: .2s;
  transition: .2s;
}

.activitydata .reply  .action.likes {
  padding-right: 10px;
}

.activitydata .reply .time {
  color: rgb(var(--color-text-lighter));
  display: contents!important;
}

.activitydata .reply {
  background: rgb(var(--color-foreground));
  -webkit-border-radius: 3px;
          border-radius: 3px;
  font-size: 1.3rem;
  margin-top: 15px;
  padding: 14px;
  padding-bottom: 4px;
  position: relative;
}
.activitydata .reply-markdown {
  padding: 0px 2px
}
.activitydata .reply-wrap .name {
    padding: 8px 2px
}

.activitydata .name {
  margin-left: 5px;
  position: absolute;
  font-weight: bold;
}

.activitydata .reply {
  margin-bottom: 10px;
  background: rgba(var(--color-foreground));
  -webkit-border-radius: 10px;
          border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
}

.activitydata {
  min-width: 100%;
  padding: 20px 25px 10px;
  margin-bottom: 15px;
  -webkit-border-radius: 10px;
          border-radius: 10px;
  background: rgb(var(--color-background))
}
.activityinner {
  text-align: -webkit-center;
  margin-bottom:10px
}

.activitydata img {
  max-width: 100%;
  margin-bottom:5px
}

.activitydata blockquote {
  background: rgb(var(--color-foreground));
  border-left: solid 7px rgb(var(--color-text));
  -webkit-border-radius: 3px;
          border-radius: 3px;
  display: inline-block;
  font-style: italic;
  margin-left: 10px;
  padding: 10px 14px;
}

.activitydata iframe,
.activitydata video {
    -webkit-border-radius: 3px;
            border-radius: 3px;
    height: 200px;
    max-width: 500px;
    width: 100%;
    margin-bottom: 5px;
    display: block;
}

.activitydataimg {
 background-size: cover;
    background-repeat: no-repeat;
    display: inline-block;
    width: 45px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin-bottom: 10px;
    height: 45px
}

.activitydatausername {
    font-weight: 700;
    left: 50px;
    top: 7px;
    position: relative;
    width: 150px;
    display: block;
}

.reply-wrap .activitydataimg {
    width: 30px;
    height: 30px
}
.reply-wrap .reply .header {
   height:40px
}
.activitydata .saveembed {
    background: rgb(var(--color-foreground));
    font-size: 12px;
    color: rgb(var(--color-text));
    -webkit-border-radius: 3px;
            border-radius: 3px;
    display: -ms-inline-grid;
    display: inline-grid;
    grid-auto-flow: column;
    -ms-grid-columns: 50px;
    grid-template-columns: 50px;
    justify-items: center;
}
.activitydata .reply-markdown .markdown{
overflow:hidden!important
}
.activitydata .reply-markdown .saveembed,
.activitydata blockquote span.markdown_spoiler_show,
.activitydata blockquote .saveembed{
   background: rgb(var(--color-background))
}
#removereply:hover,
#editreply:hover,
.activitydata .action:hover,
.activitydata .activitylink:hover{
  color: rgb(var(--color-blue))!important;
}

.activitydata .saveembed b {
    display: -ms-grid;
    display: grid;
    word-break: break-word;
    margin: 3px;
    padding: 10px;
    justify-items: center;
    line-height:18px
}

.activitydata .saveembed .cover {
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  height: 100%;
  width: 100%;
  -webkit-border-top-left-radius: 3px;
          border-top-left-radius: 3px;
  -webkit-border-bottom-left-radius: 3px;
          border-bottom-left-radius: 3px;
}

.saveembedDetails {
  font-size: 1rem;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: -webkit-inline-flex;
  display: inline-flex;
  color: rgb(var(--color-text-light))!important;
  pointer-events: none;
}

.activitydata p {
  word-break: break-word;
}

.activitydata p:first-of-type {
  margin: 0;
}

.activitydata a,
.activitydata a.embedLink a.saveembed{
  color: rgb(var(--color-blue));
}
.activitydata a[href^="https://anilist.co/manga/"],
.activitydata a.embedLink[href^="https://anilist.co/manga/"] a.saveembed{
  color: rgb(var(--color-green));
}


.activitydatauserdiv {
  width: 100%;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: -webkit-inline-flex;
  display: inline-flex;
}

.activitylink {
  padding-left: 15px;
  height: 0;
  display: inline-block;
  position: relative;
  cursor: pointer;
  color: rgba(var(--color-text))!important;
}

.activitydata hr {
  border: solid 1px rgba(40,56,77,.5);
  -webkit-border-radius: 5px;
          border-radius: 5px;
  width: 100%;
}

.saveActivity {
  -webkit-box-align: center;
      -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
  display: -ms-grid;
  display: grid;
  grid-gap: 8px;
  -ms-grid-columns: 20px 8px 1fr;
  grid-template-columns: 20px 1fr;
  padding: 2px 12px;
  padding-right: 17px;
}

.mainbtn {
  list-style: none;
  cursor: pointer;
  color: rgb(var(--color-text));
}

.mainbtns {
  font: 900 1.3rem Overpass,-apple-system,BlinkMacSystemFont,"Segoe UI",Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
  -webkit-transition: .25s;
  -o-transition: .25s;
  transition: .25s;
  border: 0;
  -webkit-border-radius: 4px;
          border-radius: 4px;
  padding: 4px;
  margin: 4px;
  text-align:center;
  cursor: pointer;
  background: rgb(var(--color-background));
  color: rgb(var(--color-text));
}

.btn-active {
  background: #28384d;
  color: #9fadbd;
}

.mainbtns:active {
  background: rgba(40,56,77);
}

.mainbtns:hover {
  color: rgb(var(--color-blue));
}

.maindiv {
  width: 100%;
  -webkit-transition: 1s;
  -o-transition: 1s;
  transition: 1s;
  position: relative;
  background: rgb(var(--color-foreground));
  overflow-y: scroll;
  display: -ms-grid;
  display: grid;
  color: rgb(var(--color-text));
  padding: 10px;
  padding-bottom: 0;
  margin-right: 10px;
  margin-bottom: 20px;
  border: 1px solid #6969694d;
  -webkit-border-radius: 10px;
          border-radius: 10px;
}

.expanded {
  margin-top: 10px;
}

.expanded2 {
  max-height: 87vh!important;
}

.ResultDivInside {
  overflow-y: scroll;
  -webkit-border-radius: 10px;
          border-radius: 10px;
  padding: 10px;
  padding-top: 20px;
  padding-bottom: 0;
  margin-top: 10px;
  margin-bottom: 10px;
}

.activitydataDiv {
  display: -ms-grid;
  display: grid;
  max-height: 330px;
  overflow-y: scroll;
  padding-top: 10px;
  margin-top: 3px;
}

.ResultDivInside,
.activitydataDiv {
  -webkit-mask-image: -webkit-gradient(linear,left top, left bottom,color-stop(0, transparent),color-stop(black),color-stop(black),to(transparent));
  -webkit-mask-image: linear-gradient(to bottom,transparent 0,black var(--top-mask-size),black -webkit-calc(100% - var(--bottom-mask-size)),transparent 100%);
          mask-image: -webkit-gradient(linear,left top, left bottom,color-stop(0, transparent),color-stop(black),color-stop(black),to(transparent));
          mask-image: linear-gradient(to bottom,transparent 0,black var(--top-mask-size),black calc(100% - var(--bottom-mask-size)),transparent 100%);
  --bottom-mask-size: 10px;
  --top-mask-size: 10px;
}
#settingDiv {
  top:5px;
  padding-bottom: 5px;
  padding-top: 5px;
  margin-bottom:5px
}
button#removereply,
button#expandbtn,
button#settingsbtn,
button#closedivbtn{
  position: absolute;
  right: 0;
  top:4px;
  background:transparent
}
button#settingsbtn {
  right:20px
}
button#expandbtn {
  right:40px
}
#importBtn{
-moz-text-align-last:center;
     text-align-last:center
}
.reply-wrap .replybutton {
align-items: center;
    background: rgb(var(--color-blue));
    border-radius: 4px;
    color: rgb(var(--color-text-bright));
    cursor: pointer;
    display: inline-flex;
    font-family: Overpass,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    font-size: 1.3rem;
    font-weight: 900;
    margin-left: 18px;
    padding: 10px 15px;
    transition: .2s;
}
.reply-wrap .replybutton .cancel{
background: rgb(var(--color-foreground));
    color: rgb(var(--color-text-lighter));
}
.reply-wrap textarea{width: 96%;border-width: 1px;font-size: 1.3rem;padding: 8px 15px;resize: none;min-height: 36px;border-radius: 5px;}
#removereply,#editreply{visibility:hidden;transition:0.5s}
.reply-wrap .header:hover #removereply,
.reply-wrap .header:hover #editreply{
    visibility: visible!important;
}
`
//Add CSS
var styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

//localStorage requirement
try {
   localStorage.setItem("test", "test");
   localStorage.removeItem("test");
} catch (e) {
   alert("LocalStorage, required for saving settings, is not available.");
   return
}

//get username
let auth;
let user = '';
let userid = 0;
try {
   auth = JSON.parse(localStorage.getItem("auth"))
} catch (e) {
   console.warn("could not get auth");
   return
}
if (auth) user = auth.name, userid = auth.id;
else try {
   user = document.querySelector(".nav .links .link[href^='/user/']").href.match(/\/user\/(.*)\//)[1]
}
catch (e) {
   alert("Please login before to use -Activity Saver- script.")
}
let username = String(user);
let usernameurl = String('https://anilist.co/user/' + user + '/');
var mainarray = [];
let onMainDiv = false;
let notLiked = false;
var val = 0;
var autosave = false;
var active = false;
var expanded = false;
var settings = false;
var filterall = false;
var oldHref = document.location.href;
interval = null;
var accessToken = "";
check();
if(localStorage.getItem("savetkn")) {
  accessToken = JSON.parse(LZString.decompressFromBase64(localStorage.getItem("savetkn")))
}
var button = create("li", {
   class: "el-dropdown-menu__item mainbtn",
   id: "Saved Activities"
}, "Saved Activities");
button.onclick = () => {
   getSavedDiv()
};
start();

function start() {
   addSavetoActivities();
   if (!/^\/(home)\/?([\w-]+)?\/?$/.test(location.pathname)) {
      return
   }
   let filters = document.querySelector(".el-dropdown-menu:not(.details *):not(.time *):not(.actions *)");
   if (!filters) {
      setTimeout(start, 100);
      return
   } {
      filters.appendChild(button);
   }
   let autosaved = JSON.parse(localStorage.getItem("actautosave"));
   if (autosaved && accessToken.length > 5) {
      autosave = true;
   } else {
      autosave = false
   }
}

function removeactivity(id) {
   if (mainarray.length == 1) {
      mainarray = [];
   }
   let activitiesidarray = window.localStorage.getItem('savedactivites');
   let x = activitiesidarray.split(/[.,!,?]/);
   for (var i in x) {
      if (x[i] == id) {
         x.splice(i, 1);
         break;
      }
   }
   mainarray = x;
   localStorage.setItem("savedactivites", [(x)]);
   if (autosave) {
      autosaveact();
      delay(1000).then(() => buildactivity())
   } else {
      buildactivity();
   }
}

function buildactivity() {
   let activitydataDiv = document.getElementById("activitydataDiv");
   let activitiesidarray = window.localStorage.getItem('savedactivites');
   var x = "";
   if (activitydataDiv) {
      activitydataDiv.innerHTML = "";
   }
   if (autosave) {
      const query = `query($userName: String) {User(name: $userName){about}}`;
      var variables = {
         userName: username
      };
      var url = "https://graphql.anilist.co",
         options = {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Accept: "application/json"
            },
            body: JSON.stringify({
               query: query,
               variables: variables
            })
         };

      function handleResponse(e) {
         return e.json().then((function(n) {
            return e.ok ? n : Promise.reject(n)
         }))
      }
      fetch(url, options).then(handleResponse).then(handleData);

      function handleData(data) {
         let actiddata = "";
         actiddata = data.data.User.about;
         let jsonMatch = (actiddata).match(/\[\]\(actjson([A-Za-z0-9+\/=]+)\)/);
         if (jsonMatch) {
            let data2 = JSON.parse(LZString.decompressFromBase64(jsonMatch[1]));
            var values = Object.keys(data2).map(function(key) {
               return data2[key];
            });
            x = JSON.stringify(values).replace(/\\*"|\[|\]/g, "").split(/[.,!,?]/);
            buildacts();
               window.localStorage.setItem('savedactivites', x);
         } else {
            autosaveact();
            return buildactivity();
         }
      }
   } else {
      if (activitiesidarray !== null) {
         x = activitiesidarray.split(/[.,!,?]/);
         buildacts();
      }
   }

   function buildacts() {
      for (var i = 0; i < x.length; i++) {
         if (x.length > 0) {
            getlist(x[i])
         }
      }
   }
}

function autosaveact() {
   if (autosave && accessToken.length > 5) {
      let activitiesidarray = JSON.stringify(window.localStorage.getItem('savedactivites'));
      let profileJson = {
         activitiesidarray
      };
      let auth = "";
      const query = `
	query($userName: String) {User(name: $userName){about}}`;
      var variables = {
         userName: username
      };
      var url = "https://graphql.anilist.co",
         options = {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Accept: "application/json"
            },
            body: JSON.stringify({
               query: query,
               variables: variables
            })
         };

      function handleResponse(e) {
         return e.json().then((function(n) {
            return e.ok ? n : Promise.reject(n)
         }))
      }
      fetch(url, options).then(handleResponse).then(handleData);

      function handleData(data) {
         auth = data.data.User.about;
         let jsonMatch = (auth || "").match(/\[\]\(actjson([A-Za-z0-9+\/=]+)\)/g);
         let customcssmatch = (auth || "").match(/\[\]\(json([A-Za-z0-9+\/=]+)\)/);
         let customcssmatched;
         if (customcssmatch) {
            customcssmatched = customcssmatch[0]
         } else {
            customcssmatched = ""
         }
         let newDescription = "";
         if (jsonMatch) {
            newDescription = customcssmatched + "[](actjson" + LZString.compressToBase64(JSON.stringify(profileJson)) + ")" + ((auth || "").replace(/\[\]\(actjson([A-Za-z0-9+\/=]+)\)/, "").replace(/\[\]\(json([A-Za-z0-9+\/=]+)\)/, ""));
         } else {
            newDescription = customcssmatched + "[](actjson" + LZString.compressToBase64(JSON.stringify(profileJson)) + ")" + ((auth || "")).replace(/\[\]\(json([A-Za-z0-9+\/=]+)\)/, "");
         }
         authAPIcall(`mutation($about: String){UpdateUser(about: $about){about}}`, {
            about: newDescription
         }, function(data) {
            if (!data) {
               return
            }
         })
      }
   }
}

function creatediv() {
   button.setAttribute("class", "el-dropdown-menu__item active");
   var listDiv2 = create("div", {
      class: "maindiv",
      id: "listDiv2"
   }, "<b>" + button.innerText + "</b>");
   let expandbtn = create("button", {
      class: "mainbtns",
      id: "expandbtn"
   });
   let settingsbtn = create("button", {
      class: "mainbtns",
      id: "settingsbtn"
   });
   let closebtn = create("button", {
      class: "mainbtns",
      id: "closedivbtn"
   });
   expandbtn.insertBefore(svg.expand.cloneNode(true), expandbtn.children[0]);
   settingsbtn.insertBefore(svg.gear.cloneNode(true), settingsbtn.children[0]);
   closebtn.insertBefore(svg.xmark.cloneNode(true), closebtn.children[0]);
   expandbtn.onclick = () => {
      expandDiv()
   };
   settingsbtn.onclick = () => {
      settingsDiv()
   };
   closebtn.onclick = () => {
      closeDiv()
   };
   var list = document.querySelector(".activity-feed-wrap + div");
   listDiv2.append(expandbtn, settingsbtn, closebtn);
   list.insertBefore(listDiv2, list.children[0]);
   var activitydataDiv = create("div", {
      class: "activitydataDiv",
      id: "activitydataDiv"
   });
   listDiv2.appendChild(activitydataDiv);
   if (!accessToken) {
      let loginLink = create("a", {
         class: "mainbtns",
         id: "signIn",
         href: "https://anilist.co/api/v2/oauth/authorize?client_id=12455&response_type=token"
      }, "<b>Sign In</b>");
      listDiv2.insertBefore(loginLink, listDiv2.children[1]);
   }
}

function saveAs(data, fileName, pureText) {
   let link = create2("a");
   document.body.appendChild(link);
   let json = pureText ? data : JSON.stringify(data);
   let blob = new Blob([json], {
      type: "octet/stream"
   });
   let url = window.URL.createObjectURL(blob);
   link.href = url;
   link.download = fileName;
   link.click();
   window.URL.revokeObjectURL(url);
   document.body.removeChild(link)
}

function settingsDiv() {
   settings = !settings;
   if (settings) {
      let settingDiv = create("div", {
         class: "maindiv",
         id: "settingDiv"
      }, "<b>Settings</b>");
      let importBtn = create("input", {
         class: "mainbtns",
         id: "importBtn",
         type: "button",
         value: "Import Saved Activites"
      });
      let exportBtn = create("a", {
         class: "mainbtns",
         id: "exportBtn"
      }, "<b>Export Saved Activites</b>");
      exportBtn.onclick = function() {
         let activitiesidarray = window.localStorage.getItem('savedactivites');
         let export_activities = "[](actjson" + LZString.compressToBase64(JSON.stringify(activitiesidarray)) + ")";
         if (username && activitiesidarray !== null && activitiesidarray !== '') {
            saveAs(export_activities, "ActivitySaver" + "_activities_" + username + ".json")
         } else {
            exportBtn.innerText = "Error: The list is empty.";
            delay(3000).then(() => exportBtn.innerText = "Export Saved Activites")
         }
      }
      importBtn.onclick = function() {
         importBtn.setAttribute("type", "file");
         importBtn.setAttribute("name", "json");
         importBtn.setAttribute("accept", "application/json");
         importBtn.oninput = function() {
            let reader = new FileReader();
            reader.readAsText(importBtn.files[0], "UTF-8");
            reader.onload = function(evt) {
               let data = "";
               try {
                  data = JSON.parse(evt.target.result);
                  let datamatch = data.match(/\[\]\(actjson([A-Za-z0-9+\/=]+)\)/);
                  if (datamatch && data !== "[](actjsonETI=)") {
                     let data2 = data.replace(/\[\]\(actjson([A-Za-z0-9+\/=]+)\)/, "$1");
                     let data3 = JSON.parse(LZString.decompressFromBase64(data2));
                     let data4 = JSON.stringify(data3).replace(/\\*"|\[|\]/g, "").split(/[.,!,?]/);
                     window.localStorage.setItem('savedactivites', data4);
                  } else {
                     importBtn.setAttribute("type", "button");
                     importBtn.removeAttribute("accept");
                     importBtn.removeAttribute("name");
                     importBtn.value = "Error: not valid backup file.";
                     delay(3000).then(() => importBtn.value = "Import Saved Activites")
                     return
                  }
                  if (autosave) {
                     autosaveact();
                     if (activitydataDiv) {
                        delay(1000).then(() => buildactivity())
                     }
                  }
                  importBtn.setAttribute("type", "button");
                  importBtn.removeAttribute("accept");
                  importBtn.removeAttribute("name");
                  buildactivity();
                  importBtn.value = "Activites Imported!";
                  delay(3000).then(() => importBtn.value = "Import Saved Activites")
               } catch (e) {
                  importBtn.setAttribute("type", "button");
                  importBtn.removeAttribute("accept");
                  importBtn.removeAttribute("name");
                  importBtn.value = "Error: not valid backup file.";
                  delay(3000).then(() => importBtn.value = "Import Saved Activites")
                  return
               }
            }
         }
      }

      let SavetoBtn = create("a", {
         class: "mainbtns",
         id: "SavetoBtn"
      }, "<b>Auto Backup Activities to Profile</b>");
      SavetoBtn.classList.toggle("btn-active", JSON.parse(localStorage.getItem("actautosave")));
      if (accessToken.length < 5) {
         localStorage.setItem("actautosave", autosave);
         SavetoBtn.classList.toggle("btn-active", JSON.parse(localStorage.getItem("actautosave")));
      }
      SavetoBtn.onclick = function() {
         if (accessToken.length > 5) {
            autosaveact();
            autosave = !autosave;
            localStorage.setItem("actautosave", autosave);
            SavetoBtn.classList.toggle("btn-active", JSON.parse(localStorage.getItem("actautosave")));
         } else {
            SavetoBtn.innerText = "Error: Token not found. Please Sign in.";
            delay(3000).then(() => SavetoBtn.innerText = "Auto Backup Activities to Profile")
         }
      }
      listDiv2.insertBefore(settingDiv, listDiv2.children[1]);
      settingDiv.append(importBtn, exportBtn, SavetoBtn);
   } else {
      if (document.getElementById("settingDiv")) {
         document.getElementById("settingDiv").remove();
      }
   }
}

function expandDiv() {
   expanded = !expanded;
   if (expanded) {
      let x = document.querySelector(".container");
      x.insertBefore(listDiv2, x.children[0]);
      expandbtn.innerHTML = "";
      expandbtn.insertBefore(svg.compress.cloneNode(true), expandbtn.children[0]);
      listDiv2.setAttribute("class", "maindiv expanded");
      activitydataDiv.setAttribute("class", "activitydataDiv expanded2");
   } else {
      let x = document.querySelector(".activity-feed-wrap + div");
      x.insertBefore(listDiv2, x.children[0]);
      expandbtn.innerHTML = "";
      expandbtn.insertBefore(svg.expand.cloneNode(true), expandbtn.children[0]);
      listDiv2.className = listDiv2.className.replace(/(?:^|\s)expanded(?!\S)/g, '');
      activitydataDiv.className = activitydataDiv.className.replace(/(?:^|\s)expanded2(?!\S)/g, '');
   }
}

function getSavedDiv() {
   active = !active;
   let activefilter = document.querySelector("li.el-dropdown-menu__item.active");
   if (activefilter) {
      delay(1000).then(() => activefilter.className = activefilter.className.replace(/(?:^|\s)active(?!\S)/g, ''));
   }
   if (active) {
      creatediv();
      buildactivity();
   }
   if (!active) {
      closeDiv();
   }
}

function closeDiv() {
   var list = document.querySelectorAll("li:nth-child(1)");
   button.setAttribute("class", "el-dropdown-menu__item");
   listDiv2.remove();
   active = false;
}

function addSavetoActivities() {
   var ActivitySave = false;
   if (!/^\/(home|user|activity)\/?([\w-]+)?\/?$/.test(location.pathname)) {
      return
   }
   setTimeout(addSavetoActivities, 500);
   let activityCollection = document.querySelectorAll(".activity-extras-dropdown");
   activityCollection.forEach(function(activity) {
      if (!hasOwn(activity, "ActivitySave")) {
         activity.ActivitySave = true;
         let activitySave = create("a", {
            dataIcon: "link",
            class: "saveActivity el-dropdown-menu__item",
            id: "saveActivity"
         }, "<b>Save Activity</b>");
         activitySave.onclick = function() {
            let el = activitySave;
            let id = el.parentElement.children[0].href.split('/')[4];
            el.click();
            el.click();
            el.onclick = () => {
               el.lastElementChild.innerText = "Saved!";
               let activitiesidarray = window.localStorage.getItem('savedactivites');
               if (activitiesidarray !== null) {
                  let x = activitiesidarray.split(/[.,!,?]/);
                  for (var i in x) {
                     if (x[i] == id) {
                        x.splice(i, 1);
                        break;
                     }
                  }
                  mainarray = x;
               }
               var id = el.parentElement.children[0].href.split('/')[4];
               for (var i = 0; i <= mainarray.length; i++) {
                  if (id == mainarray[i]) {
                     el.lastElementChild.innerText = "Already Saved!";
                     return
                  }
               }
               mainarray.push(id);
               localStorage.setItem("savedactivites", [(mainarray)]);
               let activitydataDiv = document.getElementById("activitydataDiv");
               if (autosave) {
                  autosaveact();
                  if (activitydataDiv) {
                     delay(1000).then(() => buildactivity())
                  }
               } else {
                  if (activitydataDiv) {
                     buildactivity();
                  }
               }
            }
         }
         if (activity.closest(".activity-text") || activity.closest(".activity-message")) {
            activity.append(activitySave);
            activitySave.insertBefore(svg.pinned.cloneNode(true), activitySave.children[0]);
         }
      }
   })
}
let actfixtext = "";

function htmlfix(text) {
   let acttextfix = text
      .replace(/((?:(?:https?:)?(?:\/\/)?)(?:(?:www)?\.)?youtube\.(?:.+?)\/(?:(?:watch\?v=))[a-zA-Z0-9_-]{11}).*(&list.*(\n)|).*(\))/i, "$1$4")
      .replace(/youtube\(+((?!https:).*).*\)/igm, " youtube(https://www.youtube.com/watch?v=$1)")
      .replace(/(~~~)/g, " " + "$1" + " ")
      .replace(/(__)([A-Za-z0-9\ ,.-<>\]*[A-Za-z0-9\ ,.-].*?(\s*))(__)/g, '<strong>' + "$2" + '</strong>')
      .replace(/((?<!\[)\[)(.*?)(]).*?((?<!\()\()(.*?)(\))/gm, '<a href=' + "$5" + '>' + "$2" + '</a>')
      .replace(/``([\s\S]*?)/g, '<code></code>')
      .replace(/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/gm, '<hr>')
      .replace(/(img.*)[\s\S]\/*?(.*())/g, imgfix => {
         let imgfixed = imgfix.replace(/(\r\n|\n|\r)/g, "");
         return imgfixed
      })
      .replace(/youtube.(h).((.*?).*\))/gi, " ![](ht$2")
      .replace(/(?<!\(|"|=)\b(https:\/\/)(anilist\.co\/(anime|manga)\/)([0-9]+).([^\W]+.*?\/|[^\s]+)/gm, embedlink => {
         let embedlinked = embedlink.match(/(?<!\(|"|=)\b(https:\/\/)(anilist\.co\/(anime|manga)\/)([0-9]+).([^\W]+.*?\/|[^\s]+)/gm);
         return "<a class='embedLink' href=\"" + embedlinked + "\">" + "</a>" + "</br>"
      });

   function spoiler() {
      var actspoiled = false;
      let actspoiler = document.querySelectorAll(".activitydata span.markdown_spoiler");
      actspoiler.forEach(function(spoilers) {
         if (!hasOwn(spoilers, "actspoiled")) {
            spoilers.actspoiled = true;
            let contspoiler = create("span", {
               class: "markdown_spoiler_cont"
            });
            let showspoiler = create("span", {
               class: "markdown_spoiler_show"
            });
            showspoiler.innerHTML = "Spoiler, click to view";
            contspoiler.innerHTML = spoilers.innerHTML;
            contspoiler.style.display = "none";
            spoilers.innerHTML = "";
            spoilers.insertBefore(showspoiler, spoilers.children[0]);
            spoilers.append(contspoiler);
            showspoiler.onclick = function() {
               if (contspoiler.style.display === "none") {
                  showspoiler.innerHTML = "Hide";
                  contspoiler.style.display = "block"
               } else {
                  showspoiler.innerHTML = "Spoiler, click to view";
                  contspoiler.style.display = "none"
               }
            }
         }
      })
   };

   function embed() {
      var Activityembedded = false;
      let embeds = document.querySelectorAll(".embedLink");
      embeds.forEach(function(activity) {
         if (!hasOwn(activity, "Activityembedded")) {
            activity.Activityembedded = true;
            var id = activity.href.split('/')[4];
            if (id !== undefined) {
               getanime(id);

               function getanime(embedid) {
                  var query = `query ($id: Int, $page: Int) {Page (page: $page) {media (id: $id) {type format status startDate {year} endDate {year}	season seasonYear averageScore id siteUrl title { romaji } coverImage { large  }}}}`;
                  var variables = {
                     id: embedid,
                     page: 1
                  };
                  var url = "https://graphql.anilist.co",
                     options = {
                        method: "POST",
                        headers: {
                           "Content-Type": "application/json",
                           Accept: "application/json"
                        },
                        body: JSON.stringify({
                           query: query,
                           variables: variables
                        })
                     };

                  function handleResponse(e) {
                     return e.json().then((function(n) {
                        return e.ok ? n : Promise.reject(n)
                     }))
                  }
                  fetch(url, options).then(handleResponse).then(handleData).catch(handleError);

                  function handleData(data) {
                     let activitySave = create("a", {
                        class: "saveembed",
                     }, '<b>' + (data.data.Page.media[0].title.romaji) + '</b>');
                     let embedimg = create("a", {
                        class: "cover",
                        style: {
                           backgroundImage: "url(" + data.data.Page.media[0].coverImage.large + ")"
                        }
                     });
                     activity.append(activitySave);
                     activity.href = (data.data.Page.media[0].siteUrl);
                     activitySave.insertBefore(embedimg, activitySave.children[0]);
                     if (data.data.Page.media[0].averageScore !== null) {
                        var avg = " · " + data.data.Page.media[0].averageScore + "%";
                     } else {
                        avg = "";
                     }
                     if (data.data.Page.media[0].season !== null) {
                        var season = " · " + data.data.Page.media[0].season + " " + data.data.Page.media[0].seasonYear;
                     } else {
                        season = "";
                     }
                     let activitySaveDetails = create("a", {
                        class: "saveembedDetails"
                     });
                     if (data.data.Page.media[0].type === "MANGA") {
                        activitySaveDetails.innerHTML = ('<b>' + (data.data.Page.media[0].format) + " · " + (data.data.Page.media[0].status) + " · " + (data.data.Page.media[0].startDate.year) + avg);
                     } else if (data.data.Page.media[0].format === "MUSIC") {
                        activitySaveDetails.innerHTML = ('<b>' + (data.data.Page.media[0].format) + " · " + (data.data.Page.media[0].endDate.year) + avg + '</b>');
                     } else {
                        activitySaveDetails.innerHTML = ('<b>' + (data.data.Page.media[0].format) + season + " · " + (data.data.Page.media[0].status) + avg + '</b>');
                     }
                     embedimg.nextSibling.append(activitySaveDetails);
                     let fix = activitySaveDetails.text.replace(/(_)/g, " ");
                     activitySaveDetails.text = fix;
                  }

                  function handleError(error) {
                     console.error(error);
                  }
               }
            }

         }
      })
   }
   DOMPurify.sanitize(acttextfix);
   let fix = acttextfix.replace(/(<strong>.*<\/strong>)((\n|)img\d.*\))/gm, "$1" + '<br>' +  "$2"+ '<br>').replace(/((img.*\d.*\)).*(img\d))/g, "$2" + '<br>' +  "$3").replace(/(<br>*[\W]<br>){1,}/g, '').replace(/((https:.*)(<b>).*(<\/b>))/g, "$2").replace(/(<br>)/g, "$1 \n").replace(/((<\/a>)<br> \n (\W))/gm, '$2 $3').replace(/(?<!<\/br>)(\n).*(<a class='embedLink' href=".*">)/gm, '<br>'+"$2").replace(/<br>.*(\n).*(<a href=.*>)/gm, "$2");
   actfixtext = makeHtml(fix).replace(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/gm, '<blockquote>' + "$2" + '</blockquote>').replace(/(?<![a-z&])#/g, "").replace(/(<img.*)(<a)/g, "$1<br>$2").replace(/\&lt;/g, "<").replace(/\&gt;/g, ">").replace(/(.*<img\b[^>]*>).*(\s*<a\b[^>]*>[^<]*<\/a>)/g, "$1"+'<br>' + "$2");
   delay(10).then(() => spoiler());
   delay(10).then(() => embed());
}

function getlist(id) {
   if (id === "") {
      return
   }
   var query = `query($id: Int){Activity(id: $id){
    ... on TextActivity{id type siteUrl createdAt text user{name avatar{medium}}likes{name}replies{id createdAt text user{name avatar{medium}}likes{name}}}
		... on MessageActivity{id type siteUrl createdAt text: message user: messenger{name avatar{medium}}recipient{name}likes{name}replies{id createdAt text user{name avatar{medium}}likes{name}}}}}`;
   var variables = {
         id: id
      },
      url = "https://graphql.anilist.co",
      options = {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
         },
         body: JSON.stringify({
            query: query,
            variables: variables
         })
      };
   fetch(url, options).then(handleResponse).then(handleData).catch(handleError);
   let APIlimit = 90,
      APIcallsUsed = 0,
      APIcallsUsed_shortTerm = 0,
      pending = {},
      APIcounter = setInterval((function() {
         APIcallsUsed = 0
      }), 6e4),
      APIcounter2 = setInterval((function() {
         APIcallsUsed_shortTerm = 0
      }), 1e4);

   function handleResponse(e) {
      APIlimit = e.headers.get("x-ratelimit-limit"), APIcallsUsed = APIlimit - e.headers.get("x-ratelimit-remaining");
      try {
         return e.json().then((function(t) {
            return e.ok ? t : Promise.reject(t)
         }))
      } catch (t) {
         throw console.warn(t, e), t
      }
   }

   function handleData(data) {
      let activity = data.data.Activity;
      let id = activity.id;
      let acttext = activity.text;
      if (active) {
         let activityinner = create("div", {
            class: "activityinner"
         });
         let aimg = create("a", {
            class: "activitydataimg",
            id: "activitydataimg",
            href: "https://anilist.co/user/" + activity.user.name,
            style: {
               backgroundImage: "url(" + activity.user.avatar.medium + ")"
            }
         });
         let actusername = create("a", {
            class: "activitydatausername",
            id: "activitydatausername",
            href: "https://anilist.co/user/" + activity.user.name
         }, "" + activity.user.name);
         let activitydiv = create("div", {
            class: "activitydata",
            id: activity.id
         });
         let actlinks = create("a", {
            class: "activitylinksdiv"
         });
         let actlink = create("a", {
            class: "activitylink",
            id: activity.id,
            href: activity.siteUrl
         });
         let actremove = create("a", {
            class: "activitylink",
            id: activity.id
         });
         actremove.onclick = () => {
            removeactivity(id);
         };
         let userdiv = create("div", {
            class: "activitydatauserdiv",
            id: activity.id
         });
         if (acttext === undefined) {
            removeactivity(id);
            return
         }
         if (acttext !== undefined) {
            htmlfix(acttext);
            activityinner.innerHTML = actfixtext;
         }
         activitydataDiv.appendChild(activitydiv);
         activitydiv.appendChild(activityinner);
         activitydiv.appendChild(userdiv);
         aimg.appendChild(actusername);
         activitydiv.appendChild(actlinks);
         actlinks.append(actlink, actremove);
         actlink.insertBefore(svg.link.cloneNode(true), actlink.children[0]);
         actremove.insertBefore(svg.cross.cloneNode(true), actremove.children[0]);
         activitydiv.insertBefore(userdiv, activitydiv.children[0]);
         userdiv.append(aimg, actlinks)
         let timeWrapper = create2("div", "acttime", false, actusername);
         let time = nativeTimeElement(activity.createdAt);
         timeWrapper.appendChild(time);
         let actions = create2("div", "actions", false, activitydiv);
         let actionReplies = create2("a", ["action", "replies"], false, actions);
         let replyCount = create2("span", ["count"], activity.replies.length || "", actionReplies);
         replyCount.appendChild(document.createTextNode(" "));
         actionReplies.appendChild(svg.reply.cloneNode(true));
         actions.appendChild(document.createTextNode(" "));
         let actionLikes = create2("div", ["action", "likes"], false, actions);
         actionLikes.title = activity.likes.map(like => like.name).join("\n");
         let likeWrap = create2("div", ["like-wrap", "activity"], false, actionLikes);
         let likeButton = create2("div", "button", false, likeWrap);
         let likeCount = create2("span", "count", activity.likes.length || "", likeButton);
         likeButton.appendChild(document.createTextNode(" "));
         likeButton.appendChild(svg.likeNative.cloneNode(true));
         if (activity.likes.findIndex(thing => thing.name === username) !== -1) {
            likeButton.classList.add("liked")
         }
         if (accessToken) {
            likeButton.onclick = function() {
               let indexPlace = activity.likes.findIndex(thing => thing.name === username);
               if (indexPlace === -1) {
                  activity.likes.push({
                     name: username
                  });
                  likeButton.classList.add("liked")
               } else {
                  activity.likes.splice(indexPlace, 1);
                  likeButton.classList.remove("liked")
               }
               likeCount.innerText = activity.likes.length || "";
               authAPIcall("mutation($id:Int){ToggleLike(id:$id,type:ACTIVITY){id}}", {
                     id: activity.id
                  },
                  function(data) {
                     if (!data) {
                        authAPIcall("mutation($id:Int){ToggleLike(id:$id,type:ACTIVITY){id}}", {
                           id: activity.id
                        }, data => {})
                     }
                  });
            }
         };
         let replyWrap = create2("div", "reply-wrap", false, activitydiv, "display:none;");
         actionReplies.onclick = function() {
            if (replyWrap.style.display === "none") {
               replyWrap.style.display = "block"
            } else {
               replyWrap.style.display = "none"
            }
         };

         let activityReplies = create2("div", "activity-replies", false, replyWrap);
         activity.replies.forEach(rep => {
            let reply = create2("div", "reply", false, activityReplies);
            let header = create2("div", "header", false, reply);
            let replyAvatar = create2("a", "activitydataimg", false, header);
            replyAvatar.href = "/user/" + rep.user.name;
            replyAvatar.style.backgroundImage = `url("${rep.user.avatar.medium}")`;
            header.appendChild(document.createTextNode(" "));
            let repName = create2("a", "name", rep.user.name, header);
            repName.href = "/user/" + rep.user.name;
            let corner = create2("div", "actions", false, header);
            let replyActionLikes = create2("div", ["action", "likes"], false, corner, "display: inline-block");
            const randomDataHate = "data-v-977827fa";
            let replyLikeWrap = create2("div", "like-wrap", false, replyActionLikes);
            let replyLikeButton = create2("div", "button", false, replyLikeWrap);
            let replyLikeCount = create2("span", "count", rep.likes.length || "", replyLikeButton);
            replyLikeButton.appendChild(document.createTextNode(" "));
            replyLikeButton.appendChild(svg.likeNative.cloneNode(true));
            replyLikeButton.title = rep.likes.map(a => a.name).join("\n");
            if (rep.likes.some(like => like.name === username)) {
               replyLikeButton.classList.add("liked")
            }
            if (accessToken) {
               replyLikeButton.onclick = function() {
                  authAPIcall("mutation($id:Int){ToggleLike(id:$id,type:ACTIVITY_REPLY){id}}", {
                        id: rep.id
                     },
                     function(data2) {
                        if (!data2) {
                           authAPIcall("mutation($id:Int){ToggleLike(id:$id,type:ACTIVITY_REPLY){id}}", {
                              id: rep.id
                           }, function(data3) {})
                        }
                     });
                  if (rep.likes.some(like => like.name === username)) {
                     rep.likes.splice(rep.likes.findIndex(user => user.name === username), 1);
                     replyLikeButton.classList.remove("liked");
                     if (rep.likes.length > 0) {
                        replyLikeButton.querySelector(".count").innerText = rep.likes.length
                     } else {
                        replyLikeButton.querySelector(".count").innerText = ""
                     }
                  } else {
                     rep.likes.push({
                        name: username
                     });
                     replyLikeButton.classList.add("liked");
                     replyLikeButton.querySelector(".count").innerText = rep.likes.length;
                  }
               }
               if (rep.user.name === username) {
                  corner.style.cssText = 'width: 165px;left: calc(100% - 175px);top: 6px';
                  let replyEdit = create("div", {
                     class: "mainbtns",
                     id: "editreply",
                     style: {
                        background: "transparent",
                        color: "rgb(var(--color-blue-dim))"
                     }
                  });
                  replyEdit.insertBefore(svg.edit.cloneNode(true), replyEdit.children[0]);
                  corner.insertBefore(replyEdit, corner.children[0]);
                  let active = true;
                  replyEdit.onclick = function() {

                     if (active) {
                        let statusInput = create2("div","inputbox", false, "text-align: -webkit-center;");
                        let inputArea = create2("textarea", "el-textarea__inner", false, statusInput);
                        let inputButtons = create2("div", "inputButtons", false, statusInput, "margin-bottom:10px;float: right;padding: 20px 2% 15px 15px;");
                        let cancelButton = create2("div", ["replybutton", "cancel"], "Cancel", inputButtons, "background: rgb(var(--color-foreground));display:none;color: rgb(159, 173, 189);");
                        let publishButton = create2("div", "replybutton", "Publish", inputButtons, "display:none;");
                        inputArea.value = rep.text;
                        reply.parentNode.insertBefore(statusInput, reply.nextSibling);
                        inputArea.style.cssText = 'height:0px';
                       statusInput.style.cssText = 'display: flow-root';
                        inputArea.onfocus = function() {
                           cancelButton.style.display = "inline";
                           publishButton.style.display = "inline";
                        };
                        inputArea.addEventListener('keydown', autosize);

                        function autosize() {
                           var el = this;
                           setTimeout(function() {
                              el.style.cssText = 'height:auto';
                              el.style.cssText = 'height:' + el.scrollHeight + 'px';
                           }, 0);
                        }
                        cancelButton.onclick = function() {
                           inputArea.value = "";
                           inputArea.style.cssText = 'height:0px';
                           cancelButton.style.display = "none";
                           publishButton.style.display = "none";
                           active = true;
                           statusInput.remove();
                        };
                        publishButton.onclick = function() {
                           authAPIcall(
                              `mutation($text: String,$Id: Int){id text(asHtml: true)}}`, {
                                 text: inputArea.value,
                                 Id: rep.id
                              },
                              data => {
                                 if (data) {
                                    delay(1000).then(() => buildactivity());
                                 }
                              }
                           )
                        }
                        cancelButton.style.display = "none";
                        publishButton.style.display = "none";
                     }
                     active = false;
                  }
                  let replyRemove = create("div", {
                     class: "mainbtns",
                     id: "removereply",
                     style: {
                        background: "transparent",
                        transform: "translateX(2px)",
                        color: "rgb(var(--color-blue-dim))"
                     }
                  });
                  replyRemove.insertBefore(svg.xmark.cloneNode(true), replyRemove.children[0]);
                  corner.insertBefore(replyRemove, corner.children[0]);
                  replyRemove.onclick = function() {
                     authAPIcall(
                        `mutation($Id: Int){DeleteActivityReply(id: $Id) {deleted}}`, {
                           Id: rep.id
                        },
                        data => {
                           if (data) {
                              delay(1000).then(() => buildactivity());
                           }
                        }
                     )
                  }
               }
            }
            let replyActionTime = create2("div", ["action", "time"], false, corner, "display: inline-block");
            let replyTime = nativeTimeElement(rep.createdAt);
            replyActionTime.appendChild(replyTime);
            let replyMarkdown = create2("div", "reply-markdown", false, reply);
            let markdown = create2("div", "markdown", false, replyMarkdown);
            let repText = rep.text;
            if (repText !== undefined) {
               htmlfix(repText);
               markdown.innerHTML = actfixtext;
            }
         })
        if(accessToken){
         let statusInput = create2("div", false, false, replyWrap, "padding-top:10px; text-align: -webkit-center;");
         let inputArea = create2("textarea", "el-textarea__inner", false, statusInput);
         let inputButtons = create2("div", "inputButtons", false, statusInput, "float: right;padding: 20px 2% 15px 15px;");
         let cancelButton = create2("div", ["replybutton", "cancel"], "Cancel", inputButtons, "background: rgb(var(--color-foreground));display:none;color: rgb(159, 173, 189);");
         let publishButton = create2("div", "replybutton", "Publish", inputButtons, "display:none;");
         inputArea.placeholder = "Write a reply..";
         inputArea.style.cssText = 'height:0px';
         inputArea.onfocus = function() {
            cancelButton.style.display = "inline";
            publishButton.style.display = "inline";
         };
         inputArea.addEventListener('keydown', autosize);
         function autosize() {
            var el = this;
            setTimeout(function() {
              if(inputArea.scrollHeight > 54) {
               el.style.cssText = 'height:auto';
               el.style.cssText = 'height:' + el.scrollHeight + 'px';
              }
              if(inputArea.value.length < 20) {
                el.style.cssText = 'height:0';
              }
            }, 0);
         }
         cancelButton.onclick = function() {
            inputArea.value = "";
            inputArea.style.cssText = 'height:0px';
            cancelButton.style.display = "none";
            publishButton.style.display = "none";
         };
         publishButton.onclick = function() {
            authAPIcall(
               `mutation($text: String,$activityId: Int){
									SaveActivityReply(text: $text,activityId: $activityId){
										id
										user{name}
										likes{name}
										text(asHtml: true)
										createdAt
									}
								}`, {
                  text: inputArea.value,
                  activityId: activity.id
               },
               data => {
                  if (data) {
                     delay(1000).then(() => buildactivity());
                  }
               }
            )
         }
         inputArea.value = "";
         cancelButton.style.display = "none";
         publishButton.style.display = "none";
      }}
   }

   function handleError(e) {
      console.log(e);
      if (e.errors) {
         if (
            e.errors.some(thing => thing.message === "Not Found.")) {
            removeactivity(id)
         }
      }
   }
}

function check() {
   let current = "";
   let mainLoop = setInterval(() => {
      if (document.URL !== current) {
         let oldURL = current + "";
         current = document.URL;
         if (/^https:\/\/anilist\.co\/home#access_token/.test(current)) {
            let tokenList = location.hash.split("&").map(a => a.split("="));
            accessToken = tokenList[0][1];
            localStorage.setItem("savetkn", LZString.compressToBase64(JSON.stringify(accessToken)));
            location.replace(location.protocol + "//" + location.hostname + location.pathname);
         }
      }
   }, 200);
}

var target = document.querySelector('body');
var observer = new MutationObserver(function(mutationsList, observer) {
    for(var mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
         if (oldHref != document.location.href) {
            oldHref = document.location.href;
            active = false;
            start();
            set(button, {
               class: "el-dropdown-menu__item"
            });
         }
        }
    }
});
observer.observe(target, { childList: true, subtree: true });
