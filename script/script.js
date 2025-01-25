const baseUrl = 'https://rickandmortyapi.com/api/character';
const container = document.querySelector('.cardsbox')



function getCharectrrs (page, gender, status) {
    fetch(`${baseUrl}/?page=${page}&status=${status}&gender=${gender}`)
    .then(response => response.json())
    .then(data =>{ 
        renderCards(data.results)
        renderPagination(data.info)
    })
}

getCharectrrs(1,'','');

function renderCards (data) {
    container.innerHTML = '';
    data.forEach(cardData => {
        container.innerHTML += `
          <div class="card" style="width: 18rem;">
          <img src="${cardData.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${cardData.name}</h5>
            <p class="card-text">${cardData.species}</p>
            <p class="card-text" >${cardData.status}</p>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="${cardData.id}">Deteils</button>
          </div>
          </div>`
        
    });
}

let currentPage = 1;
function renderPagination(info){
  
    const paginationbox = document.querySelector('.pagination')
  paginationbox.innerHTML = ``;
  paginationbox.innerHTML +=
     `<li class="page-item prevPage ">
            <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
             </a>
            </li>`;
            paginationbox.innerHTML+=`<li class="page-item"><a class="page-link" href="#">${currentPage}</a></li>
            ` ;
  paginationbox.innerHTML+=`
            <li class="page-item nextPage">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>`;
 
  

  const nextPage = document.querySelector('.nextPage')
  const prevPage = document.querySelector('.prevPage')
  nextPage.addEventListener('click', () => {
    currentPage++;

    console.log('next page');

    getCharectrrs(currentPage, '' , '');
    
  })
  prevPage.addEventListener('click', () => {
    console.log('prev page' );
    if (currentPage > 1){
      currentPage--;
      getCharectrrs(currentPage, '', '');
    }
    

    
  })
  }

const btnfilter = document.querySelector('.btnFilter');

btnfilter.addEventListener('click', () => {
  const gender = document.querySelector('#SelectGender').value;
  const status = document.querySelector('#SelectStatus').value;
  currentPage = 1;
  console.log(gender,status);
  if(gender === ''){
    getCharectrrs(currentPage,'',status)
  }else if (status === ''){
    getCharectrrs(currentPage, gender, '')
  }else{
    getCharectrrs(currentPage, gender , status)
  };
  // getCharectrrs(gender,status)
})

const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    const button = event.relatedTarget 
    const id = button.getAttribute('data-bs-whatever')
    const modalTitle = exampleModal.querySelector('.modal-title')
    fetch(`${baseUrl}/${id}`)
    
    modalTitle.textContent = `Info about ${id}`
    
  })
}