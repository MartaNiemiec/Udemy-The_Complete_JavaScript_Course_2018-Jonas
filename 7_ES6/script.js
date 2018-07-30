///*
//=====================================================
//        lecture: let and const
//=====================================================*/
//
//
//
////    // ES5  -   var = function-scoped
////    var name5 = 'Jane Smith';
////    var age5 = 23;
////    name5 = 'Jane Miller';
////    console.log(name5);
////
////    // ES6  -   const and let = block-scoped
////    const name6 = 'Jane Smith'; // const=constant, immutable
////    let age6 = 23;  // let = we can change this variable
////    name6 = 'Jane Miller';
////    console.log(name6);
//
//
////// ES5
////function drivingLicence5(passedTest) {
////    if (passedTest) {
//////        console.log(firstName); // "undefined" = before declare and defined
////        var firstName = 'John';
////        var yearOfBirth = 1990;   
////    }
////    
////    console.log(firstName + ', born in ' + yearOfBirth + ', is now offficially allowed to drive a car.');
////}
////
////
////drivingLicence5(true);
////
////
////// ES6
//function drivingLicence6(passedTest) {
////    console.log(firstName); //Error: firstName is not defined
//    
//    let firstName;  // let have to be declared inside the block but the value can be declared/changed outside the block
//    const yearOfBirth = 1990;   //  const have to be declared inside the block with the value
//    
//    if (passedTest) {
////        let firstName = 'John';
////        const yearOfBirth = 1990;
//        firstName = 'John';
//    }
//    
//    console.log(firstName + ', born in ' + yearOfBirth + ', is now offficially allowed to drive a car.');   // in ES6 "Uncaught ReferenceError: firstName is not defined" because it isn't in the same block with the variables
//}
//
//
//drivingLicence6(true);
//
//
//
//
////let i = 23;
////
////for (let i = 0; i < 5; i++) {
////    console.log(i);
////}
////
////console.log(i);
//
//
//
///*
//=====================================================
//        LECTURE: BLOCKS AND IIFE'S
//=====================================================*/
//
////// ES6
////{
////    const a = 1;
////    let b = 2; 
////    var c= 3;
////}
////
//////console.log(a + b);   // a is not defined
////console.log(c);
////
////
////// ES5
////(function() {
////    var c = 3;
////})();
////
//////console.log(c);     // c is not defined
//
//
//
//
///*
//=====================================================
//        LECTURE: STRINGS
//=====================================================*/
//
//let firrstName = 'John';
//let lastName = 'Smith';
//const yearOfBirth = 1990;
//function calcAge(year) {
//    return 2016 - year;
//}
//
//
//// ES5
//console.log( 'This is ' + firrstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');
//
//
////ES6 
//// We use TEMPLATE LITERALS for strings using backticks (``)
//console.log(`This is ${firrstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);
//
//
//// NEW METHODS IN THE ES6
//const n =`${firrstName} ${lastName}`;
//
//// if the string starts with
//console.log(n.startsWith('J'));    // true
//console.log(n.startsWith('j'));    // false
//console.log(n.startsWith('n'));    // false
//
//// if the string end with
//console.log(n.endsWith('th'));    // true
//console.log(n.endsWith('Sm'));    // false
//
//// if the string contains/include
//console.log(n.includes(' '));   //true
//console.log(n.includes('oh'));   //true
//
//// repeat string
//console.log(firrstName.repeat(5));  //JohnJohnJohnJohnJohn
//console.log(`${firrstName} `.repeat(5));  //John John John John John 
//
//
//
///*
//=====================================================
//        LECTURE: ARROW FUNCTIONS
//=====================================================*/
//
//
//
//const years = [1990, 1965, 1982, 1937];
//
//// ES5 
//var ages5 = years.map(function(el) {
//    return 2016 - el;
//});
//console.log(ages5);
//
//
//// ES6
//let ages6 = years.map(el => 2016 - el);
//console.log(ages6);     // [26, 51, 34, 79]
//
//    //with 2 arguments
//ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
//console.log(ages6);     // ["Age element 1: 26.", "Age element 2: 51.", "Age element 3: 34.", "Age element 4: 79."]
//
//    //more than one line of code
//ages6 = years.map((el, index) => {
//    const now = new Date().getFullYear();
//    const age = now - el;
//    return `Age element ${index + 1}: ${2016 - el}.`
//});
//console.log(ages6);     //["Age element 1: 26.", "Age element 2: 51.", "Age element 3: 34.", "Age element 4: 79."]
//
//
//
///*
//=====================================================
//        LECTURE: ARROW FUNCTIONS 2  (THIS keyword)
//=====================================================*/
//
//// Arrow functions don't have a THIS keyword. They simply use the this keyword of the function they are written in.So they have a LEXICAL THIS variable.
//
//
//// ES5
//var box5 = {
//    color: 'green',
//    position: 1,
//    clickMe: function() {      // first fn-method / in the method THIS point to the object. 
//        
//        var self = this;    // is usually used a variable called SELF or THAT
//        
//        document.querySelector('.green').addEventListener('click', function() { //second fn-regular function
//            var str = 'This box number ' + self.position + ' and it is ' + self.color;  // THIS in this regular function point to the global object/window so to avoid this is a very common pattern to create and store a new variable in the method
//            alert(str); // this=undefined
//        });
//    }
//}
//box5.clickMe();
//
//
//
//
//// ES6
//const box6 = {
//    color: 'green',
//    position: 1,
//    clickMe: function() {      // first fn-method 
//        
//        document.querySelector('.green').addEventListener('click', () => { //second fn-regular / arrow fn instead of an annonymous function, so we have to specify the parenthesis() then the arrow=> and the fn body{} which shares the THIS keyword with its surrounding (with the clickMe method)
//            var str = 'This box number ' + this.position + ' and it is ' + this.color;  
//            alert(str); // This box number 1 and it is green
//        });
//    }
//}
//box6.clickMe();
//
//
//
//    //const box66 = {
//    //    color: 'green',
//    //    position: 1,
//    //    clickMe: () => {      // first fn-method changed to an arrow fn so it also shares the lexical THIS keyword from its surroundings, so here from the global context/window
//    //        
//    //        document.querySelector('.green').addEventListener('click', () => { //second fn-regular 
//    //            var str = 'This box number ' + this.position + ' and it is ' + this.color;  
//    //            alert(str); // this=undefined
//    //        });
//    //    }
//    //}
//    //box66.clickMe();
//
//
//
//
//function Person(name) {
//    this.name = name;
//}
//
//// ES5
//Person.prototype.myFriends5 = function(friends) {
//    
//    var arr = friends.map(function(el) {
//        return this.name + ' is friends with ' + el;    // THIS is not defined because it point to the global object
//    }.bind(this));  // by method BIND we set THIS, just by passing THIS into the function(fn before ".bind()") simply by creating a new copy of the function with a manually-defined THIS keyword 
//    
//    console.log(arr);
//}
//
//var friends = ['Bob', 'Jane', 'Mark'];
//new Person('John').myFriends5(friends);
//
//
//
////ES6
//Person.prototype.myFriends6 = function(friends) {
//    
//    var arr = friends.map((el) =>`${this.name} is friends with ${el}`);
//    
//    console.log(arr);
//}
//
//new Person('Mike').myFriends6(friends);
//
//
//
//
///*
//=====================================================
//        LECTURE: DESTRUCTURING
//=====================================================*/
//
//// ES5
//var john = ['John', 26];
////var name = john[0];
////var age = john[1];
//
//
//// ES6
//const [name, age] = ['John', 26];   // we destructured data structure -['John', 26] using this [name, age] - kind of syntax // with ['John', 26] we costruct, we build, a data structure and then with syntax [name, age] we destruct it
//console.log(name);
//console.log(age);
//
//const obj = {
//    firstName: 'John',
//    lastName: 'Smith'
//};
//
//const {firstName, lastName} = obj;  //here we destruct the obj
//console.log(firstName);     // John
//console.log(lastName);      // Smith
//
//const {firstName: a, lastName: b} = obj;
//console.log(a);     // John
//console.log(b);     // Smith
//
//
//
//
//
//function calcAgeRetirement(year) {
//    const age = new Date().getFullYear() - year;
//    return [age, 65 - age];
//}
//
//const [age2, retirement] = calcAgeRetirement(1990); // [age2, retirement] = [age, 65 - age]
//console.log(age2);
//console.log(retirement);
//
//
//
///*
//=====================================================
//        LECTURE: ARRAYS IN ES6 / ES2015
//=====================================================*/
//
//const boxes = document.querySelectorAll('.box');    // it return a node list so we have to transform it into an array
//
//// ES5
//var boxesArr5 = Array.prototype.slice.call(boxes);
//boxesArr5.forEach(function(cur) {
//    cur.style.backgroundColor = 'dodgerblue';
//});
//
//
//// ES6
//const boxesArr6 = Array.from(boxes);    // The Array.from() method transform node list 'boxes' to an array 
//boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');
//
//
//
//// ES5
//for(var i = 0; i < boxesArr5.length; i++) {
//    
//    if(boxesArr5[i].className === 'box blue') {
//        continue;   // if true then it skip this iteration of the loop and go right to the next one; but the 'break' keyword break this loop and then don't continue to the next iteration  
//    }
//    
//    boxesArr5[i].textContent = 'I changed to blue';
//}
//
//
//// ES6  // FOR OF loop
//for (const cur of boxesArr6) {  // we create a variable with current element and we say that this is an element 'of' the boxesArr6
//    
////    if (cur.className === 'box blue') {
//    if (cur.className.includes('blue')) {
//        continue;
//    }
//    cur.textContent = 'I changed to blue!';
//}
//
//
//
//// ES5
//var ages = [12, 17, 8, 21, 14, 11];
//
//var full = ages.map(function(cur) {
//    return cur >= 18;
//});
//console.log(full);  // is a full age
//
//console.log(full.indexOf(true));    // posision in the array of a persom with full age
//console.log(ages[full.indexOf(true)]);  //  how old is the persol with full age
//
//
//// ES6
//console.log(ages.findIndex(cur => cur >= 18));    //The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned. // 
//console.log(ages.find(cur => cur >= 18));   //The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
//
//
//
//
///*
//=====================================================
//        LECTURE: SPREAD OPERATOR
//=====================================================*/
//
//function addFourAges (a, b, c, d) {
//    return a + b + c + d;
//}
//
//var sum1 = addFourAges(18, 30, 12, 21);
//console.log(sum1);
//
//
//// ES5
//var ages = [18, 30, 12, 21];
//var sum2 = addFourAges.apply(null, ages);   // APPLY method will receive an array; apply method takes the array [18, 30, 12, 21] and then calls addFourAges function using the array's element as the arguments; 'this' = null
//console.log(sum2);
//
//
//// ES6
//const sum3 = addFourAges(...ages);  // this "..." SPREAD OPERATOR operator expands ages array into its components(so 18, 30, 12, 21)
//console.log(sum3);
//
//
//const familySmith = ['John', 'Jane', 'Mark'];
//const familyMiller = ['MAry', 'Bob', 'Ann'];
//const bigFamily = [...familySmith, 'Lily',  ...familyMiller];    // "..." takes the arrays familySmith and familyMiller and put them together to the bigFamily array
//console.log(bigFamily);
//
//
//const h = document.querySelector('h1');
//const boxes = document.querySelectorAll('.box');    // return a node list
//const all = [h, ...boxes];
//
//Array.from(all).forEach(cur => cur.style.color = 'purple'); 
//
//
//
///*
//=====================================================
//        LECTURE: REST PARAMETERS
//=====================================================*/
//
//
//// ES5
//function isFullAge5() {
////    console.log(arguments);
//    var argsArr = Array.prototype.slice.call(arguments);
//    
//    argsArr.forEach(function(cur) {
//        console.log((2016 - cur) >= 18);
//    })
//}
//
////isFullAge5(1990, 1999, 1965);   //Arguments(3) [1990, 1999, 1965] = it's not an array
////isFullAge5(1990, 1999, 1965, 2016, 1987);
//
//
//// ES6
//function isFullAge6(...years) {     // ...this REST PARAMETER will transform the arguments into an array and the pass it into this function
////    console.log(years);   // it's already an array
//    years.forEach(cur => console.log((2016 - cur) >= 18))
//}
//
//isFullAge6(1990, 1999, 1965, 2016, 1987); 
//
//
//// SPREAD OPERATOR is used in the function call while the REST OPERATOR is used in the function declaration to exact an arbitrary number of parameters
//
//
//// ES5
//function isFullAge5(limit) {    // -> isFullAge5(limit, arguments)
////    console.log(arguments);
//    var argsArr = Array.prototype.slice.call(arguments, 1); // we started copying at position number 1
//    
//    argsArr.forEach(function(cur) {
//        console.log((2016 - cur) >= limit);
//    })
//}
//
//
//
//isFullAge5(16, 1990, 1999, 1965);   //Arguments(3) [1990, 1999, 1965] = it's not an array
////isFullAge5(1990, 1999, 1965, 2016, 1987);
//
//
//// ES6
//function isFullAge6(limit, ...years) {     // ...this REST PARAMETER will transform the arguments into an array and the pass it into this function
////    console.log(years);   // it's already an array
//    years.forEach(cur => console.log((2016 - cur) >= limit))
//}
//
//isFullAge6(18, 1990, 1999, 1965, 2016, 1987); 
//
//
//// SPREAD OPERATOR is used in the function call while the REST OPERATOR is used in the function declaration to exact an arbitrary number of parameters
//
//
//
///*
//=====================================================
//        LECTURE: DEFAULT PARAMETERS
//=====================================================*/
//
//// ES5
//function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
//    
//    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
//    nationality === undefined ? nationality = 'american' : nationality = nationality;
//    
//    this.firstName = firstName;
//    this.lastName = lastName;
//    this.yearOfBirth = yearOfBirth;
//    this.nationality = nationality;
//}
//
//var john = new SmithPerson('John', 1990);   //before adding ternary operators which sets default arguments - SmithPerson {firstName: "John", lastName: undefined, yearOfBirth: 1990, nationality: undefined}
//
//var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');
//
//
//// ES6
//function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
//    this.firstName = firstName;
//    this.lastName = lastName;
//    this.yearOfBirth = yearOfBirth;
//    this.nationality = nationality;
//}
//
//
//var john = new SmithPerson('John', 1990);
//var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');
//
//
///*
//=====================================================
//        LECTURE: MAP
//=====================================================*/
//
//
//// MAPS = is a new key-value data structure in ES6. in the maps we can use anything for the keys
//    
//const question = new Map(); // creating an empty map
//question.set('question', 'What is the official name of the latest major JavaScript version?')    // The set() method adds or updates an element with a specified key and value to a Map object.
//question.set(1, 'ES5');
//question.set(2, 'ES6');
//question.set(3, 'ES2015');
//question.set(4, 'ES7');
//question.set('correct', 3);
//question.set(true, 'Correct answer :D');
//question.set(false, 'Wrong, please try again!');
//
////How it looks in the console: 
////Map(8) {"question" => "What is the official name of the latest major JavaScript version?", 1 => "ES5", 2 => "ES6", 3 => "ES2015", 4 => "ES7", …} and has " __proto__ : Map"
//
//console.log(question.get('question'));
////console.log(question.size); //  .size is like .length
//
//if (question.has(4)) {  // if a map has z "4" key
////    question.delete(4); // deleting the "4" key
////    console.log('Answer 4 is here');
//}
//
////question.clear();   //The clear() method removes all elements from a Map object.
//
//
////question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));  // The forEach() method executes a provided function once per each key/value pair in the Map object, in insertion order.
//
//
////The entries() method returns a new Iterator object that contains the [key, value] pairs for each element in the Map object in insertion order.
//for (let [key, value] of question.entries()) {
//    if (typeof(key) === 'number') {
//        console.log(`Answer ${key} : ${value}`);
//    }
//}
//
//// The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems)
//const ans = parseInt(prompt('Write the correct answer'));
////
////console.log(question.get(ans === question.get('correct'))); // if the user write in the prompt an answer number(ans) and (ans === question.get('correct') is true then it will be question.get(true) then the message will be the value of the "true" key so 'Correct answer :D'
//
//
//
//
///*
//=====================================================
//        LECTURE: CLASSES
//=====================================================*/
//
//
//// ES5
//var Person5 = function(name, yearOfBirth, job) {
//    this.name = name;
//    this.yearOfBirtg = yearOfBirth;
//    this.job = job;
//}
//
//Person5.prototype.calculateAge = function() {
//    var age = new Date().getFullYear() - this.yearOfBirtg;
//    console.log(age);
//}
//
//var john5 = new Person5('John', 1990, 'teacher');
//
//
//
//// ES6
//class Person6 {  // class declaration
//    constructor (name, yeartOfBirth, job) { //constructor
//        this.name = name;
//        this.yearOfBirtg = yeartOfBirth;
//        this.job = job;
//    }   //no separating punctuation
//    
//    calculateAge() {    // A method we can add to the class
//        var age = new Date().getFullYear() - this.yearOfBirtg;
//        console.log(age);
//    }
//    
//    static greeting {   // a static class, this is like helper fn, we can't use it on "john6"(created person/element using a constructor) because it's a static method and these instances are not gonna inherit it  
//        console.log('Hey There!');
//    }
//}
//
//
////const john6 = new Person6('John', 1990, 'teacher');
//
////Person6.greeting(); // greetings is a method that is attached to the "Person6" class definition
//
////The static keyword defines a static method for a class. Static methods aren't called on instances of the class. Instead, they're called on the class itself. These are often utility functions, such as functions to create or clone objects.
//
//// 1. The class definitions are not hoisted, so first we need to implement a class, and only later in the code we can start using it!
//// 2. It's possible add only methods to classes but not properties!
//
//
///*
//=====================================================
//        LECTURE: Classes with Subclasses
//=====================================================*/
//
//
//
////// ES5
//var Person5 = function(name, yearOfBirth, job) {    // Person5 is a SUPERCLASS
//    this.name = name;
//    this.yearOfBirth = yearOfBirth;
//    this.job = job;
//}
//
//Person5.prototype.calculateAge = function() {       
//    var age = new Date().getFullYear() - this.yearOfBirth;
//    console.log(age);
//}
//
////var john5 = new Person5('John', 1990, 'teacher');
//
//// creating SUBCLASS - Athlete5
//var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
//    Person5.call(this, name, yearOfBirth, job); // using "new" operator creates a new instance, empty object calls the function constructor(Athlete5) and sets "this" keyword to the newly created empty objects. So this keyword will point to the new empty object
//    this.olympicGames = olympicGames;
//    this.medals = medals;
//}
//
//// creating the correct prototype chain using object.create because allows to manually set the prototype of an object. And we want the prototype of the athlete to be the prototype of the person, so that they become connected 
//Athlete5.prototype = Object.create(Person5.prototype);
//
//Athlete5.prototype.wonMedal = function() {
//    this.medals++;
//    console.log(this.medals);
//}
//
//var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
//
//johnAthlete5.calculateAge();
//johnAthlete5.wonMedal();
//
//
//
//// ES6
//class Person6 {  
//    constructor (name, yeartOfBirth, job) { 
//        this.name = name;
//        this.yearOfBirtg = yeartOfBirth;
//        this.job = job;
//    }   
//    
//    calculateAge() {    
//        var age = new Date().getFullYear() - this.yearOfBirtg;
//        console.log(age);
//    }
//}
//
////creating a SUBCLASS with "EXTENDS" keyword / the subclass extends the superclass
//class Athlete6 extends Person6 {
//    constructor(name, yeartOfBirth, job, olympicGames, medals) {
//        super(name, yeartOfBirth, job); // super will call the superclass / like Person5.call(this, arguments)
//        this.olympicGames = olympicGames;
//        this.medals = medals;
//    }
//    
//    wonMedal() {
//    this.medals++;
//    console.log(this.medals);
//    }
//}
//
//const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10)
//johnAthlete6.wonMedal();
//johnAthlete6.calculateAge();
//
//








/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class Element {
    constructor (name, buidYear) {
        this.name = name;
        this.buildYear = buidYear;
    }
}


class Park extends Element {
    constructor (name, buidYear, area, trees) {
        super(name, buidYear);
        this.trees = trees; 
        this.area = area;   //km2
    }   
    
    treeDensity() { //trees/density area
        const density = this.trees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`)
    }
}


class Street extends Element {
    constructor(name, buidYear, length, size = 3) {
        super(name, buidYear);
        this.length = length;
        this.size = size;
    }
    
    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, buid in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
        
    }
}

const allParks = [new Park('Great Park', 1956, 1.2, 3160),
                new Park('Flowers Park', 1987, 3.4, 4890),
                new Park('Green', 2001, 5.8, 8400)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
                   new Street('Evergreen Street', 2008, 2.7, 2),
                   new Street('4th Street', 2015, 0.8),
                   new Street('Sunset Boulevard', 1982, 2.5, 5)];


function calc(arr) {
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);    // reduce method reduce an array to a simple value / 0=initial value 
    
    return [sum, sum / arr.length];
}


function reportParks(parks) {
    console.log('---------- PARKS REPORT ----------');
    
    // DENSITY
    parks.forEach(el => el.treeDensity());
    
    // AVERAGE AGE
    const ages = parks.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${parks.length} parks have an average of ${avgAge} years. `)
    
    
    // Which park has more than 1000 trees
    const i = parks.map(el => el.trees).findIndex(el => el >= 1000);
    console.log(`${parks[i].name} has more than 1000 trees.`);
}

function reportStreets(streets) {
    console.log('---------- STREETS REPORT ----------');
    
    // Total and average length of the town's streets
    const [totalLength, avgLength] = calc(streets.map(el => el.length));
    console.log(`Our ${streets.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);
    
    // Classify sizes
    
    streets.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);












