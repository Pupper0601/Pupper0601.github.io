document.addEventListener("DOMContentLoaded",(()=>{if(!navigator.serviceWorker?.controller)return;const e=e=>{const t=e.endsWith("js")?"script":"link",o="link"===t?"href":"src";for(let n of document.getElementsByTagName(t)){const r=n[o];if(e.length>r?e.endsWith(r):r.endsWith(e)){const e=document.createElement(t),o=n.text||n.textContent||n.innerHTML||"";return Array.from(n.attributes).forEach((t=>e.setAttribute(t.name,t.value))),e.appendChild(document.createTextNode(o)),n.parentNode.replaceChildren(e,n),!0}}},t="updated",o=()=>{caches.match("https://id.v3/").then((function(e){e?e.json().then((function(e){anzhiyuPopupManager&&anzhiyuPopupManager.enqueuePopup("通知📢",`已刷新缓存，更新为${e.global+"."+e.local}版本最新内容`,null,5e3)})):console.info("未找到匹配的缓存响应")})).catch((function(e){console.error("缓存匹配出错:",e)}))};var n;sessionStorage.getItem(t)?(o(),sessionStorage.removeItem(t)):(n="update",navigator.serviceWorker.controller.postMessage(n)),navigator.serviceWorker.addEventListener("message",(n=>{const r=n.data;sessionStorage.setItem(t,r.type);const a=r.list?.filter((e=>/\.(js|css)$/.test(e)));if(a)window.Pjax?.isSupported?.()&&a.forEach(e),location.reload();else{const e=r.new,n=r.old;!n||e.global===n.global&&e.local===n.local||o(),sessionStorage.removeItem(t)}}))}));