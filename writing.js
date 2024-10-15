// example function
const multiply = (a, b) => {
  return a * b;
};
// Unit tests:
// Expect multiply (a, b) output to be the product
// Expect multiply (2, 5) output should be 10
// Expect multiply(2, -5) output should be -10
// Expect multiply('x', 3) output should be an error
// Expect multiply('', 3) output should be an error
// Example function
const array1 = [1, 2, 3, 4, , 9, 11, 43, -6];
const array2 = [-2, 5, 9, 2, 0, 1, 12, 50];
function concatOdds(arr1, arr2) {
  let result = [];
}
// Expect concatOdds([arr1],[arr2]) to be equal to [-1, 1, 3, 9, 15]
// Expect output of two arrays to be one array of odd numbers
// Expect concatOdds([arr1],[arr2]) to output all unique numbers, no repeats
// Expect to input or output only integers
// Expect strings, decimals, fractions, booleans, or blank inputs to output error
// Functional tests:
// - When a user goes to the checkout feature having at least 1 item in their cart, it should redirect them to another page giving them the option to continue as a guest, create a new account, or log in
// - When a user clicks checkout without having anything in their cart, they should be redirected to a page telling them their cart is empty
// - When a user continues as guest, they should be redirected to checkout and prompted to enter contact information, billing/shipping information, and payment information
// - When a user inputs incorrect credentials they should receive error messages
// - When a user inputs correct credentials, they are then asked to review their cart/items before finalizing payment
// - When a user reviews their cart and deduces that everything looks good they will hit continue
// - When a user completes the order they will be directed to a page gives them an order summary and will receive an order confirmation email/message
// - When a user continues to create an account they will continue to input new info
// - When a user continues to login they will be prompted to input their info
// - When a user tries to create a new account with existing credentials, they will receive a message telling them they already have an account, and prompting them to sign in
