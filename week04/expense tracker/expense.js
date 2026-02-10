// DOM Selection
console.log("JS Connected");

const nameInput = document.getElementById("nameInput");
const amountInput = document.getElementById("amountInput");
const categoryInput = document.getElementById("categoryInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const expenseList = document.getElementById("expenseList");
const errorMessage = document.getElementById("errorMessage");

const totalAmountDisplay = document.getElementById("totalAmount");
const itemCountDisplay = document.getElementById("itemCount");
const highestExpenseDisplay = document.getElementById("highestExpense");

let expenses = [];

// Add Expense
addBtn.addEventListener("click", function () {

  const name = nameInput.value.trim();
  const amount = Number(amountInput.value);
  const category = categoryInput.value;

  // Validation
  if (name === "" || amount <= 0) {
    errorMessage.textContent = "Please enter a valid name and amount.";
    return;
  }

  errorMessage.textContent = "";

  const expense = {
    name: name,
    amount: amount,
    category: category
  };

  expenses.push(expense);

  // Create list item
  const li = document.createElement("li");
  li.textContent = name + " | " + category + " | KES " + amount + " ";

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", function () {
    expenseList.removeChild(li);
    expenses = expenses.filter(e => e !== expense);
    updateSummary();
  });

  li.appendChild(deleteBtn);
  expenseList.appendChild(li);

  // Clear inputs
  nameInput.value = "";
  amountInput.value = "";

  updateSummary();
});


// Clear All
clearBtn.addEventListener("click", function () {
  expenseList.textContent = "";
  expenses = [];
  updateSummary();
});


// Update Summary
function updateSummary() {

  let total = 0;
  let highest = null;

  for (let i = 0; i < expenses.length; i++) {
    total += expenses[i].amount;

    if (highest === null || expenses[i].amount > highest.amount) {
      highest = expenses[i];
    }
  }

  totalAmountDisplay.textContent = total;
  itemCountDisplay.textContent = expenses.length;

  if (highest === null) {
    highestExpenseDisplay.textContent = "-";
  } else {
    highestExpenseDisplay.textContent =
      highest.name + " (KES " + highest.amount + ")";
  }
}
