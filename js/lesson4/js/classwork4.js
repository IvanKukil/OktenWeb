function minValue (num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        console.log(num1);
    } else if (num2 < num3 && num2 < num1) {
        console.log(num2);
    } else {
        console.log(num3);
    }
}

minValue(2, -10, 0);

function maxValue (num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(num1);
    } else if (num2 > num1 && num2 > num3) {
        console.log(num2);
    } else {
        console.log(num3);
    }
}

maxValue(12, -100, 0);

const maxArray = [100, 200, 300, 6, 7, 324, -12, 543];

function maxArrayValue (array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

document.write(`<h2>The largest element of the array: ${maxArrayValue(maxArray)}</h2>`);

const minArray = [100, 200, 300, 6, 7, 324, -12, 543]
function minArrayValue(array) {
    let min = array[0];
    for (const element of array) {
        if(element < min){
            min = element;
        }
    }
    return min;
}
document.write(`<h2>The smallest element of the array: ${minArrayValue(minArray)}</h2>`);

function sum(array) {
    let result = 0;
    for (const arrayElement of array) {
        result+= arrayElement;
    }
    return result;
}
document.write(`<h2>Sum of array = ${sum(minArray)} </h2>`);

function average(array) {
    let result = 0;
    for (const arrayElement of array) {
        result+= arrayElement;
    }
    return result / array.length;
}
document.write(`<h2>Average of array = ${average(minArray)} </h2>`);

function minMax(arg) {
    let min = arguments[0];
    let max = arguments[1];
    for (const element of arguments) {
        if (element > max) {
            max = element;
        }
        if (element < min) {
            min = element;
        }
    }
    console.log(`max is ${max}`);
    return min;
}

document.write(`<h2>Min is: ${minMax(100, 20, 3, 100, 2021)}</h2>`);

