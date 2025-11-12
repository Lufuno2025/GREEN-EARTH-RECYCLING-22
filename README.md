# GreenEarth Recycling Website

## Overview
GreenEarth Recycling is a mid-sized environmental services company based in Cape Town, South Africa, established in 2017. The company focuses on waste reduction and sustainable recycling services for communities, schools, and businesses. The website aims to provide information on services, schedules, and community initiatives, while encouraging engagement through interactive features and forms.
## WEBSITE STRUCTURE
GreenEarth-Recycling/
│
├── index.html                # Home page (hero, FAQ accordion, dynamic time)
├── page folder/
│   ├── about-us.html         # About page (search bar, lightbox integration)
│   ├── services.html         # List of recycling services
│   ├── gallery.html          # Gallery with image lightbox
│   ├── blog.html             # Sustainability blog
│   ├── contact.us.html       # Contact form + interactive Google map
│   ├── enquiry.html          # Enquiry form (validated with JS)
│
├── css/
│   └── style.css             # External stylesheet (pink/white layout)
│
├── js/
│   └── script.js             # All JavaScript (accordion, validation, etc.)
│
├── Assets/
│   ├── logo 2.jpg
│   ├── community clean up.jpg
│   ├── sorting & processing.jpg
│   └── school program.jpg
│
├── sitemap.xml               # SEO sitemap
├── robots.txt                # Search engine instructions
├── manifest.json             # Web app manifest
├── README.md                 # This documentation file
└── CHANGELOG.md              # Record of updates and development


---

## Features & Functionality

### 1. Pages
- **Home (index.html)**: Hero section, About intro, Work in action photos, FAQ accordion, CTA strip.
- **About Us (about-us.html)**: Mission, Team, Impact with accordions.
- **Services (services.html)**: Overview of recycling services.
- **Gallery (gallery.html)**: Gallery cards showcasing community activities with lightbox.
- **Blog (blog.html)**: Articles to educate and attract clients.
- **Contact (contact.us.html)**: Contact form with JavaScript validation and embedded Google Map.
- **Enquiry (enquiry.html)**: Form for volunteering, sponsorship, or service enquiries with validation.

### 2. Interactive Features
- **FAQ and About accordions** for collapsing/expanding content.
- **Gallery Lightbox**: Click images to enlarge.
- **Dynamic Content**: Blog posts and gallery items loaded dynamically using JavaScript.
- **Interactive Maps**: Google Maps embedded in Contact page for location reference.

### 3. Forms & Validation
- **Contact Form**: Full name, email, message type, message. Client-side validation via JavaScript.
- **Enquiry Form**: Allows volunteering or sponsorship requests with validation.
- **AJAX-enabled submission** (optional) to improve user experience.

### 4. Search Engine Optimization (SEO)
- **On-Page SEO**:
  - Title tags and meta descriptions for each page.
  - Meta keywords included.
  - Clean URL structure.
  - Optimized images with descriptive file names and alt-text.
  - Header tags (H1-H3) structured properly.
  - Internal linking between pages.
  - Mobile-friendly design.
- **Off-Page SEO**:
  - Social media links integrated (Facebook, Instagram, WhatsApp).
  - Promoted content via blog and social channels.
  - Local SEO optimized for Cape Town area.
- **Additional SEO**:
  - `robots.txt` and `sitemap.xml` included.
  - Page speed optimizations implemented.
  - SSL certificate assumed for live hosting.

### 5. Technologies Used
- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Optional PHP/Node.js
- **CMS**: WordPress or custom-built CMS (optional)
- **Database**: MySQL or Firebase (for form storage)
- **Hosting**: Localhost for development, Afrihost for live site
- **Libraries/Frameworks**:
  - Google Fonts: Poppins & Montserrat
  - Font Awesome for social icons
  - Leaflet / Google Maps for location maps
  - Lightbox library for gallery

### 6. Design & UX
- Clean **pink and white color scheme** (header & footer in pink).
- Responsive layout for all devices.
- Accessible typography and imagery (WCAG-compliant).
- Navigation menu consistent across all pages.
- Hero sections, CTA strips, and card layouts for content.

---

## Changelog (Part 3 – POE & Part 2 Feedback Implemented)
| Date | Change | Description |
|------|--------|-------------|
| 31 Oct 2025 | Home page update | Added FAQ accordion, Work in Action images linking to gallery, CTA strip improvements. |
| 31 Oct 2025 | About Us update | Mission, Team, and Impact sections converted to accordions; improved layout. |
| 31 Oct 2025 | CSS update | Pink & white header/footer; new layout for all pages; responsive improvements. |
| 31 Oct 2025 | Contact page | Added JavaScript dynamic date/time display, form validation, Google Map integration. |
| 31 Oct 2025 | Enquiry page | Form validation added, styled to match pink & white theme. |
| 31 Oct 2025 | Footer update | Social icons (Facebook, Instagram, WhatsApp) added, consistent across all pages. |
| 31 Oct 2025 | SEO enhancements | Added title tags, meta descriptions, keywords, alt text, and internal linking. |
| 31 Oct 2025 | GitHub repository | All code pushed with commits reflecting each feature and fix. |

---

## Installation & Setup
1. Clone the repository:  
   ```bash
   git clone https://github.com/username/greenearth-recycling.git
#  Green Earth Recycling — Official Website

###  Last Updated: October 31, 2025  
###  Developed by: **Lufuno**  

---

##  Overview  

**Green Earth Recycling** is a mid-sized waste management and recycling company based in **Cape Town, South Africa**, established in **2017**.  
The company focuses on sustainable recycling services for households, schools, and local businesses — promoting environmental awareness and community action.  

The website was designed to:  
- Educate the public about recycling initiatives.  
- Allow users to request pickups or submit enquiries online.  
- Increase engagement through blogs, visuals, and contact forms.  
- Enhance visibility via SEO and responsive web design.  

---

##  Website Objectives & Goals  

### Objectives  
- Provide accurate recycling service information.  
- Increase public participation through interactive features.  
- Enable quote requests and pickup scheduling online.  

### Goals  
- Deploy a fully responsive and SEO-optimized website.  
- Allow staff to easily update content through a CMS or GitHub.  
- Improve brand visibility and community engagement.  

---

##  Website Structure  

```
GreenEarth-Recycling/
│
├── index.html                # Home page (hero, FAQ accordion, dynamic time)
├── page folder/
│   ├── about-us.html         # About page (search bar, lightbox integration)
│   ├── services.html         # List of recycling services
│   ├── gallery.html          # Gallery with image lightbox
│   ├── blog.html             # Sustainability blog
│   ├── contact.us.html       # Contact form + interactive Google map
│   ├── enquiry.html          # Enquiry form (validated with JS)
│
├── css/
│   └── style.css             # External stylesheet (pink/white layout)
│
├── js/
│   └── script.js             # All JavaScript (accordion, validation, etc.)
│
├── Assets/
│   ├── logo 2.jpg
│   ├── community clean up.jpg
│   ├── sorting & processing.jpg
│   └── school program.jpg
│
├── sitemap.xml               # SEO sitemap
├── robots.txt                # Search engine instructions
├── manifest.json             # Web app manifest
├── README.md                 # This documentation file
└── CHANGELOG.md              # Record of updates and development
```

---

## Technical Stack  

| Layer | Tools / Technologies |
|-------|-----------------------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6) |
| **Backend (optional)** | PHP or Node.js for future integration |
| **Database (optional)** | MySQL / Firebase (for pickup requests) |
| **Map Integration** | Google Maps Embed API |
| **Icons & Fonts** | Font Awesome 6, Google Fonts (Poppins, Montserrat) |
| **Hosting** | GitHub Pages |
| **Version Control** | Git + GitHub |

---

##  Interactive & Dynamic Features  

| Feature | Description |
|----------|-------------|
| **Accordion (FAQ)** | Expanding/collapsing sections on the home page. |
| **Interactive Map** | Google Maps embed for Cape Town location. |
| **Gallery Lightbox** | Clickable image viewer with modal popups. |
| **Dynamic Clock & Date** | Displays current date/time on the site. |
| **Search Bar (About Page)** | Filters team members by name. |
| **Form Validation (JS)** | Validates Contact & Enquiry forms. |
| **SEO Meta Tags** | Title, description, and keywords for each page. |

---

##  Design & User Experience  

- **Colour Scheme:** Pink and White (eco-friendly, modern, clean look).  
- **Typography:** Poppins and Montserrat for readability.  
- **Layout:** Responsive grid/flex layout for all devices.  
- **Accessibility:** WCAG-compliant (alt text, keyboard navigation).  

---

## Sitemap & Robots  

### **sitemap.xml**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://lufuno.github.io/GreenEarth-Recycling/index.html</loc></url>
  <url><loc>https://lufuno.github.io/GreenEarth-Recycling/page%20folder/about-us.html</loc></url>
  <url><loc>https://lufuno.github.io/GreenEarth-Recycling/page%20folder/services.html</loc></url>
  <url><loc>https://lufuno.github.io/GreenEarth-Recycling/page%20folder/gallery.html</loc></url>
  <url><loc>https://lufuno.github.io/GreenEarth-Recycling/page%20folder/blog.html</loc></url>
  <url><loc>https://lufuno.github.io/GreenEarth-Recycling/page%20folder/contact.us.html</loc></url>
  <url><loc>https://lufuno.github.io/GreenEarth-Recycling/page%20folder/enquiry.html</loc></url>
</urlset>
```

### **robots.txt**
```
User-agent: *
Allow: /

Sitemap: https://lufuno.github.io/GreenEarth-Recycling/sitemap.xml
```

---

##  Changelog Summary  

See full details in `CHANGELOG.md` file.  
Key updates include:
- Replaced inline CSS with external stylesheet.  
- Fixed navigation and image responsiveness.  
- Added accordion, lightbox, and search bar.  
- Added `sitemap.xml` and `robots.txt`.  
- Validated all forms and added JS feedback.  
- Documented all improvements per POE requirements.  

---

##  How to Run Locally  

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/yourusername/GreenEarth-Recycling.git
   ```

2. **Open Locally**  
   - Navigate into the folder and open `index.html` in your browser.

3. **Optional (Live Server)**  
   - Use VS Code’s *Live Server Extension* to preview changes in real time.  

4. **View Online**  
   - GitHub Pages: [https://yourusername.github.io/GreenEarth-Recycling](#)  

---



##  References  

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org) — HTML, CSS, JS documentation  
- [W3Schools](https://www.w3schools.com) — Web development tutorials  
- [Google UX Design Guidelines](https://material.io/design)  
- [Font Awesome](https://fontawesome.com/) — Icons  
- [Leaflet JS](https://leafletjs.com/) — Interactive Map Library  
- [Green Earth Recycling (Hypothetical Reference)]  

---

##  Author Notes  

This project was developed as part of a **Final Practical Outcome Evaluation (POE)** in Web Design and Development.  
All features meet or exceed the final checklist requirements, including:  
SEO optimization  
Interactive JavaScript features  
 Responsive design  
 GitHub commits & documentation  

