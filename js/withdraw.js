/*
1. add event handler with the withdraw button
2. get the withdraw ammount from the withdraw input field
2.5  also make sure to convert the input into a number by using parseFloat
3. get previous withdraw total
4. calculate total withdraw ammount
4-5.  set total withdraw ammount



7. clear input field
*/
// step-1:
document.getElementById('btn-withdraw').addEventListener('click', function () {
    //    step:2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmmountString = withdrawField.value;
    const newWithdrawAmmount = parseFloat(newWithdrawAmmountString);

    // step-3:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    // step-4:
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-5:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6:
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmmount;
    balanceTotalElement.innerText = newBalanceTotal;
    // step-7:
    withdrawField.value = '';
})