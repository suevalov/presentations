!function e(t,n,i){function o(s,a){if(!n[s]){if(!t[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(r)return r(s,!0);throw new Error("Cannot find module '"+s+"'")}var u=n[s]={exports:{}};t[s][0].call(u.exports,function(e){var n=t[s][1][e];return o(n?n:e)},u,u.exports,e,t,n,i)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<i.length;s++)o(i[s]);return o}({1:[function(e,t){t.exports=function(){return function(e){function t(t){var n=t.getAttribute("data-bespoke-backdrop");if(n){var i=document.createElement("div");return i.className=n,i.classList.add("bespoke-backdrop"),e.parent.appendChild(i),i}}function n(t){if(t){var n=r.indexOf(t),s=e.slide();i(t,"active"),i(t,"inactive"),i(t,"before"),i(t,"after"),n!==s?(o(t,"inactive"),o(t,s>n?"before":"after")):o(t,"active")}}function i(e,t){e.classList.remove("bespoke-backdrop-"+t)}function o(e,t){e.classList.add("bespoke-backdrop-"+t)}var r;r=e.slides.map(t),e.on("activate",function(){r.forEach(n)})}}},{}],2:[function(e,t){t.exports=function(e){return function(t){var n,i,o=t.slides.map(function(t){return[].slice.call(t.querySelectorAll("string"==typeof e?e:"[data-bespoke-bullet]"),0)}),r=function(){var e=n+1;return c(1)?(a(n,i+1),!1):(o[e]&&a(e,0),void 0)},s=function(){var e=n-1;return c(-1)?(a(n,i-1),!1):(o[e]&&a(e,o[e].length-1),void 0)},a=function(e,t){n=e,i=t,o.forEach(function(n,i){n.forEach(function(n,o){n.classList.add("bespoke-bullet"),e>i||i===e&&t>=o?(n.classList.add("bespoke-bullet-active"),n.classList.remove("bespoke-bullet-inactive")):(n.classList.add("bespoke-bullet-inactive"),n.classList.remove("bespoke-bullet-active")),i===e&&o===t?n.classList.add("bespoke-bullet-current"):n.classList.remove("bespoke-bullet-current")})})},c=function(e){return void 0!==o[n][i+e]};t.on("next",r),t.on("prev",s),t.on("slide",function(e){a(e.index,0)}),a(0,0)}}},{}],3:[function(e,t){t.exports=function(){return function(e){var t=function(e,t){e.classList.add("bespoke-"+t)},n=function(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()},i=function(i,o){var r=e.slides[e.slide()],s=o-e.slide(),a=s>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(n.bind(null,i)),i!==r&&["inactive",a,a+"-"+Math.abs(s)].map(t.bind(null,i))};t(e.parent,"parent"),e.slides.map(function(e){t(e,"slide")}),e.on("activate",function(o){e.slides.map(i),t(o.slide,"active"),n(o.slide,"inactive")})}}},{}],4:[function(e,t){t.exports=function(){return function(e){e.slides.forEach(function(e){e.addEventListener("keydown",function(e){(/INPUT|TEXTAREA|SELECT/.test(e.target.nodeName)||"true"===e.target.contentEditable)&&e.stopPropagation()})})}}},{}],5:[function(e,t){t.exports=function(){return function(e){var t=function(){var t=window.location.hash.slice(1),i=parseInt(t,10);t&&(i?n(i-1):e.slides.forEach(function(e,i){e.getAttribute("data-bespoke-hash")===t&&n(i)}))},n=function(t){var n=t>-1&&t<e.slides.length?t:0;n!==e.slide()&&e.slide(n)};setTimeout(function(){t(),e.on("activate",function(e){var t=e.slide.getAttribute("data-bespoke-hash");window.location.hash=t||e.index+1}),window.addEventListener("hashchange",t)},0)}}},{}],6:[function(e,t){t.exports=function(e){return function(t){var n="vertical"!==e;document.addEventListener("keydown",function(e){(34==e.which||32==e.which||n&&39==e.which||!n&&40==e.which)&&t.next(),(33==e.which||n&&37==e.which||!n&&38==e.which)&&t.prev()})}}},{}],7:[function(e,t){t.exports=function(e){return function(t){var n=document.createElement("div"),i=document.createElement("div"),o="vertical"===e?"height":"width";n.className="bespoke-progress-parent",i.className="bespoke-progress-bar",n.appendChild(i),t.parent.appendChild(n),t.on("activate",function(e){i.style[o]=100*e.index/(t.slides.length-1)+"%"})}}},{}],8:[function(e,t){t.exports=function(e){return function(t){var n,i,o="vertical"==e?"Y":"X";t.parent.addEventListener("touchstart",function(e){1==e.touches.length&&(n=e.touches[0]["page"+o],i=0)}),t.parent.addEventListener("touchmove",function(e){1==e.touches.length&&(e.preventDefault(),i=e.touches[0]["page"+o]-n)}),t.parent.addEventListener("touchend",function(){Math.abs(i)>50&&t[i>0?"prev":"next"]()})}}},{}],9:[function(e,t){var n=function(e,t){var n=1===e.nodeType?e:document.querySelector(e),i=[].filter.call(n.children,function(e){return"SCRIPT"!==e.nodeName}),o=i[0],r={},s=function(e,t){i[e]&&(f("deactivate",l(o,t)),o=i[e],f("activate",l(o,t)))},a=function(e,t){return arguments.length?(f("slide",l(i[e],t))&&s(e,t),void 0):i.indexOf(o)},c=function(e,t){var n=i.indexOf(o)+e;f(e>0?"next":"prev",l(o,t))&&s(n,t)},u=function(e,t){return(r[e]||(r[e]=[])).push(t),function(){r[e]=r[e].filter(function(e){return e!==t})}},f=function(e,t){return(r[e]||[]).reduce(function(e,n){return e&&n(t)!==!1},!0)},l=function(e,t){return t=t||{},t.index=i.indexOf(e),t.slide=e,t},d={on:u,fire:f,slide:a,next:c.bind(null,1),prev:c.bind(null,-1),parent:n,slides:i};return(t||[]).forEach(function(e){e(d)}),s(0),d};t.exports={from:n}},{}],10:[function(e){var t=e("bespoke"),n=e("bespoke-keys"),i=e("bespoke-touch"),o=e("bespoke-bullets"),r=e("bespoke-backdrop"),s=e("bespoke-hash"),a=e("bespoke-progress"),c=e("bespoke-forms"),u=e("bespoke-classes");t.from("article",[u(),n(),i(),o(".bullet"),r(),s(),a(),c()])},{bespoke:9,"bespoke-backdrop":1,"bespoke-bullets":2,"bespoke-classes":3,"bespoke-forms":4,"bespoke-hash":5,"bespoke-keys":6,"bespoke-progress":7,"bespoke-touch":8}]},{},[10]);