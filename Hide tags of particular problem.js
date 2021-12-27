// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide tags of particular problem
// @author       You
// @match        https://codeforces.com/problemset/problem/*/*
// @grant        none
// ==/UserScript==

window.addEventListener('load', (event) => {
     'use strict';
     console.log('https://codeforces.com/problemset/problem/*/*')
      let tagBox = document.querySelectorAll('.tag-box');
      let tagText = [];
      tagBox.forEach((e) => tagText.push(e.innerText));
      tagBox.forEach((e) => e.innerText = '');
      let parent = tagBox[0].parentElement.parentElement;
      let bt = document.createElement("button");
      bt.innerText = "Toggle Tags";
      let dv = document.createElement("div");
      dv.style = "text-align: center;"
      dv.appendChild(bt);
      parent.appendChild(dv)

      bt.addEventListener("click", ()=>fun());

      setTimeout(()=>{ if(tagBox[0].innerText != '') return bt.addEventListener("click", ()=>fun()); }, 1000);
      let fun = ()=>{
          if(tagBox[0].innerText == ''){
              if(confirm("Unable to Solve ❗\nSo do you really want to see the tags 😥"))
                  for(let i=0;i<tagText.length;i++)
                      tagBox[i].innerText = tagText[i];
          }else{
              tagBox.forEach((e) => e.innerText = '');
          }
      }
});
