
  const introduction = receives(() => 'Hello Pauline !')

function receives(callback) {
    return callback();
  }
  function returnsANamedFunction() {
    return function sayHello() {
      return "Hello Everyone";
    }
  }

  
  function returnsAnAnonymousFunction() {
    return function (firstName, lang = 'JavaScript', callback) {
      return `Hello ${firstName} you are learning ${lang}, please say ${callback()()} to Her.}`;
  
    }
  }