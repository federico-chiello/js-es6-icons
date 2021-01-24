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

  // Utilizzo il filter per creare tre nuovi array divisi per tipo: gli animali, le verdure e gli utenti.
  const gruppoAnimali = icone.filter((element) => element.type == 'animal');
  console.log(gruppoAnimali);
  const gruppoVerdure = icone.filter((element) => element.type == 'vegetable');
  console.log(gruppoVerdure);
  const gruppoUtenti = icone.filter((element) => element.type == 'user');
  console.log(gruppoUtenti);

  // Creo un nuovo array in cui inserisco i colori che poi si dovranno aggiungere ai tre gruppi.
  const color = ['blue', 'orange', 'purple'];

  // Metto l'elemento colore ad ogni gruppo di array.
  gruppoAnimali.forEach((item) => item.color = 'blue');
  gruppoVerdure.forEach((item) => item.color = 'orange');
  gruppoUtenti.forEach((item) => item.color = 'purple');



// **** Metodo senza funzione ****
// Utilizzo un forEach per poter mettere dopo .icons nell'html i vari box contenenti gli animali, le verdure e gli utenti colorati.
  // icone.forEach((item) => {
  //   const {name, family, prefix, type, color} = item;
  //   $('.icons').append(
  //     `
  //     <div class="box-icon">
  //       <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
  //       <div class="test">${name.toUpperCase()}</div>
  //     </div>
  //     `
  //   );
  // });

// ***** Metodo con la funzione  richiamata *****
  const boxIcon = $('.icons');
  colorBox(icone, boxIcon);








});


// ***** Funzioni *****
function colorBox(array, div) {
  array.forEach((item) => {
    const {name, family, prefix, type, color} = item;
    div.append(
      `
      <div class="box-icon">
        <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
        <div class="test">${name.toUpperCase()}</div>
      </div>
      `)
    });
}
