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
  document.querySelector('.projectdiv7').style.backgroundColor = '#303436';
  document.querySelector('.projectdiv8').style.backgroundColor = '#303436';
  document.querySelector('.projectdiv9').style.backgroundColor = '#303436';
  document.querySelector('.profile').style.backgroundColor = '#303436';
  document.querySelector('.text').style.backgroundColor = '#303436';
  document.querySelector('.contact').style.backgroundColor = '#303436';
  document.querySelector('.box').style.backgroundColor = '#303436';
  document.querySelector('#name').style.backgroundColor = '#303436';
  document.querySelector('#email').style.backgroundColor = '#303436';
  document.querySelector('#message').style.backgroundColor = '#303436';
  document.querySelector('.send').style.backgroundColor = 'darkgray';
  document.querySelector('.switch').style.color = '#252829';
  document.querySelector('.send').style.backgroundColor = '#252829';
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
  document.querySelector('.projectdiv7').style.backgroundColor = 'white';
  document.querySelector('.projectdiv8').style.backgroundColor = 'white';
  document.querySelector('.projectdiv9').style.backgroundColor = 'white';
  document.querySelector('.profile').style.backgroundColor = 'white';
  document.querySelector('.text').style.backgroundColor = 'white';
  document.querySelector('.contact').style.backgroundColor = 'white';
  document.querySelector('.box').style.backgroundColor = 'white';
  document.querySelector('#name').style.backgroundColor = 'white';
  document.querySelector('#email').style.backgroundColor = 'white';
  document.querySelector('#message').style.backgroundColor = 'white';
  document.querySelector('.send').style.backgroundColor = 'rgb(223, 223, 223)';
  document.querySelector('.switch2').style.color = 'yellow';
  document.querySelector('.switch').style.color = 'white';
  document.querySelector('h4').style.color = 'white';
});

const btnClick = document.querySelector('.click');

const openWindow = document.querySelector('.texts');

const closeWindow = document.querySelector('.close');

const folder = document.querySelector('.fa-folder-open');

const openIt = function () {
  openWindow.classList.remove('window');
  closeWindow.classList.remove('window');
  folder.style.color = 'black';
};

btnClick.addEventListener('click', openIt);

const closeIt = function () {
  openWindow.classList.add('window');
  closeWindow.classList.add('window');
  folder.style.color = 'white';
};

closeWindow.addEventListener('click', closeIt);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeIt();
  }
});
