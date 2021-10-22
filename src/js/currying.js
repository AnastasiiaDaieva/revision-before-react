console.log('hello');

const _sum3 = (x, y, z) => x + y + z;
const _sum4 = (p, q, r, s, t) => p + q + r + s + t;

// function curry(fn) {
//   const N = fn.length;
//   console.log(N);
//   function innerFn(n, args) {
//     return function actualInnerFn(a) {
//       if (n <= 1) {
//         return fn(...args, a);
//       }
//       return innerFn(n - 1, [...args, a]);
//     };
//   }
//   return innerFn(N, []);
// }

// const sum3 = curry(_sum3);
// const sum4 = curry(_sum4);

// console.log(sum3(1)(3)(2));
// console.log(sum4(1)(3)(2)(10)(7));

// currying with varying quantity of args

const curry = fn => {
  const innerFn = (N, args) => {
    return (...x) => {
      if (N <= x.length) {
        return fn(...args, ...x);
      }
      return innerFn(N - x.length, [...args, ...x]);
    };
  };
  return innerFn(fn.length, []);
};

const sum3 = curry(_sum3);

sum3(2, 3)(4);
sum3(2)(3, 4);

// return function actualInnerFn(...a) {
//   if (n <= a.length) {
//     return fn(...args, a);
//   }
//   return innerFn(n - a.length, [...args, ...a]);
// }

const infiniteCurry = fn => {
  const next = (...args) => {
    return x => {
      if (!x) {
        return args.reduce((acc, a) => {
          return fn.call(fn, acc, a);
        }, 0);
      }
      return next(...args, x);
    };
  };
  return next();
};

const iSum = infiniteCurry((x, y) => x + y);
console.log(iSum(1)(3)(4)(2)(10)(7)());

const infiniteVarArgsCurry = (fn, seed) => {
  const reduceValue = (args, seedValue) =>
    args.reduce((acc, a) => {
      return fn.call(fn, acc, a);
    }, seedValue);
  const next = (...args) => {
    return (...x) => {
      if (!x.length) {
        return reduceValue(args, seed);
      }
      return next(...args, reduceValue(x, seed));
    };
  };
  return next();
};

const iSumVarArgs = infiniteVarArgsCurry((x, y) => x + y, 0);
const iMul = infiniteVarArgsCurry((x, y) => x * y, 1);

console.log(iSumVarArgs(1)(3, 4)(5, 6)(7, 8, 9)());
console.log(iMul(1)(3, 4)(5, 6)());
const sum = (...numbers) => numbers.reduce((acc, number) => acc + number, 2);
const answer = sum(1, 5, 20, 10);
console.log(answer);
