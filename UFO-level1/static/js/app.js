// from data.js
let tableData = data;


//Build main data table

// Make reference to the table body
let tbody = d3.select("tbody");

// Debug statement (loop through data and print each UFO sighting)
//tableData.forEach((sighting) => console.log(sighting));

//Loop through data to build the table
tableData.forEach((sighting) => {
    //console.log(sighting);
    let row = tbody.append("tr");

    Object.entries(sighting).forEach(([key, value]) => {
        //console.log(key, value);
        let cell = row.append("td");
        cell.text(value);
    })
});


//Filter data according to date input

//Select button
let button = d3.select("#filter-btn");

button.on("click", function(event) {

    //Select user's input date
    let inputElement = d3.select("#datetime");
    let inputDate = inputElement.property("value");
    
    //Debug statement
    //console.log(inputDate);

    //Filter data based on input date
    let filteredData = tableData.filter((sighting) => sighting.datetime === inputDate);
    
    //Debug statement
    //console.log(filteredData);
    
    //Clear table
    d3.select("tbody").html("");
    //Refill table with filtered data
    filteredData.forEach((sighting) => {
        //console.log(sighting);
        let row = tbody.append("tr");
    
        Object.entries(sighting).forEach(([key, value]) => {
            //console.log(key, value);
            let cell = row.append("td");
            cell.text(value);
        })
    });
});