const checkButton = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');

const check_alphabet_letter = checkButton.addEventListener('click', () =>{
    if(textInput.value === ""){
        alert("Please input a value");
    }
    else if(/^[a-zA-Z]$/.test(textInput.value)){
        result.innerHTML = "<strong>" + textInput.value + "</strong>" + " is a palindrome."
        result.style.display= "block";
        textInput.value = "";
    }
    else{
        isPalindrome(textInput.value)
    }
})

function isPalindrome(text){
    const string = text.split('').filter(caracter => ![' ', ',', '.','/','\\', ':', '(',')','-','_'].includes(caracter)).join('').toLowerCase();
    console.log(string);
    const invertedString = string.split('').reverse().join('');
    console.log(invertedString);
    if(string === invertedString){
        result.innerHTML = "<strong>" + textInput.value + "</strong>" + " is a palindrome."
    }
    else{
        result.innerHTML = "<strong>" + textInput.value + "</strong>" + " is not a palindrome."
    }
}

