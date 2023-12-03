// Question 1 - How many vowels?
// Write code that counts the number of vowels in a string.
// +1 bonus points if you ask for the string from the user

//var sentence = "How many vowels do you think are in this one?";
// Your solution goes here.
//Used: https://charactercounter.com/count-characters-in-javascript to help write the code, then chatGPT to check my answer, which helped me simplify my console.log line
var sentence = prompt("Please enter a sentence")
var regex = /[aeiou]/gi; // only count vowels

console.log(sentence.replace(regex, "").length); 



// Question 2 - Odd Addition
// You'll be given three arrays containing two numbers each. 
// Write a script that checks if the numbers are odd or even.
// If they are odd, multiple them and return or print the results.
// If they are even, add them and return or print the results.
// For example, [3, 5] would return 15; but [3, 6] would result in 9

const first = [5, 7];
const second = [12, 3];
const third = [7, 7];
// Your solution goes here
//From: https://www.geeksforgeeks.org/javascript-program-to-print-even-numbers-in-an-array/ , chatgpt, and classmates help
const array = [first, second, third];
function ifoddoreven(array){
    const results_finish = [];
    for (const i = 0; i < array.length; i++){
        const arrays = array[i];
        const x = arrays [0];
        const y = arrays [1];

        if (y % 2 == 0) {
            results_finish.push(y * x);
        }
        else {
            results_finish.push(y + x);
        }
    }
    return results_finish;
}
//from chatgpt "call the function and print the result"
const result = ifoddoreven(array);
console.log(result);


// Question 3 - Twenty One
// You'll receive three arrays with two numbers again.
// If the two numbers add up to 21, return True
// If they don't, return False unless they are identical
// If they are identical, return "Split"

const p = [19, 2];
const q = [4, 6];
const r = [16 ,16];
// Your solution goes here
//help from classmates, web, checked using chatgpt to correct some errors
const pqr_array = [p, q, r];
function sumarray_checkif21(pqr_array){
    //from same website for question 2 to help with for loop
    const results_finish_pqrarray = [];

    for (const i = 0; i < pqr_array.length; i++){
        const array = pqr_array[i];
        const x = array [0];
        const y = array [1];

        if (x + y === 21) {
            results_finish_pqrarray.push(true);
        }
        else if (x === y){
            results_finish_pqrarray.push("Split");
        }
        else {
            results_finish_pqrarray.push(false);
        }
    }
    return results_finish_pqrarray;
}
const pqr_result = sumarray_checkif21(pqr_array);
console.log(pqr_result)


// Question 4 - FizzBuzz
// This is a classic programming question.
// Print out the numbers from 1 to 100, except
// If the number is a multiple of three, print Fizz
// If the number is a multiple of five, print Buzz
// If the number is a multiple of three and five, print FizzBuzz
// Your output might look something like 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz ....

// Your solution goes here
//https://medium.com/swlh/fizz-buzz-solution-javascript-62a9f3b662fe with help from chatgpt to make it easier to read
function fizzBuzz(start, end) {
    for (let num = start; num <= end; num++) {
        const Multipleof3 = num % 3 === 0;
        const Multipleof5 = num % 5 === 0;

        if (Multipleof3 && Multipleof5) {
            console.log("FizzBuzz");
        } else if (Multipleof3) {
            console.log("Fizz");
        } else if (Multipleof5) {
            console.log("Buzz");
        } else {
            console.log(num);
        }
    }
}
fizzBuzz(1, 100);





//Question 5 - Start my car
// Create a car variable (object)
// Give it the properties of make, model, year, and color
// Give it a start method that returns to the console "Vroom vroom! Car started!" or something similar
// Call the start method

//from lecture

Your solution goes here
var car = {
    make: "toyota",
    model: "camry",
    year: "2009",
    color: "black",
    start: function(){
        console.log("I started my black 2009 Toyota Camry")
    }
}
car.start()




//Question 6 - How many states are there?
// Ok, this seems silly, but we're actually going to work with AJAX to get some data and process it
// You need to load a geojson file, convert it to json, and then count up the number of entires it has...
// In other words, print out to the console log the number of airports in the data set
// You'll want to use chapter 3 of the roth textbook and our Monday lecture here.
// +2 bonus points if you tell me first how many total airports there are and then how many civilian 
// feel free to explore the data in QGIS (or arc). If you know how to answer the question in QGIS, how do you transfer it to javascript?

//used chatgpt to help on this one
function jsAjax() {
    // Step 1: Create the data request
    // You may not have your data stored in a data sub-directory, just update this appropriately
    var request = new Request('data/airports.geojson');

    // Step 2: define Fetch parameters
    // Note this isn't really necessary, do you remember/know why?
    function loadData() {
        var init = {
            method: 'GET'
        }

        // Step 3: use Fetch to retrieve the data and set up callback functions
        fetch(request, init)
            .then(conversion)
            .then(callback)
            //chat gpt suggested this catch to handle erros during fetch
            .catch(error => console.error('Error fetching data:', error));
    }

    // Step 4: define your callback functions
    // You'll need to process the data in some way. First, from geojson to json... then to find the answer.
    // Loops are helpful here.
    loadData();
    function conversion(response) {
        return response.json();
    }

    function callback(data) {
        var numberofAirports = data.features.length;
        console.log("Total number of airports: " + numberofAirports);
        var civilianAirports = 0;
        data.features.forEach(function (airport) {
            if (airport.properties.type === "civilian") {
                civilianAirports++;
            }
        });

        // Step 5: send the final answer to the console.log()
        console.log("Number of civilian airports: " + civilianAirports);
    }

}






// Question 7 - Dynamically creating a list
// This problem draws heavily from Chapter 2 of your workbook (the Roth et al.), so make sure to review there if you're stuck!
// I'm going to give you two arrays as variables. One will have city names, the other their populations.
// You need to create a FUNCTION that takes in the two arrays (so the data is not created within them, this is different from the example in Chapter 2)
// The function should take in the arrays, combine them into an HTML FORMATTED TABLE
// The table should be added to an imaginary div with the id "mydiv"

var cities = ['Corvallis', 'Portland', 'Eugene', 'Albany']
var pops = ['59920', '652500', '176650', '56470']

//Create your function
//used chapter 2 and 3 of textbook, classmates, and some gpt
function CityTable(cities, pops) {
    var table = document.createElement("table");

    var headerRow = document.createElement("tr");

    var cityHeader = document.createElement("th");
    cityHeader.innerHTML = "City";
    headerRow.appendChild(cityHeader);

    var popHeader = document.createElement("th");
    popHeader.innerHTML = "Population";
    headerRow.appendChild(popHeader);

    table.appendChild(headerRow);

    for (var i = 0; i < cities.length; i++) {
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        city.innerHTML = cities[i];
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = pops[i];
        tr.appendChild(pop);

        table.appendChild(tr);
    }

    var myDiv = document.getElementById("mydiv");
    myDiv.appendChild(table);
}

// There are many ways to get this added to the <div id="mydiv"></div> of the associated (imaginary) website.
// This can happen in the function, it can happen as a return of the function, etc.
// The general structure should look something like:
var website.HTML = document.getElementById("mydiv")
website.HTML.appendChild([table])


// one way I like is to have the function return the contents of the table and call the function as I create a new variable that's directly fed into the element...
// this relies on 'method chaining' and is NOT NECESSARY
// if you're not sure what I mean, don't worry. It's definitely not the only way. 
// Review Chapter 2 of your work book for SEVERAL other ways.
