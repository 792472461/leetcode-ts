export default class Sort<T> {
  static swap = <T>(arr: T[], i: number, minIndex: number) => {
    ;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }

  // 选择排序
  static selectSort = <T>(arr: T[]) => {
    for (let i = 0; i < arr.length; i++) {
      let minIndex = i
      for (let j = i; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j
        }
      }
      Sort.swap(arr, i, minIndex)
    }
  }

  // 插入排序
  static insertionSort = <T>(arr: T[]) => {
    for (let i = 0; i < arr.length; i++) {
      const t = arr[i]
      let j
      for (j = i; j > 0 && arr[j - 1] > t; j--) {
        arr[j] = arr[j - 1]
      }
      arr[j] = t
    }
  }

  // 冒泡排序
  static bubbleSort = <T>(arr: T[]) => {
    for (let i = 0; i + 1 < arr.length; ) {
      // arr[0, i) 已排好序
      // 通过冒泡在 arr[i] 位置放上合适的元素
      let lastSwappedIndex = arr.length - 1
      for (let j = arr.length - 1; j > i; j--) {
        if (arr[j - 1] > arr[j]) {
          Sort.swap(arr, j - 1, j)
          lastSwappedIndex = j - 1
        }
      }
      i = lastSwappedIndex + 1
    }
  }

  // 希尔排序
  static shellSort = <T>(arr: T[]) => {
    let h = Math.floor(arr.length / 2)
    while (h >= 1) {
      for (let start = 0; start < h; start++) {
        for (let i = start + h; i < arr.length; i += h) {
          let t = arr[i]
          let j

          for (j = i; j > 0 && arr[j - h] > t; j -= h) {
            arr[j] = arr[j - h]
          }
          arr[j] = t
        }
      }
      h = Math.floor(h / 2)
    }
  }
}
