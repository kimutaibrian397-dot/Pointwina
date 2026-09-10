let balance = 10000;

let selectedGame = "";
let selectedOdds = 0;

// ==========================
// UPDATE BALANCE
// ==========================
function updateBalance() {
  const balanceElement = document.getElementById("balance");

  if (balanceElement) {
    balanceElement.innerText =
      balance.toLocaleString() + " POINTS";
  }
}

// ==========================
// ADD VIRTUAL POINTS
// ==========================
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

// ==========================
// SELECT BET
// ==========================
function placeDemoBet(game) {
  selectedGame = game;

  if (game === "Arsenal Win") {
    selectedOdds = 1.85;
  } else if (game === "Draw") {
    selectedOdds = 3.40;
  } else if (game === "Tottenham Win") {
    selectedOdds = 4.20;
  }

  const selectedBet = document.getElementById("selectedBet");
  const betSlip = document.getElementById("betSlip");

  if (selectedBet) {
    selectedBet.innerText =
      "Arsenal vs Tottenham\n" +
      game +
      " @ " +
      selectedOdds;
  }

  if (betSlip) {
    betSlip.style.display = "block";
  }
}

// ==========================
// CONFIRM BET
// ==========================
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
    "Selection: " +
    selectedGame +
    "\n" +
    "Odds: " +
    selectedOdds +
    "\n" +
    "Stake: 100 virtual points\n\n" +
    "Remaining balance: " +
    balance.toLocaleString() +
    " POINTS"
  );

  closeBetSlip();
}

// ==========================
// CLOSE BET SLIP
// ==========================
function closeBetSlip() {
  const betSlip = document.getElementById("betSlip");

  if (betSlip) {
    betSlip.style.display = "none";
  }
}

// ==========================
// PAGE LOAD
// ==========================
document.addEventListener("DOMContentLoaded", function () {
  updateBalance();

  const betSlip = document.getElementById("betSlip");

  if (betSlip) {
    betSlip.style.display = "none";
  }
});
