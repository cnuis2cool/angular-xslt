!function(){function r(r){return"ActiveXObject"in r||angular.isDefined(XSLTProcessor)&&angular.isDefined(XMLSerializer)}function e(r){var e;return(e=r.getElementsByTagName("parsererror")[0])?e.textContent?e.textContent.split("\n",1)[0]:"unknown parser error":null}function t(t,n,o,s){if(!o||!s)return"No"+(o?"":" XML")+(o||s?"":" &")+(s?"":" XSLT");if(!r(t))return"XSL transformation is not supported by your browser";var a,i,u,l;if("ActiveXObject"in t){if(u=new ActiveXObject("Msxml2.DOMDocument"),u.loadXML(o),0!==u.parseError.errorCode)return("XML parse error ("+u.parseError.errorCode+"): "+u.parseError.reason).trim();if(l=new ActiveXObject("Msxml2.FreeThreadedDOMDocument"),l.loadXML(s),0!==l.parseError.errorCode)return("XSLT parse error ("+l.parseError.errorCode+"): "+l.parseError.reason).trim();var c=new ActiveXObject("Msxml2.XSLTemplate");try{c.stylesheet=l}catch(m){return"XSLT error: "+m.message}a=c.createProcessor(),a.input=u,a.transform(),i=a.output}else{var m;if(u=(new DOMParser).parseFromString(o,"text/xml"),m=e(u))return"XML parse error: "+m;if(l=(new DOMParser).parseFromString(s,"text/xml"),m=e(l))return"XSLT parse error: "+m;a=new XSLTProcessor,a.importStylesheet(l),i=(new XMLSerializer).serializeToString(a.transformToFragment(u,n))}return i||"(empty)"}angular.module("ngXslt",[]).filter("xslt",["$window","$document",function(r,e){return t.bind(this,r,e[0])}])}();