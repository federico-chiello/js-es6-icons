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
  const tipiIcone = arrayTipi (icone);
  console.log(tipiIcone);

  // si deve usare map per poter aggiugnere il colore alle icone.
  const coloreIcone = icone.map((element) => {
    const indiceTipo = tipiIcone.indexOf(element.type);
    return{
      ...element,
      color: colori[indiceTipo]
    }
  });

  const box = $('.icons');
  stampaIcone (coloreIcone, box);

  const select = $('#type');
  stampaOpzione (tipiIcone, select);

// Change serve per intercettare il cambiamento della select, prendendo il valore selezionato.
  select.change(function(){
    const selected = $(this).val();
    const iconaFiltrata = filterValue (coloreIcone, selected);
    stampaIcone(iconaFiltrata, box);
  });

});




// ******** Funzioni ********

// Funzione che permette di filtrare le icone.
function filterValue (array, type){
  const filteredIcon = array.filter((element) => {
    return element.type == type;
  });
  if (filteredIcon.length > 0) {
    return filteredIcon;
  }

  return array;
};
// Funzione che serve per aggiungere altre opzioni nel select.
function stampaOpzione (array, select){
  array.forEach((item) => {
    select.append(
      `
      <option value="${item}">${item}</option>
      `);
  });

}

// Funzione che serve per aggiungere altri box delle varie icone, senza doverle scrivere nell'html.
function stampaIcone (array, box){
  box.html('');
  array.forEach((item) => {
    const {name, prefix, type, family, color} = item;
    box.append(
      `
      <div class="box-icon">
        <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
        <div class="test">${name.toUpperCase()}</div>
      </div>
      `
    );
  });

}


// Creiamo una funzione che serve per popolare con i types delle icone l'array che abbiamo creato.
function arrayTipi (array){
  const tipi = [];

  array.forEach((item) => {
    // Se non include lo stesso item.type allora lo puoi pushare.
    if (!tipi.includes(item.type)) {
      tipi.push(item.type);
    }
  });
  return tipi;
}
