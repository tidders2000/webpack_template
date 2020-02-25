const display = data=>{

 const markup = `
 
 <p>Here is the recipie name ${data.title}</p>
 
 `;
 document.querySelector('.data').insertAdjacentHTML('beforeend', markup);
};

export const searchResults = (recipies)=>{
    recipies.forEach(el => {
        display(el)
    });
}