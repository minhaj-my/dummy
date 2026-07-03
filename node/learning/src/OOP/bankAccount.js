class BankAccount {
  constructor(accountNumber, accountHolderName, balance) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
    console.log(
      `\x1b[32m✓ Amount $${amount} deposited into account ${this.accountNumber}\x1b[0m`
    );
  }
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(
        `\x1b[33m➤ Amount $${amount} withdrawn from account ${this.accountNumber}\x1b[0m`
      );
    } else {
      console.log(`\x1b[31m✗ Insufficient balance in account ${this.accountNumber}\x1b[0m`);
    }
  }

  transfer(amount, recipientAccount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(
        `\x1b[36m⇢ Amount $${amount} transferred from account ${this.accountNumber} to account ${recipientAccount.accountNumber}\x1b[0m`
      );
    } else {
      console.log(
        `\x1b[31m✗ Insufficient balance in account ${this.accountNumber} for transfer\x1b[0m`,
      );
    }
  }
  displayBalance() {
    console.log(`\x1b[35m💳 Account ${this.accountNumber} balance: $${this.balance}\x1b[0m`);
  }
}

const account1 = new BankAccount("SB-012", "Karishma Hedy", 2000);
const account2 = new BankAccount("SB-019", "Phokas Intan", 3000);

console.log(`\x1b[1;37m=== Initial Account Balances ===\x1b[0m`);
account1.displayBalance();
account2.displayBalance();

console.log(`\n\x1b[1;37m=== Deposit Operation ===\x1b[0m`);
account1.deposit(500); // Amount $500 deposited into account SB-012.
account1.displayBalance();

// More examples
console.log("\n\x1b[1;34m=== More Examples ===\x1b[0m");

// Withdraw example
account1.withdraw(200); // Amount $200 withdrawn from account SB-012
account1.displayBalance();

// Transfer example
account1.transfer(1000, account2); // Amount $1000 transferred from account SB-012 to account SB-019
account1.displayBalance();
account2.displayBalance();

// Insufficient balance examples
account1.withdraw(3000); // Insufficient balance in account SB-012
account1.transfer(2000, account2); // Insufficient balance in account SB-012 for transfer

// Multiple operations
console.log("\n\x1b[1;34m=== Multiple Operations Example ===\x1b[0m");
account1.deposit(1500);
account1.withdraw(500);
account1.transfer(800, account2);
console.log(`\n\x1b[1;37m=== Final Account Balances ===\x1b[0m`);
account1.displayBalance();
account2.displayBalance();
