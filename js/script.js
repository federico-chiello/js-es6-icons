// (1) Partendo dall'array di oggetti icons, aggiungere i colori ad ogni categoria: blue per gli animali, orange per i vegetali e viola per gli utenti. Prendete i colori da un altro array.
// (2) Stampare poi tutte le icone utilizzando il template literal.
// (3) Stampare quindi nella select tutti i tipi che avete in precedenza selezionato (animal, vegetable, icon).
// (4) Filtrare i risultati in base alla categoria (ricordate di svuotare il container).
// Utilizzate forEach, map e filter e cercate di strutturare tutto con le funzioni.

$(document).ready(function(){

  // Creiamo un array di oggetti di icone.
  const icone = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    }
  ];

  // Dobbiamo creare un altro array in cui inserire i colori che poi daremo alle varie categori di icone.
  const colori = ['blue', 'orange', 'purple'];

  // Ci serve anche creare un altro array vuoto in cui pushare come elementi i diversi tipi che troviamo in icons, attraverso un forEach.
  // Questo passaggio ci permetterà successivamente di confrontare gli indici tra l'array tipi e colori.
  const tipi = [];

  icone.forEach((item) => {
    // Se non include lo stesso item.type allora lo puoi pushare.
    if (!tipi.includes(item.type)) {
      tipi.push(item.type);
    }
  });
  console.log(tipi);

});
