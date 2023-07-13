function ajouter() {
  var devoir = document.getElementById("devoir").value;
  var date = document.getElementById("date").value;
  var bloc = document.getElementsByName("bloc")[0].value;
  if (devoir == "" || date == "" || bloc == "") {
      alert("Veuillez remplir tous les champs du formulaire.");
      return false;
  }
  var table = document.getElementById("datatable");
  var newRow = document.createElement("tr");
  var col1 = document.createElement("td");
  var col2 = document.createElement("td");
  var col3 = document.createElement("td");
  col1.textContent = devoir;
  col2.textContent = date;
  col3.textContent = bloc;
  newRow.appendChild(col1);
  newRow.appendChild(col2);
  newRow.appendChild(col3);
  var tbody = table.querySelector(".tablebody");
  tbody.appendChild(newRow);
  newCommandForm.reset();
  return false;
}

function supprimer() {
  var tableBody = document.querySelector("tbody");
  while (tableBody.firstChild) {
      tableBody.removeChild(tableBody.firstChild);
  }
}
var supprimerBtn = document.getElementById("supprimerBtn");
supprimerBtn.addEventListener("click", supprimer);
var newCommandForm = document.forms.formDevoir;