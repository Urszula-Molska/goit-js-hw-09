!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequire7bc7;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){n[e]=o},e.parcelRequire7bc7=t);var i=t("h6c0i"),l=document.querySelector(".form");document.querySelector("button");function r(e,o){return new Promise((function(n,t){setTimeout((function(){Math.random()>.3?(n({position:e,delay:o}),console.log("co to robi?"),console.log({position:e,delay:o})):t({position:e,delay:o})}),o)}))}l.addEventListener("submit",(function(e){e.preventDefault();for(var o=Number(l.elements.amount.value),n=Number(l.elements.step.value),t=Number(l.elements.delay.value),c=1;c<=o;c++)r(c,t).then((function(e){var o=e.position,n=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms")),console.log("then"),console.log({position:o,delay:n})})).catch((function(e){var o=e.position,n=e.delay;i.Notify.failure("❌Rejected promise ".concat(o," in ").concat(n,"ms"))})),t=n+t}))}();
//# sourceMappingURL=03-promises.3ae335e9.js.map
