const arr = [2, 4, 6, 8, 10, 12, 14]

arr.forEach((item) => console.log(item))

const arrofobj = [

    {
        city: "Kota",
        state: "Rajasthan"

    },
    {
        city: "Jaipur",
        state: "Rajasthan"
    },

    {
        city: "Agra",
        state: "UP"
    }
]
const res = arrofobj.filter((item) => {
    return item["state"] === "Rajasthan"
}
)

console.log(res)

