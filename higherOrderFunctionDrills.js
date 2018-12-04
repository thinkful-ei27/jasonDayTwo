// https://github.com/rich-at-thinkful/ft-curric-gists/blob/master/fundamentals/higher-order-functions-drills.md


//------------------------------
// 1 Functions as Arguments Drill #1


function repeat(fn, n) {
    for (let i = 0; i<n; i++) {
        fn();
    }
}

function hello() {
    console.log('Hello world');
}

function goodbye() {
    console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);


//------------------------------
// 2 Functions as Arguments Drill #2


function filter(arr, fn) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) === true) {
            newArray.push(arr[i]);
        }
    }

    return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES


//------------------------------
// 3 Functions as Return Values


function hazardWarningCreator(typeOfWarning) {
    let warningCounter = 0;
    let timeOrTimes = "";
    return function(location) {
        warningCounter++;
        if (warningCounter === 1 ) {
            timeOrTimes = "time";
        }
        else {
            timeOrTimes = "times"
        }
        console.log(`Danger! there is a ${typeOfWarning} hazard at ${location}!`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${timeOrTimes} today!`);
}
}
const rocksWarning = hazardWarningCreator('Rocks on the Road');
const smogWarning = hazardWarningCreator('Hard to Breathe');
const impactWarning = hazardWarningCreator('Brace Yourself');

rocksWarning('Main St and Pacific Ave');
smogWarning('Multnomah County');
smogWarning('Denver County');
rocksWarning('Centinela Ave and Olympic Blvd');
impactWarning('North America');
impactWarning('North Sea');


//------------------------------
//  4 forEach, filter, and map


const turtleMover = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
let totalSteps = 0;

const positives = turtleMover.filter(steps => steps[0] >= 0 && steps[1] >= 0);
console.log(positives);

const incrementalSteps = turtleMover.map(item => item[0] + item[1]);
console.log(incrementalSteps);

const playByPlay = turtleMover.forEach(function(item) {
    console.log(`The turtle took ${item[0]} step(s) forward and ${item[1]} step(s) to the left!`)
});

