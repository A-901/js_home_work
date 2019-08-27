function checkForSpam(str) {
  let spamCheck = str.toLowerCase();
  console.log(spamCheck);
  if (spamCheck.includes('sale') ||
  spamCheck.includes('spam')) {

return spamCheck;
  }
else {
  return false;
  }
}

console.log(checkForSpam('Latest technology news')); 

console.log(checkForSpam('JavaScript weekly newsletter')); 

console.log(checkForSpam('Get best sale offers now!')); 

console.log(checkForSpam('[SPAM] How to earn fast money?')); 