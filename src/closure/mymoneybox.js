// function moneyBox(coins){
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`moneyBox: $${saveCoins}`);
// }

// moneyBox(5)
// moneyBox(5)

function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`moneyBox: $${saveCoins}`)
    }
    return countCoins
}

const myMoneyBox = moneyBox();
myMoneyBox(5)
myMoneyBox(6)
myMoneyBox(7)

const moneyBoxAna = moneyBox()
moneyBoxAna(10)
moneyBoxAna(20)