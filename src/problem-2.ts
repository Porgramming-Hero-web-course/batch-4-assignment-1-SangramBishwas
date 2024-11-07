// Problem-2
function removeDuplicates(nums: number[]): number[] {
    const result = nums.filter((num, i) => nums.indexOf(num) === i);
    return result;
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9, 9]));
// Sample Output:[1, 2, 3, 4, 5]

