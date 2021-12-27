// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  View All Submissions
// @author       You
// @match        https://codeforces.com/problemset/problem/*/*
// @grant        none
// ==/UserScript==

window.addEventListener('load', (event) => {
     'use strict';
      console.log("https://codeforces.com/problemset/problem/*/*")

      let loc = window.location.href.split('/problem/');
      loc[1] = loc[1].split('/')

      loc[1].splice(loc[1].length - 1,0,'/problem/');
      loc.splice(1,0,'/status/')
      loc[2] = loc[2].join('');
      loc = loc.join('');
     
      let ul = document.querySelector(".second-level-menu-list");
      let li = document.createElement('li');
      let anchorTag = document.createElement('a');
      anchorTag.href = loc;
      anchorTag.innerText = 'Submissions';
      li.appendChild(anchorTag);
      ul.appendChild(li);
});
