// Listner for Submit
document.querySelector(".loan-form").addEventListener("submit", function (e) {
  e.preventDefault();
  // Hide Result
  document.querySelector("#result").style.display = "none";
  // Show loader
  document.querySelector(".loader").style.display = "block";

  setTimeout(calculateResults, 3000);
});

//   Ui Varse
const amount = document.querySelector("#amount");
const interest = document.querySelector("#interset");
const years = document.querySelector("#years");
const monthlyPayment = document.querySelector("#monthly-payment");
const toalPayment = document.querySelector("#total-payment");
const toalInterest = document.querySelector("#total-interset");

//   Calculator Result
function calculateResults() {
  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayment = parseFloat(years.value) * 12;
  //   compute mothly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayment);
  const monthly = (principal * x * calculatedInterest) / (x - 1);
  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    toalPayment.value = (monthly * calculatedPayment).toFixed(2);
    toalInterest.value = (monthly * calculatedPayment - principal).toFixed(2);
    // show result
    document.querySelector("#result").style.display = "block";
    // hide loader
    document.querySelector(".loader").style.display = "none";

    amount.value = "";
    interest.value = "";
    years.value = "";
  } else {
    showError("Please check your number");
  }
}
// Show Error
function showError(error) {
  // hide result
  document.querySelector("#result").style.display = "none";
  // hide loader
  document.querySelector(".loader").style.display = "none";
  // Create A div
  const errorDiv = document.createElement("div");
  // Get Element
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");
  // Add Class
  errorDiv.className = "alert alert-danger";
  errorDiv.appendChild(document.createTextNode(error));
  // Inser error above heading
  card.insertBefore(errorDiv, heading);
  // Clear Error after 3 seconds
  setTimeout(clearError, 3000);
}
// Clear Error
function clearError() {
  document.querySelector(".alert").remove();
}
