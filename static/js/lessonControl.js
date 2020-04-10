var click = 0;
function nextLesson() {
click ++;
if (click === 1) {
    document.getElementById("lessonText").innerHTML ="Welcome to lesson 1."
}
else if(click === 2) {
    document.getElementById("lessonText").innerHTML ="Welcome to lesson 2."
}
else if(click === 3) {
    document.getElementById("lessonText").innerHTML ="Welcome to lesson 3."
}
else if(click === 4) {
    document.getElementById("lessonText").innerHTML ="Welcome to lesson 4."
}
else if(click === 5) {
    document.getElementById("lessonText").innerHTML ="Welcome to lesson 5."
}
else if(click === 6) {
    click = 5;
}

}

function prevLesson() {
click --;
if (click === 1) {
    document.getElementById("lessonText").innerHTML ="Welcome to lesson 1."
}
else if(click === 2) {
    document.getElementById("lessonText").innerHTML ="Welcome to lesson 2."
}
else if(click === 3) {
    document.getElementById("lessonText").innerHTML ="Welcome to lesson 3."
}
else if(click === 4) {
    document.getElementById("lessonText").innerHTML ="Welcome to lesson 4."
}
else if(click === 5) {
    document.getElementById("lessonText").innerHTML ="Welcome to lesson 5."
}
else if (click === -1) {
    click = 0;
}
else {
    document.getElementById("lessonText").innerHTML ="Welcome to you lesson introduction, in this space a lesson will appear giving you instructions on what you must do. When are you are ready to get started, please click next lesson."
    }
}

/*for loop counting each button press with i, set whatever i is
to a lesson text with a limit of 5 counts.
 */