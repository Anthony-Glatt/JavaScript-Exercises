//1. Take a min and max number. Using those create an array that has the numbers from min to max in it.
function arrayFromRange(min, max) {
    let a = [];
    for (let i = min; i <= max; i++)
        a.push(i);
    return a;
}
let numbers = arrayFromRange(1, 4);
console.log(numbers);


//2. Build a function that search an array for an element without using the includes method.
const numbers = [1, 2, 3, 4];

function has(array, searchElement) {
    for (let n of array)
        if (n === searchElement)
            return true;
    return false;
}

console.log(has(numbers, 5));


//3. Create a new array, from an exisiting array, where a value has been excluded.
const numbers = [1, 2, 3, 4]

function except(array, excluded) {
    const output = [];
    for (let n of array)
        if (n != excluded)
            output.push(n);
    return output;
}

console.log(except(numbers, 4))


//4. Move an element of an array by a set amount.
const numbers = [1, 2, 3, 4]

function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('Invalid offest');
        return;
    }

    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
}

console.log(move(numbers, 2, 1));


//5. Count the number of occurences of a search element in an array.

const numbers = [1, 2, 3, 4, 2, 2];

function countOccurrences(array, searchElement) {
    let count = 0;
    for (let n of array)
        if (n === searchElement)
            count++;
    return count;
}

console.log(countOccurrences(numbers, 2));

//Another way to accomplish this exercise
function countOccurrences(array, searchElement) {
    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement)
        return accumulator + occurrence;
    }, 0);
}


//6. Find the max number in an array

const numbers = [1, 2, 3, 4, 2, 2]

function getMax(array) {
    if (array.length === 0) return undefined;

    let max = array[0];

    for (let i = 1; i < array.length; i++)
        if (array[i] > max)
            max = array[i];
    return max;
}

console.log(getMax(numbers));

//Same exercise with reduce function

function getMax(array) {
    if (array.length === 0) return undefined;

    array.reduce((accumulator, current) => (accumulator > current) ? accumulator : current);
}

//7. Take movies array and select movies from 2018 with rating > 4. Then sort them by rating in descending order. Finally display their title.

const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
];

const titles = movies.filter(m => m.year === 2018 && m.rating >= 4).sort((a, b) => a.rating - b.rating).reverse().map(m => m.title);

console.log(titles);
