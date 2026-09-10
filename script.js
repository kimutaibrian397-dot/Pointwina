let balance = 10000;

let selectedGame = "";
let selectedOdds = 0;

// Update balance on the screen
function updateBalance() {
  const balanceElement = document.getElementById("balance");

  if (balanceElement) {
    balanceElement.innerText = balance.toLocaleString() + " POINTS";
  }
}

// Add virtual points
function addPoints() {
  balance += 1000;
  updateBalance();

  alert(
    "✅ 1,000 virtual points added!\n\n" +
    "New balance: " +
    balance.toLocaleString() +
    " POINTS"
  );
}

// Select a football bet
function placeDemoBet(game) {
  selectedGame = game;

  if (game === "Arsenal Win") {
    selectedOdds = 1.85;
  } else if (game === "Draw") {
    selectedOdds = 3.40;
  } else if (game === "Tottenham Win") {
    selectedOdds = 4.20;
  }

  document.getElementById("selectedBet").innerText =
    "Arsenal vs Tottenham\n" +
    game + " @ " + selectedOdds;

  document.getElementById("betSlip").style.display = "block";
}

// Confirm the bet
function confirmBet() {
  const amount = 100;

  if (!selectedGame) {
    alert("Please select a bet first.");
    return;
  }

  if (balance < amount) {
    alert("❌ Not enough virtual points.");
    return;
  }

  balance -= amount;
  updateBalance();

  alert(
    "🎮 BET PLACED!\n\n" +
    "Match: Arsenal vs Tottenham\n" +
    "Selection: " + selectedGame + "\n" +
    "Odds: " + selectedOdds + "\n" +
    "Stake: " + amount + " virtual points\n\n" +
    "Remaining balance: " +
    balance.toLocaleString() +
    " POINTS"
  );

  closeBetSlip();
}

// Close Bet Slip
function closeBetSlip() {
  document.getElementById("betSlip").style.display = "none";
}

// Run when page loads
updateBalance();
