function updateVotes(e){document.querySelectorAll(".wl-reaction-item").forEach(((t,o)=>{const s=t.querySelector(".wl-reaction-votes");if(s){s.classList.remove("my-view");const t="view"+(o+1);e.hasOwnProperty(t)&&(s.textContent=e[t]),e.hasOwnProperty("my_view")&&Number(e.my_view)===o+1&&s.classList.add("my-view")}}))}function sendPostRequest(e,t,o){const s={address:e,ip:t,view:o},n=document.querySelector(".wl-reaction-item.clicked").querySelector(".wl-reaction-votes");n.classList.add("view_loading"),fetch("https://hexo-view.pupper.cn/insert/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then((e=>e.json())).then((e=>{updateVotes(e),n.classList.remove("view_loading")})).catch((e=>{console.error("Error:",e),n.classList.remove("view_loading")}))}function sendGetRequest(e,t){var o=document.querySelectorAll(".wl-reaction-votes");o.forEach((e=>{e.classList.add("view_loading")})),fetch("https://hexo-view.pupper.cn/read/?address="+encodeURIComponent(e)+"&ip="+encodeURIComponent(t)).then((e=>e.json())).then((e=>{if(updateVotes(e),document.querySelector(".wl-reaction-item")){document.querySelectorAll(".wl-reaction-item").forEach(((e,t)=>{e.addEventListener("click",(()=>{handleClick(e,t)}))}))}})).catch((e=>{console.error("Error:",e)})).finally((()=>{o.forEach((e=>{e.classList.remove("view_loading")}))}))}let address=window.location.href,ip="";function setIP(){return fetch("https://api.ipify.org?format=json").then((e=>e.json())).then((e=>{ip=e.ip})).catch((e=>{console.error("获取 IP 地址失败:",e),ip="127.4.0.4"}))}setIP().then((()=>{console.log(ip)}));const observer=new MutationObserver(((e,t)=>{document.querySelector(".wl-reaction-item")&&(sendGetRequest(address,ip),t.disconnect())}));function handleClick(e,t){const o="view"+(t+1);console.log(address,ip,o);const s=document.querySelector(".wl-reaction-item.clicked");s&&s.classList.remove("clicked"),e.classList.add("clicked"),sendPostRequest(address,ip,o)}observer.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("load",(()=>{address.endsWith(".html")&&document.querySelector(".wl-reaction-item")&&sendGetRequest(address,ip)})),window.addEventListener("hashchange",(()=>{window.location.hash&&document.querySelector(".wl-reaction-item")&&sendGetRequest(address,ip)}));const locationChangeObserver=new MutationObserver((()=>{const e=window.location.href;e.endsWith(".html")&&e!==address&&document.querySelector(".wl-reaction-item")&&(address=e,sendGetRequest(address,ip))}));locationChangeObserver.observe(document.querySelector("head"),{childList:!0,subtree:!0});