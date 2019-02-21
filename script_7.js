

const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 9 },
  { title: 'A la recherche du temps,perdu', id: 237634, rended: 2 },
  { title: 'Orgueil & Préjugés', id: 873495, rended: 6 },
  { title: 'Les frères Karamazov', id: 450911, rended: 5 },
  { title: 'Guerre et Paix', id: 748147, rended: 19 }
];


console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");



books.forEach(element => {
  if ( element.rented > 0 ) 
  console.log("Le livre " + element.title + " a été emprunté " + element.rented + " fois") 
});




let sortRentedBook = books.sort(function(a, b) {
  return a.rented - b.rented;
})
console.log("Trie des livres par ordre d'emprunt");
console.log(sortRentedBook);

emails.sort(function(a, b){
  return a.length - b.length;
});






let sortBook = books.sort(function(a,b) {
  if(a.title < b.title) {return -1;}
  if(a.title > b.title) {return 1;}
  return 0;
})
console.log("Trie des livres par ordre alphabétique");
console.log(sortBook);