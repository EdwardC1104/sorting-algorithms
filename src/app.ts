import selectionSort from "./selectionSort";
import bubbleSort from "./bubbleSort";
import insertionSort from "./insertionSort";
import quickSort from "./quickSort";
import mergeSort from "./mergeSort";

const unsortedData: number[] = [
  3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48,
];

console.log(unsortedData);

console.log(selectionSort([...unsortedData]));

console.log(bubbleSort([...unsortedData]));

console.log(insertionSort([...unsortedData]));

console.log(quickSort([...unsortedData]));

console.log(mergeSort([...unsortedData]));

console.log(unsortedData);
