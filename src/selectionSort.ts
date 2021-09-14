export default function selectionSort(unsortedData: number[]) {
  for (
    let numberSorted = 0;
    numberSorted < unsortedData.length;
    numberSorted++
  ) {
    let smallestUnsortedIndex = numberSorted;

    for (let i = numberSorted; i < unsortedData.length; i++) {
      if (unsortedData[i] < unsortedData[smallestUnsortedIndex])
        smallestUnsortedIndex = i;
    }

    [unsortedData[numberSorted], unsortedData[smallestUnsortedIndex]] = [
      unsortedData[smallestUnsortedIndex],
      unsortedData[numberSorted],
    ];
  }

  return unsortedData;
}
