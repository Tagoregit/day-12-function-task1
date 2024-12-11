/** 4 Suppose you have a function that takes an array as a parameter. 
 * How would you check inside the function if the array is empty?
 */
    function checkIfArrayIsEmpty(arr) {
        arr.length=2;
        console.log(arr)
    }
      checkIfArrayIsEmpty([])
   
/**5. write a function that takes two numbers as parameters and returns 
 * their difference. */
function differenceOfTwoNumber(a,b){
    console.log(`differce of two number=${a-b}`)
}
differenceOfTwoNumber(5,3)

/**6. Define a function that accepts a name and age as parameters, 
 * and returns a string with
 *  a greeting like "Hello, [name]! You are [age] years old." */
function greet(name, age) {
    return `Hello, ${name}! You are ${age} years old.`;
}
console.log(greet("Alice", 30));


/**7. Write a function that takes a number as a parameter and 
 * returns true if the number is a even number, otherwise false. */
function isEven(number){
    return number % 2===0;
}
console.log(isEven(4))



/**3 In JavaScript, what happens if you pass an undefined value as an
 *  argument to a function that expects a parameter? */
function name(accepts){
    console.log(accepts);
}
name(undefined)
/** 1.How would you define a function that takes two numbers as parameters and returns their sum? */

function sumOfTwoNumber(a,b){
    console.log(`sum of two number=${a+b}`)
}
sumOfTwoNumber(5,3)

/**2. If you define a function that accepts a string as a parameter,
 *  how would you modify it to print the string in uppercase? */

function str(light,colour){
    console.log(light.toUpperCase(),colour.toUpperCase())
    console.log(light.toUpperCase()+colour.toUpperCase())
}
str("dark","blue")

