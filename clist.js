// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Showing only contest of certain platforms that you are interested in
// @author       Adnan Shamsi
// @match        https://clist.by/
// @grant        none
// @run-at       document-start
// ==/UserScript==

window.addEventListener('load', (event) => {
     'use strict';

    const toRemoveList = ['.contest']

    const toShowList = ['hackerearth.com',
                        'codeforces.com',
                        'codechef.com',
                        'atcoder.jp',
                        'codingcompetitions.withgoogle.com',
                       'leetcode.com']                                         //add websites link that you are interested in

    function execute( fn ){
        try{fn()}catch(e){console.log(fn)}
    }

    function removeAll(...args){
      args.forEach(arg  => document.querySelectorAll(arg).forEach(e => execute(() => e.style.display='none')))
    }

    function showOnlyDataOfCertainPlatform(){
       toShowList.forEach(x =>{
       console.log(x);
       execute(()=>document.querySelectorAll(`a[data-original-title='${x}']`).forEach(e => e.closest('.contest').style.display = ''))
       });
    }

    removeAll(...toRemoveList);
    showOnlyDataOfCertainPlatform();
})
