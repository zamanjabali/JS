let total =4000;
let couponCode = 'DISCOUNT5';

let dicount = 0;

switch (couponCode) {
    case 'DISCOUNT5':
        dicount = 5;
        break;

          case 'DISCOUNT10':
        dicount = 10;
        break;

          case 'DISCOUNT20':
        dicount = 20;
        break;
    default:
        dicount = 0;
        break;
}
let finalBill = total - (total * dicount / 100);

console.log("Original Bill:", total);
console.log("Coupon Applied:", couponCode);
console.log("Final Bill after Discount:", finalBill);

