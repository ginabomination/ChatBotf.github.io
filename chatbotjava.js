const userinput = document.querySelector("#user input");
const submitbutton = document.querySelector("#Submit");
const botchatoutput = document.querySelector("#bot chat output");
const user = document.querySelector("#user");

submitbutton.addEventListener ("click", response);

const greetings = ["hello", "hi", "good day"];

const randomgreeting = Math.floor(Math.random() * greetings.length)

function response() {
    botchatoutput.textContent = greetings[randomgreeting] + " " + userinput.value + "How may i aid in your troubles?";
user.textContent = userinput.value
}



null 