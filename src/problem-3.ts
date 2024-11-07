// problem-3

function countWordOccurrences(sentence: string, word: string) : number {
    const words = sentence.toLowerCase().split(' ');
    const wordInLowerCase = word.toLowerCase();
    let count: number = 0;
    words.forEach((item) => {
        if (item === wordInLowerCase) {
            count++
        }
    });
    return count;
}
console.log(countWordOccurrences("Bangladesh is my country. Bangla Is my language", "is"));
