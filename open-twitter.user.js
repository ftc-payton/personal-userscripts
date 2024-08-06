// ==UserScript==
// @name         Replace HTTPS with Custom Protocol
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Replaces https:// with myapp:// to open an app
// @author       Your Name
// @match        https://x.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    let currentUrl = window.location.href;

    if (currentUrl.includes('/status/')) {
        let parts = currentUrl.split('/');
        let id = parts.pop();
        let newUrl = 'twitter://status/?id=' + id;
        window.location.href = newUrl;
    } else if (currentUrl.includes('x.com/explore')) {
        window.location.href = window.location.href.replace('https://x.com/', 'twitter://');
    } else if (currentUrl.includes('x.com/search?q')) {
        let newProtocol = currentUrl.replace('https://x.com', 'twitter://');
        window.location.href = newProtocol.replace('?q', '?query');
    } else if (currentUrl.includes('x.com/home')) {
        window.location.href = 'twitter://timeline';
    } else if (currentUrl.includes('x.com/notifications')) {
        window.location.href = 'twitter://mentions';
    } else if (currentUrl.includes('x.com/intent/post?text')) {
        let withText = currentUrl.replace('?text', '?message');
        window.location.href = withText.replace('https://x.com/intent/', 'twitter://');
    } else if (currentUrl.includes('x.com/intent/tweet?text')) {
        let withText = currentUrl.replace('?text', '?message');
        window.location.href = withText.replace('https://x.com/intent/tweet/', 'twitter://post');
    } else if (currentUrl.includes('x.com/compose/tweet?text')) {
        let withText = currentUrl.replace('?text', '?message');
        window.location.href = withText.replace('https://x.com/compose/tweet/', 'twitter://post');
    } else if (currentUrl.includes('x.com/compose/post?text')) {
        let withText = currentUrl.replace('?text', '?message');
        window.location.href = withText.replace('https://x.com/compose/', 'twitter://');
    } else if (currentUrl.includes('x.com/intent/post?url')) {
        let withText = currentUrl.replace('?url=', '?message=');
        let extText = withText.replace('&text=', '%20');
        window.location.href = extText.replace('https://x.com/intent/', 'twitter://');
    } else if (currentUrl.includes('x.com/intent/tweet?url')) {
        let withText = currentUrl.replace('?url=', '?message=');
        let extText = withText.replace('&text=', '%20');
        window.location.href = extText.replace('https://x.com/intent/tweet/', 'twitter://post');
    } else if (currentUrl.includes('x.com/compose/tweet?url')) {
        let withText = currentUrl.replace('?url=', '?message=');
        let extText = withText.replace('&text=', '%20');
        window.location.href = extText.replace('https://x.com/compose/tweet/', 'twitter://post');
    } else if (currentUrl.includes('x.com/compose/post?url')) {
        let withText = currentUrl.replace('?url=', '?message=');
        let extText = withText.replace('&text=', '%20');
        window.location.href = extText.replace('https://x.com/compose/', 'twitter://');
    } else if (currentUrl.split('/').length - 1 == 3) {
        window.location.href = window.location.href.replace('https://x.com/', 'twitter://user/?screen_name=');
    }
})();
