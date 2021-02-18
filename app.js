// Display generate Pin
const pinGenerator = () => {
    const generatePin = Math.random() * 10000;
    const newPin = Math.round(generatePin) + '';
    if(newPin.length === 4){
        document.getElementById('generatePin').value = newPin;
    }
    else{
        pinGenerator()
    }
}


// Button handler
const buttonContainer = document.getElementById('digitsContainer');
buttonContainer.addEventListener('click', function(event){
    const digit = event.target.innerText;
    if(isNaN(digit)){
        if(digit === "C" ){
            const typedPin = document.getElementById('typedPin').value = '';
        }
    }
    else{
        const typedPin = document.getElementById('typedPin');
        typedPin.value = typedPin.value + digit;
    }
})


// Compare pin 
const comparePin = () => {
    const generatedPinInput = document.getElementById("generatePin").value;
    const typedPinInput = document.getElementById("typedPin").value;
    if (generatedPinInput === typedPinInput && generatedPinInput) {
        document.getElementById('matched').style.display = "block";
        document.getElementById('mismatched').style.display = "none";
    }
    else{
        document.getElementById('matched').style.display = "none";
        document.getElementById('mismatched').style.display = "block";
    }
}


// Thank you :) 