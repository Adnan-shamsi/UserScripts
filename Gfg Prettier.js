// ==UserScript==
// @name         Pretty Geeks For Geeks
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Making Geeks for Geeks prettier
// @author       You
// @match        https://www.geeksforgeeks.org/*
// @grant        none
// ==/UserScript==

window.addEventListener('load', (event) => {
     'use strict';

    const toRemoveList = ['.adsbygoogle',
                          '.sideBar',
                          '.rightBar',
                          '.darkMode-wrap',
                          '.right-top',
                          '.textBasedMannualAds',
                          '._ap_apex_ad',
                         '.header-main__slider']

    function execute( fn ){
        try{fn()}catch(e){console.log(fn)}
    }

    function removeAll(...args){
      args.forEach(arg  => document.querySelectorAll(arg).forEach(e => execute(() => e.remove())))
    }

    execute(() => removeAll(...toRemoveList));

    execute(() => document.querySelector('.header-main__container').style.background = '#00ffff1f');
     
    execute(() => {
        const x = document.querySelector('#main')
        x.style.width = '95%';
        x.style.margin='auto';
    });

    execute(()=>{
         const x = document.querySelector('.article--container_content');
         x.style.width = '150vw'
     });


    execute(()=> {
         const flexify = document.querySelector('.article-page_flex');
         flexify.classList.remove("article-page_flex");
     });

    setTimeout(()=>{
        execute(()=>document.querySelector('.shell').remove());
     },1500);
})
