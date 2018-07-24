var tableNo = 3;        //variable table no.
var items = ["Burger", "Pasta", "Coke"];        //variable items

function serveFood(tbNo, items){        // callback function
    console.log("Serving food for items", tbNo, items);     //output
}

function prepareFood(tbNo, items, callback){        //prepare food function
    console.log("Preparing food for items", tbNo, items);       //output
    callback(tbNo, items);      //calling callback function
}

prepareFood(tableNo, items, serveFood);     //calling function