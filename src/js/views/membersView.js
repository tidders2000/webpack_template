const display = data=>{
    
  

    const markup = `
   
    
    <li class='list-group-item ml' data-toggle='modal' data-target='#exampleModal' id='${data._id}' > ${data.name}</li>
   
   
    
    `;
 
    document.querySelector('.members').insertAdjacentHTML('beforeend', markup);
   };
 const displayMem = (selection)=>{  
    const html =`
       
    <span class='house_cat'>Role:</span> ${selection.role}<br>
        
    <span class='house_cat'>School:</span>${selection.school}<br>
    <span class='house_cat'>Boggart:</span> ${selection.boggart?selection.boggart:'Unknown' }<br>
        
        <span class='house_cat'>Ministry Of Magic:</span> ${selection.ministryOfMagic? '<i class="fas fa-check"></i>' : '<i class="fas fa-times"></i>'}<br>
        <span class='house_cat'>Order Of The Phoenix:</span>  ${ selection.orderOfThePhoenix? '<i class="fas fa-check"></i>' : '<i class="fas fa-times"></i>'}<br>
        <span class='house_cat'>Dumbledores Army:</span>  ${selection.dumbledoresArmy? '<i class="fas fa-check"></i>' : '<i class="fas fa-times"></i>'}<br>
        <span class='house_cat'>DeathEater:</span>  ${selection.deathEater? '<i class="fas fa-check"></i>' : '<i class="fas fa-times"></i>'}<br>
        <span class='house_cat'>Blood Status:</span>  ${selection.species}<br>
        <span class='house_cat'>Species: </span>  ${selection.species}
   
    `
    const title =`${selection.name}`
    document.querySelector('#exampleModalLabel').insertAdjacentHTML('beforeend',title );
    document.querySelector('#member_ind').insertAdjacentHTML('beforeend', html);

}
  
   
   
   export const showMem = (id, members)=>{
   
    document.querySelector('#member_ind').innerHTML="";
     members.forEach(el => {
         if (el._id === id){
             let selection= el
             displayMem(selection)
         }

     });

       
   }
   
   export const searchResults = (members)=>{
    
  document.querySelector('.members_title').insertAdjacentHTML('beforeend', '<h1 id="mem_title">Members</h1>');
    
    
    members.forEach(el => {
           display(el)
       });
 }
   