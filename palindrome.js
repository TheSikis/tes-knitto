function cekPalindrome(string) {
    const len = string.length;
    for (let c = 0; c < len / 2; c++) {
        if (string[c] !== string[len - 1 - c]) {
            return 'Bukan Palindrome';
        }
    }
    return 'Adalah Palindrome';
}

const string = Promt('Input Kata : ');

const value = cekPalindrome(string);

console.log(value);