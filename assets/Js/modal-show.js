const modalShowFormElement = document.querySelector('.modal');
const registerShowFormElement = document.querySelector('.modal__body-register');
const loginShowFormElement = document.querySelector('.modal__body-login');
function showLoginForm(){
    modalShowFormElement.classList.add('show');
    loginShowFormElement.classList.add('show');
    registerShowFormElement.classList.remove('show');
}
function showRegForm(){
    modalShowFormElement.classList.add('show');
    loginShowFormElement.classList.remove('show');
    registerShowFormElement.classList.add('show');
}
function backToWeb(){
    modalShowFormElement.classList.remove('show');
    loginShowFormElement.classList.remove('show');
    registerShowFormElement.classList.remove('show');
}
