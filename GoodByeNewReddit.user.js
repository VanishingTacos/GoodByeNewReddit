// ==UserScript==
// @name        GoodByeNewReddit
// @version     1.2
// @description Auto Redirect to old.reddit.com from new.reddit.com
// @author      VanishingTacos
// @namespace   https://www.reddit.com/user/VanishingTacos/
// @include     https://new.reddit.com/*
// @run-at      document-start
// @grant       none
// ==/UserScript==

		window.location.replace("https://old.reddit.com" + window.location.pathname);