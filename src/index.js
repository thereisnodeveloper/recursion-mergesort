// #region required-template
import './reset.css';
import './style.css';

// eslint-disable-next-line no-unused-vars
const testElement = document.createElement('div');
// #endregion

// asumptions: array.length > 1

function mergeSort(array) {
  // split the array
  // look at LEFT half
  // if n=1, it's sorted, return
  // look at the RIGHT half
  // if n=1, it's sorted, return
  const [leftHalf, rightHalf] = splitArray(array);
  // merge(leftHalf,rightHalf);
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
console.log(merge([32, 1], [3, 5]));

function splitArray(array) {
  let halfWay;
  if (array.length % 2 === 0) {
    // is even
    halfWay = array.length / 2;
  } else {
    halfWay = Math.floor(array.length / 2);
  }

  const leftHalf = array.slice(0, halfWay);
  const rightHalf = array.slice(halfWay);
  return [leftHalf, rightHalf];
}
