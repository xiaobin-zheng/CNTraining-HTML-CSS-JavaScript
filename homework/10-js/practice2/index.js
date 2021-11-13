const RED = () => {
    new Promise((resolve, reject) => {
        console.log('RED...')
        setTimeout(function() {
            resolve(YELLOW())
        }, 1000)
    })
}
const YELLOW = () => {
    new Promise((resolve, reject) => {
        console.log('YELLOW...')
        setTimeout(function() {
            resolve(GREEN())
        }, 1000)
    })
}
const GREEN = () => {
    new Promise((resolve, reject) => {
        console.log('GREEN...')
        setTimeout(function() {
            resolve(RED())
        }, 1000)
    })
}

RED()