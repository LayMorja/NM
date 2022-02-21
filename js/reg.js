const regLink = document.querySelector('.reg-link');
const logLink = document.querySelector('.log-link');
const centerLog = document.querySelector('.center-log');
const centerReg = document.querySelector('.center-reg');

regLink.addEventListener('click', function() {
  centerLog.classList.toggle('active');
  centerReg.classList.toggle('active');
})
logLink.addEventListener('click', function() {
  centerLog.classList.toggle('active');
  centerReg.classList.toggle('active');
})