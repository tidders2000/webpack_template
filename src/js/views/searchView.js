const display = data=>{

 const markup = `
 <ul class="list-group">
 
 <li class="list-group-item"> ${data.title} </li>

 </ul>
 
 `;
 document.querySelector('.data').insertAdjacentHTML('beforeend', markup);
};

export const searchResults = (recipies)=>{
    recipies.forEach(el => {
        display(el)
    });
}