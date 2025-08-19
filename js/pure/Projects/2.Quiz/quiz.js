let instName = "",
  noOfQuestions = 0,
  secPerQuestion = 5,
  arr = [],skip=2;

  const mainContainer = document.getElementById('mainContainer');
  const inputDetails = document.getElementById('inputForm');
  const questionsInput = document.getElementById('questionsInput');
  const reviewForm = document.getElementById('reviewForm');

function hideAllShow(cls,id=null)
{
	
	let ele = document.getElementsByClassName(cls);
	for(let i=0;i<ele.length;i++)
	if( !ele[i].classList.contains('hidden'))
	  ele[i].classList.add('hidden');
	if(id != null)
	 document.getElementById(id).classList.remove('hidden');
}

document.getElementById("quizInfo").addEventListener("click", () => {
	
	//3 inputs inst name,no. of questions,time
  let e = document.getElementsByClassName("quizInfo");
  let error = document.getElementById("error");

  if (e[0].value == "" || e[1].value == "" || e[2].value == "")
    showError("Please Enter all details!");
  else {

    instName = e[0].value;
    noOfQuestions = e[1].value;
    secPerQuestion = e[2].value;
	
    //generate question fields
	generateQuestions();
  }
});

function showError(str) {

  document.getElementById('errorContainer').classList.toggle('hidden');
  error.textContent = str;
  setTimeout(() => {
	document.getElementById('errorContainer').classList.toggle('hidden');
  }, 2000);
}

function quizInfo()
{
	hideAllShow('subContainer',"inputForm");
}

function generateQuestions() {
	
	hideAllShow('subContainer',"questionsInput");

  let reviewBtn = document.createElement("button");
  reviewBtn.textContent = "Review";
  reviewBtn.setAttribute("onclick", "review()");

  let backToQuizInfoBtn = document.createElement("button");
  backToQuizInfoBtn.textContent = "Back";
  backToQuizInfoBtn.setAttribute("onclick", "quizInfo()");
  
  //clear previous inputs
  questionsInput.innerHTML=null;

  //generating questions as per quizInfo
  for (let i = 0; i < noOfQuestions; i++) {

	//div for single question and it's options
    let singleQuestion = document.createElement("div");
	singleQuestion.className = 'singleQuestion';
	singleQuestion.id = `question${i+1}`;
    let title = document.createElement("b");
    let options = document.createElement("div");
    options.className = "options";
    let q = document.createElement("input");
    let op1 = document.createElement("input");
    let op2 = document.createElement("input");
    let op3 = document.createElement("input");
    let op4 = document.createElement("input");
	let ans = document.createElement("input");

    q.placeholder = `Question ${i + 1}`;
    op1.placeholder = `Option 1`;
    op2.placeholder = `Option 2`;
    op3.placeholder = `Option 3`;
    op4.placeholder = `Option 4`;
	ans.placeholder = `Answer(1/2/3/4)`;
	ans.className = 'answers';

    q.className = "questionInput";

    q.type = "text";
    op1.type = "text";
    op2.type = "text";
    op3.type = "text";
    op4.type = "text";
	ans.type = "number";
	ans.max = '4';
	ans.min = '1';

    options.appendChild(op1);
    options.appendChild(op2);
    options.appendChild(op3);
    options.appendChild(op4);
	options.appendChild(ans);

    singleQuestion.appendChild(title);
    singleQuestion.appendChild(q);
    singleQuestion.appendChild(options);

    title.innerHTML = `Question Number ${i + 1}:`;

	//adding question to questions container
    questionsInput.appendChild(singleQuestion);
  }
  //Adding two buttons to questions conatainer
  questionsInput.appendChild(backToQuizInfoBtn);
  questionsInput.appendChild(reviewBtn);

}

// review fucntion to show quiz for admin
function review() {
  //Select all inputs question,options and answer
  let options = document.querySelectorAll(".singleQuestion input");
  let answers = document.querySelectorAll('.answers');

  //As one question has 6 input fields checking for empty field
  for (let i = 0; i < 6 * noOfQuestions; i++)
    if (options[i].value == "") {
      showError("Please fill all input fields!");
      return;
    }

	//checking if all answers are in 1-4 range
	for(let i=0;i<noOfQuestions;i++)
	 if(answers[i].value<1||answers[i].value>4){
		showError("Please enter all answers in range 1-4!");
      return;
	 }

	

  let question,
    op1,
    op2,
    op3,
    op4,
	ans,
    singleQuestion = document.getElementsByClassName("singleQuestion");
  
  for (let i = 0; i < noOfQuestions; i++) {

	//Single question -->question,options and answer
    question = singleQuestion[i].querySelectorAll("input")[0].value;
    op1 = singleQuestion[i].querySelectorAll("input")[1].value;
    op2 = singleQuestion[i].querySelectorAll("input")[2].value;
    op3 = singleQuestion[i].querySelectorAll("input")[3].value;
    op4 = singleQuestion[i].querySelectorAll("input")[4].value;
    ans = singleQuestion[i].querySelectorAll("input")[5].value;
	// div for single question
    let q = document.createElement("div");
    q.id = "q" + i + 1;
    q.className = "singleQuestion";

	//title for specific question
    let title = document.createElement("h2");
    title.textContent = `Q${i+1}. `+question;
 
	//option 1 with in label
	let label1 = document.createElement('label');
	label1.for="question"+i+1+'Op1';
    let option1 = document.createElement("input");
    option1.type = "radio";
    option1.name = "question"+i+1;
	option1.id = "question"+i+1+'Op1';
    label1.innerHTML = op1;
	label1.appendChild(option1);

	//option 2 with in label
	let label2 = document.createElement('label');
	label2.for="question"+i+1+'Op2';
    let option2 = document.createElement("input");
    option2.type = "radio";
    option2.name = "question"+i+1;
	option2.id = "question"+i+1+'Op2';
	label2.innerHTML = op2;
	label2.appendChild(option2);


	//option 3 with in label
	let label3 = document.createElement('label');
	label3.for="question"+i+1+'Op3';
    let option3 = document.createElement("input");
    option3.type = "radio";
    option3.name = "question"+i+1;
	option3.id = "question"+i+1+'Op3';
	label3.innerHTML = op3;
	label3.appendChild(option3);


	//option 4 with in label
	let label4 = document.createElement('label');
	label4.for="question"+i+1+'Op4';
    let option4 = document.createElement("input");
    option4.type = "radio";
    option4.name = "question"+i+1;
	option4.id = "question"+i+1+'Op4';
	label4.innerHTML = op4;
	label4.appendChild(option4);


    let allOptions = document.createElement('div');
	allOptions.appendChild(label1);
	allOptions.appendChild(label2);
	allOptions.appendChild(label3);
	allOptions.appendChild(label4);

	let thisQuestion = document.createElement('div');
	thisQuestion.className = 'questionContainer'
	thisQuestion.id = `question${i+1}Container`;

	let cOption = document.createElement('b');
	cOption.textContent = 'Answer:'+ans;

	thisQuestion.appendChild(title);
	thisQuestion.appendChild(allOptions);
	thisQuestion.appendChild(cOption);

	reviewForm.appendChild(thisQuestion);
     arr.push({QuestionNumber:i+1,Question:question,o1:op1,o2:op2,o3:op3,o4:op4,Answer:ans});
  }
  
  let cancelBtn = document.createElement('button');
  cancelBtn.textContent = 'Cancel';
  cancelBtn.addEventListener('click',editQuestions);
  reviewForm.appendChild(cancelBtn);

  let correctBtn = document.createElement('button');
  correctBtn.textContent = 'Done';
  correctBtn.addEventListener('click',startExam);
  reviewForm.appendChild(correctBtn);
  hideAllShow('subContainer','reviewForm');
}

function editQuestions()
{
	reviewForm.innerHTML = '';
	hideAllShow('subContainer','questionsInput');
}

let barInt,skipped=0;
function startExam()
{
	hideAllShow('subContainer','startExam');
	document.getElementById('countDown').textContent = secPerQuestion;
	updateQuestion();
	barInt = setInterval(bar,1000);
}

document.getElementById('countDown').innerHTML = secPerQuestion;
let bar = ()=>{

	let e = document.getElementById('TimeEscaped');
	let count = document.getElementById('countDown');
    let w = Number(e.style.width.slice(0,-1));
	
	
	if(w >=99 || Number(count.innerHTML)==0)
	{
		let miss =true;
		let opts = document.getElementsByName('optionSelected');
	for(let i = 0;i<opts.length;i++)
		if(opts[i].checked == true)
		{
			miss = false;
		  break;
		}
		  if(miss)
			skipped++;
			
		
		nextQuestion();
	}
	else
	{
      e.style.width = (w+(100/secPerQuestion))+'%';
		let n = Number(count.innerHTML);
		count.innerHTML = --n;
	 }
	 
};


let nextQuestion = (function()
{
	let score = 0,questionCount=0;

 return function(){
	
	//bar reset
	document.getElementById('TimeEscaped').style.width = '0%';
	document.getElementById('countDown').innerHTML = secPerQuestion;
	//update score
	let opts = document.getElementsByName('optionSelected');
	for(let i = 0;i<opts.length;i++)
	{
		if(opts[i].checked && opts[i].value==arr[questionCount].Answer)
	    score++;
	}

	 //check if it was last question
	 if(questionCount == noOfQuestions-1 )
	  {
		hideAllShow('subContainer','Result');
		let res = document.getElementById('Result');
		let text = `You have Scored ${(score/noOfQuestions)*100}% <br> Correct answers:${score} Wrong answers:${noOfQuestions-score-skipped} Missed:${skipped}`;
        res.innerHTML = text;
		clearInterval(barInt);
		return;
	  }
	  updateQuestion(++questionCount);
 }
})();

function updateQuestion(questionCount=0)
{
	let opts = document.getElementsByName('optionSelected');
	let presentQuestion = document.querySelector('#testQuestion h2');
	document.querySelector('#op1').textContent =arr[questionCount].o1;
	document.querySelector('#op2').textContent = arr[questionCount].o2;
	document.querySelector('#op3').textContent = arr[questionCount].o3;
	document.querySelector('#op4').textContent = arr[questionCount].o4;
	for(let i = 0;i<opts.length;i++)
	opts[i].checked = false;

 presentQuestion.innerHTML = questionCount+1 +'. '+arr[questionCount].Question;
 
}
// updateQuestion();
