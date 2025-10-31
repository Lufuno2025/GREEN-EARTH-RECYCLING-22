document.addEventListener("click", function(e) {
  if (e.target.matches("[data-lightbox] img, [data-lightbox]")) {
    e.preventDefault();
    const link = e.target.closest("[data-lightbox]");
    const imageUrl = link.getAttribute("href");
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox-overlay");
    lightbox.innerHTML = `<div class="lightbox"><img src="${imageUrl}" alt=""><span class="close">&times;</span></div>`;
    document.body.appendChild(lightbox);
  }
});

document.body.addEventListener("click", function(e) {
  if (e.target.classList.contains("close") || e.target.classList.contains("lightbox-overlay")) {
    document.querySelector(".lightbox-overlay")?.remove();
  }
});
