document.addEventListener('DOMContentLoaded', function () {

  // Visit on Instagram button (optional)
  const dmBtn = document.getElementById('dmBtn');
  if (dmBtn) {
    dmBtn.addEventListener('click', function (e) {
      e.preventDefault();
      window.open('https://www.instagram.com/am_glamstudio_pune_/', '_blank');
    });
  }

  // DM on Instagram button (form button)
  const dmBtn2 = document.getElementById('dmBtn2');
  if (dmBtn2) {
    dmBtn2.addEventListener('click', function (e) {
      e.preventDefault();
      window.open('https://www.instagram.com/am_glamstudio_pune_/', '_blank');
    });
  }

  // Inquiry form confirmation
  const form = document.getElementById('FORM_ID');
  if (form) {
    form.addEventListener('submit', function () {
      setTimeout(function () {
        alert('Thank you — your inquiry was submitted. We will reply shortly.');
      }, 600);
    });
  }

  // Flip card functionality
  document.querySelectorAll('.flip-card').forEach(card => {
    card.setAttribute('tabindex', '0');

    card.addEventListener('click', function (e) {
      if (e.target.closest('a, button')) return;
      this.classList.toggle('flipped');
    });

    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.classList.toggle('flipped');
      }
    });
  });

});
