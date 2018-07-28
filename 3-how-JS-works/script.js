///////////////////////////////////////
// Lecture: Hoisting

    // FUNCTIONS
    calculateAge(1965);

    function calculateAge(year) {       // function declaration
        console.log(2016 - year);
    }


    //retirement(1950);     it does not work

    var retirement = function(year) {      // function expression
        console.log(65 - (2016 - year));
    }

    retirement(1965);


    // VARIABLES

    console.log(age);   //undefined
    var age = 23;
    console.log(age);

    function foo() {
        var age = 65;
        console.log(age);
    }
    foo();  //65 -> age from the function
    console.log(age);   //23 -> age from the global variable



///////////////////////////////////////
// Lecture: Scoping


// First scoping example


    var a = 'Hello!';
    first();

    function first() {
        var b = 'Hi!';
        second();

        function second() {
            var c = 'Hey!';
            console.log(a + b + c);
        }
    }




// Example to show the differece between execution stack and scope chain


    var a = 'Hello!';
    first();

    function first() {
        var b = 'Hi!';
        second();

        function second() {
            var c = 'Hey!';
            third();
        }
    }

    function third() {
        var d = 'John';
        console.log(a + b + c + d);
    //    console.log(a + d);
    }




///////////////////////////////////////
// Lecture: The this keyword

//console.log(this);    //window


    calculateAge(1985);

    function calculateAge(year) {
        console.log(2016 - year);   //31    
        console.log(this);      //window
    }


var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);  //john
        console.log(2016 - this.yearOfBirth);
        
//        function innerFunction() {
//            console.log(this);  //window because when a regular function code happens then the default object is the window object
//        }
//        innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;  //METHOD BORROWING
mike.calculateAge();
























