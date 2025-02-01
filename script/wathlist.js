let wathclist =  JSON.parse(localStorage.getItem('wathclist'));

const tbody = document.querySelector('.tbody');

console.log(wathclist);

function renderTable() {
    tbody.innerHTML = "";
    console.log(wathclist.length);
    for(let i = 0; i < wathclist.length; i++) {
        console.log('hfhfhgfhg');
        
        console.log(wathclist[i]);
        
        tbody.innerHTML += `
        <tr>
                <th scope="row">${i + 1}</th>
                <td>${wathclist[i].name}</td>
                <td>${wathclist[i].episode}</td>
                <td>${wathclist[i].addDate}</td>
                <td><input class="form-check -input d-flex m-auto inputWatched" type="checkbox" data-id="${i}"  name="wached" ${wathclist[i].watched ? 'checked' : ''} id="inputWatched"></td>
                <td><button type="button" class="btn btn-danger btnDelete" data-id="${i}" >Delete</button></td>
                </tr>
        `
        
    };
    deleteBtn();
    inputWatched();
};
renderTable();

function deleteBtn(){
    const btnDelete = document.querySelectorAll('.btnDelete');
    btnDelete.forEach(btn =>{
        btn.addEventListener('click', () => {
            wathclist.splice(btn.getAttribute('data-id'), 1);
            localStorage.setItem('wathclist' , JSON.stringify(wathclist));
            renderTable();
        })
    })
};

function inputWatched(){
    const inpuyWachedCheck = document.querySelectorAll('.inputWatched');
    inpuyWachedCheck.forEach(input => {
        input.addEventListener('click', () => {
            let id =input.getAttribute('data-id');
            console.log(wathclist[id])
            if(wathclist[id].watched == false){
                wathclist[id].watched = true
            }else{
                wathclist[id].watched = false
            }
            localStorage.setItem('wathclist', JSON.stringify(wathclist))
        })
    })
}