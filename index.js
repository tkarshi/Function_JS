// let greaterThan = (n) => (m) => m > n;

// let greaterThan10 = greaterThan(10);

// console.log(greaterThan10(15));

//EXAMPLE 01

// function noisy(f) {
//   return (...args) => {
//     console.log("calling with", args);
//     let resullt = f(...args);
//     console.log("called with", args, "returned", resullt);
//   };
// }

// noisy(Math.min)(125, 50, 100);

//EXAMPLE 02

function repeat(n, action) {
  for (let i = 1; i < n; i++) {
    action(i);
  }
}

function unless(test, then) {
  if (!test) then;
}

repeat(5, (i) => {
  unless(i % 2 == 1, () => {
    console.log(i, "is even");
  });
});
