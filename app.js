// My first way, quite messy

// const gradeInputs = document.querySelectorAll('.grade-input');
// const form = document.querySelector('.grades');
// const submitBtn = document.querySelector('.submit-input');
// const text = document.querySelector('.text');
// const showText = document.querySelector('.show-text');

// let arr = [];

// gradeInputs.forEach((input) => {
//   input.addEventListener('change', getValue);
// });

// submitBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   if (arr.length < 4) {
//     text.innerHTML = `<p class="text">
//             You need to pass all of your grades
//           </p>`;
//     showText.classList.add('show');
//   } else {
//     let acc = null;
//     for (let grade of arr) {
//       acc += parseInt(grade);
//     }
//     let percentage = (acc / 400) * 100;
//     let mark = getGrade(percentage);
//     console.log(mark);
//     let pass;
//     if (percentage >= 60) {
//       pass = 'You are Pass';
//     } else {
//       pass = 'You are a Failure';
//     }
//     text.innerHTML = `<p class="text">
//             Out of 400 your total is ${acc} and percentage is ${percentage}% <br />
//             Your grade is ${mark}. ${pass}.
//           </p>`;
//     showText.classList.add('show');
//   }
// });

// function getGrade(p) {
//   if (p >= 90) {
//     return 'A';
//   } else if (p >= 80) {
//     return 'B';
//   } else if (p >= 70) {
//     return 'C';
//   } else if (p >= 60) {
//     return 'D';
//   } else if (p >= 50) {
//     return 'E';
//   } else {
//     return 'F';
//   }
// }

// function getValue() {
//   let id = parseInt(this.dataset.id);
//   if (arr.length == 4) {
//     arr[id] = this.value;
//   } else {
//     arr.push(this.value);
//   }
//   return arr;
// }

// A better way
const submitBtn = document.querySelector('.submit-input');
const text = document.querySelector('.text');
const showText = document.querySelector('.show-text');

submitBtn.addEventListener('click', () => {
  const web = parseInt(document.querySelector('.web').value);
  const mat = parseInt(document.querySelector('.mat').value);
  const comp = parseInt(document.querySelector('.comp').value);
  const phy = parseInt(document.querySelector('.phy').value);

  let total = 0;
  total = web + mat + comp + phy;
  if (Number.isNaN(total)) {
    text.innerHTML = `<p class="text">
      You need to pass all of your grades
      </p>`;
    showText.classList.add('show');
  } else {
    let per = (total / 400) * 100;
    let mark = getGrade(per);
    console.log(mark);
    let pass;
    if (per >= 60) {
      pass = 'You are Pass';
    } else {
      pass = 'You are a Failure';
    }
    text.innerHTML = `<p class="text">
            Out of 400 your total is ${total} and percentage is ${per}% <br />
            Your grade is ${mark}. ${pass}.
          </p>`;
    showText.classList.add('show');
  }
});

function getGrade(p) {
  if (p >= 90) {
    return 'A';
  } else if (p >= 80) {
    return 'B';
  } else if (p >= 70) {
    return 'C';
  } else if (p >= 60) {
    return 'D';
  } else if (p >= 50) {
    return 'E';
  } else {
    return 'F';
  }
}
