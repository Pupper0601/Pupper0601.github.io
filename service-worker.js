if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let n={};const o=e=>a(e,r),d={module:{uri:r},exports:n,require:o};i[r]=Promise.all(s.map((e=>d[e]||o(e)))).then((e=>(c(...e),n)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/index.css",revision:"8e5fef6eca262f25c4e326ce88b7e675"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"404.html",revision:"298b68503aaeccf59bca82f800fe416e"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"586c1eecf6617180a50d419def5fd4c0"},{url:"js/Gold-ingot.js",revision:"24a213b04baba02d0a81ba4b6c950053"},{url:"js/main.js",revision:"0ca6e958debf5d18e10ead8c0c00191c"},{url:"js/Meting2.min.js",revision:"26dfbda0f497e4498adcb96571fcb5c7"},{url:"js/notice.js",revision:"9a87e3d7e22ec6f45579ba80157b0a0c"},{url:"js/search/algolia.js",revision:"aa4dc3c7abb6d6c71f4dec756825d36a"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/specialDay.js",revision:"e80176e1eabf99b237167e00ac35a3d2"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/utils.js",revision:"ff1698bf9acd5e31d3ec6daaab816ee0"},{url:"js/view.js",revision:"fb3273101bc0c4ea9f90a33d51fadb4b"},{url:"anzhiyu/random.js",revision:"e22903f908ba729f765e7853ebeda978"},{url:"img/404.gif",revision:"7e494ccd6d7cd36024ce3404f6343c51"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/favicon.ico",revision:"6b47e999ea7e8904af8b692aad0d2b53"},{url:"img/friend_404.gif",revision:"889542da1b44c5da2e38bf6c33b905e8"},{url:"img/siteicon/apple-touch-icon.png",revision:"1e1a25f6dba8a08c5115fc8ab7fb2024"},{url:"img/siteicon/favicon-16x16.png",revision:"fbe2e4f053bfe010b77d0f9317a5a1a9"},{url:"img/siteicon/favicon-32x32.png",revision:"c003607c082e11704ebb0a29b75e2492"},{url:"img/siteicon/favicon.ico",revision:"6b47e999ea7e8904af8b692aad0d2b53"},{url:"img/siteicon/logo-192.png",revision:"a659b6adcfe6069577631a5c1b93f3c5"},{url:"img/siteicon/logo-512.png",revision:"05633f93d832828b1065463138bc37b5"},{url:"manifest.json",revision:"e4c478d5898fbae40ca394fa67fda601"},{url:"/",revision:"index-20240507073233908"},{url:"music/",revision:"music-20240507073233908"},{url:"about/",revision:"about-20240507073233908"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new e.CacheFirst,"GET")}));