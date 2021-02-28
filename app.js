const post = document.getElementById("header__post");
const albums = document.getElementById("header__albums");
const todos = document.getElementById("header__todos");

const main = document.querySelector("main");
const section = document.getElementById("section");

post.addEventListener("click", () => {
  main.classList.remove("mainAlbum");
  section.innerHTML = "";
  main.innerHTML = "";

  const header = document.createElement("div");
  header.classList.add("main__row");
  header.innerHTML = `
                      <span>Código Post</span>
                      <span>Titulo</span>
                      <span>Descrição</span>`;

  main.appendChild(header);

  fetch("https://jsonplaceholder.typicode.com/posts/")
    .then((response) => response.json())
    .then((arrayPosts) => {
      arrayPosts.forEach((post) => {
        const item = document.createElement("div");
        item.classList.add("main__row");
        item.innerHTML = `
        <p>${post.id}</p>
        <p>${post.title}</p>
        <p>${post.body}</p>`;
        main.appendChild(item);
      });
    });
});
albums.addEventListener("click", () => {
  main.classList.add("mainAlbum");
  section.innerHTML = "";
  main.innerHTML = "";

  const header = document.createElement("div");
  header.classList.add("main__row");

  header.innerHTML = `
                        <span>Código Albums</span>
                        <span>Titulo</span>
  `;

  main.appendChild(header);
  fetch("https://jsonplaceholder.typicode.com/albums/")
    .then((response) => response.json())
    .then((arrayAlbums) => {
      arrayAlbums.forEach((albums) => {
        const item = document.createElement("div");
        item.classList.add("main__row");
        item.innerHTML = `
        <p>${albums.id}</p>
        <p>${albums.title}</p>`;
        main.appendChild(item);
      });
    });
});

todos.addEventListener("click", () => {
  main.classList.remove("mainAlbum");
  section.innerHTML = "";
  main.innerHTML = "";

  const header = document.createElement("div");
  header.classList.add("main__row");
  header.innerHTML = `
                      <span>Código Todos</span>
                      <span>Titulo</span>
                      <span>Status</span>`;

  main.appendChild(header);

  fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((response) => response.json())
    .then((arrayTodos) => {
      arrayTodos.forEach((todos) => {
        todos.completed === true
          ? (todos.completed = "Completo")
          : (todos.completed = "Incompleto");

        const item = document.createElement("div");
        item.classList.add("main__row");
        item.innerHTML = `
                          <p>${todos.id}</p>
                          <p>${todos.title}</p>
                          <p>${todos.completed}</p>`;
        main.appendChild(item);
      });
    });
});

function homePag() {
  main.innerHTML = "";
  section.innerHTML = "";

  const h1 = document.createElement("h1");
  h1.classList.add("section__title");
  h1.innerText = "Seja bem vindo ao desafio da Framework";

  const h2 = document.createElement("h1");
  h2.classList.add("section__subtitle");
  h2.innerText = "As regras são:";

  const ul = document.createElement("ul");

  const img = document.createElement("img");
  img.src = "framework-letras.png";
  img.alt = "Foto do letreiro Framework";

  const lista = [
    "Construa um menu para acessar 3 telas, cada tela deve conter uma tabela para listar POSTAGENS, ALBUNS e TO-DOs respectivamente. Uma tabela por tela, ok?! Lembre-se de permitir ao usuário voltar para o menu principal. As colunas da tabela podem ser de sua escolha, basta verificar quais informações a API te fornece.",
    ,
    "Para construir sua aplicação você deve utilizar a API publicada em https://jsonplaceholder.typicode.com/",
    "Você pode utilizar as tecnologias: Javascript (puro, Angular, React, Node.js), PHP, Java, C #, .Net Core, Android, IOS, Flutter. Lembre-se de escolher uma linguagem com a qual se sinta confortável, esse NÃO é um fator determinante na sua nota.",
    "Quer ganhar pontos extras? Para isso você pode adicionar à sua aplicação detalhes para demonstrar seus conhecimentos na linguagem utilizada. Como, adicionar paginação nas tabelas, adicionar filtros para pesquisar ou até mesmo ordenação nas colunas das tabelas. Um layout bacana também pode ser um diferencial, use sua criatividade.",
    "Ao finalizar o projeto, poste no github com acesso público, e coloque a URL no campo de resposta. Prazo de entrega: 05/03/2021",
    "Uma dica: Para se tornar um padawan é importante também saber pesquisar e correr atrás! Não tenha medo =)",
  ];
  lista.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item;
    console.log(item);
    ul.appendChild(li);
  });
  section.appendChild(h1);
  section.appendChild(h2);
  section.appendChild(ul);
  section.appendChild(img);
}
homePag();
/*
function callback(e) {
  alert('Aconteceu um evento ' + e.type);
}
window.addEventListener('click', callback);
*/
