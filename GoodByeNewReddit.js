// ==UserScript==
// @name        GoodByeNewReddit
// @version     1.1
// @description Auto Redirect to old.reddit.com from new.reddit.com
// @author      VanishingTacos
// @namespace   https://www.reddit.com/user/VanishingTacos/
// @include     https://new.reddit.com/*
// @run-at      document-start
// @grant       none
// @updateURL   https://raw.githubusercontent.com/VanishingTacos/GoodByeNewReddit/master/GoodByeNewReddit.user.js
// @downloadURL https://raw.githubusercontent.com/VanishingTacos/GoodByeNewReddit/master/GoodByeNewReddit.user.js
// ==/UserScript==

		window.location.replace("https://old.reddit.com" + window.location.pathname);