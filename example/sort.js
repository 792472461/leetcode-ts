const { selectSort, insertionSort, bubbleSort, shellSort } = require('../dist/leetcode.umd')
/**
 *
 * @param {Function} sort 排序方法
 * @param {*} maxIndex 最大多少项
 * @returns {number} 排序耗时(ms)
 */
function createSort(sort, maxIndex = 10) {
  const arr = []
  for (let i = 0; i < maxIndex; i++) {
    arr.push(Math.floor(Math.random() * max * 10))
  }
  if (!sort || typeof sort !== 'function') {
    return new Error(`${sortType}对应排序方法未找到`)
  }
  const startTime = new Date().getTime()
  sort(arr)
  console.log(
    `${sort.name}排序结束----耗时${new Date().getTime() - startTime}ms`,
    maxIndex <= 10 ? arr : ''
  )
  return new Date().getTime() - startTime
}

const max = 100000

// 选择排序
createSort(selectSort, max)

// 插入排序
createSort(insertionSort, max)

// 希尔排序
createSort(shellSort, max)

// 冒泡排序
createSort(bubbleSort, max)
