var click = 0;
function nextLesson() {
click ++;
if (click === 1) {
    document.getElementById("lessonText").innerHTML ="Welcome to lesson 1. In this lesson, you have received a password reset email, your task is to identify whether it is a phishing email or not. The focus of this lesson is to look at how they address the receiver. Phishing emails will rarely use your name or an account name, when you are ready to start, open email one and answer in the answer box."
}
else if(click === 2) {
    document.getElementById("lessonText").innerHTML ="Welcome to lesson 2. In this lesson, you have received a notification of your paypal account being limited. In this lesson the focus is on two areas, the first of which being the sender, look at how the email sender displays itself versus the real address behind it. With the second part take note on the link in the email address, is this suspicious to you?"
}
else if(click === 3) {
    document.getElementById("lessonText").innerHTML ="Welcome to lesson 3. In this lesson, you have received an email concerning unauthorised access of your ebay account, use your knowledge from the previous lessons and take note of any links that the email asks you to click on, what does each link do and what is the email asking of you, determine whether its trying to steal your password or not."
}
else if(click === 4) {
    document.getElementById("lessonText").innerHTML ="Welcome to lesson 4. In this lesson, you have received a notification of a tax refund from the government. In this email take note of what information is displayed and if any of it is sensitive or not, legitimate emails will never contain sensitive information."
}
else if(click === 5) {
    document.getElementById("lessonText").innerHTML ="Welcome to lesson 5. In this lesson you have been given a selection of five emails. These emails are emails 5 through 9, you must apply your knowledge of the four previous lessons to succeed. When you are ready open the first email."
}
else if(click === 6) {
    click = 5;
}

}

function prevLesson() {
click --;
if (click === 1) {
    document.getElementById("lessonText").innerHTML ="Welcome to lesson 1. In this lesson, you have received a password reset email, your task is to identify whether it is a phishing email or not. The focus of this lesson is to look at how they address the receiver. Phishing emails will rarely use your name or an account name, when you are ready to start, open email one and answer in the answer box."
}
else if(click === 2) {
    document.getElementById("lessonText").innerHTML ="Welcome to lesson 2. In this lesson, you have received a notification of your paypal account being limited. In this lesson the focus is on two areas, the first of which being the sender, look at how the email sender displays itself versus the real address behind it. With the second part take note on the link in the email address, is this suspicious to you?"
}
else if(click === 3) {
    document.getElementById("lessonText").innerHTML ="Welcome to lesson 3. In this lesson, you have received an email concerning unauthorised access of your ebay account, use your knowledge from the previous lessons and take note of any links that the email asks you to click on, what does each link do and what is the email asking of you, determine whether its trying to steal your password or not."
}
else if(click === 4) {
    document.getElementById("lessonText").innerHTML ="Welcome to lesson 4. In this lesson, you have received a notification of a tax refund from the government. In this email take note of what information is displayed and if any of it is sensitive or not, legitimate emails will never contain sensitive information."
}
else if(click === 5) {
    document.getElementById("lessonText").innerHTML ="Welcome to lesson 5. In this lesson you have been given a selection of five emails. These emails are emails 5 through 9, you must apply your knowledge of the four previous lessons to succeed. When you are ready open the first email."
}
else if (click === -1) {
    click = 0;
}
else {
    document.getElementById("lessonText").innerHTML ="Welcome to you lesson introduction, in this space a lesson will appear giving you instructions on what you must do. When are you are ready to get started, please click next lesson."
    }
}