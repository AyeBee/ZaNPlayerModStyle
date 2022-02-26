// ==UserScript==
// @name         Z-aN Player ModStyle
// @namespace    http://ayebee.jp/
// @version      0.1
// @description  動画配信サイトZ-aNの画面構成をちょっと良くするユーザースクリプトです。
// @author       ayebee
// @match        https://www.zan-live.com/live/play/*/*
// @icon         https://www.google.com/s2/favicons?domain=zan-live.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const style = document.createElement('style');
    style.textContent = `
    body {
        overflow: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    body::-webkit-scrollbar {
        display: none;
    }

    section#main-content {
        overflow-x: hidden;
    }

    div#lBox {
        flex: 0 0 90%;
        max-width: 90%;
        margin: 0 !important;
        padding: 0 !important;
    }

    div#rBox {
        flex: 0 0 10%;
        margin: 0 !important;
        padding: 0 !important;
        border-width: 0 !important;
    }

    div#commentBox,
    div#inputCommentBox {
        border-width: 0 !important;
    }

    header.aspect.row.d-flex.align-items-center.tHeaderTate.yHeaderYoko.HeaderYoko {
        padding: 0;
        height: 30px;
    }
    `;
    document.getElementsByTagName('head')[0].appendChild(style);
})();
