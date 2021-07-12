//get starting values from the screen
//Controller Function
function getValues() {

    //get the values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //parse our input in integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    //check to see if they are in fact integers
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {

        //generate the numbers return them in an array
        let numbers = generateNumbers(startValue, endValue);

        //display the results on the page
        displayNumbers(numbers)
    
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Only integers are allowed for Hundo!'
        })
    }
}

//Generate numbers based on the start and endvalue
//Logic Function(s)

function generateNumbers(startValue, endValue) {

    let numbers = [];
    //loop over the values from start to end.
    for (let index = startValue; index <= endValue; index++) {
        numbers.push(index);
    }
    return numbers;
}


//display the numbers to the screen
//View Function
function displayNumbers(numbers) {

    let className = "even";
    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {
        let number = numbers[index];

        if (number % 2 == 0) {
            className = "even"
        } else {
            className = "odd"
        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;

}