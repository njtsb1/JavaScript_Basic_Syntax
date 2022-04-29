/* // creating a calculator
function calculator() {

    // defining operations and getting user input value
    // use "\n" to do a line break
    const operation = Number(prompt('Choose an option:\n 1 - addition (+)\n 2 - subtraction (-)\n 3 - multiplication (*)\n 4 - real division (/)\n 5 - division integer (%)\n 6 - power (**)'));
    
    // checking if the operation is valid
    if (!operation || operation >= 7) {
        alert('error - invalid operation');
        calculator();
    } else {

        // defining variables
        // all entries must be of type number
        let n1 = Number(prompt('Enter the first value:'));
        let n2 = Number(prompt('Enter second value:'));
        let result;

        // checking if variables are valid
        if (!n1 || !n2) {
            alert('error - invalid parameters');
            calculator();
        } else {

            // defining the functions
            function sum() {
                result = n1 + n2;

                // showing the result using template strings
                alert(`${n1} + ${n2} = ${result}`);
                newOperation();
            }

            function subtraction() {
                result = n1 - n2;
                alert(`${n1} - ${n2} = ${result}`);
                newOperation();
            }

            function multiplication() {
                result = n1 * n2;
                alert(`${n1} * ${n2} = ${result}`);
                newOperation();
            }

            function realdivision() {
                result = n1 / n2;
                alert(`${n1} / ${n2} = ${result}`);
                newOperation();
            }

            function divisionInteger() {
                result = n1 % n2;
                alert(`The remainder of the division between ${n1} and ${n2} is equal to ${result}`);
                newOperation();
            }

            function potentiation() {
                result = n1 ** n2;
                alert(`${n1} raised to the ${n2}th power is ${result}`);
                newOperation();
            }

            // new operation
            function newOperation() {
                let option = prompt('Do you want to do another operation?\n 1 - Yes\n 2 - No');

                if (option == 1) {
                    calculator();
                } else if (option == 2) {
                    alert('See you later!');
                } else {
                    alert('Please enter a valid option!');
                    newOperation();
                }
            }
        }
    } */

/* // choosing operation
    // using if && else
    if (operation == 1) {
        sum();
    } else if (operation == 2) {
        subtraction();
    } else if (operation == 3) {
        multiplication();
    } else if (operation == 4) {
        realdivision();
    } else if (operation == 5) {
        integerdivision();
    } else if (operation == 6) {
        potentiation();
    } */

/* // using switch case
    switch(operation) {
        case 1:
            sum();
            break;
        case 2:
            subtraction();
            break;
        case 3:
            multiplication();
            break;
        case 4:
            realdivision();
            break;
        case 5:
            integerdivision();
            break;
        case 6:
            potentiation();
            break;
    }
}

calculator(); */
