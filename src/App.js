
export default class App {
	/**
	 * Méthode principale. Sera appelée après le chargement de la page.
	 */
static main() {
	//Le nom des libellés
	var noms = ["Skins de Zoé","Prix","Date de sortie","Colori"]

	//Le header des rows
	var nomIndividu = ["Zoé originelle", "Zoé Pop Cyber", "Zoé guardienne des étoiles"]

	//La première charactéristique
	var prix = ["975 RP", "1350 RP", "1350 RP"]

	//La deuxième charactéristique
	var date = ["21 Novembre 2017", "21 Novembre 2017", "12 Septembre 2019"]

	//La troisième charactéristique
	var colori = ["N/A", "N/A", "8"]

	//Création de la structure de base
	var table,thead,tbody,tr;

	var app = document.getElementById("app");

	table = document.createElement("table")
	app.appendChild(table);

	thead = document.createElement("thead");
	table.appendChild(thead);

	tbody = document.createElement("tbody");
	table.appendChild(tbody);

	//Création du header (première rangée)
	tr=document.createElement("tr");
	thead.appendChild(tr);	

	for (let i=0;i<noms.length;i++)
	{
		var th = document.createElement("th");
		tr.appendChild(th);
		th.innerHTML = noms[i];
	}

	//Création de chaque individu
	for (let i=0;i<nomIndividu.length;i++)
	{
		tr = document.createElement("tr");
		tbody.appendChild(tr);

		var th = document.createElement("th");
		tr.appendChild(th);
		th.innerHTML = nomIndividu[i];

		var td = document.createElement("td");
		tr.appendChild(td);
		td.innerHTML = prix[i];

		var td = document.createElement("td");
		tr.appendChild(td);
		td.innerHTML = date[i];

		var td = document.createElement("td");
		tr.appendChild(td);
		td.innerHTML = colori[i];
	}
	
}
}
