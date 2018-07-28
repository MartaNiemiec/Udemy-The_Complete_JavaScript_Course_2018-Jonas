/***************************************************************
* VARIABLES AND DATA TYPES
*/


    var name = 'John';
    console.log(name);

    var lastName = 'Smith';
    console.log(lastName);

    var age = 26;
    console.log(age);

    var fullAge = true;
    console.log(fullAge);

    var job;
    console.log(job);

    // VARIABLE NAMING RULES
    var _3years = 3;    // var name cant start only with letter, "_" or "$"
    var johnMark = 'John and Mark';
    var if = 23;      //we can't use reserved JS keywords as var names




/***************************************************************
* VARIABLES MUTATION AND TYPE COERCION
*/

    var firstName = 'John';
    var age = 28;

    // TYPE COERCION
    console.log(firstName + ' ' + age); // John 28 = string
    //console.log(age + age);  // 52 = number

    var job, isMarried;    //undefined variables

    console.log(job);   //undefined

    job = 'teacher';
    isMarried = false;

    console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he marrier? ' + isMarried + '.');

    // VARIABLE MUTATION - change the value of the variable
    age = 'twenty eight';
    job = 'driver';

    alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he marrier? ' + isMarried + '.');


    var lastName = prompt('What is his last name?');   // PROMPT box is one of three popup boxes like ALERT box and CONFIRM box 
    console.log(firstName + ' ' + lastName);



/***************************************************************
* BASIC OPERATORS
*/ 
    var year, yearJohn, yearMark;
    now = 2018;
    ageJohn = 28;
    ageMark = 33;

    // MATH OPERATORS
    yearJohn = now - ageJohn;
    yearMark = now - ageMark;

    console.log(yearJohn);

    console.log(now + 2);
    console.log(now * 2);
    console.log(now / 10);

    // LOGICAL OPERATORS
    var johnOlder = ageJohn > ageMark;
    console.log(johnOlder);

    // "TYPEOF" OPERATOR
    console.log(typeof johnOlder);  // typeof johnOlder is a boolean (true or false)
    console.log(typeof ageJohn);    // number
    console.log(typeof 'Mark is older than John');  // string
    var x;
    console.log(typeof x);  // undefined



/***************************************************************
* OPERATOR PRECEDENCE
*/ 
    var now = 2018;
    var yearJohn = 1989;
    var fullAge = 18;

    // MULTIPLE OPERATORS
    var isFullAge = now - yearJohn >= fullAge;  // "-" will be executed first and then ">="because has lower precedence witch only 11 // so it's true
    console.log(isFullAge);

    // GROUPING
    var ageJohn = now - yearJohn;
    var ageMark = 35;
    var average = (ageJohn + ageMark) / 2;
    console.log(average);

    // MULTIPLE ASSIGMENTS
    var x, y;
    x = y = (3 + 5) * 4 - 6;    // 8 * 4 - 6 // 32 - 6 // 26
    console.log(x, y);

    // 2 + 4 + 6 from left to right
    // ... = ... from right to left!; so it starts by saying 26 equels Y and then Y equals X

    // MORE OPERATORS
    x *= 2; // x = x * 2;
    console.log(x);
    x += 10; // x = x + 10
    console.log(x);
    x++; // x += 1; // x = x + 1;
    console.log(x);
    x--;
    console.log(x);


    ageJohn = ageMark =  (3 + 5) * 4 - 6;  // level of precedens; the heighest the most important (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
    //aheJohn = ageMark = 26    //...=... - associativity from right to left
    //ageJohn = 26

    ageJohn++;  //the same as  "ageJohn = ageJohn + 1;"
    ageMark *= 2; //ageMark multiply by 2; the same as "ageMark = ageMark * 2;"

    console.log(ageJohn);   
    console.log(ageMark);



/***************************************************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

    var massJohn, massMark, heightJohn, heightMark;

    massJohn = 70;
    heightJohn = 1.75;
    massMark = 78;
    heightMark = 1.8;

    var bmiJohn = massJohn / (heightJohn * heightJohn);
    var bmiMark = massMark / (heightMark * heightMark);
    console.log('John\'s BMI: ' + bmiJohn);
    console.log('Mark\'s BMI: ' + bmiMark);

    var bmiHeigherMark = bmiMark > bmiJohn;
    console.log('Is Mark has heigher BMI than John? ' + bmiHeigherMark);


/***************************************************************
* IF / ELSE STATEMENTS
*/ 

    var firstName= 'John';
    var age = 26;
    var civilStatus = 'single';

    if (civilStatus === 'married') {
        console.log(firstName + ' is married');
    } else {
        console.log(firstName + ' will hopefully marry soon :)');
    }


    var isMarried = true;

    if(isMarried) {
        console.log(firstName + ' is married');
    } else {
        console.log(firstName + ' will hopefully marry soon :)');
    }


    var massJohn, massMark, heightJohn, heightMark;

    massJohn = 70;
    heightJohn = 1.75;
    massMark = 78;
    heightMark = 1.8;

    var bmiJohn = massJohn / (heightJohn * heightJohn);
    var bmiMark = massMark / (heightMark * heightMark);
    console.log('John\'s BMI: ' + bmiJohn);
    console.log('Mark\'s BMI: ' + bmiMark);

    if (bmiMark > bmiJohn) {
        console.log('Mark\'s BMI is heigher than John\'s.')
    } else {
        console.log('John\'s BMI is heigher than Mark\'s.')
    }



    if (23 == "23") {       // JS convert 23 to the string; 23 ang "23" are the same becouse of type coertion
        console.log("Something to print...");
    }



    if (23 === "23") {       // is false because 23 is not the same as "23"
        console.log("Something to print...");
    }


//==	equal to
//===	equal value and equal type




/***************************************************************
* BOOLEAN LOGIC
*/

        /* BASIC BOOBLEAN LOGIC: NOT, AND & OR
            - AND (&&) => true if ALL are true
            - OR (||)  => true if ONE is true
            - NOT (!)  => inverts true/false value
    
            var age = 16;
    
            age >= 20;   // => false
            age < 30;    // => true
            !(age < 30); // => false
    
            age >= 20 && age < 30;  // => false
            age >= 20 || age < 30;  // => true
        */

    var firstName = 'John';
    var age = 31;

    if (age < 13) {
        console.log(firstName + ' is a boy.');
    } else if (age >= 13 && age < 20) {
        console.log(firstName + ' is a teenager.');
    } else if (age >= 20 && age < 30) {
        console.log(firstName + ' is a young man.');
    } else {
        console.log(firstName + ' is a man.');
    }



/***************************************************************
* THE TERNARY OPERATOR AND SWITCH STATEMENTS
*/

    var firstName = 'John';
    var age = 16;

    // TERNARY OPERATOR
    age >= 18 ? console.log(firstName + ' drinks beer.')    //condition , "?" = if block
    : console.log(firstName + ' drinks juice.');    // ":" = else block

    var drink = age >= 18 ? 'beer' : 'juice';
    console.log(drink);
    /*
    if(age >= 18) {
        var drink = "beer";
    } else {
        var drink = "juice";
    }*/


    //SWITCH STATEMENT  


    var job = 'instructor';

    //job = prompt('What does john do?');

    switch (job) {
        case 'teacher':
        case 'instructor':
            console.log('John teaches kids how to code.');
            break;      // brake is needed becouse as soon as we find the correct case then we want to break out of the switch statement and finish it
        case 'driver':
            console.log('John drives a cad in Lisbon.');
            break;
        case 'cop':
            console.log('John helps fight crime.');
            break;
        default:
            console.log('john does something else.');
    }


    age = 15;
    switch (true) {
        case age < 13:
            console.log(firstName + 'is a boy.');
            break;
        case age >= 13 && age < 20:
            console.log(firstName + 'is a teenager.');
            break;
        case age >= 20 && age < 30:
            console.log(firstName + 'is a young man.');
            break;
        default:
            console.log(firstName + ' is a man.');
    }



/***************************************************************
*  TRUTHY AND FALSY VALUES AND EQUALITY OPERATORS
*/

    // FALSY VALUE: undefined, null, 0, '', NaN
    // TRUTHY VALUEST: NOT falsy values

    var height;     // undefined

    height = 23;    // height = ''; empty string then 'Variable has NOT been defined'

    if (height || height === 0) {   // "if (height) {}"  with "height = 0;" says 'Variable has NOT been defined' so we have to add another condition " || height === 0"
        console.log('Variable is defined');
    } else {
        console.log('Variable has NOT been defined');
    }


    // Equality operators
    if (height === '23') {
        console.log('The == operator does type coercion!');
    }

    //==	equal to
    //===	equal value and equal type






/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 
*/


    var averageTeamJohn = (89 + 120 + 103) / 3;
    var averageTeamMike = (116 + 94 + 123) / 3;
    var averageTeamMary = (97 + 134 + 105) / 3;

    console.log('The average score for John\'s team: ' + averageTeamJohn);
    console.log('The average score for Mike\'s team: ' + averageTeamMike);
    console.log('The average score for Mary\'s team: ' + averageTeamMary);

    if (averageTeamJohn > averageTeamMike && averageTeamJohn > averageTeamMary) {
        console.log('The winner is John\'s team with average score of ' + averageTeamJohn + ' points.');
    } else if (averageTeamMike > averageTeamJohn && averageTeamMike > averageTeamMary) {
        console.log('The winner is Mike\'s team with average score of ' + averageTeamMike + ' points.');
    } else if (averageTeamMary > averageTeamJohn && averageTeamMary > averageTeamMike) {
        console.log('The winner is Mary\'s team with average score of ' + averageTeamMary + ' points.');
    } else {
        console.log('There is a draw!');
    }




/***************************************************************
*  FUNCTIONS
*/

    function calculateAge(birthYear) {
        return 2018 - birthYear;
    }

    var ageJohn = calculateAge(1990);
    var ageMike = calculateAge(1948);
    var ageJane = calculateAge(1969);
    console.log(ageJohn, ageMike, ageJane);

    function yearsUntilRetirement(year, firstName) {
        var age = calculateAge(year);
        var retirement = 65 - age;

        if (retirement > 0) {
            console.log(firstName + ' retires in ' + retirement + ' years.')
        } else {
            console.log(firstName + ' is already retired.')
        }

    }

    yearsUntilRetirement(1990, 'John');
    yearsUntilRetirement(1948, 'Mike');
    yearsUntilRetirement(1969, 'Jane');



/***************************************************************
*  FUNCTION STATEMENTS AND EXPRESSIONS
*/

    // FUNCTION DECLARATION
    //  function whatDoYouDo(job, firstName) {}

    // FUNCTION EXPRESSION
    var whatDoYouDo = function(job, firstName) {
        switch(job) {
            case 'teacher':
                return firstName + ' teaches kids how to code.';    //"return" keywords return the value and also immediately finishes the function so it isn't necessary add "break" at the end ot the case
            case 'driver':
                return firstName + ' drives a cab in Lisbon.';
            case 'designer':
                return firstName + ' designs beautiful websites.';
            default:
                return firstName + ' does something else.';
        }
    }

    console.log(whatDoYouDo('teacher', 'John'));
    console.log(whatDoYouDo('designer', 'Jane'));
    console.log(whatDoYouDo('retired', 'Mark'));


//STATEMENTS vs EXPRESSION
// EXPRESSION is a piece of code that always produce a value (eg. 2+3 then JS produse result of 5 / when we call the function eg. whatDoYouDo('teacher', 'John') it returns a value / typeof 23 returns "number")
// STATEMENTS just perform actions, they do things but don't produce immediate results. JavaScript statements often start with a keyword to identify the JavaScript action to be performed. (eg. break, var, debugger, return, switch)


/***************************************************************
*  ARRAYS
*/

    // INITIALIZE NEW ARRAY
    var names = ['John', 'Mark', 'Jane'];   // number in array starts from 0 / so John = 0, Mark = 1...
    var years = new Array(1990, 1969, 1948);

    console.log(names[2]);      // 2 = Jane
    console.log(names.length);      // length of the names array

    // MUTATE ARRAY DATA
    names[1] = 'Ben';   //changing item nr 1 for 'Ben' 
    names[names.length] = 'Mary';   // add new item at the end ot the array (names.lenth = 3)

    // DIFFERENT DATA TYPES
    var john = ['John', 'Smith', 1990, 'designer', false];

    john.push('blue');      // a method adding the element to the end of an array 
    john.unshift('Mr.');    //a method adding the element to the beginning of an array 
    console.log(john);

    john.pop();     //removes the last element from an array
    john.pop();
    john.shift();    //removes the first element from an array
    console.log(john);

    console.log(john.indexOf(23));  // method returns the first index at which a given element can be found in the array, or -1 if it is not present.

    var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
    console.log(isDesigner);



/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 
*/


    function tipcalculator(bill) {
        var percentage;
        if (bill < 50) {
            percentage = .2;
        } else if (bill >= 50 && bill < 200) {
            percentage = .15;
        } else {
            percentage = .1;
        }
        return percentage * bill;
    } 

    //console.log(tipcalculator(100));

    var bills = [124, 48, 268];
    var tips = [tipcalculator(bills[0]),
               tipcalculator(bills[1]),
               tipcalculator(bills[2])];

    var finalValues = [bills[0] + tips[0],
                      bills[1] + tips[1],
                      bills[2] + tips[2]];

    console.log(tips, finalValues);



/***************************************************************
*  OBJECTS AND PROPERTIES  
*/

    // OBJECT LITERAL   (creating an object using {})
    var john = {
        firstName: 'John',  //firstName is the "KEY" and 'John' is the "VALUE"
        lastName: 'Smith',
        birthYear: 1990,
        family: ['Jane', 'Mark', 'Bob', 'Emily'],
        job: 'teacher',
        isMarried: false
    };

    //console.log(john);

    // ACCESS THE OBJECT PROPERTIES ("." dot / [''])
    console.log(john.firstName);    //objectName.keyName and will apperar a value of the key
    console.log(john['lastName']);
    var x = 'birthYear';
    console.log(john[x]);


    // MUTATION
    john.job = "designer";
    john['isMarried'] = true;
    console.log(john);

    // NEW OBJEST SYNTAX (creating an object using "new Object()")
    var jane = new Object();
    jane.firstName = 'Jane';
    jane.birthYear = 1969;
    jane['lastName'] = 'Smith';
    console.log(jane);



/***************************************************************
*  OBJECTS AND METHODS  
*/

    var john = {
        firstName: 'John', 
        lastName: 'Smith',
        birthYear: 1992,
        family: ['Jane', 'Mark', 'Bob', 'Emily'],
        job: 'teacher',
        isMarried: false,
    //    calcAge: function() {
    //        return 2018 - this.birthYear;   // "this" = John (the current object)
    //    }
        calcAge: function() {
            this.age = 2018 - this.birthYear;   
        }
    };

    john.calcAge();
    console.log(john);



/***************************************************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 
*/


    var john = {
        fullName: 'John Smith',
        mass: 92,
        height: 1.95,
        calcBmi: function() {
            this.bmi = this.mass / (this.height * this.height);
            return this.bmi;
        }
    };

    var mark = {
        fullName: 'Mark Miller',
        mass: 78,
        height: 1.69,
        calcBmi: function() {
            this.bmi = this.mass / (this.height * this.height);
            return this.bmi;
        }
    };

    //john.calcBmi();
    //mark.calcBmi();

    var bmiHeigher;

    if (john.calcBmi() > mark.calcBmi()) {
        console.log(john.fullName + ' has heiger BMI of ' + john.bmi);
    } else if (mark.bmi > john.bmi) {
        console.log(mark.fullName + ' has heiger BMI of ' + john.bmi);
    } else {
        console.log(john.name + ' and ' + mark.fullName + ' have the same BMI of ' + john.bmi)
    }

    //console.log(john, mark);


/***************************************************************
* LOOPS AND ITERATION
*/

// FOR LOOP

    for (var i = 0; i < 10; i++) {
        console.log(i);
    }

    // i = 0, 0 < 10 true, log i to console, i++
    // i = 1, 1 < 10 true, log i to the console, i++
    // ...
    // i = 9, 9 < 10 true, log i to the console, i++
    // i = 10, 10 < 10 FALSE, EXIT the loop!

    //for (var i = 1; i < 20; i += 2) {
    //    console.log(i);
    //}


    var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
    for (var i = 0; i < john.length; i++) {
        console.log(john[i]);
    }


// WHILE LOOP

    var i = 0;
    while(i < john.length) {
        console.log(john[i]);
        i++;
    }


    // CONTINUE AND BREAK STATEMENTS
    var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
    for (var i = 0; i < john.length; i++) {
        if (typeof john[i] !== 'string') continue;
        console.log(john[i]);
    }

    for (var i = 0; i < john.length; i++) {
            if (typeof john[i] !== 'string') break;
            console.log(john[i]);
        }


    // LOOPING BACKWARDS
    console.log('--- BACKWARDS LOOP ---');
    for (var i = john.length - 1; i >= 0; i--) {
        console.log(john[i]);
    }




/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK ðŸ˜€
*/


var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        
        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            
            // Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = this.bills[i] + this.tips[i];
        } 
    }
}



var mark = {
    fullName: 'Mike Miller',
    bills: [77, 375, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        
        for (var i = 0; i < this. bills.length; i++) {
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 100) {
                percentage = .2;
            } else if (bill >=100 && bill < 300){
                percentage = .1;
            } else {
                percentage = .25;
            }
            
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + this.tips[i];
        }
    }
}


function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

//Do the calculations
john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);


console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else if (john.average < mark.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
}
















