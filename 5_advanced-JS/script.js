//================================================================================================ FUNCTION CONSTRUCTOR

    var john = {
        name: 'John',
        yearOfBirth: 1990,
        job: 'teacher'
    };

    var Person = function(name, yearOfBirth, job) {     // we always write FUNCTION CONSTRUCTOR with a CAPITAL letter
        this.name = name;   // this = new obcject created by function "new Person()" 
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    //    this.calculateAge = function() {
    //        console.log(2016 - this.yearOfBirth);
    //    }
    }


    Person.prototype.calculateAge = function() {     // the method isn't any more in the constructor but we can still use it because of the prototype property of the function constructor
            console.log(2016 - this.yearOfBirth);
        };

    Person.prototype.lastName = 'Smith';    // PROTOTYPE PROPERTY

    var john = new Person('John', 1990, 'teacher'); // new operator creates empty object and then function is called
    //creating a new objects by using the constructor function is called INSTANTIATION because these objects are instances of the Person object
    var jane = new Person('Jane', 1969, 'designer');
    var mark = new Person('Mark', 1948, 'retired');

    john.calculateAge();
    jane.calculateAge();
    mark.calculateAge();

    console.log(john.lastName);
    console.log(jane.lastName);
    console.log(mark.lastName);

//================================================================================================ MY FUNCTION CONSTRUCTOR AND PROTOTYPE PROPERTIES

    var House = function(bedsNumber, bathNumbers, builtYear, price) {
        this.bedsNumber = bedsNumber;
        this.bathNumbers = bathNumbers;
        this.builtYear = builtYear;
        this.price = price;
    }

    House.prototype.calculateAge = function() {
        this.age = 2018 - this.builtYear;
    };

    House.prototype.calculateTax = function() {
        this.tax = this.price * .8;
        this.finalPrice = this.price + this.tax;
    };


    var villa = new House(4, 2, 2015, 250000);
    var bungalow = new House(2, 1, 1998, 95000);
    var flat = new House(3, 1, 2010, 125000);


    villa.calculateAge();
    bungalow.calculateAge();
    flat.calculateAge();

    villa.calculateTax();
    bungalow.calculateTax();
    flat.calculateTax();

    console.log(villa);
    console.log(bungalow);
    console.log(flat);


//================================================================================================ OBJECT.CREATE
//First we create an object that will act as the prototype and then create a new object based on that very prototype

    var personProto = {
        calculateAge: function() {
            console.log(2016 - this.yearOfBirth);
        }
    };

    var john = Object.create(personProto);  //Object.create(created prototypeObject)
    john.name = 'John';
    john.yearOfBirth = 1990;
    john.job = "teacher";

    var jane = Object.create(personProto, 
    {
        name: { value: 'Jane' },
        yearOfBirth: { value: '1969' },
        job: { value: 'designer' }
    });


// DIFFERENCE between object.create and the function constructor pattern is that OBJECT.CREATE builds an object that inherits directly from the one than we passed into the first argument. While the FUNCTION CONSTRUCTOR the newly created object inherits from the constructor's prototype property


//================================================================================================ PRIMITIVES vs OBJECTS
//Variables containing primitives actually  hold that data insiade of the variable itself.
//On objects variables associated with objects don't actually contain the object, but instead they contain a reference to the place in memory where the object sits (where the object is stored). So a variable declared as an object doesn't have a real copy of the object, it just point to that object.

// PRIMITIVES   (numbers, strings, booleans, undefined and null)
    var a = 23;
    var b = a;
    a = 46;
    console.log(a); //46    
    console.log(b); //23


    // OBJECTS
    var obj1 = {
        name: 'John',
        age: 26
    };
    var obj2 = obj1;
    obj1.age = 30;
    console.log(obj1.age);
    console.log(obj2.age);


    // FUNCTIONS
    var age = 27;   // change() -> 27
    var obj = {
        name: 'Jonas',
        city: 'Lisbon'  // change() -> "San Francisco"
    };

    function change(a, b) {
        a = 30; 
        b.city = "San Francisco";
    }

    change(age, obj);

    console.log(age);   // var age holds a primitive
    console.log(obj.city);  // object variable holds a reference to an object in our function

// !! When we pass a PRIMITIVE into the FUNCTION a simple copy is created, so we can change A as much as we want, it will never affect the variable on the outside because it is a primitive.
//But when we pass the object, it's not really the object that we pass, but the reference to the object.


//================================================================================================ PASSIG FUNCTIONS AS ARGUMENTS

    var years = [1990, 1965, 1937, 2005, 1998];

    function arrayCalc(arr, fn) {   //arr = years array; fn = function which does calculations
        var arrRes = [];    //arrRes = result
        for (var i = 0; i < arr.length; i++) {
            arrRes.push(fn(arr[i]));
        }
        return arrRes;
    }

    //CALBACK FUNCTIONS
    function calculateAge(el) { //el = elemet
        return 2016 - el;
    }

    function isFullAge(el) {
        return el >= 18;
    }

    function maxHeartRate(el) {
        if (el >= 18 && el <= 81) {
            return Math.round(206.9 - (0.67 * el));  //Math.round rounds the number to the closest integer.
        } else {
            return -1;
        } 
    }

    var ages = arrayCalc(years, calculateAge);
    var fullAges = arrayCalc(ages, isFullAge);
    var rates = arrayCalc(ages, maxHeartRate);

    console.log('ages: ' + ages);
    console.log('fullAges: ' + fullAges);
    console.log('rates: ' + rates);




//================================================================================================ FUNCTIONS RETURNING FUNCTIONS

    function interviewQuestion(job) {
        if (job === 'designer') {
            return function(name) {
                console.log(name + ', can you please explain what UX design is?');
            }
        } else if (job === 'teacher') {
            return function(name) {
                console.log('What subject do you teach, ' + name + '?');
            }
        } else {
            return function(name) {
                console.log('Hello ' + name + ', what do you do?');
            }
        }
    }

    var teacherQuestion = interviewQuestion('teacher');
    var designerQuestion = interviewQuestion('designer');

    teacherQuestion('John');
    designerQuestion('John');
    designerQuestion('Jane');
    designerQuestion('Mark');

    interviewQuestion('teacher')('Mark');


    //---- MY FUNCTIONS
    console.log('--------- MY FUNCTIONS ------------');
    function holidayDestination(place) {   
        if (place === 'beach') {
            return function(name) {     // ->holidayDestination('beach')(name)
                console.log(name + ' what activities do you like the most at the beach?');
            }
        } else if (place === 'city') {
            return function(name) {    // ->holidayDestination('city')(name)
                console.log(name + ', do you like sightseeing?');
            }
        } else {
            return function(name) {    // ->holidayDestination(place)(name)
                console.log('Hi ' + name + ', where are you going for your holiday?')
            }
        }
    }

    var beachDest = holidayDestination('beach');
    var cityDest = holidayDestination('city');
    var otherDest = holidayDestination('other');

    beachDest('Sally');
    cityDest('Kate');
    otherDest('Bob');

    holidayDestination('beach')('George');
    holidayDestination('mountains')('Rachel');



//================================================================================================ IMMEDIATLY INVOKED FUNCTION EXPRESSIONS (IIFE)

    //function game() {
    //    var score = Math.random() * 10;
    //    console.log(score >= 5);
    //}
    //game();

    //console.log(score);

    //(function () {    // FUNCTION inside parentheses () 
    //    var score = Math.random() * 10;
    //    console.log(score >= 5);
    //})();

    (function (goodLuck) {
        var score = Math.random() * 10;
        console.log(score >= 5 - goodLuck);
    })(5);

    // (function () {
    //    
    // })();

// it's possible to call an IIFE just once because this function is not assigned to any variable. in this case we are not using the function to create a piece of reusable code, but we want to create a new scope, that is hidden from the outside scope, so where we can safely put variables. And with this we obtain data privacy, ad also don't interfere with other variables in our global execution context.



//================================================================================================ CLOSURES


    function retirement(retirementAge) {
        var a = ' years left until retirement.';
        return function(yearOfBirth) {
            var age = 2016 - yearOfBirth;
            console.log((retirementAge - age) + a)
        }
    }

    var retirementUS = retirement(66);
    var retirementGermany = retirement(65);
    var retirementIceland = retirement(67);

    retirementGermany(1990);
    retirementUS(1990);
    retirementIceland(1990);

//retirement(66)(1990);

// An inner function has always access to the variables and parameters of its outer function, even after the outer function has returned.


//---- CHALLENGE 

    function interviewQuestion(job) {
        return function(name) {
            if (job === 'designer') {
                console.log(name + ', can you please explain what UX design is?');
            } else if (job === 'teacher') {
                console.log('What subject do you teach, ' + name + '?');
            } else {
                console.log('Hello ' + name + ', what do you do?');
            }
        }


    }

    interviewQuestion('teacher')('John');

//================================================================================================ BIND, CALL and APPLY

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentelmen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.')
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

john.presentation('formal', 'morning');
john.presentation.call(emily, 'friendly', 'afternoon'); // CALL = method borrowing/ .call is setting emily to "this" argument
    
//john.presentation.apply(emily, ['friendly', 'afternoon']);    // APPLY method/ this doesn't work because a method doesn't expect to receive an array as the input.The presentation wants two normal arguments.

// BIND method doesn't immediately call the function, but instead it generates a copy of the function so that we can store it somewhere
var johnFriendly = john.presentation.bind(john, 'friendly');    // BIND / It will returns a function

johnFriendly('morning');  
johnFriendly('night');


// CARRYING is a technique in which we create a function based on another function, but with some preset parameters,


var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');



    var years = [1990, 1965, 1937, 2005, 1998];

    function arrayCalc(arr, fn) {   //arr = years array; fn = function which does calculations
        var arrRes = [];    //arrRes = result
        for (var i = 0; i < arr.length; i++) {
            arrRes.push(fn(arr[i]));
        }
        return arrRes;
    }

    //CALBACK FUNCTIONS
    function calculateAge(el) { //el = elemet
        return 2016 - el;
    }

    function isFullAge(limit, el) {
        return el >= limit;
    }

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));  // we will not just pass isFullAge function ,but we will use the bind method on it before passing it. First argument must be THIS keyword and the preset limit

console.log(ages);
console.log(fullJapan);




















