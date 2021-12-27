// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove ads
// @author       You
// @match        https://freecoursesite.com/*
// @grant        none
// ==/UserScript==

window.addEventListener('load', (event) => {
    const toRemoveList = ['.adsbygoogle']
    function execute( fn ){
        try{fn()}catch(e){console.log(fn)}
    }

    function removeAll(...args){
      args.forEach(arg  => document.querySelectorAll(arg).forEach(e => execute(() => e.remove())))
    }

    execute(() => removeAll(...toRemoveList))
});
