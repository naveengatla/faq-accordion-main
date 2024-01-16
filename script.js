function main() {


  const questions = document.querySelectorAll('.question');
  for (const question of questions) {
    question.addEventListener('click', (event) => {
      const srcAttr = question.querySelector('.answer-icon').getAttribute('src');
      console.log("The src>>>", srcAttr);
      const answer = question.nextElementSibling;
      answer.classList.toggle('active');
      if (srcAttr === './assets/images/icon-plus.svg') {
        question.querySelector('.answer-icon').setAttribute('src', './assets/images/icon-minus.svg');
      } else {
        question.querySelector('.answer-icon').setAttribute('src', './assets/images/icon-plus.svg');
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', main);