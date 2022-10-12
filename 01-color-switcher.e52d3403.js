const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.addEventListener("click",(()=>{timerId=setInterval((()=>{Math.floor(16777215*Math.random()).toString(16)}),1e3)})),e.addEventListener("click",(()=>{clearInterval(timerId)}));
//# sourceMappingURL=01-color-switcher.e52d3403.js.map
