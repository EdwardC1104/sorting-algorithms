export default function quickSort(
  unsortedArray: number[],
  minIndex: number = 0,
  maxIndex: number = unsortedArray.length - 1
) {
  if (minIndex < maxIndex) {
    const partitionIndex = partion(unsortedArray, minIndex, maxIndex);
    quickSort(unsortedArray, minIndex, partitionIndex - 1);
    quickSort(unsortedArray, partitionIndex + 1, maxIndex);
  }
  return unsortedArray;
}

function partion(unsortedArray: number[], minIndex: number, maxIndex: number) {
  const pivot = unsortedArray[maxIndex];
  let i = minIndex - 1;

  for (let j = minIndex; j <= maxIndex - 1; j++) {
    if (unsortedArray[j] < pivot) {
      i++;
      [unsortedArray[i], unsortedArray[j]] = [
        unsortedArray[j],
        unsortedArray[i],
      ];
    }
  }
  [unsortedArray[i + 1], unsortedArray[maxIndex]] = [
    unsortedArray[maxIndex],
    unsortedArray[i + 1],
  ];
  return i + 1;
}
