// Question 1 : To create a simpe interface of a object with items names, price and description
type ItemList = {
    name: string,
    price: number,
    description: string
}

let ItemList = {
    name: "Magnum Chocolate",
    price: 150,
    description: "A chocolatey cold dessert"
}

console.log(ItemList);


// Question 2 : To create a reusable function that reserves the elements of an array using generic typing
function ReverseArray<GenericType>(array: GenericType[]){
    array.reverse();
    return array;
}
let originalArray = ["Ali", "Naruto", "Eren", "Ichigo"];
let reversedArray = ReverseArray(originalArray);
console.log(reversedArray)


// Question 3 : To use a lambda function to take two numbers and sum them.
let sum = (num1: number, num2: number) => {
    return num1 + num2;
}
let result = sum(10, 20);
console.log(result)

