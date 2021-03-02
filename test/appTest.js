describe("typeWriter() test...", function () {
  it("type writer test", function () {
    var i = 0;
    var txtWelcome = "Welcome to GameCheap";
    var typeWriter = 10;
    var speed = 150;
    if (i < txtWelcome.length) {
      document.getElementById(
        "type-writer-welcome"
      ).innerHTML += txtWelcome.charAt(i);
      i++;
      setTimeout(10, speed);
    } else {
    }
  });
});

describe("Product display test", function () {
  it("display test", function () {
    let arrayOfGameResults = [
      {
        name: "maciej",
        id: "M00661727",
        name: "maciej",
        id: "M00661727",
        name: "maciej",
        id: "M00661727",
        name: "maciej",
        id: "M00661727",
        name: "maciej",
        id: "M00661727",
        name: "maciej",
        id: "M00661727",
      },
    ];
    let displayProductArray = arrayOfGameResults.slice((30 - 1) * 1, 30 * 1); //divides the array based on page size and page number

    for (let i = 0; i < displayProductArray.length; i++) {
      console.log(displayProductArray[i].name);
    }
  });
});

mocha.run();
