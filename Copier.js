// ==UserScript==
// @name         Copier
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  try to take over the world!
// @author       You
// @match        https://stackoverflow.com/*
// @match        https://*.stackexchange.com/*
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==

/* globals $ */
window.jQuery310 = $.noConflict(true);
(function() {
    var classList = $("a:contains('Ask Question')").attr("class") +" copier"
    $("<button class='"+classList+"'>Copy</p>").insertBefore("pre");
})();
$(".copier").click(function() {
    var cod = $(this).next("pre").text();
    $(this).after("<textarea></textarea>");
    $(this).next("textarea").append(cod).focus().select();
    document.execCommand("copy");
    $(this).next("textarea").remove();
    if(cod == ""){
        alert("something went wrong!");
    }
});
