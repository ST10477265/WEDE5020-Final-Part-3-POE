// main.js - All interactive features

document.addEventListener("DOMContentLoaded", function () {
  // Active navigation
  const currentPage = window.location.pathname.split("/").pop() || "Index.html";
  document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href").toLowerCase() === currentPage.toLowerCase()) {
      link.classList.add("active");
    }
  });

  // Lightbox
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("close-lightbox");

  document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add("active");
    });
  });

  if (closeBtn) closeBtn.onclick = () => lightbox.classList.remove("active");
  lightbox?.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.classList.remove("active");
  });

  // ACCORDION
document.querySelectorAll(".accordion").forEach(btn => {
  btn.addEventListener("click", () => {
    
    document.querySelectorAll(".accordion.active").forEach(openBtn => {
      if (openBtn !== btn) {
        openBtn.classList.remove("active");
        openBtn.nextElementSibling.style.maxHeight = null;
      }
    });

    btn.classList.toggle("active");
    const panel = btn.nextElementSibling;

    if (panel.style.maxHeight && panel.style.maxHeight !== "0px") {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 30 + "px";   // +30 for padding
    }
  });
});


  // Enquiry Form
  const enquiryForm = document.getElementById("enquiry-form");
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let valid = true;

      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const phone = document.getElementById("phone");
      const type = document.getElementById("enquiry-type");

      document.querySelectorAll(".error").forEach(el => el.textContent = "");
      [name, email, phone].forEach(field => field.classList.remove("valid", "invalid"));

      if (name.value.trim().length < 3) {
        document.getElementById("name-error").textContent = "Name too short";
        name.classList.add("invalid");
        valid = false;
      } else name.classList.add("valid");

      if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        document.getElementById("email-error").textContent = "Invalid email";
        email.classList.add("invalid");
        valid = false;
      } else email.classList.add("valid");

      if (phone.value && !/^\d{10}$/.test(phone.value.replace(/\D/g, ''))) {
        document.getElementById("phone-error").textContent = "10 digits only";
        phone.classList.add("invalid");
        valid = false;
      }

      if (valid) {
        let msg = "";
        if (type.value === "quote") msg = "Quote request received! Estimated cost: R85,000–R180,000. We'll email you in 2 hours.";
        else if (type.value === "partnership") msg = "Partnership interest noted! Our team will contact you in 24 hours.";
        else if (type.value === "volunteer") msg = "Thank you for wanting to volunteer! Application form sent to your email.";
        else msg = "Enquiry received! We'll reply within 1 business day.";
        
        alert(msg);
        enquiryForm.reset();
      }
    });
  }

  // Contact Form
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("contact-name").value.trim();
      const email = document.getElementById("contact-email").value.trim();
      const message = document.getElementById("contact-message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill all fields");
        return;
      }

      const subject = encodeURIComponent(`Contact from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:mthwanalogistics@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});