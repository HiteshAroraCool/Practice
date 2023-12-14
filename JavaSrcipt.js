// Documentation: https://devdocs.io/javascript/
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

Stringlength = string.length

console.log('Length of String is =', Stringlength, string[5]) // [5:10] not working

function fun(string) {
    console.log(string)
}
fun(string)
fun(array) // if called before declear 'undefined' is output not an error
var array = ['this', 1, ['nested', 'array']]
array.push(['new','something'])
fun(array)
array.pop()
fun(array)
array.shift()
array.unshift(5)
fun(array)
Without_var_keyword = 5
console.log("This language makes the rule but don't enforce them ", Without_var_keyword)
function fun1(no_params_needed) {
    output = ""  // if 'var' before varible is written, it's local scope without it's global
    if (typeof Without_var_keyword != "undefined") {
        Without_var_keyword += 10
        Without_var_keyword += " let's see "
        Without_var_keyword += 10
        output += Without_var_keyword
    } else {
        console.log("We can delcear global varible inside the function. WHAT!")
    }
    //console.log(output)
    return output
}
fun1()
console.log(output)

// local varible takes precedent over global varible
var output_varible = "T-Shirt"
function local(new_varible) {
    const output_varible = "Sweater"
    return output_varible
}
console.log();("Local:", local(), output_varible)