document.getElementById("calculateBtn").addEventListener("click",calculateLoan);

function calculateLoan() {
    let loanAmount = parseFloat(document.getElementById("loanAmountInput").value);
    let interestRate =parseFloat(document.getElementById("interestRateInput").value);
    let loanTerm = parseFloat(document.getElementById("loanTermInput").value);

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
        alert("Please enter valid numbers for all fields.");
       
}

      const monthlyInterestRate = interestRate / 100 / 12;
      const totalPayments = loanTerm;
      const monthlyPayment = (loanAmount * monthlyInterestRate) 
      / (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));

        const totalInterest = (monthlyPayment * totalPayments) - loanAmount;

        displayResult(monthlyPayment, totalInterest);
}

function displayResult(monthlyPayment, totalInterest) {
    const resultDiv = document.getElementById("result");
    
    resultDiv.innerHTML = `
    <p><strong>Monthly Payment: $${monthlyPayment.toFixed(2)}</strong></p>
    <p><strong>Total Interest Paid: $${totalInterest.toFixed(2)}</strong></p>
    `
}