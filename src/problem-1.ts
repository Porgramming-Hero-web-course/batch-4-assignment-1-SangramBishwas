{
    function sumArray(numbers: number[]): number {
        return numbers.reduce((acc, val) => acc + val);

    }
    console.log(sumArray([1, 2, 3, 4, 100]));
}
