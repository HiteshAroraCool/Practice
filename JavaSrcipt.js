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
console.log(array[0]); // calling vie index
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
console.log("Local:", local(), output_varible)
console.log(`This variable is called before declaration. 
Reason: This behavior occurs because the declaration (var myVar) is hoisted to the top of its scope, 
but the initialization (myVar = 10) remains in the original location. As a result, when you try to 
access myVar before its actual declaration, it exists but holds the value undefined.`, somthing);
var somthing = 5;
dict = {
    name : "John Doe",
}
dict["name"] = "Luke Scott"
let dict_value = dict["name"]    // dict.name or dict[name]
console.log("Dict value: ", dict_value)
dict["age"] = 15
//delete dict.name; //delete keyword
for (key in dict) {
    console.log(`${key}: ${dict[key]}`)
    }
if (dict.hasOwnProperty('name')) {
    console.log('dict.hasOwnProperty:', dict['name'])
}
else {
    console.log('Not found')
}
var myarr = [0,1,2,3,4,5,6,7,8]
for (let index = 0; index <= myarr.length; index++) {
    console.log(index, myarr[index]);
}
// random will be between 0 (inclusive) and 1 (exclusive).
console.log("Floor round down to whole number:", Math.floor(Math.random() * 20));

console.log(parseInt("19exa1"));

// ternary operator: condition ? statement-if-True : statement-if-False
console.log(1 === 0 ? true : false) === console.log(1 === 0);

let lvariable = 'str' // let dosnt let you declear twic even already decleared variable
lvariable = 'osi'
console.log(lvariable);
const cvariable = 'or' // read only
//cvariable = 'no' error
console.log(cvariable);

const variable_fun = (arr1,arr2=[1,2,3]) => arr1.concat(arr2)
console.log(variable_fun([1,2,3],[4,5,6]));
variable_fun_args = (...args) => args.reduce((acc,arr) => acc.concat(arr)) // this is a rest operator/parameter
console.log(variable_fun_args([1,2,3],[4,5,6]));

// throwback to df.copy(deep=False)
const arr1 = [1,2,3,4]
const arr2 = [...arr1]
arr1[0] = 0
console.log(arr1,arr2);

class space {
    constructor(planet) {
        this.planet = planet;
    }
}
const earth = new space("Earth");
console.log(earth.planet);

// getter and setter
class Thermostate {
    constructor(temp) {
        this._temperature = 5/9 * (temp - 32);
    }
    //getter
    get temperature() {
        return this._temperature
    }
    //setter
    set temperature(updatedTemp) {
        this._temperature = updatedTemp
    }
}

//An instance of a class in JavaScript is created using the 'new' keyword 
const MyInstance = new Thermostate(86) //myInstance = new MyClass(argument1, argument2);
//getter method
let C_temp = MyInstance.temperature
console.log("Get Temperature:", C_temp);
//setter method
MyInstance.temperature = 26
C_temp = MyInstance.temperature
console.log("New Temperture:", C_temp);