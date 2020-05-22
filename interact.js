const change = document.querySelector('.changer');
const button = document.querySelector('.click-me');
  button.addEventListener('click', function () {
    if (change.innerText === 'friends') {
        change.innerText = 'frendorinos';
    } else {
        change.innerText = 'friends';
    }
  });