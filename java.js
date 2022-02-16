

document.getElementById("btn_next").addEventListener("click", toggleText);

function toggleText() {
    let textBox = document.getElementById("txtbox");
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
    let yesOrNo = document.getElementById("choices");
    yesOrNo.style.display = "flex";
}

function ShowHideDiv() {
    let chkYes = document.getElementById("chkYes");
    let dvtext = document.getElementById("clkYes");
    let chkNo = document.getElementById("chkNo");
    let dvtext2 = document.getElementById("clkNo");
    dvtext.style.display = chkYes.checked ? "flex" : "none";
    dvtext2.style.display = chkNo.checked ? "flex" : "none";
}

function ShowHideDiv2() {
    let chkNo = document.getElementById("chkNo");
    let dvtext = document.getElementById("clkNo");
    let chkYes = document.getElementById("chkYes");
    let dvtext2 = document.getElementById("clkYes");
    dvtext.style.display = chkNo.checked ? "flex" : "none";
    dvtext2.style.display = chkYes.checked ? "flex" : "none";
}

function showArrow() {
    let chkNo = document.getElementById("arrow");
    let arrow = document.getElementById("arrowappear");
    arrow.style.display = chkNo.checked ? "flex" : "none";
}


