let totalIncome = 0;
let totalExpenses = 0;

function addIncome() {
  const incomeInput = document.getElementById('income-input');
  const incomeAmount = parseFloat(incomeInput.value);

  if (incomeAmount && incomeAmount > 0) {
    totalIncome += incomeAmount;
    updateSummary();
    incomeInput.value = '';
  }
}

function addExpense() {
  const descriptionInput = document.getElementById('expense-description');
  const amountInput = document.getElementById('expense-amount');
  
  const expenseDescription = descriptionInput.value;
  const expenseAmount = parseFloat(amountInput.value);

  if (expenseDescription && expenseAmount && expenseAmount > 0) {
    totalExpenses += expenseAmount;

    const expenseList = document.getElementById('expense-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${expenseDescription}: $${expenseAmount.toFixed(2)}`;
    expenseList.appendChild(listItem);

    updateSummary();
    
    // Clear input fields
    descriptionInput.value = '';
    amountInput.value = '';
  }
}

function updateSummary() {
  document.getElementById('total-income').textContent = totalIncome.toFixed(2);
  document.getElementById('total-expenses').textContent = totalExpenses.toFixed(2);
  document.getElementById('remaining-balance').textContent = (totalIncome - totalExpenses).toFixed(2);
}
