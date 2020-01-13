//1.1
let fishList = [
  ["Aulopiformes", "Synodontidae", "Poisson lézard", "Synodus saurus"],
  ["Aulopiformes", "Anguilliformes", "Anguille", "Anguilla anguilla"],
  ["Aulopiformes", "Congridae", "Congre", "Conger conger"],
  ["Atheriniformes", "Atherinidae", "Joël", "Atherina boyeri"]
]

//1.2

function fishTable(array) {

  let table = document.createElement("table");
  document.body.appendChild(table);
  let thead = document.createElement("thead")
  table.appendChild(thead)
  let tbody = document.createElement("tbody");
  table.appendChild(tbody);

  let tr = document.createElement("tr");
  thead.appendChild(tr);

  let h = 0
  let i = 1;
  let j = 0;

  let titleFishTable = ["Order", "Famille", "Nom vernaculaire", "Nom binominal"]

  while (h < titleFishTable.length) {

    let currentElement3 = titleFishTable[h]
    let th = document.createElement("th");
    tr.appendChild(th);
    th.innerText = currentElement3;
    h++
  }


  i = 1
  while (i < (array.length)) {
    let currentElement1 = array[i];
    let tr2 = document.createElement("tr");
    tbody.appendChild(tr2);

    j = 0;

    while (j < (currentElement1.length)) {
      let currentElement2 = currentElement1[j];
      let td = document.createElement("td");
      tr2.appendChild(td);
      td.innerText = currentElement2;
      j++;

    }
    i++;
  }
}


let result = fishTable(fishList)
