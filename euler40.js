// Problem 40
// Champernowne's Constant

function champernownesConstant() {
    let constant = '';
    let i = 1;

    while (constant.length <= 1000000) {
        constant += i;
        i++;
    }

    let product = 1;
    for (let j = 0; j <= 6; j++) {
        product *= constant.charAt(10 ** j - 1) - '0';
    }

    return product;
}

console.log(champernownesConstant());
