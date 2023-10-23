function add2numbers(n1)
{

    if(n1===undefined)
    {
        return `Please enter your name`
    }

return `Hello! Mohit ${n1}`

}

console.log(add2numbers("Kaushik"))

//Rest operator 
function calculateCartPrice(...prices){

return prices
}

console.log(calculateCartPrice(200,5000,5432,1000))

const user={

name:"Mohit",
fees:200000

}

function handleobject(obj){

    console.log(`User name is ${obj["name"]} and his 
    fees of the program is Rs${obj["fees"].toLocaleString("en-IN")}`)

}


handleobject(user)