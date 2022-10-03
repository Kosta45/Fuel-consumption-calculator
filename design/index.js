
// Обращаюсь к кнопке
const btn = document.querySelector("a");

// Назначаю действие кнопки
btn.onclick = test;


// Расчеты 
function test() {
    const dist = document.getElementById("distance").value;
    const consmp = document.getElementById("consumption").value;
    const costGas = document.getElementById("cost_gas").value;
    const amount = document.getElementById("amount").value;
    const cost = document.getElementById("cost").value;
    const dividedDistance = dist / 100;
    const requiredAmountFuel = dividedDistance * consmp;
    const costRide = requiredAmountFuel * costGas;


    document.getElementById("amount").innerHTML = requiredAmountFuel;
    document.getElementById("cost").innerHTML = costRide;
    console.log(requiredAmountFuel, costRide)
}






