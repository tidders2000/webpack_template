// Global app controller

import searchData from './models/Search'
import houseData from './models/House'
import members from './models/Members'
import * as searchView from './views/searchView'
import * as houseView from './views/houseView'
import * as membersView from './views/membersView'

const state={}

// search controller

const searchRequest = async () =>{

//1 create new search object

state.search = new searchData('data');

//2 get data 

await state.search.getResults()

//2.5 clear current data
   
//3 dispkay data
searchView.searchResults(state.search.result)
}

// house controller

const housesSelected = async (id)=>{


// create a new house search object

state.house = new houseData(id)

// get data
await state.house.getResults()
// display data

houseView.houseResults(state.house.result)
}



const houseMembers = async (id)=>{
    houseView.clearResults();
    // new members object

    state.members = new members(id)

    // get data
    await state.members.getResults();

    //display members
    membersView.searchResults(state.members.result)

    // display logo
  console.log(state.members.name)





}

const memDetails =  (id, members)=>{

   membersView.showMem(id, members)
}




document.querySelector('#test').addEventListener('click', e => {
    e.preventDefault();
    const id = e.target.closest('li').id
    console.log(id)
    housesSelected(id);
    houseMembers(id)

})

document.querySelector('.members').addEventListener('click', e => {
    
    const id = e.target.closest('li').id
    if(id){ console.log(id)}
 
    memDetails(id, state.members.result)
   
})


searchRequest();
