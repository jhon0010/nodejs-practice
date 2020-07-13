



let userTuple: [number, string]

userTuple = [1, "Jhon"]

console.log("userName", userTuple[1])

let userTupleArray : [number, string][] = []
userTupleArray.push(userTuple)


console.log("User", userTuple)


// ---------- Enums

enum Countries {
    Colombia = "col",
    Venezuela = "ven",
    Chile = "cl"
}


enum Cities {
    Bogota = 0,
    Medellin,
    Armenia
}

// console.log("Country", Countries['col'])  Error
console.log("Country", Countries.Chile)
console.log("City", Cities.Medellin) 





// ------ Type Unions

let userId : number | string; // the variables here could be number or string

userId = 1;
userId = "1"

function getUser(is: number|string) { // you also can receive differents types of parameter
}
getUser("1")
getUser(1)

// alias de tipos

type isUser = number | string; 
type userName = string;

function username() : userName {
    return "Jhon";
}

// TIPOS LITERALES

type SquareSizes = "100x100" | "500x500" | "900x900"
// al intentar asignar otros valores "100x200" el compilador detecta error 
let size:SquareSizes = "100x100" 


// functions with optional parameters
 function getOrders(orderId: number , name?: string) { // just add ? to the optional param

 }



 interface Picture {
     readonly id: number|string,
     tittle: string
     sex? : string,
 }

 let pic: Picture = {id:1,tittle : "Jhon"}
 let picWithSex: Picture = {id:"2",tittle : "Jhon", sex: "Male"}

