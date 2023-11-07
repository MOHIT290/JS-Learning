const promise1 = new Promise(function (res, rej) {

    setTimeout(function () {
        console.log("This is promise1, and it is getting executed")
        res()
    }, 2000)

  
})

promise1.then(function () {
    console.log("Promise1 has been resolved")
})