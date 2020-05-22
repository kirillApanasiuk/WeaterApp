// setTimeout(() => {
//   console.log('2 Seconds are up!');
// }, 2000);

// const names = ['Andrew', 'Jen', 'Jess'];

// const shortNames = names.filter((name) => {
//   return name.length <= 4;
// });

// const geocode = (address: string, callback: (data: Object) => void) => {
//   setTimeout(() => {
//     const data = {
//       latitiude: 0,
//       longitude: 0,
//     };
//     callback(data);
//   }, 2000);
// };
// geocode('Philadelphia', (info) => {
//   console.log(info);
// });

interface ISumFunction {
  (a: number, b: number): void;
}
interface IAddFunction {
  (a: number, b: number, sum: ISumFunction): void;
}

const add: IAddFunction = (a: number, b: number, sum: (first: number, second: number) => void) => {
  setTimeout(() => {
    console.log(a, b);
    sum(a + b, a - b);
  }, 2000);
};

add(1, 4, (result, a) => {
  console.log(result);
  console.log(a);
});
