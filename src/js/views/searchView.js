const display = data=>{
    
  

 const markup = `

 
 <li class='list-group-item reset'  id='${data._id}' > ${data.name}</li>


 
 `;
 document.querySelector('.list-group').insertAdjacentHTML('beforeend', markup);
};




export const searchResults = (houses)=>{
   houses.forEach(el => {
        display(el)
    });
}