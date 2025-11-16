document.addEventListener('DOMContentLoaded', () => {

  /* DM Button in hero or header (if exists) */
  const dmBtn = document.getElementById('dmBtn');
  if (dmBtn) {
    dmBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.open('https://www.instagram.com/am_glamstudio_pune_/', '_blank');
    });
  }

  /* DM Button in form */
  const dmBtn2 = document.getElementById('dmBtn2');
  if (dmBtn2) {
    dmBtn2.addEventListener('click', (e) => {
      e.preventDefault();
      window.open('https://www.instagram.com/am_glamstudio_pune_/', '_blank');
    });
  }

  /* Form submitted alert */
  const form = document.getElementById('FORM_ID');
  if (form) {
    form.addEventListener('submit', () => {
      setTimeout(() => {
        alert('Thank you — your inquiry was submitted successfully!');
      }, 400);
    });
  }

  /* Flip Card Animation FIX */
  document.querySelectorAll('.flip-card').forEach(card => {
    // Makes card keyboard accessible
    card.setAttribute('tabindex', '0');

    // Handles click/tap event
    card.addEventListener('click', (e) => {
      // Prevent flip if an interactive element inside the card is clicked (like a future link/button)
      if (e.target.closest('a, button')) return; 
      card.classList.toggle('flipped');
    });

    // Handles keyboard event for accessibility (Enter or Space)
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.classList.toggle('flipped');
      }
    });
  });

});
