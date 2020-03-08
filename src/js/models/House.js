import axios from 'axios';

export default class houseData{
    constructor(id) {

        this.id=id

    }
async getResults(){
    try{
        const res =  await axios(`https://www.potterapi.com/v1/houses/${this.id}?key=$2a$10$aCRM/xKaf9IV2tmQASF8MeEta7OJmX0R5Naum1tRgcQKSjiM2nuMe`)
        this.result = res.data[0]
        console.log(res.data[0])
        
      
       
   
    }
    catch(error){
        alert(`sorry there has been an error ${error}`)
    }

 
  }


}

