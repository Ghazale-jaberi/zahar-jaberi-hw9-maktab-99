

document.addEventListener('DOMContentLoaded', function () {
  const accordionLabels = document.querySelectorAll('.accordion-label');

  accordionLabels.forEach(label => {
    label.addEventListener('click', () => {
      if (label.classList.contains('active')) {
        label.classList.remove('active');
      } else {
        accordionLabels.forEach(otherLabel => otherLabel.classList.remove('active'));
        label.classList.add('active');
      }
    });
  });
});

window.addEventListener('DOMContentLoaded', function () {
  const navigation = document.querySelector('.navigation');

  navigation.classList.remove('hidden');
});
