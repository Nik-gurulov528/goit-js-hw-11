import{S as m,i as d}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p=o=>{const t=new URLSearchParams({key:"48259740-4b53b0822f94ea1fa118abb4f",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${t}`).then(s=>{if(s.ok===!1)throw new Error(s.status);return s.json()})},f=(o,t)=>{o.innerHTML="",t.show({message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",image:"../img/error.png",imageWidth:24,zindex:99999,position:"topRight",maxWidth:"432px",overlayColor:"#b51b1b"})},h=(o,t)=>{const{hits:s}=o,a=s.map(e=>`<li class="elementOfGallery">
            <div class="imageOfElement">
              <a
                href="${e.largeImageURL}"
                ><img
                  src="${e.webformatURL}"
                  alt="${e.tags}"
              /></a>
              <div class="infoOfElement">
                <p><span>Likes </span> ${e.likes}</p>
                <p><span>Views </span> ${e.views}</p>
                <p><span>Comments </span> ${e.comments}</p>
                <p><span>Downloads </span> ${e.downloads}</p>
              </div>
            </div>
          </li>`).join("");t.innerHTML=a},g=document.querySelector(".searchInput");document.querySelector(".submitBtn");const l=document.querySelector(".mainForm"),c=document.querySelector(".gallery"),u=document.querySelector(".loader");let i="";l.addEventListener("submit",o=>{if(o.preventDefault(),i=g.value,i.trim()===""){alert("There must be smth");return}else u.classList.remove("visually-hidden"),p(i).then(t=>{u.classList.add("visually-hidden");const{hits:s}=t;s.length===0?f(c,d):(h(t,c),new m(".gallery a",{captionsData:"alt",captionDelay:250}).refresh())}).catch(t=>console.log(t));l.reset()});
//# sourceMappingURL=index.js.map
