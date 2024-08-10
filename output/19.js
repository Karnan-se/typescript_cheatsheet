"use strict";
// 19. Income tax is calculated as per the following table 
function calculatetax(annualincome) {
    if (annualincome <= 250000) {
        return 'no Tax';
    }
    if (annualincome <= 500000) {
        return (annualincome * 5) / 100;
    }
    if (annualincome <= 1000000) {
        return (annualincome * 10) / 100;
    }
    if (annualincome <= 5000000) {
        return (annualincome * 30 / 100);
    }
    return 0;
}
console.log(calculatetax(495000));
console.log(calculatetax(500000));
