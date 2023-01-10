// 1

// let a = +prompt('Enter the namber a=');
// let b = +prompt('Enter the namber b=');

// function maxNumber(a, b) {
//     if (a > b) {
//         return a;
//     } else {
//         if (a = b) {
//             return a, b;
//         } else {
//             return b;
//         }
//     }
// }
// if (a === b) {
//     alert(`${maxNumber (a,b)} = ${ maxNumber (a,b)}`);
// }
// alert(maxNumber(a, b));

// console.log(a, b);






//  2
// let number = +prompt('Enter the number =');

// function revers(number) {
//   nunber = -number;
//   return nunber;
// }
// alert(revers(number));

// console.log(number);



//  3
// let number = prompt('Enter the number:');
// let count = prompt('Enter the count:');

// function three(number, count) {
//   return (number + 3 * count);
// }
// alert(three(+number, +count));

// console.log(number, count);




// let km = prompt('How many km do you want convert');
// let metric = prompt('What unit do you want to convert km: to "m" or to "cm"?');

// let kmToM = () => alert(`${km}km is ${km * 1000}m`);
// let kmToCm = () => alert(`${km}km is ${km * 100000}cm`);

// function getMetric(metric, m, cm) {
//     return metric == 'm' ? m() : metric == 'cm' ? cm() :
//         alert(`"${metric}" is not "m" or "cm", i can't convert`);   
// }


// getMetric(metric, kmToM, kmToCm);



let km = prompt('Скільки км ти хочеш перевести');
let metric = prompt('Перевести км в яку одиницю: m чи cm?');

let kmToM = () => alert(`${km} кілометр переводиться як ${km * 1000} m`);
let kmToCm = () => alert(`${km} кілометр переводиться як ${km * 100000} cm`);

function getMetric(metric, m, cm) {
    return metric == 'm' ? m() : metric == 'м' ? m() :  metric == 'с' ? cm() : metric == 'cm' ? cm() : alert(`невірні дані, спробуй ще`); 
}
getMetric(metric, kmToM, kmToCm);
console.log(km, metric);

