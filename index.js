function calculateTotal(rolls){
    let accumulator = 0;
    // console.log(typeof rolls)
    if(typeof rolls !== 'object'){
        return 'Value must be an array'
    }

    // More code will go here
    // for (let i = 0; i < rolls.length; i++) {
    //     accumulator += rolls[i]
    // }

    for (const roll of rolls) {
        accumulator += roll
    }


    return accumulator
}



const dieRolls = [4, 5, 6, 1]
const newRolls = [5,6,7,8,9]

// console.log(calculateTotal(dieRolls))
// console.log(calculateTotal(newRolls))


function getMinimumValue(rolls) {
    // Guard clause
    if(rolls.length === 0){
        return 'Array must have at least one value'
    }

    let accumulator = rolls[0];
  
    // Our logic
    for (let i = 1; i < rolls.length; i++) {
      const roll = rolls[i];
      if (roll < accumulator) {
        accumulator = roll;
      }
    }
  
    return accumulator;
  }


const differentRolls = [-5, 4, 5, 6, -1];
// console.log(getMinimumValue(differentRolls))



function listPlayers(names){
    // Guard clause
    if(names.length === 0){
        return "Please input an array with at least one name"
    }

    // Guard clause 2
    for (const name of names) {
        if(typeof name !== 'string'){
            return 'One of the values is not a string'
        }
    }



    // Define accumulator
    let accumulator = ""


    // Our logic goes here
    for(const name of names){
        accumulator += name + ', '
    }

    // Return accumulator
    return accumulator
}


const players = [];
// console.log(listPlayers(players))




function hasSix(rolls){
    let accumulator = false


    // Our logic goes
    for (const roll of rolls) {
        if(roll === 6){
            accumulator = true
        }
    }

    return accumulator
}


// const rolls = [4, 5, 10, 1];
// console.log(hasSix(rolls));



function addBonusToAllRolls(rolls){
    // Accumulator starting point
    let accumulator = []

    // Our logic goes here
    for(let roll of rolls){
        let increased = roll + 2
        accumulator.push(increased)
    }


    // Return accumulator
    return accumulator
}

// const rolls = [4, 5, 6, 1];
// console.log(addBonusToAllRolls(rolls));



function getUniqueRolls(rolls) {
    // Initialize Accumulator
    let accumulator = {};
  
    // Our logic goes here
    for (let roll of rolls) {
      accumulator[roll] = true;
    }
  
    // Return accumulator
    return accumulator;
}
  
const moreRolls = ['Sebastian', 'Ari', 'Shaandi', 'Sebastian'];
// console.log(getUniqueRolls(moreRolls));





// Write a function that counts how many of each character are in a given string.
// Example: "aaabwfbaaaww" 


function countChars(str){
    // Guard clause to check if str is a string
    // If its not, return error message
    if(typeof str !== 'string'){
        return 'Param must be string'
    }

    // Initialize accumulator as empty object
    let accumulator = {}

    // Iterate over the string
    for (let i = 0; i < str.length; i++) {
        // Optional, make variable to hold element in string as we iterate
        let letter = str[i]
        // If the letter isn't already a key in the object
        if(!accumulator[letter]){
            // Add the letter as a key and the value as 1
            accumulator[letter] = 1
        } else {
            // Else
            // Add 1 to that key
            accumulator[letter] += 1
        }
        
    }

    // Return the accumulator object
    return accumulator
}


const myString = "aaabwfbaaaww"
console.log(countChars(myString))