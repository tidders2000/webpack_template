// Global app controller

import searchData from './models/Search'
import * as searchView from './views/searchView'

const state={}

const searchRequest = async () =>{

//1 create new search object

state.search = new searchData('pizza');

//2 get data 

await state.search.getResults()

console.log(state.search.result)
    
//3 dispkay data
searchView.searchResults(state.search.result)
}

searchRequest();

