function createAccount(pin, amount = 0) {
  let acctPin = pin;
  let balance = amount;

  return {
    checkBalance: function (pin) {
      if (pin !== acctPin)
        return 'Invalid PIN.'
      return `$${balance}`;
    },
    deposit: function (pin, amount) {
      if (pin !== acctPin)
        return 'Invalid PIN.'
      balance += amount;
      return `Succesfully deposited $${amount}. Current balance: $${balance}.`
    },
    withdraw: function (pin, amount) {
      if (pin !== acctPin)
        return 'Invalid PIN.'
      if (amount > balance) {
        return 'Withdrawal amount exceeds account balance. Transaction cancelled.'
      } else {
        balance -= amount;
        return `Succesfully withdrew $${amount}. Current balance: $${balance}.`
      }
    },
    changePin: function (pin, newPin) {
      if (pin !== acctPin)
        return 'Invalid PIN.'
      acctPin = newPin;
      return 'PIN successfully changed!'
    }
  }
}

module.exports = { createAccount };
