function checkAnswer(emailid, answer) {
    // Replaces all non-digts with whitespace.
    var newEmailId = emailid.replace( /^\D+/g, '');
    var results =
            '{"testemail1":1,"testemail2":1,"testemail3":1,"testemail4":1,"testemail5":0,"testemail6":0,"testemail7":0,"testemail8":0,"testemail9":0}';
    var resultsParsed = JSON.parse(results);
    var correctAnswer = resultsParsed["testemail"+newEmailId];

    if (answer === correctAnswer){
        //Show user that they are correct I get.
        var paragraph = document.getElementById("answerConfirm");
        var text = document.createTextNode("You are correct!" + returnAnswer(correctAnswer));
        paragraph.appendChild(text);

    }
    else if (answer != correctAnswer){
        //Tell the user that they are dumb
        var paragraph = document.getElementById("answerConfirm");
        var text = document.createTextNode("Incorrect answer! " + returnAnswer(correctAnswer));
        paragraph.appendChild(text);
    }
    else{
        //something is not right, handle this expection
    }
    document.getElementById("answerbtn" + emailid).hidden
}

function returnAnswer(correctAnswer){
    if (correctAnswer === 0 ){
        return "Email is a not a phishing email"
    }
    else if (correctAnswer === 1){
        return "Email is a phishing email"
    }
}



function correctAns(id) {
    var emailId = document.getElementById(id).nextElementSibling;
    if (emailId === 1) {
        document.getElementById("answerConfirm").innerHTML = "Email one was not a phishing email, correct!"
    }
}
function incorrectAns(id) {
    var emailId = document.getElementByImicd(id).nextElementSibling;

    if (emailId === 0) {
        document.getElementById("answerConfirm").innerHTML = "Incorrect answer, email one is not a phishing email!"
    }
    }