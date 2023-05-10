const accounts = [];
let loggedAccount = {};
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export function login({ email, password }) {

  const delay = (0.7 + Math.random() * 2) * 1000;

  return new Promise((resolve, reject) => {

    let correctAccount = {};

    setTimeout(function () {

      accounts.find(account => {
        if (password === account.password && email === account.email) {
          return correctAccount = account;
        }
      });

      if (correctAccount.password === password && correctAccount.email === email) {
        loggedAccount = correctAccount;
        resolve();

      } else {
        reject({ message: 'e-mail or password wrong.' });
      }
    }, delay);
  });
}

export function register({ email, password }) {
    if (accounts.length === 0 && validRegex.test(email)) {
      accounts.push({
        email: email,
        password: password
      });
    } else {
      let registeredEmail = '';

      accounts.find(account => {
        if (account.email === email) {
          return registeredEmail = email;
        }
      });
      if (registeredEmail !== email && validRegex.test(email)) {
        accounts.push({
          email: email,
          password: password
        });
      } else if (registeredEmail === email) {
        reject({ message: 'Email already Registered!' })
      } else { reject({ message: 'Email Invalid' }) }
    }
}