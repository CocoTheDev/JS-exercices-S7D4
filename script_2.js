console.log("Bienvenu dans l'exercice de la fonction factorielle");


nb = prompt("De quel nombre veux-tu calculer la factorielle ?");


function factorial(nb) {
  var result = 1;
  for (var i = 1; i <= nb; i++)
    result = result * i;
  return result;
}

console.log(`Le résultat est de : ${factorial(nb)}`);