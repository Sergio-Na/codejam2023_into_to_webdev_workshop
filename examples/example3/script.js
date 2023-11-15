document.getElementById("addFruitBtn").addEventListener("click", function () {
  var fruitName = prompt("Enter a new fruit name:");
  if (fruitName) {
    var li = document.createElement("li");
    li.textContent = fruitName;
    document.getElementById("fruit-list").appendChild(li);
  }
});

// Function to fetch a random cat fact
function fetchCatFact() {
  fetch("https://catfact.ninja/fact")
    .then((response) => response.json())
    .then((data) => {
      var apiDataDiv = document.getElementById("apiData");
      apiDataDiv.innerHTML =
        "<p><strong>Cat Fact:</strong> " + data.fact + "</p>";
    })
    .catch((error) => {
      console.error("Error fetching cat fact:", error);
      alert("Error fetching cat fact. See console for details.");
    });
}

// Event listener for the API fetch button
document.getElementById("fetchDataBtn").addEventListener("click", fetchCatFact);
