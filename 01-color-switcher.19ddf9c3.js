!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");var r=null;function a(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}t.addEventListener("click",(function(){e.removeAttribute("disabled"),t.disabled="true",r=setInterval(a,1e3)})),e.addEventListener("click",(function(){t.removeAttribute("disabled"),e.disabled="true",clearInterval(r)})),e.disabled="true"}();
//# sourceMappingURL=01-color-switcher.19ddf9c3.js.map
