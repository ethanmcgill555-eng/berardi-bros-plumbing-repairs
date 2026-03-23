function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const msg = document.getElementById("formMessage");
  msg.textContent = "Thanks — we’ll get back to you shortly.";
  msg.style.color = "#2563eb";

  this.reset();
});
