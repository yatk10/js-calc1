let reg1 = 0, reg2 = 0; 
let operatorPressed = false;
let currentoprt = undefined;
/*\
██╗░░░██╗███████╗██████╗░░██████╗██╗░█████╗░███╗░░██╗  ██████╗░
██║░░░██║██╔════╝██╔══██╗██╔════╝██║██╔══██╗████╗░██║  ╚════██╗
╚██╗░██╔╝█████╗░░██████╔╝╚█████╗░██║██║░░██║██╔██╗██║  ░█████╔╝
░╚████╔╝░██╔══╝░░██╔══██╗░╚═══██╗██║██║░░██║██║╚████║  ░╚═══██╗
░░╚██╔╝░░███████╗██║░░██║██████╔╝██║╚█████╔╝██║░╚███║  ██████╔╝
░░░╚═╝░░░╚══════╝╚═╝░░╚═╝╚═════╝░╚═╝░╚════╝░╚═╝░░╚══╝  ╚═════╝░
Display : document.getElementById("outputbox").innerHTML 
\*/



function allClear() {
    reg1 = 0;
    reg2 = 0;
    operatorPressed = 0;
    currentoprt = undefined;
    document.getElementById("outputbox").innerHTML = reg1;
};

function digitPress(n) {
    if (reg1) {
        reg1 += n.toString();
    } else {
        reg1 = n.toString();
    };  
    document.getElementById("outputbox").innerHTML = reg1;
    console.log(reg1,reg2)
};

function operator(type) {
    reg2 = parseFloat(reg1);
    reg1 = undefined;
    currentoprt = type;

};

function equalto() {
    switch (currentoprt) {
        case '+':
            reg1 = parseFloat(reg1) + reg2;
            break;
        case '-':
            reg1 = reg2 - reg1;
            break;
        case 'x':
            reg1 = reg1 * reg2;
            break;
        case '/':
            if (!reg1) {
                reg1 = undefined;
            } else {
                reg1 = reg1 / reg2;
            };
            break;
    }
    document.getElementById("outputbox").innerHTML = reg1;
};

function viewVars() {
    console.log(reg1,reg2,operatorPressed); 
};