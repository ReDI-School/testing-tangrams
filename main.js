/*
 See http://richard.jp.leguen.ca/tutoring/soen343-f2010/tutorials/getting-started-on-rock-paper-scissors/
 for a Java based example

*/

if (testSuite()) {
	alert('All Tests Passed!');
} else {
	alert('Tests Failed!');
}

function testSuite() {
	var success = false,
	test1,
	test2,
	test3,
	test4;

	test1 = testPaperBeatsRock();
	test2 = testPaperLosesToScissors();
	test3 = testRockBeatsScissors();
	test4 = testDraw();

	if (test1 && test2 && test3 && test4) {
		success = true;
	} 

	return success;
}


function testPaperBeatsRock() {
	var result,
	success;
	
	var result = playGame('PAPER','ROCK');

	if (result === 1) {
		success = true;
	} else {
		success = false;
	}

	return success;
}


function testPaperLosesToScissors() {

}

function testRockBeatsScissors() {

}

function testDraw() {

}

function playGame(player1,player2) {
	var result;
	
	if (player1 === player2) {
		result = 0;
	}
	
	if (player1 === "ROCK") {
        if (player2 === "PAPER") {
            result = -1;
        } else if (player2 === "SCISSORS") {
            result = 1;
        } 
    }

    if (player1 === "PAPER") {
        if (player2 === "ROCK") {
            result = 1;
        } else if (player2 === "SCISSORS") {
            result = -1;
        } 
    }

    if (player1 === "SCISSORS") {
        if (player2 === "ROCK") {
            result = -1;
        } else if (player2 === "PAPER") {
            result = 1;
        } 
    }

    return result;
}