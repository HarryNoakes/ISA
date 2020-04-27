function checkAnswer(emailid, answer) {
    // Replaces all non-digts with whitespace.
    var newEmailId = emailid.replace( /^\D+/g, '');
    var results =
            '{"testemail1":0,"testemail2":0,"testemail3":0,"testemail4":0,"testemail5":1,"testemail6":0,"testemail7":0,"testemail8":0,"testemail9":1}';
    var resultsParsed = JSON.parse(results);
    var correctAnswer = resultsParsed["testemail"+newEmailId];

    if (answer === correctAnswer){
        //Shows user that they are correct.
        var paragraph = document.getElementById("answerConfirm" + newEmailId);
        var text = document.createTextNode("You are correct! " + returnAnswer(correctAnswer));
        paragraph.appendChild(text);
    }
    else if (answer != correctAnswer){
        //Tells the user that they are incorrect.
        var paragraph = document.getElementById("answerConfirm" + newEmailId);
        var text = document.createTextNode("Incorrect answer! " + returnAnswer(correctAnswer));
        paragraph.appendChild(text);
    }
    else{
        //something is not right

    }
    console.log(emailid);
    buttons = document.getElementById("answerButtons" + newEmailId);
    childBtns = document.childNodes;
    for(i=0;i<buttons.childNodes.length;i++){
        var child = buttons.childNodes[i];
        //child.remove();
    }
    document.getElementById(emailid).remove();
    document.getElementById(emailid).remove();
}

function returnAnswer(correctAnswer){
    if (correctAnswer === 0 ){
        return "Email is a not a phishing email"

    }
    else if (correctAnswer === 1){
        return "Email is a phishing email"
    }
}