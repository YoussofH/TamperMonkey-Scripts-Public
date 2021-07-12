// ==UserScript==
// @name         Meeter
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  try to take over the world!
// @author       You
// @match        https://classroom.google.com/u/0/*
// @icon         https://www.google.com/s2/favicons?domain=google.com
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @grant        none
// ==/UserScript==

/*globals $*/

var links=[];
var rooms = new Array();

setTimeout(
    function()
    {
        links = $('a').map( function() {
            return $(this).attr('href');
        }).get();
        $.each(links, function (key, value) {
            if (value.indexOf("/u/0/c/") === 0) {//get all links in page that start with this link
                rooms.push(value);
            }
        });
        //alert(temp);
    }, 5000);

$(document).keypress(function(e) {
    var code = e.keyCode || e.which;
    if(code == 13) {//Enter keycode
        var meet = $('a:contains("meet")').attr("href");
        if(meet){//check if false 0 "" NaN null undefined
            window.location.href = meet;}
    }
    if(code == 99) {//C keycode//open classwork tab
        window.location.href = window.location.href+"/t/all";
    }
    if(code == 104){//H keycode stands for home
        window.location.href = 'https://classroom.google.com/u/0/h';
    }
    var numberOfCourses = $("[data-course-id]").length;
    // key 49 stands for 1
    // answer is 9
    var delta = 58 - code;//keycode parsing //key"1":49-->58-49=9//key":":58//key"9":57//so we surround 49-57 between 1-9
    delta = 10 - delta;//reverse representation // since delta for "1" is 58-49 = 9 --> 9 has be reversed to 1 be easily used
    if(delta>0 && delta<=9 && window.location.href == 'https://classroom.google.com/u/0/h'){
        //alert(star);
        //var size = Math.min(Math.max(parseInt(numberOfCourses), 1), 9);//if we got more than 9 rooms we slice last 20 for eg.//parsed:9//so we take first 9
        var extracted = rooms.slice(-numberOfCourses);//slice backwards
        //alert(extracted);
        var roomLink = extracted[delta-1];
        if(roomLink){//check if false 0 "" NaN null undefined
        window.location.href = "https://classroom.google.com"+roomLink;}
    }
});
