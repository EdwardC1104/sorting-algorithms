export default function insertionSort(unsortedData: number[]) {
  for (
    let unsortedIndex = 1;
    unsortedIndex < unsortedData.length;
    unsortedIndex++
  ) {
    const element = unsortedData[unsortedIndex];

    let sortedIndex = unsortedIndex - 1;

    while (sortedIndex > -1 && element < unsortedData[sortedIndex]) {
      unsortedData[sortedIndex + 1] = unsortedData[sortedIndex];
      sortedIndex--;
    }
    unsortedData[sortedIndex + 1] = element;
  }

  return unsortedData;
}
