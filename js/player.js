
const playerListArray = [];

// function for displaying the list of the selected player
function displayPlayerList() {

    const playerList = document.getElementById('player-list');
    playerList.textContent = "";

    for (let i = 0; i < playerListArray.length; i++) {


        // checks if the number of the player is greater than 5 then it will show an alert
        if (playerListArray.length > 5) {
            alert('You can select maximum 5 players');
            return;
        }

        else {

            // create a table and append the child for displaying the player lists
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <th>${i + 1}</th>
                <td>${playerListArray[i].playerName}</td>
        
            `;
            playerList.appendChild(tr);
        }

    };
}
// function for select player 
function selectPlayer(element) {
    const playerName = element.parentNode.children[0].innerText;

    const player = {
        playerName: playerName
    }
    playerListArray.push(player)


    // disabled the button after clicking it
    element.disabled = true;
    // change the button color when it is disabled
    element.style.backgroundColor = 'purple';

    displayPlayerList();

}

let calculate;

// event handler for calculate player expenses
document.getElementById('calculate-btn').addEventListener('click', function () {
    //per player buget value 
    const playerBudgetValue = document.getElementById('amountPerPlayer')
    const expenseString = playerBudgetValue.value;
    const expense = parseFloat(expenseString);


    calculate = expense * playerListArray.length;


    let calculateAmount = document.getElementById('calculate-amount');


    calculateAmount.innerText = calculate;




})
// event handler for calculate total expnses 
document.getElementById('calculate-total-btn').addEventListener('click', function () {

    const managerCostField = document.getElementById('manager')
    const managerCostString = managerCostField.value;
    const managerCost = parseFloat(managerCostString);

    const coachCostField = document.getElementById('coach')
    const coachCostString = coachCostField.value;
    const coachCost = parseFloat(coachCostString);

    const calculateTotal = managerCost + coachCost + calculate;

    let calculateTotalAmount = document.getElementById('calculate-total-amount');


    calculateTotalAmount.innerText = calculateTotal;

    amountPerPlayer.value = '';
    manager.value = '';
    coach.value = '';


})






