const baseUrl = 'https://rickandmortyapi.com/api/episode';
const container = document.querySelector('.cardsbox');


function getCharectrrs () {
    fetch(baseUrl)
    .then(response => response.json())
    .then(data =>{ 
        renderCards(data.results)
        renderPagination(data.info)
    })
}



    function renderCards (data) {
        container.innerHTML = '';
        data.forEach(cardData => {
            container.innerHTML += `
              <div class="card" style="width: 18rem;">
             
              <div class="card-body">
                <h5 class="card-title">${cardData.name}</h5>
                <p class="card-text">${cardData.episode}</p>
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


    getCharectrrs();