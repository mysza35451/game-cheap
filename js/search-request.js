let arrayOfGameResults;
function searchRequest() {
  // searchRequest = document.getElementById("search-input").value;
  // console.log(searchRequest);
  // window.location.href = "../html/compare.html";

  let searchInput = {
    searchValue: document.getElementById("search-input").value,
  };
  document.getElementById("displayProducts").innerHTML =
    '<div id="displayProducts" class="cards-trending"></div>';
  let dbResponse;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(searchInput),
  };
  let productArray = fetch("/api", options)
    .then((response) => response.json())
    .then((body) => paginate(body));
}

function listProducts(pageSize, pageNumber) {
  let displayProductArray = arrayOfGameResults.slice(
    (pageNumber - 1) * pageSize,
    pageNumber * pageSize
  ); //divides the array based on page size and page number
  document.getElementById("displayProducts").innerHTML = "";
  for (let i = 0; i < displayProductArray.length; i++) {
    let htmlString =
      '<div class="card"> <img  src="' +
      displayProductArray[i].productIMG +
      '" alt="Search" style="width: 300px; height: 200px; " /><h1>' +
      displayProductArray[i].productName +
      '</h1><p class="price">' +
      displayProductArray[i].productPrice +
      "</p><p>" +
      displayProductArray[i].productTags +
      "</p><p><a href='" +
      displayProductArray[i].productURL +
      "'><button>More</button></a></p></div>";
    document.getElementById("displayProducts").innerHTML += htmlString;
  }
}

function paginate(gameSearchArray) {
  document.getElementById("search-result").innerHTML =
    "search results for: " + document.getElementById("search-input").value;
  let itemNumber = gameSearchArray.length; // get the number of products required for pagination
  arrayOfGameResults = gameSearchArray;
  console.log(arrayOfGameResults);

  let amountOfProductsPerPage = 30;
  let paginationNumber = itemNumber / amountOfProductsPerPage; //divide the number to get the amount of paginations required
  paginationNumber = Math.ceil(paginationNumber); //round UP the number to an integer
  console.log(paginationNumber);

  let paginationCounter = 1;
  document.getElementById("pagination").innerHTML = ""; //reset the pagination each time the search occurs
  let paginationHTML = document.getElementById("pagination").innerHTML;
  for (let x = 0; x < paginationNumber; x++) {
    //for loop to write html pagination with dynamic values from db
    paginationHTML +=
      '<button onclick="listProducts(' +
      amountOfProductsPerPage +
      "," +
      paginationCounter +
      ')">' +
      paginationCounter +
      "</button>";
    document.getElementById("pagination").innerHTML = paginationHTML;
    paginationCounter++;
  }
  listProducts(amountOfProductsPerPage, 1);
}
