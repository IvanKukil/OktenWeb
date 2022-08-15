function areaRectangle (a,b) {
    return a*b;
}
document.write(`<div><p>Площа прямокутника дорівнює: ${areaRectangle(10,20)}</p> </div>`)
// const areaRectangle = (a,b) => a * b;
// console.log(`area of rectangle is ${areaRectangle(10, 20)}`);
// ********************************************************************************************

function areaCircle(r) {
    return 3.14*r*r;
}
console.log('area of circle is ' + areaCircle(2));
// const areaCircle = (r) => r**2 * 3.14;
// console.log(`area of circle is ${areaCircle(3)}`);
// ********************************************************************************************

function areaCylinder(r,h) {
    return 2 * 3.14 * r * h;
}
document.write(`<div><p><strong>Площа циліндра дорівнює: ${areaCylinder(2,3)}</strong></p></div>`)
// const areaCylinder = (h,r) => 2 * 3.14 * r * h;
// console.log('area of cylinder is ' + areaCylinder(2, 3));
// ********************************************************************************************

const getArray = (array) => {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}
const arr = [1,4,5,8,'dfdfd','aaaaa'];
getArray(arr);
// const getArray = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// }
// let arr = [1,5,6,434, 'sfsdf'];
// getArray(arr);
// ********************************************************************************************
const textP = (text) => {
    document.write(`<p>${text}</p>`)
}
textP("this is it");
// ********************************************************************************************














// const unList = (liText) => {
//     document.write(`<ul>`);
//     document.write(`<li>${liText}</li>`);
//     document.write(`<li>${liText}</li>`);
//     document.write(`<li>${liText}</li>`);
//     document.write(`</ul>`);
// }
// unList('Text');
// ********************************************************************************************
// const unListDynamic = (liText, n) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < n; i++) {
//         document.write(`<li>${liText}</li>`);
//
//     }
//     document.write(`</ul>`);
// }
// unListDynamic('5 li', 5);
// ********************************************************************************************
// const olOfArray = (array) => {
//     document.write(`<ol>`);
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ol>`);
// }
// olOfArray(arr);
// ********************************************************************************************
// let arrayOfObj = [{id: 10, name: 'John', age:35}, {id: 12, name: 'Alice', age:25}, {id: 26, name: 'Bob', age:27}];
// const outputArrayOfObjects = (array) => {
//     for (const arrayElement of array) {
//         document.write(`<div>id: ${arrayElement.id}, name: ${arrayElement.name}, age: ${arrayElement.age} </div>`);
//     }
// }
//
// outputArrayOfObjects(arrayOfObj);