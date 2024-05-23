/*
Understanding the return value of a setTimeout function and also getting the timerId.
*/

function understandTimoutReturnValue() {
  const setTimeoutReturnVal = setTimeout(function () {}, 1);

  const timerId = setTimeoutReturnVal[Symbol.toPrimitive]();

  console.log(timerId);
}

// understandTimoutReturnValue();

/*
Learning how to timeout a function after time t, if it hasn't returned a value before that. 

This was my first attempt to create such a timeout function, it didn't work. Javascript works asynchronously only for I/O operations while reading files from disk or the network. We are instead using an infinite loop which takes complete attention of the main thread forever.
*/

function timeoutBeforeT_1() {
  while (1) {}

  setTimeout(() => {
    console.log("Program timed out!");
  }, 3000);
}

// timeoutBeforeT_1();

/*
Now that's out of the way, let's focus on creating a function that times out after a certain time if it does not return a value within that time period.
*/

function timeoutBeforeT_2() {}

timeoutBeforeT_2();
