if(!self.define){let e,i={};const n=(n,a)=>(n=new URL(n+".js",a).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let s={};const d=e=>n(e,c),b={module:{uri:c},exports:s,require:d};i[c]=Promise.all(a.map((e=>b[e]||d(e)))).then((e=>(r(...e),s)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/index.css",revision:"b29ec5fdd0a67b19edb2602c60e2e325"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"404.html",revision:"41335ef6057b52913b658947e80a20d8"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"586c1eecf6617180a50d419def5fd4c0"},{url:"js/main.js",revision:"0ca6e958debf5d18e10ead8c0c00191c"},{url:"js/Meting2.min.js",revision:"26dfbda0f497e4498adcb96571fcb5c7"},{url:"js/search/algolia.js",revision:"aa4dc3c7abb6d6c71f4dec756825d36a"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/utils.js",revision:"4d19356fc2c99644dba960395f9e5bf6"},{url:"anzhiyu/random.js",revision:"b05d306d9db82dfb8d1196fb581a572d"},{url:"img/404.gif",revision:"7e494ccd6d7cd36024ce3404f6343c51"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/favicon.ico",revision:"6b47e999ea7e8904af8b692aad0d2b53"},{url:"img/friend_404.gif",revision:"889542da1b44c5da2e38bf6c33b905e8"},{url:"img/link/alias_v1.png",revision:"8ee9d51069c65e29b77c5d3fd3abff84"},{url:"img/link/alias_v2.png",revision:"bfa561cbe50e0d47d6bbef0adb1a5b19"},{url:"img/link/black-line.svg",revision:"0269364d7ba432dfc97589e9da3ffa21"},{url:"img/link/blue-line.svg",revision:"07827fe2dab6330ecbb0dc3ebbea2cea"},{url:"img/link/buoy_v1.png",revision:"7059793041b5de354886b3ec74f483ac"},{url:"img/link/buoy_v2.png",revision:"5dd217d810089d24ff339d544ffacc67"},{url:"img/link/purple-line.svg",revision:"1fe76ef4808bb2e160d22ac0d88d6245"},{url:"img/link/symbol_v1.png",revision:"9e84beb5fb0a1aab0b66f53f617c8b59"},{url:"img/link/symbol_v2.png",revision:"c0a34c3b632ae21dc66c389ef248752b"},{url:"img/siteicon/apple-touch-icon.png",revision:"1e1a25f6dba8a08c5115fc8ab7fb2024"},{url:"img/siteicon/favicon-16x16.png",revision:"fbe2e4f053bfe010b77d0f9317a5a1a9"},{url:"img/siteicon/favicon-32x32.png",revision:"c003607c082e11704ebb0a29b75e2492"},{url:"img/siteicon/favicon.ico",revision:"6b47e999ea7e8904af8b692aad0d2b53"},{url:"img/siteicon/logo-192.png",revision:"a659b6adcfe6069577631a5c1b93f3c5"},{url:"img/siteicon/logo-512.png",revision:"05633f93d832828b1065463138bc37b5"},{url:"manifest.json",revision:"e4c478d5898fbae40ca394fa67fda601"},{url:"/",revision:"index-20240521031032019"},{url:"music/",revision:"music-20240521031032019"},{url:"about/",revision:"about-20240521031032019"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new e.CacheFirst,"GET")}));