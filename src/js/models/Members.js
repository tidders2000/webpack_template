import axios from 'axios';

export default class members{
    constructor(id) {

        this.id=id
      

    }



async getResults(){

    if(this.id === '5a05e2b252f721a3cf2ea33f'){
        this.name='Gryffindor'
    } else if( this.id === '5a05da69d45bd0a11bd5e06f'){
        this.name='Ravenclaw'
    } else if (this.id === '5a05dc8cd45bd0a11bd5e071'){
        this.name='Slytherin'
    }else {
         this.name='Hufflepuff'
    }
  
    try{
        const res =  await axios(`https://www.potterapi.com/v1/characters?house=${this.name}&key=$2a$10$aCRM/xKaf9IV2tmQASF8MeEta7OJmX0R5Naum1tRgcQKSjiM2nuMe`)
        this.result = res.data
        console.log(this.result)
       
   
    }
    catch(error){
        alert(`sorry there has been an error ${error}`)
    }

 
  }


}