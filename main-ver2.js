let reg1 = 0, reg2 = 0;
let operatorPressed = false;
/*\
Display : document.getElementById("outputbox").innerHTML 
\*/
function digitPress(n) {
    i = document.getElementById("outputbox").innerHTML;
    if (i != 0) {
        document.getElementById("outputbox").innerHTML += n;
    } else {
        document.getElementById("outputbox").innerHTML = n;
    };
    reg1 = parseFloat(document.getElementById("outputbox").innerHTML);
    if (!operatorPressed) {
        reg2 = reg1;
        reg1 = 0;
    };
    console.log(reg1,reg2);
};
function confirm() {
    reg2 = reg1;
    reg1 = 0;
    document.getElementById("outputbox").innerHTML = 0;
};
function operator(type) {
    switch (type) {
        case '+':
            reg1 = reg1 + reg2;
            break;
        case '-':
            reg1 = reg1 - reg2;
            break;
        case 'x':
            reg1 = reg1 * reg2;
            break;
        case '/':
            if (reg2 == 0) {
                reg1 = undefined;
            }else {
                reg1 = reg1 / reg2;
            };
            break;
        default:
            console.log("default");
            break;
    }
    document.getElementById("outputbox").innerHTML = 0;
    operatorPressed = true;
    console.log(reg1,reg2,operatorPressed);

};
function equalto() {
    document.getElementById("outputbox").innerHTML = reg1;
    operatorPressed = 0;
    console.log(reg1,reg2,operatorPressed);
};
function clearScreen() {
    reg1 = 0;
    reg2 = 0;
    operatorPressed = false;
    document.getElementById("outputbox").innerHTML = 0;
    console.log(reg1,reg2,operatorPressed);
};
function viewVars() {
    console.log(reg1,reg2);
};