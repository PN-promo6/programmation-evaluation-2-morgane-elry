//2.1
// function addElement(){
//   document.createElement("h1")
//   document.createElement("p")
//   document.createElement("button")
// }


//2.2
let moviesCinema = [
  ["Titre du film", "Réalisateur", "Nationalité", "Année", "Durée", "Version"],
  ["IN MY ROOM", "Ulrich Köhler", "Allemagne", "2019", "2h", "vf"],
  ["UN VIOLENT DÉSIR DE BONHEUR", "Clément Schneider", "France", "2018", "1H15", "vf"],
  ["WHAT YOU GONNA DO WHEN THE WORLD'S ON FIRE ?", "Roberto Minervini", "États-Unis/Italie", "2018", "2h03", "vostfr"],
  ["GRASS", "Hong Sang-Soo", "Corée du sud", "2018", "1H06", "vostfr"]
]
//2.3

function moviesTable(array) {

  let table = document.createElement("table");
  document.body.appendChild(table);
  let thead = document.createElement("thead")
  table.appendChild(thead)
  let tbody = document.createElement("tbody");
  table.appendChild(tbody);

  let tr = document.createElement("tr");
  thead.appendChild(tr);

  let h = 0;
  let i = 1;
  let j = 0;
  let headerData = array[0];

  while (h < headerData.length) {

    let currentElement3 = headerData[h]
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

let result = moviesTable(moviesCinema);

//2.4
let button = document.getElementById("btn");

document.removeEventListener(function,moviesTable, true);


button.addEventListener ("click", function(){
  document.removeEventListener(document, p, true);
  document.removeEventListener(function,moviesTable, false);
});
