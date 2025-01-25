const baseUrl = 'https://rickandmortyapi.com/api/location';
const container = document.querySelector('.cardsbox');


function getCharectrrs (page, name) {
    fetch(`${baseUrl}/?page=${page}&name=${name}`)
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
             
              <div class="card-body">
                <h5 class="card-title">${cardData.name}</h5>
                <p class="card-text">${cardData.type}</p>
                <p class="card-text">${cardData.dimension}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
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


      const btnFilter = document.querySelector(".btnFilter")

      btnFilter.addEventListener('click', () => {
         const locName = document.querySelector('.loc-name').value 
         currentPage = 1
         getCharacters(1, '', locName)
         
      })
      
      const exampleModal = document.getElementById('exampleModal')
      if (exampleModal) {
         exampleModal.addEventListener('show.bs.modal', event => {
            const button = event.relatedTarget
            const modalTitle = exampleModal.querySelector('.modal-title')
            const id = button.getAttribute('data-bs-whatever')
      
            
            fetch(`${baseUrl}/${id}`)
               .then(response => response.json())
               .then(data => {
                  console.log(data);
               })
      
      
            modalTitle.textContent = `Info about ${id}`
      
         })
      }