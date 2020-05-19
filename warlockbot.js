const userInput = document.querySelector("#user");
const submit = document.querySelector("#Submit");
const botchatoutput = document.querySelector("#botchatoutput");
const user = document.querySelector("#user");
const submit = document.querySelector("#output")
const textoutput = document.querySelector("#body")

submit.addEventListener("click", response);

greetingList = ["Hello", "Hi", "Hey there", "Yo"];

greeting = Math.floor(Math.random() * greetingList.length);
submit.addEventListener ("click", response);

greetings = ["hello", "hi", "good day"]
const randomgreeting = Math.floor(Math.random() * greetings.length)

document.getElementById ("botchatoutput").click

function response() {
    while(botChat.textContent == "What is your name?") {
        userInput.style.color = "grey";
        botchatoutput.innerHTML = greetingList[greeting] + " " + userInput.value;
        user.innerHTML = userInput.value;
        setTimeout(() => {botChat.innerHTML = "Do you like monsters?" }, 2000);;
        userInput.value = null;
    } 
    
    while(botchatoutput.textContent == "Do you like monsters?") {
        user.style.color = "grey";
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
    alert("testing")
}
