import axios from 'axios';

export default class searchData{
    constructor(query) {

        this.query=query

    }
async getResults(){
    try{
        const res =  await axios(`https://www.potterapi.com/v1/houses?key=$2a$10$aCRM/xKaf9IV2tmQASF8MeEta7OJmX0R5Naum1tRgcQKSjiM2nuMe`)
        this.result = res.data
        //console.log(this.result)
       
   
    }
    catch(error){
        alert(`sorry there has been an error ${error}`)
    }

 
  }


}