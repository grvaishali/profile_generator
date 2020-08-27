const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let para = '';

rl.question('What\'s your name? ', (answer) => {
  para += 'Nice name ' + answer;
  rl.question('What\'s an activity you like doing? ', (answer) => {
    para += '. You shall do something more intersting than ' + answer;
    rl.question('What do you listen to while doing that?', (answer) => {
      para += '. Atleast ' + answer + ' is a good choice';
      rl.question('Which meal is your favourite?', (answer) => {
        para += '. Go have a ' + answer;
        rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
          para += '. Hope you won\'t get ' + answer;
          rl.question('Which sport is your absolute favourite?', (answer) => {
            para += '. Atleast we both like ' + answer;
            rl.question('What is your superpower?', (answer) => {
              para += '. Is that really a superpower: ' + answer;
              console.log(para);
              rl.close();
            });
          });
        });
      });
    });
  });
});
