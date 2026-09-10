// POINTWINA Demo
// Virtual points only

let balance = 10000;

function showBalance() {
  alert("Your virtual balance is " + balance + " POINTS");
}

function addPoints() {
  balance += 1000;
  alert("1,000 virtual points added!");
  showBalance();
}

function placeDemoBet() {
  const amount = 100;

  if (balance >= amount) {
    balance -= amount;
    alert("Demo prediction placed!\n100 virtual points used.");
    showBalance();
  } else {
    alert("Not enough virtual points.");
  }
}
