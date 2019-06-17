// ==UserScript==
// @name           GoodByeNewReddit
// @description    Auto Redirect to old.reddit.com from new.reddit.com
// @version        1.0
// @author         VanishingTacos
// @namespace      https://www.reddit.com/user/VanishingTacos/
// @homepageURL    https://www.reddit.com/user/VanishingTacos/
// @grant          none
// @run-at         document-start
// @include        https://new.reddit.com/*
// ==/UserScript==

		window.location.replace("https://old.reddit.com" + window.location.pathname);