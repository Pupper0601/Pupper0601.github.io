if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let n={};const d=e=>s(e,r),o={module:{uri:r},exports:n,require:d};i[r]=Promise.all(c.map((e=>o[e]||d(e)))).then((e=>(a(...e),n)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/algolia-search.css",revision:"ab6090701d170075a9adbd7f46543396"},{url:"css/custom.css",revision:"9b9d8833d43f060242f540eac156948a"},{url:"css/index.css",revision:"923d38fff8eea0472ee877d89b6def83"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/view.css",revision:"5918a2001f63a147f7f8a843bb4ff6dd"},{url:"404.html",revision:"711b7dc150fed612641cfa1d03d69430"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"586c1eecf6617180a50d419def5fd4c0"},{url:"js/main.js",revision:"0ca6e958debf5d18e10ead8c0c00191c"},{url:"js/Meting2.min.js",revision:"ea0f38f316a5467620048ef830f8c9c4"},{url:"js/notice.js",revision:"ad389e7b5a5f72bc52e82d201d90ddf7"},{url:"js/search/algolia.js",revision:"aa4dc3c7abb6d6c71f4dec756825d36a"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/specialDay.js",revision:"9be27afa2054ef91822861e79fec6a09"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/utils.js",revision:"ff1698bf9acd5e31d3ec6daaab816ee0"},{url:"js/view.js",revision:"fb3273101bc0c4ea9f90a33d51fadb4b"},{url:"anzhiyu/random.js",revision:"0ee29f3ae7aabc0f317a6cf0a92e74f4"},{url:"img/404.gif",revision:"d31b97f01733c482002d81d2822870a8"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/favicon.ico",revision:"463fd720116f4237a0dbf0330c144bf9"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/android-chrome-192x192.png",revision:"ef832867b6955fcaae8c6b03c85335d7"},{url:"img/siteicon/android-chrome-512x512.png",revision:"2a45f2f0aa8e215bc905cf16107895bb"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/apple-touch-icon.png",revision:"e034047392d845b262504f14fa381898"},{url:"img/siteicon/favicon-16x16.png",revision:"263a4ce6ca2e3fee07926384bdcda12c"},{url:"img/siteicon/favicon-32x32.png",revision:"bd932f76f1b134a4b06024a7e76e5a32"},{url:"img/siteicon/favicon.ico",revision:"7ad09a8fc8a14462f9f5172456b038fe"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"manifest.json",revision:"74077fb2332df8d1c7996b6f7d1a9bb1"},{url:"/",revision:"index-20240302005547276"},{url:"music/",revision:"music-20240302005547276"},{url:"about/",revision:"about-20240302005547276"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new e.CacheFirst,"GET")}));