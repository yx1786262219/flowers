(function(window){var svgSprite='<svg><symbol id="icon-shuidi" viewBox="0 0 1024 1024"><path d="M659 389.9c-62.5-67-121.6-130.2-121.6-249.2 0-14.2-11.5-25.8-25.8-25.8-14.2 0-25.8 11.5-25.8 25.8 0 119-58.6 182.3-120.6 249.3-60.2 65.1-122.6 132.4-122.6 249 0 72.1 28.1 139.9 79.1 190.9S440.5 909 512.6 909s140-28 191-79 79.1-118.8 79.1-190.9c0-116.8-62.9-184.1-123.7-249.2z m9.2 302.9c-4.1 9.9-13.7 15.9-23.8 15.9-3.3 0-6.6-0.6-9.9-2-13.2-5.5-19.4-20.5-13.9-33.7 4.4-10.6 6.6-21.8 6.6-33.2 0-14.1-2.7-26.8-8.4-38.9-6-12.9-0.5-28.2 12.4-34.3 12.9-6 28.2-0.5 34.3 12.4 8.9 19.1 13.3 38.9 13.3 60.7-0.1 18.4-3.6 36.2-10.6 53.1z" fill="#278DCA" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)