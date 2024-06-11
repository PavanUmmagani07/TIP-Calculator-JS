let billAmount = document.getElementById("billAmount");
let percentageTip = document.getElementById("percentageTip");
let tipAmount = document.getElementById("tipAmount");
let totalAmount = document.getElementById("totalAmount");
let errorMessage = document.getElementById("errorMessage");


function calculateTip(){
    let billAmountValue = billAmount.value;
    let percentageTipValue = percentageTip.value;
    if(billAmountValue===""){
        errorMessage.textContent ="Please Enter a valid Input";
    }
    else if(percentageTipValue===""){
        errorMessage.textContent ="Please Enter a valid Input";
    }
    else{

        errorMessage.textContent ="";
        let billAmountEntered = parseInt(billAmountValue);
        let tipPercentEntered = parseInt(percentageTipValue);
        //console.log(billAmountEntered*(tipPercentEntered/100))
        let calculatedTip = billAmountEntered*(tipPercentEntered/100);
        let calculatedTotal = billAmountEntered + calculatedTip;
        tipAmount.value = Math.ceil(calculatedTip);
        totalAmount.value = Math.ceil(calculatedTotal);
    }

    
}