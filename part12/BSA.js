let arr = [2, 4, 5, 8, 9, 12, 20, 25, 67, 101, 125]
let index = binarySearch(arr, 0, arr.length - 1, 20)
if (index == -1) {
  console.log("Element not found")
} else {
  console.log("Element found at index", index)
}
function binarySearch(arr, first, last, target) {
  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    if (arr[mid] == target) return mid;
    else if (arr[mid] > target) last = mid - 1;
    else first = mid + 1;
  }
  return -1;
}