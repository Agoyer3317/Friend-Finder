let questions = [{
    testQuestion: "Which fictional city is the home of Batman?",
    Answers: ['Chicago', 'Gotham City', 'Blueberry Town', 'Waleska'],
    CorrectAnswer: "Gotham City"
},
{
    testQuestion: "In which sport would you perform the Fosbury Flop",
    Answers: ['Gymnastics', 'Diving', 'The high jump', 'Basketball'],
    CorrectAnswer: "The high jump"
},
{
    testQuestion: "Spinach is high in which mineral?",
    Answers: ['Biotite', 'Chromite', 'Margarite', 'Iron'],
    CorrectAnswer: "Iron"
}, 
{
    testQuestion: "What is a Geiger Counter used to detect?",
    Answers: ['Margarite', 'Chromite', 'Radiation', 'Iron'],
    CorrectAnswer: "Radiation"
},
{
    testQuestion: "Which type of dog has breeds called Scottish, Welsh and Irish?",
    Answers: ['Beagle', 'Terrier', 'Weimaraner', 'Vizsla'],
    CorrectAnswer: "Terrier"
},
{
    testQuestion: "Babe Ruth is associated with which sport?",
    Answers: ['AnsOne', 'AnsTwo', 'AnsThree', 'Baseball'],
    CorrectAnswer: "Baseball"
},
{
    testQuestion: "Who was known as the Maid of Orleans?",
    Answers: ['Joan of Arc', 'Christina, Queen Of Sweden', 'Elizabeth II', 'Adele'],
    CorrectAnswer: "Joan of Arc"
},
{
    testQuestion: "In the film Babe, what type of animal was Babe?",
    Answers: ['AnsOne', 'A pig', 'AnsThree', 'Iron'],
    CorrectAnswer: "A pig"
},
{
    testQuestion: "What was Mohammed Ali’s birth name?",
    Answers: ['AnsOne', 'A pig', 'AnsThree', 'Cassius Clay'],
    CorrectAnswer: "Cassius Clay"
},
{
    testQuestion: "Traditionally, how many Wonders of the World are there",
    Answers: ['AnsOne', 'A pig', 'Seven', 'Cassius Clay'],
    CorrectAnswer: "Seven"
}]

let start = () => {
    //for loop for the question
    for (let i = 0; i < questions.length; i++) {
        console.log(questions[i].testQuestion);
        $('#questions').append('<div class="question-css" id="question' + i + '" data-answer="' + questions[i].CorrectAnswer + '">' + questions[i].testQuestion + '</div>')
        $('#questions').append('<br>')
        
        //for loop for answers
        let answersArray = questions[i].Answers;
        for (let j = 0; j < answersArray.length; j++) {
            $('#question' + i).append('<br>')
            $('#question' + i).append('<input class="answer-css" name="answer' + i + '" type="radio" value="' + answersArray[j]+'">')
            $('#question' + i).append(answersArray[j])

            // <input type="text" name="firstname" value="Mickey">

            $('#question' + i).append('<br>')
        }
        $('#questions').append('<br>')

    }//for loop ends
    $('#questions').append('<input type="submit" value="Submit">')
};//end start function

start();