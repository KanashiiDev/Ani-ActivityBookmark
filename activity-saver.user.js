// ==UserScript==
// @name        Anilist Activity Saver
// @namespace   https://github.com/KanashiiDev
// @match       https://anilist.co/*
// @version     1.1.40
// @license     GPL-3.0-or-later
// @require     https://code.jquery.com/jquery-3.3.1.min.js
// @require     https://cdn.jsdelivr.net/npm/dompurify@3.0.6/dist/purify.min.js
// @require     https://cdn.jsdelivr.net/npm/showdown@2.1.0/dist/showdown.min.js
// @require     https://cdn.jsdelivr.net/npm/lz-string@1.5.0/libs/lz-string.min.js
// @author      KanashiiDev
// @supportURL  https://github.com/KanashiiDev/Ani-ActivitySaver/issues
// @description Simple userscript/extension for AniList that allows users to save text activities.
// @run-at      document-end
// ==/UserScript==

//Showdown Youtube Extension 1.2.1
//https://github.com/showdownjs/youtube-extension
//Changed some regex codes
!(function (e) {
  'use strict';
  if ('undefined' != typeof showdown) e(showdown);
  else if ('function' == typeof define && define.amd) define(['showdown'], e);
  else {
    if ('object' != typeof exports) throw Error('Could not find showdown library');
    module.exports = e(require('showdown'));
  }
})(function (e) {
  'use strict';
  var t = /(?:<p>)?<img.*?src="(.+?)"(.*?)\/?>(?:<\/p>)?/gi,
    o = /(?:(?:https?:)?(?:\/\/)?)(?:(?:www)?\.)?youtube\.(?:.+?)\/(?:(?:watch\?v=)|(?:embed\/|shorts|))([a-zA-Z0-9_-]{11})/i,
    i = /(?:(?:https?:)?(?:\/\/)?)?youtu\.be\/([a-zA-Z0-9_-]{11})/i,
    r = /(?:(?:https?:)?(?:\/\/)?)(?:(?:www)?\.)?vimeo.com\/(\d+)/;
  e.extension('youtube', function () {
    return [
      {
        type: 'output',
        filter: function (e, s, n) {
          var l = '<iframe src="%1" width="%2" height="%3" frameborder="0" allowfullscreen></iframe>';
          return (
            n.smoothLivePreview &&
              (l = n.youtubeUseSimpleImg
                ? '<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=" width="%2" height="%3">'
                : '<div class="youtube-preview" style="width:%2; height:%3; background-color:#333; position:relative;"><svg version="1.1" xmlns="http://www.w3.org/2000/svg"      width="100" height="70" viewBox="0 0 100 70"     style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">    <defs>      <linearGradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">        <stop offset="0%" style="stop-color:rgb(229,45,49);stop-opacity:1" />        <stop offset="100%" style="stop-color:rgb(191,23,29);stop-opacity:1" />      </linearGradient>    </defs>    <rect width="100%" height="100%" rx="26" fill="url(#grad1)"/>    <polygon points="35,20 70,35 35,50" fill="#fff"/>    <polygon points="35,20 70,35 64,37 35,21" fill="#e8e0e0"/></svg><div style="text-align:center; padding-top:10px; color:#fff"><a href="%1">%1</a></div></div>'),
            e.replace(t, function (e, t, s) {
              var d,
                f = (function (e, t) {
                  var o, i, r, s, n;
                  return (
                    (s = t.youtubeWidth ? t.youtubeWidth : 420),
                    (n = t.youtubeHeight ? t.youtubeHeight : 315),
                    e && ((o = (r = /width="(.+?)"/.exec(e)) ? r[1] : s), (i = (r = /height="(.+?)"/.exec(e)) ? r[1] : n)),
                    /^\d+$/gm.exec(o) && (o += 'px'),
                    /^\d+$/gm.exec(i) && (i += 'px'),
                    { width: o, height: i }
                  );
                })(s, n),
                h = '';
              if ((d = i.exec(t)) || (d = o.exec(t))) h = 'https://www.youtube.com/embed/' + d[1] + '?rel=0';
              else {
                if (!(d = r.exec(t))) return e;
                h = 'https://player.vimeo.com/video/' + d[1];
              }
              return l.replace(/%1/g, h).replace('%2', f.width).replace('%3', f.height);
            })
          );
        },
      },
    ];
  });
});

/*! showdown Options. */
showdown.setOption('strikethrough', true);
showdown.setOption('ghMentions', true);
showdown.setOption('emoji', true);
showdown.setOption('tables', true);
showdown.setOption('simpleLineBreaks', true);
showdown.setOption('simplifiedAutoLink', true);
showdown.setOption('noHeaderId', true);
showdown.setOption('omitExtraWLInCodeBlocks', true);
showdown.setOption('ghMentionsLink', 'https://anilist.co/user/{u}/');
showdown.setOption('youtubeHeight', '300px');
showdown.setOption('youtubeWidth', '300px');
const converter = new showdown.Converter({ extensions: ['youtube'] });

//make HTML
let makeHtml = function (e) {
  let t = (e = e.replace('----', '---')).split('~~~'),
    r = /img(\d+%?)?\(http.+?\)/gi;
  t = t.map((e) => {
    let t = e.match(r);
    return (
      t &&
        t.forEach((t) => {
          let r = t.match(/^img(\d+%?)?\((http.+?)\)$/i);
          e = e.replace(t, `<img width="${r[1] || ''}" src="${r[2]}">`);
        }),
      e
    );
  });
  let a = /webm\(http.+?\)/gi;
  t = t.map((e) => {
    let t = e.match(a);
    return (
      t &&
        t.forEach((t) => {
          let r = t.match(/^webm\((http.+?)\)$/i);
          e = e.replace(t, `<video src="${r[1]}" controls="true" muted=""></video>`);
        }),
      e
    );
  });
  let c = /youtube\(.+?\)/gi,
    l = [
      (t = t.map((e) => {
        let t = e.match(c);
        return (
          t &&
            t.forEach((t) => {
              let r = t.match(/^youtube\((.+?)\)$/i);
              e = e.replace(t, `<a href="${r[1]}">${r[1]}</a>`);
            }),
          e
        );
      }))[0],
    ],
    m = !1;
  for (let n = 1; n < t.length; n++) m ? l.push('</center>') : l.push('<center>'), l.push(t[n]), (m = !m);
  return (l = l.map((e) => (/~!/.test(e) || /!~/.test(e) ? e.replace(/~!/g, '<span class="markdown_spoiler">').replace(/!~/g, '</span>') : e))), converter.makeHtml(l.join(''));
};

//Anilist - AuthAPIQuery
let APIlimit = 90,
  APIcallsUsed = 0,
  APIcallsUsed_shortTerm = 0,
  pending = {},
  APIcounter = setInterval(function () {
    APIcallsUsed = 0;
  }, 6e4),
  APIcounter2 = setInterval(function () {
    APIcallsUsed_shortTerm = 0;
  }, 1e4),
  handleResponse = function (e) {
    APIcallsUsed = (APIlimit = e.headers.get('x-ratelimit-limit')) - e.headers.get('x-ratelimit-remaining');
    try {
      return e.json().then(function (t) {
        return e.ok ? t : Promise.reject(t);
      });
    } catch (t) {
      throw (console.warn(t, e), t);
    }
  };
function authAPIcall(e, t, r, a, n, i, s, l) {
  if (!accessToken) return;
  if (APIcallsUsed_shortTerm > 18 || APIcallsUsed > APIlimit - 2) {
    setTimeout(function () {
      authAPIcall(e, t, r, a, n, i, s, l);
    }, 2e3);
    return;
  }
  if (
    ('object' == typeof e &&
      ((t = e.variables), (r = e.callback), (a = e.cacheKey), (n = e.timeFresh), (i = e.useLocalStorage), (s = e.overWrite), (l = e.oldCallback), (e = e.query)),
    a)
  ) {
    let o = JSON.parse(i ? localStorage.getItem(a) : sessionStorage.getItem(a));
    if (o) {
      if ((!o.duration || NOW() < o.time + o.duration) && !s) {
        r(o.data, t);
        return;
      }
      l && l(o.data, t), i ? localStorage.removeItem(a) : sessionStorage.removeItem(a);
    }
  }
  let c = function (e, s) {
      if ((r(e, t, s), a)) {
        let l = JSON.stringify({ data: e, time: NOW(), duration: n });
        i ? localStorage.setItem(a, l) : sessionStorage.setItem(a, l);
      }
    },
    u = {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + accessToken, 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ query: e, variables: t }),
    },
    m = function (t) {
      if ((console.error(t), t.errors && t.errors.some((e) => 'Invalid token' === e.message))) {
        let loginLink = create(
          'a',
          { class: 'mainbtns', id: 'signIn', href: 'https://anilist.co/api/v2/oauth/authorize?client_id=12455&response_type=token' },
          '<b>Error: Expired Token. Click here to renew token.</b>',
        );
        listDiv2.insertBefore(loginLink, listDiv2.children[1]);
        (accessToken = ''), localStorage.setItem('savetkn', accessToken);
        return;
      }
      e.includes('mutation') ? r(t.errors) : c(null, t);
    };
  fetch('https://graphql.anilist.co', u).then(handleResponse).then(c).catch(m), APIcallsUsed++, APIcallsUsed_shortTerm++;
}

//SVG
const svgns = 'http://www.w3.org/2000/svg',
  svgShape = function (e, t, a, c, r) {
    e = e || 'g';
    let l = document.createElementNS('http://www.w3.org/2000/svg', e);
    return (
      Object.keys(a || {}).forEach((e) => {
        l.setAttributeNS(null, e, a[e]);
      }),
      r && l.appendChild(document.createTextNode(r)),
      t && t.appendChild(l),
      (c || []).forEach((e) => {
        e.element ? svgShape(e.element, l, e.attributes, e.children, e.content) : l.appendChild(e);
      }),
      l
    );
  },
  svg = {};
[
  {
    name: 'pinned',
    shape: {
      element: 'svg',
      attributes: {
        focusable: 'false',
        'data-prefix': 'fas',
        'data-icon': 'thumbtack',
        role: 'img',
        xmls: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 384 512',
        class: 'svg-inline--fa fa-link fa-w-16 fa-sm',
        'aria-hidden': 'true',
      },
      children: [
        {
          element: 'path',
          attributes: {
            fill: 'currentColor',
            d: 'M298.028 214.267L285.793 96H328c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v48c0 13.255 10.745 24 24 24h42.207L85.972 214.267C37.465 236.82 0 277.261 0 328c0 13.255 10.745 24 24 24h136v104.007c0 1.242.289 2.467.845 3.578l24 48c2.941 5.882 11.364 5.893 14.311 0l24-48a8.008 8.008 0 0 0 .845-3.578V352h136c13.255 0 24-10.745 24-24-.001-51.183-37.983-91.42-85.973-113.733z',
          },
        },
      ],
    },
  },
  {
    name: 'likeNative',
    shape: {
      element: 'svg',
      attributes: {
        'aria-hidden': 'true',
        'data-prefix': 'fas',
        'data-icon': 'heart',
        role: 'img',
        xmls: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 512 512',
        class: 'svg-inline--fa fa-heart fa-w-16 fa-sm',
      },
      children: [
        {
          element: 'path',
          attributes: {
            fill: 'currentColor',
            d: 'M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z',
          },
        },
      ],
    },
  },
  {
    name: 'reply',
    shape: {
      element: 'svg',
      attributes: {
        'aria-hidden': 'true',
        'data-prefix': 'fas',
        'data-icon': 'comments',
        role: 'img',
        xmls: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 576 512',
        class: 'svg-inline--fa fa-comments fa-w-16 fa-sm',
      },
      children: [
        {
          element: 'path',
          attributes: {
            fill: 'currentColor',
            d: 'M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z',
          },
        },
      ],
    },
  },
  {
    name: 'expand',
    shape: {
      element: 'svg',
      attributes: {
        'aria-hidden': 'true',
        'data-prefix': 'fas',
        'data-icon': 'expand',
        role: 'img',
        xmls: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 448 512',
        class: 'svg-inline--fa fa-link fa-w-16 fa-sm',
      },
      children: [
        {
          element: 'path',
          attributes: {
            fill: 'currentColor',
            d: 'M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z',
          },
        },
      ],
    },
  },
  {
    name: 'compress',
    shape: {
      element: 'svg',
      attributes: {
        'aria-hidden': 'true',
        'data-prefix': 'fas',
        'data-icon': 'compress',
        role: 'img',
        xmls: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 448 512',
        class: 'svg-inline--fa fa-link fa-w-16 fa-sm',
      },
      children: [
        {
          element: 'path',
          attributes: {
            fill: 'currentColor',
            d: 'M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-276-24V44c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z',
          },
        },
      ],
    },
  },
  {
    name: 'link',
    shape: {
      element: 'svg',
      attributes: {
        'aria-hidden': 'true',
        'data-prefix': 'fas',
        'data-icon': 'link',
        role: 'img',
        xmls: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 512 512',
        class: 'svg-inline--fa fa-link fa-w-16 fa-sm',
      },
      children: [
        {
          element: 'path',
          attributes: {
            fill: 'currentColor',
            d: 'M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z',
          },
        },
      ],
    },
  },
  {
    name: 'xmark',
    shape: {
      element: 'svg',
      attributes: {
        'aria-hidden': 'true',
        'data-prefix': 'fas',
        'data-icon': 'link',
        role: 'img',
        xmls: 'http://www.w3.org/2000/svg',
        viewBox: '0 55 400 400',
        class: 'svg-inline--fa fa-link fa-w-16 fa-sm',
      },
      children: [
        {
          element: 'path',
          attributes: {
            fill: 'currentColor',
            d: 'M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z',
          },
        },
      ],
    },
  },
  {
    name: 'gear',
    shape: {
      element: 'svg',
      attributes: {
        'aria-hidden': 'true',
        'data-prefix': 'fas',
        'data-icon': 'link',
        role: 'img',
        xmls: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 512 512',
        class: 'svg-inline--fa fa-link fa-w-16 fa-sm',
      },
      children: [
        {
          element: 'path',
          attributes: {
            fill: 'currentColor',
            d: 'M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z',
          },
        },
      ],
    },
  },
  {
    name: 'edit',
    shape: {
      element: 'svg',
      attributes: {
        'aria-hidden': 'true',
        'data-prefix': 'fas',
        'data-icon': 'link',
        role: 'img',
        xmls: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 512 512',
        class: 'svg-inline--fa fa-link fa-w-16 fa-sm',
      },
      children: [
        {
          element: 'path',
          attributes: {
            fill: 'currentColor',
            d: 'M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z',
          },
        },
      ],
    },
  },
  {
    name: 'cross',
    shape: {
      element: 'svg',
      attributes: {
        'aria-hidden': 'true',
        'data-prefix': 'fas',
        'data-icon': 'cross',
        role: 'img',
        xmls: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 448 512',
        class: 'svg-inline--fa fa-link fa-w-16 fa-sm',
      },
      children: [
        {
          element: 'path',
          attributes: {
            fill: 'currentColor',
            d: 'M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z',
          },
        },
      ],
    },
  },
].forEach((e) => {
  svg[e.name] = svgShape(e.shape.element, !1, e.shape.attributes, e.shape.children, e.shape.content);
});

//Element Functions
var ElementPrototype = Element.prototype,
  hasOwnProperty = Object.hasOwnProperty,
  setPrototypeOf = Object.setPrototypeOf,
  isFrozen = Object.isFrozen,
  getPrototypeOf = Object.getPrototypeOf,
  getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
  cloneNode = lookupGetter(ElementPrototype, 'cloneNode');
function lookupGetter(e, t) {
  for (; null !== e; ) {
    var a = getOwnPropertyDescriptor(e, t);
    if (a) {
      if (a.get) return unapply(a.get);
      if ('function' == typeof a.value) return unapply(a.value);
    }
    e = getPrototypeOf(e);
  }
  return function (e) {
    return console.warn('fallback value for', e), null;
  };
}
function hasOwn(e, t) {
  return Object.hasOwn ? Object.hasOwn(e, t) : Object.prototype.hasOwnProperty.call(e, t);
}
function unapply(e) {
  return function (t) {
    for (var a = arguments.length, c = new Array(a > 1 ? a - 1 : 0), r = 1; r < a; r++) c[r - 1] = arguments[r];
    return apply(e, t, c);
  };
}

//Delay Function
const delay = (delayInms) => {
  return new Promise((resolve) => setTimeout(resolve, delayInms));
};

//Time Function for Activities
function nativeTimeElement(e) {
  let n = new Date(1e3 * e),
    o = create2('time', 'activitytime');
  o.setAttribute('datetime', n), (o.title = n.toLocaleString(void 0));
  let t = function () {
    let e = Math.round(new Date().valueOf() / 1e3) - Math.round(n.valueOf() / 1e3);
    0 === e && (o.innerText = 'Now'),
      1 === e
        ? (o.innerText = '1 second ago')
        : e < 60
          ? (o.innerText = e + ' seconds ago')
          : 1 === (e = Math.floor(e / 60))
            ? (o.innerText = '1 minute ago')
            : e < 60
              ? (o.innerText = e + ' minutes ago')
              : 1 === (e = Math.floor(e / 60))
                ? (o.innerText = '1 hour ago')
                : e < 24
                  ? (o.innerText = e + ' hours ago')
                  : 1 === (e = Math.floor(e / 24))
                    ? (o.innerText = '1 day ago')
                    : e < 7
                      ? (o.innerText = e + ' days ago')
                      : e < 14
                        ? (o.innerText = '1 week ago')
                        : e < 30
                          ? (o.innerText = Math.floor(e / 7) + ' weeks ago')
                          : e < 365
                            ? 1 === Math.floor(e / 30)
                              ? (o.innerText = '1 month ago')
                              : (o.innerText = Math.floor(e / 30) + ' months ago')
                            : 1 === (e = Math.floor(e / 365))
                              ? (o.innerText = '1 year ago')
                              : (o.innerText = e + 'years ago'),
      setTimeout(function () {
        document.body.contains(o) && t();
      }, 2e4);
  };
  return t(), o;
}

//Create Element Function
function create(e, t, n) {
  if (!e) throw new SyntaxError("'tag' not defined");
  var r,
    i,
    f = document.createElement(e);
  if (t)
    for (r in t)
      if ('style' === r) for (i in t.style) f.style[i] = t.style[i];
      else t[r] && f.setAttribute(r, t[r]);
  return n && (f.innerHTML = n), f;
}
//Create Element Function 2
function create2(t, e, a, s, n) {
  let i = document.createElement(t);
  return (
    Array.isArray(e)
      ? (i.classList.add(...e), e.includes('newTab') && i.setAttribute('target', '_blank'))
      : e && ('#' === e[0] ? (i.id = e.substring(1)) : (i.classList.add(e), 'newTab' === e && i.setAttribute('target', '_blank'))),
    (a || 0 === a) && (i.innerText = a),
    s && s.appendChild && s.appendChild(i),
    n && (i.style.cssText = n),
    i
  );
}

//Set Element Function
function set(t, e, n) {
  if (!t) throw new SyntaxError("'tag' not defined");
  var r,
    i,
    f = t;
  if (e)
    for (r in e)
      if ('style' === r) for (i in e.style) f.style[i] = e.style[i];
      else e[r] && f.setAttribute(r, e[r]);
  return n && (f.innerHTML = n), f;
}

//CSS
var styles = `
.activitydata span.markdown_spoiler {
    display:block;
    margin:10px
}

.activitydata span.markdown_spoiler_cont {
    margin-top:10px
}

.activitydata span.markdown_spoiler_show {
    cursor: pointer;
    padding: 5px;
    padding-top: 3px;
    font-weight: 700;
    padding-bottom: 3px;
    background: rgb(var(--color-foreground));
    font-size:12px;
    color: rgb(var(--color-blue));
    -webkit-border-radius: 5px;
            border-radius: 5px
}

.activitydata .button.liked {
  color: rgb(var(--color-red));
}

.activitydata .activitylinksdiv {
  color: rgb(var(--color-blue-dim));
  position: relative;
  left: -webkit-calc(100% - 105px);
  left: calc(100% - 105px);
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: -webkit-inline-flex;
  display: inline-flex;
  font-family: Overpass,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  font-weight: 800;
}

.activitydata .actions {
    color: rgb(var(--color-blue-dim));
    position: relative;
    left: -webkit-calc(100% - 85px);
    left: calc(100% - 85px);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 95px;
    font-family: Overpass,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    font-weight: 800;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
            justify-content: flex-end;
}

.activitydata .action {
  color: rgb(var(--color-blue-dim))!important;
  cursor: pointer;
  display: inline-block;
  padding-left: 5px;
  -webkit-transition: .2s;
  -o-transition: .2s;
  transition: .2s;
}

.activitydata .time {
  font: 800 1.1rem Overpass,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  color: rgb(var(--color-text-lighter));
  position: relative;
  right: 12px;
  top: 12px;
}

.activitydata .acttime {
  font: 800 1.1rem Overpass,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  color: rgb(var(--color-text-lighter));
  margin-top:3px
}

.activitydata .reply .actions {
  font-family: Overpass,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  font-weight: 700;
  top: 12px;
  position: absolute;
  width:125px;
  left: -webkit-calc(100% - 135px);
  left: calc(100% - 135px);
  -webkit-box-align: center;
      -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center
}

.activitydata .reply .action {
  padding-left: 5px;
  -webkit-transition: .2s;
  -o-transition: .2s;
  transition: .2s;
}

.activitydata .reply  .action.likes {
  padding-right: 10px;
}

.activitydata .reply .time {
  color: rgb(var(--color-text-lighter));
  display: contents!important;
}

.activitydata .reply {
  background: rgb(var(--color-foreground));
  -webkit-border-radius: 3px;
          border-radius: 3px;
  font-size: 1.3rem;
  margin-top: 15px;
  padding: 14px;
  padding-bottom: 4px;
  position: relative;
}
.activitydata .reply-markdown {
  padding: 0px 2px
}
.activitydata .reply-wrap .name {
    padding: 8px 2px
}

.activitydata .name {
  margin-left: 5px;
  position: absolute;
  font-weight: bold;
}

.activitydata .reply {
  margin-bottom: 10px;
  background: rgba(var(--color-foreground));
  -webkit-border-radius: 10px;
          border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
}

.activitydata {
  min-width: 100%;
  padding: 20px 25px 10px;
  margin-bottom: 15px;
  -webkit-border-radius: 10px;
          border-radius: 10px;
  background: rgb(var(--color-background))
}
.activityinner {
  text-align: -webkit-center;
  margin-bottom:10px
}

.activitydata img {
  max-width: 100%;
  margin-bottom:5px
}

.activitydata blockquote {
  background: rgb(var(--color-foreground));
  border-left: solid 7px rgb(var(--color-text));
  -webkit-border-radius: 3px;
          border-radius: 3px;
  display: inline-block;
  font-style: italic;
  margin-left: 10px;
  padding: 10px 14px;
}

.activitydata iframe,
.activitydata video {
    -webkit-border-radius: 3px;
            border-radius: 3px;
    height: 200px;
    max-width: 500px;
    width: 100%;
    margin-bottom: 5px;
    display: block;
}

.activitydataimg {
 background-size: cover;
    background-repeat: no-repeat;
    display: inline-block;
    width: 45px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin-bottom: 10px;
    height: 45px
}

.activitydatausername {
    font-weight: 700;
    left: 50px;
    top: 7px;
    position: relative;
    width: 150px;
    display: block;
}

.reply-wrap .activitydataimg {
    width: 30px;
    height: 30px
}
.reply-wrap .reply .header {
   height:40px
}
.activitydata .saveembed {
    background: rgb(var(--color-foreground));
    font-size: 12px;
    color: rgb(var(--color-text));
    -webkit-border-radius: 3px;
            border-radius: 3px;
    display: -ms-inline-grid;
    display: inline-grid;
    grid-auto-flow: column;
    -ms-grid-columns: 50px;
    grid-template-columns: 50px;
    justify-items: center;
}
.activitydata .reply-markdown .markdown{
overflow:hidden!important
}
.activitydata .reply-markdown .saveembed,
.activitydata blockquote span.markdown_spoiler_show,
.activitydata blockquote .saveembed{
   background: rgb(var(--color-background))
}
#removereply:hover,
#editreply:hover,
.activitydata .action:hover,
.activitydata .activitylink:hover{
  color: rgb(var(--color-blue))!important;
}

.activitydata .saveembed b {
    display: -ms-grid;
    display: grid;
    word-break: break-word;
    margin: 3px;
    padding: 10px;
    justify-items: center;
    line-height:18px
}

.activitydata .saveembed .cover {
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  height: 100%;
  width: 100%;
  -webkit-border-top-left-radius: 3px;
          border-top-left-radius: 3px;
  -webkit-border-bottom-left-radius: 3px;
          border-bottom-left-radius: 3px;
}

.saveembedDetails {
  font-size: 1rem;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: -webkit-inline-flex;
  display: inline-flex;
  color: rgb(var(--color-text-light))!important;
  pointer-events: none;
}

.activitydata p {
  word-break: break-word;
}

.activitydata p:first-of-type {
  margin: 0;
}

.activitydata a,
.activitydata a.embedLink a.saveembed{
  color: rgb(var(--color-blue));
}
.activitydata a[href^="https://anilist.co/manga/"],
.activitydata a.embedLink[href^="https://anilist.co/manga/"] a.saveembed{
  color: rgb(var(--color-green));
}


.activitydatauserdiv {
  width: 100%;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: -webkit-inline-flex;
  display: inline-flex;
}

.activitylink {
  padding-left: 15px;
  height: 0;
  display: inline-block;
  position: relative;
  cursor: pointer;
  color: rgba(var(--color-text))!important;
}

.activitydata hr {
  border: solid 1px rgba(40,56,77,.5);
  -webkit-border-radius: 5px;
          border-radius: 5px;
  width: 100%;
}

.saveActivity {
  -webkit-box-align: center;
      -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
  display: -ms-grid;
  display: grid;
  grid-gap: 8px;
  -ms-grid-columns: 20px 8px 1fr;
  grid-template-columns: 20px 1fr;
  padding: 2px 12px;
  padding-right: 17px;
}

.mainbtn {
  list-style: none;
  cursor: pointer;
  color: rgb(var(--color-text));
}

.mainbtns {
  font: 900 1.3rem Overpass,-apple-system,BlinkMacSystemFont,"Segoe UI",Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
  -webkit-transition: .25s;
  -o-transition: .25s;
  transition: .25s;
  border: 0;
  -webkit-border-radius: 4px;
          border-radius: 4px;
  padding: 4px;
  margin: 4px;
  text-align:center;
  cursor: pointer;
  background: rgb(var(--color-background));
  color: rgb(var(--color-text));
}

.btn-active {
  background: #28384d;
  color: #9fadbd;
}

.mainbtns:active {
  background: rgba(40,56,77);
}

.mainbtns:hover {
  color: rgb(var(--color-blue));
}

.maindiv {
  width: 100%;
  -webkit-transition: 1s;
  -o-transition: 1s;
  transition: 1s;
  position: relative;
  background: rgb(var(--color-foreground));
  overflow-y: scroll;
  display: -ms-grid;
  display: grid;
  color: rgb(var(--color-text));
  padding: 10px;
  padding-bottom: 0;
  margin-right: 10px;
  margin-bottom: 20px;
  border: 1px solid #6969694d;
  -webkit-border-radius: 10px;
          border-radius: 10px;
}

.expanded {
  margin-top: 10px;
}

.expanded2 {
  max-height: 87vh!important;
}

.ResultDivInside {
  overflow-y: scroll;
  -webkit-border-radius: 10px;
          border-radius: 10px;
  padding: 10px;
  padding-top: 20px;
  padding-bottom: 0;
  margin-top: 10px;
  margin-bottom: 10px;
}

.activitydataDiv {
  display: -ms-grid;
  display: grid;
  max-height: 330px;
  overflow-y: scroll;
  padding-top: 10px;
  margin-top: 3px;
}

.ResultDivInside,
.activitydataDiv {
  -webkit-mask-image: -webkit-gradient(linear,left top, left bottom,color-stop(0, transparent),color-stop(black),color-stop(black),to(transparent));
  -webkit-mask-image: linear-gradient(to bottom,transparent 0,black var(--top-mask-size),black -webkit-calc(100% - var(--bottom-mask-size)),transparent 100%);
          mask-image: -webkit-gradient(linear,left top, left bottom,color-stop(0, transparent),color-stop(black),color-stop(black),to(transparent));
          mask-image: linear-gradient(to bottom,transparent 0,black var(--top-mask-size),black calc(100% - var(--bottom-mask-size)),transparent 100%);
  --bottom-mask-size: 10px;
  --top-mask-size: 10px;
}
#settingDiv {
  top:5px;
  padding-bottom: 5px;
  padding-top: 5px;
  margin-bottom:5px
}
button#removereply,
button#expandbtn,
button#settingsbtn,
button#closedivbtn{
  position: absolute;
  right: 0;
  top:4px;
  background:transparent
}
button#settingsbtn {
  right:20px
}
button#expandbtn {
  right:40px
}
#importBtn{
-moz-text-align-last:center;
     text-align-last:center
}
.reply-wrap .replybutton {
align-items: center;
    background: rgb(var(--color-blue));
    border-radius: 4px;
    color: rgb(var(--color-text-bright));
    cursor: pointer;
    display: inline-flex;
    font-family: Overpass,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    font-size: 1.3rem;
    font-weight: 900;
    margin-left: 18px;
    padding: 10px 15px;
    transition: .2s;
}
.reply-wrap .replybutton .cancel{
background: rgb(var(--color-foreground));
    color: rgb(var(--color-text-lighter));
}
.reply-wrap textarea{width: 96%;border-width: 1px;font-size: 1.3rem;padding: 8px 15px;resize: none;min-height: 36px;border-radius: 5px;}
#removereply,#editreply{visibility:hidden;transition:0.5s}
.reply-wrap .header:hover #removereply,
.reply-wrap .header:hover #editreply{
    visibility: visible!important;
}
`;

//Add CSS
var styleSheet = document.createElement('style');
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

//localStorage requirement
try {
  localStorage.setItem('test', 'test');
  localStorage.removeItem('test');
} catch (e) {
  alert('LocalStorage, required for saving settings, is not available.');
}

//get username
let auth;
let user = '';
let userid = 0;
try {
  auth = JSON.parse(localStorage.getItem('auth'));
} catch (e) {
  console.warn('could not get auth');
}
if (auth) (user = auth.name), (userid = auth.id);
else
  try {
    user = document.querySelector(".nav .links .link[href^='/user/']").href.match(/\/user\/(.*)\//)[1];
  } catch (e) {
    alert('Please login before to use -Activity Saver- script.');
  }

//Variables
let username = String(user);
let usernameurl = String('https://anilist.co/user/' + user + '/');
var val = 0;
var active = false;
var mainarray = [];
let onMainDiv = false;
var autosave = false;
var expanded = false;
var settings = false;
var oldHref = document.location.href;
interval = null;
var accessToken = '';

//Check LocalStorage for Token
check();
if (localStorage.getItem('savetkn')) {
  let lztkn = LZString.decompressFromBase64(localStorage.getItem('savetkn'));
  if (lztkn.length > 10) {
    accessToken = JSON.parse(LZString.decompressFromBase64(localStorage.getItem('savetkn')));
  } else {
    localStorage.removeItem('savetkn');
  }
}

//Create Saved Activities Button
var button = create(
  'li',
  {
    class: 'el-dropdown-menu__item mainbtn',
    id: 'Saved Activities',
  },
  'Saved Activities',
);
button.onclick = () => {
  getSavedDiv();
};

//Start
start();
function start() {
  if (!/^\/(home)\/?([\w-]+)?\/?$/.test(location.pathname)) {
    return;
  }
  let filters = document.querySelector('.el-dropdown-menu:not(.details *):not(.time *):not(.actions *)');
  if (!filters) {
    setTimeout(start, 100);
    return;
  }
  if (filters.children[0].innerText.trim() === 'All') {
    filters.appendChild(button);
  } else {
    setTimeout(start, 100);
    return;
  }
  let autosaved = JSON.parse(localStorage.getItem('actautosave'));
  if (autosaved && accessToken.length > 5) {
    autosave = true;
  } else {
    autosave = false;
  }
  addSavetoActivities();
}

//Remove Activity
function removeactivity(id) {
  if (mainarray.length == 1) {
    mainarray = [];
  }
  let activitiesidarray = window.localStorage.getItem('savedactivites');
  let x = activitiesidarray.split(/[.,!,?]/);
  for (var i in x) {
    if (x[i] == id) {
      x.splice(i, 1);
      break;
    }
  }
  mainarray = x;
  localStorage.setItem('savedactivites', [x]);
  if (autosave) {
    autosaveact();
    delay(1000).then(() => buildactivity());
  } else {
    buildactivity();
  }
}

//Build Saved Activities
function buildactivity() {
  let activitydataDiv = document.getElementById('activitydataDiv');
  let activitiesidarray = window.localStorage.getItem('savedactivites');
  var x = '';
  if (activitydataDiv) {
    activitydataDiv.innerHTML = '';
  }
  if (autosave) {
    const query = `query($userName: String) {User(name: $userName){about}}`;
    var variables = {
      userName: username,
    };
    var url = 'https://graphql.anilist.co',
      options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          query: query,
          variables: variables,
        }),
      };
    function handleResponse(e) {
      return e.json().then(function (n) {
        return e.ok ? n : Promise.reject(n);
      });
    }
    fetch(url, options).then(handleResponse).then(handleData);
    function handleData(data) {
      let actiddata = '';
      actiddata = data.data.User.about;
      let jsonMatch = actiddata.match(/\[\]\(actjson([A-Za-z0-9+\/=]+)\)/);
      if (jsonMatch) {
        let data2 = JSON.parse(LZString.decompressFromBase64(jsonMatch[1]));
        var values = Object.keys(data2).map(function (key) {
          return data2[key];
        });
        x = JSON.stringify(values)
          .replace(/\\*"|\[|\]/g, '')
          .split(/[.,!,?]/);
        buildacts();
        console.log(x);
        if (x.length > 1) {
          window.localStorage.setItem('savedactivites', x);
        }
      } else {
        autosaveact();
        return buildactivity();
      }
    }
  } else {
    if (activitiesidarray !== null) {
      x = activitiesidarray.split(/[.,!,?]/);
      buildacts();
    }
  }
  function buildacts() {
    for (var i = 0; i < x.length; i++) {
      if (x.length > 0) {
        getlist(x[i]);
      }
    }
  }
}

//AutoSave Function
function autosaveact() {
  if (autosave && accessToken.length > 5) {
    let activitiesidarray = JSON.stringify(window.localStorage.getItem('savedactivites'));
    let profileJson = {
      activitiesidarray,
    };
    let auth = '';
    const query = `
	query($userName: String) {User(name: $userName){about}}`;
    var variables = {
      userName: username,
    };
    var url = 'https://graphql.anilist.co',
      options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          query: query,
          variables: variables,
        }),
      };
    function handleResponse(e) {
      return e.json().then(function (n) {
        return e.ok ? n : Promise.reject(n);
      });
    }
    fetch(url, options).then(handleResponse).then(handleData);
    function handleData(data) {
      auth = data.data.User.about;
      let jsonMatch = (auth || '').match(/\[\]\(actjson([A-Za-z0-9+\/=]+)\)/g);
      let customcssmatch = (auth || '').match(/\[\]\(json([A-Za-z0-9+\/=]+)\)/);
      let customcssmatched;
      if (customcssmatch) {
        customcssmatched = customcssmatch[0];
      } else {
        customcssmatched = '';
      }
      let newDescription = '';
      if (jsonMatch) {
        newDescription =
          customcssmatched +
          '[](actjson' +
          LZString.compressToBase64(JSON.stringify(profileJson)) +
          ')' +
          (auth || '').replace(/\[\]\(actjson([A-Za-z0-9+\/=]+)\)/, '').replace(/\[\]\(json([A-Za-z0-9+\/=]+)\)/, '');
      } else {
        newDescription =
          customcssmatched + '[](actjson' + LZString.compressToBase64(JSON.stringify(profileJson)) + ')' + (auth || '').replace(/\[\]\(json([A-Za-z0-9+\/=]+)\)/, '');
      }
      authAPIcall(
        `mutation($about: String){UpdateUser(about: $about){about}}`,
        {
          about: newDescription,
        },
        function (data) {
          if (!data) {
            return;
          }
        },
      );
    }
  }
}

//Create Main Div
function creatediv() {
  button.setAttribute('class', 'el-dropdown-menu__item active');
  var listDiv2 = create(
    'div',
    {
      class: 'maindiv',
      id: 'listDiv2',
    },
    '<b>' + button.innerText + '</b>',
  );
  let expandbtn = create('button', {
    class: 'mainbtns',
    id: 'expandbtn',
  });
  let settingsbtn = create('button', {
    class: 'mainbtns',
    id: 'settingsbtn',
  });
  let closebtn = create('button', {
    class: 'mainbtns',
    id: 'closedivbtn',
  });
  expandbtn.insertBefore(svg.expand.cloneNode(true), expandbtn.children[0]);
  settingsbtn.insertBefore(svg.gear.cloneNode(true), settingsbtn.children[0]);
  closebtn.insertBefore(svg.xmark.cloneNode(true), closebtn.children[0]);
  expandbtn.onclick = () => {
    expandDiv();
  };
  settingsbtn.onclick = () => {
    settingsDiv();
  };
  closebtn.onclick = () => {
    closeDiv();
  };
  var list = document.querySelector('.activity-feed-wrap + div');
  listDiv2.append(expandbtn, settingsbtn, closebtn);
  list.insertBefore(listDiv2, list.children[0]);
  var activitydataDiv = create('div', {
    class: 'activitydataDiv',
    id: 'activitydataDiv',
  });
  listDiv2.appendChild(activitydataDiv);
  if (!accessToken) {
    let loginLink = create(
      'a',
      {
        class: 'mainbtns',
        id: 'signIn',
        href: 'https://anilist.co/api/v2/oauth/authorize?client_id=12455&response_type=token',
      },
      '<b>Sign In</b>',
    );
    listDiv2.insertBefore(loginLink, listDiv2.children[1]);
  }
}

//Export Activities
function saveAs(data, fileName, pureText) {
  let link = create2('a');
  document.body.appendChild(link);
  let json = pureText ? data : JSON.stringify(data);
  let blob = new Blob([json], {
    type: 'octet/stream',
  });
  let url = window.URL.createObjectURL(blob);
  link.href = url;
  link.download = fileName;
  link.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(link);
}

//Settings Div
function settingsDiv() {
  settings = !settings;
  if (settings) {
    let settingDiv = create(
      'div',
      {
        class: 'maindiv',
        id: 'settingDiv',
      },
      '<b>Settings</b>',
    );
    let importBtn = create('input', {
      class: 'mainbtns',
      id: 'importBtn',
      type: 'button',
      value: 'Import Saved Activites',
    });
    let exportBtn = create(
      'a',
      {
        class: 'mainbtns',
        id: 'exportBtn',
      },
      '<b>Export Saved Activites</b>',
    );
    exportBtn.onclick = function () {
      let activitiesidarray = window.localStorage.getItem('savedactivites');
      let export_activities = '[](actjson' + LZString.compressToBase64(JSON.stringify(activitiesidarray)) + ')';
      if (username && activitiesidarray !== null && activitiesidarray !== '') {
        saveAs(export_activities, 'ActivitySaver' + '_activities_' + username + '.json');
      } else {
        exportBtn.innerText = 'Error: The list is empty.';
        delay(3000).then(() => (exportBtn.innerText = 'Export Saved Activites'));
      }
    };
    importBtn.onclick = function () {
      importBtn.setAttribute('type', 'file');
      importBtn.setAttribute('name', 'json');
      importBtn.setAttribute('accept', 'application/json');
      importBtn.oninput = function () {
        let reader = new FileReader();
        reader.readAsText(importBtn.files[0], 'UTF-8');
        reader.onload = function (evt) {
          let data = '';
          try {
            data = JSON.parse(evt.target.result);
            let datamatch = data.match(/\[\]\(actjson([A-Za-z0-9+\/=]+)\)/);
            if (datamatch && data !== '[](actjsonETI=)') {
              let data2 = data.replace(/\[\]\(actjson([A-Za-z0-9+\/=]+)\)/, '$1');
              let data3 = JSON.parse(LZString.decompressFromBase64(data2));
              let data4 = JSON.stringify(data3)
                .replace(/\\*"|\[|\]/g, '')
                .split(/[.,!,?]/);
              window.localStorage.setItem('savedactivites', data4);
            } else {
              importBtn.setAttribute('type', 'button');
              importBtn.removeAttribute('accept');
              importBtn.removeAttribute('name');
              importBtn.value = 'Error: not valid backup file.';
              delay(3000).then(() => (importBtn.value = 'Import Saved Activites'));
              return;
            }
            if (autosave) {
              autosaveact();
              if (activitydataDiv) {
                delay(1000).then(() => buildactivity());
              }
            }
            importBtn.setAttribute('type', 'button');
            importBtn.removeAttribute('accept');
            importBtn.removeAttribute('name');
            buildactivity();
            importBtn.value = 'Activites Imported!';
            delay(3000).then(() => (importBtn.value = 'Import Saved Activites'));
          } catch (e) {
            importBtn.setAttribute('type', 'button');
            importBtn.removeAttribute('accept');
            importBtn.removeAttribute('name');
            importBtn.value = 'Error: not valid backup file.';
            delay(3000).then(() => (importBtn.value = 'Import Saved Activites'));
            return;
          }
        };
      };
    };
    let SavetoBtn = create(
      'a',
      {
        class: 'mainbtns',
        id: 'SavetoBtn',
      },
      '<b>Auto Backup Activities to Profile</b>',
    );
    SavetoBtn.classList.toggle('btn-active', JSON.parse(localStorage.getItem('actautosave')));
    if (accessToken.length < 5) {
      localStorage.setItem('actautosave', autosave);
      SavetoBtn.classList.toggle('btn-active', JSON.parse(localStorage.getItem('actautosave')));
    }
    SavetoBtn.onclick = function () {
      if (accessToken.length > 5) {
        autosaveact();
        autosave = !autosave;
        localStorage.setItem('actautosave', autosave);
        SavetoBtn.classList.toggle('btn-active', JSON.parse(localStorage.getItem('actautosave')));
      } else {
        SavetoBtn.innerText = 'Error: Token not found. Please Sign in.';
        delay(3000).then(() => (SavetoBtn.innerText = 'Auto Backup Activities to Profile'));
      }
    };
    listDiv2.insertBefore(settingDiv, listDiv2.children[1]);
    settingDiv.append(importBtn, exportBtn, SavetoBtn);
  } else {
    if (document.getElementById('settingDiv')) {
      document.getElementById('settingDiv').remove();
    }
  }
}

//Expand Button Function
function expandDiv() {
  expanded = !expanded;
  if (expanded) {
    let x = document.querySelector('.container');
    x.insertBefore(listDiv2, x.children[0]);
    expandbtn.innerHTML = '';
    expandbtn.insertBefore(svg.compress.cloneNode(true), expandbtn.children[0]);
    listDiv2.setAttribute('class', 'maindiv expanded');
    activitydataDiv.setAttribute('class', 'activitydataDiv expanded2');
  } else {
    let x = document.querySelector('.activity-feed-wrap + div');
    x.insertBefore(listDiv2, x.children[0]);
    expandbtn.innerHTML = '';
    expandbtn.insertBefore(svg.expand.cloneNode(true), expandbtn.children[0]);
    listDiv2.className = listDiv2.className.replace(/(?:^|\s)expanded(?!\S)/g, '');
    activitydataDiv.className = activitydataDiv.className.replace(/(?:^|\s)expanded2(?!\S)/g, '');
  }
}

//Get Saved Divs
function getSavedDiv() {
  active = !active;
  let activefilter = document.querySelector('li.el-dropdown-menu__item.active');
  if (activefilter) {
    delay(1000).then(() => (activefilter.className = activefilter.className.replace(/(?:^|\s)active(?!\S)/g, '')));
  }
  if (active) {
    creatediv();
    buildactivity();
  }
  if (!active) {
    closeDiv();
  }
}

//Close Button Function
function closeDiv() {
  var list = document.querySelectorAll('li:nth-child(1)');
  button.setAttribute('class', 'el-dropdown-menu__item');
  listDiv2.remove();
  active = false;
}

//Save Activity Button Function
function addSavetoActivities() {
  var ActivitySave = false;
  if (!/^\/(home|user|activity)\/?([\w-]+)?\/?$/.test(location.pathname)) {
    return;
  }
  setTimeout(addSavetoActivities, 500);
  let activityCollection = document.querySelectorAll('.activity-extras-dropdown');
  activityCollection.forEach(function (activity) {
    if (!hasOwn(activity, 'ActivitySave')) {
      activity.ActivitySave = true;
      let activitySave = create(
        'a',
        {
          dataIcon: 'link',
          class: 'saveActivity el-dropdown-menu__item',
          id: 'saveActivity',
        },
        '<b>Save Activity</b>',
      );
      activitySave.onclick = function () {
        let el = activitySave;
        let id = el.parentElement.children[0].href.split('/')[4];
        el.click();
        el.click();
        el.onclick = () => {
          el.lastElementChild.innerText = 'Saved!';
          let activitiesidarray = window.localStorage.getItem('savedactivites');
          if (activitiesidarray !== null) {
            let x = activitiesidarray.split(/[.,!,?]/);
            for (var i in x) {
              if (x[i] == id) {
                x.splice(i, 1);
                break;
              }
            }
            mainarray = x;
          }
          var id = el.parentElement.children[0].href.split('/')[4];
          for (var i = 0; i <= mainarray.length; i++) {
            if (id == mainarray[i]) {
              el.lastElementChild.innerText = 'Already Saved!';
              return;
            }
          }
          mainarray.push(id);
          localStorage.setItem('savedactivites', [mainarray]);
          let activitydataDiv = document.getElementById('activitydataDiv');
          if (autosave) {
            autosaveact();
            if (activitydataDiv) {
              delay(1000).then(() => buildactivity());
            }
          } else {
            if (activitydataDiv) {
              buildactivity();
            }
          }
        };
      };
      if (activity.closest('.activity-text') || activity.closest('.activity-message')) {
        activity.append(activitySave);
        activitySave.insertBefore(svg.pinned.cloneNode(true), activitySave.children[0]);
      }
    }
  });
}

//MakeHTML saved Activity
let actfixtext = '';
function htmlfix(text) {
  let acttextfix = text
    .replace(/((?:(?:https?:)?(?:\/\/)?)(?:(?:www)?\.)?youtube\.(?:.+?)\/(?:(?:watch\?v=))[a-zA-Z0-9_-]{11}).*(&list.*(\n)|).*(\))/i, '$1$4')
    .replace(/youtube\(+((?!https:).*).*\)/gim, ' youtube(https://www.youtube.com/watch?v=$1)')
    .replace(/(~~~)/g, ' ' + '$1' + ' ')
    .replace(/(__)([A-Za-z0-9\ ,.-<>\]*[A-Za-z0-9\ ,.-].*?(\s*))(__)/g, '<strong>' + '$2' + '</strong>')
    .replace(/((?<!\[)\[)(.*?)(]).*?((?<!\()\()(.*?)(\))/gm, '<a href=' + '$5' + '>' + '$2' + '</a>')
    .replace(/``([\s\S]*?)/g, '<code></code>')
    .replace(/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/gm, '<hr>')
    .replace(/(img.*)[\s\S]\/*?(.*())/g, (imgfix) => {
      let imgfixed = imgfix.replace(/(\r\n|\n|\r)/g, '');
      return imgfixed;
    })
    .replace(/youtube.(h).((.*?).*\))/gi, ' ![](ht$2')
    .replace(/(?<!\(|"|=)\b(https:\/\/)(anilist\.co\/(anime|manga)\/)([0-9]+).([^\W]+.*?\/|[^\s]+)/gm, (embedlink) => {
      let embedlinked = embedlink.match(/(?<!\(|"|=)\b(https:\/\/)(anilist\.co\/(anime|manga)\/)([0-9]+).([^\W]+.*?\/|[^\s]+)/gm);
      return "<a class='embedLink' href=\"" + embedlinked + '">' + '</a>' + '</br>';
    });
  function spoiler() {
    var actspoiled = false;
    let actspoiler = document.querySelectorAll('.activitydata span.markdown_spoiler');
    actspoiler.forEach(function (spoilers) {
      if (!hasOwn(spoilers, 'actspoiled')) {
        spoilers.actspoiled = true;
        let contspoiler = create('span', {
          class: 'markdown_spoiler_cont',
        });
        let showspoiler = create('span', {
          class: 'markdown_spoiler_show',
        });
        showspoiler.innerHTML = 'Spoiler, click to view';
        contspoiler.innerHTML = spoilers.innerHTML;
        contspoiler.style.display = 'none';
        spoilers.innerHTML = '';
        spoilers.insertBefore(showspoiler, spoilers.children[0]);
        spoilers.append(contspoiler);
        showspoiler.onclick = function () {
          if (contspoiler.style.display === 'none') {
            showspoiler.innerHTML = 'Hide';
            contspoiler.style.display = 'block';
          } else {
            showspoiler.innerHTML = 'Spoiler, click to view';
            contspoiler.style.display = 'none';
          }
        };
      }
    });
  }
  function embed() {
    var Activityembedded = false;
    let embeds = document.querySelectorAll('.embedLink');
    embeds.forEach(function (activity) {
      if (!hasOwn(activity, 'Activityembedded')) {
        activity.Activityembedded = true;
        var id = activity.href.split('/')[4];
        if (id !== undefined) {
          getanime(id);
          function getanime(embedid) {
            var query = `query ($id: Int, $page: Int) {Page (page: $page) {media (id: $id) {type format status startDate {year} endDate {year}	season seasonYear averageScore id siteUrl title { romaji } coverImage { large  }}}}`;
            var variables = {
              id: embedid,
              page: 1,
            };
            var url = 'https://graphql.anilist.co',
              options = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json',
                },
                body: JSON.stringify({
                  query: query,
                  variables: variables,
                }),
              };
            function handleResponse(e) {
              return e.json().then(function (n) {
                return e.ok ? n : Promise.reject(n);
              });
            }
            fetch(url, options).then(handleResponse).then(handleData).catch(handleError);
            function handleData(data) {
              let activitySave = create(
                'a',
                {
                  class: 'saveembed',
                },
                '<b>' + data.data.Page.media[0].title.romaji + '</b>',
              );
              let embedimg = create('a', {
                class: 'cover',
                style: {
                  backgroundImage: 'url(' + data.data.Page.media[0].coverImage.large + ')',
                },
              });
              activity.append(activitySave);
              activity.href = data.data.Page.media[0].siteUrl;
              activitySave.insertBefore(embedimg, activitySave.children[0]);
              if (data.data.Page.media[0].averageScore !== null) {
                var avg = ' · ' + data.data.Page.media[0].averageScore + '%';
              } else {
                avg = '';
              }
              if (data.data.Page.media[0].season !== null) {
                var season = ' · ' + data.data.Page.media[0].season + ' ' + data.data.Page.media[0].seasonYear;
              } else {
                season = '';
              }
              let activitySaveDetails = create('a', {
                class: 'saveembedDetails',
              });
              if (data.data.Page.media[0].type === 'MANGA') {
                activitySaveDetails.innerHTML =
                  '<b>' + data.data.Page.media[0].format + ' · ' + data.data.Page.media[0].status + ' · ' + data.data.Page.media[0].startDate.year + avg;
              } else if (data.data.Page.media[0].format === 'MUSIC') {
                activitySaveDetails.innerHTML = '<b>' + data.data.Page.media[0].format + ' · ' + data.data.Page.media[0].endDate.year + avg + '</b>';
              } else {
                activitySaveDetails.innerHTML = '<b>' + data.data.Page.media[0].format + season + ' · ' + data.data.Page.media[0].status + avg + '</b>';
              }
              embedimg.nextSibling.append(activitySaveDetails);
              let fix = activitySaveDetails.text.replace(/(_)/g, ' ');
              activitySaveDetails.text = fix;
            }
            function handleError(error) {
              console.error(error);
            }
          }
        }
      }
    });
  }
  DOMPurify.sanitize(acttextfix);
  let fix = acttextfix
    .replace(/(<strong>.*<\/strong>)((\n|)img\d.*\))/gm, '$1' + '<br>' + '$2' + '<br>')
    .replace(/((img.*\d.*\)).*(img\d))/g, '$2' + '<br>' + '$3')
    .replace(/(<br>*[\W]<br>){1,}/g, '')
    .replace(/((https:.*)(<b>).*(<\/b>))/g, '$2')
    .replace(/(<br>)/g, '$1 \n')
    .replace(/((<\/a>)<br> \n (\W))/gm, '$2 $3')
    .replace(/(?<!<\/br>)(\n).*(<a class='embedLink' href=".*">)/gm, '<br>' + '$2')
    .replace(/<br>.*(\n).*(<a href=.*>)/gm, '$2');
  actfixtext = makeHtml(fix)
    .replace(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/gm, '<blockquote>' + '$2' + '</blockquote>')
    .replace(/(?<![a-z&])#/g, '')
    .replace(/(<img.*)(<a)/g, '$1<br>$2')
    .replace(/\&lt;/g, '<')
    .replace(/\&gt;/g, '>')
    .replace(/(.*<img\b[^>]*>).*(\s*<a\b[^>]*>[^<]*<\/a>)/g, '$1' + '<br>' + '$2');
  delay(10).then(() => spoiler());
  delay(10).then(() => embed());
}

//Get Activity from API
function getlist(id) {
  if (id === '') {
    return;
  }
  var query = `query($id: Int){Activity(id: $id){
    ... on TextActivity{id type siteUrl createdAt text user{name avatar{medium}}likes{name}replies{id createdAt text user{name avatar{medium}}likes{name}}}
		... on MessageActivity{id type siteUrl createdAt text: message user: messenger{name avatar{medium}}recipient{name}likes{name}replies{id createdAt text user{name avatar{medium}}likes{name}}}}}`;
  var variables = {
      id: id,
    },
    url = 'https://graphql.anilist.co',
    options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: query,
        variables: variables,
      }),
    };
  fetch(url, options).then(handleResponse).then(handleData).catch(handleError);
  let APIlimit = 90,
    APIcallsUsed = 0,
    APIcallsUsed_shortTerm = 0,
    pending = {},
    APIcounter = setInterval(function () {
      APIcallsUsed = 0;
    }, 6e4),
    APIcounter2 = setInterval(function () {
      APIcallsUsed_shortTerm = 0;
    }, 1e4);
  function handleResponse(e) {
    (APIlimit = e.headers.get('x-ratelimit-limit')), (APIcallsUsed = APIlimit - e.headers.get('x-ratelimit-remaining'));
    try {
      return e.json().then(function (t) {
        return e.ok ? t : Promise.reject(t);
      });
    } catch (t) {
      throw (console.warn(t, e), t);
    }
  }
  function handleData(data) {
    let activity = data.data.Activity;
    let id = activity.id;
    let acttext = activity.text;
    if (active) {
      let activityinner = create('div', {
        class: 'activityinner',
      });
      let aimg = create('a', {
        class: 'activitydataimg',
        id: 'activitydataimg',
        href: 'https://anilist.co/user/' + activity.user.name,
        style: {
          backgroundImage: 'url(' + activity.user.avatar.medium + ')',
        },
      });
      let actusername = create(
        'a',
        {
          class: 'activitydatausername',
          id: 'activitydatausername',
          href: 'https://anilist.co/user/' + activity.user.name,
        },
        '' + activity.user.name,
      );
      let activitydiv = create('div', {
        class: 'activitydata',
        id: activity.id,
      });
      let actlinks = create('a', {
        class: 'activitylinksdiv',
      });
      let actlink = create('a', {
        class: 'activitylink',
        id: activity.id,
        href: activity.siteUrl,
      });
      let actremove = create('a', {
        class: 'activitylink',
        id: activity.id,
      });
      actremove.onclick = () => {
        removeactivity(id);
      };
      let userdiv = create('div', {
        class: 'activitydatauserdiv',
        id: activity.id,
      });
      if (acttext === undefined) {
        removeactivity(id);
        return;
      }
      if (acttext !== undefined) {
        htmlfix(acttext);
        activityinner.innerHTML = actfixtext;
      }
      activitydataDiv.appendChild(activitydiv);
      activitydiv.appendChild(activityinner);
      activitydiv.appendChild(userdiv);
      aimg.appendChild(actusername);
      activitydiv.appendChild(actlinks);
      actlinks.append(actlink, actremove);
      actlink.insertBefore(svg.link.cloneNode(true), actlink.children[0]);
      actremove.insertBefore(svg.cross.cloneNode(true), actremove.children[0]);
      activitydiv.insertBefore(userdiv, activitydiv.children[0]);
      userdiv.append(aimg, actlinks);
      let timeWrapper = create2('div', 'acttime', false, actusername);
      let time = nativeTimeElement(activity.createdAt);
      timeWrapper.appendChild(time);
      let actions = create2('div', 'actions', false, activitydiv);
      let actionReplies = create2('a', ['action', 'replies'], false, actions);
      let replyCount = create2('span', ['count'], activity.replies.length || '', actionReplies);
      replyCount.appendChild(document.createTextNode(' '));
      actionReplies.appendChild(svg.reply.cloneNode(true));
      actions.appendChild(document.createTextNode(' '));
      let actionLikes = create2('div', ['action', 'likes'], false, actions);
      actionLikes.title = activity.likes.map((like) => like.name).join('\n');
      let likeWrap = create2('div', ['like-wrap', 'activity'], false, actionLikes);
      let likeButton = create2('div', 'button', false, likeWrap);
      let likeCount = create2('span', 'count', activity.likes.length || '', likeButton);
      likeButton.appendChild(document.createTextNode(' '));
      likeButton.appendChild(svg.likeNative.cloneNode(true));
      if (activity.likes.findIndex((thing) => thing.name === username) !== -1) {
        likeButton.classList.add('liked');
      }
      if (accessToken) {
        likeButton.onclick = function () {
          let indexPlace = activity.likes.findIndex((thing) => thing.name === username);
          if (indexPlace === -1) {
            activity.likes.push({
              name: username,
            });
            likeButton.classList.add('liked');
          } else {
            activity.likes.splice(indexPlace, 1);
            likeButton.classList.remove('liked');
          }
          likeCount.innerText = activity.likes.length || '';
          authAPIcall(
            'mutation($id:Int){ToggleLike(id:$id,type:ACTIVITY){id}}',
            {
              id: activity.id,
            },
            function (data) {
              if (!data) {
                authAPIcall(
                  'mutation($id:Int){ToggleLike(id:$id,type:ACTIVITY){id}}',
                  {
                    id: activity.id,
                  },
                  (data) => {},
                );
              }
            },
          );
        };
      }
      let replyWrap = create2('div', 'reply-wrap', false, activitydiv, 'display:none;');
      actionReplies.onclick = function () {
        if (replyWrap.style.display === 'none') {
          replyWrap.style.display = 'block';
        } else {
          replyWrap.style.display = 'none';
        }
      };
      let activityReplies = create2('div', 'activity-replies', false, replyWrap);
      activity.replies.forEach((rep) => {
        let reply = create2('div', 'reply', false, activityReplies);
        let header = create2('div', 'header', false, reply);
        let replyAvatar = create2('a', 'activitydataimg', false, header);
        replyAvatar.href = '/user/' + rep.user.name;
        replyAvatar.style.backgroundImage = `url("${rep.user.avatar.medium}")`;
        header.appendChild(document.createTextNode(' '));
        let repName = create2('a', 'name', rep.user.name, header);
        repName.href = '/user/' + rep.user.name;
        let corner = create2('div', 'actions', false, header);
        let replyActionLikes = create2('div', ['action', 'likes'], false, corner, 'display: inline-block');
        const randomDataHate = 'data-v-977827fa';
        let replyLikeWrap = create2('div', 'like-wrap', false, replyActionLikes);
        let replyLikeButton = create2('div', 'button', false, replyLikeWrap);
        let replyLikeCount = create2('span', 'count', rep.likes.length || '', replyLikeButton);
        replyLikeButton.appendChild(document.createTextNode(' '));
        replyLikeButton.appendChild(svg.likeNative.cloneNode(true));
        replyLikeButton.title = rep.likes.map((a) => a.name).join('\n');
        if (rep.likes.some((like) => like.name === username)) {
          replyLikeButton.classList.add('liked');
        }
        if (accessToken) {
          replyLikeButton.onclick = function () {
            authAPIcall(
              'mutation($id:Int){ToggleLike(id:$id,type:ACTIVITY_REPLY){id}}',
              {
                id: rep.id,
              },
              function (data2) {
                if (!data2) {
                  authAPIcall(
                    'mutation($id:Int){ToggleLike(id:$id,type:ACTIVITY_REPLY){id}}',
                    {
                      id: rep.id,
                    },
                    function (data3) {},
                  );
                }
              },
            );
            if (rep.likes.some((like) => like.name === username)) {
              rep.likes.splice(
                rep.likes.findIndex((user) => user.name === username),
                1,
              );
              replyLikeButton.classList.remove('liked');
              if (rep.likes.length > 0) {
                replyLikeButton.querySelector('.count').innerText = rep.likes.length;
              } else {
                replyLikeButton.querySelector('.count').innerText = '';
              }
            } else {
              rep.likes.push({
                name: username,
              });
              replyLikeButton.classList.add('liked');
              replyLikeButton.querySelector('.count').innerText = rep.likes.length;
            }
          };
          if (rep.user.name === username) {
            corner.style.cssText = 'width: 165px;left: calc(100% - 175px);top: 6px';
            let replyEdit = create('div', {
              class: 'mainbtns',
              id: 'editreply',
              style: {
                background: 'transparent',
                color: 'rgb(var(--color-blue-dim))',
              },
            });
            replyEdit.insertBefore(svg.edit.cloneNode(true), replyEdit.children[0]);
            corner.insertBefore(replyEdit, corner.children[0]);
            let active = true;
            replyEdit.onclick = function () {
              if (active) {
                let statusInput = create2('div', 'inputbox', false, 'text-align: -webkit-center;');
                let inputArea = create2('textarea', 'el-textarea__inner', false, statusInput);
                let inputButtons = create2('div', 'inputButtons', false, statusInput, 'margin-bottom:10px;float: right;padding: 20px 2% 15px 15px;');
                let cancelButton = create2(
                  'div',
                  ['replybutton', 'cancel'],
                  'Cancel',
                  inputButtons,
                  'background: rgb(var(--color-foreground));display:none;color: rgb(159, 173, 189);',
                );
                let publishButton = create2('div', 'replybutton', 'Publish', inputButtons, 'display:none;');
                inputArea.value = rep.text;
                reply.parentNode.insertBefore(statusInput, reply.nextSibling);
                inputArea.style.cssText = 'height:0px';
                statusInput.style.cssText = 'display: flow-root';
                inputArea.onfocus = function () {
                  cancelButton.style.display = 'inline';
                  publishButton.style.display = 'inline';
                };
                inputArea.addEventListener('keydown', autosize);
                function autosize() {
                  var el = this;
                  setTimeout(function () {
                    el.style.cssText = 'height:auto';
                    el.style.cssText = 'height:' + el.scrollHeight + 'px';
                  }, 0);
                }
                cancelButton.onclick = function () {
                  inputArea.value = '';
                  inputArea.style.cssText = 'height:0px';
                  cancelButton.style.display = 'none';
                  publishButton.style.display = 'none';
                  active = true;
                  statusInput.remove();
                };
                publishButton.onclick = function () {
                  authAPIcall(
                    `mutation($text: String,$Id: Int){id text(asHtml: true)}}`,
                    {
                      text: inputArea.value,
                      Id: rep.id,
                    },
                    (data) => {
                      if (data) {
                        delay(1000).then(() => buildactivity());
                      }
                    },
                  );
                };
                cancelButton.style.display = 'none';
                publishButton.style.display = 'none';
              }
              active = false;
            };
            let replyRemove = create('div', {
              class: 'mainbtns',
              id: 'removereply',
              style: {
                background: 'transparent',
                transform: 'translateX(2px)',
                color: 'rgb(var(--color-blue-dim))',
              },
            });
            replyRemove.insertBefore(svg.xmark.cloneNode(true), replyRemove.children[0]);
            corner.insertBefore(replyRemove, corner.children[0]);
            replyRemove.onclick = function () {
              authAPIcall(
                `mutation($Id: Int){DeleteActivityReply(id: $Id) {deleted}}`,
                {
                  Id: rep.id,
                },
                (data) => {
                  if (data) {
                    delay(1000).then(() => buildactivity());
                  }
                },
              );
            };
          }
        }
        let replyActionTime = create2('div', ['action', 'time'], false, corner, 'display: inline-block');
        let replyTime = nativeTimeElement(rep.createdAt);
        replyActionTime.appendChild(replyTime);
        let replyMarkdown = create2('div', 'reply-markdown', false, reply);
        let markdown = create2('div', 'markdown', false, replyMarkdown);
        let repText = rep.text;
        if (repText !== undefined) {
          htmlfix(repText);
          markdown.innerHTML = actfixtext;
        }
      });
      if (accessToken) {
        let statusInput = create2('div', false, false, replyWrap, 'padding-top:10px; text-align: -webkit-center;');
        let inputArea = create2('textarea', 'el-textarea__inner', false, statusInput);
        let inputButtons = create2('div', 'inputButtons', false, statusInput, 'float: right;padding: 20px 2% 15px 15px;');
        let cancelButton = create2('div', ['replybutton', 'cancel'], 'Cancel', inputButtons, 'background: rgb(var(--color-foreground));display:none;color: rgb(159, 173, 189);');
        let publishButton = create2('div', 'replybutton', 'Publish', inputButtons, 'display:none;');
        inputArea.placeholder = 'Write a reply..';
        inputArea.style.cssText = 'height:0px';
        inputArea.onfocus = function () {
          cancelButton.style.display = 'inline';
          publishButton.style.display = 'inline';
        };
        inputArea.addEventListener('keydown', autosize);
        function autosize() {
          var el = this;
          setTimeout(function () {
            if (inputArea.scrollHeight > 54) {
              el.style.cssText = 'height:auto';
              el.style.cssText = 'height:' + el.scrollHeight + 'px';
            }
            if (inputArea.value.length < 20) {
              el.style.cssText = 'height:0';
            }
          }, 0);
        }
        cancelButton.onclick = function () {
          inputArea.value = '';
          inputArea.style.cssText = 'height:0px';
          cancelButton.style.display = 'none';
          publishButton.style.display = 'none';
        };
        publishButton.onclick = function () {
          authAPIcall(
            `mutation($text: String,$activityId: Int){
									SaveActivityReply(text: $text,activityId: $activityId){
										id
										user{name}
										likes{name}
										text(asHtml: true)
										createdAt
									}
								}`,
            {
              text: inputArea.value,
              activityId: activity.id,
            },
            (data) => {
              if (data) {
                delay(1000).then(() => buildactivity());
              }
            },
          );
        };
        inputArea.value = '';
        cancelButton.style.display = 'none';
        publishButton.style.display = 'none';
      }
    }
  }
  function handleError(e) {
    console.log(e);
    if (e.errors) {
      if (e.errors.some((thing) => thing.message === 'Not Found.')) {
        removeactivity(id);
      }
    }
  }
}

//Check Token
function check() {
  let current = '';
  let mainLoop = setInterval(() => {
    if (document.URL !== current) {
      let oldURL = current + '';
      current = document.URL;
      if (/^https:\/\/anilist\.co\/home#access_token/.test(current)) {
        let tokenList = location.hash.split('&').map((a) => a.split('='));
        accessToken = tokenList[0][1];
        localStorage.setItem('savetkn', LZString.compressToBase64(JSON.stringify(accessToken)));
        location.replace(location.protocol + '//' + location.hostname + location.pathname);
      }
    }
  }, 200);
}

//Add Save Button to Activities
var target = document.querySelector('body');
var observer = new MutationObserver(function (mutationsList, observer) {
  for (var mutation of mutationsList) {
    if (/^\/(home)\/?([\w-]+)?\/?$/.test(location.pathname) && mutation.addedNodes[0] !== undefined && mutation.addedNodes[0].className === 'activity-entry activity-text') {
      addSavetoActivities();
    }
    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
      if (oldHref != document.location.href) {
        oldHref = document.location.href;
        active = false;
        start();
        set(button, {
          class: 'el-dropdown-menu__item',
        });
      }
    }
  }
});
observer.observe(target, {
  childList: true,
  subtree: true,
});
