const arr = [2,17,13,6,22,31,45,66,100,-18];

let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}
console.log('---------------------------------------------');

for (let j = 0; j < arr.length; j++) {
    console.log(arr[j]);
}
console.log('---------------------------------------------');

let x = 0;
while (x < arr.length) {
    if (x % 2 !== 0) {
        console.log(arr[x]);
    }
    x++;
}
console.log('---------------------------------------------');

for (let z = 0; z < arr.length; z++) {
    if (z % 2 !== 0) {
        console.log(arr[z]);
    }
}
console.log('---------------------------------------------');
let k = 0;
while (k < arr.length) {
    if (k % 2 === 0) {
        console.log(arr[k]);
    }
    k++;
}
console.log('---------------------------------------------');

for (let l = 0; l < arr.length; l++) {
    if (l % 2 === 0) {
        console.log(arr[l]);
    }
}
console.log('---------------------------------------------');

for (let c = 0; c < arr.length; c++){
    if (arr[c]%3 === 0){
        arr[c] = "okten";
    }
}
console.log(arr);
console.log('---------------------------------------------');

const arrReverse = [2,17,13,6,22,31,45,66,100,-18];
for (let j = arrReverse.length - 1; j >= 0; j--) {
    console.log(arrReverse[j]);
}