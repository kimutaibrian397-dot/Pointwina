let balance = 10000;

function updateBalance() {
  document.getElementById("balance").textContent =
    balance.toLocaleString() + " POINTS";
}

function showBalance() {
  alert("Your virtual balance is " + balance.toLocaleString() + " POINTS");
}

function addPoints() {
  balance += 1000;
  updateBalance();
  alert("1,000 virtual points added!");
}

function placeDemoBet() {
  const amount = 100;

  if (balance >= amount) {
    balance -= amount;
    updateBalance();
    alert("Demo prediction placed!\n100 virtual points used.");
  } else {
    alert("Not enough virtual points.");
  }
}

updateBalance();
