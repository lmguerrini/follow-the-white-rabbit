const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const chalk = require("chalk");

const story = {
    q:
        chalk.bgBlack.green(
            "Welcome in The Matrix! Would you like to enter? "
        ) +
        chalk.bgGreen.black("yes") +
        " " +
        chalk.bgGreen.black("no") +
        " ",
    answer: {
        no: chalk.bgBlack.green(
            "Actually it was a retoric question, since we're already in it. Hence there's nothing really to choose nor to enter. But ok, if that's what you prefer, have a nice day... in the Matrix!"
        ),
        yes: {
            q:
                chalk.bgBlack.green(
                    "Great, I guess you are ready to dive deep into the rabbit hole! Are you? "
                ) +
                chalk.bgGreen.black("yes") +
                " " +
                chalk.bgGreen.black("no") +
                " ",
            answer: {
                no: chalk.bgBlack.green(
                    "Oh ok. That means you're actually not ready for it yet. That's fine. But remember, from the Matrix you can't really escape. So just take the time you need and come back when you feel ready!"
                ),
                yes: {
                    q:
                        chalk.bgBlack.green(
                            "At last.. Welcome! As you no doubt have guessed, I am Morpheus. I imagine that right now, you’re feeling a bit like Alice. Hmm? Tumbling down the rabbit hole? "
                        ) +
                        chalk.bgGreen.black("..yes?") +
                        " ",
                    answer: {
                        yes: {
                            q:
                                chalk.bgBlack.green(
                                    "I can see it in your eyes. You have the look of a man who accepts what he sees because he is expecting to wake up. Ironically, this is not far from the truth. You really wanna know the truth, "
                                ) +
                                chalk.bgGreen.black("don't you?") +
                                " ",
                            answer: {
                                yes: {
                                    q:
                                        chalk.bgBlack.green(
                                            "Then I'm gonna tell it to you.. You're a slave like everyone else, you were born into bondage. Born into a prison that you cannot smell or taste or touch. A prison for your mind.  Unfortunately, no one can be told what the Matrix is. You have to see it for yourself. This is your last chance. After this there is no turning back. You take the blue pill, the story ends; you wake up in your bed and believe whatever you want to believe. You take the red pill, you stay in Wonderland and I show you how deep the rabbit hole goes. So, what do you choose? "
                                        ) +
                                        chalk.bgGreen.red("red") +
                                        " " +
                                        chalk.bgGreen.blue("blu") +
                                        " ",
                                    answer: {
                                        blu: chalk.bgBlack.green(
                                            "Ready to wake up? Or better, to go back to sleep... location.reload()!"
                                        ),
                                        red: chalk.bgBlack.green(
                                            "Nice choice. Then be ready to follow the white rabbit... "
                                        ),
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
};

function enterTheMatrix(storyObj) {
    rl.question(storyObj.q, (answer) => {
        if (storyObj.answer[answer]) {
            if (typeof storyObj.answer[answer] == "object") {
                enterTheMatrix(storyObj.answer[answer]);
            } else {
                console.log(storyObj.answer[answer]);
                console.log(whiteRabbit);
                rl.close();
            }
        } else {
            console.log(
                chalk.bgBlack.red(
                    "That is not the truth and you know it.. try again!"
                )
            );
            enterTheMatrix(storyObj);
        }
    });
}

enterTheMatrix(story);

const whiteRabbit = chalk.bgBlack.white(`
                                _
                      /\      .-" /
                     /  ;  .'  .' 
                     :   :/  .'   
                     \  ;-.'     
        .--""""--..__/     ´.    
    .'           .'    ´o    \   
   /                     ´    ;  
  :                  \       :  
.-;        -.         .__.-'  
:  ;          \     ,   ;       
'._:           ;   :   (        
    \/  .__    ;    \   -.     
    ;     "-,/_..--"-..__)    
    '""--.._:
    `);
