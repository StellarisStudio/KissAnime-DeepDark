// ==UserScript==
// @name          KissAnime DeepDark
// @namespace     https://github.com/
// @author        RaitaroH
// @homepage      https://github.com/RaitaroH/KissAnime-DeepDark
// @icon          https://raw.githubusercontent.com/RaitaroH/KissAnime-DeepDark/master/KADD-icon.png
// @include       http://kissanime.ru/*
// @include       https://kissanime.ru/*
// @include       http://*.kissanime.ru/*
// @include       https://*.kissanime.ru/*
// @run-at        document-start
// @version       1.3.9
// Changelog  1.3.9 transparency for the video controls, also aspect ratio force for the video (by default disabled, if you want it uncomment the code from the video section at the bottom of the code), hover for next/previous on video page
// Changelog  1.3.8 color picker for usersytles
// Changelog  1.3.7 border on focus for the search bar, text highlight changed to blue
// Changelog  1.3.6 fixed search not showing,display show comments button
// Changelog  1.3.5 fixed arrows for next and previous buttons
// Changelog  1.3.4 add removal (because if you can show adds I can hide them)
// Changelog  1.3.3 removed more stuff
// Changelog  1.3.2 small touches
// Changelog  1.3.1 some touches to make it look good in the new domain. Also I will leave the comments as they are because is too much of a pain to theme that.
// Changelog  1.3.0 added kissanime.ru, also YES IT IS BACK!
// Changelog  1.2 added icon
// @description Watch anime in a bright room with a dark theme. May the dark show your way. (KissAnime dark theme)
// @grant       GM_getValue
// @grant       GM_setValue
// ==/UserScript==
(function() {var css = [
	"/*1.3.9*/",
	
	"	/*Changed text highlight*/",
	"		  ::selection {",
	"			background: #00adee !important;",
	"			color: #fff !important;",
	"	}",
	"		  ::-moz-selection {",
	"			background: #00adee !important;",
	"			color: #fff !important;",
	"	}",
	
	"    /*Removing crap section*/",
	"    #divAds,#divFloatRight,#divFloatLeft,div.divCloseBut,#adsIfrme1,#adsIfrme2,#adsIfrme3,#adsIfrme4,#adsIfrme5,#adsIfrme9,#adsIfrme10,#adsIfrme7,#adsIfrme11,#adsIfrme8,#adsIfrme6,.barContent > div:nth-child(1) > div:nth-child(4),#containerRoot > div:nth-child(7),#containerRoot > div:nth-child(9),#containerRoot > div:nth-child(15),div.rightBox:nth-child(7),#navsubbar,#spanBookmark,#imgSearch,div.bigBarContainer:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(7) > img:nth-child(1),.arrow-general,#formSearch > div:nth-child(4) > a:nth-child(1) > img:nth-child(1),#adsIfrme3,div.bigBarContainer:nth-child(7) ,#topHolderBox,#divReload,div.rightBox:nth-child(5) > div:nth-child(2),div.rightBox:nth-child(5) > div:nth-child(1),div.rightBox:nth-child(5),#rightside > div:nth-child(4), .barContent > div:nth-child(1) > div:nth-child(11),div.clear2:nth-child(9), .barContent > div:nth-child(1) > div:nth-child(2), div.clear2:nth-child(10), div.clear2:nth-child(8),#containerRoot > div:nth-child(20),div.clear:nth-child(21),.clsTempMSg > div:nth-child(3),div.clear:nth-child(17),.barContent > div:nth-child(1) > div:nth-child(23),#divDownload,#divFileName,#footer,div.bigBarContainer:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3),div.bigBarContainer:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(4),div.bigBarContainer:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5),div.bigBarContainer:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(6),div.clear2:nth-child(5),.barContent > div:nth-child(1) > div:nth-child(3),#containerRoot > div:nth-child(12),div.clear2:nth-child(13),#containerRoot > div:nth-child(14),#containerRoot > div:nth-child(14),div.clear2:nth-child(15),div.clear2:nth-child(19),div.clear:nth-child(22),#containerRoot > div:nth-child(23),.clsTempMSg,.clsTempMSg > div:nth-child(1),.clsTempMSg > div:nth-child(2),div.clear2:nth-child(20),div.clear2:nth-child(27),#dv_pp_S54RjmGQ5Zno,#BB_SK_548813069,#formSearch > div:nth-child(3),#divAds2,body > div:nth-child(6),div.clear:nth-child(15),div.clear2:nth-child(17),div.clear:nth-child(19) {",
	"    display: none !important;",
	"}",
	"    /*Change logo section*/",
	"    #head h1 a.logo {",
	"    padding-bottom: 10px !important;",
	"    width: 600px !important;",
	"    margin-top: 20px !important;",
	"    margin-left: 20px !important;",
	"    z-index: 9999 !important;",
	"}",
	"    #headnav {",
	"    background: transparent !important;",
	"    margin: 0px !important;",
	"}",
	"    #head h1 {",
	"    background: url(http://i.imgur.com/jnt6rO6.png) !important;",
	"    width: 80% !important;",
	"    margin: -10px 10px 0px 0px !important;",
	"}",
	"    /*Background section*/",
	"    #navcontainer a:link, #navcontainer a:visited, #navcontainer a:hover, #navcontainer a:visited {",
	"    background: transparent !important;",
	"    color: #fff !important;",
	"}",
	"    .active .publisher-nav-color::after {",
	"    background: #00adee !important;",
	"}",
	"    .tooltip{",
	"    background: #222 !important;",
	"}",
	"    /*Changing images for next/prev buttons*/",
	"    a.prev,a.prev:hover {",
	"    background: url(https://i.imgur.com/V3W8cnw.png) !important;",
	"}",
	"    a.next,a.next:hover {",
	"    background: url(https://i.imgur.com/D3MhIGP.png) !important;",
	"}",
	"",
	"  #btnNext {",
	"  width: 0; ",
	"  height: 0; ",
	"  border-top: 10px solid transparent;",
	"  border-bottom: 10px solid transparent;",
	"  border-left: 10px solid white;",
	"}",
	"  #btnPrevious {",
	"  width: 0; ",
	"  height: 0; ",
	"  border-top: 10px solid transparent;",
	"  border-bottom: 10px solid transparent; ",
	"  border-right:10px solid white;          ",
	"}",
	"  #btnNext:hover {",
	"  border-left: 10px solid #00ADEE;",
	"}",
	"  #btnPrevious:hover {",
	"  border-right: 10px solid #00ADEE;",
	"}",
	"",
	"/*Border section*/",
	"    .banner img:hover, div.items img:hover,#subcontent div a img:hover{",
	"    border-color: #00adee !important;",
	"}",
	"/*Colors section*/",
	"    .post-content .post-message p,.post-content .post-message p:last-child,.dark .load-more__button,a, .nextEpisodeCountDown, .details,div.bigBarContainer:nth-child(1) > div:nth-child(2) > div:nth-child(2) > p:nth-child(6), div.bigBarContainer:nth-child(1) > div:nth-child(2) > div:nth-child(2) > p:nth-child(7), #navcontainer li a#currentTab:hover {",
	"    color: #fff !important;",
	"}",
	"    .comment__header .author a,.publisher-anchor-color a,.title, div.items a, .bigChar, .bigChar:visited, #nextEpisodeCountDown {",
	"    color: #00adee  !important; ",
	"    opacity: 0.9  !important; ",
	"}",
	"    #divComments > div > div:nth-child(2),div.bigBarContainer:nth-child(5) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) {",
	"    color: #00adee !important; ",
	"}",
	"/*Hover*/",
	"    .a:link:hover,a:hover, a:visited:hover, #tabmenucontainer a:hover,.dotUnder:hover,.episodeList td a:visited:hover,.title:hover, div.items a:hover, .bigChar:hover, #nextEpisodeCountDown:hover,div.rightBox:nth-child(3) > div:nth-child(2) > div:nth-child(2) > a:nth-child(10):hover,#navcontainer a:hover {",
	"    color: #00adee !important; ",
	"   text-shadow: 0px 0px 1px #00adee !important;",
	"}",
	"    a:visited, .episodeList td a:visited, .episodeVisited, .episodeList td a:visited {",
	"    color: #555 !important;",
	"}",
	"    .textDark {",
	"    color: #808080 !important;",
	"}",
	"/*Buttons*/",
	"    .specialButton,.dark .load-more__button,.load-more__button{",
	"    background: linear-gradient(rgb(50,50,50), rgb(40,40,40)) !important;",
	"    border-color: rgb(0,0,0) !important;",
	"}",
	"    .specialButton:hover,.dark .load-more__button:hover,.load-more__button:hover{",
	"    background: linear-gradient(rgb(70,70,70), rgb(60,60,60)) !important;",
	"    transition: .1s ease-in !important;",
	"    color: #00adee !important;",
	"}",
	"/*The show comments button*/",
	"    .specialButton{",
	"    box-shadow: none !important;",
	"    -webkit-box-shadow: none !important;                                 ",
	"}",
	"#btnShowComments{",
	"    text-shadow: none !important;",
	"}",
	"    .dark .post-content .post-menu > li a{",
	"    filter: invert(100%);",
	"}",
	"    #navcontainer {",
	"    top: 0px !important;",
	"}",
	"    #navbar {",
	"    height: 27px !important;",
	"    background: #333 !important;",
	"    position: relative !important;",
	"    margin-bottom: 25px !important;",
	"}",
	"/* Serch section */",
	"    #search {",
	"    position: absolute !important;",
	"    top: 131px !important;",
	"    right: 90px !important;",
	"    visibility: visible !important;",
	"    z-index: 999 !important;",
	"    }",
	"",
	"    #formSearch > div:nth-child(4) {",
	"    position: absolute !important;",
	"    top: 5px !important;",
	"    right: -126px !important;",
	"    visibility: visible !important;",
	"    z-index: 999 !important;",
	"    }",
	"    #keyword {",
	"    width: 150px !important;",
	"}",
	"    #result_box a span{",
	"	color: #00adee !important;",
	"}",
	"/*",
	"    #formSearch > div > a {",
	"    position: absolute !important;",
	"    color: #FFF !important;",
	"    padding: 10px 10px 10px 10px !important;",
	"    font-weight: bold !important;",
	"    top: -7px !important;",
	"    right: -100px !important;",
	"    background-color: transparent !important;",
	"    transition: all 0.3s ease-in-out 0s !important;",
	"}",
	"*/",
	"    input.text:focus {",
	"    width: 99% !important;",
	"    transition: all 0.3s ease-in-out 0s !important;",
	"}",
	"    input.text {",
	"    margin: 0px !important;",
	"    font: 15px \"Tahoma\", Arial, Helvetica, sans-serif;",
	"    color: #ccc !important;",
	"    background: #161616 !important;",
	"    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3) !important;",
	"    transition: all 0.3s ease-in-out 0s !important;",
	"}",
	"    input.text:focus {",
	"    border: 1px solid #00adee !important;",
	"}",
	"    #result_box {",
	"    margin-top: 14px !important;",
	"    opacity: 1;",
	"    width: 88.7% !important;",
	"    background-color: #161616 !important;",
	"    margin-left: -56px !important;",
	"    border-radius: 0px !important;",
	"    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3) !important;",
	"    }",
	"    #result_box a {",
	"    position: static !important;",
	"}",
	"/*More stuff I used from Kissanime red theme (link in the description)*/  ",
	"    div.clear:nth-child(1) {",
	"    height: 10px !important;",
	"}",
	"/*",
	"div.rightBox:nth-child(7) {",
	"    position: absolute !important;",
	"    top: 590px !important;",
	"}",
	"div.rightBox:nth-child(1) {",
	"    position: absolute !important;",
	"    top: 184px !important;",
	"}",
	"*/",
	"    #navcontainer li a#currentTab {",
	"    float: left !important;",
	"    background: none !important;",
	"    background-position: 0% 0px !important;",
	"    background-color: #00adee !important;",
	"    color: Black !important;",
	"    text-decoration: none !important;",
	"    line-height: 27px !important;",
	"}",
	"    .barTitle {",
	"    height: 25px !important;",
	"    padding-left: 10px !important;",
	"    background: none !important;",
	"    background-color: #333 !important;",
	"    font: normal 17px/23px \"Tahoma\", Arial, Helvetica, sans-serif !important;",
	"    letter-spacing: -1px !important;",
	"    color: #fff !important;",
	"}",
	"    .banner {",
	"    margin: 0 0 10px 0 !important;",
	"    padding: 0px !important;",
	"    width: 100% !important;",
	"    background: none !important;",
	"    height: 208px !important;",
	"    position: relative !important;",
	"    top: -9px !important;",
	"}",
	"    .episodeList td a:hover,body.dark,element.style {",
	"    color: #00adee !important;",
	"}",
	"    .listing tr:hover td {",
	"    background: none repeat scroll 0 0 #1D1D1D !important;",
	"}",
	"    html,body {",
	"    margin: 0px !important;",
	"    padding: 0px !important;",
	"    font: normal 12px \"Tahoma\", Arial, Helvetica, sans-serif !important;",
	"    line-height: 18px !important;",
	"    background-color: #111111 !important;",
	"    height: 100% !important;",
	"}",
	"    .textarea-wrapper {",
	"    position: relative !important;",
	"    margin: 0 0 0 60px !important;",
	"    background: #949191 !important;",
	"    border: 2px solid #00adee !important;",
	"    border: 2px solid rgba(0, 39, 59, .2) !important;",
	"    border-radius: 4px !important;",
	"}",
	"    .boxDropDown {",
	"    border: 1px solid #00adee!important;",
	"    -webkit-border-top-right-radius: 3px!important;",
	"    -webkit-border-top-left-radius: 3px!important;",
	"    -webkit-border-bottom-right-radius: 3px!important;",
	"    -webkit-border-bottom-left-radius: 3px!important;",
	"    -moz-border-radius-topright: 3px!important;",
	"    -moz-border-radius-topleft: 3px!important;",
	"    -moz-border-radius-bottomright: 3px!important;",
	"    -moz-border-radius-bottomleft: 3px!important;",
	"    border-top-right-radius: 3px!important;",
	"    border-top-left-radius: 3px!important;",
	"    border-bottom-right-radius: 3px!important;",
	"    border-bottom-left-radius: 3px!important;",
	"    background: #00adee!important;",
	"    display: inline-block!important;",
	"    width: auto!important;",
	"    height: 20px!important;",
	"    font-size: 12px!important;",
	"    font-weight: bold!important;",
	"    color: #949191!important;",
	"    text-align: center!important;",
	"    padding-top: 2px!important;",
	"}",
	"    #menu_box a {",
	"    color: #949191!important;",
	"    display: inline-block!important;",
	"    width: 100%!important;",
	"    line-height: 30px!important;",
	"    text-decoration: none!important;",
	"    border-bottom: 1px solid #00adee!important;",
	"}",
	"    #menu_box {",
	"    position: absolute!important;",
	"    top: 29px!important;",
	"    left: 221px!important;",
	"    width: 175px!important;",
	"    color: #FFF!important;",
	"    background: #00adee!important;",
	"    font-family: Arial!important;",
	"    font-size: 12px!important;",
	"    z-index: 100!important;",
	"    text-align: left!important;",
	"    border-top: 1px solid #949191!important;",
	"    border-left: 1px solid #949191!important;",
	"    border-right: 1px solid #949191!important;",
	"}",
	"    #menu_box a:hover {",
	"    background: #161616!important;",
	"}",
	"    #tabmenucontainer a:link, #tabmenucontainer a:visited,#tabmenucontainer a:hover,#tabmenucontainer li a.tabactive {",
	"    float: left;",
	"    background-color: #00adee !important;",
	"    background: none !important;",
	"    background-position: 0% -25px !important;",
	"}",
	"    #tabmenucontainer li a.tabactive {",
	"    background-color: #00adee !important;",
	"    color: black !important;",
	"}",
	"    #tabmenucontainer li a.tabactive:hover {",
	"    color: white !important;",
	"}",
	"    .aButton {",
	"    color: #949191!important;",
	"    display: inline-block!important;",
	"    text-decoration: none!important;",
	"    border-bottom: 1px solid #949191!important;",
	"    border-top: 1px solid #949191!important;",
	"    border-left: 1px solid #949191!important;",
	"    border-right: 1px solid #949191!important;",
	"    background: #00adee!important;",
	"    cursor: pointer!important;",
	"    text-align: center!important;",
	"    width: 50px!important;",
	"    line-height: 200%!important;",
	"}",
	"/*Video*/",
	"    .vjs-default-skin .vjs-play-progress, .vjs-default-skin .vjs-volume-level{",
	"    background: #00adee !important;",
	"    opacity: 0.8 !important;",
	"}",
	"    .vjs-default-skin .vjs-play-progress:hover, .vjs-default-skin .vjs-volume-level:hover{",
	"    background: #00adee !important;",
	"    opacity: 1 !important;",
	"}",	
	"/*Transparency*/",
	"    .vjs-default-skin .vjs-control-bar,.vjs-default-skin .vjs-slider{",
	"    background: rgba(34, 34, 34,.4) !important;",
	"}",
		"  .vjs-default-skin .vjs-slider:hover{",
	"    background: rgba(34, 34, 34,.7) !important;",
	"}",
	"	/*Aspect ratio change*/",
	"		  .video-js .vjs-tech {",
	"			/*object-fit: fill;*/",
	"	}"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node); 
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
