const delayFunction = (timeInMs) => {
  return new Promise((resolve, reject) => {
    if (timeInMs < 0) {
      reject("Invalid time");
    } else {
      setTimeout(() => {
        resolve();
      }, timeInMs);
    }
  });
};
// const iterateWithAsyncAwait = async (array) => {
//   for (eachElement of array) {
//     try {
//       console.log(eachElement);
//       await delayFunction(1000);
//     } catch (err) {
//       console.log(err);
//       break;
//     }
//   }
// };
// iterateWithAsyncAwait([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// const awaitCall = async () => {
//   try {
//     const result = await fetch("https://api.github.com/users");
//     const data = await result.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };
// awaitCall();

// const log1 = async () => {
//   await delayFunction(2000);
//   console.log("First Mesage Printed");
// };
// const log2 = async () => {
//   await delayFunction(4000);
//   console.log("Second Mesage Printed");
// };
// const log3 = async () => {
//   await delayFunction(6000);
//   console.log("Third Mesage Printed");
// };

// const chainedAsyncFunction = async () => {
//   await log1();
//   await log2();
//   await log3();
// };
// chainedAsyncFunction();

// const parallelAsyncCalls = async () => {
//   await Promise.all([log1(), log2(), log3()]);
// };

// parallelAsyncCalls();

const concurrentAsyncCalls = async () => {
  try {
    const [response1, response2] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/users"),
    ]);
    const [data1, data2] = await Promise.all([
      response1.json(),
      response2.json(),
    ]);
    console.log(data1, data2);
  } catch (err) {
    console.log(err);
  }
};
concurrentAsyncCalls();
