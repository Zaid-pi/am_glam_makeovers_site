// Interactivity for DM button, form, and flip cards
document.addEventListener('DOMContentLoaded', function(){
  // Instagram button
  const dmBtn = document.getElementById('dmBtn');
  if(dmBtn){
    dmBtn.addEventListener('click', function(){
      window.open('https://www.instagram.com/am_glamstudio_pune_/', '_blank');
    });
  }

  // Inquiry form
  const form = document.getElementById('inquiryForm');
  if(form){
    form.addEventListener('submit', function(){
      setTimeout(() => {
        alert('Thank you — your inquiry was submitted. We will reply shortly.');
      }, 600);
    });
  }

  // Flip card functionality
  document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', function(){
      this.classList.toggle('flipped');
    });
  });
});
