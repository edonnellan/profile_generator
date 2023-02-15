const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What\'s your name? Nicknames are also acceptable :) :  ", (answer1) => {

  rl.question("What\'s and activity you like doing?  ", (answer2) => {
  
    rl.question("What do you listen to while doing that?  ", (answer3) => {

      rl.question("Which meal-time is your favourite?  ", (answer4) => {

        rl.question("What\'s your favourite thing to eat for that meal?  ", (answer5) => {

          rl.question("Which sport is yur absolute favourite?  ", (answer6) => {

            rl.question("What superpower would you choose?  ", (answer7) => {

              rl.question("Who would you want to play you in the movie of your life?  ", (answer8) => {
                console.log(`${answer1} loves listening to ${answer3} while ${answer2}, devouring ${answer5} for ${answer4}, prefers ${answer6} over any other sport, and is amazing at ${answer7}. In the movie of their life, ${answer1} wants ${answer8} to play them!`);
                rl.close();
              })
            })
          })
        })
      })
    })

  });
});


