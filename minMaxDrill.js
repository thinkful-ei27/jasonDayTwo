function max(numbers) {
    // if the array is less than one element long
    if (numbers.length < 1) {
      return null;
    }
  
    else {
      let i = 1;
      // let the max be the first element
      let max = numbers[0];
      while (i < numbers.length) {
        // if the maximum is smaller than the next number
        // make that the new maximum
        if (max < numbers[i]) {
          max = numbers[i];
        }
      i++;
      }
      return max;
    }
  }
  
  function min(numbers) {
    // if the array is less than one element long
     if (numbers.length < 1) {
      return null;
    }
  
    else {
      let i = 1;
      // let the min be the first element
      let min = numbers[0];
      while (i < numbers.length) {
        // if the minimum is bigger than the next number
        // make that the new minimum
        if (min > numbers[i]) {
          min = numbers[i];
        }
      i++;
      }
      return min;
    }
  }
  
  /* From here down, you are not expected to 
     understand.... for now :)  
     
     
     Nothing to see here!
     
  */
  
  // tests
  
  function testFunctionWorks(fn, input, expected) {
    if (fn(input) === expected) {
      console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
      return true;
    } else {
      console.log(
        'FAILURE: `' +
          fn.name +
          '([' +
          input +
          '])` should be ' +
          expected +
          ' but was ' +
          fn(input)
      );
      return false;
    }
  }
  
  function testEmpty(fn) {
    if (fn([]) === null || fn([]) == undefined) {
      console.log(`SUCCESS: ${fn.name} works on empty arrays`);
      return true;
    } else {
      console.log(
        `FAILURE: ${fn.name} should return undefined or null for empty arrays`
      );
      return false;
    }
  }
  
  (function runTests() {
    // we'll use the variables in our test cases
    const numList1 = [-5, 28, 98, -20013, 0.7878, 22, 115];
    const realMin1 = numList1[3];
    const realMax1 = numList1[6];
    const numList2 = [0, 1, 2, 3, 4];
    const realMin2 = numList2[0];
    const realMax2 = numList2[4];
  
    const testResults = [
      testFunctionWorks(max, numList1, realMax1),
      testFunctionWorks(max, numList2, realMax2),
      testFunctionWorks(min, numList1, realMin1),
      testFunctionWorks(min, numList2, realMin2),
      testEmpty(max),
      testEmpty(min),
    ];
  
    const numPassing = testResults.filter(function(result) {
      return result;
    }).length;
    console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
  })();
  