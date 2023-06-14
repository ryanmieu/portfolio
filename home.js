function changeTitle(newTitle) {
  document.title = newTitle;
}

document.querySelector('.switch').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = 'rgb(53, 54, 58)';
  document.querySelector('.projectdiv1').style.backgroundColor = 'darkgray';
  document.querySelector('.projectdiv2').style.backgroundColor = 'darkgray';
  document.querySelector('.projectdiv3').style.backgroundColor = 'darkgray';
  document.querySelector('.projectdiv4').style.backgroundColor = 'darkgray';
  document.querySelector('.projectdiv5').style.backgroundColor = 'darkgray';
  document.querySelector('.projectdiv6').style.backgroundColor = 'darkgray';
  document.querySelector('.profile').style.backgroundColor = 'darkgray';
  document.querySelector('.text').style.backgroundColor = 'darkgray';
  document.querySelector('.contact').style.backgroundColor = 'darkgray';
  document.querySelector('.box').style.backgroundColor = 'darkgray';
  document.querySelector('#name').style.backgroundColor = 'darkgray';
  document.querySelector('#email').style.backgroundColor = 'darkgray';
  document.querySelector('#message').style.backgroundColor = 'darkgray';
});

document.querySelector('.switch2').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = 'white';
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
});
