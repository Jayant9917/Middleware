// Fetch is an internal library of node js
// Fetch is a native browser API
// Fetch is a promise based library
// Fetch is a lightweight library



/*
function main(){
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(async response => {
        const data = await response.json();
        console.log(data);
        // await response.tect();
    })
}
main();
*/


async function main(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const data = await response.json();
        console.log(data);
        // await response.tect();
}

main();

