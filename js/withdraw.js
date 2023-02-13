// withdraw option--------

// step-1: 

document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2: 
    
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-3: 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousTotalString); 

    // step-4: 

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-5: 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6:
    const neewBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = neewBalanceTotal;
    
    // step-7:  
    withdrawField.value = '';
})