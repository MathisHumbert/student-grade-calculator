const gradeInputs = document.querySelectorAll('.grade-input');

// hide / show placeholer
gradeInputs.forEach((input) =>
  input.addEventListener('click', (e) => {
    console.log((e.target.placeholder = ' '));
  })
);
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('grade-input')) {
    return;
  } else {
    gradeInputs.forEach((input) => console.log((input.placeholder = '00')));
  }
});
