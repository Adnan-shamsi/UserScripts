// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  View All Submissions
// @author       You
// @match        https://codeforces.com/contest/*/problem/*
// @grant        none
// ==/UserScript==

window.addEventListener('load', (event) => {
     'use strict';
      console.log("https://codeforces.com/contest/*/problem/*")
      let loc = window.location.href.split('/problem/');
      loc.splice(1,0,'/status/')
      loc = loc.join('');
      //console.log(loc);
      let ul = document.querySelector(".second-level-menu-list");
      let li = document.createElement('li');
      let anchorTag = document.createElement('a');
      anchorTag.href = loc;
      anchorTag.innerText = 'Submissions';
      li.appendChild(anchorTag);
      ul.appendChild(li);
});
