function calculator (x, y, operator){
    switch(operator){
        case "+":
            return x+y
        case "-":
            return x-y
        case "*":
            return x*y
        case "/":
            return x/y
        default:
            return true
    }
}

let res = calculator(5,7,"*")
console.log("Res:",res)