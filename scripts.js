// Interactivity for DM button, form, and flip cards
document.addEventListener('DOMContentLoaded', function () {
  // Visit on instagram button
  const dmBtn = document.getElementById('dmBtn');
  if (dmBtn) {
    dmBtn.addEventListener('click', function () {
      window.open('https://www.instagram.com/am_glamstudio_pune_/', '_blank');
    });
  }

  // DM on instagram button
  document.addEventListener('DOMContentLoaded', function () {
  const dmBtn = document.getElementById('dmBtn2');
  if (dmBtn) {
    dmBtn.addEventListener('click', function () {
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

  // Flip cards: toggle 'flipped' class on click/tap
  document.querySelectorAll('.flip-card').forEach(card => {
    // support keyboard accessibility: flip on Enter/Space when focused
    card.setAttribute('tabindex', '0');

    card.addEventListener('click', function (e) {
      // prevent flipping when clicking links or buttons inside card (if any)
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
