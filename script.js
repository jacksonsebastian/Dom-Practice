var myDiv = document.getElementById("myDiv");

myDiv.innerHTML = "Hi Arthi";

myDiv.className = "myNew";

myDiv.setAttribute("style", "");

myDiv.style.color = "green";

myDiv.style.backgroundColor = "yellow";

var elements = document.body;

var newEl1 = document.createElement("div");
var newEl2 = document.createElement("p");

newEl1.innerHTML = "Div";
newEl2.innerHTML = "P tag";
elements.appendChild(newEl1);
elements.appendChild(newEl2);

// elements.removeChild(newEl1)

// elements.replaceChild(newEl1, newEl2)

// document.write('Hello World')

var image = document.createElement('img');

image.src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
image.setAttribute("id", "myImage")
image.style.height = "60px"
image.style.width = "100px"
elements.appendChild(image)

// elements.removeChild(image);

document.write(Date())

// 


function validate() {
    let x = document.forms['myForm']['firstName'].value;
    if (x==''){
        alert("Please Enter something")
        return false;
    } 
}

function moveChild(){
    let id = null;

    const child = document.getElementById('child');
    let position = 0;
    clearInterval(id);
    id = setInterval(fram, 5);

    function fram() {
        if(position == 346){
            clearInterval(id);
        } else {
            position++;
            child.style.top = position + "px" // "20px"
            child.style.right = position + "px"
        }
    }

}


function count() {
    for(let i = 0; i <=10; i++) {
        alert(i)
    }
    
}

button.onclick = function() {
    alert('Clicked')
}

// text.onclick = function() {
//     document.getElementById('text').style.color = "red"
// }

function click() {
    document.getElementById('text').style.color = "red"
}
text.onclick = click


document.getElementById('listen').addEventListener('click', function(){
    this.style.color = "white"
    this.style.backgroundColor = "gray"
    this.style.border = "1px solid red"
})

var user = document.getElementById('user');

user.addEventListener('click', one);
user.addEventListener('click', two);
function one() {
    this.innerHTML = "Hi Arthi"
}

function two() {
    this.style.color = "red"
}






























/** const obj = {firstName: "Jackson", lastName: "S"};

function User(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
} 

const constructorObj = new User(obj.firstName, obj.lastName)

console.log(constructorObj.lastName)
console.log(constructorObj.firstName); **/

/** const fruits = {fruit1: "Apple", fruit2 : "Grape", fruit3:"Orange", fruit4:"banana"};
let bucket = "";
for(let a in fruits){
    bucket += fruits[a]
}
console.log(bucket);
**/

/**const fruits = ["apple", "Orange", "grape", "banana"];
var bucket = ""
for(let a of fruits){
    bucket = bucket + a; 
}
console.log(bucket); **/

/** const str = "Arthi";
let char = ""
for(let a of str){
    char += a;
}
console.log(char); **/

/** const store = {
    bucket1: function(choclate, chips) {
        return this.fruit1 + " " + this.fruit2 + " " + choclate + " " + chips;
    },
    bucket2: function() {
        return this.veg1 + " " + this.veg3;
    }
}

const vegetable = {
    veg1: "carrot",
    veg2: "beans",
    veg3: "beetroot"
}

const fruit = {
    fruit1: "Apple",
    fruit2: "Grape",
    fruit3: "Orange",
}


let myBucket = store.bucket1.apply(fruit,["kikat", "kuchi chips"]) +" " + store.bucket2.apply(vegetable);


console.log(myBucket); **/

/** function one() {
    let name = "Jack";
    let age = "23";
    console.log(name + " " + age);
    return function two() {
        console.log(name + " " + age);
    }
}

const inner = one();

inner(); **/

/** function one() {
    setTimeout( function() {
        console.log("fun1");

        setTimeout(function(){
            console.log("fun2")

            setTimeout(function() {
                console.log("fun3")
                
            },1000)
        }, 2000)
    }, 5000)
    
}
one() **/

/** function one(fname, lname, age ){
    var fullname = fname + lname + age;
    console.log(fullname)
    // func(fullname);
}
one("Jack","son","23");

function one(fname, lname, func){
    var fullname = fname + lname;
    func(fullname);
}

one("Jack", "son", function(resData){
    console.log(resData)
}) **/

/** function bubbleSort(array) {
  let n = array.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

let arr = [8, 4, 25, 6, 3];
let sorrtedArray = bubbleSort(arr);

console.log(sorrtedArray); **/

// console.log(('b'+'a' + + 'a'+'a'));

/** 

function linearSearch(array, target) {
    if(array.length === 0){
        return -1;
    }
    for(let i = 0; i < array.length; i++){
        if (array[i] === target){
            return i;
        }
    }
    return -1;
}

let a = [1,23,4,5,76];

let target = 4;

let soln = linearSearch(a, target);

console.log(soln); **/

/** 
console.log(isNaN('1'));

let a = 0 + null;
console.log(a);

let b = 0 + undefined;
console.log(b); */


// what is This ReferenceError to the current Object

// var timerId = setTimeout(function() {
//     console.log("This will not be displayed.");
//   }, 2000);
  
//   clearTimeout(timerId);
  
//   var a = "hello";

//   console.log(`Hi ${a} this is jack`);

// const a = [1,2,3,45]
// const b = [12,22,32,52]
// const result = reduce((a,b)=>{
//     return a.concat(b);
// },[]);
// console.log(result)


