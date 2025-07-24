function startFadeCarousel(containerId, interval = 3000) {
  const container = document.querySelector(containerId);
  const slides = container.querySelectorAll(".skill-slide");
  let index = 0;
  let timer;

  function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("fade-show"));
    slides[i].classList.add("fade-show");
  }

  function start() {
    timer = setInterval(() => {
      index = (index + 1) % slides.length;
      showSlide(index);
    }, interval);
  }

  function stop() {
    clearInterval(timer);
  }

  container.addEventListener("mouseenter", stop);
  container.addEventListener("mouseleave", start);

  showSlide(index);
  start();
}

document.addEventListener("DOMContentLoaded", () => {
  startFadeCarousel("#carousel-tech");
  startFadeCarousel("#carousel-soft");
});

function sendEmail(event) {
    event.preventDefault();

    const form = document.getElementById('contactForm');
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const subject = encodeURIComponent("Portfolio Contact from " + name);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:weijie041018@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    form.reset();

    return false;}