export default function bubbleSort(unsortedData: number[]) {
  let swapped = true;
  let indexOfLastUnsortedElement = unsortedData.length;
  while (swapped) {
    swapped = false;
    for (let i = 1; i < indexOfLastUnsortedElement; i++) {
      if (unsortedData[i - 1] > unsortedData[i])
        [unsortedData[i - 1], unsortedData[i]] = [
          unsortedData[i],
          unsortedData[i - 1],
        ];
      swapped = true;
    }
    indexOfLastUnsortedElement--;
  }
  return unsortedData;
}
