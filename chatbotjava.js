const userinput = document.querySelector("#user input");
const submitbutton = document.querySelector("#Submit");
const botchatoutput = document.querySelector("#botchatoutput");
const user = document.querySelector("#user");

submitbutton.addEventListener ("click", response);

const greetings = ["hello", "hi", "good day"];

const randomgreeting = Math.floor(Math.random() * greetings.length)

function response() {
    while(botChat.textContent == "What is your name?") {
        user.style.color = "red";
        botchatoutput.innerHTML = greetingList[greeting] + " " + userInput.value;
        user.innerHTML = userInput.value;
        setTimeout(() => {botChat.innerHTML = "Do you like monsters?" }, 2000);;
        userInput.value = null;
    } 
    
    while(botchatoutput.textContent == "Do you like monsters?") {
        user.style.color = "blue";
        if (userInput.value == "Y") {
            botChat.innerHTML = "Excellent!";
        }
        else if (userInput.value == "N") {
            botchatoutput.textContent = "What a real shame";
        }
        else {
            botchatoutput.textContent = "Please reply with Yes or No.";
            setTimeout(() => {botChat.innerHTML = "Do you like monsters?" }, 2000);;
        }
    }
}
