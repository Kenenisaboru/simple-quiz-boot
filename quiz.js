// Declare the questions and answers using an array according to you recommend 
const questions = [
    {
        "question": "What is used to structure web pages?",
        "options": ["HTML", "CSS", "JavaScript", "PHP"],
        "answer": "HTML"
    },
    {
        "question": "Which language is primarily used for styling web pages?",
        "options": ["HTML", "CSS", "JavaScript", "ReactJS"],
        "answer": "CSS"
    },
    {
        "question": "Which programming language is used for adding interactivity to web pages?",
        "options": ["HTML", "CSS", "JavaScript", "Python"],
        "answer": "JavaScript"
    },
    {
        "question": "Which tool is used to manage the styles of a website?",
        "options": ["JavaScript", "CSS", "Node.js", "PHP"],
        "answer": "CSS"
    },
    {
        "question": "What does 'CSS' stand for?",
        "options": ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Coded Style Sheets"],
        "answer": "Cascading Style Sheets"
    },
    {
        "question": "Which HTML tag is used to reference an external CSS file?",
        "options": ["&lt;style&gt;", "&lt;link&gt;", "&lt;script&gt;", "&lt;css&gt;"],
        "answer": "&lt;link&gt;"
    },
    {
        "question": "Which of these is a JavaScript framework?",
        "options": ["React", "Laravel", "Django", "Ruby on Rails"],
        "answer": "React"
    },
    {
        "question": "What does 'DOM' stand for in web development?",
        "options": ["Document Object Model", "Digital Object Manipulation", "Data Object Model", "Dynamic Online Model"],
        "answer": "Document Object Model"
    },
    {
        "question": "Which attribute in the <a> tag specifies the URL of the page the link goes to?",
        "options": ["href", "src", "alt", "title"],
        "answer": "href"
    },
    {
        "question": "Which of the following is used to store data in web browsers?",
        "options": ["Cookies", "LocalStorage", "SessionStorage", "All of the above"],
        "answer": "All of the above"
    }
];

//   The 'questions' array stores the questions, options, and correct answers

let currentQuestion = 0;  
let score = 0; 

//  Display the current question and its options
function displayQuestion() {
    const question = questions[currentQuestion]; // Access current question from the array
    const questionContainer = document.getElementById("question-container");
    const answersContainer = document.getElementById("answers-container");

    // Dynamically set the question and options in the HTML using DOM manipulation
    questionContainer.innerHTML = `<p>${question.question}</p>`;
    answersContainer.innerHTML = '';

    // Use a loop to display options for each question
    question.options.forEach(option => {
        answersContainer.innerHTML += `
            <label>
                <input type="radio" name="answer" value="${option}">
                ${option}
            </label><br>
        `;
    });
}

// ✅ Event listener for the submit button to handle user interaction (DOM manipulation)
document.getElementById("submit-btn").addEventListener("click", () => {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked'); // Get the selected answer

    // Conditional check to see if an answer is selected and then check if the answer is correct
    if (selectedAnswer) {
        // If the selected answer is correct, increment the score
        if (selectedAnswer.value === questions[currentQuestion].answer) {
            score++;
        }

        currentQuestion++;  

        
        if (currentQuestion < questions.length) {
            displayQuestion(); // Display the next question
        } else {
            alert(`Quiz completed! Your score is: ${score}/${questions.length}`); // End of quiz, show the score
        }
    } else {
        alert("Please select an answer."); // If no answer is selected, show an alert
    }
});

// Initially display the first question when the page loads
displayQuestion(); // Call the function to display the first question

//I writte your criteria boss in the  comment espetially your crateria regarding to the js





//"JazakAllahu Khairan to all HUCCISA members for your continuous support and guidance.
//  May Allah reward each one of you abundantly for your kindness, efforts, and contributions. 
// Your collective wisdom, dedication, and experience are a great blessing to student. 
// I am truly grateful to be a part of this wonderful group.
//  May Allah bless and reward you all for your hard work in making HUCCISA and espatially
//  those who recomend for web development.
