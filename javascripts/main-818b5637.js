!function(){"use strict";var e=function(e,t){e.classList?e.classList.add(t):e.className+=" "+t},t=function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")},n=function(e,t){return e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)};"fragmention"in window.location||function(){function e(t,n){for(var i,o=t.childNodes,a=0;i=o[a];++a)if(1==i.nodeType&&-1!==(i.innerText||i.textContent||"").replace(/\s+/g," ").indexOf(n))return e(i,n);return t}function t(){location.fragmention=decodeURIComponent((location.href.match(/#(#|%23)(.+)/)||[0,0,""])[2].replace(/\+/g," ")),n&&(n.removeAttribute("fragmention"),n.runtimeStyle&&(n.runtimeStyle.windows=n.runtimeStyle.windows)),location.fragmention&&(n=e(document,location.fragmention),n!==document?(n.scrollIntoView(),n.setAttribute("fragmention",""),n.setAttribute("tabindex","-1"),n.focus(),n.runtimeStyle&&(n.runtimeStyle.windows=n.runtimeStyle.windows)):n=null)}location.fragmention=location.fragmention||"";var n;"addEventListener"in window?(window.addEventListener("hashchange",t),document.addEventListener("DOMContentLoaded",t)):(window.attachEvent("onhashchange",t),document.attachEvent("onreadystatechange",function(){"c"===document.readyState[0]&&t()}))}(),document.addEventListener("DOMContentLoaded",function(){var i=(document.createTextNode(" "),document.querySelectorAll(".content h2[id], .content h3[id], .content h4[id]")),o=i[0];if(o){e(o,"first");var a=i,r=1,c=1,s=document.createElement("figure");s.setAttribute("role","navigation"),s.setAttribute("aria-describedby","toc_desc"),s.innerHTML='<figcaption id="toc_desc">On this page <a href="#skipotp" class="visuallyhidden focusable">(skip)</a></figcaption><div class="figcontent"></div>',s.classList?s.classList.add("toc"):s.className+=" toc";var l,d,u,h,f=document.createElement("ul"),p=document.createElement("li"),m=!1,w=!1;Array.prototype.forEach.call(a,function(e){var t=p.cloneNode(!0);"h4"===e.localName&&w===!1&&(d=f.cloneNode(!1)),"h3"===e.localName&&m===!1&&(l=f.cloneNode(!1)),"h3"===e.localName&&w===!0&&(h.appendChild(d),w=!1),"h2"===e.localName&&m===!0&&(w===!0&&(h.appendChild(d),w=!1),u.appendChild(l),m=!1),n(e,"ex")&&(e.insertAdjacentHTML("afterbegin","<b>Example "+r+":</b> "),r++,n(e,"inap")||(c=1)),n(e,"ap")&&(e.insertAdjacentHTML("afterbegin","<b>Approach "+c+":</b> "),c++),n(e,"newex")&&(r=1),n(e,"newap")&&(c=1),t.innerHTML='<a class="'+e.getAttribute("class")+'" href="#'+e.getAttribute("id")+'">'+e.innerHTML+"</a>","h4"===e.localName?(d.appendChild(t),w=!0):"h3"===e.localName?(l.appendChild(t),m=!0,h=t):(f.appendChild(t),u=t)}),m===!0&&(u.appendChild(l),m=!1),s.querySelectorAll(".figcontent")[0].innerHTML=f.outerHTML;var b=document.querySelectorAll(".inner > :first-child")[0];b.insertAdjacentHTML("beforebegin",s.outerHTML+'<span id="skipotp" class="visuallyhidden"></span>')}var v=document.createElement("a");v.innerHTML='<svg class="icon" viewBox="0 0 1024 1024"><path d="M864 704c-45.16 0-85.92 18.738-115.012 48.83l-431.004-215.502c1.314-8.252 2.016-16.706 2.016-25.328s-0.702-17.076-2.016-25.326l431.004-215.502c29.092 30.090 69.852 48.828 115.012 48.828 88.366 0 160-71.634 160-160s-71.634-160-160-160-160 71.634-160 160c0 8.622 0.704 17.076 2.016 25.326l-431.004 215.504c-29.092-30.090-69.852-48.83-115.012-48.83-88.366 0-160 71.636-160 160 0 88.368 71.634 160 160 160 45.16 0 85.92-18.738 115.012-48.828l431.004 215.502c-1.312 8.25-2.016 16.704-2.016 25.326 0 88.368 71.634 160 160 160s160-71.632 160-160c0-88.364-71.634-160-160-160z"></path></svg> SHARE';var y=document.createElement("div");e(y,"permalink");var g=document.createElement("div");e(g,"sharebox");var E='<p><label>Link to this section:<input type="url" value="%s" readonly> Shortcut to copy the link: <kbd>ctrl</kbd>+<kbd>C</kbd> <em>or</em> <kbd>⌘</kbd><kbd>C</kbd></label></p><p><a href="mailto:?subject=Web%20Accessibility%20Tutorials&body=Hi!%0AYou%20might%20be%20interested%20in%20this%20section%20of%20W3C%20WAI%E2%80%99s%20Web%20Accessibility%20Tutorials%3A%0A%0A%s">E-mail a link to this section</a><button>Close</button></p>',L=window.location.origin+window.location.pathname,N=i;Array.prototype.forEach.call(N,function(i){var o=v.cloneNode(!0);o.setAttribute("href","#"+i.id),o.setAttribute("aria-label","Share Link to the section “"+i.textContent+"”");var a=E.replace("%s",L+"#"+i.id).replace("%s",L+"#"+i.id),r=g.cloneNode(!0);r.innerHTML=a;var c=y.cloneNode(!0);c.appendChild(o),c.appendChild(r),e(c,i.localName),o.addEventListener("click",function(i){var o=this.nextSibling;n(o,"open")?t(this.nextSibling,"open"):(e(this.nextSibling,"open"),this.nextSibling.querySelector("input").select()),i.preventDefault()}),i.parentNode.insertBefore(c,i)});var A=document.querySelectorAll(".sharebox button");if(Array.prototype.forEach.call(A,function(e){e.addEventListener("click",function(){for(var n=document.querySelectorAll(".sharebox.open"),i=n.length-1;i>=0;i--)t(n[i],"open");e.parentNode.parentNode.parentNode.querySelector("a").focus()})}),document.addEventListener("click",function(e){for(var i=!1,o=e.target;o!=document.body;o=o.parentNode)if(n(o,"permalink")){i=!0;break}if(!i)for(var a=document.querySelectorAll(".sharebox.open"),r=a.length-1;r>=0;r--)t(a[r],"open")}),"www.w3.org"!==window.location.hostname&&"w3.org"!==window.location.hostname){var k=document.createElement("div");k.className="not-w3c-notification",k.innerHTML="This is an incomplete, unapproved draft. We'll add a link to the new draft in June 2019.",document.getElementsByClassName("w3c-wai-header")[0].insertAdjacentHTML("beforebegin",k.outerHTML),document.getElementsByTagName("title")[0].innerHTML="[PREVIEW] "+document.getElementsByTagName("title")[0].innerHTML}})}(),/* fontfaceobserver Copyright (c) 2014 - Bram Stein https://github.com/bramstein/fontfaceobserver/ */
function(){"use strict";function e(e){this.a=s,this.b=void 0,this.d=[];var t=this;try{e(function(e){i(t,e)},function(e){o(t,e)})}catch(n){o(t,n)}}function t(t){return new e(function(e,n){n(t)})}function n(t){return new e(function(e){e(t)})}function i(e,t){if(e.a===s){if(t===e)throw new TypeError("Promise resolved with itself.");var n=!1;try{var r=t&&t.then;if(null!==t&&"object"==typeof t&&"function"==typeof r)return r.call(t,function(t){n||i(e,t),n=!0},function(t){n||o(e,t),n=!0}),void 0}catch(c){return n||o(e,c),void 0}e.a=0,e.b=t,a(e)}}function o(e,t){if(e.a===s){if(t===e)throw new TypeError("Promise rejected with itself.");e.a=1,e.b=t,a(e)}}function a(e){setTimeout(function(){if(e.a!==s)for(;e.d.length;){var t=e.d.shift(),n=t[0],i=t[1],o=t[2],t=t[3];try{0===e.a?"function"==typeof n?o(n.call(void 0,e.b)):o(e.b):1===e.a&&("function"==typeof i?o(i.call(void 0,e.b)):t(e.b))}catch(a){t(a)}}},0)}function r(t){return new e(function(e,n){function i(n){return function(i){a[n]=i,o+=1,o===t.length&&e(a)}}var o=0,a=[];0===t.length&&e(a);for(var r=0;r<t.length;r+=1)t[r].c(i(r),n)})}function c(t){return new e(function(e,n){for(var i=0;i<t.length;i+=1)t[i].c(e,n)})}var s=2;e.prototype.e=function(e){return this.c(void 0,e)},e.prototype.c=function(t,n){var i=this;return new e(function(e,o){i.d.push([t,n,e,o]),a(i)})},window.Promise||(window.Promise=e,window.Promise.resolve=n,window.Promise.reject=t,window.Promise.race=c,window.Promise.all=r,window.Promise.prototype.then=e.prototype.c,window.Promise.prototype["catch"]=e.prototype.e)}(),function(){"use strict";function e(e){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(e)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.f=document.createElement("span"),this.e=document.createElement("span"),this.d=-1,this.b.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;",this.c.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;",this.e.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;",this.f.style.cssText="display:inline-block;width:200%;height:200%;",this.b.appendChild(this.f),this.c.appendChild(this.e),this.a.appendChild(this.b),this.a.appendChild(this.c)}function t(e,t,n){e.a.style.cssText="min-width:20px;min-height:20px;display:inline-block;visibility:hidden;position:absolute;width:auto;margin:0;padding:0;top:0;white-space:nowrap;font-size:100px;font-family:"+t+";"+n}function n(e){var t=e.a.offsetWidth,n=t+100;return e.e.style.width=n+"px",e.c.scrollLeft=n,e.b.scrollLeft=e.b.scrollWidth+100,e.d!==t?(e.d=t,!0):!1}function i(e,t){e.b.addEventListener("scroll",function(){n(e)&&null!==e.a.parentNode&&t(e.d)},!1),e.c.addEventListener("scroll",function(){n(e)&&null!==e.a.parentNode&&t(e.d)},!1),n(e)}function o(e,t){this.family=e,this.style=t.style||"normal",this.variant=t.variant||"normal",this.weight=t.weight||"normal",this.stretch=t.stretch||"stretch",this.featureSettings=t.featureSettings||"normal"}var a=null;o.prototype.a=function(n){n=n||"BESbswy";var o="font-style:"+this.style+";font-variant:"+this.variant+";font-weight:"+this.weight+";font-stretch:"+this.stretch+";font-feature-settings:"+this.featureSettings+";-moz-font-feature-settings:"+this.featureSettings+";-webkit-font-feature-settings:"+this.featureSettings+";",r=document.createElement("div"),c=new e(n),s=new e(n),l=new e(n),d=-1,u=-1,h=-1,f=-1,p=-1,m=-1,w=this;return t(c,"sans-serif",o),t(s,"serif",o),t(l,"monospace",o),r.appendChild(c.a),r.appendChild(s.a),r.appendChild(l.a),document.body.appendChild(r),f=c.a.offsetWidth,p=s.a.offsetWidth,m=l.a.offsetWidth,new Promise(function(e,n){function b(){null!==r.parentNode&&document.body.removeChild(r)}function v(){if(-1!==d&&-1!==u&&-1!==h&&d===u&&u===h){if(null===a){var t=/AppleWeb[kK]it\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);a=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}a?d===f&&u===f&&h===f||d===p&&u===p&&h===p||d===m&&u===m&&h===m||(b(),e(w)):(b(),e(w))}}setTimeout(function(){b(),n(w)},3e3),i(c,function(e){d=e,v()}),t(c,w.family+",sans-serif",o),i(s,function(e){u=e,v()}),t(s,w.family+",serif",o),i(l,function(e){h=e,v()}),t(l,w.family+",monospace",o)})},window.FontFaceObserver=o,window.FontFaceObserver.prototype.check=o.prototype.a}(),function(e){if(!(e.document.documentElement.className.indexOf("vollkorn-loaded")>-1)){var t=new e.FontFaceObserver("Noto Sans",{weight:400}),n=new e.FontFaceObserver("Noto Sans",{weight:600}),i=new e.FontFaceObserver("Noto Sans",{weight:400,style:"italic"}),o=new e.FontFaceObserver("Noto Sans",{weight:600,style:"italic"});e.Promise.all([t.check(),n.check(),i.check(),o.check()]).then(function(){e.document.documentElement.className+=" fonts-loaded"})}}(this);