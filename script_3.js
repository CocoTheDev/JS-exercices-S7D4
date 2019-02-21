console.log("bienvenu dans l'exercice de la pyramide de Mario");

var nb = prompt("Combien d'étages veux-tu pour ta pyramide ?");
console.log("Très bon choix, voici ta pyramide: ");

var hash = 1;

for (let x = nb; x >0; x --) {
  let realHash = '#';
  let realSpace = ' ';
  console.log(realSpace.repeat(x-1) + realHash.repeat(hash));
  hash ++;
}




