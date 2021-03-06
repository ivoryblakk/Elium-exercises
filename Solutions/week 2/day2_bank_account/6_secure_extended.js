/*
Imagine we're a bank and we have a lot of accounts!

Write a program for an ATM machine.

Extend previous exercise.

When a pincode has been incorrectly entered 3 times display 'Card blocked'

When the user inputs the correct pincode after the block, it should still say 'Card blocked'



*/

var bank = [
	{name: 'Adrian', amount: 7800, pincode: 2345},
	{name: 'Anja', amount: 14600, pincode: 5630},
	{name: 'AryAnto', amount: 5400, pincode: 9395},
	{name: 'Avery', amount: 10300, pincode: 2355},
	{name: 'Cathrin', amount: 7800, pincode: 3436},
	{name: 'Evan', amount: 13500, pincode: 3745},
	{name: 'Franklyn', amount: 15300, pincode: 4969},
	{name: 'Gabriel', amount: 5400, pincode: 3906},
	{name: 'George', amount: -5400, pincode: 2123},
	{name: 'Jarrod', amount: 7600, pincode: 1205},
	{name: 'Kirill', amount: 8600, pincode: 3402},
	{name: 'Laurens', amount: 9400, pincode: 3060},
	{name: 'Nisha', amount: 4300, pincode: 3583},
	{name: 'Ola', amount: 5400, pincode: 2873},
	{name: 'Rien', amount: 12000, pincode: 7323},
	{name: 'Simas', amount: 11500, pincode: 5321},
	{name: 'Yasir', amount: 14600, pincode: 4382},
]


function enterPinCode(username, pincode, func, amount) {


	for (var i = 0; i < bank.length; i++) {
		if (bank[i].name === username && bank[i].pincodeTries >= 3) {
			return 'Card blocked'
		}
		if (bank[i].name === username && bank[i].pincode === pincode) {
			bank[i]['pincodeTries'] = 0
			return func(username, amount)
		}
		if (bank[i].name === username && bank[i].pincode !== pincode) {

			if (bank[i]['pincodeTries'] === undefined) {
				bank[i]['pincodeTries'] = 0
			}
			bank[i]['pincodeTries']++

			if (bank[i].pincodeTries >= 3) {
				return 'Card blocked'
			}
			return 'Incorrect pincode'
		}
	} 
}


function showBalance(username) {
	// the code from previous exercise
	for (var i = 0; i < bank.length; i++) {
		if (bank[i].name === username) {
			return bank[i].amount
		}
	}
}

function deposit(username, amountToDeposit) {
	// code from the previous exercise
	var index = 0

	for (var i = 0; i < bank.length; i++) {
		if (bank[i].name === username) {
			index = i
		}
 	}

 	bank[index].amount += amountToDeposit

 	return amountToDeposit + ' has been added to your account.'
}

function withdraw(username, amountToWithdraw) {
	// code from the previous exercise
	var index = 0
	var amount = 0

	for (var i = 0; i < bank.length; i++) {
		if (bank[i].name === username) {
			index = i
			amount = bank[i].amount
		}
	}

	if (amount < amountToWithdraw) {
		return 'Insufficient funds'
	}

	bank[index].amount -= amountToWithdraw
	return 'Withdrawal of ' + amountToWithdraw + ' accepted'

}



console.log(enterPinCode('Laurens', 2356, withdraw, 1000))
// outputs Incorrect pincode
console.log(enterPinCode('Laurens', 5823, withdraw, 1000))
// outputs Incorrect pincode
console.log(enterPinCode('Laurens', 3060, showBalance))
// outputs 9400
console.log(enterPinCode('Laurens', 9395, showBalance))
// outputs Incorrect pincode
console.log(enterPinCode('Laurens', 3425, showBalance))
// outputs Incorrect pincode
console.log(enterPinCode('Laurens', 8285, showBalance))
// outputs Card blocked
console.log(enterPinCode('Laurens', 3060, showBalance))
// outputs Card blocked









