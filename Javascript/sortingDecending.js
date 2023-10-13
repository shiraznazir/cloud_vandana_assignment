
const sorting = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let leftArr = [];
  let rightArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  return [...sorting(leftArr), pivot, ...sorting(rightArr)];
};

let arr = [12, 4, 78, 34, 67, 98, 32];
console.log(sorting(arr));
