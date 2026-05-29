/* empty css                      */import{a as p,S as g,i}from"./assets/vendor-BSxrTp-N.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const y="https://pixabay.com/api/",m="56068284-30f7ab574d20f3e020b06a8c1";async function d(l){const t={key:m,q:l,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await p.get(y,{params:t})).data}function h(l){return l.map(({webformatURL:t,largeImageURL:a,tags:o,likes:e,views:r,comments:s,downloads:f})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img
            class="gallery-image"
            src="${t}"
            alt="${o}"
            loading="lazy"
          />
          <ul class="gallery-info">
            <li class="gallery-info-item">
              <p class="gallery-info-label">Likes</p>
              <p class="gallery-info-value">${e}</p>
            </li>
            <li class="gallery-info-item">
              <p class="gallery-info-label">Views</p>
              <p class="gallery-info-value">${r}</p>
            </li>
            <li class="gallery-info-item">
              <p class="gallery-info-label">Comments</p>
              <p class="gallery-info-value">${s}</p>
            </li>
            <li class="gallery-info-item">
              <p class="gallery-info-label">Downloads</p>
              <p class="gallery-info-value">${f}</p>
            </li>
          </ul>
        </a>
      </li>`).join("")}const n=document.querySelector(".search-form"),b=document.querySelector(".search-input"),c=document.querySelector(".gallery"),u=document.querySelector(".loader");let L=new g(".gallery a",{captionsData:"alt",captionDelay:250});function v(){u.classList.remove("hidden")}function S(){u.classList.add("hidden")}function w(){c.innerHTML=""}n.addEventListener("submit",async l=>{l.preventDefault();const t=b.value.trim();if(t){w(),v();try{const a=await d(t);if(a.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",closeButton:!0,backgroundColor:"#ef4040",messageColor:"#fafafb",iconUrl:"",icon:""});return}const o=h(a.hits);c.innerHTML=o,L.refresh(),n.reset()}catch{i.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{S()}}});
//# sourceMappingURL=index.js.map
