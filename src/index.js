module.exports = function toReadable(number) {
    const arr = [
        '',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
    ];
    const arrDozens = [
        '',
        '',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
    ];

    let dozens = Math.floor(number / 10);
    let units = number - dozens * 10;
    const hundreds = Math.floor(number / 100);
    if (number === 0) {
        return 'zero';
    } else if (number > 0 && number < 20) {
        return arr[number];
    } else if (number >= 20 && number < 100) {
        return units === 0
            ? `${arrDozens[dozens]}`
            : `${arrDozens[dozens]} ${arr[units]}`;
    } else if (number >= 100 && number < 1000) {
        dozens = dozens - hundreds * 10;
        number = number - hundreds * 100;
        const result =
            `${arr[hundreds]} hundred` +
            (number % 100 === 0
                ? ''
                : number < 20
                ? ` ${arr[number]}`
                : units === 0
                ? ` ${arrDozens[dozens]}`
                : ` ${arrDozens[dozens]} ${arr[units]}`);
        return result;
    }
};
