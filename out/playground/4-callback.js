"use strict";
// setTimeout(() => {
//   console.log('2 Seconds are up!');
// }, 2000);
const add = (a, b, sum) => {
    setTimeout(() => {
        console.log(a, b);
        sum(a + b, a - b);
    }, 2000);
};
add(1, 4, (result, a) => {
    console.log(result);
    console.log(a);
});
//# sourceMappingURL=4-callback.js.map