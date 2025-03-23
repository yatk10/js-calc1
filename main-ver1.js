let reg1 = 0,reg2 = 0,type = null;
function operator(oprt) {
    type = oprt;
    let i = parseFloat(document.getElementById("outputbox").innerHTML);
    if (!reg1) {
        reg1 = i;
    } else {
        reg2 = i;
    }
    document.getElementById("outputbox").innerHTML = 0;

    console.log(reg1,type,reg2);
};
function equalto() {
    let result;
    switch (type){
        case '+':
            result = reg1 + reg2;
            break;
        case '-':
            result = reg1 - reg2;
            break;
        case '/':
            result = reg1 / reg2;
            break;
        case 'x':
            result = reg1 * reg2;
            break;
        default:
            result = reg1;
            break;
    };
    document.getElementById("outputbox").innerHTML = result;
    reg1 = result;
    console.log(reg1,reg2,result)

};

function digitPress(digit) {

    screen = document.getElementById("outputbox").innerHTML;
    if (screen == 0){
        document.getElementById("outputbox").innerHTML = digit;

    } else {
        document.getElementById("outputbox").innerHTML += digit;
    }
};
function clearScreen() {
    document.getElementById("outputbox").innerHTML = 0;
    reg1 = 0;
    reg2 = 0;
};