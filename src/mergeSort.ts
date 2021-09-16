export default function mergeSort(unsortedArray: number[]) {
  if (unsortedArray.length > 1) {
    const middlePoint = Math.floor(unsortedArray.length / 2);
    const leftHalf = unsortedArray.slice(0, middlePoint);
    const rightHalf = unsortedArray.slice(middlePoint, unsortedArray.length);

    mergeSort(leftHalf);
    mergeSort(rightHalf);

    let leftIndex = 0;
    let rightIndex = 0;
    let mergedIndex = 0;

    while (leftIndex < leftHalf.length && rightIndex < rightHalf.length) {
      if (leftHalf[leftIndex] < rightHalf[rightIndex]) {
        unsortedArray[mergedIndex] = leftHalf[leftIndex];
        leftIndex++;
      } else {
        unsortedArray[mergedIndex] = rightHalf[rightIndex];
        rightIndex++;
      }
      mergedIndex++;
    }

    while (leftIndex < leftHalf.length) {
      unsortedArray[mergedIndex] = leftHalf[leftIndex];
      leftIndex++;
      mergedIndex++;
    }
    while (rightIndex < rightHalf.length) {
      unsortedArray[mergedIndex] = rightHalf[rightIndex];
      rightIndex++;
      mergedIndex++;
    }
  }

  return unsortedArray;
}
