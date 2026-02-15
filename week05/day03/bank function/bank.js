function createBankAccount(initialBalance = 0) {
  let balance = initialBalance;
  let history = [];

  return {
    deposit(amount) {
      if (amount <= 0) return "Invalid amount"

      balance += amount;
      history.push(`Deposited ${amount}`);
      return `Deposited ${amount}`;
    },

    withdraw(amount) {
      if (amount <= 0) return "Invalid amount";
      if (amount > balance) return "Insufficient funds";

      balance -= amount;
      history.push(`Withdrew ${amount}`);
      return `Withdrew ${amount}`;
    },

    getBalance() {
      return balance;
    },

    transactionHistory() {
      return history;
    }
  };
}

// Create account
const account = createBankAccount();

// Select elements
const amountInput = document.getElementById("amount");
const balanceSpan = document.getElementById("balance");
const historyList = document.getElementById("history");
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");

// Update balance display
function updateBalance() {
  balanceSpan.textContent = account.getBalance();
}

// Update history display
function updateHistory() {
  historyList.innerHTML = "";

  account.transactionHistory().forEach(transaction => {
    const li = document.createElement("li");
    li.textContent = transaction;
    historyList.appendChild(li);
  });
}

// Deposit action
depositBtn.addEventListener("click", () => {
  const amount = Number(amountInput.value);
  account.deposit(amount);

  updateBalance();
  updateHistory();

  amountInput.value = "";
});

// Withdraw action
withdrawBtn.addEventListener("click", () => {
  const amount = Number(amountInput.value);
  account.withdraw(amount);

  updateBalance();
  updateHistory();

  amountInput.value = "";
});
