let balance = 10000;

let selectedGame = "";
let selectedOdds = 0;

// ==========================
// FOOTBALL MATCHES
// ==========================
const footballMatches = [
  {
    home: "Arsenal",
    away: "Tottenham",
    homeOdds: 1.85,
    drawOdds: 3.40,
    awayOdds: 4.20
  },
  {
    home: "Manchester United",
    away: "Chelsea",
    homeOdds: 2.10,
    drawOdds: 3.30,
    awayOdds: 3.20
  },
  {
    home: "Liverpool",
    away: "Manchester City",
    homeOdds: 2.40,
    drawOdds: 3.50,
    awayOdds: 2.70
  },
  {
    home: "Barcelona",
    away: "Real Madrid",
    homeOdds: 2.30,
    drawOdds: 3.60,
    awayOdds: 2.80
  }
];

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
// FOOTBALL BET SELECTION
// ==========================
function placeFootballBet(matchIndex, selection, odds) {
  const match = footballMatches[matchIndex];

  selectedGame =
    match.home +
    " vs " +
    match.away +
    " — " +
    selection;

  selectedOdds = odds;

  const selectedBet = document.getElementById("selectedBet");
  const betSlip = document.getElementById("betSlip");

  if (selectedBet) {
    selectedBet.innerText =
      match.home +
      " vs " +
      match.away +
      "\n" +
      selection +
      " @ " +
      odds;
  }

  if (betSlip) {
    betSlip.style.display = "block";
  }
}

// ==========================
// OTHER DEMO GAMES
// ==========================
function placeDemoBet(game) {
  selectedGame = game;

  if (game === "Aviator") {
    selectedOdds = 2.00;
  } else if (game === "Casino") {
    selectedOdds = 2.50;
  } else if (game === "Spin & Win") {
    selectedOdds = 3.00;
  } else {
    selectedOdds = 1.00;
  }

  const selectedBet = document.getElementById("selectedBet");
  const betSlip = document.getElementById("betSlip");

  if (selectedBet) {
    selectedBet.innerText =
      game +
      "\nDemo game @ " +
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

  const potentialReturn =
    amount * selectedOdds;

  alert(
    "🎮 BET PLACED!\n\n" +
    "Selection: " +
    selectedGame +
    "\n" +
    "Odds: " +
    selectedOdds +
    "\n" +
    "Stake: " +
    amount +
    " virtual points\n" +
    "Potential return: " +
    potentialReturn.toFixed(2) +
    " points\n\n" +
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

  selectedGame = "";
  selectedOdds = 0;
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

  selectedGame = "";
  selectedOdds = 0;
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
