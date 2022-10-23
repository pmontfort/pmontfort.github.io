function valForm() {
    var x = document.getElementById("nom").value;

    if (x == "") {
        alert("Completa el teu NOM"); 
        return false;
    } else {
   	 	alert("Formulari rebut correctament. Gràcies " + x); 
        return true;
    }
    
}