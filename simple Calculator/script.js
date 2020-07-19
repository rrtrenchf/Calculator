function getHistory() {
    return document.getElementById("history-value").innerText;
}
// alert(getHistory())
function printHistory(num) {
    document.getElementById("history-value").innerText = num;
}
function getOutput() {
    return document.getElementById("output-value").innerText
}
function printOutput(num) {
    if (num == "") {
        document.getElementById("output-value").innerText =(num)
    }
    else {
        document.getElementById("output-value").innerText = getFormattedNumber(num);
    }
}


function getFormattedNumber(num) {
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ''))
}
// alert(reverseNumberFormat(getOutput()))
var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        console.log("CLICKED")

        switch (this.id) {
            case ("clear"):
                printOutput("");
                printHistory("");
                break;
            case ("backspace"):
                output = reverseNumberFormat(getOutput()).toString();
                if (output){
                    output = output.substr(0,output.length-1);
                    printOutput(output);
                }
            
        } 
        var output = getOutput();
        var history= getHistory();
        if(output!=""){
            output= reverseNumberFormat(output);
            history= history + output;
            if (this.id == "="){
                var result = eval(history);
                printOutput(result);
                printHistory("");
            
            }else{
                history=history+this.id;
                printHistory(history);
                printOutput("");
            }
        }
            
        


        //When clear operator is clicked out put and history is set to an empty character
        //    if(this.id == "clear"){
        //        printOutput("")
        //        printHistory("")
        //    } else if (this.id == 'backspace'){
        //        output = reverseNumberFormat(getOutput()).toString();
        //        if(output){
        //            output=output.substr(0, output.length-1);
        //            printOutput(output)
        //        }
        //    }else{
        //        if(output!=)
        //    }
    })
}
// selects all elements with a class of number
var number = document.getElementsByClassName("number"); {
    //loops through all elements with a class of number
    for (var i = 0; i < number.length; i++) {
        //prints out the number that is clicked on
        number[i].addEventListener('click', function () {
            var output = reverseNumberFormat(getOutput());
            // if number clicked on is (!)<-- not  (NaN)--->Not a Number (double negative) 
            if (output != NaN) {
                //then output is concatonated with numbers clicked
                output = output + this.id
                //print output function is called
                printOutput(output)
                console.log(output)
            }
        });
    }
}