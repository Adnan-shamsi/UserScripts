// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Making stack OverFlow prettier
// @author       You
// @match        https://stackoverflow.com/*
// @grant        none
// ==/UserScript==

window.addEventListener('load', (event) => {
     'use strict';

    const toRemoveList = ['.left-sidebar',
                          '.show-votes',
                          '#sidebar'
                         ]

    function execute( fn ){
        try{fn()}catch(e){console.log(fn)}
    }

    function removeAll(...args){
      args.forEach(arg  => document.querySelectorAll(arg).forEach(e => execute(() => e.remove())))
    }

    execute(() => removeAll(...toRemoveList));

    execute(() => document.querySelector('#mainbar').style.width = '80vw');



})
