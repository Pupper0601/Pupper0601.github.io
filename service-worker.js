if(!self.define){let e,i={};const c=(c,s)=>(c=new URL(c+".js",s).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let a={};const d=e=>c(e,r),o={module:{uri:r},exports:a,require:d};i[r]=Promise.all(s.map((e=>o[e]||d(e)))).then((e=>(n(...e),a)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/algolia-search.css",revision:"ab6090701d170075a9adbd7f46543396"},{url:"css/custom.css",revision:"69e61ca78b6841f8b5298fb3fd6b21fd"},{url:"css/index.css",revision:"e3aa1bee7b21800fcab7434bb03f0c07"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"404.html",revision:"3c45c5a144421ca94f687283849540a0"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"53aaa1f5e7f59ab1acdf7621f98a48c0"},{url:"js/main.js",revision:"66aed1887fe76b01f76b264d5e09b6f5"},{url:"js/Meting2.min.js",revision:"a87fa140677f47da4405d95cbad59ef0"},{url:"js/notice.js",revision:"ad389e7b5a5f72bc52e82d201d90ddf7"},{url:"js/search/algolia.js",revision:"f7756a4bdf6e991e41bb38591a9df860"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/specialDay.js",revision:"2eb3696b2d92be190886be3607901b19"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/utils.js",revision:"9d795b0b1ec3ca6dd9129cd3080ee648"},{url:"anzhiyu/random.js",revision:"40b8aa997fdbf1b1eb5bbe7dca8ffa01"},{url:"img/404.gif",revision:"6d381fdf67e64467e4ea79f3a3dd3c23"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/favicon.ico",revision:"463fd720116f4237a0dbf0330c144bf9"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/android-chrome-192x192.png",revision:"040bf291775e55e847b889d9f51d9b3c"},{url:"img/siteicon/android-chrome-512x512.png",revision:"d12aec97fa1acf5f74351b331c5b6e8a"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/apple-touch-icon.png",revision:"c6112ed8ce74e654516dc8cecb5c7fcc"},{url:"img/siteicon/favicon-16x16.png",revision:"c60b482c8df51f09964d304725cee2a1"},{url:"img/siteicon/favicon-32x32.png",revision:"dd9bbb1ee4f555f5cbee4f8b3ece585f"},{url:"img/siteicon/favicon.ico",revision:"178168bcd9a9068eb59879717a9c8773"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"manifest.json",revision:"74077fb2332df8d1c7996b6f7d1a9bb1"},{url:"/",revision:"index-20230902233314941"},{url:"music/",revision:"music-20230902233314941"},{url:"about/",revision:"about-20230902233314941"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new e.CacheFirst,"GET")}));