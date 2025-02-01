const baseUrl = 'https://rickandmortyapi.com/api/episode';
const container = document.querySelector('.cardsbox');


function getCharectrrs (page) {
    fetch(`${baseUrl}/?page=${page}`)
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
            <p class="card-text">${cardData.episode}</p>
            <p class="card-text">${cardData.air_date}</p>
            <button type="button" class="btn btnFilter btn-outline-success d-flex justify-content-center btnAdd" id="" data-name='${cardData.name}' data-episode='${cardData.episode}'>Add to my Wathclist</button>
          </div>
          </div>`
        
    });
    addToWathclist();

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


function addToWathclist () {
  const btnAdds = document.querySelectorAll('.btnAdd');

  console.log(btnAdds);
  btnAdds.forEach(btnAdd => {
    btnAdd.addEventListener('click' , () => {
      const name = btnAdd.getAttribute('data-name');
      const episode = btnAdd.getAttribute('data-episode');
      console.log(name);
      let wathclist = JSON.parse(localStorage.getItem('wathclist')) || [] ;

      const episodeObj = 
        {
          
          name: name,
          episode: episode,
          watched: false,
          addDate: new Date().toISOString()
        };


      const isAlredyAdded = wathclist.some(item => item.name === name && item.episode === episode);
      console.log(wathclist);
      console.log(isAlredyAdded);
      
      
      if(!isAlredyAdded){
        wathclist.push(episodeObj);
        localStorage.setItem('wathclist', JSON.stringify(wathclist));
      }

    
    })

  })
}

























