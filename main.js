var pos = 0;

var correct = 0;

var choices; 

var questions = [

	[ "What is the name of the first decentralised cryptocurrency?", "Dash", "BitcionCash", "Bitcoin", "C" ],
	[ "Which proof-of-work algorithm is used by Bitcoin?", "SHA-256", "Blake", "X11", "A" ],
	[ "Are transactions with Bitcoin anonymous?", "Yes", "No", "It depends", "B" ],
	[ "When the last bitcoin is expected to be mined?", "2040", "2028", "2063", "A" ],
	[ "What is the abbreviation used for crowdfunding activity via the use of cryptocurrencies?", "IPO", "Kickstarter", "ICO", "C" ],
	[ "How is Bitcoin classified by the government of the US?", "Digital Asset", "Commodity", "Derivative", "B"],
	[ "What is the name of the new cryptocurrency emerged as a result of Bitcion hard fork in August 2017?", "BitcoinPlus", "BitcoinCash", "BitShares", "B" ],
	[ "Which revolutionary feature Ethereum offered on its blockchain not possible on Bitcoin network?", "Smart contracts", "Masternodes", "Transactions anonymity", "A" ],
	[ "Which cryptocurrency uses masternodes for transactoin confirmation on its blockchain?", "Bitcion", "Litecoin", "Dash", "C" ],
	[ "What's the name of the cryptocurrency named after the meme of Japanese dog Shiba Inu?", "DodgeCoin", "Siacoin", "Monero", "A" ]

];

function _(x) {

	return document.getElementById(x);
}

// render Question from multidimensional aray, render "Question x out of 10" to the user

function renderQuestion() {

	var test = _("test");

	if(pos >= questions.length){
		test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
		test.innerHTML += "<button onclick='renderQuestion()'>Try Again</button>";
		_("test_status").innerHTML = "Test Completed";
		_("status").innerHTML = "";

		pos = 0;
		correct = 0;
		return false;
	}

	_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
	question = questions[pos][0];
	choiceA = questions[pos][1];
	choiceB = questions[pos][2];
	choiceC = questions[pos][3];

	test.innerHTML = "<h3>"+question+"</h3>";

	test.innerHTML += "<input type = 'radio' name='choices' value='A'> "+choiceA+"<br>";  
	test.innerHTML += "<input type = 'radio' name='choices' value='B'> "+choiceB+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'> "+choiceC+"<br><br>";
	test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";

}


// render renderQuiz functino when the page is loaded

function renderQuiz() {

window.addEventListener("load", renderQuestion, false);

};


// 1) loop thru questions until all questions answered 
// 2) check Answers - if question is correct - count it and generate a phrase, if incorrect - generate another phrase

function checkAnswer(){

	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}

	if(choice == questions[pos][4]){
		//got the question right message
		_("status").innerHTML = "Yaay, way to go!";

		correct++;

	} else {

		_("status").innerHTML = "You got it wrong, buddy!";
		//got the question wrong message
	};

	pos++;
	renderQuestion();
}

//running all functions to run the Quiz

function doQuiz() {

	renderQuiz();
	renderQuestion();
	checkAnswer();
};

doQuiz();






	
