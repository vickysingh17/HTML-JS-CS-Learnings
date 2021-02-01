Function.prototype.newBind = function (context, ...fixedArgs) {
  let func = this;
  return function (...flexiArgs) {
    let completeArguments = [...fixedArgs, ...flexiArgs];
    return func.apply(context, completeArguments);
  };
};

function sayMyName() {
  console.log(this.name);
}

user1 = {
  name: 'Vikram',
};

user2 = {
  name: 'Zeta',
};

let boundFunc1 = sayMyName.newBind(user1);
let boundFunc2 = sayMyName.newBind(user2);
boundFunc1();
boundFunc2();

function multiply(a, b) {
  return a * b;
}

// suppose i need to create a double function
let double = multiply.newBind(null, 2);
console.log(double(30));
