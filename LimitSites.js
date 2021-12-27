// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.linkedin.com/*
// @match        https://www.quora.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
     setTimeout(() => { window.location.replace("https://www.codeforces.com"); },  5 * 60 * 1000); //after 5 min redirect
    // Your code here...
})();
