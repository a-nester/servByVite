import"./assets/modulepreload-polyfill-3cfb730f.js";const c="http://localhost:3000/todos",i=document.querySelector(".todo__form"),s=document.querySelector(".list");i.addEventListener("submit",r);s.addEventListener("click",d);s.addEventListener("click",h);async function a(t,n={}){const e=await fetch(t,n);if(!e.ok)throw new Error(e.statusText);return await e.json()}a(c).then(t=>s.insertAdjacentHTML("beforeend",l(t))).catch(t=>console.log(t));function l(t){return t.map(({id:n,title:e,completed:o})=>`
        <li data-id="${n}" class="list__item">
            <input type="checkbox" class="list__checkbox" ${o&&"cheked"}>
            <h2 class="list__title">${e}</h2>
            <button class="list__btn">x<?button>
        </li>
        `).join("")}function r(t){t.preventDefault();const{todo:n}=t.currentTarget.elements;a(c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:n.value,completed:!1})}).then(e=>s.insertAdjacentHTML("beforeend",l([e]))).catch(e=>console.log(e)).finally(()=>i.reset())}function d(t){if(!t.target.classList.contains("list__checkbox"))return;t.preventDefault();const e=t.target.closest(".list__item").dataset.id;a(`${c}/${e}`,{method:"PATCH",body:JSON.stringify({completed:t.target.checked})}).then(o=>t.target.checked=o.completed).catch(o=>console.log(o))}function h(t){if(!t.target.classList.contains("list__btn"))return;const n=t.target.closest(".list__item"),e=n.dataset.id;fetch(`${c}/${e}`,{method:"DELETE"}).then(o=>n.remove()).catch(o=>console.log(o))}
//# sourceMappingURL=commonHelpers3.js.map
