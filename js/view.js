function updateVotes(e){document.querySelectorAll(".wl-reaction-item").forEach(((t,o)=>{const n=t.querySelector(".wl-reaction-votes");n&&(n.textContent=e["view"+(o+1)])}))}function sendPostRequest(e,t,o){const n={address:e,ip:t,view:o},s=document.querySelector(".wl-reaction-item.clicked").querySelector(".wl-reaction-votes");s.classList.add("view_loading"),fetch("https://hexo-view.pupper.cn/insert/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((e=>e.json())).then((e=>{updateVotes(e),s.classList.remove("view_loading")})).catch((e=>{console.error("Error:",e),s.classList.remove("view_loading")}))}function sendGetRequest(e){fetch("https://hexo-view.pupper.cn/read/?address="+encodeURIComponent(e)).then((e=>e.json())).then((e=>{updateVotes(e)})).catch((e=>{console.error("Error:",e)}))}const address=window.location.href;let ip="";function setIP(){return fetch("https://api.ipify.org?format=json").then((e=>e.json())).then((e=>{ip=e.ip})).catch((e=>{console.error("获取 IP 地址失败:",e),ip="127.4.0.4"}))}setIP().then((()=>{console.log(ip)}));const liElements=document.querySelectorAll(".wl-reaction-item");liElements.forEach(((e,t)=>{e.addEventListener("click",(()=>{const o="view"+(t+1);console.log(address,ip,o);const n=document.querySelector(".wl-reaction-item.clicked");n&&n.classList.remove("clicked"),e.classList.add("clicked"),sendPostRequest(address,ip,o)}))})),window.addEventListener("DOMContentLoaded",(()=>{sendGetRequest(address)}));