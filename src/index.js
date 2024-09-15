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
}

function merge(leftHalf, rightHalf, resultArray = []) {
  // const resultArray = [];
  // RECURSIVELY repeat process until both arrays are empty
  // BASE CASE: both arrays empty
  if (leftHalf.length + rightHalf.length === 0) return resultArray;

  const leftHalfFirstElement = leftHalf[0] || null; // FIXME: dont shift unless you're sure number is smaller
  console.log('leftHalfFirstElement:', leftHalfFirstElement);
  const rightHalfFirstElement = rightHalf[0] || null;
  console.log('rightHalfFirstElement:', rightHalfFirstElement);

  // if either is undefined (array.length ===0)

  // compare
  let smaller;
  smaller = leftHalfFirstElement <= rightHalfFirstElement ? 'left' : 'right';

  // if either array is null, push the other one
  if (leftHalfFirstElement === null) {
    resultArray.push(rightHalf.shift());
  } else if (rightHalfFirstElement === null) {
    resultArray.push(leftHalf.shift());

    //if neither array is null, compare the values
  } else if (smaller === 'left') {
    resultArray.push(leftHalf.shift());
  } else {
    resultArray.push(rightHalf.shift());
  }

  return merge(leftHalf, rightHalf, resultArray);
}
// const result = merge([5], [2, 1]);
// console.log('result:', result);

// function mergeSort(array) {
//   // define half

//   // is array length even or odd?
//   console.log('array:', array);

//   let [leftHalf, rightHalf] = splitArray(array);
//   console.log('leftHalf:', leftHalf);
//   console.log('rightHalf:', rightHalf);
//   // BASE CASE
//   if (array.length === 2) {
//     // unpack arrays before comparing, since these are single-item arrays
//     [leftHalf] = [...leftHalf];
//     [rightHalf] = [...rightHalf];

//     // SORT
//     if (leftHalf < rightHalf) {
//       array[0] = leftHalf;
//       array[1] = rightHalf;
//     } else {
//       array[1] = leftHalf;
//       array[0] = rightHalf;
//     }
//     console.log(`array sorted:${array}`);
//     return array;
//   }

//   if(array.length ===1){
//     return array
//   }

//   // RECURSIVE CASE
//   leftHalf = mergeSort(leftHalf);
//   rightHalf = mergeSort(rightHalf);
//   return [...leftHalf, ...rightHalf];
// }

// const testArray = [5, 2, 1, 3, 6, 4];

// const result = mergeSort(testArray);
// console.log('result:', result);

// function splitArray(array) {
//   let halfWay;
//   if (array.length % 2 === 0) {
//     // is even
//     halfWay = array.length / 2;
//   } else {
//     halfWay = Math.floor(array.length / 2);
//   }

//   const leftHalf = array.slice(0, halfWay);
//   const rightHalf = array.slice(halfWay);
//   return [leftHalf, rightHalf];
// }
