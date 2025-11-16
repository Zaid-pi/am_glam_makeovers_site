// script.js — fixed and cleaned
document.addEventListener('DOMContentLoaded', function () {
  // Visit on instagram button (header or anywhere with id="dmBtn")
  const dmBtn = document.getElementById('dmBtn');
  if (dmBtn) {
    dmBtn.addEventListener('click', function (e) {
      e.preventDefault();
      window.open('https://www.instagram.com/am_glamstudio_pune_/', '_blank');
    });
  }

  // DM on instagram button in the form (id="dmBtn2")
  const dmBtn2 = document.getElementById('dmBtn2');
  if (dmBtn2) {
    dmBtn2.addEventListener('click', function (e) {
      // ensure this button doesn't submit the form accidentally
      e.preventDefault();
      window.open('https://www.instagram.com/am_glamstudio_pune_/', '_blank');
    });
  }

  // Inquiry form confirmation
  const form = document.getElementById('FORM_ID');
  if (form) {
    form.addEventListener('submit', function (e) {
      // keep default submission (Formspree) but show a friendly confirmation
      // (don't block submission with alert immediately; small delay so form can submit)
      setTimeout(function () {
        alert('Thank you — your inquiry was submitted. We will reply shortly.');
      }, 600);
    });
  }

  // Flip cards: toggle 'flipped' class on click/tap (keyboard accessible)
  document.querySelectorAll('.flip-card').forEach(card => {
    // support keyboard accessibility: flip on Enter/Space when focused
    if (!card.hasAttribute('tabindex')) card.setAttribute('tabindex', '0');

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
