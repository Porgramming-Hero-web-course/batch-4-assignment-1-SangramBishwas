// Problem-2
function removeDuplicates(arr: number[]): number[] {
    const result = arr.filter((num, i) => arr.indexOf(num) === i);
    return result;
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9, 9]));
// Sample Output:[1, 2, 3, 4, 5]

