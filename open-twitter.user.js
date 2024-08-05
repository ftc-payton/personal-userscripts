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
        window.location.href = window.location.href.replace('https://x.com', 'twitter://');
    } else if (currentUrl.includes('x.com/search?q')) {
        let newProtocol = currentUrl.replace('https://x.com', 'twitter://');
        window.location.href = newProtocol.replace('?q', '?query');
    }
})();
