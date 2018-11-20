/*
=============================================================
        BUDGET CONTROLLER 
=============================================================
*/

var budgetController = (function() {    //IIFE that will return an object //an anonymous function
   
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };
    
    
    // Calculate percentage of the expense
    Expense.prototype.calcPercentage = function(totalIncome) {
        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1;
        }
    };
    
    
    //Return percentage of the expense
    Expense.prototype.getPercentage = function() {
        return this.percentage;
    };
    
    
    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    
    var calculateTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(cur) {
            sum += cur.value;
        });  
        
        data.totals[type] = sum;
    };
    
    
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1  // -1 is usually a value that we use to say that somenthing is nonexistent
    };
    
    
    return {
        addItem: function(type, des, val) {
            var newItem, ID;
            // [1 2 3 4 5], next ID = 6
            // [1 2 4 6 8], next ID = 9
            // ID = last ID + 1
            
            // Create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;    // .id = id in Expense or Income constructor/ in allItems was pushed newItem  with ID
            } else {
                ID = 0;
            }
            
            
            // Create ne item based on 'inc' and 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }
            
            // Push it into our data structure
            data.allItems[type].push(newItem);
            
            // Return the new element
            return newItem;
        },
        
        
        deleteItem: function(type, id) {
            var ids, index;
            // id = 6
            // ids = data.allItems[type][id];
            // [1 2 4 6 8]
            // index = 3
            
            ids = data.allItems[type].map(function(current) {   // (function(currentValue/required, index, arr), thisValue/optional) / .map method creates a new array with the results of calling a function for every array element.
                return current.id; 
            });
            
            index = ids.indexOf(id);    // indexOf method returns the index number of the element of the array that we input
            
            if (index !== -1) {
                data.allItems[type].splice(index, 1);   //.splice - remove item/s from the array (starting item's index, number of removing items)
            }
        },
        
        
        calculateBudget: function() {
            
            // Calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');            
            
            // Calculate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp;
            
            // Calculate the percentage of income that we spent
            if (data.totals.inc > 0) {      // without if statement if we put just expenses then the percentage will be "ifinity"
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;   // -1 = nonexistents
            }
           
            //Exps = 100 and inc 300, spent 33.3333% = 100/300 = 0.3333 * 100
        },
        
        
        calculatePercentages: function() {
            /*
            a=20    b=10    c=40
            income=100
            a=20/100=20%
            b=10/100=10%
            c=40/100=40%
            */
             
            data.allItems.exp.forEach(function(cur) {
               cur.calcPercentage(data.totals.inc); 
            });  
        },
        
        
        getPercentages: function() {
            var allPerc = data.allItems.exp.map(function(cur) {
               return cur.getPercentage(); 
            });
            return allPerc;
        },
        
        
        getBudget: function() {
          return {
              budget: data.budget,
              totalInc: data.totals.inc,
              totalExp: data.totals.exp,
              percentage: data.percentage
          }  
        },
        
        
        testing: function() {
            console.log(data);
            
        }
    };

})();   //we invoke the function by adding "()" at the end






/*
=============================================================
        UI CONTROLLER 
=============================================================
*/

var UIController = (function() {
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
        
    };
    
    
    var formatNumber = function(num, type) {
        var numSplit, int, dec, type;
        /*
        + or - before number
        exactly 2 decimal points    -> .toFixed(2)
        comma separating the thousands  ->  .split('.') -> .substr(a, b) + ','      .substr(a, b)
            
        2310.4567 -> + 2,310.46
        2000 -> + 2,000.00
        */
            
        num = Math.abs(num);    // we want just the absolute number / the       is stored i the 'num' / 'num' is overrided
        num = num.toFixed(2);   // a method of the number prototype /       toFixed(digits) method formats a number using fixed-point notation.
            
        numSplit = num.split('.');  //splits the part to the integer part and       decimal part
        int = numSplit[0];  // ineger part
        if(int.length > 3) {
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);      // The substr() method returns the part of a string between the start index and a number of characters after it -> str.substr(start[, length])
            // input 23510 -> output 23,510
        }
            
        dec = numSplit[1];  // decimal part
            
//        type === 'exp' ? sign = '-' : sign = '+';
            
        return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;
    };
    
     
    var nodeListForEach = function(list, callback) {
        for (var i = 0; i < list.length; i++) {
            callback(list[i], i);
        }
    };
    
    
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,    //Will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)  // parseFloat converts a string to a floating number (basically a number with decimals)
            };
        },
        
        
        addListItem: function(obj, type) {  //obj = Income/Expense 
            var html, newHtml, element;  //html = string which has methods like objects
            
            // Create HTML string with placeholder text
            
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;
                
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-circle-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMstrings.expensesContainer;
                
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-circle-outline"></i></button></div></div></div>';
            }
            
            // Replace the placeholder text with some actual data (.replace method)
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);    // newHtml.replace() because html was replaced
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));
            
            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);   //  .insertAdjacentHTML('beforeend',) because we add the newHtml as a last child of the element so as the last element in the list
        },
        
        
        deleteListItem: function(selectorID) {
            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);  // it's not posiible in JS removing an element so we have to select the element which we want to delete, then go up i the DOM tree to the parent element(parentNode) and then we can removeChild by selecting it  
        },
        
        
        clearFields: function() {
            var fields, fieldArr;
            
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);  //return a list
            
        // converting a list to an array
            
            fieldArr = Array.prototype.slice.call(fields);  // Array is the functon constructor for all arrays / a .slice is an array method which return a copy of the array that it's called on / it's possible to pass a list into it and then it will still return an array/ 
            
        // Clearing the fields
            
            fieldArr.forEach(function(current, index, array) {   // anonymous callback function can receive up to 3 arguments  / .forEach(function element, index, array) elemen=elem in the string, index=index of the element in the array, array=alla array with all elements
                current.value = "";
            });
            
        // focusing description field
            
            fieldArr[0].focus();
            
        },
        
        
        displayBudget: function(obj) {
            
            obj.budget > 0 ? type = 'inc' : type = 'exp';
            
            document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');
            
            if (obj.percentage > 0) {
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + "%";
            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = "---";
            }
        },
        
        
        displayPercentages: function(percentages) {
            var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);   //this returns a node list because in the DOMtree, where all of the html elements of our page are stored, each elemet is called a node
            
            nodeListForEach(fields, function(current, index) {
               
                if (percentages[index] > 0) {
                    current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = '---';
                }                
            });    
        },
        
        
        displayMonth: function() {
            var now, months, month, year;
          
            now = new Date();   // empty () = the date of today 
            // var christmas = new Date(2016, 11, 25);  December = 11th month because this is zero based array
            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
            month = now.getMonth();
            
            year = now.getFullYear();
            document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;
        },
        
        
        changedType: function() {
            var fields = document.querySelectorAll(
                DOMstrings.inputType + ',' + 
                DOMstrings.inputDescription + ',' + 
                DOMstrings.inputValue);
            
            nodeListForEach(fields, function(cur) {
               cur.classList.toggle('red-focus'); 
            });
            
            document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
            
        },
        
        
        getDOMstrings: function() {     // this method return/expose private DOMstrings into the public
            return DOMstrings;
        }
    };

})();





/*
=============================================================
        GLOBAL APP CONTROLLER
=============================================================
*/


var controller = (function(budgetCtr, UICtr) {
    
    var setupEventListeners = function() {
        var DOM = UICtr.getDOMstrings();
        
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem); 
    
        document.addEventListener('keypress', function(event) { // "event" = setted event - here it is a 'keypress'
            if (event.keyCode === 13 || event.which === 13) {    //.which is for older browsers
            ctrlAddItem();
            } 
        });
        
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);    // we select .container which is the first element that all of the income and expense items have in common / we set eventListener because we want to do EVENT DELEGATION, which means that instead of adding one EventListener to all of elements that we are interested in, we add them to the container, and then let the event BUBBLING up
        
        document.querySelector(DOM.inputType).addEventListener('change', UICtr.changedType);
    };

    
    var updateBudget = function() {
        
        // 1. Calculate the budget
        budgetCtr.calculateBudget();
        
        // 2. Return the budget
        var budget = budgetCtr.getBudget();
        
        // 3. Display the budget on the UI
        UICtr.displayBudget(budget);
    };
    
    
    var updatePercentage = function() {
      
        // 1. Calculate percentage
        budgetCtr.calculatePercentages();
        
        // 2. Read percetage from the budgetController
        var percentages = budgetCtr.getPercentages();
        
        // 3. Update the UI with the new percentages
        UICtr.displayPercentages(percentages);
    };
    
    
    var ctrlAddItem = function() {
        var input, newItem;
        
        // 1. Get the field input data
        input = UICtr.getInput();
        
        if ( input.description !== "" && !isNaN(input.value) && input.value > 0) {
            // 2. Add the item to the budget controller
            newItem = budgetCtr.addItem(input.type, input.description, input.value);

            // 3. Add the item to the UI
            UICtr.addListItem(newItem, input.type);

            // 4. Clear the fields
            UICtr.clearFields();

            // 5. Calculate and update budget
            updateBudget();
            
            // 6. Calculate and undate percentages
            updatePercentage();
        }
    };
    
    
    var ctrlDeleteItem = function(event) {
        var itemID, splitID, type, ID;
        // Traversing the DOM - it’s the act of selecting an element from another element.
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;  // checking event.target when we click in the website/app1 / we want to go from <i> to the div#income-0 so we have to go up to the fourth parent element(<i> -> button -> div.item__delete -> div.right -> div#income-0) so we have to go 4times to parentNode and then with ".id" at the end we get the id
        if (itemID) {
            
            // string ['inc-1'] -> string.split('-') -> return string ['inc', '1']
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);   //The parseInt() function converts a string to the integer
            
            // 1. Delete the item from the data structure       
            budgetCtr.deleteItem(type, ID);
            
            // 2. Delete the item from the UI
            UIController.deleteListItem(itemID);
            
            // 3. Update and show the new budget
            updateBudget();
            
            // 4. Calculate and undate percentages
            updatePercentage();
        }
    };
    
    
    return {
        init: function() {
            console.log('App has started');
            UICtr.displayMonth();
            UICtr.displayBudget({
              budget: 0,
              totalInc: 0,
              totalExp: 0,
              percentage: -1
          });
            setupEventListeners();
        }
    }

})(budgetController, UIController);


controller.init();





























