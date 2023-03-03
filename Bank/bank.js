class BackAccount {
    constructor(name, gender, dob, email, mobile, address, initialBalance, adharNo, panNo) {
      this.accountDetails = {
        name,
        gender,
        dob,
        email,
        mobile,
        address,
        initialBalance,
        adharNo,
        panNo,
        kycDetails: {
          name,
          dob,
          email,
          mobile,
          adharNo,
          panNo
        },
        ledger: []
      };
    }
  
    openAccount() {
      console.log(`Account opened for ${this.accountDetails.name}`);
    }
  
    updateKYC(name, dob, email, mobile, adharNo, panNo) {
      this.accountDetails.kycDetails = {
        name,
        dob,
        email,
        mobile,
        adharNo,
        panNo
      };
      console.log(`KYC details updated for ${this.accountDetails.name}`);
    }
  
    depositMoney(amount) {
      this.accountDetails.initialBalance += amount;
      this.accountDetails.ledger.push({
        type: 'Deposit',
        amount
      });
      console.log(`${amount} deposited to ${this.accountDetails.name}'s account`);
    }
  
    withdrawMoney(amount) {
      if (this.accountDetails.initialBalance >= amount) {
        this.accountDetails.initialBalance -= amount;
        this.accountDetails.ledger.push({
          type: 'Withdrawal',
          amount
        });
        console.log(`${amount} withdrawn from ${this.accountDetails.name}'s account`);
      } else {
        console.log(`Insufficient balance in ${this.accountDetails.name}'s account`);
      }
    }
  
    transferMoney(toName, amount) {
      if (this.accountDetails.initialBalance >= amount) {
        this.accountDetails.initialBalance -= amount;
        this.accountDetails.ledger.push({
          type: 'Transfer',
          amount,
          to: toName
        });
        console.log(`${amount} transferred to ${toName}'s account from ${this.accountDetails.name}'s account`);
      } else {
        console.log(`Insufficient balance in ${this.accountDetails.name}'s account`);
      }
    }
  
    receiveMoney(fromName, amount) {
      this.accountDetails.initialBalance += amount;
      this.accountDetails.ledger.push({
        type: 'Receive',
        amount,
        from: fromName
      });
      console.log(`${amount} received from ${fromName}'s account to ${this.accountDetails.name}'s account`);
    }
  }
  
  // Example usage
  const account = new BackAccount('John Doe', 'Male', '01-01-1990', 'johndoe@gmail.com', '1234567890', '123 Main St', 1000, '123456789012', 'ABCDE1234F');
  account.openAccount();
  account.updateKYC('John Doe', '01-01-1990', 'johndoe@gmail.com', '1234567890', '123456789012', 'ABCDE1234F');
  account.depositMoney(500);
  account.withdrawMoney(200);
  account.transferMoney('Jane Doe', 300);
  account.receiveMoney('Jane Doe', 400);
  console.log(account.accountDetails);