var ItemList = {
    name: "Magnum Chocolate",
    price: 150,
    description: "A chocolatey cold dessert"
};
console.log(ItemList);
// Question 2 : To create a reusable function that reserves the elements of an array using generic typing
function ReverseArray(array) {
    array.reverse();
    return array;
}
var originalArray = ["Ali", "Naruto", "Eren", "Ichigo"];
var reversedArray = ReverseArray(originalArray);
console.log(reversedArray);
// Question 3 : To use a lambda function to take two numbers and sum them.
var sum = function (num1, num2) {
    return num1 + num2;
};
var result = sum(10, 20);
console.log(result);
