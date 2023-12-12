// comment
/* 
comment
*/

// Printing
console.log("J")

// Declare
var variable            // declare thought out the whole program
variable = "My String"  // assigned
variable = 8
let variable_let = "My String" // declare only in within the scope of block
const variable_const = "Does not change" // non mutable. variable_const = 9 error thrown

console.log(variable,variable_let,variable_const)
/****
Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\t	tab
\r	carriage return
\b	backspace
\f	form feed
*****/
var string = "My \"String\" 'this' "
string = `"My 'new' String"`
console.log(string)

