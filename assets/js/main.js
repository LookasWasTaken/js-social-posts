/* Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
Milestone 1
 Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.
Non è necessario creare date casuali Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
BONUS
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
Formattare le date in formato italiano (gg/mm/aaaa)
Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone. */

const posts = [
  {
    id: 1,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/300?image=171",
    author: {
      name: "Luca Piacentini",
      image: "https://unsplash.it/300/300?image=15",
    },
    likes: 80,
    created: "25-06-2021",
  },
  {
    id: 2,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=112",
    author: {
      name: "Alexandro Fioretti",
      image: "https://unsplash.it/300/300?image=10",
    },
    likes: 120,
    created: "03-09-2021",
  },
  {
    id: 3,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=234",
    author: {
      name: "Mattia Volpe",
      image: "https://unsplash.it/300/300?image=20",
    },
    likes: 78,
    created: "15-05-2021",
  },
  {
    id: 4,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=24",
    author: {
      name: "Gianni Morandi",
      image: null,
    },
    likes: 56,
    created: "03-04-2021",
  },
  {
    id: 5,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=534",
    author: {
      name: "Paolo Zampa",
      image: "https://unsplash.it/300/300?image=29",
    },
    likes: 95,
    created: "05-03-2021",
  },
];

// Utilizzo un forLoop per iterare la lunghezza dell'array posts

for (let i = 0; i < posts.length; i++) {
  let postElement = posts[i];

  // Seleziono il container dove andrò a generare le mie card

  const container = document.getElementById("container");

  // Controllo provvisorio nel caso un immagine avesse valore "null"

  if (postElement.author.image === null) {
    postElement.author.image = "https://unsplash.it/300/300?image=1";
  }

  // Genero la postCard con il template HTML che era presente nell'index.html

  const postCard = `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${postElement.author.image}" alt="${postElement.author.name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${postElement.author.name}</div>
                        <div class="post-meta__time">${postElement.created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${postElement.content}</div>
            <div class="post__image">
                <img src="${postElement.media}" alt="${postElement.author.name}">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button js-like-button" data-postid="1" onClick="likeClick()">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${postElement.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `;

  // Genero all'interno dell'HTML del container tutto il markup generato

  container.innerHTML += postCard;
}

// Funzione che abilita il "onClick" in HTML

function likeClick() {
  console.log("Pressed the Like Button");
}
