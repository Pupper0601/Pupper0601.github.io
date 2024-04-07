var posts=[];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}window.friend_link_list=[{name:"Hexo",link:"https://hexo.io/zh-cn",avatar:"https://img.pupper.cn/img/202303021647550.svg",descr:"快速、简洁且高效的博客框架",siteshot:"https://img.pupper.cn/img/202303021632033.png"},{name:"Butterfly",link:"https://butterfly.js.org",avatar:"https://img.pupper.cn/img/202303021645407.webp",descr:"一款简洁大方的主题,基于 hexo-theme-melody 开发",siteshot:"https://img.pupper.cn/img/202303021637298.png"},{name:"Twikoo",link:"https://twikoo.js.org/",avatar:"https://twikoo.js.org/assets/logo.5707582f.png",descr:"一个简洁、安全、免费的静态网站评论系统。",siteshot:"https://img.pupper.cn/img/202303021640676.png"},{name:"朋友圈",link:"https://fcircle-doc.yyyzyyyz.cn/#/",avatar:"https://fcircle-doc.yyyzyyyz.cn/fcircle.png",descr:"你是否经常烦恼于友链过多但没有时间浏览？那么友链朋友圈将解决这一痛点。你可以随时获取友链网站的更新内容，并了解友链的活跃情况 。",siteshot:"https://img.pupper.cn/img/20230816131257.png"},{name:"安知鱼主题指南",link:"https://blog.anheyu.com/docs/",avatar:"https://img.pupper.cn/img/202307141534219.png",descr:"生活明朗，万物可爱",siteshot:"https://img.pupper.cn/img/202307141533340.png"},{name:"Akilarの糖果屋",link:"https://akilar.top/",avatar:"https://img.pupper.cn/img/202303021708521.webp",descr:"流水幽吟绕耳边，煦风馨语抚心弦，挥臂欲揽冰钩月，银星斟酌醉人涎。",siteshot:"https://img.pupper.cn/img/202303021705994.png"},{name:"张洪Heo",link:"https://blog.zhheo.com/",avatar:"https://bu.dusays.com/2022/12/28/63ac2812183aa.png",descr:"分享设计与科技生活",siteshot:"https://bu.dusays.com/2023/03/03/6401bcbf1d33b.webp"},{name:"安知鱼",link:"https://blog.anheyu.com/",avatar:"https://img02.anheyu.com/adminuploads/1/2022/09/15/63232b7d91d22.jpg",descr:"生活明朗，万物可爱",siteshot:"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{name:"Fomalhaut🥝",link:"https://www.fomal.cc/",avatar:"https://img.pupper.cn/img/avatar.webp",descr:"再看看那个光点，这是家园，每一个人都在它上面度过了一生✨",siteshot:"https://img.pupper.cn/img/202303021724554.png"},{name:"Mr.喵帕斯",link:"https://blog.mpsxx.top",avatar:"https://cdn.staticaly.com/gh/miaopasixx/picx-images-hosting@master/cq-询问台.168sjup9d000.webp",descr:"熬夜伤身",siteshot:"https://cdn.staticaly.com/gh/miaopasixx/picx-images-hosting@master/网站截屏/image.5s7l78egk7w0.webp"},{name:"怕冷爱上雪",link:"https://blog.4t.pw/",avatar:"https://blog.4t.pw/img/favicon.webp",descr:"千里之行，始于足下。",siteshot:"https://img.pupper.cn/img/202308011553556.webp"},{name:"贰猹の小窝",link:"https://noionion.top/",avatar:"https://img.pupper.cn/img/202303021732350.webp",descr:"用这生命中的每一秒，给自己一个不后悔的未来",siteshot:"https://img.pupper.cn/img/202303021733056.png"},{name:"萌傀儡",link:"https://blhorizon.github.io/",avatar:"https://cdn1.tianli0.top/npm/blogimages/link/avatar.webp",descr:"珍惜现在，趁早摸鱼",siteshot:"https://cdn1.tianli0.top/npm/blogimages/pictures/khdslb.webp"},{name:"屑殇",link:"https://jinghuashang.cn/",descr:"桃李春风一杯酒，江湖夜雨十年灯",avatar:"https://jinghuashang.cn/img/acc.jpg",siteshot:"https://download.tooc.xlj0.com/uploads/56/jinghuashang.webp"},{name:"海阔蓝",link:"https://blog.hklan.top/",avatar:"https://img.hklan.top/cover/%E5%9C%86%E5%A4%B4%E5%83%8F.png",descr:"生而热忱❤️,终也欢洽",siteshot:"https://img.hklan.top/cover/202307212128410.png"},{name:"铭心石刻",link:"https://blog.kouseki.cn/",avatar:"https://blog.kouseki.cn/imgs/avatar.webp",descr:"愿岁并谢，与友长兮",siteshot:"https://blog.kouseki.cn/imgs/siteshot.webp"},{name:"Leonus",link:"https://blog.leonus.cn/",avatar:"https://q1.qlogo.cn/g?b=qq&nk=990320751&s=5",descr:"进一寸有进一寸的欢喜。",rss:"/atom.xml"},{name:"青桔气球",link:"https://blog.qjqq.cn/",avatar:"https://avatar.qjqq.cn/1/646cdb372913c.webp!avatar",descr:"分享网络安全与科技生活",siteshot:"https://avatar.qjqq.cn/1/647571edf20a9.webp!avatar"},{name:"GanSer",link:"https://www.gan1ser.top/",avatar:"https://pic.imgdb.cn/item/63f16cddf144a010070697c8.jpg",descr:"紫箫吟断，素笺恨切",siteshot:"https://pic.imgdb.cn/item/642e735fa682492fccc516df.png"},{name:"老生杂谈的 IT 人",link:"https://www.oldit.cn",avatar:"https://image.oldit.cn/image/author.webp",descr:"老生杂谈，后继有人",siteshot:"https://pic.imgdb.cn/item/642e735fa682492fccc516df.png"},{name:"未知之旅",link:"https://blog.xenosp.cn/",avatar:"https://cravatar.cn/avatar/4EA126708E5063621186D6B5895D2684",descr:"在未知中成长，超越自我",siteshot:"https://image.xenosp.cn/i/2023/09/24/1-1695537794.jpg"},{name:"夜雨柠檬",link:"https://blog.yeyulemon.top/",avatar:"https://imgbed.yeyulemon.top/uploads/652404e068dd8.png",descr:"生于忧患，死于安乐。",siteshot:"https://imgbed.yeyulemon.top/uploads/6524bbe719a3a.png"},{name:"小植同学",link:"https://blog.xiaoztx.top",avatar:"https://blog.xiaoztx.top/img/xiaozhi.jpg",siteshot:"https://static.xiaoztx.top/xiaozhi-blog-static/img/xiaozhi-siteshot.png",descr:"生生不息，好运不止"},{name:"未知之旅",link:"https://blog.xenosp.cn/",avatar:"https://cravatar.cn/avatar/4EA126708E5063621186D6B5895D2684",descr:"在未知中成长，超越自我",siteshot:"https://image.xenosp.cn/i/2023/09/24/1-1695537794.jpg"},{name:"呆鱼",link:"https://daiyu.fun/",avatar:"https://daiyu.fun/img/avatar.png",descr:"Hello World！",screenshot:"https://daiyu.fun/img/screenshot.png"},{name:"Calyee",link:"https://blog.calyee.top/",avatar:"https://blog.calyee.top/img/avatar.jpg",descr:"追求充实，分享快乐",siteshot:"https://blog.calyee.top/img/siteshot.png"},{name:"Naokuo",link:"https://www.naokuo.top",avatar:"https://cdn.cbd.int/naokuo-blog/img/about/avatar-512x512.png",descr:"请给我来亿碗三鲜面",siteshot:"https://cdn.cbd.int/naokuo-blog/img/about/www.naokuo.top.webp"}];var refreshNum=1;function friendChainRandomTransmission(){const t=Math.floor(Math.random()*friend_link_list.length),{name:a,link:s}=friend_link_list.splice(t,1)[0];Snackbar.show({text:"点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「"+a+"」",duration:8e3,pos:"top-center",actionText:"前往",onActionClick:function(t){t.style.opacity=0,window.open(s,"_blank")}})}function addFriendLinksInFooter(){var t=document.getElementById("footer-random-friends-btn");if(!t)return;t.style.opacity="0.2",t.style.transitionDuration="0.3s",t.style.transform="rotate("+360*refreshNum+++"deg)";const a=[];let s=0;for(;friend_link_list.length&&s<3;){const t=Math.floor(Math.random()*friend_link_list.length),{name:n,link:e,avatar:i}=friend_link_list.splice(t,1)[0];a.push({name:n,link:e,avatar:i}),s++}let n=a.map((({name:t,link:a})=>"<a class='footer-item' href='"+a+"' target='_blank' rel='noopener nofollow'>"+t+"</a>")).join("");n+="<a class='footer-item' href='/link/'>更多</a>",document.getElementById("friend-links-in-footer").innerHTML=n,setTimeout((()=>{t.style.opacity="1"}),300)}