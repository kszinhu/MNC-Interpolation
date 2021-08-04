const resize = () => {
  let table = document.querySelector("#table");
  let n = parseInt(document.querySelector("#n").value);
  table.innerHTML = "";
  if (isNaN(n) || n < 1) {
    return;
  }

  let row = new Array(3);
  let cells = new Array(3);

  Array.from({ length: 3 }, (v, k) => k).forEach((i) => {
    row[i] = document.createElement("tr");
    cells[i] = document.createElement("th");
  });

  // Labels
  cells[0].innerHTML = "i";
  cells[1].innerHTML = "x";
  cells[2].innerHTML = "y";

  row.map((element, index) => {
    element.appendChild(cells[index]);
  });
  // tableBody.appendChild(row);

  for (let index = 0; index < n; index++) {
    cells[0] = document.createElement("th");
    cells[0].innerHTML = index + 1;
    for (let j = 1; j < 3; j++) {
      cells[j] = document.createElement("td");
      cells[j].innerHTML = `<input type="text" id="point${index}${j}">`;
    }
    for (let j = 0; j < 3; j++) row[j].appendChild(cells[j]);
  }
  for (let index = 0; index < 3; index++) table.appendChild(row[index]);
};

const getPoints = () => {
  let matrix = [],
    auxX = [],
    auxY = [];

  // row[0].cells.length - 1 , equals the number of columns from 1
  let row = document.getElementsByTagName("table")[0].rows;
  for (let i = 1; i <= row[0].cells.length - 1; i++) {
    auxX.push(row[1].cells[i].firstChild.value);
    auxY.push(row[2].cells[i].firstChild.value);
  }
  matrix.push(auxX);
  matrix.push(auxY);

  return { matrix };
};

const pointsOrdering = () => {
  let n = parseInt(document.querySelector("#n").value);
  let points = new Array(n);
  let i = 0;
  for (let j = 0; j < n; j++) {
    points[j] = document.querySelector(`#point${j}1`).value;
    points[j] = parseInt(points[j]);
    if (isNaN(points[j])) {
      points[j] = 0;
    }
  }
  points.sort((a, b) => a - b);
  for (let j = 0; j < n; j++) {
    let cell = document.querySelector(`#point${j}1`);
    cell.value = points[j];
  }
};
