//Jeshua Abraham Perez Diaz TDSM4A
//Create a function to print a staircase
//ecample
//createStaircase(3) should print
//  # 
// ##
//###

function printStair(n) {
    //For loop to print the stairs
    for (let i = 1; i <= n; i++) {
        console.log("*".repeat(i));
    }
}
printStair(10);
