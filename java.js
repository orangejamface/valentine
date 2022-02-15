
document.getElementById("btn_next").addEventListener("click", toggleText);
document.getElementById("choseYes").addEventListener("click", yes);
document.getElementById("choseNo").addEventListener("click", no);

function toggleText() {
    var textBox = document.getElementById("txtbox");
    switch (textBox.className) {
        case "txt1": {
            textBox.innerHTML = "x You deserve x";
            swapClasses(textBox, "txt2");
            break;
        }
        case "txt2": {
            textBox.innerHTML = "a BEAUTIFUL CARD";
            swapClasses(textBox, "txt3");
            break;
        }
        case "txt3": {
            textBox.innerHTML = "beautiful enough. . . . .";
            swapClasses(textBox, "txt4");
            break;
        }
        case "txt4": {
            textBox.innerHTML = "To match your beautiful self";
            swapClasses(textBox, "txt5");
            break;
        }
        case "txt5": {
            textBox.innerHTML = "So this is an attempt";
            swapClasses(textBox, "txt6");
            break;
        }
        case "txt6": {
            textBox.innerHTML = "TO GIVE YOU JUST THAT!";
            swapClasses(textBox, "txt7");
            break;
        }
        case "txt7": {
            textBox.innerHTML = "SO? . . . . . . . . ";
            swapClasses(textBox, "txt8");
            break;
        }
        case "txt8": {
            textBox.innerHTML = "Will you be my VALENTINE?";
            document.getElementById("btn_next").style.display = "none";
            choiceAppear();
            break;
        }
    }
}
function swapClasses(elem, targetClass) {
    elem.className = targetClass;
}

function choiceAppear() {
    var T = document.getElementById("choices");
    T.style.display = "flex"; 
}

function yes()  {
    var choiceText = document.getElementById("yesOrNo");
    switch (choiceText.className) {
        case "txt1": {
            choiceText.innerHTML = "x You deserve x";
            swapClasses(choiceText, "txt2");
            break;
        }
    }
}

