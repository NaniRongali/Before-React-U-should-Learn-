//ES6 Concepts :

function  getName(name){
  return name;
}
let a = false;
let b = false;

// console.log(a && getName('Nani'));
// console.log(a || b);

//Template Literals


let name1 = "John";
let name2 = "Doe";

// console.log(name1 + "" + name2);

//Ternary Operator

let showRecipeone  = false;

function getRecipeOneName ( recipeName){
  return recipeName
} 
function getRecipeTwoName(recipeName){
  return recipeName;
}

if(showRecipeone){
  console.log(getRecipeOneName("Pizza"));
}else{
  console.log(getRecipeTwoName("Coke"))
}


// showRecipeone ? console.log(getRecipeOneName("Pizza")) : console.log(getRecipeTwoName("Coke"));

const id = 1;
const productName = "Product Apple Watch";
const rating = 5;

const product = {
  id:id,
  productName:productName,
  rating:rating,
};
// console.log(product);

const product2 = {
  description :"Product 2 description",
  id,
  productName,
  rating,
};

const getProducttwoDescription = product2.description;
console.log(getProducttwoDescription);

const {description} = product2;
console.log(description)


const array = [1,2,3];

let getArrayFirstValue = array[0];
let getArraySecondValue = array[1];

console.log(getArrayFirstValue,getArraySecondValue);

const [arrayFirstElement,arraySecondElement] = array
console.log(arrayFirstElement,arraySecondElement);


//default parameters , spread and Rest Operators
 

function mulofTwoNumbers(num1,num2){
  return num1 * num2;
}

console.log(mulofTwoNumbers(1,2));

const array2 = [1,2,3];

console.log(...array2);

console.log([...array2])


function getInfo(a,...c){
  //
  console.log(a,c);
return "Nani"; 
}

console.log(1,2,3,5,6)


//map ,filter,find,some,every,includes,indexOf,findIndexof


const person = [
  {
    name:"Nani",
    age:32,
    country:"India"
  },
  {
    name:"Pearson",
    age:30,
    country:"America"

  },
  {
    name:"SaiKumar",
    age:50,
    country:"Australia"

  },
  {
    name:"Perason01",
    age:40,
    country:"USA"


  },
  {
    name:"Sai",
    age:50,
    country:"USA"

  }
]

const getAllNames = person.map((singlePerson,index)=>{
  console.log(singlePerson,index);
  return `${singlePerson.name} age is ${singlePerson.age}`;
});

console.log(getAllNames);


//find method is used to return 1st Value:
let getPersonFromUSA = person.find((singlePerson,index)=>{
  return singlePerson.country == 'USA'
})

console.log(getPersonFromUSA);
//filter method is used to return all Values present in the Array
let getAllPersonsfromUSA = person.filter((singlePerson,index)=>
{
  return singlePerson.country === "USA";
})

console.log(getPersonFromUSA);

//some Method
//Determines whether the specified callback function returns true for any element of the array

let checkSomeArrayMethodWithExample = person.some((singlePerson,index)=>{
  return singlePerson.age>40;
})
console.log(checkSomeArrayMethodWithExample);


//every
//Determines whether all the memebers of an array satisfy the specified test


let checkEveryMethodWithExample = person.every((singlePerson,index)=>{

return singlePerson.age > 40
})

console.log(checkEveryMethodWithExample);


//includes -->

let getIndexOfPersonWhoIsFromRussia = person.findIndex((singlePerson,index)=>{
  return singlePerson.country === "JAPAN";
});

console.log(getIndexOfPersonWhoIsFromRussia);





 let getListofProductsElements = document.querySelector('.list-of-products');
 function renderProducts(getProducts){
  getListofProductsElements.innerHTML = getProducts.map(
    (singleProduct)=>`<p>${singleProduct.title}</p>`
  ).join("");
 }
async function fetchlistofProducts(){
  try {
    const apiResponse = await fetch('https://dummyjson.com/products',{
    method:"GET", 
    })
   const result = await apiResponse.json(); 
   console.log(result);

   if(result ?.products?.length > 0) renderProducts(result ?.products);

  } catch (e) {
    console.log(e);
  }
}

 fetchlistofProducts()



 