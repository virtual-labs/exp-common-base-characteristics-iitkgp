/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var quizJSON = {
    "info": {
        "name": "Test Your Knowledge!!",
        "main": "<p>Think you're smart enough to be on Jeopardy? Find out with this super crazy knowledge quiz!</p>",
        "results": "<p>Learn More.</p>",
        "level1": "Jeopardy Ready",
        "level2": "Jeopardy Contender",
        "level3": "Jeopardy Amateur",
        "level4": "Jeopardy Newb",
        "level5": "Stay in school, kid..." // no comma here
    },
    "questions": [
        {// Question 1 - Multiple Choice, Single True Answer
            "q": "What is the typical value of the current gain of a common-base configuration?",
            "a": [
                {"option": "Undefined", "correct": false},
                {"option": "Less than 1", "correct": true},
                {"option": "  Between 1 and 50 ", "correct": false},
                {"option": " Between 100 and 200", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which of the h-parameters corresponds to re in a common-base configuration?  ",
            "a": [
                {"option": "h<sub>ib</sub> ", "correct":true},
                {"option": "  h<sub>fb </sub>  ", "correct": false},
                {"option": "h<sub>rb</sub>  ", "correct": false},
                {"option": " h<sub>ob</sub>", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 3 - Multiple Choice, Single True Answer
            "q": "What is the range of the input impedance of a common-base configuration? ",
            "a": [
                {"option": "1 k&#937; to 5 k&#937; ", "correct": false},
                {"option": " 100 k&#937;to 500 k&#937;  ", "correct": false},
                {"option": " 1 M&#937; to 2 M&#937; ", "correct": false},
                {"option": "  A few ohms to a maximum of 50&#937;", "correct": true} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
 {// Question4 - Multiple Choice, Single True Answer
            "q":    "What is &#946;<sub>dc</sub> equal to?"  ,
            "a":[
                 {"option": "I<sub>B</sub> / I<sub>E</sub> ", "correct": false},
                {"option": " I<sub>C</sub> / I<sub>E</sub>  ", "correct": false},
                {"option": " I<sub>C</sub> / I<sub>B</sub>", "correct": true},
                {"option": "  None of the above", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question5 - Multiple Choice, Single True Answer
            "q":    "For a properly biased pnp transistor, letI<sub>C</sub> = 10 mA and I<sub>E</sub> = 10.2 mA. What is the level of I<sub>B</sub>?"  ,
            "a":[
                 {"option": "0.2 A ", "correct": false},
                {"option": " 200 mA ", "correct": false},
                {"option": " 200 &#956;A	", "correct": true},
                {"option": "  20.2 mA", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question6 - Multiple Choice, Single True Answer
            "q":    "Determine the value of &#945;  when &#946; = 100."  ,
            "a":[
                 {"option": "1.01 ", "correct": false},
                {"option": " 0.99 ", "correct": true},
                {"option": " 101	", "correct": false},
                {"option": "  Cannot be solved with the information provided", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        }
     ]
};




