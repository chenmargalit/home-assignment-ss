
const isPalindrome = (string) => {
  string = string.replace(/[^A-Z0-9]/gi, '').toLowerCase();

  if (string.length < 2) {
    console.log('not');
    return 'its not';
  }
  if (string == string.split('').reverse().join('')) {
    console.log('it is');
  } else {
    console.log('its not');
  }
};

isPalindrome('rent a car');
isPalindrome('aaabbbaaa');



