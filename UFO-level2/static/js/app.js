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

button.on("click", function() {

    //Select user's input date
    let inputElement = d3.select("#input");
    let inputValue = inputElement.property("value");
    
    //Debug statement
    //console.log(inputValue);

    //Filter data based on input date
    let filteredData = tableData.filter((sighting) => sighting.datetime === inputValue ||
                                                        sighting.city === inputValue ||
                                                        sighting.state === inputValue ||
                                                        sighting.country === inputValue ||
                                                        sighting.shape === inputValue
    );
    
    //Debug statement
    console.log(filteredData);
    
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