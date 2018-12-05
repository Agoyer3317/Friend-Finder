let questions = [
  {
    testQuestion: "Can you change a flat tire.",
    Answers: [1, 2, 3, 4, 5]
  },
  {
    testQuestion: "You like a clean house.",
    Answers: [1, 2, 3, 4, 5]
  },
  {
    testQuestion: "You are not a dumbass.",
    Answers: [1, 2, 3, 4, 5]
  },
  {
    testQuestion: "You like to gamble.",
    Answers: [1, 2, 3, 4, 5]
  },
  {
    testQuestion: "You like to drink alcohol.",
    Answers: [1, 2, 3, 4, 5]
  },
  {
    testQuestion: "Your goal is to be on Disability one day.",
    Answers: [1, 2, 3, 4, 5]
  }
];

// three question, no correct answers, answers = 1,2,3,4,5

let start = () => {
  // For loop for the question
  for (let i = 0; i < questions.length; i++) {
    // Create the question div
    const question = $("<div />");
    // Set the question's ID
    question.attr("id", `question${i}`);
    // Add its class
    question.addClass("question-css");
    // Set its data-answer attribute
    question.data("answer", questions[i].CorrectAnswer);
    // Set its innerText
    question.text(questions[i].testQuestion);

    // For loop for answers
    let answersArray = questions[i].Answers;

    for (let j = 0; j < answersArray.length; j++) {
      // Create the answer radio input
      const answer = $("<input />");
      // Set its type to radio
      answer.attr("type", "radio");
      // Add its class
      answer.addClass("answer-css");
      // Set the answer's ID
      answer.attr("id", `answer${i}`);
      // Set its name
      answer.attr("name", `answer${i}`);
      // Set its value
      answer.val(answersArray[j]);

      // Create the label for the answer
      const label = $("<label />");
      // Set its for attribute
      label.attr("for", `answer${i}`);
      // Set the label's text
      label.text(answersArray[j]);

      // Append a line between each answer, then the answer, then its label
      question
        .append("<br />")
        .append(answer)
        .append(label);
    }

    // Append the question to the "#questions" form and add a break between questions
    $("#questions")
      .append(question)
      .append("<br />");
  } // For loop ends

  // Add the "Submit" button
  $("#questions").append('<input type="submit" value="Submit">');
}; // End start function

start();

$("#questions").on("submit", function(event) {
  event.preventDefault();
  tallyScores();
}); //closes submit

let tallyScores = () => {
  let surveyAnswers = {
    photo: $("#photoID")
      .val()
      .trim(),
    score: [],
    name: $("#nameID")
      .val()
      .trim()
  };

  for (let i = 0; i < questions.length; i++) {
    let answerSelected = $('input[name="answer' + i + '"]:checked').val();
    surveyAnswers.score.push(answerSelected);
  } //closes forloop
  console.log(surveyAnswers);

  // surveyAnsers being set to the back end (apiRoutes.js)
  $.ajax({
    url: "/friends",
    method: "POST",
    data: surveyAnswers
  }).then(function(data) {
    $("#questions").hide();
    $("#results").show();

    const name = $("<div />");
    name.text(data.name);

    const img = $("<img />");
    img.attr("src", data.photo);
    img.attr("alt", data.name);

    $(".match")
      .append(name)
      .append(img);

    console.log("data from survey.html" + data);
  });
}; //closes tallyscores
