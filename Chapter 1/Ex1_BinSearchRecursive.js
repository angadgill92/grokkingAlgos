// Data definition
// arr is a sorted array of numbers
// examples : [1, 4, 7, 8, 9, 10, 15]

// term is a number
// const fnForArr = arr => (...arr)

// arr, term => number
// Takes a sorted array and a search term and returns position of the term is in the array
const binarySearch = (arr, term) => {
  const repeat = (a, t, low, high) => {
    let mid = Math.floor((low + high) / 2)
    if (a[mid] === t) return mid
    if (a[mid] > t) return repeat(a, t, low, mid - 1)
    if (a[mid] < t) return repeat(a, t, mid + 1, high)
    return false
  }
  return repeat(arr, term, 0, arr.length - 1)
}

// let a = [10, 12, 23, 34, 55, 76, 79, 85, 89, 98, 105, 110]
// console.log(binarySearch(a, 79))
