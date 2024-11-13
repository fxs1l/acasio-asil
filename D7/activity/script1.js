// Access form element
const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function calculateMonthlyPayment(loanAmount, interestRate, loanTerm) {
    const yearsInMonths = loanTerm * 12;
    const interestRateInDecimalPerMonth = interestRate / 100 / 12;

    return (
        (loanAmount *
            interestRateInDecimalPerMonth *
            (1 + interestRateInDecimalPerMonth) ** yearsInMonths) /
        ((1 + interestRateInDecimalPerMonth) ** yearsInMonths - 1)
    );
}

function handleSubmit(event) {
    // Parse form data
    event.preventDefault();
    const loanAmount = event.target.elements.amount.value;
    const interestRate = event.target.elements.interest.value;
    const loanTerm = event.target.elements.years.value;

    // Calculate monthly payment
    const monthlyPayment = calculateMonthlyPayment(
        loanAmount,
        interestRate,
        loanTerm,
    );

    // Show result
    const resultDiv = document.querySelector("#result");
    let result = resultDiv.querySelector("h2");

    // Create h2 element if it doesn't exist
    if (!result) {
        result = document.createElement("h2");
        resultDiv.appendChild(result);
    }

    result.textContent = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
}
