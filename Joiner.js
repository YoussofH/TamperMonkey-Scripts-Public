// ==UserScript==
// @name         Joiner
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://meet.google.com/*
// @icon         https://www.google.com/s2/favicons?domain=google.com
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @grant        none
// ==/UserScript==

/*globals $*/
$(document).keypress(function(e) {
    var code = e.keyCode || e.which;
    if(code == 13) {
        $('div[aria-label="Turn off microphone (⌘ + d)"]').click();
        $('span:contains("Join now")').click();
    }
    if(code == 104){//H keycode stands for home
        window.location.href = 'https://classroom.google.com/u/0/h';
    }
});
