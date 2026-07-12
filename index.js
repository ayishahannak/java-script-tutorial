
var studentReg;

studentReg = 44241;

console.log(studentReg);


studentReg = 47621;

studentReg = 24862;

var homeAddress;

homeAddress = "bighouse";

var locationLandmark = "new mosque"

console.log("hanna");

console.log(studentReg);

let x = 20;

console.log(x);

{
    let y = "hanna"
    console.log(y);
}



let studentWork = "arun"

console.log(typeof studentWork);

let regNo = 4687

console.log(typeof regNo);

let isActive = false;

console.log(typeof isActive);

console.log(typeof true);

let educationQualifi;

console.log(typeof educationQualifi);



let maxLimit = Number.MAX_SAFE_INTEGER;

console.log(Number.MAX_SAFE_INTEGER + 1);

console.log(Number.MAX_SAFE_INTEGER + 2);

console.log(Number.MAX_SAFE_INTEGER + 3);

let res = BigInt(9);

console.log(res);

let res1 = BigInt(5);

console.log(res1 + 3n);

let res2 = BigInt(Number.MAX_SAFE_INTEGER);//bigint nt koode normal num cant add.add num with n

console.log(res2+3n);

let usern = null;

console.log(usern);

console.log(typeof usern);




let college = Symbol("");

let student = {
    name: "hana", age: 20,
    [college]: "ABC"
};

console.log(student);

let member = { fullName: "hanna", age: 20, education: "SSLC", School: { up: "feroke", lp: "kozhikode", higherSecondary: "idukki" }, place: "wayanad" }

console.log(member);

console.log(member.fullName);

let education = member.School.lp;

console.log(education);

const age = member["age"];           //for
const fullName = member["fullName"];  //for

console.log(age);           //only get that result like age

console.log(fullName);     //get name dont need to use member.fulnm


console.log("hi i am", fullName, "iam", age, "girl");

// console.log(`hello i am ${fullName} and iam ${age} girl`);

console.log(member?.income?.tax);

console.log(member?.income?.tax ?? "incorrect");  // ?? means undefind /null aya incorrect (right ulle) kanikum .use | instead?
// // || replaces any falsy value.?? replaces only null or undefined.

member["course"] = "python";   //add to member


console.log(member?.income?.tax || "incorrect");




let arr = [10, "hanna", "saudi"];

console.log(arr[0]);

console.log(arr.length);

arr[3] = "accountant";

console.log(arr);

//operators

//1.AR

let a = 12;

let y = 5;

console.log(a + y);
console.log(a - y);
console.log(a * y);
console.log(a / y);
console.log(a % y);

//2.AS

let b = 10;
console.log(b += 5);
console.log(b -= 5);
console.log(b /= 5);


//3.CP 

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 5);
console.log(10 == "10"); //CHECK ONLY value
console.log(10 === "10"); //CHECK TYPE AND VALUE
console.log(10 != 5);

//4.LG

let score = 40;

console.log(score > 28 && score < 50);
console.log(score < 28 || score > 50);
console.log(score < 28 || score < 50);
console.log(!true);
console.log(!(10 > 5));


let homeAddresss = "tamilnadu";
if (homeAddresss === "karnataka") {
    console.log("correct");

} else {
    console.log("incorrect");

}

let scoree = 45;

if (scoree > 100) {
    console.log("your grade is A");

} else if (scoree > 80) {
    console.log("your grade is B");

} else if (scoree > 70) {
    console.log("your grade is C");

} else if (scoree > 60) {
    console.log("your grade is P");

} else {
    console.log("you failed");
}




let color = "red";

switch (color) {
    case 'red':
        console.log("it is rose");
        break;
    case 'white':
        console.log("it is jasmine");
        break;
    case 'orange':
        console.log("it is sunflower");
        break;
    default:
        console.log("it is invalid");

}


for (let i = 1; i < 6; i++) {    // first  i =1 then check i <= 6 adh true ayal c.l() pokum.so out put=1.  then i ++ .it will continue
    console.log(i);             // untill i<6.adh false aya loop will stop. result 1 2 3 4 5.

}


for (let m = 1; m <= 10; m++) { //1 x 4 = 4   
    console.log(`${m} x 4 =${m * 4}`);

}
//1.
for (let w = 1; w <= 10; w++) { //1 x 5 = 5
    console.log(`${w} x 5 =${w * 5}`);

}


//3.
let subject1 = 85;
let subject2 = 90;
if (subject1 > subject2) {
    console.log("subject1 mark is greater than subject 2");

} else {
    console.log("subject 1 is not greater than subject 2");

}

//4

let item1 = 20;
let item2 = 25;

console.log(item1 < item2);

//5

let johnAge = 30;
let friendAge = 30;

console.log(johnAge === friendAge);

//6.

let number = 3;

switch (number) {
    case 1:
        console.log("monday");
        break;

    case 2:
        console.log("monday");
        break;

    case 3:
        console.log("monday");
        break;

    case 4:
        console.log("monday");
        break;

    case 5:
        console.log("monday");
        break;

    case 6:
        console.log("monday");
        break;

    case 7:
        console.log("monday");
        break;

    default:
        console.log("invalid entry");
        break;

}

//7.

let studentmark = 30;

if (studentmark > 80) {
    console.log("A");

} else if (studentmark > 70) {
    console.log("B");

}
else if (studentmark > 60) {
    console.log("B");

}
else if (studentmark > 50) {
    console.log("C");

}
else {
    console.log("failed");

}

//2.

let sum = 0;
for (i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {            //i=1 then check 1 <= 10 if true it go to if . when if  true it will go to sum false aya veendum mele then i ++ again next step
        sum += i;
    }

}
console.log(`sum of odd numbers = ${sum}`);


let g = 26;
do {
    console.log(g);     // false ayalum first (firstb time ) number print cheyyum .other case doesnot if g = 11 11 print avm .if g=6 it will  print 1 2 3 4 5 6 7 8 9
    g++;
}
while (
    g < 10
)

//FUNCTION 

function findSum(num1, num2) {             //num1 num2 parametres like variable like let=num1
    let result = num1 + num2;               // "( this process is called function defeiniton /function statment )"
    console.log(result);
}
findSum(80, 200);   // 10 20 arguments "( this process is called calling or invoke)"
findSum(20, 40);



function college1() {
    console.log("the best");

} college1();

function newWork() {
    console.log("work is good");      // return will show on the console
    return 123;

} console.log(newWork());

(function () {
    console.log("no function");   // anonymous function

}());

function educationDetails() {
    console.log("good education");

}
educationDetails();

let nothing = () => {
    console.log("nothing is there");
}
nothing()                        // ivde log ella log ayal full eythiye verum. so function call.

//1. 
function calculation(n1, n2) {
   return n1 + n2
}
console.log(calculation(30, 40));
 



function calculation2(n1, n2) {
    console.log(n1 - n2);
}
calculation2(60, 40);



function calculation3(n1, n2) {
    console.log(n1 * n2);
}
calculation3(10, 10);

//2. greatest
function largestNum(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        console.log(`${n1} is largest`);
    } else if (n2 > n1 && n2 > n3) {
        console.log(`${n2} is largest`);

    } else if (n3 > n2 && n3 > n1) {
        console.log(`${n3} is largest`);

    }

} largestNum(20, 30, 40);

//3.vowel

function vowels(string) {

    let total = 0;
    let vowel = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i <string.length; i++) // i=o ,i < 7 (lenth of hanna)true ayadh kond go to string[i](h) vowelil include ano nokum .true anel total=+1,.then i + become 2.. repeaet
        if (vowel.includes(string[i])) {
            total++;
        }

    console.log(total);
}
vowels("hanna");

//5.
function multiplication(num) {


    for (let i = 1; i <= 10; i++)
        console.log(`${i} * ${num} = ${i*num}`);
}

multiplication(5);


//5.prime

function isPrime(num) {
    if(num<=1){
        console.log("not prime");
        return;
    }

    for (let i = 2; i < num; i++)
        if (num % i === 0) {
            console.log("Not Prime");  // prime numbr diivide cheytha 0 kittilla .loop finishes only when < this conditions false.
            return;                   // if num= 13 after completing(>) this go to 13 %2 =0. it is false so increment (true ayirunnel print not prime)then again the process untill the > condition false
        }                              // true aya return(stop).no furthr calculation need.loop finish ayal(> false) it will print prime
                                       //after final if false (463) go to console prime

    console.log("Prime");
}

isPrime(1);


//my Q  to check it even

function isEven(even) {

    if (even % 2 === 0) {
        console.log(`${even} is even number`);
    }
    else {
        console.log(`${even} is not an even number`);

    }

    }isEven(5);

    //my q   to check how many even numbers on a given limit 

 function EvenCounts(num)  {
    let total=0;
    for(let i = 1; i <=num ; i++){
    if (i % 2===0){
        total++;
    }
    }
  console.log(total);

 }
  EvenCounts(10)

//my q sum of all numbers 

function sumOf(num) {
    let sum = 0;
    for (let i = 1; i <=num; i++)
        sum+=i;
    console.log(sum);

}
sumOf(5)

//my q greatest of numbr in an array

function greatestOf(array) {
    let largest = array[0]; 

    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }

    console.log(largest);
}

greatestOf([10, 100, 40, 3]);


function sum(n1,n2){
    let res =  n1+n2;
    console.log(`the result is ${res}`);

}
sum(90,20);


//RETURN
  //1
function sum(n1,n2){
    let res =  n1+n2;
    console.log(`the result is ${res}`);    //return itt console akiya that result will apear                              // return means stop the function from running any furthr and send a value  back to whoever called the function
     return res;                          // answer kaynj 0 verum  .return value veran adeel console venam(idhil)
}
console.log(sum(10,20));


//2

function jasmine(){
    return("hiii");

} console.log(jasmine());

function greet(name){     // hanna string ayadh kond " " venam
    return("hello "+name);   // return undel can use  it later
//                             // consl log n pakaram return used.print avanel adeel ullath pole console(varible (if needed because can use it later)& function)
}
 let x="aro"
 let result= greet("hanna");
  console.log(result);
  console.log(result+" ahsal");   //result hanna ahsal
  console.log(result,x);        //result hanna ahsl aro (varible value)
  console.log(result+ jasmine());  // oru functon nte ullil vere function result will be hello hanna hii
            //   console il 2 itemste edeel comma idam but varible undakumbol patilla + madhi


// ANONYMOUS FUNCTION(no function name).include all in bracket(except call).call cheyuunadh immdeaite like this()

( function () {
    console.log("hi friends");      //it cant re use later and run  immedaitly

})
();


// another eg
const square = function (x) {
    let res=  x * x;
    return res;
};

console.log(square(5)); // 25   

// ARROW FUNCTION

const sampleFn = () => console.log("arrow function");    //     varible kodthit call that variable

sampleFn();

  //another eg          

const add = (n1, n2) => {
    return n1 + n2;

};  console.log(add(10,20));

//more . short
 const sum =(a,b)=>  a+b;
 console.log(sum(30,40));            


let array = [20, 40, 10, 50, 20];
console.log(array.length);     
   //length kanan .length

for (i = 0; i < array.length; i++) {
    console.log(array[i]);

}

//sum

let sum = 0;
for (i = 0; i < 5; i++) {
    sum = sum + array[i];
    //console purtah ayal final result kittu ullil aya sum is enn paranj oro vattam add cheyumbo ullath berum like
}                                        //sum is 20,sum is 60 .......
console.log(`sum is ${sum}`);

//even
let arr = [45, 43, 47, 48, 50];
let evencount = 0;

for (i = 0; i < 5; i++) {
    if (arr[i] % 2 === 0) {
        evencount++;
    }

}
console.log(` total number of even number is ${evencount}`);



let ar=[30, 40, 10, 5, 90];

let largestNum =ar[0];

    
for (i = 0; i < 5; i++) 
    if ( ar[i]>largestNum){{
     largestNum=ar[i];
    }
}console.log(`largest number is ${largestNum}`);


//number of parametrs ariyillel

function findSum(a,b,...z){                //rsult= z= (5)[2,3,4,5,6] array pole verum when parameter ethre areelel ...any name
    console.log(z);

}findSum(2,3,5,3,4,5,6)

// argumentsil value illel

function noArg(username="janu"){
console.log(`hi iam ${username}`);         // value illel parameteril = itt value kodkam result will be hi am janu

}noArg()


let username={fullname:"hanna",age:20,country:"india"}
console.log(username);

let fullname=username.fullname
console.log(fullname);                    //normal value varible akan ighne 
 let age=username.age
console.log(age);

username.fullname= "ahsal";            //name will change (only in this line)
console.log(username);




//ighne seperatenkanunnathin pakaram simple varible creation is
const username={fullname:"hanna",age:20,country:"india"}

const {country, age,fullname } = username;         //comma itt add akam
console.log(fullname);                           //{idhil correct name venam}
console.log(age);              //           above const country =username.country
console.log(country);           //        in this order doesnot matter .array order matter



// if we want save fullname value into 'name' varbile(not in fullname like above)use this 
const { fullname:name,age} = username;                //comma itt add akam   (CHA)  it is equivelent to const name = user.fullname;
console.log(name);                                   //result hanna
console.log(age);


//idh pole array um akam

let array=["tomato","apple","sugar","kurta"]
console.log(array[3]);

const [veg, fruit, item, dress] = array;

console.log(veg);   // tomato          (it is equivelent to writing const veg = array[0];
console.log(fruit); // apple             const fruit = array[1];
console.log(item);  // sugar               const item = array[2];  
console.log(dress); // kurta                 const dress = array[3];   which array destructuring by order 0,1,2,3... object destrure by property




let x=40;

let y=x;

x=30;

console.log(x);
console.log(y);          // y marilla

let arr=[5,3,6,8,7]

let arr2=arr;

console.log(arr);              //arr il matiya arr2 um marum so use spread to copy(d)

console.log(arr2);


let a=[10,20,30]
                      
let b=[...a]

console.log(a);
console.log(b);

 a.push(60,80);

console.log(a);           
console.log(b);           //here b marilla because of spread

let usser = { name: "hanna", age: 30 }

let user2=user; //(no need if we need copy. only need spread)                                    //ALL D



let usser2= {...usser}
 console.log(usser2);
usser["city"]="calicut";
usser["address"]="abc";

console.log(usser2);
console.log(usser);                         //USER 2 CHANGE VERILLA



let array=[30,50,60,80];

 let res =array.push(100,10,50);            //array lastk value add akan

console.log(array);                      //changes ellum verum
console.log(res);                        //ethre length und nn kanikum

let remove=array.pop()
console.log(remove);             //last value 50 remove avum  (show removed value)   (value means push cheythedhum undavum)


let add=array.unshift(22,33,44)     //value firstk add akan
console.log(add);              //shows total length not values

let firstRemove=array.shift()         //first value remove akum
console.log(firstRemove);            //show removed value.

let sort=array.sort();
console.log(sort);               //result will 100 10 (like in dictionery)which is not correct so use compared funvtion 


let crctSort=array.sort((a,b)=> a-b)
console.log(crctSort);                 

// if it is string sort will use no need()=this

let fruits=["banana","orange","apple","pear"]

let res1=fruits.sort();  
console.log(res1);                        //any letter start with capital letter it will appear first

let res2=fruits.reverse();
console.log(res2);                     // sort nte opposite 


//  Find

let arr=[60,80,100,110]

let res=arr.find((num)=>num > 100);       //d indx ar

console.log(res);
let index = arr.findIndex(num => num > 100);

console.log(index);



let resMap=arr.map(num=>num + 10)              //create new array  with same length .only value change .old array will be there without changes
console.log(resMap);               
console.log(arr);

let allTrueValue=arr.filter(num=> num > 80)           //crct aya all values aray pole verum .it is not like find
console.log(allTrueValue);

//  INCLUDE

let array=[20,39,40,60]
let res=array.includes(35);
console.log(res);

// SLICE(remove value)

 let arr=[20,30,40,50,60,70,80,90]
 let res=arr.slice(1,4)         //remove aya values array pole return tharum (4 index include avilla)
 console.log(res); 

//SPLICE(add and remove value)

let arr=[40,50,60,70,80,80]         
arr.splice(2,1,100,200,300)     //( 1.eadh index mudhal start 2.(d) aa index mudhal ethre value remove akanam 3.add cheyyandiya value ...4.5.6)
console.log(arr);



let product = [{ productName: "tool", productNum: 220 },
{ productName: "tighter", productNum: 100 },
{ productName: "machine", productNum: 200 },                    
{ productName: "cutter", productNum: 100 },
{ productName: "scru", productNum: 500 }]

let res = product.reduce((prvsRs, current) => prvsRs + current.productNum, 0)   //o is pr value
let index = product.findIndex((pr) => pr.productNum >200)
let findN = product.filter((sd) => sd.productNum > 200)
let match=product.find((pr)=>pr.productName==="machine")
console.log(res);
console.log(index);
console.log(findN);
console.log(match);



let x=10

y="hanna"

console.log(x/y);     //result will be not a number

// HW

1.
 function doubleNumbers(num){
        return num.map((nu) => nu*2);
        
 }console.log(doubleNumbers([2, 1, 4, 6]));

2
function filterEvenNumber(num){
    let res=num.filter((num)=>num%2===0)
    return res;
}console.log(filterEvenNumber([22,10,20,40]));

// or
function filterEvenNumber(num){
    let res=num.filter((num)=>num%2===0)
    console.log(res);
   
}filterEvenNumber([30,40,23,22])

3.
  function sumArray(num){
    let sum=num.reduce((sm,num)=>sm+num,0)//i think all eq is in this bracket
    return sum;
  }console.log(sumArray([10,15,5,20]))

4.      
function findFirstOdd(num){
      let firstOdd=num.find((num)=>num % 2!==0);
      return firstOdd;
}console.log(findFirstOdd([2,3,4,5]));

// A.
let users = [
    {
        fullname: "Tom",
        age: 16,
        isActive: true,
        course: {
            name: "MERN",
            duration: "6 months",
        }
    },
    {
        fullname: "Jerry",
        age: 24,
        isActive: false,
        course: {
            name: "Python",
            duration: "4 months",
        }
    },
    {
        fullname: "John",
        age: 22,
        isActive: true,
        course: {
            name: "MERN",
            duration: "6 months",
        }
    },
    {
        fullname: "Ravi",
        age: 23,
        isActive: true,
        course: {
            name: "Python",
            duration: "4 months",
        }
    }
]
	// List all the active users 

let activeUser=users.filter((userrr)=> userrr.isActive)         //false ayore kittan !user.is active
console.log(activeUser);

// List all the users whose age > 20 

let greater=users.filter((user)=>user.age > 20)
console.log(greater);

// list the name of all users whose course is MERN and active 

let mernActive =users.filter((user)=> user.isActive && user.course.name==="MERN")
.map(user => user.fullname);
console.log(mernActive);

// List the duration of the course and name of the users those who are Python

   let duration=users.filter((user)=>user.course.name==="Python")
   .map(user=>({fullname:user.fullname,duration:user.course.duration}));//fullname is varible name we create
   console.log(duration);

2.

 let arAccounts = [
    {
        acno: 1000, ac_type: "savings", balance: 5000, transactions: [
            { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
            { to: 1002, amount: 600, note: "geto", method: "neft" },      
            { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
        ]
    },
    {
        acno: 1001, ac_type: "savings", balance: 6000, transactions: [
            { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
            { to: 1002, amount: 500, note: "geto", method: "neft" },         
            { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }

        ]
    },
    {
        acno: 1002, ac_type: "current", balance: 8000, transactions: [
            { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
            { to: 1001, amount: 5000, note: "geto", method: "neft" },
            { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }

        ]
    },
    {
        acno: 1003, ac_type: "current", balance: 16000, transactions: [
            { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
            { to: 1002, amount: 500, note: "geto", method: "neft" },
            { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }

        ]
    },
]

// a.Print total number of accounts in the array
console.log(arAccounts.length);

//b.Print only savings accounts numbers

let savingsAc=arAccounts.filter(account => account.ac_type==="savings")
.map(acc => acc.acno)
console.log(savingsAc);

// c.Print the balance of account number 1000

let balance=arAccounts.find(account => account.acno===1000)
.map(account =>account.balance)
console.log(balance);
// or
let account = arAccounts.find(account => account.acno === 1000);

console.log(account.balance);

//or
let balance=arAccounts.find(account => account.acno===1000).balance;      //1000 nte account type kannan balance nte pakaram ac type
console.log(balance);

// d.Print only the Google pay transactions of all accounts

let gpayTr = arAccounts.flatMap(account => account.transactions //flat map.account means Takes one account at a time.
.filter(account =>account.method==="g-pay"))                //flatmap used combine dffrnet aray into one
console.log(gpayTr);

// (flatMap() is used when each element of an array produces another array, and you want one flat array as the final result.)

// e.Print all the transactions to 1002 account number (hint:use flatmap when print all transaction)

let to1002Tr=arAccounts.flatMap(account => account.transactions  //(ac.transction becuse it ned to convert single array)
.filter(account => account.to===1002) )
console.log(to1002Tr);

// f.Print the maximum balance account details

 
const maxBalAccount = arAccounts.reduce((max, acc) => acc.balance > max.balance ? acc : max);
console.log(maxBalAccount);//The first parameter always receives the accumulated value (the result so far).
// The second parameter always receives the current element from the array.

let mobiles=[
[1000,"samsung","samsung f41",15000,"snapdragon","AMOLED","4g"],
[1001,"samsung","samsung A51",32000,"snapdragon","AMOLED","5g"],
[1002,"redmi","not 10 pro",19000,"snapdragon","LED","4g"],
[1003,"redmi","mi 11 lite",30000,"mediatek","LED","4g"],
[1004,"apple","12 pro",72000,"snapdragon","AMOLED","4g"],
[1005,"apple","12 pro max",100000,"snapdragon","AMOLED","5g"],
[1006,"one plus","nord 2",29000,"snapdragon","AMOLED","4g"],
[1007,"one plus","nord 3",15000,"mediatek","LED","4g"]
]

// a.	Print all mobile names
let mobileName=mobiles.map(mobiles => mobiles[2])//filter() is used to keep or remove elements based on a condition (true or false).
console.log(mobileName);

or

mobiles.forEach(mobile => {
    console.log(mobile[2]);
});
// 2.Print all mobile prices

let mobilePrice= mobiles.map(mobile =>mobile[3]);
console.log(mobilePrice);

mobiles.forEach(mobile=> {
console.log(mobile[3])
})


// 3.Print only mobiles with Samsung brand

let samsungMo=mobiles.filter(mobile => mobile[1]==="samsung")
.map(mobile=>mobile[2])           //if only want mobile names in an array .use this line
console.log(samsungMo);

// 4.Print all mobile phones below 25000 

let mobileBelow=mobiles.filter(mobile => mobile[3] < 25000)
console.log(mobileBelow); 

// 5.Mobile details in the price range 25k to 30k

let mobileBelowm=mobiles.filter(mobile => mobile[3] >= 25000 && mobile[3] <= 30000)
 console.log(mobileBelowm);

// 6.List all 5G mobile names

let mobile5g=mobiles.filter(mobile => mobile[6] === "5g")
.map(mobile => mobile[2])
console.log(mobile5g);

// 7.List all 5G mobiles under 35000

let result = mobiles .filter(mobile => mobile[6] === "5g" && mobile[3] < 35000)
    .map(mobile => mobile[2]);
console.log(result);

// 8.List all Samsung mobiles whose brand is 4G and display type is AMOLED

let amoled=mobiles.filter(mobile => mobile[1] ==='samsung'&& mobile[6]==='4g' && mobile[5]==="AMOLED" )
console.log(amoled);

                                               DOM

let element = document.getElementsByTagName("h2");
element[1].textContent = "new changes";
 element[1].style.backgroundColor="yellow"                                     //arraypole aan undavuga so select by index
console.log(element);

//all this code into a function

function handling() {
    let element = document.getElementsByTagName("h2");
    element[1].textContent = "new changes";
    element[1].style.backgroundColor = "yellow"
    element[0].style.color="blue"
    element[0].style.fontSize="50px"
    console.log(element);
    document.getElementsByTagName("h2")[1].textContent = "new changes";//(ighne yum akam)
    document.getElementsByTagName("h2")[1].style.backgroundColor = "yellow";
}


function handleRegisterBtn(event){
    event.preventDefault();
    const form=event.currentTarget;

    if(!form.checkValidity()){

        console.log("something wrong");

    }
    let firstName=document.getElementsByName("firstName")[0].value;
     let secondName=document.getElementsByName("secondName")[0].value;

     console.log(firstName);
     console.log(secondName);


     form.classList.add('was-validated')
}


                 PROMISE


let age=20

let promise=new Promise((resolve, reject) => {    //promise used to overcome the delay task (D)
  
  // Producer part: creates the promise           
    if (age > 18){                         //resolve → used when the operation succeeds  reject → used when the operation fails
        resolve("eligible");
    }else{
        reject("not elgible");          //result will be eligible   (resolve=success , reject=fail)
    }
});
console.log(promise);//no need

// value display avan consolil avilla.consolee shows eligible or not(succes or reject)so use this to get value
// Consumer part: uses the promise result

promise.then((result)=> console.log(result))
.catch((error)=>console.log("catch----->,error"));   //.catch and .then are consumer

// then() runs only when the promise is successful.The value passed to resolve() is received in result.
// catch() runs only when the promise fails.The value passed to reject() is received in error.



 
let user="hanna";
let userAge=10;

function userLogin(username,age){

return new Promise((resolve, reject) => {     //value return cheyyunnath kond (r)
    if (username === user && age === userAge){
        resolve("user logines successflly");
    }else{
        reject("something wrong");
    }
})

}
userLogin("user",30)
.then((result)=>console.log(result))
.catch((wrong)=>console.log(wrong));


let userIsActive = true;

function userActive(active){
    return new Promise((resolve, reject) => {
        if (active === true){
            resolve("user is active")
        }else{
            reject("user is not active")
        }
    })
}
userActive(userIsActive)
.then((result)=>console.log(result))
.catch((notActive)=>console.log(notActive));




// TRAVERSEL CHEYYAN
// 1.FOR OF LOOP(in array)

let arr=[10,20,30,40];
for(let num of arr)
{
    console.log(num);
}


// 2.FOR IN LOOP(in object)  

let user={fullname:"hanna",age:30,country:"india"} 

for (let key in user) 
    {
    console.log(key); //key value varullu like full name value varan use for like[key] 
    console.log(user[key]);//show onlyvalues  
    }


  OOPs


class College{    // this is called parentclass/superclass

   constructor(CollegeName){
    this.CollegeName=CollegeName;
   }

}



class Student extends College{  //this is child class /subclass


constructor(StudentName,CollegeName){
    super(CollegeName);
        this.StudentName=StudentName;
    }


    StudentName="hanna";  //dont need let const var=[]



    GetStudentName(){                 //dont need 'function' for function IN OOPs
        console.log(`student name is ${this.StudentName},and he is from ${this.CollegeName}`);

    }
}

const object1=new Student("ahsal","ABC");
object1.GetStudentName();

 const object2=new Student("hiba","DEF");
 object2.GetStudentName();  


CLOSURE

function sampleParent(){
   let x=10;


    function sampleChild(){
        let res=x+20;
        console.log(res);
    }
     sampleChild();
 }
sampleParent();


//or
function sampleParent(){
   let x=10;


    function sampleChild(){
        let res=x+20;
         return res;
    }
     console.log(sampleChild());
 }
sampleParent();



function counter() {//counter() never executes the inner function. It only returns it.
    let count = 0;

    return function () {
        count++;    //count = 0   (remembered by x)
        console.log(count);  //
    };
}

const increment = counter();
increment(); // 1
increment(); // 2
increment(); // 3
// incremnt stores the inner function, and that inner function remembers the count from the counter() call that created it.

function outer() {
    let x = 10;

    function inner() {
        console.log(x);
    }

    return inner;
}

const myFunction = outer();
myFunction();   // 10


async function fetchProducts() {
    let res = await fetch("https://jsonplaceholder.typicode.com/comments")//more code is need like above 
    const data = await res.json();
    displayData(data);
}



// ndhelum error veran chanve ndel use try catch mthod

try {
  async function fetchProducts() {
   const res=  await fetch("https://jsonplaceholder.typicode.com/comments")
    const data= await res.json();
    displayData(data)};
} catch(error) {
    console.log(error.message);

};

// function currying Function currying is a technique where a function takes one argument at a time and returns another function.
// Function currying = Changing a function which have multiple variables into single variable 
// making a function inside a function with passing single arguments 

function findSum(num1){

return (num2)=>{
    return num1+num2;
}

} console.log( findSum(30)(20));
;



// FUNCTION RECURSION
// functon invoke itself until it reach the base condition
function countDown(n) {
    if (n === 0) {
        return 9;
    }

    countDown(n - 1);
     console.log(n);
}

countDown(5);


function findFactorial(n){
    if(n===1){
        return 1;      //without this it keeps going forever because there is no condition to stop.
    }
    return n*findFactorial(n-1);     //return send here
}

console.log(findFactorial(3));//So now JavaScript replaces:findFactorial(1)with  1




//TERNORY OPERATOR(short form of if else)

let age=20;

age > 10 ? console.log("correct") : console.log("incorrect"); //if ? .else :




//SET AND MAP  .set like array map like objct

const user=new Set();

user.add(40);
user.add(20);
user.add(10);    //VALUE ADD
user.delete(40); //value rmove
// user.clear();   //value all clear
console.log(user.has(55));   //has used to check values .result will be true or false

console.log(user);
user.forEach((elements)=>{
console.log(elements);
});

let user1=new Map();

user1.set("username","hanna")//add value
user1.set("age",20);

user1.forEach((value,key)=>{
    console.log("value........",value);//first value then key display
    console.log("key........",key);

});
console.log(user1);//idk

//NUMBER OBJECT

let x=Number.isInteger(20);
console.log(x);


let x=Number.parseInt(30.99)
console.log(typeof x);
console.log(x); //will be 30



let x=Number.parseFloat("30.98")//parseFloat() converts strings to numbers.
console.log(x);
console.log(typeof x);

let x=Number.parseInt("30.99")//convert into int
console.log( x);

let num = 30;
let x = num.toString();
console.log(typeof x);
console.log(x);


//STRING OBJECT

let string = "   my name is Hanna and im from calicut        ";

console.log(string.length);// length including space

let res=string[9]; //9 th indx value

  let res=string.charAt(11);

  let res=string.at(12);

  let res=string.concat("hello world");  //add string

 let res=string.endsWith("t");  //last ulle value check akum.give true or false

  let res=string.startsWith("j");

  let res=string.slice(0,10); //0 to 10 vere ulle value cut .give cut values

  let res=string.toLowerCase(); //lower case lek akum

  let res=string.toLocaleUpperCase();

  let res=string.trim();  //start and end space remove akum

let res=string.trimEnd();   //last space remoce akum

let res=string.trimStart();    //first space remove akum

let res=string.valueOf()[12]

console.log(res);
console.log(string);


//MATH METHOD

let res=Math.sqrt(81);

let res=Math.ceil(10.22);//ceil up(round value to upper num like 11 here)

let res=Math.floor(10.99);//ceil down (round value to upper num like 11 here)

let res=Math.round(10.6)//.5 nt above anel high value round,below anel lower value tharum

console.log(res);


let result=Math.random();//refresh cheyyumbo new random values varum between 0 to 1

console.log(Number.parseInt(result*1000));//oro refreshil 3 values ulle num erum like otp
//or
console.log(Math.round(result*10000))



// STRICT MODE 

'use strict';

xghh = 89;
console.log(xghh);  //let var const kodthillelum error kanikilla.default ayi var kodkum so above use "use strict"


//to find dublicate values in an array and new array

function dublicate(arr){
    let newArr=[];
    for (i=0;i<arr.length;i++)
        if(!newArr.includes(arr[i])){
          newArr.push(arr[i])
        }
        return newArr;
}
console.log(dublicate([10,10,20]));

//another mthod to find deblicate element
let numb = [1,2,3,5,5,6,7,8];
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates (numb));


//to find second largest elements in an array

function secondLargest() {
    let arr = [10, 35,45,20, 30,60, 40];

    arr.sort((a, b) => a- b);

    return arr[arr.length - 2];
}

console.log(secondLargest());   //if want exact 2 or return arr[4]

//odd
function isOdd(odd) {

    if (odd % 2 !== 0) {
        console.log(`${odd} is even number`);
    }
    else {
        console.log(`${odd} is not an even number`);

    }

    }isOdd(5);