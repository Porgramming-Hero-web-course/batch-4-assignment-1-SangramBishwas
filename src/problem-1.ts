{
    function sumArray(numbers: number[]): number {
        return numbers.reduce((acc, val): number => acc + val, 0);

    }
    console.log(sumArray([1, 2, 3, 4, 100]));
}
