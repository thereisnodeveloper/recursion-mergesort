// #region required-template
import './reset.css';
import './style.css';

// eslint-disable-next-line no-unused-vars
const testElement = document.createElement('div');
// #endregion

// asumptions: array.length > 1

function sortTwo(left, right) {
  if (left <= right) return [left, right];
  return [right, left];
}

function mergeSort(array) {
  let isSorted = false;
  let result;
  // BASE CASE

  // case: array is just 1 number
  if (array.length === 1) {
    isSorted = true;
    result = array;
  }
  if (isSorted) return result;

  // case: array is 2 numbers
  if (array.length === 2) {
    const [leftHalf, rightHalf] = splitArray(array);
    isSorted = true;
    result = sortTwo(leftHalf, rightHalf);
  }
  if (isSorted) return result;

  // RECURSIVE CASE
  else
   {
    let [leftHalf, rightHalf] = splitArray(array);
    leftHalf =  mergeSort(leftHalf); 
    rightHalf = mergeSort(rightHalf)
    result = merge(leftHalf,rightHalf)
    return result
  }

}

function merge(leftHalf, rightHalf, resultArray = []) {
  // const resultArray = [];
  // RECURSIVELY repeat process until both leftHalf and rightHalf are empty

  // BASE CASE: both arrays empty
  if (leftHalf.length + rightHalf.length === 0) return resultArray;
  const leftHalfFirstElement = leftHalf[0];
  console.log('leftHalfFirstElement:', leftHalfFirstElement);
  const rightHalfFirstElement = rightHalf[0];
  console.log('rightHalfFirstElement:', rightHalfFirstElement);

  // if either is undefined (array.length ===0)

  // compare
  let smaller;
  smaller = leftHalfFirstElement <= rightHalfFirstElement ? 'left' : 'right';

  // if either array's first element is null, push the other one
  if (leftHalfFirstElement === null || leftHalfFirstElement === undefined) {
    resultArray.push(rightHalf.shift());
  } else if (rightHalfFirstElement === null || rightHalfFirstElement === undefined) {
    resultArray.push(leftHalf.shift());

    // if neither array's first element is null, compare the values
  } else if (smaller === 'left') {
    resultArray.push(leftHalf.shift());
  } else {
    resultArray.push(rightHalf.shift());
  }

  return merge(leftHalf, rightHalf, resultArray);
}

function splitArray(array) {
  console.log('splitting array...')
  let halfWay;
  if (array.length % 2 === 0) {
    // is even
    halfWay = array.length / 2;
  } else {
    halfWay = Math.floor(array.length / 2);
  }

  const leftHalf = array.slice(0, halfWay);
  const rightHalf = array.slice(halfWay);
  const result = [leftHalf, rightHalf]
  console.log('result:', result)
  return result;
}


console.log( mergeSort([5,2,1,3,6,4]))