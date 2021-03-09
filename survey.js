const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your full legal name? ', (legalName) => {
  rl.question('What country were you born in? ', (birthPlace) => {
    rl.question('What country do you live in now? ', (country) => {
      rl.question('What is your mother\'s maiden name? ', (maidenName) => {
        rl.question('What is your exact date of birth? ', (dateOfBirth) => {
          rl.question('What is your full address? ', (address) => {
            rl.question('What is your social security number? ', (ssn) => {
              console.log(`Fantastic! Your profile should read 'I'm ${legalName}, live in the country of ${country} and I'm pretty naive! I was born in ${birthPlace} ${dateOfBirth}! My mom was born Miss ${maidenName}! She'd probably be disappointed in me if she knew I gave out my address, ${address}, and ssn: ${ssn}! That's sarcasm, ${legalName}! Practice better internet safety! You're lucky we didn't ask for your credit card number! Don't you dare give out this level of information out ever again!`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
