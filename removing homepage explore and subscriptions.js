// ==UserScript==
// @name         Youtube UserScript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  removing homepage, explore, subscriptions
// @author       adnan
// @match        https://www.youtube.com/
// @match        https://www.youtube.com/feed/explore
// @match        https://www.youtube.com/feed/subscriptions

// @grant        none
// ==/UserScript==

window.addEventListener('load', (event) => {
     'use strict';

    const toRemoveList = ["#contents","tp-yt-app-drawer","ytd-mini-guide-renderer","#chips-wrapper"]

    function execute( fn ){
        try{fn()}catch(e){console.log(fn)}
    }

    function removeAll(...args){
      console.log(args);
      args.forEach(arg  => document.querySelectorAll(arg).forEach(e => execute(() => e.remove())))
    }

    let imp = () => execute(() => removeAll(...toRemoveList));

    setTimeout(imp, 500);
    setTimeout(imp, 2000);
    setTimeout(imp, 3000)

   // alert("done");
    window.addEventListener('resize',imp);
});
