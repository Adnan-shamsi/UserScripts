// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Customizing Youtube
// @author       You
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

window.addEventListener('load', (event) => {
     'use strict';

      const timeOutFunc = () => {
         try{
             console.log('start');

             ///////////////// removing start button /////////////////////////////
             if(document.querySelector("#start"))
                 document.querySelector("#start").innerHTML = "";

             //////////////// remove voice search icon //////////////////////////
             if(document.getElementById("voice-search-button"))
                 document.getElementById("voice-search-button").remove();

             /////////// removing exta button like create , notification etc ///
             let myobj = document.getElementById("buttons");

             if(myobj && myobj.firstChild != myobj.lastChild){
                 myobj.removeChild(myobj.childNodes[2]);
                 myobj.removeChild(myobj.childNodes[1]);
                 myobj.removeChild(myobj.childNodes[0]);
             }


             ////// auto-play button removed ///////////////////////////////////
             try{
                 let autoPlay = document.querySelector('.ytp-right-controls');
                 if(autoPlay.children.length == 10){
                    autoPlay.removeChild(autoPlay.childNodes[0]);
                    console.log('autoPlay button removed');
                 }
             }catch(e){
                 console.log("no .ytp-right-controls found");
             }

             ////// home and trending page button removed ///////////////////////
             try{
             var link = document.querySelector("#sections").querySelectorAll(".yt-simple-endpoint");
             link[0].style.display = 'none'; //home page
             link[1].style.display = 'none'; //trending
             }catch(e){
                 console.log('home and trending button error');
             }

             if(document.querySelector('#secondary-inner') && document.querySelector('#secondary-inner').querySelector('#related'))
              document.querySelector('#secondary-inner').querySelector('#related').innerHTML = '<img src="https://previews.123rf.com/images/sean824/sean8241609/sean824160900030/65200945-don-t-waste-your-time.jpg" alt="study" style="margin-top:90px" width="450" height="500">';

         }catch(e){
             console.log(e);
         }
         console.log("end");
         //alert('stop');
     }

    setTimeout(timeOutFunc, 500);

    //################### search button click #####################
    document.addEventListener("click", function(){
        setTimeout(timeOutFunc, 700);
    });

    //################## when something is typed ##################
    document.addEventListener("keypress", function(e){
        setTimeout(timeOutFunc, 2000);
    });
});
