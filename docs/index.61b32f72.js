let e=[];async function t(){try{let t=await fetch("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=vQhw0rgoGpf55uSqfaMuh6OmNngHLj6g");e=(await t.json()).results,a(e)}catch(e){console.error("Error fetching the news:",e)}}function a(e){let t=document.getElementById("news-container");t.innerHTML="",e.forEach(e=>{let a=document.createElement("div");a.classList.add("news-item");let n=e.multimedia&&e.multimedia.length>0?e.multimedia[0].url:"default_image.jpg";a.innerHTML=`
            <img src="${n}" alt="${e.title}" class="news-image">
            <h2>${e.title}</h2>
            <p>${e.abstract}</p>
            <a href="${e.url}" target="_blank">Read more</a>
        `,t.appendChild(a)})}const n=document.querySelector(".burger"),c=document.querySelector(".nav-links");n.addEventListener("click",()=>{c.classList.toggle("nav-active"),n.classList.toggle("active")});const r=document.querySelector(".search-bar input");document.querySelector(".search-bar button").addEventListener("click",()=>{let t=r.value.toLowerCase();a(e.filter(e=>e.title.toLowerCase().includes(t)||e.abstract.toLowerCase().includes(t)))}),t();
//# sourceMappingURL=index.61b32f72.js.map
