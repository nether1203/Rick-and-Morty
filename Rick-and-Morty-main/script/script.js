const baseUrl = 'https://rickandmortyapi.com/api/character';
const container = document.querySelector('.cardsbox');
const aliveUrl = 'https://rickandmortyapi.com/api/character/?name=rick&status=alive'



function getCharectrrs () {
    fetch(baseUrl)
    .then(response => response.json())
    .then(data =>{ 
        renderCards(data.results)
        renderPagination(data.info)
    })
}

function getAlive () {
  fetch(aliveUrl)
  .then(response => response.json())
  .then(data => {
    renderCards(data.results)
    renderPagination(data.info)
  })
}

0

getAlive();
getCharectrrs();




function renderCards (data) {
    container.innerHTML = '';
    data.forEach(cardData => {
        container.innerHTML += `
          <div class="card" style="width: 18rem;">
          <img src="${cardData.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${cardData.name}</h5>
            <p class="card-text">${cardData.species}</p>
            <p class="card-text">${cardData.status}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
          </div>`
        
    });
}


function renderPagination(info){
    const paginationbox = document.querySelector('.paginationbox')
    paginationbox.innerHTML = `
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>`

    }

