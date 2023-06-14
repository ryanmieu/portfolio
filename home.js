function changeTitle(newTitle) {
  document.title = newTitle;
}

const textElements = document.querySelectorAll('.all *');

document.querySelector('.switch').addEventListener('click', function () {
  textElements.forEach((element) => {
    element.style.color = 'white';
  });
  document.querySelector('.all').style.backgroundColor = '#252829';
  document.querySelector('.projectdiv1').style.backgroundColor = '#303436';
  document.querySelector('.projectdiv2').style.backgroundColor = '#303436';
  document.querySelector('.projectdiv3').style.backgroundColor = '#303436';
  document.querySelector('.projectdiv4').style.backgroundColor = '#303436';
  document.querySelector('.projectdiv5').style.backgroundColor = '#303436';
  document.querySelector('.projectdiv6').style.backgroundColor = '#303436';
  document.querySelector('.profile').style.backgroundColor = '#303436';
  document.querySelector('.text').style.backgroundColor = '#303436';
  document.querySelector('.contact').style.backgroundColor = '#303436';
  document.querySelector('.box').style.backgroundColor = '#303436';
  document.querySelector('#name').style.backgroundColor = '#303436';
  document.querySelector('#email').style.backgroundColor = '#303436';
  document.querySelector('#message').style.backgroundColor = '#303436';
  document.querySelector('.send').style.backgroundColor = 'darkgray';
  document.querySelector('.switch').style.color = 'black';
  document.querySelector('.switch2').style.color = 'white';
});

document.querySelector('.switch2').addEventListener('click', function () {
  textElements.forEach((element) => {
    element.style.color = 'black';
  });
  document.querySelector('.all').style.backgroundColor = 'white';
  document.querySelector('.projectdiv1').style.backgroundColor = 'white';
  document.querySelector('.projectdiv2').style.backgroundColor = 'white';
  document.querySelector('.projectdiv3').style.backgroundColor = 'white';
  document.querySelector('.projectdiv4').style.backgroundColor = 'white';
  document.querySelector('.projectdiv5').style.backgroundColor = 'white';
  document.querySelector('.projectdiv6').style.backgroundColor = 'white';
  document.querySelector('.profile').style.backgroundColor = 'white';
  document.querySelector('.text').style.backgroundColor = 'white';
  document.querySelector('.contact').style.backgroundColor = 'white';
  document.querySelector('.box').style.backgroundColor = 'white';
  document.querySelector('#name').style.backgroundColor = 'white';
  document.querySelector('#email').style.backgroundColor = 'white';
  document.querySelector('#message').style.backgroundColor = 'white';
  document.querySelector('.switch2').style.color = 'yellow';
  document.querySelector('.switch').style.color = 'white';
  document.querySelector('h4').style.color = 'white';
});
