//Map
const map = new Map()

map.set("JS", "JavaScript")
map.set("fb", "facebook")

for (const [key, val] of map) {
    console.log(key + ":-" + val)
}

// +++++  Map cannot be used with forin Loop ++++++++++++++++

//Array
const programming = ["js", "C++", "Ruby", "JAVA", "python", "react"]

for (const key of programming) {
    console.log(key)
}

for (const key in programming) {
    console.log(`Value at index ${key} is ${programming[key]}`)
}


// Object
const user = {

    city: "Kota",
    state: "Rajasthan"

}

// for (const i in user) {
//     console.log(`key is ${i} and value is ${user[i]}`)
// }


function printme(item) {
    console.log(`One of item names is ${item}`)
}

programming.forEach(printme);


const arrofobj = [
    {
        city: "Kota",
        state: "Rajasthan"

    },
    {
        city: "Jaipur",
        state: "Rajasthan"

    }
]

arrofobj.forEach((item) => {

    for (const key in item) {

        console.log(`Key is ${key} and value is ${item[key]}`)

    }
})




