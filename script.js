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
}

function placeDemoBet(game) {
  const amount = 100;

  if (balance < amount) {
    alert("❌ Not enough virtual points.");
    return;
  }

  balance -= amount;
  updateBalance();

  alert(
    "🎮 BET PLACED!\n\n" +
    "Match: Arsenal vs Tottenham\n" +
    "Selection: " + game + "\n" +
    "Stake: 100 virtual points\n\n" +
    "Remaining balance: " +
    balance.toLocaleString() +
    " POINTS"
  );
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
