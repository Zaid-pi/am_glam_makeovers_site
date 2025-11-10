// Basic interactivity: DM button and form success handling
document.addEventListener('DOMContentLoaded', function () {
  // --- Instagram Button ---
  var dmBtn = document.getElementById('dmBtn');
  if (dmBtn) {
    dmBtn.addEventListener('click', function () {
      console.log('%cOpening Instagram: https://www.instagram.com/am_glamstudio_pune_/', 'color: red; font-weight: bold;');
      window.open('https://www.instagram.com/am_glamstudio_pune_/', '_blank');
    });
  }

  // --- Inquiry Form ---
  var form = document.getElementById('inquiryForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      setTimeout(function () {
        alert('Thank you — your inquiry was submitted. We will reply shortly.');
      }, 600);
    });
  }

  // --- Flip Card Interactivity for all service cards ---
  const flipCards = document.querySelectorAll('.flip-card');
  flipCards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });
});
