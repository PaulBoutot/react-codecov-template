/**
 * Returns the string "Hello World!"
 * @returns The string "Hello World!"
 */
const helloWorld = () => {
  return "Hello World!"
};

/**
 * Adds two numbers together
 * @param {number} x 
 * @param {number} y 
 * @returns 
 */
const add = (x,y) => {
    return x + y;
}

/**
 * Subtracts two numbers
 * @param {number} x 
 * @param {number} y 
 * @returns 
 */
const subtract = (x,y) => {
    return y-x;
}

export { helloWorld, add, subtract };