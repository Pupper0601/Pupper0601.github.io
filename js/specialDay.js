let specialDayTimer=null;var specialDay=()=>{if(clearTimeout(specialDayTimer),!document.querySelector("#specialDay"))return;let e=new Date("2023-07-20 00:00:00").getTime()/1e3,a={0:"周日",1:"周一",2:"周二",3:"周三",4:"周四",5:"周五",6:"周六"};function t(e){return e>9?e:"0"+e}!function n(){let i=new Date;document.querySelector("#specialDay .today").innerHTML=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate()+" "+a[i.getDay()];let p=e-Math.round(i.getTime()/1e3);if(p<0)document.querySelector("#specialDay .title").innerHTML="已经过期了～",document.querySelector("#specialDay .specialDay-time").innerHTML='<span class="happyspecialDay">需要重新设置</p>';else if(document.querySelector("#specialDay .title").innerHTML="距离 <span>大宝出生</span> 还剩：",p>86400)document.querySelector("#specialDay .specialDay-time").innerHTML=`<span class="day">${Math.ceil(p/86400)}<span class="unit">天</span></span>`;else{let e=t(parseInt(p/3600));p%=3600;let a=t(parseInt(p/60));p%=60;let i=t(p);document.querySelector("#specialDay .specialDay-time").innerHTML=`<span class="time">${e}:${a}:${i}</span></span>`,specialDayTimer=setTimeout(n,1e3)}}(),jQuery(document).ready((function(e){e("#specialDay").wpSuperSnow({flakes:["https://img.pupper.cn/img/202307171658804.webp","https://img.pupper.cn/img/202307171658100.webp","https://img.pupper.cn/img/202307171659700.webp"],totalFlakes:"100",zIndex:"999999",maxSize:"30",maxDuration:"20",useFlakeTrans:!1})}))};document.addEventListener("pjax:complete",specialDay),document.addEventListener("DOMContentLoaded",specialDay);