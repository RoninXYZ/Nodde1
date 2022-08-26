var validator = require('validator');

console.log(validator.isEmail("sandika@gmail.com"));
console.log(validator.isMobilePhone('08112345678' , 'id-ID'));
console.log(validator.isNumeric('08112345678a' ))