import{i,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d=s=>{const r=new URLSearchParams({key:"48259740-4b53b0822f94ea1fa118abb4f",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${r}`).then(o=>{if(o.ok===!1)throw new Error(o.status);return o.json()})},p=(s,r)=>{s.innerHTML="",r.show({message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",image:"../img/error.png",imageWidth:24,zindex:99999,position:"topRight",maxWidth:"432px",overlayColor:"#b51b1b"})},h=(s,r)=>{const{hits:o}=s,a=o.map(e=>`<li class="elementOfGallery">
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
          </li>`).join("");r.innerHTML=a},g=document.querySelector(".searchInput");document.querySelector(".submitBtn");const c=document.querySelector(".mainForm"),u=document.querySelector(".gallery"),m=document.querySelector(".loader");let l="";c.addEventListener("submit",s=>{if(s.preventDefault(),l=g.value,l.trim()===""){i.show({message:"There must be smth!",messageColor:"#fafafb",backgroundColor:"#ef4040",position:"topCenter",overlayColor:"#b51b1b"});return}else m.classList.remove("visually-hidden"),d(l).then(r=>{m.classList.add("visually-hidden");const{hits:o}=r;o.length===0?p(u,i):(h(r,u),new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh())}).catch(r=>i.show({title:"Sorry!",titleColor:"#fafafb",message:"Something went wrong!",messageColor:"#fafafb",backgroundColor:"#db9e02",position:"center",overlayColor:"#996e00"}));c.reset()});
//# sourceMappingURL=index.js.map
