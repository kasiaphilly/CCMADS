//accessors
let q1 = document.getElementById('coffee');
let q2 = document.getElementById('beans');
let q3 = document.getElementById('surrondings');
let q4 = document.getElementById('#wifi');
let q5 = document.getElementById('food');
let q6 = document.getElementById('people');
let q7 = document.getElementById('pets');
let q8 = document.getElementById('kids');
let q9 = document.getElementById('times');
let q10 = document.getElementById('cool');

const submit = $('#submitAnswers');
const recommend =$('#recommendation');

// listens for form submission
$('#submitAnswers').on("click", function(event){
  if (confirm("Are you sure?")){
    event.preventDefault();
    findMatch();
  }
});

// creates array with question accessors
let questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

//creates array with answer values
let answerArray =[];
for (let i=0, i=questionArray.length, i++){
  answerArray[i] = questionArray[i].options[questionArray[i].selectedIndex].value;
}

//creates array with answer contents
let AnswerTxtArray=[];
for (let i=0, i=questionArray.length, i++){
  answerTxtArray[i] = questionArray[i].options[questionArray[i].selectedIndex].text;
}


//finds the match
function findMatch() {
  if answerArray[0]===1{
    recommend.append("<p>This is your recommendation number 1</p>");
  }else {
    recommend.append("<p>This is your recommendation number 2</p>");
  }
};



const reanimator = [];
reanimator [0] = [0, 1, 2, 3, 4, 5, 6]
reanimator[1] = 1;
reanimator[2] = [2,4]
