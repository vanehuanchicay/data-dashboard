function add() { // función del boton 
	var boton = document.getElementById("stripes"); // llamo al boton
	var container = document.getElementById("cont"); // llamo contenedor principal

	var secondContainer= document.createElement("div"); // creo un div donde tendran las opciones del menu
	secondContainer.className="back";

	var vale = document.createElement("img"); // imagen valentina
	vale.setAttribute("src","assets/images/vale.png"); // agregando atributo a img
	vale.className= "valentina";

	var userSpan = document.createElement("span"); // creo la opción usuario
	userSpan.textContent="USUARIO"; // creo el contenido

	var localSpan = document.createElement("span"); // creo la opcion sede
	localSpan.textContent="SEDE"; // creo el contenido
	localSpan.className= "sede_span"; //  creo una clase

	var setting = document.createElement("span"); // creo la opcion sede
	setting.textContent="SETTINGS"; // creo el contenido
	setting.className= "setting"; //  creo una clase

	var icono= document.createElement("i"); // icono usuario
	icono.className ="fa fa-user"; // clase
	var location = document.createElement("i"); // icono location
	location.className ="fa fa-map-marker";
	var sets = document.createElement("i");
	sets.className="fa fa-cog";


	secondContainer.appendChild(icono); 
	secondContainer.appendChild(location); 
	secondContainer.appendChild(sets);
	secondContainer.appendChild(vale);
	secondContainer.appendChild(userSpan); // agrego el usuario al div contenedor
	secondContainer.appendChild(localSpan); // agreso la sede al div contenedor
	secondContainer.appendChild(setting); // agrego settings al div contenedor
	container.appendChild(secondContainer); // agrego el div contenedor al contenedor principal

	localSpan.addEventListener("click", function(){ // creo un evento a mi span sede
		var spotOne = document.createElement("span");
		spotOne.textContent= "Lima";
		spotOne.className="lima";
		var spottwo = document.createElement("span");
		spottwo.textContent="Arequipa";
		spottwo.className="aqp";
		var spotThree = document.createElement("span");
		spotThree.textContent ="Santiago de Chile";
		spotThree.className="stg";
		var spotFour = document.createElement("span");
		spotFour.textContent="México";
		spotFour.className="mex";

		container.appendChild(spotOne);
		container.appendChild(spottwo);
		container.appendChild(spotThree);
		container.appendChild(spotFour);
		
	})
}