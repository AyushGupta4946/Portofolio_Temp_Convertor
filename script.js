let btn = document.querySelector("#btn")
let result = document.querySelector("#result")

btn.addEventListener("click" , function() {
    // Get the input element by its id
    var inputElement = document.getElementById("inputBox");
    
    // Get the value from the input element
    var inputValue = inputElement.value;

    var answer = inputValue * (9/5) + 32;
    
    result.innerHTML = `Tempreature${answer}°F`
    
})

// °F = °C × (9/5) + 32