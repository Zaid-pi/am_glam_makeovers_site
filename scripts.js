// Basic interactivity: DM button and form success handling
document.addEventListener('DOMContentLoaded', function(){
  var dmBtn = document.getElementById('dmBtn');
  if(dmBtn){
    dmBtn.addEventListener('click', function(){
      // ✅ Updated Instagram link (highlighted for you)
      console.log('%cOpening Instagram: https://www.instagram.com/am_glamstudio_pune_/', 'color: red; font-weight: bold;');
      window.open('https://www.instagram.com/am_glamstudio_pune_/', '_blank');
    });
  }

  var form = document.getElementById('inquiryForm');
  if(form){
    form.addEventListener('submit', function(e){
      // Let the normal form submit happen (to Formspree)
      // Show a friendly confirmation message
      setTimeout(function(){
        alert('Thank you — your inquiry was submitted. We will reply shortly.');
      }, 600);
    });
  }
});
