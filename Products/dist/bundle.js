(()=>{"use strict";var e=function(e,t,n,c){return new(n||(n=Promise))((function(o,a){function r(e){try{i(c.next(e))}catch(e){a(e)}}function s(e){try{i(c.throw(e))}catch(e){a(e)}}function i(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}i((c=c.apply(e,t||[])).next())}))};const t=()=>e(void 0,void 0,void 0,(function*(){try{const e=yield fetch("https://course-api.com/react-store-products"),t=yield e.json();i(t)}catch(e){console.error("Error fetching data:",e)}})),n=document.querySelector(".wrap"),c=document.querySelector(".grid"),o=document.getElementById("imageContainer1"),a=document.querySelector(".input"),r=(document.querySelector(".select"),e=>{e.forEach((e=>{const t=document.createElement("img");t.className="image",t.src=e.image;const n=document.createElement("div");n.className="Card",n.appendChild(t);const c=document.createElement("div");c.className="right";const a=document.createElement("p");a.className="bName",a.innerText=e.name,c.appendChild(a);const r=document.createElement("p");r.className="pPrice",r.innerText=`$${e.price}`,c.appendChild(r);const s=document.createElement("p");s.className="description",s.innerText=`${e.description}`,c.appendChild(s);const i=document.createElement("button");i.className="custom-button",i.innerText="Details",c.appendChild(i),n.appendChild(c),o.appendChild(n)}))}),s=document.getElementById("imageContainer"),i=e=>{e.forEach((e=>{const t=document.createElement("img");t.src=e.image;const n=document.createElement("p");n.innerText=e.name;const c=document.createElement("p");c.className="Price",c.innerText=`$${e.price}`;const o=document.createElement("div");o.className="card";const a=document.createElement("div");a.className="price",a.appendChild(n),a.appendChild(c),o.appendChild(t),o.appendChild(a),null==s||s.appendChild(o)}))};c.addEventListener("click",(function(){c.classList.add("before"),n.classList.remove("before"),o.style.display="none",s.style.display="flex",t()})),n.addEventListener("click",(function(){c.classList.remove("before"),n.classList.add("before"),s.style.display="none",o.style.display="block ",e(void 0,void 0,void 0,(function*(){try{const e=yield fetch("https://course-api.com/react-store-products"),t=yield e.json();r(t)}catch(e){console.error("Error fetching data:",e)}}))})),a.addEventListener("input",(()=>{const e=a.value.toLowerCase();document.querySelectorAll(".card").forEach((t=>{t.querySelector("p").innerText.toLowerCase().includes(e)?t.style.display="block":t.style.display="none"})),document.querySelectorAll(".Card").forEach((t=>{t.querySelector("p").innerText.toLowerCase().includes(e)?t.style.display="flex":t.style.display="none"}))})),t()})();