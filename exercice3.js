let valeur = prompt("Veuillez entrer une valeur : ")

if (valeur < 0)
    console.log("Nombre négatif")
else if(valeur >= 0 && valeur <= 10)
    console.log("Petit")
else if (valeur >= 11 && valeur <= 50)
    console.log("Moyen")
else if (valeur > 50 && valeur <= 100)
    console.log("Grand")
else
    console.log("Très grand")