
export const clearResults = () =>{
  document.getElementById("logo").src='img/allhouses.png';
  document.querySelector('.details').innerHTML = "";
  document.querySelector('.members').innerHTML = "";
  document.querySelector('.members_title').innerHTML="";
  

 
}

const selected = (id)=>{
  const houseID = ['5a05e2b252f721a3cf2ea33f','5a05da69d45bd0a11bd5e06f','5a05dc8cd45bd0a11bd5e071','5a05dc58d45bd0a11bd5e070']
  houseID.forEach(el=>{
    id === el? document.getElementById(id).style.backgroundColor = "#999999":document.getElementById(el).style.backgroundColor = "#CCCC00";
  })
}


export const houseResults = (data) =>{

    const html =`<h1> House Information </h1><br>
    
 
     <span class='key'>House Mascot:</span> ${data.mascot}<br>
     <span class='key'>Head of House:</span> ${data.headOfHouse}<br>
     <span class='key'>House Ghost: </span>${data.houseGhost}<br>
     <span class='key'>Founder:</span> ${data.founder}<br>
     <span class='key'>Values:</span> ${data.values}
     `
    const y = `img/${data.name}.png`
    document.getElementById("logo").src = y;
    
    
     const x = data.members.length
     document.getElementById("chart_div").style.display = "block";

 
    drawChart(x)
    document.querySelector('.details').insertAdjacentHTML('beforeend', html);
    
    selected(data._id)
  
}



  
    // Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart(num) {
  

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Members');
  data.addRows([
    ['Members', num],
  
  ]);

  // Set chart options
  var options = {
                 'width':300,
                 'height':300,
                 'colors':['#666666'],
                 'backgroundColor':'#CCCC99'
                
                };

  // Instantiate and draw our chart, passing in some options.

  var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

  chart.draw(data, options);
}


