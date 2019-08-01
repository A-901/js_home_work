const ADMIN_PASSWORD = '12345';
let message;
const inputForm = prompt('Your admin password');
if (inputForm === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
}
  else if (inputForm === null) {
    message = 'Отменено пользователем!';
  }
  else {
    message = 'Доступ запрещен, неверный пароль!';
  }

alert(message);
