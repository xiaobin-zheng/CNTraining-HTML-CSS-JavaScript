import fetch from "node-fetch";

function getPoetry() {
    fetch('https://v1.jinrishici.com/all.json')
        .then(response => response.json())
        .then(json => console.log(json))
}

async function getPoetryWithAsync() {
    const poetry = await fetch('https://v1.jinrishici.com/all.json')
        .then(response => response.json())
    console.log(poetry)
}

getPoetry()
getPoetryWithAsync()