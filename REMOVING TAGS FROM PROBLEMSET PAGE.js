// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  REMOVING TAGS FROM PROBLEMSET PAGE
// @author       You
// @include      /https:\/\/codeforces\.com\/problemset\?.*|https:\/\/codeforces\.com\/problemset/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
      let ul = document.querySelectorAll(".second-level-menu-list")[1];
      let li = document.createElement('li');
      let anchorTag = document.createElement('a');
      //anchorTag.href = 'fdfads';
      anchorTag.innerText = 'Toggle Rating';
      li.appendChild(anchorTag);
      ul.appendChild(li);
      anchorTag.onclick = ()=> {
          let difficulty = document.querySelectorAll('.ProblemRating');
          if(difficulty[0].style.display == '' || confirm('sure u want to see Rating??\n\nDont be bias🤔')){
              difficulty.forEach((e)=> e.style.display =(e.style.display == ''?'none':''))
          }
      }
     
     console.log("/https:\/\/codeforces\.com\/problemset\?.*|https:\/\/codeforces\.com\/problemset/")
     const mySet = new Set();
     document.querySelectorAll('.notice').forEach(e=>mySet.add(e.parentElement));
     [...mySet].map(e=>e.innerHTML = '');
    // Your code here...
})();
