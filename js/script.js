/* js/main.js - behaviours for new pink theme site */

document.addEventListener('DOMContentLoaded', function(){
  // Mobile nav toggle
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('main-nav') || document.querySelector('.nav');
  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      nav.classList.toggle('open');
      const expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', String(expanded));
    });
  }

  // FAQ accordion
  document.querySelectorAll('.accordion-toggle').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      // close all
      document.querySelectorAll('.accordion-toggle').forEach(b=>{
        b.setAttribute('aria-expanded','false');
        b.nextElementSibling.style.maxHeight = null;
      });
      if(!expanded){
        btn.setAttribute('aria-expanded','true');
        const panel = btn.nextElementSibling;
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  // Gallery lightbox
  const lightbox = document.querySelector('.lightbox');
  const lightImg = lightbox ? lightbox.querySelector('img') : null;
  document.querySelectorAll('.gallery-card img, .work-item img').forEach(img=>{
    img.addEventListener('click', (e)=>{
      if(!lightbox) return;
      lightImg.src = img.dataset.large || img.src;
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden','false');
      document.body.style.overflow = 'hidden';
    });
  });
  if(lightbox){
    lightbox.addEventListener('click', ()=>{
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden','true');
      document.body.style.overflow = '';
    });
  }

  // Contact form validation + demo submission (replace with real endpoint)
  function handleContact(){
    const form = document.getElementById('contactForm');
    if(!form) return;
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const msgEl = form.querySelector('.form-msg');
      msgEl.textContent = '';
      let valid = true;
      form.querySelectorAll('[data-validate]').forEach(input=>{
        const rules = input.dataset.validate.split('|');
        const val = input.value.trim();
        if(rules.includes('required') && !val){
          valid = false;
          input.classList.add('invalid');
        } else {
          input.classList.remove('invalid');
        }
        if(rules.includes('email') && val){
          const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
          if(!ok){ valid = false; input.classList.add('invalid'); }
        }
      });
      if(!valid){
        msgEl.style.color = 'crimson';
        msgEl.textContent = 'Please correct the highlighted fields.';
        return;
      }

      // Demo: fake POST response
      setTimeout(()=> {
        msgEl.style.color = 'green';
        msgEl.textContent = 'Thanks — your message was received (demo).';
        form.reset();
      }, 650);
    });
  }
  handleContact();

  // Leaflet map (initialize if map exists)
  if(document.getElementById('map') && typeof L !== 'undefined'){
    try {
      const map = L.map('map').setView([-33.9249,18.4241], 11);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        attribution:'&copy; OpenStreetMap contributors'
      }).addTo(map);
      L.marker([-33.9249,18.4241]).addTo(map).bindPopup('GreenEarth Recycling — Cape Town').openPopup();
    } catch(e){ console.warn('Leaflet init failed', e); }
  }
});
