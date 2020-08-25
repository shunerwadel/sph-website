function loanInterest()
{
    // Declare variables
    let amount = document.getElementById("amount").value;
    let iRate = document.getElementById("iRate").value;
    let term = document.getElementById("term").value;
    let payFreq = document.getElementById("payFreq").value;

    // Calculate total cost

    var totCost = amount * (1 + (iRate/100) * term);
    document.getElementById("totCost").value = totCost.toFixed(2);

    // Calculate interest

    interest = totCost - amount;
    document.getElementById("interest").value = interest.toFixed(2);

    //Calculate payment

    if (payFreq === "weekly")
    {
        document.getElementById("payment").value = (totCost / (term * 52)).toFixed(2);
    }
    else if (payFreq === "monthly")
    {
        document.getElementById("payment").value = (totCost / (term * 12)).toFixed(2);
    }
}