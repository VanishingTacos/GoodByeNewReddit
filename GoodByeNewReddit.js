// ==UserScript==
// @name        GoodByeNewReddit
// @version     1.0
// @description Auto Redirect to old.reddit.com from new.reddit.com
// @license     MIT
// @author      VanishingTacos
// @namespace   https://www.reddit.com/user/VanishingTacos/
// @include     https://new.reddit.com/*
// @run-at      document-start
// @grant       none
// @updateURL   https://raw.githubusercontent.com/VanishingTacos/GoodByeNewReddit/master/GoodByeNewReddit.js
// @downloadURL https://raw.githubusercontent.com/VanishingTacos/GoodByeNewReddit/master/GoodByeNewReddit.js
// ==/UserScript==

		window.location.replace("https://old.reddit.com" + window.location.pathname);