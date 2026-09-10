let balance = 10000;

function updateBalance() {
  document.getElementById("balance").textContent =
    balance.toLocaleString() + " POINTS";
}

function showBalance() {
  alert(
    "💰 MY WALLET\n\nVirtual Balance: " +
    balance.toLocaleString() +
    " POINTS"
  );
}

function addPoints() {
  balance += 1000;
  updateBalance();

    alert("✅ 1,000 virtual points added!\n\nNew balance: " +
    balance.toLocaleString() + " POINTS");


let selectedGame = "";
let selectedOdds = 0;

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
  function closeBetSlip() {
  document.getElementById("betSlip").style.display = "none";
  }
function showPromotions() {
  alert(
    "🎁 POINTWINA PROMOTIONS\n\n" +
    "Coming soon!\n\n" +
    "• Daily demo rewards\n" +
    "• Prediction bonuses\n" +
    "• Spin & Win rewards"
  );
}

function showAccount() {
  alert(
    "👤 MY ACCOUNT\n\n" +
    "POINTWINA Demo Account\n" +
    "Status: Active\n" +
    "Balance: " +
    balance.toLocaleString() +
    " POINTS"
  );
}

updateBalance();
