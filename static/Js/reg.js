document.addEventListener('DOMContentLoaded', () => {
  const fieldsets = document.querySelectorAll('fieldset');
  const nextButtons = document.querySelectorAll('.next');
  const prevButtons = document.querySelectorAll('.previous');
  const progressBarItems = document.querySelectorAll('#progressbar li');
  
  let currentStep = 0;
  
  function showStep(step) {
    fieldsets.forEach((fieldset, index) => {
      fieldset.classList.remove('active');
      progressBarItems[index].classList.remove('active', 'completed');
      if (index === step) {
        fieldset.classList.add('active');
        progressBarItems[index].classList.add('active');
      } else if (index < step) {
        progressBarItems[index].classList.add('completed');
      }
    });
    
    // Ensure lines connecting completed steps are highlighted
    progressBarItems.forEach((item, index) => {
      if (index < step) {
        item.classList.add('completed');
      }
      if (index === step) {
        item.classList.add('active');
      }
    });
  }

  nextButtons.forEach((button) => {
    button.addEventListener('click', () => {
      currentStep = Math.min(currentStep + 1, fieldsets.length - 1);
      showStep(currentStep);
    });
  });

  prevButtons.forEach((button) => {
    button.addEventListener('click', () => {
      currentStep = Math.max(currentStep - 1, 0);
      showStep(currentStep);
    });
  });

  showStep(currentStep); // Initial step
});
