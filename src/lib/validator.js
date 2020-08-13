class Validator {
  static isEmailValid(email) {
    const pattern = /^([a-zA-Z0-9])(([\-.]|[_]+)?([a-zA-Z0-9]+))*(@){1}[a-z0-9]+[.]{1}(([a-z]{2,3})|([a-z]{2,3}[.]{1}[a-z]{2,3}))$/;
    const isValid = pattern.test(email);

    return isValid;
  }
}

module.exports = Validator;
