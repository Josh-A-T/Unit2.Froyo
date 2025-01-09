const welcomeMessage = "Hello there, welcome to Froyo! Please enter a list of comma-separated froyo flavors below.";
const userInput = prompt(welcomeMessage)
	.split(",")
	.map((e) => e.trim());

function countOrders(list) {
	const orders = {};

	// Counting the number of orders 
	for (let i = 0; i < list.length; i++) {
		const name = list[i];
		orders[name] = parseInt(orders[name] || 0) + 1;
	}

	return orders;
}

// Object which will hold the number of orders for each flavor
const flavorCount = countOrders(userInput);

function createPageElements() {
//Creating the page elements and setting up the table
    const resultDiv = document.createElement("div");
    const resultsHeadDiv = document.createElement("h2");
    const resultsContainer = document.createElement("div");

    resultsHeadDiv.innerText = "Flavors: ";
    resultDiv.append(resultsHeadDiv, resultsContainer)
    resultDiv.id = "orders";

	for (const [flavor, count] of Object.entries(flavorCount)) {
		const p = document.createElement("p");
		p.textContent = `${flavor}: ${count}`;
		resultsContainer.appendChild(p);
	}
	const body = document.createElement("body");
	body.appendChild(resultDiv);
	document.body = body;
}

// put info to page
createPageElements();