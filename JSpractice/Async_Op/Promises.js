//Using then catch

const promise1 = new Promise(function (res, rej) {

    setTimeout(function () {

        const error = 0

        if (!error) {
            console.log("This is promise1, and it is getting executed")
            res({username: "Mohit", aim: "Paisa kamana" })
        }

        else {
            rej('Error something went wrong')
        }

    }, 2000)

})

promise1.then(function (name) {
    return name.username
}).then((name) => {
    console.log(name)
}).catch(function (err) {
    console.log(err)
})



//Using try catch
const promise2 = new Promise(function (res, rej) {

    setTimeout(function () {

        const error = 0

        if (!error) {
            console.log("This is promise2, and it is getting executed")
            res({ username: "Mohit", aim: "Paisa kamana" })
        }

        else {
            rej('Error something went wrong')
        }

    }, 2000)

})

async function consumepromise2() {

    try {

        const response = await promise2
        console.log(response)

    } catch (error) {

    }

}

consumepromise2()


//+++++++++++++++++++++++++


async function fetchwithTrycatch() {

    try {
        const res = await fetch('https://randomuser.me/api/')
        const data = await res.json()
        console.log(data)
    } 
    catch (error) {
console.log(error)
    }

}


fetchwithTrycatch()